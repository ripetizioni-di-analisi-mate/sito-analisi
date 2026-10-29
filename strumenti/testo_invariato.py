import re, subprocess, sys
def pulisci(t):
    t='\n'.join(l for l in t.split('\n') if not re.match(r'^::(grafico|venn)\{', l))
    t=t.replace('*','')
    return '\n'.join(l.strip() for l in t.split('\n') if l.strip())
ok=True
for f in sys.argv[1:]:
    old=subprocess.run(['git','show',f'HEAD:{f}'],capture_output=True,text=True).stdout
    if pulisci(old)!=pulisci(open(f).read()):
        ok=False; print('DIVERSO', f)
        import difflib
        for d in list(difflib.unified_diff(pulisci(old).split('\n'), pulisci(open(f).read()).split('\n'), lineterm='', n=0))[2:10]: print('   ', d[:160])
print('tutti identici' if ok else 'ci sono differenze')
