// Genera il PDF di ogni argomento dalla pagina /<argomento>/stampa del sito costruito in dist/.
// Uso: node scripts/pdf.mjs analisi-1/limiti [altri]  (richiede dist/ già costruita e python3 con playwright)
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
const argomenti = process.argv.slice(2);

const py = `
import sys, http.server, threading, functools
from playwright.sync_api import sync_playwright
H=functools.partial(http.server.SimpleHTTPRequestHandler, directory='dist')
srv=http.server.ThreadingHTTPServer(('127.0.0.1',8791),H); threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page()
    import os
    for a in sys.argv[1:]:
        os.makedirs(os.path.dirname(f'public/pdf/{a}.pdf'), exist_ok=True)
        pg.goto(f'http://127.0.0.1:8791/{a}/stampa.html'); pg.wait_for_timeout(600)
        pg.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
        pg.emulate_media(media='print')
        pg.pdf(path=f'public/pdf/{a}.pdf', format='A4', margin={'top':'18mm','bottom':'18mm','left':'16mm','right':'16mm'}, print_background=True,
               display_header_footer=True, header_template='<span></span>',
               footer_template='<div style="font-size:9px;color:#5a6664;width:100%;text-align:center;font-family:sans-serif">'+a.replace('/',' · ')+' · pagina <span class="pageNumber"></span> di <span class="totalPages"></span></div>')
        print('pdf', a)
    b.close()
srv.shutdown()
`;
execFileSync('python3', ['-c', py, ...argomenti], { stdio: 'inherit' });
