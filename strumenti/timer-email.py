#!/usr/bin/env python3
"""Disegna sfondo e cifre del conto alla rovescia delle email (offerta di 24 ore).

Scrive worker/timer-email-dati.json: per ogni tema una tavolozza, lo sfondo e le dieci cifre come indici
della tavolozza, compressi a coppie (valore, ripetizioni). Il Worker (worker/timer-email.mjs) compone i
fotogrammi e scrive la GIF. Va rilanciato solo se cambia la grafica:  python3 strumenti/timer-email.py
"""
import base64, json, pathlib
from PIL import Image, ImageDraw, ImageFont

RADICE = pathlib.Path(__file__).resolve().parent.parent
FONT = '/usr/share/fonts/opentype/inter/'
# Tema in uso: biglietto verde dell'email (scelto da Carmine il 26/11/2026). Il fondo della GIF è il verde del biglietto.
TEMI = {
    'verde': dict(W=600, H=150, caselle=True, fondo=(33, 79, 80), casella=(47, 101, 102), bordo=(70, 124, 124),
                  cifre=(255, 255, 255), etichette=(217, 195, 165), punti=(232, 201, 160), corpo=76, piccolo=19,
                  cella=(62, 82), gruppi=[20, 220, 420], gruppo_w=160, y=6),
}

def rle(valori):
    out, i = bytearray(), 0
    while i < len(valori):
        v, n = valori[i], 1
        while i + n < len(valori) and valori[i + n] == v and n < 255:
            n += 1
        out += bytes([v, n]); i += n
    return base64.b64encode(bytes(out)).decode()


def tema(nome, c):
    W, H, (CW, CH), XS, GW, Y = c['W'], c['H'], c['cella'], c['gruppi'], c['gruppo_w'], c['y']
    cifra = ImageFont.truetype(FONT + ('Inter-Bold.otf' if c['caselle'] else 'Inter-SemiBold.otf'), c['corpo'])
    piccolo = ImageFont.truetype(FONT + 'Inter-SemiBold.otf', c['piccolo'])
    GH = CH + 22 if c['caselle'] else CH            # altezza della casella (o della riga di cifre)
    tavola = Image.new('RGB', (max(W, 10 * CW), H + CH), c['fondo'])
    d = ImageDraw.Draw(tavola)
    for x, testo in zip(XS, ['ORE', 'MINUTI', 'SECONDI'] if c['caselle'] else ['ORE', 'MIN', 'SEC']):
        if c['caselle']:
            d.rounded_rectangle([x, Y, x + GW, Y + GH], 16, fill=c['casella'], outline=c['bordo'], width=2)
        sp = 2 if c['caselle'] else 1.5
        lw = d.textlength(testo, font=piccolo) + sp * (len(testo) - 1)
        cx = x + GW / 2 - lw / 2
        for ch in testo:                   # lettere spaziate, come le etichette delle email
            d.text((cx, Y + GH + (12 if c['caselle'] else 6)), ch, font=piccolo, fill=c['etichette'])
            cx += d.textlength(ch, font=piccolo) + sp
    r = 5 if c['caselle'] else 3
    for i in range(2):
        x = (XS[i] + GW + XS[i + 1]) / 2
        for y in [Y + GH * 0.36, Y + GH * 0.64]:
            d.ellipse([x - r, y - r, x + r, y + r], fill=c['punti'])
    sotto = c.get('casella', c['fondo'])
    for n in range(10):
        x0, y0 = n * CW, H
        d.rectangle([x0, y0, x0 + CW - 1, y0 + CH - 1], fill=sotto)
        s = str(n)
        l, t, rr, b = d.textbbox((0, 0), s, font=cifra)
        d.text((x0 + (CW - (rr - l)) / 2 - l, y0 + (CH - (b - t)) / 2 - t), s, font=cifra, fill=c['cifre'])
    q = tavola.quantize(colors=32, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    tav = q.getpalette()[:96]
    tav += [0] * (96 - len(tav))
    px = q.load()
    q.crop((0, 0, W, H)).convert('RGB').save(f'/tmp/timer-{nome}.png')
    posti = [[x + GW // 2 + dx, Y + (GH - CH) // 2] for x in XS for dx in (-CW, 0)]
    return {
        'w': W, 'h': H, 'cw': CW, 'ch': CH, 'posti': posti, 'tavolozza': tav,
        'sfondo': rle([px[x, y] for y in range(H) for x in range(W)]),
        'cifre': [rle([px[n * CW + x, H + y] for y in range(CH) for x in range(CW)]) for n in range(10)],
    }


dati = {'temi': {n: tema(n, c) for n, c in TEMI.items()}}
(RADICE / 'worker/timer-email-dati.json').write_text(json.dumps(dati, separators=(',', ':')))
print('ok', len(json.dumps(dati)) // 1024, 'KB')
