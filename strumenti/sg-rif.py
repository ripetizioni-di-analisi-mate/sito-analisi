# Studio guidato: file di riferimento per gli agenti (basi disponibili, schede). Prima: npx esbuild src/data/materie.ts --bundle --format=esm --platform=node --outfile=.sg/materie.mjs e scrittura di .sg/rif/materie.json (vedi CLAUDE.md). Uso: python3 strumenti/sg-rif.py <materie…>
import json,os,re,sys
L=json.load(open('src/data/studio-guidato-livelli.json'))
M=json.load(open('.sg/rif/materie.json'))
tit=lambda m,a: dict(M[m]['argomenti']).get(a,a)
out=[f"{k}#{i}\t{n}\t({M[k.split('/')[0]]['nome']} · {tit(*k.split('/'))})" for k,v in L['abilita'].items() for i,n in enumerate(v)]
open('.sg/rif/basi-disponibili.txt','w').write('\n'.join(out)+'\n'); print(len(out),'basi')
for m in sys.argv[1:]:
    r=[]
    for a,t in M[m]['argomenti']:
        d=f'src/content/svolti/{m}/{a}'
        if not os.path.isdir(d): continue
        r.append(f'## {a}  ({t})')
        for f in sorted([x for x in os.listdir(d) if x.endswith('.md')],key=lambda x:int(x[:-3])):
            s=re.search(r'^titolo:\s*(.+)$',open(f'{d}/{f}').read(),re.M)
            r.append(f"{f[:-3]}\t{s.group(1).strip().strip(chr(34)+chr(39)) if s else ''}")
        r.append('')
    open(f'.sg/rif/schede-{m}.txt','w').write('\n'.join(r))
