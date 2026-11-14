"""Controllo di somiglianza fra domande di un capitolo.
Uso: python3 strumenti/domande-simili.py <cartella-domande> [soglia]
Confronta ogni domanda 46-90 con tutte le altre (testo senza numeri) e stampa
le coppie con somiglianza alta, più posizioni corrette e conteggi."""
import sys, re, os, difflib, collections

cart = sys.argv[1]
soglia = float(sys.argv[2]) if len(sys.argv) > 2 else 0.72
dafare = cart.replace('/domande/', '/dafare/')

def testo(n):
    p = os.path.join(cart, f'{n}.md')
    s = open(p, encoding='utf8').read()
    m = re.match(r'^---\n(.*?)\n---\n', s, re.S)
    corpo = s[m.end():]
    dom = corpo.split('\n## ')[0]
    q = dom.split('\n- ')[0].strip()
    if not q and n <= 14:
        t = os.path.join(dafare, f'{n}.md')
        if os.path.exists(t):
            q = re.sub(r'^---.*?---', '', open(t, encoding='utf8').read(), flags=re.S)
    return q, m.group(1)

def norm(q):
    q = re.sub(r'::\S+.*', ' ', q)
    q = re.sub(r'\\[a-zA-Z]+', ' ', q)
    q = re.sub(r'[0-9]+([.,{}][0-9]+)?', '#', q)
    q = re.sub(r'[^a-zàèéìòù#]+', ' ', q.lower())
    return q.split()

files = sorted(int(f[:-3]) for f in os.listdir(cart) if re.fullmatch(r'\d+\.md', f))
pos = collections.Counter()
T = {}
for n in files:
    q, fm = testo(n)
    pos[re.search(r'corretta: (\d)', fm).group(1)] += 1
    T[n] = norm(q)
coppie = []
for a in files:
    if a < 46: continue
    for b in files:
        if b >= a: continue
        r = difflib.SequenceMatcher(None, T[a], T[b], autojunk=False).ratio()
        if r >= soglia:
            coppie.append((r, b, a))
coppie.sort(reverse=True)
print(f'{cart}: {len(files)} file, posizioni {dict(sorted(pos.items()))}, coppie simili >= {soglia}: {len(coppie)}')
for r, b, a in coppie[:15]:
    print(f'  {r:.2f}  {b} ~ {a}')
