#!/usr/bin/env python3
"""Verifica completezza e collegamenti dei due corsi di prima superiore.

Eseguire dalla radice: python3 strumenti/verifica-primo-anno.py
Per quiz e formule: node strumenti/verifica-domande.mjs matematica-superiori-1 fisica-superiori-1
Il controllo strutturale non sostituisce il ricalcolo e la revisione didattica.
"""
from pathlib import Path
import re
import yaml

ROOT = Path(__file__).resolve().parents[1]
COURSES = {
    'matematica-superiori-1': [
        'numeri-e-operazioni', 'potenze-proporzioni-percentuali', 'insiemi-e-logica',
        'monomi-e-polinomi', 'prodotti-notevoli', 'scomposizioni',
        'frazioni-algebriche', 'equazioni-primo-grado', 'disequazioni-primo-grado',
        'geometria-piano-triangoli', 'parallele-e-quadrilateri', 'dati-e-statistica',
    ],
    'fisica-superiori-1': [
        'grandezze-e-unita', 'misure-e-incertezze', 'proporzionalita-e-grafici',
        'densita', 'vettori', 'forze', 'equilibrio-punto',
        'equilibrio-corpo-rigido', 'pressione-fluidi', 'archimede-galleggiamento',
    ],
}
errors = []
def check(condition, path, message):
    if not condition:
        errors.append(f'{path.relative_to(ROOT)}: {message}')

def read(path):
    if not path.is_file():
        check(False, path, 'file mancante')
        return {}, ''
    text = path.read_text(encoding='utf-8')
    check(not re.search(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', text), path, 'carattere di controllo nel testo o nelle formule')
    parts = text.split('---', 2)
    try:
        assert len(parts) == 3 and not parts[0].strip()
        front = yaml.safe_load(parts[1])
        assert isinstance(front, dict)
    except Exception as exc:
        check(False, path, f'frontmatter YAML non valido: {exc}')
        return {}, ''
    check(not re.search(r'(?m)^(?:<<<<<<<|=======|>>>>>>>)|\b(?:TODO|FIXME)\b', text), path, 'segnaposto o conflitto')
    return front, parts[2]

for course, topics in COURSES.items():
    theory_dir = ROOT / 'src/content/teoria' / course
    check({p.stem for p in theory_dir.glob('*.md')} == set(topics), theory_dir, 'elenco capitoli inatteso')
    for topic in topics:
        theory = theory_dir / f'{topic}.md'
        front, body = read(theory)
        check(bool(front.get('titolo')) and bool(front.get('sommario')), theory, 'titolo o sommario mancante')
        anchors = re.findall(r'\{#([a-z0-9-]+)\b', body)
        check(len(anchors) == len(set(anchors)), theory, 'ancore duplicate')
        check(len(re.findall(r'^## ', body, re.M)) >= 6, theory, 'meno di sei sezioni di teoria')
        check(':::percorso' in body, theory, 'percorso di apertura mancante')
        for collection, expected in [('svolti', 8), ('dafare', 14), ('domande', 90)]:
            folder = ROOT / 'src/content' / collection / course / topic
            files = list(folder.glob('*.md'))
            check({p.stem for p in files} == {str(n) for n in range(1, expected + 1)}, folder, f'attesi file da 1 a {expected}')
            for path in files:
                data, content = read(path)
                if collection == 'domande':
                    continue
                check(bool(data.get('titolo')), path, 'titolo mancante')
                refs = data.get('teoria', [])
                check(isinstance(refs, list) and bool(refs), path, 'riferimenti alla teoria mancanti')
                if isinstance(refs, list):
                    check(set(refs) <= set(anchors), path, f'ancore inesistenti: {set(refs) - set(anchors)}')
                if collection == 'svolti':
                    check(data.get('gratis') is (int(path.stem) <= 3), path, 'anteprima gratuita non coerente')
                    check(len(re.findall(r'^## Esercizio\s+\d+', content, re.M)) == 3, path, 'attesi tre esercizi svolti')
                else:
                    check(len(re.findall(r'^:::soluzione\s*$', content, re.M)) == 1, path, 'attesa una soluzione finale')
    print(f'{course}: {len(topics)} capitoli; {len(topics)*8} schede svolte; {len(topics)*14} esercizi da fare; {len(topics)*90} quiz attesi.')

if errors:
    print('\n'.join(errors))
    raise SystemExit(f'{len(errors)} errori strutturali.')
print('Completezza dei corsi, frontmatter e collegamenti alla teoria verificati.')
