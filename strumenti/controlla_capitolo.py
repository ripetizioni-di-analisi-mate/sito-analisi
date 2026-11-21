#!/usr/bin/env python3
"""Controllo di un capitolo riscritto. Uso: python3 controlla_capitolo.py <materia> <capitolo>
Confronta il file di lavoro con l'originale (git show HEAD:…) in italiano e in inglese e prova la resa."""
import re, subprocess, sys, collections
REPO = '/home/claude/sito-analisi'
materia, cap = sys.argv[1], sys.argv[2]
err, avv = [], []

def orig(p):
    r = subprocess.run(['git', '-C', REPO, 'show', 'HEAD:' + p], capture_output=True, text=True)
    return r.stdout if r.returncode == 0 else None

def parti(t):
    m = re.match(r'^---\r?\n(.*?)\r?\n---\r?\n', t, flags=re.S)
    return (m.group(1) if m else ''), (t[m.end():] if m else t)

def struttura(corpo):
    titoli = re.findall(r'^## .*$', corpo, flags=re.M)
    ancorati = re.findall(r'^(:{3,4})([a-z]+)\{#([\w-]+) titolo="([^"]*)"\}\s*$', corpo, flags=re.M)
    figure = [f.strip() for f in re.findall(r'^::[a-z]+\{.*\}[ \t]*$', corpo, flags=re.M)]
    aperture = re.findall(r'^:{3,4}([a-z]+)', corpo, flags=re.M)
    return titoli, [(b, i, t) for _, b, i, t in ancorati], figure, aperture

def parole(t):
    return len(t.split())

for lingua, cart in (('IT', 'content'), ('EN', 'content-en')):
    p = f'src/{cart}/teoria/{materia}/{cap}.md'
    o = orig(p)
    try:
        n = open(f'{REPO}/{p}', encoding='utf8').read()
    except FileNotFoundError:
        err.append(f'{lingua}: file mancante {p}'); continue
    if o is None:
        err.append(f'{lingua}: originale non trovato in git'); continue
    fo, co = parti(o); fn, cn = parti(n)
    if fo != fn: err.append(f'{lingua}: frontmatter cambiato')
    to, ao, go, _ = struttura(co); tn, an, gn, apn = struttura(cn)
    if to != tn: err.append(f'{lingua}: titoli ## cambiati o in ordine diverso: {[x for x in to if x not in tn]} / nuovi {[x for x in tn if x not in to]}')
    if [(b, i) for b, i, _ in ao] != [(b, i) for b, i, _ in an]:
        err.append(f'{lingua}: ancore o tipi dei blocchi con ancora cambiati: mancano {[i for _, i, _ in ao if i not in [x[1] for x in an]]}, in più {[i for _, i, _ in an if i not in [x[1] for x in ao]]}, oppure ordine diverso')
    elif ao != an:
        avv.append(f'{lingua}: titoli dei blocchi con ancora cambiati: {[(x[1], x[2], y[2]) for x, y in zip(ao, an) if x != y][:4]}')
    if collections.Counter(go) != collections.Counter(gn):
        err.append(f'{lingua}: righe delle figure diverse dall\'originale (mancano {len(collections.Counter(go) - collections.Counter(gn))}, in più {len(collections.Counter(gn) - collections.Counter(go))})')
    if ':::percorso' in cn: err.append(f'{lingua}: blocco percorso non ammesso')
    if cn.count('$') % 2: err.append(f'{lingua}: numero dispari di $')
    if re.search(r'!\[[^\]]*\]\(|<img|https?://', cn) and not re.search(r'!\[[^\]]*\]\(|<img|https?://', co): err.append(f'{lingua}: immagini o link esterni aggiunti')
    ap = len(re.findall(r'^:{3,4}[a-z]+', cn, flags=re.M)); ch = len(re.findall(r'^:{3,4}\s*$', cn, flags=re.M))
    if ap != ch: err.append(f'{lingua}: blocchi aperti {ap}, chiusi {ch}')
    if materia == 'tolc-s' and 'TOLC-I' in n: err.append(f'{lingua}: compare «TOLC-I» in un file del TOLC-S')
    if materia == 'tolc-i' and 'TOLC-S' in n: err.append(f'{lingua}: compare «TOLC-S» in un file del TOLC-I')
    r = parole(cn) / max(parole(co), 1)
    print(f'{lingua}: parole {parole(co)} -> {parole(cn)} (x{r:.2f}); blocchi {len(apn)}; esempi {apn.count("esempio")}; attenzione {apn.count("attenzione")}; figure {len(gn)}')
    if r > 2.0: avv.append(f'{lingua}: capitolo cresciuto di {r:.2f} volte, oltre il doppio: togliere ripetizioni ed esempi doppi (mai contenuti o definizioni)')
    if lingua == 'EN':
        BR = r'\b(?:centre|colour|metre|metres|litre|litres|kilometre|kilometres|centimetre|centimetres|recognis\w+|summaris\w+|travelled|labelled|modelling|anticlockwise|behaviour|neighbour\w*|favour\w*|vapour)\b'
        AM = r'\b(?:center|color|meter|meters|liter|liters|kilometer|kilometers|centimeter|centimeters|recogniz\w+|summariz\w+|traveled|labeled|modeling|counterclockwise|behavior|neighbor\w*|favor\w*|vapor)\b'
        bo, ao = len(re.findall(BR, co, flags=re.I)), len(re.findall(AM, co, flags=re.I))
        bn, an = len(re.findall(BR, cn, flags=re.I)), len(re.findall(AM, cn, flags=re.I))
        if bo >= ao and an > max(2, ao): avv.append(f'EN: il file esistente usa la grafia britannica, nel nuovo ci sono {an} forme americane')
        if ao > bo and bn > max(2, bo): avv.append(f'EN: il file esistente usa la grafia americana, nel nuovo ci sono {bn} forme britanniche')
    if r < 1.05: avv.append(f'{lingua}: capitolo quasi della stessa lunghezza ({r:.2f}): controllare che definizioni ed esempi ci siano')
    if lingua == 'IT':
        testo = re.sub(r'\$\$.*?\$\$', ' ', cn, flags=re.S); senza = re.sub(r'\$[^$\n]+\$', ' F ', testo)
        P = max(len(senza.split()), 1)
        puo = len(re.findall(r'\b(può|possono|potrebbe|potrebbero)\b', senza.lower()))
        print(f'IT: «può/possono» {1000 * puo / P:.1f} ogni 1000 parole (originale del sito: fra 4 e 15)')
        for nome, rx in [('lineetta lunga', r' — |—'), ('formula «da IA»', r'\b(Immagina|In sintesi|Ricorda che|fondamentale|cruciale|In conclusione)\b'),
                         ('frazione in linea dentro una formula', r'\$[^$\n]*\d\s*/\s*\d[^$\n]*\$'), ('esponente con barra', r'\^\{[^}]*/[^}]*\}'),
                         ('decimale con il punto in una formula', r'\$[^$\n]*\d\.\d[^$\n]*\$'), ('«la parentesi»', r'\bla parentesi\b'), ('tono prescrittivo', r'\b(devi|dovete|ricordati|attenzione a non|non bisogna mai|mai fare)\b')]:
            k = re.findall(rx, cn)
            if k: avv.append(f'IT: {nome}: {len(k)} casi, es. {str(k[0])[:60]}')
        # sigle senza spiegazione vicina
        viste = {}
        for m in re.finditer(r'(?<![\w$\\{])((?:[a-z]{1,2})?[A-Z]{2,6}\d?)(?![\w}])', senza):
            s = m.group(1)
            if s in viste or re.fullmatch(r'[IVXLCDM]+', s): continue
            vic = senza[max(0, m.start() - 90):m.end() + 90]
            viste[s] = bool(re.search(re.escape(s) + r'\**\s*\(|\(\**' + re.escape(s) + r'|cioè|sigla|sta per|indica', vic))
        ns = [s for s, ok in viste.items() if not ok]
        if ns: avv.append(f'IT: sigle da controllare (nome per esteso alla prima comparsa?): {", ".join(ns[:25])}')

