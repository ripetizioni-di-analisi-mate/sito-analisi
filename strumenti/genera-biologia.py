"""Genera schede e quiz dal banco revisionabile di Biologia; non modifica la teoria."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
MATERIA = 'biologia-semestre-filtro'
SCHEDE = {
    'organizzazione-biologica': ['Teoria cellulare e omeostasi', 'Domini e parentele evolutive', 'Strutture dei virioni', 'Cicli dei batteriofagi', 'Strutture batteriche e Gram', 'Trasferimenti orizzontali di DNA', 'Endosimbiosi e differenziamento', 'Riserve e strutture proteiche', 'Catalisi e fosforilazioni', 'Polarità e componenti degli acidi nucleici'],
    'genoma-cromatina': ['Conteggi di cromosomi e cromatidi', 'Centromeri e telomeri', 'Composizione dei nucleosomi', 'Compattazione e organizzazione cromosomica', 'Stati della cromatina', 'Rimodellamento e accessibilità', 'Regolazioni epigenetiche', 'Famiglie geniche e copie ripetute', 'Ripetizioni in tandem e intersperse', 'Elementi mobili autonomi e non autonomi'],
    'flusso-informazione': ['Replicazione e direzioni di sintesi', 'Elicasi e topoisomerasi', 'Replicazione delle estremità', 'Geni e unità trascrizionali', 'Regolazione dell’operone lac', 'Polimerasi eucariotiche', 'Splicing e isoforme', 'Codice genetico e caricamento dei tRNA', 'Allungamento e terminazione della traduzione', 'Ubiquitina e degradazione proteica'],
    'genetica-mutazioni': ['Effetti delle varianti codificanti', 'Riparazioni del DNA', 'Alleli e relazioni di dominanza', 'Incroci monoibridi', 'Incroci del sistema AB0', 'Pleiotropia ed epistasi', 'Testcross e ricombinanti', 'Penetranza ed espressività', 'Anomalie del numero cromosomico', 'Trasmissioni autosomiche e legate all’X'],
    'strutture-cellulari': ['Orientamento e asimmetria di membrana', 'Pompe e trasporto attivo', 'Osmosi e potenziali', 'Trasporto nucleare e ciclo di Ran', 'Energetica e compartimenti mitocondriali', 'Importazione mitocondriale', 'Funzioni e importazione perossisomiale', 'Ingresso nel reticolo e secrezione', 'Rivestimenti e fusione di vescicole', 'Smistamento lisosomiale e autofagia'],
    'segnalazione-cellulare': ['Componenti della matrice extracellulare', 'Integrine e meccanotrasduzione', 'Giunzioni e collegamenti cellulari', 'Modalità di comunicazione', 'Amplificazione e regolazioni enzimatiche', 'Recettori intracellulari', 'Recettori-canale e gradienti', 'GEF e GAP', 'Messaggeri della via PLC', 'Desensitizzazione e fototrasduzione'],
    'ciclo-cellulare': ['Fasi del ciclo', 'Cicline e complessi CDK', 'Regolazioni di Rb ed E2F', 'p53 e controllo della proliferazione', 'Fuso e cinetocori', 'APC/C e separazione dei cromatidi', 'Meiosi e ricombinazione', 'Gametogenesi umana', 'Staminalità e differenziamento', 'Morfologia apoptotica e caspasi'],
}

def yaml(value):
    return json.dumps(value, ensure_ascii=False)

def scrivi(tipo, slug, n, dati, corpo):
    path = ROOT / 'src/content' / tipo / MATERIA / slug / f'{n}.md'
    path.parent.mkdir(parents=True, exist_ok=True)
    header = '\n'.join(f'{k}: {yaml(v)}' for k, v in dati.items())
    path.write_text(f'---\n{header}\n---\n\n{corpo.strip()}\n')

def carica(slug):
    path = ROOT / 'strumenti/biologia' / f'{slug}.psv'
    righe = [line.split('|') for line in path.read_text().splitlines() if line.strip()]
    assert len(righe) == 45, (slug, len(righe))
    assert all(len(r) == 7 for r in righe), slug
    teoria = (ROOT / 'src/content/teoria' / MATERIA / f'{slug}.md').read_text()
    ancore = set(re.findall(r'\{#([\w-]+)', teoria))
    for ancora, domanda, risposta, *resto in righe:
        assert ancora in ancore, (slug, ancora)
        assert len(set([risposta, *resto[:3]])) == 4, (slug, domanda)
    assert len({r[1] for r in righe}) == 45, slug
    return righe

for slug, titoli in SCHEDE.items():
    righe = carica(slug)
    for n, (ancora, domanda, corretta, a, b, c, motivo) in enumerate(righe, 1):
        opzioni = [corretta, a, b, c]
        pos = (n - 1) % 4
        opzioni = opzioni[-pos:] + opzioni[:-pos] if pos else opzioni
        rimando = f'[Teoria del procedimento](/{MATERIA}/{slug}/teoria#{ancora}).'
        corpo = domanda + '\n\n' + '\n'.join('- ' + x for x in opzioni)
        corpo += '\n\n## Spiegazione\n\n' + motivo + '\n\n' + rimando
        scrivi('domande', slug, n, {'corretta': pos + 1}, corpo)
    # Le prime venti domande costituiscono dieci schede di ragionamento guidato.
    # La traccia con opzioni è separata dallo svolgimento dal processore del sito.
    for n, titolo in enumerate(titoli, 1):
        casi = righe[(n - 1) * 2:n * 2]
        ancore = list(dict.fromkeys(c[0] for c in casi))
        pezzi = []
        for k, (ancora, domanda, corretta, a, b, c, motivo) in enumerate(casi, 1):
            opzioni = [corretta, a, b, c]
            pos = (n + k) % 4
            opzioni = opzioni[pos:] + opzioni[:pos]
            traccia = domanda + '\n\n' + '\n'.join(f'- {lettera}) {x}' for lettera, x in zip('ABCD', opzioni))
            pezzi.append(f'## Esercizio {k}\n\n{traccia}\n\nLa risposta corretta è **{chr(65 + opzioni.index(corretta))}**.\n\n<div class="spiegazione">\n\n{motivo}\n\n</div>')
        scrivi('svolti', slug, n, {'titolo': titolo, 'gratis': n <= 3, 'teoria': ancore, 'parole': [a.replace('-', ' ') for a in ancore]}, '\n\n'.join(pezzi))
    # Quattordici quesiti successivi, con sola risposta finale, per lo studio autonomo.
    for n, (ancora, domanda, corretta, a, b, c, motivo) in enumerate(righe[20:34], 1):
        titolo = f'{ancora.replace("-", " ").capitalize()} · esercizio {n}'
        scrivi('dafare', slug, n, {'titolo': titolo, 'teoria': [ancora], 'parole': [ancora.replace('-', ' ')]}, domanda + '\n\n:::soluzione\n' + corretta + '\n:::')
    print(f'{slug}: 10 schede, 20 casi svolti, 14 esercizi, 45 domande')
