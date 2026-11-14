# Controllo delle domande a tempo ripetitive (14/11/2026, richiesta di Carmine: «prima controlla che le domande
# non siano inutilmente ripetitive, altrimenti sono da fare per bene»).
# Per ogni materia conta le «situazioni» diverse: due domande dello stesso capitolo sono la stessa situazione se,
# tolti i numeri, l'inizio del testo (160 caratteri) è simile almeno all'80%. Una variante numerica (stesso
# esercizio con altri dati, o stessa situazione con la formula inversa) non conta come situazione nuova.
# Uso: python3 strumenti/domande-ripetitive.py analisi-1 statica …   (dalla radice del repository)
# Riferimento del 14/11/2026: Logica per concorsi e Analisi 3 ≈ 95% di situazioni diverse anche nelle domande
# 46-90; Analisi 1, Fisica 1, Fisica 2, Statica, Algebra lineare e Matematica generale ≈ 25% nelle domande 46-90
# (famiglie di 4-5 varianti); Scienza delle costruzioni ≈ 55% in tutto il capitolo.
import os, re, sys
from difflib import SequenceMatcher

def testo(m, a, n):
    s = open(f'src/content/domande/{m}/{a}/{n}.md').read()
    s = re.sub(r'^---[\s\S]*?\n---\n', '', s).split('## Spiegazione')[0]
    s = re.split(r'\n\s*(?:- |\* |1\. )', s, maxsplit=1)[0].strip()
    if len(s) < 15 and os.path.exists(f'src/content/dafare/{m}/{a}/{n}.md'):
        s = re.sub(r'^---[\s\S]*?\n---\n', '', open(f'src/content/dafare/{m}/{a}/{n}.md').read())
    return re.sub(r'\s+', ' ', re.sub(r'\d+(?:[.,]\d+|\{,\}\d+)*', '#', s)).lower()[:160]

def situazioni(testi):
    viste = []
    for t in testi:
        if not any(SequenceMatcher(None, t, v, autojunk=False).ratio() >= 0.8 for v in viste): viste.append(t)
    return len(viste)

for m in sys.argv[1:]:
    capitoli = sorted(os.listdir(f'src/content/domande/{m}'))
    righe = []
    for a in capitoli:
        nn = sorted(int(f[:-3]) for f in os.listdir(f'src/content/domande/{m}/{a}') if f.endswith('.md'))
        prima = [n for n in nn if n <= 45]; dopo = [n for n in nn if n > 45]
        righe.append((a, situazioni([testo(m, a, n) for n in prima]), len(prima), situazioni([testo(m, a, n) for n in dopo]), len(dopo)))
    p = sum(r[1] for r in righe) / max(1, sum(r[2] for r in righe)); d = sum(r[3] for r in righe) / max(1, sum(r[4] for r in righe))
    peggiori = sorted(righe, key=lambda r: (r[1] + r[3]) / max(1, r[2] + r[4]))[:3]
    print(f"{m:28s} domande 1-45: {p:4.0%} situazioni diverse · 46-90: {d:4.0%} · capitoli più ripetitivi: " +
          ', '.join(f'{a} ({s1 + s2}/{n1 + n2})' for a, s1, n1, s2, n2 in peggiori))
