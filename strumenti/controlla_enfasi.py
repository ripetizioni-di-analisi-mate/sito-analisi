# Uso: python3 controlla_enfasi.py <file.md> [<file.md> ...]   (da lanciare nella radice del repository)
# Confronta ogni file con la versione in git HEAD: togliendo * e ** il testo deve essere identico,
# le formule $...$ / $$...$$ identiche, frontmatter e righe di titolo/direttiva identiche.
import re, subprocess, sys
MATH = re.compile(r'\$\$[\s\S]*?\$\$|\$[^$\n]*\$')
def parti(t):
    fm_end = t.index('\n---', 3) + 4 if t.startswith('---') else 0
    corpo = t[fm_end:]
    rigid = [l for l in corpo.split('\n') if l.startswith(('#', ':::', '::', '<div', '</div'))]
    return t[:fm_end], MATH.findall(corpo), rigid, MATH.sub('§', corpo).replace('*', '')
ok = True
for f in sys.argv[1:]:
    nuovo = open(f).read()
    vecchio = subprocess.run(['git', 'show', f'HEAD:{f}'], capture_output=True, text=True).stdout
    a, b = parti(vecchio), parti(nuovo)
    errori = [n for n, x, y in zip(['frontmatter', 'formule', 'righe strutturali', 'testo'], a, b) if x != y]
    stelle = nuovo.count('**') // 2
    if errori: ok = False; print(f'ERRORE {f}: cambiati {", ".join(errori)}')
    else: print(f'ok {f} ({stelle} grassetti)')
sys.exit(0 if ok else 1)