# parità IT / EN
try:
    ci = parti(open(f'{REPO}/src/content/teoria/{materia}/{cap}.md', encoding='utf8').read())[1]
    ce = parti(open(f'{REPO}/src/content-en/teoria/{materia}/{cap}.md', encoding='utf8').read())[1]
    for nome, rx in [('blocchi', r'^:{3,4}([a-z]+)'), ('ancore', r'\{#([\w-]+)'), ('formule in evidenza', r'^\$\$\s*$'), ('righe di tabella', r'^\|'), ('titoli ##', r'^## '), ('voci di elenco', r'^\s*(?:[-*]|\d+\.) '), ('citazioni', r'^> ')]:
        a = re.findall(rx, ci, flags=re.M); b = re.findall(rx, ce, flags=re.M)
        if (a != b) if nome in ('blocchi', 'ancore') else (len(a) != len(b)): err.append(f'IT/EN: {nome} diversi ({len(a)} contro {len(b)})')
    if re.search(r'\d\{,\}\d', ce) and cap != 'inglese': avv.append('EN: virgola decimale {,} rimasta nel testo inglese')
except FileNotFoundError:
    pass

files = [f'src/{c}/teoria/{materia}/{cap}.md' for c in ('content', 'content-en')]
r = subprocess.run(['node', 'strumenti/_rendi-tmp.mjs', *files], cwd=REPO, capture_output=True, text=True)
print(r.stdout.strip());
if r.returncode: err.append('resa: errore (vedi sopra) ' + r.stderr[-300:])
r = subprocess.run(['python3', 'strumenti/yamlcheck.py', *files], cwd=REPO, capture_output=True, text=True)
if 'errori: 0' not in r.stdout: err.append('frontmatter YAML: ' + r.stdout[-200:])
for a in avv: print('AVVISO  ', a)
for e in err: print('ERRORE  ', e)
print('ESITO:', 'ERRORI DA CORREGGERE' if err else ('a posto, con avvisi da valutare' if avv else 'a posto'))
sys.exit(1 if err else 0)
