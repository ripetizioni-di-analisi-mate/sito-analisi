# Unisce le classificazioni degli agenti (/home/claude/sg-classi/<materia>__<capitolo>.json)
# in src/data/studio-guidato-livelli.json e src/data/studio-guidato.mjs (STUDIO_GUIDATO e RIMANDI).
# Uso: python3 .sg/unisci.py materia [materia ...]   (basi descrittive tradotte con .sg/basi-map.json)
import json, os, re, sys, collections
CL = '/home/claude/sg-classi'
M = json.load(open('.sg/rif/materie.json'))
L = json.load(open('src/data/studio-guidato-livelli.json'))
MAPPA = json.load(open('.sg/basi-map.json')) if os.path.exists('.sg/basi-map.json') else {}
ancore = {}
for f in os.listdir('.sg/rif'):
    if f.startswith('ancore-'):
        m = f[7:-4]; cap = None
        for r in open(f'.sg/rif/{f}'):
            r = r.rstrip('\n')
            if r.startswith('## '): cap = r[3:]
            elif r: ancore.setdefault(f'{m}/{cap}', set()).add(r.split('\t')[0])
CONDIVISI = {'analisi-3': ['successioni-e-serie-di-funzioni', 'serie-di-potenze', 'serie-di-fourier']}
errori, descrittive = [], []
blocchi_dip, blocchi_rim = {}, {}

def leggi_rimandi_esistenti():
    s = open('src/data/studio-guidato.mjs').read()
    i = s.index('export const RIMANDI'); blocco = s[i:]
    out = {}
    for k, v in re.findall(r"\n  '([^']+)': \[([\s\S]*?)\n?  \],?", blocco):
        out[k] = re.findall(r"'([^']*)'", v)
    for k, v in re.findall(r"\n  '([^']+)': \[('[^\n]*')\],", blocco):
        out[k] = re.findall(r"'([^']*)'", v)
    return out
RIM_ESISTENTI = leggi_rimandi_esistenti()

