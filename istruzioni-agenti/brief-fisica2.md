# Scrivere un argomento della materia "Fisica 2" (elettromagnetismo e ottica)

Repository: /home/claude/sito-analisi1 (sito Astro di teoria ed esercizi universitari, in italiano).
Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento (elencate sotto). Altri autori scrivono in parallelo gli altri argomenti della materia.

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato. Seguila alla lettera.
2. Leggi i modelli, che sono gli argomenti già scritti di Fisica 1: `src/content/teoria/fisica-1/lavoro-ed-energia.md`, due schede in `src/content/svolti/fisica-1/lavoro-ed-energia/` (1.md e 5.md), due tracce in `src/content/dafare/fisica-1/lavoro-ed-energia/`, e le figure di `src/content/teoria/fisica-1/fluidi.md` come esempio di schemi disegnati senza assi. Imita struttura, densità, tono, uso di grassetto e corsivo e figure.
3. Leggi istruzioni-agenti/brief-figure.md (sezioni "Strumenti disponibili" e "Controllo obbligatorio").

## Cosa produrre (materia = `fisica-2`, argomento = il tuo slug)
- `src/content/teoria/fisica-2/<slug>.md`: frontmatter `titolo` (il titolo dell'argomento indicato sotto) e `sommario` (una frase). Da 6 a 10 sezioni `##`, circa 2500–3500 parole di prosa.
- `src/content/svolti/fisica-2/<slug>/1.md … 7.md`: 7 schede per tipologia di problema (titolo al plurale, per esempio "Piani inclinati con attrito"), ciascuna con 2–4 esercizi `## Esercizio k` in difficoltà crescente. `gratis: true` per 1, 2, 3; `gratis: false` per 4–7. Le schede 1–3 sono l'anteprima gratuita: tipologie di base, rappresentative e invoglianti.
- `src/content/dafare/fisica-2/<slug>/1.md … 13.md`: 13 tracce, ciascuna con `:::soluzione … :::` contenente il solo risultato finale (valore numerico con unità di misura, o la formula).
- Il campo `teoria:` di svolti e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria.

## Blocchi nella fisica
- Grandezze e concetti: `:::definizione`.
- Principi e leggi sperimentali (legge di Coulomb, conservazione della carica, legge di Ohm, legge di Faraday-Neumann-Lenz, legge di Biot-Savart, forza di Lorentz, leggi di Snell): `:::teorema` con il titolo della legge, *senza* dimostrazione; nel testo del blocco si dice che è una legge sperimentale o un postulato, poi a cosa serve e un esempio.
- Risultati che si ricavano (teorema di Gauss e le sue applicazioni, campo di distribuzioni simmetriche, potenziale come circuitazione nulla, capacità di condensatori, energia del campo, leggi di Kirchhoff, carica e scarica RC, campo di filo e solenoide da Ampère, forza tra fili, f.e.m. mozionale, circuiti RL e LC, equazione delle onde, interferenza da due fenditure): `::::teorema` con `:::dimostrazione` annidata. Le dimostrazioni centrali dell'esame vanno scritte.
- Strumenti matematici usati (integrali di linea e di superficie, flusso, circuitazione, teorema della divergenza e di Stokes, equazioni differenziali lineari del primo e del secondo ordine): `:::richiamo` breve con rimando all'argomento di Analisi 2 o di Analisi 1 che li tratta (per esempio "si rimanda all'argomento su superfici e flussi di Analisi 2").

## Struttura degli esercizi (svolti)
Ogni esercizio: testo del problema con i dati; poi la risoluzione nell'ordine
1. schema della situazione (con una figura `::grafico` quando aiuta: diagramma delle forze, traiettoria, grafico orario, ciclo nel piano $pV$);
2. leggi applicate, scritte in forma simbolica;
3. risoluzione simbolica fino alla formula finale della grandezza cercata;
4. sostituzione numerica con le unità e risultato.
Sotto, `<div class="spiegazione">` con la spiegazione a parole di ogni passaggio (perché si applica quella legge, quali ipotesi sono soddisfatte, per esempio "il piano è liscio, quindi l'unica forza che compie lavoro è il peso").
Quando ha senso, un controllo finale a parole: dimensioni, ordine di grandezza, caso limite.

## Notazioni comuni a tutta la materia (usale identiche)
- Vettori con la freccia: $\vec{E}$, $\vec{B}$, $\vec{F}$, $\vec{v}$; modulo $E$ oppure $|\vec{E}|$; versori $\hat{\imath}, \hat{\jmath}, \hat{k}$, versore radiale $\hat{r}$, normale $\hat{n}$.
- Costanti: $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\cdot m^2)}$, $k = \dfrac{1}{4\pi\varepsilon_0} = 8{,}99 \cdot 10^{9}\,\mathrm{N\cdot m^2/C^2}$, $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$, $e = 1{,}60 \cdot 10^{-19}\,\mathrm{C}$, $m_e = 9{,}11 \cdot 10^{-31}\,\mathrm{kg}$, $c = 3{,}00 \cdot 10^{8}\,\mathrm{m/s}$.
- Carica $q$, $Q$; densità $\lambda$ (lineare), $\sigma$ (superficiale), $\rho$ (volumica); campo elettrico $\vec{E}$; potenziale $V$ e differenza di potenziale $\Delta V$; energia potenziale $U$; flusso $\Phi$ (con pedice: $\Phi_E$, $\Phi_B$); capacità $C$; costante dielettrica relativa $\varepsilon_r$.
- Corrente $I$ (intensità di corrente $i(t)$ se varia nel tempo), densità di corrente $\vec{J}$, resistenza $R$, resistività $\rho$ solo dove non si confonde con la densità volumica (altrimenti dichiarare), forza elettromotrice $\mathcal{E}$, potenza $P$, costante di tempo $\tau$.
- Campo magnetico $\vec{B}$ (in tesla), induttanza $L$; il **lavoro** in questa materia si indica con $W$, dichiarandolo la prima volta, perché $L$ è l'induttanza.
- Unità del Sistema Internazionale in tondo con spazio sottile, virgola decimale `{,}` dentro le formule, unità composte con il simbolo SI (`\mathrm{V/m}`, `\mathrm{C^2/(N\cdot m^2)}`): è l'unica barra ammessa. Numeri, grandezze ed esponenti seguono la regola delle frazioni in colonna (`\dfrac{1}{2} C V^2`, esponenti come `^{\frac{3}{2}}`). I gradi si scrivono `^\circ`.
- Risultati con 2 o 3 cifre significative coerenti con i dati.
- KaTeX: niente pacchetti esterni; ammessi `cases`, `aligned`, `pmatrix`, `\vec`, `\hat`, `\mathrm`, `\mathcal`, `\oint`, `\iint`, `\operatorname`.
- Rimandi ad altri argomenti con il loro nome, mai alla struttura della pagina.

