import re, glob
for f in glob.glob('src/content*/**/*.md', recursive=True):
    for n, l in enumerate(open(f), 1):
        if not re.match(r'^::(grafico|venn)\{', l): continue
        m = re.search(r'titolo="([^"]*)"', l)
        if not m: continue
        t = re.sub(r'\$[^$]*\$', '', m.group(1))
        if '/' in t or re.search(r'\d,\d', t) or '^' in t:
            print(f'{f}:{n} | {m.group(1)[:120]}')
