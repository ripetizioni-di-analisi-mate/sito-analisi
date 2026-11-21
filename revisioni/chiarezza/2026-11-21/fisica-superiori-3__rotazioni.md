# Fisica 3° anno · Rotazioni, momento angolare e rotolamento

Parole IT: 2521 → 4254 (×1,69). Parole EN: 2481 → 4458 (×1,80). Controllo `controlla_capitolo.py`: ESITO a posto (nessun ERRORE, nessun AVVISO).

## Che cosa è cambiato
1. Cinematica angolare: asse di rotazione, verso positivo, radiante (arco lungo quanto il raggio), lettere greche θ, ω, α, Δ, definizioni ω = Δθ/Δt e α = Δω/Δt con unità, analogia con il moto rettilineo uniformemente accelerato, trapezio sotto il grafico con la sua area, «area orientata», «modulo», «corpo rigido». Le due componenti dell'accelerazione in un elenco, con «accelerazione centripeta».
2. Esempi con i passaggi di calcolo scritti (v = |ω|R = 6·0,35; triangoli 4 e −1 rad in elenco; medie 0,48/0,20 e 0,60/0,20 con gli istanti centrali 0,10 e 0,30 s).
3. Momento d'inerzia: definizione con la somma scritta per esteso e lettura di Σ; «omogeneo», «centro di massa» definiti; formule di anello, disco e sfera in elenco; dimostrazione del teorema degli assi paralleli con lo sviluppo del quadrato e i tre termini in elenco; «adimensionale».
4. Equazione della rotazione: definizione di momento di una forza, le tre formule equivalenti in elenco, «braccio», «retta d'azione», unità N·m, analogia con F = ma; formula M_z = xF_y − yF_x presentata come componente del prodotto vettoriale; braccio 0,32 m ricavato (0,40·4/5).
5. Energia: raccoglimento di ½ω² scritto, analogia W = Fs, segno del lavoro (freno), lavoro totale = variazione di energia cinetica, watt, motivo per cui la velocità resta positiva nel grafico momento-angolo.
6. Momento angolare: modulo L = rp sinφ, «momento esterno», «impulso», ΔL = MΔt, passaggio da ΔL = IΔω a ΣM = Iα; nella frizione il motivo per cui il lavoro complessivo è negativo; «coassiali», «frizione».
7. Rotolamento: velocità di un punto come somma di due contributi, avanzamento R|Δθ| (2πR per giro), superficie in movimento (nastro), «attrito statico», «dissipazioni», passaggi da mgh alla formula con b; sulla rampa i passaggi F_s = bma → (1+b)a = g sinβ, «normale», μ_s, tanβ, confronti numerici 0,22 > 0,192 e 0,22 < 0,289.

## Com'era / Com'è ora
Com'era (Equazione della rotazione):
> Il momento di una forza applicata nel piano ortogonale all’asse ha modulo $M=rF\sin\phi$, con $\phi$ angolo tra raggio e forza. Equivale a $rF_t$, con $F_t$ componente tangenziale, o a $F d_\perp$, con $d_\perp$ distanza perpendicolare dall’asse alla retta d’azione.

(il momento non era mai definito; «retta d'azione» e «braccio» non spiegati; le tre forme in una frase.)

Com'è ora:
> Il **momento** $M$ di una forza rispetto a un asse è il prodotto della forza per la sua distanza dall’asse, con un segno che indica il verso di rotazione prodotto. Per una forza $F$ applicata a distanza $r$ dall’asse […] il modulo del momento si calcola in tre modi equivalenti.
> - $M=rF\sin\phi$, dove $\phi$ (fi) è l’angolo fra il raggio, cioè il segmento dall’asse al punto di applicazione, e la forza.
> - $M=rF_t$, dove $F_t=F\sin\phi$ è la componente tangenziale della forza, perpendicolare al raggio.
> - $M=F d_\perp$, dove il **braccio** $d_\perp=r\sin\phi$ è la distanza perpendicolare dall’asse alla retta d’azione, cioè alla retta che contiene la forza.

## Errori nell'originale
Nessuno: tutti i numeri ricalcolati con Python (accelerazioni 2,1/1,4/12,6; triangoli 4 e −1; α = 3,0 e ω0 = 2,10; I = 0,50 e 1,50; M_z = −1,6 e d⊥ = 0,32; energie 4, 16, 12, 8, 4; L e K 6/12; impulsi; volani 5 rad/s, 40 e 20 J; limiti 0,192 e 0,289).

## Aggiunto in teoria per esercizi e domande
- Conversione giri al minuto → rad/s (domanda 18).
- Watt e lavoro con potenza costante Pt (domanda 41, 42).
- Modulo L = rp sinφ, nullo per p diretta lungo il raggio (domande 49, 81).
- Carrucola di inerzia trascurabile: tensioni quasi uguali (domanda 73).
- Avanzamento del centro R|Δθ|, 2πR per giro (domanda 54).
- Rotolamento su superficie in movimento (domande 51, 84).
- Lavoro totale = variazione dell'energia cinetica (schede 5, domande 13, 40).

## Problemi negli esercizi e nelle domande (non corretti)
- `domande/fisica-superiori-3/rotazioni/34.md`: manca la riga `[Teoria](…#dinamica-rotazione)` presente in tutte le altre.
- `domande/fisica-superiori-3/rotazioni/73.md`: «I soli momenti lungo l’asse sono prodotte dalle tensioni» (concordanza: «prodotti»).

## Dubbi
- Nella definizione del momento d'inerzia ho aggiunto un modo di leggere Σ e il centro di massa; il titolo del blocco con ancora è invariato.
- Il titolo dell'esempio «Momento firmato e braccio perpendicolare» (originale, senza ancora) contiene «firmato», calco dall'inglese; non l'ho cambiato.
