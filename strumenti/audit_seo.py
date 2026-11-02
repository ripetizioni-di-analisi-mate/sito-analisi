#!/usr/bin/env python3
"""Controllo SEO della cartella dist dopo la build.

Uso: python3 strumenti/audit_seo.py [dist]
Controlla su ogni pagina indicizzabile: titolo, descrizione, canonical, h1, hreflang reciproci,
collegamenti interni verso pagine inesistenti, immagini senza alt, dati strutturati leggibili;
poi titoli e descrizioni ripetuti su più pagine e pagine della mappa del sito che non esistono.
Stampa un riassunto e, con --dettagli, gli esempi di ogni problema.
"""
import json, os, re, sys, html
from collections import defaultdict, Counter

DIST = next((a for a in sys.argv[1:] if not a.startswith('--')), 'dist')
DETTAGLI = '--dettagli' in sys.argv
SITO = 'https://ripetizionidianalisi.com'

def percorso_di(f):
    p = '/' + os.path.relpath(f, DIST).replace(os.sep, '/')
    p = re.sub(r'\.html$', '', p)
    p = re.sub(r'/index$', '', p) or '/'
    return p

def esiste(p):
    p = p.split('#')[0].split('?')[0]
    if p in ('', '/'):
        return True
    p = p.rstrip('/')
    base = os.path.join(DIST, p.lstrip('/'))
    return os.path.exists(base) or os.path.exists(base + '.html') or os.path.exists(os.path.join(base, 'index.html'))

pagine = {}
for radice, cartelle, files in os.walk(DIST):
    if os.path.relpath(radice, DIST).split(os.sep)[0] in ('vetrine', 'risorse', 'dati-domande', 'pdf', 'email'):
        continue
    for nome in files:
        if nome.endswith('.html'):
            pagine[percorso_di(os.path.join(radice, nome))] = os.path.join(radice, nome)

problemi = defaultdict(list)
titoli, descrizioni = defaultdict(list), defaultdict(list)
hreflang = {}
lunghezze_t, lunghezze_d = [], []
indicizzabili = 0
link_rotti = Counter()
for p, f in sorted(pagine.items()):
    h = open(f, encoding='utf-8').read()
    testa = h[:h.find('</head>')]
    noindex = bool(re.search(r'<meta name="robots" content="[^"]*noindex', testa))
    if noindex:
        continue
    indicizzabili += 1
    t = re.search(r'<title>(.*?)</title>', testa, re.S)
    t = html.unescape(t.group(1).strip()) if t else ''
    d = re.search(r'<meta name="description" content="([^"]*)"', testa)
    d = html.unescape(d.group(1)) if d else ''
    c = re.search(r'<link rel="canonical" href="([^"]+)"', testa)
    if not t: problemi['senza titolo'].append(p)
    if not d: problemi['senza descrizione'].append(p)
    if not c: problemi['senza canonical'].append(p)
    elif c.group(1) != SITO + (p if p != '/' else '/') and c.group(1) != SITO + p:
        problemi['canonical diverso dall\'indirizzo'].append(f'{p} -> {c.group(1)}')
    titoli[t].append(p); descrizioni[d].append(p)
    lunghezze_t.append(len(t)); lunghezze_d.append(len(d))
    if len(t) > 70: problemi['titolo oltre 70 caratteri'].append(f'{len(t)} {t}')
    if d and len(d) > 180: problemi['descrizione oltre 180 caratteri'].append(f'{len(d)} {p}')
    if d and len(d) < 70: problemi['descrizione sotto 70 caratteri'].append(f'{len(d)} {p}: {d}')
    corpo = h[h.find('<body'):]
    n_h1 = len(re.findall(r'<h1[\s>]', corpo))
    if n_h1 != 1: problemi[f'h1 diversi da uno'].append(f'{p} ({n_h1})')
    for img in re.findall(r'<img\b[^>]*>', corpo):
        if 'alt=' not in img: problemi['immagine senza alt'].append(p); break
    for blocco in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try: json.loads(blocco)
        except Exception: problemi['dati strutturati non validi'].append(p)
    alt = dict(re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"', testa))
    hreflang[p] = alt
    for href in set(re.findall(r'<a [^>]*href="(/[^"]*)"', corpo)):
        if href.startswith('//') or re.search(r'\.(pdf|png|jpg|svg|txt|xml|json)$', href.split('#')[0]):
            continue
        if not esiste(href):
            link_rotti[href] += 1
            if len(problemi['collegamento interno rotto']) < 400:
                problemi['collegamento interno rotto'].append(f'{p} -> {href}')

# hreflang reciproci: se A indica B come altra lingua, B deve indicare A
for p, alt in hreflang.items():
    for lingua, u in alt.items():
        if lingua == 'x-default': continue
        q = u.replace(SITO, '') or '/'
        if q == p: continue
        if q not in hreflang:
            problemi['hreflang verso pagina assente o non indicizzabile'].append(f'{p} -> {q}')
        elif SITO + p not in hreflang[q].values() and not (p == '/' and SITO + '/' in hreflang[q].values()):
            problemi['hreflang non reciproco'].append(f'{p} <-> {q}')

for t, ps in titoli.items():
    if len(ps) > 1: problemi['titolo ripetuto'].append(f'{len(ps)}× {t} ({ps[0]}, {ps[1]})')
for d, ps in descrizioni.items():
    if d and len(ps) > 1: problemi['descrizione ripetuta'].append(f'{len(ps)}× {d[:90]} ({ps[0]}, {ps[1]})')

mappa = os.path.join(DIST, 'sitemap.xml')
if os.path.exists(mappa):
    locs = re.findall(r'<loc>([^<]+)</loc>', open(mappa, encoding='utf-8').read())
    for u in locs:
        q = u.replace(SITO, '') or '/'
        if not esiste(q): problemi['nella mappa ma inesistente'].append(q)
        elif q not in pagine and q != '/': pass
    nella_mappa = {u.replace(SITO, '') or '/' for u in locs}
    for p in hreflang:
        if p not in nella_mappa: problemi['indicizzabile ma non nella mappa'].append(p)
    print(f'mappa del sito: {len(locs)} indirizzi, {sum(1 for _ in re.finditer("<lastmod>", open(mappa).read()))} con data')

print(f'pagine html: {len(pagine)}, indicizzabili: {indicizzabili}')
if lunghezze_t:
    print(f'titoli: media {sum(lunghezze_t)//len(lunghezze_t)} caratteri, max {max(lunghezze_t)}; descrizioni: media {sum(lunghezze_d)//len(lunghezze_d)}, max {max(lunghezze_d)}')
for k, v in sorted(problemi.items(), key=lambda x: -len(x[1])):
    print(f'- {k}: {len(v)}')
    if DETTAGLI:
        for x in v[:8]: print(f'    {x}')
if link_rotti:
    print('collegamenti rotti più frequenti:', link_rotti.most_common(10))
