// Genera il PDF dei formulari dalla pagina /formulari/<materia>/stampa del sito costruito in dist/.
// Uso: node scripts/pdf-formulari.mjs precorso analisi-1 analisi-2   (richiede dist/ costruita e python3 con playwright)
// Con la variabile LINGUA=en genera i PDF inglesi da /en/formulari/<materia>/stampa in public/pdf/formulari/en/.
// Se Playwright non ha un suo Chromium, usa Chrome di sistema (variabile CHROME, predefinita /usr/bin/google-chrome).
import { execFileSync } from 'node:child_process';
const materie = process.argv.slice(2);

const py = `
import sys, os, http.server, threading, functools
from playwright.sync_api import sync_playwright
H=functools.partial(http.server.SimpleHTTPRequestHandler, directory='dist')
srv=http.server.ThreadingHTTPServer(('127.0.0.1',8792),H); threading.Thread(target=srv.serve_forever,daemon=True).start()
chrome=os.environ.get('CHROME','/usr/bin/google-chrome')
with sync_playwright() as p:
    try: b=p.chromium.launch()
    except Exception: b=p.chromium.launch(executable_path=chrome, args=['--no-sandbox'])
    pg=b.new_page()
    en = os.environ.get('LINGUA') == 'en'
    cartella = 'public/pdf/formulari/en' if en else 'public/pdf/formulari'
    os.makedirs(cartella, exist_ok=True)
    for m in sys.argv[1:]:
        pg.goto(f'http://127.0.0.1:8792/{"en/" if en else ""}formulari/{m}/stampa.html'); pg.wait_for_timeout(800)
        pg.emulate_media(media='print')
        titolo = pg.title().split(' · ')[0]
        pg.pdf(path=f'{cartella}/{m}.pdf', format='A4', margin={'top':'16mm','bottom':'16mm','left':'14mm','right':'14mm'}, print_background=True,
               display_header_footer=True, header_template='<span></span>',
               footer_template='<div style="font-size:9px;color:#5a6664;width:100%;text-align:center;font-family:sans-serif">'+titolo+' · ripetizionidianalisi.com · '+('page' if en else 'pagina')+' <span class="pageNumber"></span> '+('of' if en else 'di')+' <span class="totalPages"></span></div>')
        print('pdf', m)
    b.close()
srv.shutdown()
`;
execFileSync('python3', ['-c', py, ...materie], { stdio: 'inherit' });