for m in sys.argv[1:]:
    ordine = [a for a, _ in M[m]['argomenti']]
    nuove_ab, nuove_dom, righe = {}, {}, {}
    for a in ordine:
        if a in CONDIVISI.get(m, []):
            src = f'analisi-2/{a}'
            nuove_ab[f'{m}/{a}'] = L['abilita'][src]
            for q, v in L['domande']['analisi-2'].items():
                if q.startswith(a + '/'): nuove_dom[q] = v
            rr = []
            for r in RIM_ESISTENTI[src]:
                t, s_, b = r.split('|')
                b = ','.join(re.sub(r'^analisi-2/(%s)#' % '|'.join(CONDIVISI[m]), r'analisi-3/\1#', x) for x in b.split(',') if x)
                rr.append(f'{t}|{s_}|{b}')
            righe[a] = rr
            continue
        p = f'{CL}/{m}__{a}.json'
        if not os.path.exists(p): errori.append(f'manca {p}'); continue
        d = json.load(open(p)); ab = d['abilita']
        nuove_ab[f'{m}/{a}'] = ab
        files = sorted(int(x[:-3]) for x in os.listdir(f'src/content/domande/{m}/{a}') if x.endswith('.md'))
        cont = collections.Counter()
        for n in files:
            v = d['domande'].get(f'{a}/{n}')
            if not v: errori.append(f'{m}/{a}/{n}: senza classificazione'); continue
            if v['abilita'] not in ab or v['livello'] not in (1, 2, 3): errori.append(f'{m}/{a}/{n}: {v}'); continue
            nuove_dom[f'{a}/{n}'] = [v['livello'], ab.index(v['abilita'])]
            cont[(v['abilita'], v['livello'])] += 1
        for nome in ab:
            tot = sum(cont[(nome, l)] for l in (1, 2, 3))
            if tot < 6 or cont[(nome, 2)] < 2 or cont[(nome, 1)] < 1:
                errori.append(f'{m}/{a} «{nome}»: {tot} domande (L1 {cont[(nome,1)]}, L2 {cont[(nome,2)]}, L3 {cont[(nome,3)]})')
        rr = []
        for nome in ab:
            r = d['rimandi'].get(nome) or {}
            t = r.get('teoria', [])
            for x in t:
                if x not in ancore.get(f'{m}/{a}', ()): errori.append(f'{m}/{a} «{nome}»: ancora {x} inesistente')
            if not t: errori.append(f'{m}/{a} «{nome}»: nessun paragrafo')
            sc = [str(x) for x in r.get('schede', []) if os.path.exists(f'src/content/svolti/{m}/{a}/{x}.md')]
            basi = []
            for b in r.get('basi', []):
                b = b.strip()
                if ':' in b and '#' not in b.split(':')[0]:
                    if b in MAPPA:
                        if MAPPA[b]: basi.append(MAPPA[b])
                    else: descrittive.append((f'{m}/{a}', nome, b))
                else:
                    k = b.split()[0]
                    basi.append(k)
            rr.append(f"{','.join(t)}|{','.join(sc)}|{','.join(dict.fromkeys(basi))}")
        righe[a] = rr
    # basi nei capitoli condivisi (Analisi 2 → Analisi 3): restano dentro la materia acquistata
    if m in CONDIVISI:
        rx = re.compile(r'analisi-2/(%s)#' % '|'.join(CONDIVISI[m]))
        righe = {a: [rx.sub(m + r'/\1#', r) for r in rr] for a, rr in righe.items()}
    # controllo delle basi con chiave
    tutte_ab = dict(L['abilita']); tutte_ab.update(nuove_ab)
    for a, rr in righe.items():
        for i, r in enumerate(rr):
            for b in filter(None, r.split('|')[2].split(',')):
                ma, _, idx = b.partition('#')
                if ma not in tutte_ab or not idx.isdigit() or int(idx) >= len(tutte_ab[ma]): errori.append(f'{m}/{a}#{i}: base {b} inesistente')
                if b == f'{m}/{a}#{i}': errori.append(f'{m}/{a}#{i}: base uguale all\'abilità')
    # dipendenze per capitolo (solo informative nel motore v2; l'ordine delle chiavi è l'ordine del test)
    dip = {}
    for a in ordine:
        interni, basi = [], []
        for r in righe.get(a, []):
            for b in filter(None, r.split('|')[2].split(',')):
                ma = b.split('#')[0]; mm, aa = ma.split('/')
                if mm == m:
                    if aa != a and aa not in interni: interni.append(aa)
                else:
                    x = aa if mm == 'precorso' else ma
                    if x not in basi: basi.append(x)
        dip[a] = (interni, basi)
    L['abilita'].update(nuove_ab)
    L['domande'][m] = nuove_dom
    q = lambda s: "'" + s.replace("'", "\\'") + "'"
    blocchi_dip[m] = '\n'.join([f"  {q(m)}: {{", '    dipendenze: {'] + [f"      {q(a)}: {{ interni: [{', '.join(map(q, i))}], basi: [{', '.join(map(q, b))}] }}," for a, (i, b) in dip.items()] + ['    },', '  },'])
    blocchi_rim[m] = '\n'.join(f"  {q(m + '/' + a)}: [\n" + '\n'.join(f'    {q(r)},' for r in rr) + '\n  ],' for a, rr in righe.items())
    print(f'{m}: {len(nuove_ab)} capitoli, {sum(len(v) for v in nuove_ab.values())} abilità, {len(nuove_dom)} domande')

if descrittive:
    print('BASI DESCRITTIVE DA TRADURRE in .sg/basi-map.json:')
    for c, n, b in descrittive: print(f'  {c} «{n}»: {b}')
if errori:
    print('ERRORI:'); print('\n'.join('  ' + e for e in errori))
if errori or descrittive: sys.exit(1)

open('src/data/studio-guidato-livelli.json', 'w').write(json.dumps(L, ensure_ascii=False, separators=(',', ':')) + '\n')
s = open('src/data/studio-guidato.mjs').read()
for m in sys.argv[1:]:
    s = re.sub(r'\n  // <<sg:%s>>[\s\S]*?// <</sg:%s>>' % (m, m), '', s)
i = s.index('export const STUDIO_GUIDATO'); j = s.index('\n};', i)
nota = '  // Classificazione del 14/11/2026 (brief istruzioni-agenti/brief-studio-guidato-materia.md), generata da .sg/unisci.py.'
s = s[:j] + ''.join(f'\n  // <<sg:{m}>>\n{nota}\n{blocchi_dip[m]}\n  // <</sg:{m}>>' for m in sys.argv[1:]) + s[j:]
i = s.index('export const RIMANDI'); j = s.index('\n};', i)
s = s[:j] + ''.join(f'\n  // <<sg:{m}>>\n{blocchi_rim[m]}\n  // <</sg:{m}>>' for m in sys.argv[1:]) + s[j:]
open('src/data/studio-guidato.mjs', 'w').write(s)
print('scritto')
