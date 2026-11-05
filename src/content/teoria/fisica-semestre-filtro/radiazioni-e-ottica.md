---
titolo: Radiazioni, radioattività e ottica
sommario: Onde elettromagnetiche e fotoni, attenuazione, decadimento e attività, radiazioni ionizzanti, riflessione, rifrazione e lenti convergenti.
---

:::percorso
Le grandezze delle onde e i campi elettrici e magnetici permettono di descrivere la radiazione. Si distingue l'energia di ogni fotone dall'energia complessiva del fascio, poi si studiano attenuazione e decadimento. Le leggi dei raggi spiegano la formazione delle immagini mediante lenti.
:::

## Onde elettromagnetiche

:::definizione{#onde-em titolo="Campi che si propagano"}
Un'**onda elettromagnetica** trasporta energia mediante campi elettrico e magnetico variabili. In un'onda piana nel vuoto i campi sono perpendicolari fra loro e alla direzione di propagazione, oscillano in fase e hanno ampiezze legate da $E_0=cB_0$.
$$
c\simeq3{,}00\cdot10^8\,\mathrm{m/s},\qquad c=\lambda f.
$$
La propagazione può avvenire nel vuoto. Ampiezza e intensità descrivono aspetti diversi: nelle stesse condizioni l'intensità è proporzionale al quadrato dell'ampiezza del campo. In un mezzo trasparente la velocità di fase è $v=\dfrac cn$, con $n$ indice di rifrazione; attraversando un'interfaccia fissa la frequenza resta la stessa.
:::

## Spettro elettromagnetico

:::osservazione{#spettro titolo="Ordine delle regioni dello spettro"}
Nell'ordine seguente la frequenza e l'energia del singolo fotone aumentano, mentre la lunghezza d'onda nel vuoto diminuisce.

| Regione | Esempio di impiego o fenomeno |
| --- | --- |
| onde radio | comunicazioni, segnali a radiofrequenza |
| microonde | riscaldamento dielettrico |
| infrarosso | emissione termica |
| visibile | visione e strumenti ottici |
| ultravioletto | transizioni elettroniche, con effetti dipendenti dall'energia |
| raggi X | immagini radiografiche |
| raggi gamma | transizioni nucleari |

I confini fra le regioni sono convenzionali; raggi X e gamma possono sovrapporsi in energia e si distinguono anche per il meccanismo di produzione. La classificazione non sostituisce la descrizione dell'energia e dell'interazione con la materia.
:::

## Fotoni ed energia

:::definizione{#fotoni titolo="Energia del quanto di radiazione"}
L'energia di un **fotone** è proporzionale alla frequenza:
$$
E_\gamma=hf=\frac{hc}{\lambda},\qquad
h\simeq6{,}626\cdot10^{-34}\,\mathrm{J\,s}.
$$
Con $1\,\mathrm{eV}\simeq1{,}602\cdot10^{-19}\,\mathrm J$, una relazione utile è $E_\gamma\,(\mathrm{eV})\simeq\dfrac{1240}{\lambda\,(\mathrm{nm})}$. Per un fascio monocromatico di potenza $P$, il numero di fotoni emessi per unità di tempo è $\dot N=\dfrac P{E_\gamma}$. A frequenza fissata aumentare la potenza aumenta il numero di fotoni; l'energia del singolo fotone resta uguale.
:::

## Attenuazione e legge di Lambert-Beer

:::teorema{#attenuazione titolo="Trasmissione attraverso un mezzo"}
In un mezzo omogeneo, per un fascio monocromatico collimato nelle condizioni in cui l'attenuazione per unità di spessore è costante,
$$
I(x)=I_0e^{-\mu x}.
$$
$I_0$ è l'intensità incidente, $\mu$ il coefficiente lineare di attenuazione, con dimensione inversa di una lunghezza. La trasmittanza è $\mathcal T=\dfrac I{I_0}$. Lo spessore emivalente $x_{1/2}=\dfrac{\ln2}{\mu}$ riduce l'intensità alla metà; due spessori emivalenti la riducono a un quarto.

Nella forma spettrofotometrica decimale, l'assorbanza è $\mathcal A=\log_{10}\dfrac{I_0}{I}=\varepsilon c_s\ell$, con concentrazione $c_s$, cammino ottico $\ell$ e coefficiente di estinzione molare $\varepsilon$ nelle unità coerenti. Si distinguono l'esponenziale naturale dell'attenuazione e il logaritmo decimale dell'assorbanza.
:::

## Nuclei instabili e tipi di decadimento

:::definizione{#decadimenti titolo="Radioattività e trasformazioni nucleari"}
Un nucleo si indica con ${}^{A}_{Z}X$: $Z$ è il numero di protoni e $A$ quello totale di protoni e neutroni. Gli **isotopi** hanno lo stesso $Z$ e diverso numero di neutroni. Un radionuclide può trasformarsi spontaneamente emettendo particelle o fotoni.

| Decadimento | Cambiamento del nucleo figlio |
| --- | --- |
| alfa, emissione di ${}^{4}_{2}\mathrm{He}$ | $A\to A-4$, $Z\to Z-2$ |
| beta meno, $n\to p+e^-+\bar\nu_e$ | $A$ invariato, $Z\to Z+1$ |
| beta più, $p\to n+e^++\nu_e$ | $A$ invariato, $Z\to Z-1$ |
| gamma, emissione di un fotone da uno stato eccitato | $A$ e $Z$ invariati |

Nei decadimenti beta intervengono anche neutrini o antineutrini. Una radiazione gamma è elettromagnetica; alfa e beta sono costituite da particelle massive.
:::

## Legge di decadimento ed emivita

:::teorema{#decadimento-esponenziale titolo="Numero di nuclei non decaduti"}
Per un radionuclide isolato, senza produzione aggiuntiva o nuclei precursori, ogni nucleo ha la stessa probabilità di decadere per unità di tempo. Il numero medio di nuclei non decaduti segue
$$
N(t)=N_0e^{-\lambda_d t},\qquad
T_{1/2}=\frac{\ln2}{\lambda_d},\qquad
\frac{N(t)}{N_0}=2^{-t/T_{1/2}}.
$$
La costante $\lambda_d$ ha dimensione di inverso del tempo e si distingue dalla lunghezza d'onda $\lambda$. Dopo tre emivite resta $\dfrac18$ del numero iniziale. La legge descrive una media statistica; non consente di prevedere quando decadrà un singolo nucleo.

::grafico{f="exp(-log(2)*x)" xmin=0 xmax=4 ymin=0 ymax=1.1 nomi="t/T½,N/N₀" legenda=0 punti="0,1;1,0.5;2,0.25;3,0.125" titolo="A ogni emivita si dimezza la frazione dei nuclei iniziali non ancora decaduti."}
:::

## Attività di una sorgente

:::definizione{#attivita titolo="Decadimenti per unità di tempo"}
L'**attività** è il numero medio di decadimenti per unità di tempo:
$$
\mathscr A(t)=-\frac{dN}{dt}=\lambda_dN(t)
=\mathscr A_0e^{-\lambda_d t}.
$$
Si misura in becquerel, $1\,\mathrm{Bq}=1\,\mathrm{s^{-1}}$. Anche l'attività del radionuclide iniziale si dimezza a ogni emivita. Attività e numero di nuclei sono grandezze diverse: una sorgente da $1000\,\mathrm{Bq}$ produce mediamente $1000$ decadimenti al secondo, senza specificare da sola l'energia emessa o assorbita da un corpo.
:::

## Ionizzazione ed effetti della radiazione

:::definizione{#ionizzazione titolo="Radiazioni ionizzanti e non ionizzanti"}
La **ionizzazione** rimuove elettroni da atomi o molecole. Per un fotone la possibilità di ionizzare dipende dall'energia $hf$ e dall'energia di ionizzazione del bersaglio. Radio, microonde e infrarosso sono esempi di radiazione non ionizzante; raggi X e gamma sono ionizzanti. L'ultravioletto comprende energie diverse e non si classifica tutto allo stesso modo rispetto a ogni bersaglio.

Anche particelle alfa e beta possono ionizzare la materia. Gli effetti dipendono da energia depositata, tipo di radiazione, durata, distribuzione spaziale e materiale irradiato. Un'elevata intensità di radiazione non ionizzante può produrre effetti termici: intensità e capacità del singolo fotone di ionizzare descrivono proprietà distinte.
:::

## Riflessione e rifrazione

:::teorema{#snell titolo="Leggi dei raggi"}
All'interfaccia fra due mezzi isotropi, raggio incidente, riflesso, rifratto e normale giacciono nello stesso piano. Gli angoli si misurano rispetto alla **normale** alla superficie:
$$
\theta_r=\theta_i,\qquad n_1\sin\theta_i=n_2\sin\theta_t.
$$
La seconda è la **legge di Snell**. Se $n_2>n_1$ il raggio rifratto si avvicina alla normale. La frequenza resta uguale e $\lambda_2=\dfrac{\lambda_0}{n_2}$, con $\lambda_0$ lunghezza d'onda nel vuoto. Se $n_1>n_2$, per angoli oltre $\theta_c=\arcsin\dfrac{n_2}{n_1}$ si ha riflessione totale, nelle condizioni dell'ottica geometrica.
:::

## Lenti convergenti sottili

:::teorema{#lenti titolo="Punti coniugati e ingrandimento"}
Per una lente sottile convergente in aria, nell'approssimazione dei raggi vicini all'asse, si usa la convenzione $f>0$, $p>0$ per un oggetto reale, $q>0$ per un'immagine reale sul lato opposto all'oggetto:
$$
\frac1f=\frac1p+\frac1q,\qquad
M=-\frac qp.
$$
Se $p>f$, l'immagine è reale e capovolta. Se $0<p<f$, allora $q<0$ e l'immagine è virtuale e diritta. Con $p=f$ i raggi emergono paralleli e l'immagine è all'infinito. Il potere diottrico è $D=\dfrac1f$ con $f$ in metri, espresso in diottrie.

Per una lente con $f=10\,\mathrm{cm}$ e un oggetto a $30\,\mathrm{cm}$,
$$
\frac1q=\frac1{10}-\frac1{30}=\frac1{15}\,\mathrm{cm^{-1}},
\qquad q=15\,\mathrm{cm},\quad M=-\frac12.
$$
L'immagine è reale, capovolta e alta metà dell'oggetto. Nel disegno dei raggi, un raggio parallelo all'asse passa dopo la lente per il fuoco immagine; un raggio attraverso il centro ottico prosegue senza deviazione nel modello di lente sottile.
:::
