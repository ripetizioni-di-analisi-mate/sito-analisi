#!/usr/bin/env python3
"""Sviluppi del cubo: facce opposte e cubi che si possono ottenere.

Uso (dalla radice del repository):
  python3 strumenti/cubo.py ".x..|xxxx|.x.." "A,B,C,D,E,F"
  python3 strumenti/cubo.py ".x..|xxxx|.x.." "A,B,C,D,E,F" C A B

Lo schema è quello di ::figura{tipo="sviluppo"} (righe separate da |, x = faccia, . = vuoto); i nomi delle facce
si danno nell'ordine di lettura dello schema, riga per riga. Lo sviluppo si guarda dal lato del disegno, che resta
all'esterno del cubo. Il programma stampa le coppie di facce opposte e tutte le terne (alto, fronte, destra) visibili
insieme in ::figura{tipo="cubi"}, con il loro verso; con tre nomi in più dice se quel cubo si ottiene dallo sviluppo.
Vale per simboli che restano uguali ruotando di 90 gradi (il verso del disegno sulle facce non è controllato).
"""
import sys

NORMALI = {'U': (0, 0, 1), 'D': (0, 0, -1), 'N': (0, 1, 0), 'S': (0, -1, 0), 'E': (1, 0, 0), 'W': (-1, 0, 0)}
DIREZIONI = {(1, 0): 'E', (-1, 0): 'W', (0, -1): 'N', (0, 1): 'S'}  # (dx, dy) sullo schema, y verso il basso


def rotola(s, verso):
    s = dict(s)
    u, d, n, so, e, w = s['U'], s['D'], s['N'], s['S'], s['E'], s['W']
    if verso == 'E':
        s.update(U=e, E=d, D=w, W=u)
    elif verso == 'W':
        s.update(U=w, W=d, D=e, E=u)
    elif verso == 'N':
        s.update(U=n, N=d, D=so, S=u)
    else:
        s.update(U=so, S=d, D=n, N=u)
    return s


def piega(schema, nomi):
    righe = schema.split('|')
    celle = [(x, y) for y, r in enumerate(righe) for x, c in enumerate(r.strip()) if c == 'x']
    if len(celle) != 6 or len(nomi) != 6:
        sys.exit(f'servono 6 facce: lo schema ne ha {len(celle)}, i nomi sono {len(nomi)}')
    nome = dict(zip(celle, nomi))
    stato = {celle[0]: {k: k for k in NORMALI}}
    coda = [celle[0]]
    while coda:
        c = coda.pop(0)
        for (dx, dy), verso in DIREZIONI.items():
            v = (c[0] + dx, c[1] + dy)
            if v in nome and v not in stato:
                stato[v] = rotola(stato[c], verso)
                coda.append(v)
    if len(stato) != 6:
        sys.exit('lo schema non è connesso')
    faccia = {}
    for c, s in stato.items():
        if s['U'] in faccia:
            sys.exit('lo schema non si chiude in un cubo: due celle finiscono sulla stessa faccia')
        faccia[s['U']] = nome[c]
    return faccia  # posizione iniziale -> nome


def croce(a, b):
    return (a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0])


def viste(faccia):
    per_normale = {NORMALI[k]: v for k, v in faccia.items()}
    out = []
    for t, nt in NORMALI.items():
        for f, nf in NORMALI.items():
            if sum(a * b for a, b in zip(nt, nf)) != 0:
                continue
            r = croce(tuple(-x for x in nf), nt)
            out.append((faccia[t], faccia[f], per_normale[r]))
    return out


def main():
    if len(sys.argv) not in (3, 6):
        sys.exit(__doc__)
    nomi = [x.strip() for x in sys.argv[2].split(',')]
    faccia = piega(sys.argv[1], nomi)
    opposte = sorted({tuple(sorted((faccia[a], faccia[b]))) for a, b in (('U', 'D'), ('N', 'S'), ('E', 'W'))})
    print('Facce opposte:', '; '.join(f'{a} - {b}' for a, b in opposte))
    tutte = viste(faccia)
    if len(sys.argv) == 6:
        terna = tuple(sys.argv[3:6])
        print(f'Cubo alto={terna[0]}, fronte={terna[1]}, destra={terna[2]}:', 'SI ottiene dallo sviluppo' if terna in tutte else 'NON si ottiene dallo sviluppo')
    else:
        print('Terne (alto, fronte, destra) possibili:')
        for v in sorted(tutte):
            print('  ', ', '.join(v))


if __name__ == '__main__':
    main()
