# Fisica 3° anno · Fluidi in movimento · revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-3 fluidi-movimento`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole**: italiano 2438 → 4123 (×1,69); inglese 2297 → 4131 (×1,80). Blocchi 19, esempi 12, figure 11, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici; nessun blocco nuovo, nessun contenuto tolto, dati numerici degli esempi invariati.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: fluido, sezione, velocità uniforme, componente normale, normale a una superficie, vettore (modulo, direzione, verso), coseno (con 60° e 90°), densità, portata massica, regime stazionario, a monte / a valle, strozzatura, incomprimibile, biforcazione, linea di corrente, fluido ideale, pressione, quota, pressione assoluta e relativa, peso specifico, presa di pressione, pressione statica, ristagno, tubo di Venturi, gola, recupero di pressione, dissipazione, taratura, pelo libero, efflusso, getto, area efficace, contrazione del getto, coefficiente di efflusso, viscosità, newtoniano, laminare e turbolento, moto completamente sviluppato, velocità relativa, numero di Reynolds, velocità limite, spinta di Archimede, tratti in serie.
2. **Simboli e sigle**: SI, L, Pa e kPa, Δ, ρ, θ, η, $\dot m$ («emme punto»), $\simeq$, indici 1 e 2, $p_{\mathrm s}$ e $p_{\mathrm u}$.
3. **Passaggi di calcolo scritti**: $Q=Av$ dal cilindro di altezza $v\Delta t$; area a raggio dimezzato $\pi\left(\frac r2\right)^2$; perché ogni termine di Bernoulli è un'energia per unità di volume (con $1\,\mathrm{Pa}=1\,\mathrm{J/m^3}$); bilancio del lavoro della derivazione scritto in formula; i due contributi dell'esempio 6→2 m/s con i conti; $v=\sqrt{2(p_0-p)/\rho}$ nel tubo di Pitot; $\frac32\rho v_1^2$ nel Venturi; Torricelli con i due punti scelti; $v^2=9+7$ nel serbatoio chiuso; formula della velocità limite di Stokes; $\mathrm{Re}\propto\frac1r$ spiegato.
4. **Frazioni in colonna** dove l'originale aveva la barra ($50/15$, $A_1/A_2$, $2\cdot6000/(1000\cdot3)$, $1/r^4$, $1/(0{,}80)^4$).
5. **Casi in elenco**: tre energie di Bernoulli, due casi semplici (quota, velocità), tre casi in cui la sola velocità non basta, ipotesi di Torricelli.
6. **Voce impersonale** al posto di «Supponiamo», «Occorre», «non va sostituita».

## Com'era / Com'è ora (blocco `#bernoulli`)

**Com'era**

> I tre termini hanno unità di pascal, cioè energia per unità di volume. Per ricavare l’equazione si segue un volume $\Delta V$. All’ingresso il fluido circostante gli fornisce lavoro $p_1\Delta V$; all’uscita il volume deve fare lavoro $p_2\Delta V$ contro il fluido a valle. Il saldo modifica l’energia cinetica e l’energia potenziale gravitazionale del volume. Dividere il bilancio per $\Delta V$ dà l’equazione.

**Com'è ora**

> Ciascun termine è un'energia per unità di volume, cioè un'energia riferita a un metro cubo di fluido:
> - $\dfrac12\rho v^2$ è l'energia cinetica per unità di volume, perché un volume $V$ ha massa $\rho V$ ed energia cinetica $\dfrac12\rho Vv^2$;
> - $\rho gy$ è l'energia potenziale gravitazionale per unità di volume, cioè $mgy=\rho Vgy$ divisa per $V$;
> - $p$ si misura in pascal, e $1\,\mathrm{Pa}=1\,\frac{\mathrm N}{\mathrm{m^2}}=1\,\frac{\mathrm{N\cdot m}}{\mathrm{m^3}}=1\,\frac{\mathrm J}{\mathrm{m^3}}$.
>
> Per ricavare l'equazione si segue un piccolo volume $\Delta V$ … Il lavoro netto $(p_1-p_2)\Delta V$ è uguale alla variazione dell'energia cinetica più la variazione dell'energia potenziale gravitazionale del volume:
> $$(p_1-p_2)\Delta V=\tfrac12\rho\Delta V\,(v_2^2-v_1^2)+\rho\Delta V\,g(y_2-y_1).$$

