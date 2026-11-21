# Fisica 3° anno · Fluidi in equilibrio · revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-3 fluidi-equilibrio`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole**: italiano 2484 → 4197 (×1,69); inglese 2350 → 4215 (×1,79). Blocchi 20, esempi 10, figure 11, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici. Nessun blocco nuovo, nessun contenuto tolto, dati numerici degli esempi invariati. Una prima stesura era a ×1,75: ho tolto una frase che descriveva la figura della paratoia, un esempio numerico ripetuto (blocco da 600 kg/m³, già nelle schede) e alcune formule doppie.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: fluido, a riposo, pressione media, omogeneo, baricentro geometrico, scalare, densità (con ρ letta *rho*), gradiente idrostatico, paratoia, pelo libero, momento e braccio, gravità uniforme, quota, colonna, profondità, sovrapressione, connesso, immiscibili, interfaccia, tensione superficiale, pendenza, pressione assoluta e relativa/manometrica, manometro a U, depressione, confinato, torchio idraulico, pistone, eccesso di pressione, guadagno di forza, corsa, incomprimibile, lavoro, spinta idrostatica, dinamometro, peso apparente, densità efficace, «fare tenuta», densità media, centro di spinta, coppia.
2. **Simboli**: $F_\perp$ (con $F_\perp=F\cos\theta$), Pa e kPa, $\rho$, $\Delta$, pedici $j$, $L$/$R$, int/ext, $o$/$a$, $\rho_f$, $\rho_c$, $V_{\mathrm{imm}}$, $V_{\mathrm{tot}}$; 1 L = $10^{-3}$ m³; terzo principio e seconda legge di Newton richiamati in una riga.
3. **Passaggi di calcolo completi**: conversione cm² → m² con $10^{-2}\cdot10^{-2}$; media triangolare come semisomma, $F=\dfrac{\rho gbH^2}{2}$ in due righe e momento $M=\dfrac{\rho gbH^3}{3}$ scritto; bilancio della colonna di Stevino con le tre forze in elenco e l'equazione prima della semplificazione; conti intermedi di tutti gli esempi (4000 + 10000; 82 − 100; −18000·0,20; 2400/10000 = 0,24; 0,30 − 0,24; 80·5, 10/5, 80·0,10 e 400·0,020; 800·10·1,0 = 8 kPa, 26 − 8, 18000·0,030; 40 − 10; 25/1000 e 0,025/0,50); catena $F_1s_1=pA_1s_1=pA_2s_2=F_2s_2$; frazione immersa ricavata sostituendo $m=\rho_cV_{\mathrm{tot}}$.
4. **Il motivo di ogni «quindi»**: perché l'atmosfera si cancella sulla paratoia, perché il punto di applicazione sta sotto la metà, perché nel manometro il ramo basso ha la pressione maggiore, perché C ha pressione maggiore di D (si parte dall'interfaccia e l'acqua è connessa), perché due superfici libere alla stessa pressione stanno a quote diverse.
5. **Elenchi** al posto di frasi con più casi: forze sulla colonna, regole del percorso (discesa, salita, tratto orizzontale), condizioni del torchio ideale, tre casi della frazione immersa, equilibrio stabile/instabile.
6. **Voce**: tolti «Si può pensare di…», «il bilancio verticale può dirci», «In particolare si evita di trattare…» (ora: «Il rapporto fra le aree moltiplica la forza e non l'energia»), «la pressione interna lì è minore di $\rho g\Delta z$» (ambiguo: ora «più bassa di una quantità $\rho g\Delta z$»); frazioni inline $m/V$ e $F_\perp/A$ portate in colonna.
7. **Inglese**: traduzione integrale del testo italiano finale, grafia britannica come nel file esistente (metre, centre, centimetre, pressurised), termini delle schede inglesi (gauge pressure, spring scale, free surface, hydraulic press, buoyant force).

## Com'era / Com'è ora (blocco `#manometri`, secondo paragrafo)

**Com'era**

> Nel caso in cui il peso del gas sopra le due superfici sia trascurabile, scendere di $\Delta h$ dalla superficie più alta fa aumentare la pressione di $\rho g\Delta h$. Questa pressione raggiunge quella imposta sulla superficie più bassa. Il ramo con il livello più basso è dunque collegato alla pressione maggiore.

**Com'è ora**

> Un **manometro a U** è un tubo piegato a U che contiene un liquido, con ciascun ramo collegato a un gas. Se il liquido è omogeneo, due punti alla stessa quota nello stesso liquido connesso hanno la stessa pressione. Si trascura il peso del gas sopra le due superfici. Scendendo di $\Delta h$ dalla superficie più alta fino alla quota della superficie più bassa, la pressione aumenta di $\rho g\Delta h$. A quella quota il liquido dei due rami ha la stessa pressione, che nel ramo basso è la pressione del gas che preme sulla sua superficie. Quindi la pressione sulla superficie più bassa supera quella sulla superficie più alta di $\rho g\Delta h$. Il ramo con il livello più basso è dunque collegato alla pressione maggiore.

Lo studente si perdeva perché «questa pressione raggiunge quella imposta» saltava il passaggio chiave (i due rami hanno la stessa pressione alla quota della superficie bassa) e il «dunque» finale non seguiva da nulla di scritto; inoltre «manometro a U» non era descritto.

## Errori nell'originale

Nessun errore di calcolo: tutti i numeri ricalcolati con Python/sympy (40000 Pa; risultante $\rho gbH^2/2$ e braccio $2H/3$ con integrazione; 4000 e 14000 Pa; 2000 Pa; 3600 N; 2,4 kPa, 0,24 m, 0,06 m; 400 N, 2 cm, 8 J e 8 J; 8 kPa, 18 kPa, 540 N; 40, 10, 30 N; 0,025 m³ e 0,050 m). Controllate anche le figure: nel recipiente di `#quota-colonna` l'olio alto 1,35 equivale a 1,08 di acqua (densità 800), coerente con i livelli 2,40 e 1,32+1,08; nel manometro a due liquidi I, D e la superficie dell'olio sono a 0,40, 0,64 e 0,70; nella figura del galleggiamento B è a destra di G e la coppia è antioraria, come detto nel testo.
Una frase ambigua corretta: «la pressione interna lì è minore di $\rho g\Delta z$» (si poteva leggere come confronto con $\rho g\Delta z$).

## Aggiunte per coprire esercizi e domande

- $F_\perp=F\cos\theta$ per una forza inclinata (domanda 17) in `#pressione`.
- 1 L = $10^{-3}$ m³ (scheda 5 es. 2) e kPa = 1000 Pa in `#pressione`.
- Gradiente in Pa/m e valore 10000 Pa/m per l'acqua (schede 2 e 8, domande 22-23) in `#stevino`.
- Stessa pressione sul fondo di recipienti di forma diversa (domanda 64) in `#stevino`.
- Superfici alla stessa quota con pressioni uguali (domanda 72) in `#manometri`.
- Guadagno di forza e area $\propto r^2$ (domanda 33) in `#pascal`; attrito che riduce il lavoro in uscita (domanda 78) in `#pascal`.
- Peso apparente e lettura del dinamometro (scheda 6, domande 40-41, 81) in `#archimede`; filo fissato sotto il corpo (scheda 6 es. 3, domande 42 e 82) già presente, reso esplicito.
- Liquido più denso → frazione immersa minore (domanda 86) in `#galleggiamento`.
- Sezione che cambia con la profondità, volume strato per strato (domande 45 e 47) nell'esempio della piattaforma.

## Note su schede e domande (non corrette)

- Scheda 3 es. 2: «Con densità circa $1000\,\mathrm{kg/m^3}$» mentre il testo la dà esatta.
- Scheda 2 es. 3 e domanda 38: lessico da laboratorio («compatibile con l'acqua», «controllo intermedio»); scheda 7 es. 3 «Un controllo indipendente…» e scheda 1 es. 1 «Verifica inversa»: verifiche doppie.
- Molte domande hanno fra le opzioni lo stesso valore con il segno meno (es. $-800\,\mathrm{kg/m^3}$, $-0{,}003\,\mathrm{m^2}$): distrattori poco credibili, non errori.
- Nessun errore numerico trovato nelle soluzioni controllate (schede 1-8; tracce 1-14; domande 10, 12, 21, 45, 46, 47).

## Dubbi rimasti

- La legge di Stevino in inglese resta «hydrostatic pressure law» come nel titolo `##` del file esistente; ho aggiunto «(Stevin's law)» alla prima comparsa.
- Non ho eseguito la build del sito: lo script di controllo ha reso entrambi i file senza errori (186 formule, 22 figure/svg ciascuno).
