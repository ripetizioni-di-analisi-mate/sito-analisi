#!/usr/bin/env python3
"""Prepara i file di lavoro per la classificazione degli errori tipici (Studio guidato, P3).

Uso: python3 strumenti/sg-errori-input.py analisi-1 precorso
Scrive .sg/errori-input/<materia>__<capitolo>.json con, per ogni domanda: testo (Markdown; se manca,
la traccia dell'esercizio da fare senza soluzione), le quattro risposte, la corretta, la spiegazione,
livello e abilità dello Studio guidato.
"""
import json, os, re, sys

RADICE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLASSI = json.load(open(os.path.join(RADICE, 'src/data/studio-guidato-livelli.json')))


def frontmatter(t):
    m = re.match(r'^---\n(.*?)\n---\n?', t, re.S)
    return (m.group(1), t[m.end():]) if m else ('', t)


def leggi_domanda(percorso):
    fm, corpo = frontmatter(open(percorso).read())
    corretta = int(re.search(r'corretta:\s*(\d+)', fm).group(1))
    prima, _, spiegazione = corpo.partition('## Spiegazione')
    righe = prima.rstrip().split('\n')
    # Le risposte sono l'ultimo elenco puntato prima della spiegazione.
    scelte, i = [], len(righe) - 1
    while i >= 0 and (righe[i].startswith('- ') or righe[i].startswith('  ') or not righe[i].strip()):
        if righe[i].startswith('- '):
            scelte.insert(0, righe[i][2:].strip())
        elif righe[i].startswith('  ') and scelte:
            scelte[0] += ' ' + righe[i].strip()
        i -= 1
    testo = '\n'.join(righe[: i + 1]).strip()
    return testo, scelte, corretta, spiegazione.strip()


def traccia(materia, cap, n):
    p = os.path.join(RADICE, 'src/content/dafare', materia, cap, f'{n}.md')
    if not os.path.exists(p):
        return ''
    _, corpo = frontmatter(open(p).read())
    return re.sub(r':::soluzione[\s\S]*?\n:::', '', corpo).strip()


def main(materie):
    out = os.path.join(RADICE, '.sg/errori-input')
    os.makedirs(out, exist_ok=True)
    for materia in materie:
        base = os.path.join(RADICE, 'src/content/domande', materia)
        for cap in sorted(os.listdir(base)):
            abilita = CLASSI['abilita'].get(f'{materia}/{cap}', [])
            domande = []
            for f in sorted(os.listdir(os.path.join(base, cap)), key=lambda x: int(x.split('.')[0])):
                n = int(f.split('.')[0])
                testo, scelte, corretta, spieg = leggi_domanda(os.path.join(base, cap, f))
                if len(scelte) != 4:
                    print('ATTENZIONE risposte', materia, cap, n, len(scelte))
                liv, ab = CLASSI['domande'].get(materia, {}).get(f'{cap}/{n}', [None, None])
                domande.append({
                    'id': f'{cap}/{n}', 'testo': testo or traccia(materia, cap, n), 'scelte': scelte,
                    'corretta': corretta, 'spiegazione': spieg,
                    'livello': abs(liv) if liv is not None else None, 'abilita': ab,
                    'nomeAbilita': abilita[ab] if ab is not None and ab < len(abilita) else None,
                })
            json.dump({'materia': materia, 'argomento': cap, 'abilita': abilita, 'domande': domande},
                      open(os.path.join(out, f'{materia}__{cap}.json'), 'w'), ensure_ascii=False, indent=1)
            print(materia, cap, len(domande))


if __name__ == '__main__':
    main(sys.argv[1:])
