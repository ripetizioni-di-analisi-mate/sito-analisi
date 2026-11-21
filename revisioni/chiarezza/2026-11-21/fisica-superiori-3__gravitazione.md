# Fisica 3° anno · Gravitazione e orbite: revisione di chiarezza

Parole: italiano 2456 → 3759 (×1,53); inglese 2361 → 3849 (×1,63). Controllo `controlla_capitolo.py`: «a posto», senza errori né avvisi.

## Che cosa è cambiato
1. Termini definiti alla prima comparsa: massa puntiforme, modulo, costante di gravitazione universale, distribuzione sfericamente simmetrica, disgiunti, massa di prova, sorgente, quantità di moto, riferimento inerziale, sorgente dominante, satellite, accelerazione centripeta, periodo, velocità angolare, ellisse e fuochi, orbita legata, momento angolare e braccio, raggio vettore, pericentro e apocentro, semiasse maggiore, giorno siderale, orbita equatoriale; lettere greche lette alla prima comparsa (Δ, μ, ω, Φ, ε); MJ = 10⁶ J.
2. Passaggi di calcolo aggiunti: campo come forza divisa per m; N/kg = m/s²; differenza esatta di energia potenziale e rapporto 1 + h/R scritti riga per riga; v e T dell'orbita circolare ricavati; soluzione dell'equazione del punto di campo nullo (2(6−x) = x); derivazione completa di v_p² e di E/m nell'orbita ellittica, con le due identità usate; K, U ed E nell'orbita circolare; v_fuga da E = 0.
3. Le tre leggi di Keplero sono ora in elenco, ciascuna in una frase, prima della spiegazione della seconda legge (contenuto rimasto nel blocco `#keplero`).
4. Somma dei campi in tre casi (concordi, opposti, perpendicolari) in elenco; geostazionaria come elenco di quattro condizioni.
5. Tolti voce da laboratorio e tono prescrittivo («conviene», «in generale», «spesso», «al primo ordine», «divergere»); «il potenziale è U(r)» corretto in «l'energia potenziale vale U(r)», perché poco sotto il capitolo distingue energia potenziale U e potenziale Φ.
6. Frazioni in linea (g₀/4, T₂/T₁, esponente 3/2) portate in colonna.

## Com'era / Com'è ora (blocco `#energia-gravitazionale`)
Com'era: «Per una salita di quota $h$ dal raggio $R$, la differenza esatta è $\dfrac{GMmh}{R(R+h)}$. Se $h\ll R$, il denominatore è circa $R^2$, quindi la differenza è circa $m g_0 h$. Il rapporto fra stima a gravità costante e differenza esatta è $1+\dfrac{h}{R}$.»

Com'è ora: la differenza $U(R+h)-U(R)$ è calcolata in due righe (fattore comune, denominatore comune); si legge $h\ll R$ («$h$ molto minore di $R$»); si dice che $g_0=\dfrac{GM}{R^2}$ è il campo alla superficie, perciò la differenza diventa $mg_0h$; il rapporto $1+\dfrac hR$ è ricavato con la divisione scritta per esteso. Prima lo studente trovava tre risultati senza vedere da dove venissero, né perché comparisse $g_0$.

## Errori nell'originale
Nessun errore numerico: ricalcolati con Python/sympy tutti i numeri (orbita da 8,0·10⁶ m in 7200 s: v ≈ 6,98·10³ m/s, μ ≈ 3,90·10¹⁴ m³/s², M ≈ 5,8·10²⁴ kg aggiunto; 2^{2/3} ≈ 1,59; 1/1,05² ≈ 0,907; 320 km; formula di v_p² e E/m; curva v/v_A = √(24/r − 3)). Correzione di terminologia: «il potenziale è U(r)» → energia potenziale (vedi punto 5).

## Aggiunte per esercizi e domande
- Campo dentro una sfera piena (conta la massa racchiusa, zero al centro): domanda 58.
- Somma di campi perpendicolari con Pitagora (esempio 3-4-5): esercizio e domanda 10.
- Lavoro indipendente dal percorso e nullo su percorso chiuso: domanda 72, scheda 6.
- Somma delle energie potenziali di più sorgenti: domanda 44.
- Velocità angolare ω = 2π/T, v = ωr: scheda 4, domanda 31.
- Gravità che non compie lavoro su un'orbita circolare: domanda 76.
- Terza legge con sorgenti diverse, T₂/T₁ = (a₂/a₁)^{3/2}·√(μ₁/μ₂): esercizio e domanda 12, domande 45 e 49.
- Velocità di lancio con velocità residua, v² = v_fuga² + v∞²: esercizio e domanda 13, scheda 5.

## Esercizi e domande (non toccati)
Ricontrollate le soluzioni dei 14 esercizi da fare: tutte corrette. Nelle schede svolte nulla di sbagliato; la scheda 2, esercizio 3, scrive il risultato in m/s² dopo calcoli in N/kg (equivalenti, ma incoerente nella stessa riga).

## Dubbi rimasti
Nessuno sui contenuti. Il giorno siderale è dato come «circa 23 h 56 min» (valore reale 23 h 56 min 4 s).
