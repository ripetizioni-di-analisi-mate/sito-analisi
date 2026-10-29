import glob,yaml,re,sys
bad=0
for f in sorted(glob.glob('src/content*/**/*.md',recursive=True)):
    t=open(f).read(); m=re.match(r'---\n(.*?)\n---',t,re.S)
    try: yaml.safe_load(m.group(1))
    except Exception as e: bad+=1; print(f, str(e).splitlines()[0])
print('errori:',bad)