## Programma dei 12 argomenti (ordine di studio; rispetta i confini, non ripetere ciò che appartiene ad altri argomenti se non con un richiamo breve)
1. `carica-e-coulomb`: "Carica elettrica e legge di Coulomb". Carica e sue proprietà (quantizzazione, conservazione), conduttori e isolanti, elettrizzazione, legge di Coulomb in forma vettoriale, principio di sovrapposizione, forze su cariche puntiformi in una e due dimensioni, equilibrio di cariche.
2. `campo-elettrico`: "Campo elettrico". Definizione, campo di una carica puntiforme e di più cariche, linee di campo, dipolo elettrico (campo sull'asse, momento di dipolo, momento delle forze in campo uniforme), distribuzioni continue (filo, anello, disco, piano infinito) per integrazione, moto di una carica in un campo uniforme.
3. `legge-di-gauss`: "Flusso del campo elettrico e legge di Gauss". Flusso attraverso una superficie, legge di Gauss, applicazioni a distribuzioni simmetriche (sfera piena e cava, filo infinito, piano, cilindro), forma locale $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$ (cenno con richiamo al teorema della divergenza).
4. `potenziale-elettrico`: "Potenziale elettrico ed energia elettrostatica". Lavoro della forza elettrica, campo conservativo e circuitazione nulla, energia potenziale, potenziale di cariche puntiformi e di distribuzioni, superfici equipotenziali, $\vec{E} = -\nabla V$, energia di un sistema di cariche, moto di cariche e conservazione dell'energia, elettronvolt.
5. `conduttori-e-condensatori`: "Conduttori, condensatori e dielettrici". Conduttori in equilibrio (campo interno nullo, carica in superficie, teorema di Coulomb, potere delle punte), capacità, condensatore piano, sferico, cilindrico, collegamenti in serie e in parallelo, energia del condensatore e densità di energia del campo, dielettrici e costante dielettrica relativa.
6. `corrente-e-circuiti`: "Corrente elettrica e circuiti in corrente continua". Corrente e densità di corrente, velocità di deriva, legge di Ohm, resistività e dipendenza dalla temperatura, effetto Joule e potenza, generatori e forza elettromotrice, resistenza interna, resistori in serie e in parallelo, leggi di Kirchhoff, circuiti a più maglie, carica e scarica del condensatore (circuito RC).
7. `campo-magnetico`: "Campo magnetico e forza di Lorentz". Campo magnetico e linee di campo, forza di Lorentz, moto di una carica in campo uniforme (moto circolare, elica, raggio e periodo), selettore di velocità e spettrometro di massa, effetto Hall, forza su un filo percorso da corrente, momento delle forze su una spira, momento magnetico.
8. `sorgenti-del-campo-magnetico`: "Sorgenti del campo magnetico". Legge di Biot-Savart, campo di un filo rettilineo, di una spira sull'asse e di un arco, forza tra fili paralleli e definizione dell'ampere, legge di Ampère e applicazioni (filo, cavo coassiale, solenoide, toroide), flusso del campo magnetico (legge di Gauss per il magnetismo), cenno ai materiali magnetici.
9. `induzione-elettromagnetica`: "Induzione elettromagnetica". Legge di Faraday-Neumann-Lenz, f.e.m. mozionale (sbarretta su binari), f.e.m. in una spira rotante e alternatore, correnti indotte e verso di Lenz, autoinduzione e induttanza del solenoide, circuito RL, energia immagazzinata nell'induttore e densità di energia magnetica, mutua induzione (cenno).
10. `circuiti-in-corrente-alternata`: "Oscillazioni elettriche e circuiti in corrente alternata". Circuito LC e oscillazioni, analogia con il moto armonico, circuito RLC in serie, tensioni e correnti alternate, valori efficaci, reattanze, impedenza, fasori, risonanza, potenza media e fattore di potenza, trasformatore.
11. `equazioni-di-maxwell-e-onde`: "Equazioni di Maxwell e onde elettromagnetiche". Corrente di spostamento e legge di Ampère-Maxwell, le quattro equazioni di Maxwell in forma integrale (e locale come cenno), onde elettromagnetiche piane, relazione $E = cB$, velocità della luce $c = \dfrac{1}{\sqrt{\varepsilon_0 \mu_0}}$, energia trasportata, vettore di Poynting e intensità, pressione di radiazione, spettro elettromagnetico.
12. `ottica`: "Ottica geometrica e ondulatoria". Riflessione e rifrazione (leggi di Snell), indice di rifrazione, riflessione totale, specchi piani e sferici, lenti sottili (equazione delle lenti, ingrandimento), interferenza da due fenditure (esperimento di Young), diffrazione da una fenditura, reticolo di diffrazione, polarizzazione e legge di Malus.

## Figure (obbligatorie dove servono)
L'elettromagnetismo si capisce dai disegni. Con `::grafico` (leggi brief-figure.md, compresa la sezione "Schemi fisici (novità)") puoi fare:
- cariche come `punti=` con etichetta (`+q`, `−q`), forze e campi come `vettori=`; schemi senza assi con `assi=0` e `uguale=1`;
- linee di campo: curve parametriche (`curve=`) o segmenti di rette radiali; campi uniformi come serie di vettori paralleli; per il campo magnetico entrante o uscente dal foglio usa etichette `⊗` e `⊙`;
- grafici di $E(r)$, $V(r)$, $q(t)$, $i(t)$ con `nomi="r,E"`, `nomi="t,q"` e il campo `legenda=` per dire quale grandezza è ogni curva (la legenda automatica compare solo per i grafici $y = f(x)$);
- circuiti come schemi senza assi: fili con `linee=`; resistore come piccola spezzata a zig-zag dentro `linee=`; condensatore come due segmenti paralleli corti; generatore come una linea lunga e una corta affiancate con i segni + e − in `etichette=`; induttore come zig-zag arrotondato o come rettangolo etichettato $L$; nomi dei componenti (`R₁`, `C`, `ℰ`) e versi delle correnti (`vettori=` corti) accanto ai fili;
- raggi luminosi con `vettori=` e `linee=`, superfici di separazione e lenti con `linee=` e `poligoni=`.
Indicativamente 6–10 figure nella teoria e almeno una figura in 4 delle 7 schede svolte. Didascalie con formule fra dollari, frazioni in colonna. Il PNG di controllo si chiama `figure-<slug>.png`. Ogni figura va guardata: componenti dei circuiti riconoscibili, etichette leggibili e non sovrapposte.

## Qualità (l'errore più grave è un risultato sbagliato)
- Dati scelti in modo che i conti siano gestibili a mano e i risultati abbiano senso fisico (cariche, campi, correnti, resistenze realistiche).
- Ricalcola OGNI esercizio da capo, comprese le soluzioni delle tracce, con Python (`python3`, eventualmente `pip install --break-system-packages sympy`), da una cartella tua nello scratchpad, non dal repository: prima la formula simbolica con sympy, poi il valore numerico, controllando anche le dimensioni.
- Ipotesi fisiche sempre esplicite (cariche puntiformi, fili infiniti, effetti di bordo trascurabili, regime stazionario o quasi stazionario, mezzo omogeneo).
- Esercizi originali, non copiati da libri.
- Italiano: valgono tutte le regole di GUIDA-CONTENUTI.md (connettivi espliciti, niente frasi di riempimento, niente "la parentesi", frazioni in colonna, sistemi con la graffa per condizioni da soddisfare insieme, mai per elencare).

## Consegna
Alla fine elenca i file creati con il numero di parole della teoria e il numero di figure, e conferma: (a) tutte le ancore citate nei campi `teoria:` esistono nel file di teoria; (b) ogni risultato è stato verificato con un calcolo indipendente (di' con cosa); (c) lo script delle figure dà 0 problemi e hai guardato il PNG. Rapporto breve, in italiano.
