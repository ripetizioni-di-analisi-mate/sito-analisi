# Fisica 1° anno · Densità — revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 densita`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole**: italiano 2619 → 4779 (×1,82); inglese 2578 → 4970 (×1,93). Blocchi 27, esempi 13, figure 11, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici. Nessun blocco nuovo, nessun contenuto tolto, dati numerici degli esempi invariati.

La lunghezza supera l'intervallo atteso (1,2-1,7) e resta sotto la soglia di avviso (2,0). Una prima stesura era a ×2,11: ho tolto esempi doppi e descrizioni ripetute delle figure. Quello che resta in più sono definizioni e passaggi di calcolo; il conteggio comprende i pezzi delle formule, che pesano molto (i conti ora sono scritti per esteso, es. `$39-22=17$`).

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: massa, volume, centimetro cubo, rapporto, omogeneo, campione, grandezza, membri di un'uguaglianza, denominatore, pedici, direttamente e inversamente proporzionali, cilindro graduato, poroso, tara, parallelepipedo rettangolo, lastra, spessore, uniforme, incertezza assoluta, intervallo, compatibili, cavo, cavità, parete, trascurabile, miscela, componenti, additivi, media pesata, media aritmetica, frazione di volume, ascisse, ordinate, origine, pendenza, intercetta, modello.
2. **Sigle e simboli**: SI (Sistema Internazionale), g, kg, cm³, m³, L, mL, mm con il nome per esteso; $\rho$, $\Delta$, $\simeq$, $\leq$, $V>0$, la scrittura $10^{-3}$, il segno % con la lettura a parole.
3. **«A temperatura e pressione fissate»** ora ha il motivo (i materiali scaldati si dilatano, quindi la densità cambia).
4. **Conti completi**: ogni risultato che prima era solo enunciato ora ha l'operazione scritta (36/18 = 2, 42/15, 2,7·50 = 135, 150·0,4 = 60, l'equazione dei due recipienti risolta riga per riga, il rapporto $\rho_f/\rho_i$ con il passaggio intermedio).
5. **Frasi «da evitare» quantificate**: «produrrebbe una densità più alta» è diventato 74/18 ≈ 4,1 g/cm³; «troppo bassa» 42/17 ≈ 2,5; «sovrastimerebbe» 70/10 = 7; il volume additivo non valido 100/70 ≈ 1,43.
6. **Voce impersonale** al posto di «registriamo», «sottraiamo», «supponiamo»; tolte le formule da laboratorio non spiegate («il modello», «compatibile», «configurazione» ora hanno la definizione accanto).
7. **Condizioni dell'immersione e casi del confronto in elenco**, uno per riga; i tre calcoli di unità dell'esempio sul liquido da 600 g separati (kg/L, kg/m³, g/cm³).
8. **Figure**: aggiunta dove mancava una frase che dice che cosa rappresentano punti e assi (P e Q, il punto E, le due curve dell'intervallo in kg/m³, la quota in volume come frazione $f$ in percentuale).

## Com'era / Com'è ora (dimostrazione di 1 g/cm³ = 1000 kg/m³)

**Com'era**

> Nel rapporto $1\,\mathrm{g}$ per $1\,\mathrm{cm}^3$, il numeratore diventa $10^{-3}\,\mathrm{kg}$ e il denominatore diventa $10^{-6}\,\mathrm{m}^3$. Il rapporto dei fattori è $\dfrac{10^{-3}}{10^{-6}}=10^3$. Lo stesso fattore trasforma qualsiasi valore numerico espresso in grammi al centimetro cubo.

**Com'è ora**

> Si scrivono il grammo in chilogrammi e il centimetro cubo in metri cubi.
>
> - Un chilogrammo sono $1000\,\mathrm{g}$, quindi $1\,\mathrm{g}$ è un millesimo di chilogrammo, che si scrive $10^{-3}\,\mathrm{kg}$.
> - Un metro sono $100\,\mathrm{cm}$, quindi un cubo con il lato di un metro contiene $100\cdot100\cdot100=10^{6}$ cubetti con il lato di un centimetro. Perciò $1\,\mathrm{cm^3}$ è un milionesimo di metro cubo, che si scrive $10^{-6}\,\mathrm{m^3}$.
>
> Nel rapporto $1\,\mathrm{g}$ per $1\,\mathrm{cm}^3$, il numeratore diventa $10^{-3}\,\mathrm{kg}$ e il denominatore diventa $10^{-6}\,\mathrm{m}^3$. Il rapporto dei fattori è $\dfrac{10^{-3}}{10^{-6}}=10^3$, perché dividere un millesimo per un milionesimo equivale a calcolare $\dfrac{1\,000\,000}{1000}=1000$. Lo stesso fattore trasforma qualsiasi valore numerico espresso in grammi al centimetro cubo.

Lo studente si perdeva perché né $10^{-6}$ né il motivo per cui un centimetro cubo è un milionesimo di metro cubo erano spiegati.

## Errori nell'originale

Nessuno. Tutti i numeri ricalcolati con Python (250/110, 117/41, 119/39, 118,5/39,5, 100/65, 42/15, intersezione delle rette a V = 20 e 66 g, lastra forata 135 g, ecc.) coincidono.

## Aggiunte per coprire gli esercizi

- **g/mL e kg/L** (usati in schede, tracce e domande): nel blocco `#unita`, con litro e millilitro definiti e 1 g/mL = 1 g/cm³ = 1 kg/L.
- **Direttamente proporzionale** (domande): nel blocco `#inverse`.
- **Media pesata** (domande): nel blocco `#miscele`, con un caso numerico (10 cm³ a 1 g/cm³ e 30 cm³ a 3 g/cm³ → 2,5 g/cm³; dati d'esercizio nuovi).
- **Intercetta** (schede e domande; l'ancora si chiamava già così ma la parola non compariva): nel blocco `#intercetta`, con l'equazione $m=50+2V$.
- **cm³/g** come unità di $1/\rho$ (domande): nel blocco `#grafico`.
- 1 cm³ = 1000 mm³ ora è ricavato (serve alle domande in g/mm³).

## Dubbi rimasti

- Dati reali aggiunti: densità dell'acqua circa 1 g/cm³; acqua e alcol mescolati occupano un volume minore della somma. Entrambi veri; il secondo è un esempio che l'originale non aveva.
- Le domande usano una volta `mg/mL`: il milligrammo non è spiegato in teoria (non ho trovato un blocco in cui entrasse senza allungare).
- Il titolo del blocco `#spostamento` è «Immersione e tara», ma la tara è definita nell'esempio `#tara` più sotto, come nell'originale. Non ho spostato contenuti fra blocchi.
- Inglese: nel blocco `#grafico` c'è una frase in più rispetto all'italiano (definisce *abscissa* e *ordinate*, perché in inglese gli assi si chiamano x-axis e y-axis). Grafia britannica, termini come nelle schede inglesi (tare, slope, graduated cylinder, submerged, holder, shell, cavity).
- Non ho eseguito la build del sito né guardato le figure rese: lo script di controllo ha reso entrambi i file senza errori (379 formule, 30 figure/svg ciascuno).
