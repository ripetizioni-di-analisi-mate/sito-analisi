# Verifica · Fisica 3° anno · Lavoro, energia e potenza

**Esito**: approvato con due ritocchi. `controlla_capitolo.py`: a posto, nessun errore né avviso.

**Parole** (script): prima del mio intervento IT 4447 (×1,68), EN 4564 (×1,73); dopo IT 4476 (×1,69), EN 4587 (×1,74). Entrambe sotto i limiti (1,7 IT, 1,8 EN). Nessun taglio ulteriore: il testo è già entro il vincolo e le aggiunte dell'autore sono definizioni, passaggi o righe per gli esercizi.

## Conti rifatti
15 conti ricalcolati con Python/sympy (componenti 16 J, trapezio 9 J, trazione 60 J e 20 N, triangoli 6 J e 9 J, 50 J e 5 m, 1/√2 ≈ 0,707, energia elastica 1 J, equilibrio 0,15 m, U(5 cm) = U(25 cm) = −1,25 J, minimo −2,25 J, 58,86 J e v ≈ 6,85 m/s, H_min = 5R/2, 3924 J / 392,4 W / 523,2 W / 130,8 W, 1 kWh = 3,6·10⁶ J, rendimenti 0,45, 1200 J / 120 W / 480 J). Nessuno sbagliato.

## Niente di perso, niente di spostato
Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è ancora nel suo blocco con ancora; dati degli esempi invariati; righe delle figure identiche.

## Modifiche fatte (IT ed EN)
- **Copertura**: la domanda 28 (rimando a `#energia-cinetica`) usa la quantità di moto e K = p²/(2m), mai spiegate in teoria (il capitolo sulla quantità di moto viene dopo). Aggiunta in `#energia-cinetica` una riga: definizione di p = mv, K = p²/(2m) e caso numerico (p = 6 kg·m/s, m = 2 kg → 9 J).
- **Voce/ripetizione**: tolta in `#bilancio-energia` la frase «Il lavoro dell'attrito dipende dalla lunghezza percorsa», che ripeteva quanto già detto in `#potenziale`.

## Termini e sigle
Controllati alla prima comparsa: punto di applicazione, modulo, Δ, θ, prodotto scalare, componente, scalare, joule, risultante, normale, area orientata, impulso, lavoro accumulato, ordinata/ascissa, energia cinetica, punto materiale, riferimento inerziale, pedici i/f e «net», velocità scalare, SI, configurazione, energia potenziale, gravità uniforme, α, costante elastica, lunghezza naturale, potenziale totale, energia meccanica, attrito dinamico e μ_d, energia interna, potenza, watt, kWh, rendimento η, regime stazionario: tutti definiti.

## Inglese
Traduzione completa del testo italiano finale (stesse formule, 313 in entrambe le lingue; stessi blocchi, ancore e figure; punto decimale; grafia britannica come il file esistente). Le due modifiche sono state riportate.

## Dubbi rimasti
- Nell'esempio iniziale «come stabilisce il teorema dell'energia cinetica» rimanda a un teorema enunciato più avanti nel capitolo: lasciato, perché è un rimando esplicito e non un salto logico.
- Domande 86 e 88 (kWh, kW) coperte da `#potenza`. Nessun errore notato negli esercizi letti.
