# Revisione di chiarezza · Fisica 2° anno · Temperatura e dilatazione termica

**Parole (controllo dello script):** italiano 2635 → 4421 (×1,68); inglese 2614 → 4529 (×1,73).
**Controllo:** `controlla_capitolo.py fisica-superiori-2 temperatura-dilatazione` → «ESITO: a posto», nessun ERRORE e nessun AVVISO.

## Che cosa è cambiato
- Definiti alla prima comparsa: temperatura, calore (joule), parete isolante, sistema isolato, «spontaneamente», campione, capacità termica, sensore, kelvin e Sistema Internazionale, scala Celsius, zero assoluto (nessuna temperatura in kelvin è negativa), pedice, $\Delta$ e variazione di temperatura con segno, pendenza, $\simeq$, tarare, divisioni, relazione affine con pendenza e termine noto, dilatazione termica, barra libera e uniforme, piccole deformazioni, variazione relativa, $\mathrm{K^{-1}}$ («per kelvin»), vincolo, in serie, media pesata, incertezza, giunto, collineari, isotropo, $\varepsilon$, modulo, primo ordine, cristallo, pressione, tacca e capacità fino alla tacca, orlo, «trabocca», densità e $\rho$.
- Passaggi di calcolo esplicitati: $b$ e $a$ della taratura ricavati dalla tabella; $\Delta T$ e $\Delta L$ con la sottrazione scritta; pendenza del grafico $=\alpha L_0$ e $\alpha=\dfrac{\text{pendenza}}{L_0}$; avanzamento per kelvin di ciascuna barra nel giunto a due lati; sviluppo di $(1+\varepsilon)^2$ e $(1+\varepsilon)^3$; tre righe di calcolo nell'esempio del recipiente graduato; incrocio delle rette nel trabocco ($25\,\mathrm K$, $102{,}25\,\mathrm{mL}$); media semplice che darebbe $1{,}00\,\mathrm{mm}$.
- Le figure ora sono descritte nel testo (pendenza 1 della retta Celsius-kelvin, punto A, rette del giunto, del trabocco, del modello di piccola deformazione).
- L'avviso sul rapporto di temperature è scritto in forma affermativa, con il rapporto sbagliato $\dfrac{20}{10}=2$ come controesempio.
- Nella dimostrazione degli intervalli e in quella della dilatazione volumica ogni passo ha il suo connettivo.
- Titoli `##`, ancore, titoli dei blocchi, righe delle figure e numeri degli esempi invariati; nessun contenuto tolto.

## Com'era / Com'è ora (giunto che si restringe dai due lati)
**Com'era:** «Se entrambe si scaldano di $\Delta T$, finché il giunto è aperto i due spostamenti puntano l'uno verso l'altro. La loro somma vale $0{,}040\,\mathrm{mm}$ per kelvin. Si sottrae questa somma dalla larghezza iniziale. Il primo contatto si ha per …»
(Il numero $0{,}040$ compare senza conto, e «si sottrae dalla larghezza» non dice quando il giunto si chiude.)

**Com'è ora:** «Se entrambe si scaldano di $\Delta T$, finché il giunto è aperto ciascuna si allunga verso l'altra. Per ogni kelvin la barra sinistra avanza di $2{,}0\cdot10^{-5}\cdot1500\,\mathrm{mm}=0{,}030\,\mathrm{mm}$ e quella destra di $1{,}0\cdot10^{-5}\cdot1000\,\mathrm{mm}=0{,}010\,\mathrm{mm}$. La somma dei due spostamenti vale quindi $0{,}040\,\mathrm{mm}$ per kelvin, ed è di quanto si restringe il giunto per ogni kelvin. Il primo contatto si ha quando il restringimento è uguale alla larghezza iniziale, cioè per …»

## Errori nell'originale
Nessun errore numerico: tutti i conti della teoria ricalcolati con Python (rapporto 1,035, taratura, $\alpha$ da due misure, barra a due zone, pendenze medie, giunti, foro, $0{,}003002$, recipiente graduato, trabocco).

## Termini degli esercizi aggiunti in teoria
- Energia interna e capacità termica (domande 15, 17, 19) in `#equilibrio` e nell'osservazione che segue; parete isolante (domanda 83).
- Zero assoluto come limite inferiore (domanda 27) e scrittura «300 K» (domanda 26) in `#scale`.
- Variazione con segno, sottrazione sulla stessa scala (svolto 3, domanda 79) in `#intervalli`.
- Errore dello zero e $\Delta T=\dfrac{\Delta r}{a}$ (esercizi 10 e 11, domande 30, 31, 82) in `#taratura-termometro` e `#coefficiente-intervallo`.
- Coefficiente lineare negativo (domanda 78) e significato di $\alpha L_0\Delta T$ con estremi bloccati (domanda 39) in `#lineare`.
- Andamento curvo e coefficiente su intervalli stretti (domanda 45) in `#coefficiente-intervallo`.
- $\beta\simeq3\alpha$, coefficiente superficiale $2\alpha$ (svolto 7, domande 53, 84) in `#volume`.
- Forma del foro conservata, foro ellittico e perno (domande 50, 61) in `#foro`.
- Volume con una sola direzione libera (domanda 80) in `#direzioni-distinte`.
- Coefficiente apparente, $\beta_{\mathrm{rec}}\simeq3\alpha_{\mathrm{rec}}$, livello sotto la tacca con $\beta_{\mathrm{rec}}>\beta_{\mathrm{liq}}$, termometro a liquido (svolto 8, domande 66, 67, 76) in `#apparente`.
- Volume minimo e densità massima a 4 °C, volumi quasi uguali a 2 e 6 °C (domande 73, 86) in `#acqua-anomala` e `#modello-acqua`.

## Dubbi rimasti
- «$100\,{}^\circ\mathrm C$ è circa la temperatura dell'acqua che bolle»: scritto «circa» perché con la definizione attuale del kelvin l'ebollizione a 1 atm è a circa 99,97 °C.
- Nell'esempio del foro l'originale dice «piastra isolata»; è stato tenuto e spiegato come «libera da vincoli», che è il senso fisico del modello.
- Esercizi e domande letti per intero: nessun errore trovato.
