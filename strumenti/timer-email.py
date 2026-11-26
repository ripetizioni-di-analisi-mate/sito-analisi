#!/usr/bin/env python3
"""Disegna sfondo e cifre del conto alla rovescia delle email (offerta di 24 ore).

Scrive worker/timer-email-dati.json: tavolozza comune, sfondo e cifre come indici della tavolozza,
compressi a coppie (valore, ripetizioni). Il Worker (worker/timer-email.mjs) compone i fotogrammi
e scrive la GIF. Va rilanciato solo se cambia la grafica:  python3 strumenti/timer-email.py
"""
import base64, json, pathlib
from PIL import Image, ImageDraw, ImageFont

RADICE = pathlib.Path(__file__).resolve().parent.parent
W, H = 600, 150                      # disegno a doppia risoluzione: nell'email è 300 × 75
CASELLA_W, CASELLA_H, CASELLA_Y = 160, 104, 6
XS = [20, 220, 420]
CELLA_W, CELLA_H = 62, 82
FONDO, CASELLA, BORDO = (255, 255, 255), (243, 236, 226), (223, 206, 183)
CIFRE, ETICHETTE = (87, 67, 46), (120, 87, 53)
cifra = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Bold.otf', 76)
piccolo = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', 19)

# Tavola unica: sfondo in alto, sotto le dieci cifre sul colore della casella.
tavola = Image.new('RGB', (max(W, 10 * CELLA_W), H + CELLA_H), FONDO)
d = ImageDraw.Draw(tavola)
for x, nome in zip(XS, ['ORE', 'MINUTI', 'SECONDI']):
    d.rounded_rectangle([x, CASELLA_Y, x + CASELLA_W, CASELLA_Y + CASELLA_H], 16, fill=CASELLA, outline=BORDO, width=2)
    lw = d.textlength(nome, font=piccolo) + 2 * (len(nome) - 1)
    cx = x + CASELLA_W / 2 - lw / 2
    for ch in nome:                   # lettere spaziate, come le etichette delle email
        d.text((cx, CASELLA_Y + CASELLA_H + 12), ch, font=piccolo, fill=ETICHETTE)
        cx += d.textlength(ch, font=piccolo) + 2
for x in [XS[0] + CASELLA_W + 20, XS[1] + CASELLA_W + 20]:
    for y in [CASELLA_Y + 36, CASELLA_Y + 64]:
        d.ellipse([x - 5, y - 5, x + 5, y + 5], fill=ETICHETTE)
for n in range(10):
    x0, y0 = n * CELLA_W, H
    d.rectangle([x0, y0, x0 + CELLA_W - 1, y0 + CELLA_H - 1], fill=CASELLA)
    s = str(n)
    l, t, r, b = d.textbbox((0, 0), s, font=cifra)
    d.text((x0 + (CELLA_W - (r - l)) / 2 - l, y0 + (CELLA_H - (b - t)) / 2 - t), s, font=cifra, fill=CIFRE)

q = tavola.quantize(colors=32, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
tav = q.getpalette()[:96]
tav += [0] * (96 - len(tav))
px = q.load()

def rle(valori):
    out, i = bytearray(), 0
    while i < len(valori):
        v, n = valori[i], 1
        while i + n < len(valori) and valori[i + n] == v and n < 255:
            n += 1
        out += bytes([v, n]); i += n
    return base64.b64encode(bytes(out)).decode()

sfondo = [px[x, y] for y in range(H) for x in range(W)]
cifre = [rle([px[n * CELLA_W + x, H + y] for y in range(CELLA_H) for x in range(CELLA_W)]) for n in range(10)]
# posizioni delle sei cifre (sinistra, alto), due per casella
posti = [[x + CASELLA_W // 2 + dx, CASELLA_Y + (CASELLA_H - CELLA_H) // 2] for x in XS for dx in (-CELLA_W, 0)]
dati = {'w': W, 'h': H, 'cw': CELLA_W, 'ch': CELLA_H, 'tavolozza': tav, 'sfondo': rle(sfondo), 'cifre': cifre, 'posti': posti}
(RADICE / 'worker/timer-email-dati.json').write_text(json.dumps(dati, separators=(',', ':')))
q.crop((0, 0, W, H)).convert('RGB').save('/tmp/timer-anteprima.png')
print('ok', len(json.dumps(dati)) // 1024, 'KB')