Lo studente si perdeva perché «unità di pascal, cioè energia per unità di volume» non era giustificato e il bilancio del lavoro non era mai scritto.

## Errori nell'originale

Nessun errore numerico. Ricalcolati con Python tutti i numeri (3,33 L/s; 0,030 m³/s; 0,0096 kg/s e 10 L/s; 16, 10, 18, 2, 6 kPa; 4 m/s dal Pitot; $v_1^2=4$ e tabella di taratura con la parabola $0{,}015Q^2$; 4 e 2 m/s di Torricelli; 9 + 7 = 16 m²/s²; 2,44, 0,41 e +25% di Re). Unico difetto formale corretto: frazioni scritte con la barra.

## Aggiunte per coprire schede, esercizi e domande

- **Somma area × velocità per sezioni a zone** (traccia 9, domanda 9) e **area con segno sotto l'asse dei tempi / volume netto, anche a portata variabile** (domande 10, 23, 58; scheda 2) in `#portata` e nell'esempio del grafico.
- **Coseno e componente normale** (scheda 1 es. 3, domanda 17).
- **Biforcazione $Q_1=Q_2+Q_3$** (domanda 63) in `#continuita`.
- **Pressione relativa = assoluta − atmosferica** (scheda 6 es. 2, domanda 69) e **peso specifico 10 kPa/m** (domande 14, 41, 44) in `#bernoulli`.
- **Area efficace, coefficiente di efflusso, continuità $A_{\mathrm s}v_{\mathrm s}=Av$** (domande 37, 80, 83) e formula con $p_{\mathrm s}-p_{\mathrm u}$ (traccia 13, domande 39, 84) in `#torricelli`.
- **Velocità relativa** con un caso numerico diverso da quello delle domande (domande 51, 53, 88), **velocità limite di Stokes** $v_\ell=\frac{2(\rho_{\mathrm s}-\rho)gr^2}{9\eta}$ (scheda 8 es. 1), **Re di transizione circa 2000** (domanda 49), **tratti in serie** (domanda 46) in `#viscosita`.

## Note su schede e domande (non corrette)

- Imperativi e tono prescrittivo nelle spiegazioni: scheda 4 es. 1 «Confronta», es. 3 «Conviene ricontrollare»; scheda 5 es. 1 «Scegli»; scheda 8 es. 1 «Uguaglia»; scheda 2 es. 2 «bisogna capire»; domande 18 «converti… moltiplica», 24 «Dividi», 53 «Prendi», 57 «Immagina».
- Domande 4, 5, 6, 8: opzioni sbagliate con cinque-sei cifre (`9{,}29129`, `3{,}74818\cdot10^5`) accanto alla corretta arrotondata a tre cifre: la risposta giusta si riconosce dal numero di cifre.
- Scheda 1 es. 2: risultato $0{,}015708$ con sei cifre per dati a due cifre.

## Dubbi rimasti

- Il valore «Re fino a circa 2000» per il laminare in un tubo è un'indicazione standard (la soglia di transizione si colloca fra circa 2000 e 2300); l'ho scritto come «circa».
- Inglese a ×1,80, al limite: grafia britannica come nel file esistente (metre, litre, centre, normalised, neighbouring); termini come nelle schede (gauge pressure, stagnation point, throat, terminal velocity, Stokes drag, discharge coefficient).
- Non ho eseguito la build del sito; lo script di controllo ha reso entrambi i file senza errori.
