"""Rigenera il dizionario locale dai file ANPR originali. Richiede openpyxl."""
import argparse
from collections import defaultdict
import csv
import json
import re
from datetime import date, datetime, timedelta
from itertools import groupby
from pathlib import Path

from openpyxl import load_workbook


def leggi_comuni(percorso):
    with percorso.open(encoding="utf-8-sig", newline="") as file:
        for r in csv.DictReader(file):
            codice = r["CODCATASTALE"]
            if re.fullmatch(r"[A-Y][0-9]{3}", codice):
                yield (r["DENOMINAZIONE_IT"], r["SIGLAPROVINCIA"], codice,
                       date.fromisoformat(r["DATAISTITUZIONE"]), date.fromisoformat(r["DATACESSAZIONE"]))


def leggi_stati(percorso, storico):
    with percorso.open("rb") as file:
        archivio = load_workbook(file, read_only=True, data_only=True)
        try:
            osservato = archivio.properties.modified.date()
            righe = iter(archivio["tabella 2"].values)
            campi = next(righe)
            for riga in righe:
                r = dict(zip(campi, riga))
                if r["NASCITA"] != "S" or not re.fullmatch(r"Z[0-9]{3}", r["CODAT"] or ""):
                    continue
                dal, al = (datetime.strptime(r[c][:10], "%d/%m/%Y").date()
                           for c in ("DATAINIZIOVALIDITA", "DATAFINEVALIDITA"))
                codice = r["CODAT"]
                # Il 1900 della tabella ANPR è convenzionale anche per Stati costituiti dopo.
                inizio_storico = next((d for _, d, a in storico[codice] if a == date.max), osservato)
                yield (r["DENOMINAZIONE"], "EE", codice, max(dal, inizio_storico), al, r["DENOMINAZIONEISTAT_EN"] or "")
        finally:
            archivio.close()


def leggi_storico_stati(percorso):
    stati = defaultdict(list)
    testo = percorso.read_text(encoding="utf-8")
    for record in re.findall(r"VALUES\s*\(\s*'((?:[^']|'')*)'\s*\)", testo):
        record = record.replace("''", "'")
        # Tracciato a larghezza fissa della classificazione ministeriale.
        nome, codice = record[93:143].strip(), record[143:147]
        if not nome or not re.fullmatch(r"Z[0-9]{3}", codice):
            raise ValueError(f"Tracciato della classificazione ministeriale non riconosciuto: {codice}")
        dal = datetime.strptime(record[147:157], "%d/%m/%Y").date()
        fine = record[157:167]
        al = date.max if fine == "00/00/0000" else datetime.strptime(fine, "%d/%m/%Y").date()
        stati[codice].append((nome, dal, al))
    if not stati:
        raise ValueError("La classificazione ministeriale non contiene record")
    return stati


def stati_cessati(storico):
    alias = {
        "Z105": "Czechoslovakia", "Z111": "East Germany (DDR, Germania Est)",
        "Z118": "Yugoslavia (Jugoslavia)", "Z135": "Soviet Union (URSS, USSR)", "Z157": "Serbia and Montenegro",
    }
    for codice, periodi in storico.items():
        for nome, dal, al in periodi:
            if al < date.max:
                yield (nome, "EE", codice, dal, al, alias.get(codice, ""))


def compatta_comuni(comuni):
    # Cambi di altri campi ANPR possono generare più record per lo stesso luogo.
    for chiave, gruppo in groupby(sorted(comuni), key=lambda r: r[:3]):
        periodi = iter(gruppo)
        dal, al = next(periodi)[3:]
        for r in periodi:
            nuovo_dal, nuovo_al = r[3:]
            if (nuovo_dal - al) <= timedelta(days=1):
                al = max(al, nuovo_al)
            else:
                yield (*chiave, dal, al)
                dal, al = nuovo_dal, nuovo_al
        yield (*chiave, dal, al)


def scrivi(righe, destinazione):
    dati = []
    for nome, provincia, codice, dal, al, *alias in sorted(righe):
        if not nome or not provincia or dal > al:
            raise ValueError(f"Record ANPR non valido per {codice}")
        riga = [nome, provincia, codice, dal.isoformat(), "" if al == date.max else al.isoformat(), *alias]
        dati.append(json.dumps(riga, ensure_ascii=False, separators=(",", ":")))
    destinazione.write_text("[\n" + ",\n".join(dati) + "\n]\n", encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("comuni_csv", type=Path)
    parser.add_argument("stati_xlsx", type=Path)
    parser.add_argument("stati_storici_sql", type=Path)
    args = parser.parse_args()
    storico = leggi_storico_stati(args.stati_storici_sql)
    righe = [*compatta_comuni(leggi_comuni(args.comuni_csv)), *leggi_stati(args.stati_xlsx, storico),
             *stati_cessati(storico)]
    scrivi(righe, Path(__file__).resolve().parents[1] / "public/dati/luoghi-cf.json")
