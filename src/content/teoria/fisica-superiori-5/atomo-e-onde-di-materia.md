---
titolo: Atomo di Bohr, onde di materia e principio di indeterminazione
sommario: Come gli spettri a righe e l'esperimento di Rutherford portano al modello atomico di Bohr, come si ricavano raggi e livelli di energia dell'atomo di idrogeno, che cosa sono le onde di materia di de Broglie, che cosa afferma il principio di indeterminazione di Heisenberg e come si calcolano i livelli di energia di una particella in una scatola.
---

## Spettri atomici e formula di Rydberg

:::definizione{#spettro-emissione-assorbimento titolo="Spettri di emissione e di assorbimento"}
La luce emessa da un gas rarefatto, eccitato con una scarica elettrica o riscaldato, si scompone con un prisma o con un reticolo di diffrazione. Si ottiene uno **spettro di emissione a righe**, cioè un insieme di righe luminose separate, ciascuna con una lunghezza d'onda precisa. Se invece la luce bianca, che contiene tutte le lunghezze d'onda, attraversa lo stesso gas freddo, nello spettro continuo compaiono righe scure. Questo è lo **spettro di assorbimento**, e le righe scure si trovano alle stesse lunghezze d'onda delle righe di emissione.

Ogni elemento chimico ha un proprio insieme di righe, perciò lo spettro serve a riconoscere gli elementi presenti in un gas, anche in una stella lontana. Per esempio l'idrogeno emette nel visibile quattro righe, di lunghezze d'onda $656\,\mathrm{nm}$ (rossa), $486\,\mathrm{nm}$ (azzurra), $434\,\mathrm{nm}$ e $410\,\mathrm{nm}$ (violette).

::grafico{assi=0 uguale=1 poligoni="3.4,0 7.2,0 7.2,1 3.4,1" linee="6.563,0 6.563,1;4.861,0 4.861,1;4.341,0 4.341,1;4.102,0 4.102,1;4,0 4,-0.12;5,0 5,-0.12;6,0 6,-0.12;7,0 7,-0.12" segmenti="3.646,0,3.646,1" etichette="6.45,1.2,Hα;4.75,1.2,Hβ;4.25,1.2,Hγ;3.95,1.45,Hδ;3.45,1.2,limite;3.7,-0.42,400 nm;4.7,-0.42,500 nm;5.7,-0.42,600 nm;6.7,-0.42,700 nm" xmin=3.2 xmax=7.4 ymin=-0.7 ymax=1.7 titolo="Righe della serie di Balmer dell'idrogeno: $656{,}3\,\mathrm{nm}$, $486{,}1\,\mathrm{nm}$, $434{,}1\,\mathrm{nm}$ e $410{,}2\,\mathrm{nm}$; le righe si infittiscono verso il limite della serie, a $364{,}6\,\mathrm{nm}$ (tratteggiato)"}

:::

:::teorema{#formula-di-rydberg titolo="Formula di Rydberg"}
Le lunghezze d'onda $\lambda$ delle righe dello spettro dell'idrogeno soddisfano la relazione
$$
\frac{1}{\lambda} = R_H \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) ,
$$
dove $n_f$ e $n_i$ sono numeri naturali con $n_i > n_f \geq 1$ e $R_H = 1{,}097 \cdot 10^{7}\,\mathrm{m^{-1}}$ è la **costante di Rydberg**. È una legge sperimentale, trovata cercando una regola nei valori misurati; nel modello di Bohr la si ricava.

Le righe visibili si ottengono con $n_f = 2$ e formano la **serie di Balmer**. Per esempio con $n_i = 3$ si ha
$$
\frac{1}{\lambda} = 1{,}097 \cdot 10^{7} \left( \frac{1}{4} - \frac{1}{9} \right) \mathrm{m^{-1}} = 1{,}524 \cdot 10^{6}\,\mathrm{m^{-1}} ,
\qquad
\lambda = 656{,}3\,\mathrm{nm} ,
$$
che è la riga rossa $\mathrm{H}_\alpha$.
:::

:::osservazione{#serie-spettrali titolo="Serie spettrali dell'idrogeno"}
Le righe con lo stesso valore di $n_f$ formano una **serie**.

- Con $n_f = 1$ si ha la serie di Lyman, nell'ultravioletto: la prima riga, con $n_i = 2$, ha $\lambda = 121{,}5\,\mathrm{nm}$.
- Con $n_f = 2$ si ha la serie di Balmer, nel visibile e nel vicino ultravioletto.
- Con $n_f = 3$ si ha la serie di Paschen, nell'infrarosso: la prima riga, con $n_i = 4$, ha $\lambda = 1875\,\mathrm{nm}$.

Quando $n_i$ cresce, il termine $\dfrac{1}{n_i^2}$ tende a $0$, quindi le righe di una serie si avvicinano a una lunghezza d'onda limite $\lambda_\infty = \dfrac{n_f^2}{R_H}$. Per la serie di Balmer il limite è $\lambda_\infty = \dfrac{4}{1{,}097 \cdot 10^{7}}\,\mathrm{m} = 364{,}6\,\mathrm{nm}$.
:::

## Dal modello di Thomson al nucleo di Rutherford

:::osservazione{#modello-di-thomson titolo="Modello atomico di Thomson"}
Dopo la scoperta dell'elettrone, Thomson propose che l'atomo fosse una sfera di carica positiva distribuita in modo uniforme, di raggio circa $10^{-10}\,\mathrm{m}$, con gli elettroni immersi al suo interno. L'atomo è neutro, perciò la carica positiva totale è uguale alla carica degli elettroni. In questo modello la carica positiva è sparsa su tutto il volume dell'atomo, quindi il campo elettrico al suo interno è debole e una particella carica veloce lo attraversa venendo deviata di pochissimo.
:::

:::osservazione{#esperimento-di-rutherford titolo="Esperimento di Rutherford"}
Nell'esperimento di Geiger, Marsden e Rutherford un fascio di particelle $\alpha$, che sono nuclei di elio con carica $+2e$ ed energia cinetica di alcuni $\mathrm{MeV}$, colpisce una lamina d'oro molto sottile. Uno schermo fluorescente registra in quale direzione escono le particelle. Si misura che quasi tutte le particelle attraversano la lamina senza deviare, ma alcune vengono deviate di angoli grandi e una frazione piccolissima torna indietro.

Il modello di Thomson non spiega le deviazioni grandi, perché in esso il campo elettrico è troppo debole. Rutherford ne concluse che la carica positiva e quasi tutta la massa dell'atomo sono concentrate in una regione piccolissima al centro, il **nucleo**, e che gli elettroni si trovano attorno al nucleo, in uno spazio quasi vuoto. Una particella $\alpha$ che passa vicino al nucleo subisce una forte repulsione elettrica e viene deviata lungo un ramo di iperbole.

::grafico{assi=0 uguale=1 linee="-7.5,0.25 -4.84,0.25 -2.62,0.26 -1.65,0.28 -1.25,0.30 -0.95,0.36 -0.82,0.47 -0.85,0.68 -1.01,0.98 -1.36,1.54 -1.77,2.18 -2.22,2.86 -2.69,3.56 -3.17,4.28;-7.5,0.8 -4.84,0.81 -2.61,0.84 -1.62,0.89 -1.19,0.95 -0.81,1.06 -0.5,1.25 -0.22,1.53 0.05,1.88 0.45,2.5 0.86,3.18 1.28,3.9 1.56,4.4;-7.5,2 -4.84,2.01 -2.85,2.06 -1.77,2.13 -1.0,2.22 -0.26,2.38 0.47,2.61 1.21,2.89 1.97,3.21 2.74,3.56 3.53,3.92 4.32,4.29 4.86,4.54;-7.5,-2 -4.84,-2.01 -2.85,-2.06 -1.77,-2.13 -1.0,-2.22 -0.26,-2.38 0.47,-2.61 1.21,-2.89 1.97,-3.21 2.74,-3.56 3.53,-3.92 4.32,-4.29 4.86,-4.54" vettori="-7.5,-3.6,-5.5,-3.6,α" punti="0,0,pieno,nucleo" xmin=-8 xmax=6 ymin=-4.8 ymax=4.8 titolo="Traiettorie di particelle $\alpha$ respinte da un nucleo: più la particella passa vicino al nucleo, più è grande l'angolo di deviazione"}

:::

:::richiamo{titolo="Energia potenziale elettrica di due cariche puntiformi"}
Due cariche puntiformi $q_1$ e $q_2$ poste alla distanza $r$ nel vuoto hanno energia potenziale elettrica $U = \dfrac{1}{4\pi\varepsilon_0} \dfrac{q_1 q_2}{r}$, con $\dfrac{1}{4\pi\varepsilon_0} = 8{,}99 \cdot 10^{9}\,\mathrm{N\cdot m^2/C^2}$, e si attraggono o si respingono con una forza di modulo $F = \dfrac{1}{4\pi\varepsilon_0} \dfrac{|q_1 q_2|}{r^2}$ (legge di Coulomb).
:::

:::esempio{titolo="Una stima delle dimensioni del nucleo"}
Una particella $\alpha$ con energia cinetica $K = 5{,}0\,\mathrm{MeV}$ si dirige frontalmente verso un nucleo d'oro, che ha carica $Ze$ con $Z = 79$. Il nucleo è molto più pesante della particella e si considera fermo. La particella rallenta, si ferma alla distanza minima $d$ e torna indietro. Per la conservazione dell'energia l'energia cinetica iniziale è uguale all'energia potenziale elettrica nel punto di arresto, quindi
$$
K = \frac{1}{4\pi\varepsilon_0} \frac{2e \cdot Ze}{d}
\qquad \Longrightarrow \qquad
d = \frac{1}{4\pi\varepsilon_0} \frac{2 Z e^2}{K} = 8{,}99 \cdot 10^{9} \cdot \frac{2 \cdot 79 \cdot \left( 1{,}60 \cdot 10^{-19} \right)^2}{5{,}0 \cdot 1{,}60 \cdot 10^{-13}}\,\mathrm{m} \approx 4{,}5 \cdot 10^{-14}\,\mathrm{m} ,
$$
dove $1\,\mathrm{MeV} = 1{,}60 \cdot 10^{-13}\,\mathrm{J}$. La particella si avvicina fino a $4{,}5 \cdot 10^{-14}\,\mathrm{m}$ senza toccare il nucleo, perciò il raggio del nucleo d'oro è minore di questa distanza, che è già circa duemila volte più piccola del raggio dell'atomo.
:::

:::osservazione{#instabilita-modello-planetario titolo="Instabilità del modello planetario"}
Nel modello di Rutherford gli elettroni ruotano attorno al nucleo, attratti dalla forza di Coulomb, come i pianeti attorno al Sole. Un elettrone in moto circolare ha un'accelerazione centripeta e, secondo l'elettromagnetismo classico, una carica accelerata emette onde elettromagnetiche, come si è visto nell'argomento sulle equazioni di Maxwell. L'elettrone dovrebbe quindi perdere energia con continuità, avvicinarsi al nucleo lungo una spirale e cadere su di esso in un tempo dell'ordine di $10^{-11}\,\mathrm{s}$; durante la caduta emetterebbe uno spettro continuo. Gli atomi invece sono stabili ed emettono spettri a righe, perciò il modello planetario classico è in contrasto con l'esperienza.
:::

## Modello di Bohr dell'atomo di idrogeno

:::teorema{#postulati-di-bohr titolo="Postulati di Bohr"}
Nel 1913 Bohr descrisse l'atomo di idrogeno, formato da un protone e da un elettrone, con tre postulati.

1. L'elettrone si muove attorno al nucleo su orbite circolari, sotto l'azione della forza di Coulomb. Esistono solo alcune orbite permesse, dette **stati stazionari**: su di esse l'elettrone *non* emette radiazione e la sua energia resta costante.
2. Le orbite permesse sono quelle in cui il prodotto della massa per la velocità e per il raggio è un multiplo intero di $\dfrac{h}{2\pi}$, cioè $m_e v r = n \dfrac{h}{2\pi}$ con $n = 1, 2, 3, \ldots$ Il numero naturale $n$ si chiama **numero quantico principale**.
3. L'atomo emette o assorbe radiazione solo quando l'elettrone passa da un'orbita permessa a un'altra. Se l'elettrone passa da un livello di energia $E_i$ a un livello più basso $E_f$, viene emesso un fotone di frequenza $f$ tale che $h f = E_i - E_f$.

Sono postulati, scelti da Bohr per spiegare la stabilità degli atomi e gli spettri a righe; le loro conseguenze si confrontano con le misure. Il secondo postulato fissa i raggi e le energie delle orbite, il terzo collega le energie alle frequenze delle righe. Per esempio un elettrone che scende tra due livelli che differiscono di $1{,}89\,\mathrm{eV}$ emette un fotone di frequenza $f = \dfrac{1{,}89 \cdot 1{,}60 \cdot 10^{-19}}{6{,}63 \cdot 10^{-34}}\,\mathrm{Hz} \approx 4{,}56 \cdot 10^{14}\,\mathrm{Hz}$.
:::

:::richiamo{titolo="Moto circolare uniforme"}
Un corpo di massa $m$ che percorre una circonferenza di raggio $r$ con velocità di modulo costante $v$ ha accelerazione centripeta $a = \dfrac{v^2}{r}$, diretta verso il centro. Per il secondo principio della dinamica la risultante delle forze che agiscono sul corpo è diretta verso il centro e ha modulo $F = \dfrac{m v^2}{r}$.
:::

::::teorema{#raggi-orbite-bohr titolo="Raggi e velocità delle orbite di Bohr"}
Nel modello di Bohr l'orbita con numero quantico $n$ ha raggio e velocità
$$
r_n = n^2 r_1 ,
\qquad
r_1 = \frac{\varepsilon_0 h^2}{\pi m_e e^2} \approx 5{,}3 \cdot 10^{-11}\,\mathrm{m} ,
\qquad
v_n = \frac{e^2}{2 \varepsilon_0 h\, n} = \frac{v_1}{n} ,
\qquad
v_1 \approx 2{,}2 \cdot 10^{6}\,\mathrm{m/s} .
$$
Il raggio $r_1$ dell'orbita più piccola si chiama **raggio di Bohr**, e il suo valore è in accordo con le dimensioni degli atomi ricavate in altri modi. I raggi crescono come i quadrati dei numeri naturali, quindi $r_2 = 4 r_1 \approx 2{,}1 \cdot 10^{-10}\,\mathrm{m}$ e $r_3 = 9 r_1 \approx 4{,}8 \cdot 10^{-10}\,\mathrm{m}$. La velocità $v_1$ è circa $\dfrac{1}{137}$ della velocità della luce, perciò $v \ll c$ e l'uso della meccanica classica è giustificato.

::grafico{assi=0 uguale=1 curve="0.5*cos(t),0.5*sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29;4.5*cos(t),4.5*sin(t),0,6.29" vettori="0,4.5,0,2.1,hf" punti="0,0,pieno" etichette="0.35,0.55,n = 1;1.5,1.75,n = 2;3.3,3.35,n = 3" xmin=-5 xmax=5 ymin=-5 ymax=5 legenda=0 titolo="Le prime tre orbite di Bohr, con raggi $r_1$, $4 r_1$ e $9 r_1$; la freccia indica il salto dall'orbita $n = 3$ all'orbita $n = 2$, in cui viene emesso un fotone"}

:::dimostrazione
L'idea è mettere a sistema la legge del moto circolare, con la forza di Coulomb come forza centripeta, e la condizione del secondo postulato. La forza tra protone ed elettrone ha modulo $\dfrac{1}{4\pi\varepsilon_0} \dfrac{e^2}{r^2}$ ed è diretta verso il protone, quindi
$$
\begin{cases}
\dfrac{1}{4\pi\varepsilon_0} \dfrac{e^2}{r^2} = \dfrac{m_e v^2}{r} \\[12pt]
m_e v r = n \dfrac{h}{2\pi}
\end{cases}
$$
Moltiplicando la prima equazione per $r$ si ottiene $m_e v^2 = \dfrac{e^2}{4\pi\varepsilon_0 r}$. Dalla seconda equazione si ricava $v = \dfrac{n h}{2\pi m_e r}$, e sostituendo si ha
$$
m_e \cdot \frac{n^2 h^2}{4\pi^2 m_e^2 r^2} = \frac{e^2}{4\pi\varepsilon_0 r}
\qquad \Longrightarrow \qquad
\frac{n^2 h^2}{\pi m_e r} = \frac{e^2}{\varepsilon_0} ,
$$
dove si è moltiplicato per $4\pi r$ entrambi i membri. Isolando $r$ si trova
$$
r_n = \frac{\varepsilon_0 h^2}{\pi m_e e^2}\, n^2 .
$$
Infine $v_n = \dfrac{n h}{2\pi m_e r_n} = \dfrac{n h}{2\pi m_e} \cdot \dfrac{\pi m_e e^2}{\varepsilon_0 h^2 n^2} = \dfrac{e^2}{2 \varepsilon_0 h\, n}$. Con i valori delle costanti
$$
r_1 = \frac{8{,}85 \cdot 10^{-12} \cdot \left( 6{,}63 \cdot 10^{-34} \right)^2}{\pi \cdot 9{,}11 \cdot 10^{-31} \cdot \left( 1{,}60 \cdot 10^{-19} \right)^2}\,\mathrm{m} \approx 5{,}3 \cdot 10^{-11}\,\mathrm{m} ,
\qquad
v_1 = \frac{\left( 1{,}60 \cdot 10^{-19} \right)^2}{2 \cdot 8{,}85 \cdot 10^{-12} \cdot 6{,}63 \cdot 10^{-34}}\,\mathrm{m/s} \approx 2{,}2 \cdot 10^{6}\,\mathrm{m/s} .
$$
:::
::::

::::teorema{#livelli-energia-idrogeno titolo="Livelli di energia dell'atomo di idrogeno"}
Nel modello di Bohr l'energia totale dell'elettrone sull'orbita con numero quantico $n$ è
$$
E_n = -\frac{m_e e^4}{8 \varepsilon_0^2 h^2} \cdot \frac{1}{n^2} = -\frac{13{,}6\,\mathrm{eV}}{n^2} .
$$
L'energia può assumere solo questi valori, detti **livelli di energia**, e per questo si dice che l'energia è **quantizzata**. Il livello più basso, $E_1 = -13{,}6\,\mathrm{eV}$, si chiama **stato fondamentale**; gli altri si chiamano stati eccitati. L'energia è negativa perché l'elettrone è legato al protone, e lo zero corrisponde all'elettrone fermo a distanza infinita. Per esempio $E_2 = -\dfrac{13{,}6}{4}\,\mathrm{eV} = -3{,}40\,\mathrm{eV}$ e $E_3 = -\dfrac{13{,}6}{9}\,\mathrm{eV} \approx -1{,}51\,\mathrm{eV}$. Nella dimostrazione si ricava anche che l'energia cinetica e l'energia potenziale sono $K_n = -E_n$ e $U_n = 2 E_n$; nello stato fondamentale $K_1 = 13{,}6\,\mathrm{eV}$ e $U_1 = -27{,}2\,\mathrm{eV}$.

:::dimostrazione
L'energia totale è la somma dell'energia cinetica dell'elettrone e dell'energia potenziale elettrica del sistema protone-elettrone, che ha cariche $+e$ e $-e$:
$$
E = \frac{1}{2} m_e v^2 - \frac{1}{4\pi\varepsilon_0} \frac{e^2}{r} .
$$
Dalla legge del moto circolare, usata nella dimostrazione del teorema sui raggi delle orbite, si ha $m_e v^2 = \dfrac{e^2}{4\pi\varepsilon_0 r}$, quindi l'energia cinetica è $K = \dfrac{1}{2} \cdot \dfrac{e^2}{4\pi\varepsilon_0 r}$, cioè la metà del valore assoluto dell'energia potenziale. Perciò
$$
E = \frac{e^2}{8\pi\varepsilon_0 r} - \frac{e^2}{4\pi\varepsilon_0 r} = -\frac{e^2}{8\pi\varepsilon_0 r} .
$$
Da qui segue $K = -E$ e $U = 2E$. Sostituendo il raggio $r_n = \dfrac{\varepsilon_0 h^2 n^2}{\pi m_e e^2}$ si ottiene
$$
E_n = -\frac{e^2}{8\pi\varepsilon_0} \cdot \frac{\pi m_e e^2}{\varepsilon_0 h^2 n^2} = -\frac{m_e e^4}{8 \varepsilon_0^2 h^2 n^2} .
$$
Con i valori delle costanti si ha $\dfrac{m_e e^4}{8 \varepsilon_0^2 h^2} \approx 2{,}17 \cdot 10^{-18}\,\mathrm{J}$, cioè circa $13{,}5\,\mathrm{eV}$. Il valore misurato è $13{,}6\,\mathrm{eV}$, e la piccola differenza dipende dall'arrotondamento delle costanti a tre cifre.
:::
::::

## Transizioni, righe spettrali e ionizzazione

:::teorema{#transizioni-righe-spettrali titolo="Fotoni emessi e assorbiti nelle transizioni"}
Il passaggio dell'elettrone da un livello all'altro si chiama **transizione**. Per il terzo postulato di Bohr e per i livelli di energia dell'idrogeno, in una transizione dal livello $n_i$ al livello $n_f < n_i$ viene emesso un fotone di energia
$$
E_{\text{fotone}} = h f = \frac{h c}{\lambda} = E_{n_i} - E_{n_f} = 13{,}6\,\mathrm{eV} \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) .
$$
Viceversa, l'atomo assorbe un fotone solo se la sua energia è uguale alla differenza tra due livelli, e in questo caso l'elettrone sale al livello più alto. Per questo le righe di assorbimento coincidono con le righe di emissione.

Nella transizione da $n_i = 3$ a $n_f = 2$ il fotone emesso ha energia $13{,}6 \left( \dfrac{1}{4} - \dfrac{1}{9} \right) \mathrm{eV} \approx 1{,}89\,\mathrm{eV}$ e lunghezza d'onda
$$
\lambda = \frac{h c}{E_{\text{fotone}}} = \frac{6{,}63 \cdot 10^{-34} \cdot 3{,}00 \cdot 10^{8}}{1{,}89 \cdot 1{,}60 \cdot 10^{-19}}\,\mathrm{m} \approx 658\,\mathrm{nm} ,
$$
in accordo entro lo $0{,}3\%$ con la riga $\mathrm{H}_\alpha$ misurata, di $656{,}3\,\mathrm{nm}$.

::grafico{assi=0 linee="1,-13.6 9,-13.6;1,-3.4 9,-3.4;1,-1.51 9,-1.51;1,-0.85 9,-0.85;1,-0.544 9,-0.544;1,0 9,0" vettori="2,-3.4,2,-13.6;3,-1.51,3,-13.6;4,-0.85,4,-13.6;6,-1.51,6,-3.4;7,-0.85,7,-3.4;8,-0.544,8,-3.4" etichette="4.4,-8.5,Lyman;6.1,-4.6,Balmer;9.2,-13.8,n = 1   −13,6 eV;9.2,-3.6,n = 2   −3,40 eV;9.2,-1.75,n = 3   −1,51 eV;9.2,-0.95,n = 4;9.2,0.25,E = 0" xmin=0 xmax=12.5 ymin=-14.5 ymax=1 titolo="Livelli di energia dell'atomo di idrogeno: le transizioni verso $n = 1$ danno la serie di Lyman, quelle verso $n = 2$ la serie di Balmer"}

:::

:::definizione{#energia-di-ionizzazione titolo="Energia di ionizzazione"}
L'**energia di ionizzazione** di un atomo è l'energia minima da fornire all'elettrone per allontanarlo a distanza infinita, cioè per portarlo dal livello in cui si trova all'energia $E = 0$. Per l'atomo di idrogeno nello stato fondamentale vale
$$
E_{\text{ion}} = 0 - E_1 = 13{,}6\,\mathrm{eV} ,
$$
in accordo con il valore misurato. Dal livello $n$ l'energia di ionizzazione è $\dfrac{13{,}6\,\mathrm{eV}}{n^2}$; dal livello $n = 2$ è $3{,}40\,\mathrm{eV}$, che corrisponde a un fotone di lunghezza d'onda $\lambda = \dfrac{h c}{3{,}40\,\mathrm{eV}} \approx 366\,\mathrm{nm}$, vicina al limite della serie di Balmer. Se l'energia fornita supera l'energia di ionizzazione, la differenza diventa energia cinetica dell'elettrone liberato.
:::

::::teorema{#formula-rydberg-ricavata titolo="Formula di Rydberg dal modello di Bohr"}
Il modello di Bohr dà la formula di Rydberg, con la costante
$$
R_H = \frac{m_e e^4}{8 \varepsilon_0^2 h^3 c} .
$$
Con i valori arrotondati delle costanti si ottiene $R_H \approx 1{,}09 \cdot 10^{7}\,\mathrm{m^{-1}}$, in accordo con il valore misurato $1{,}097 \cdot 10^{7}\,\mathrm{m^{-1}}$. Questo accordo, ottenuto partendo solo da $m_e$, $e$, $\varepsilon_0$, $h$ e $c$, fu la principale conferma del modello. Il modello dà anche il significato dei numeri $n_i$ e $n_f$, che sono i numeri quantici del livello di partenza e del livello di arrivo.

:::dimostrazione
In una transizione da $n_i$ a $n_f < n_i$ il fotone emesso ha energia $\dfrac{h c}{\lambda} = E_{n_i} - E_{n_f}$. Con l'espressione dei livelli di energia si ha
$$
\frac{h c}{\lambda} = -\frac{m_e e^4}{8 \varepsilon_0^2 h^2 n_i^2} + \frac{m_e e^4}{8 \varepsilon_0^2 h^2 n_f^2} = \frac{m_e e^4}{8 \varepsilon_0^2 h^2} \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) .
$$
Dividendo entrambi i membri per $h c$ si ottiene
$$
\frac{1}{\lambda} = \frac{m_e e^4}{8 \varepsilon_0^2 h^3 c} \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) ,
$$
che è la formula di Rydberg con la costante dell'enunciato.
:::
::::

:::osservazione{#esperimento-franck-hertz titolo="Esperimento di Franck e Hertz"}
Nel 1914 Franck e Hertz accelerarono elettroni attraverso un tubo contenente vapore di mercurio e misurarono la corrente che arriva all'elettrodo raccoglitore al variare della tensione acceleratrice. Si osserva che la corrente cresce con la tensione, ma cala bruscamente ogni volta che la tensione aumenta di circa $4{,}9\,\mathrm{V}$. Un elettrone con energia cinetica minore di $4{,}9\,\mathrm{eV}$ urta gli atomi di mercurio senza perdere energia; quando la sua energia raggiunge $4{,}9\,\mathrm{eV}$, la cede a un atomo, che passa al primo stato eccitato. Nello stesso tempo il vapore emette radiazione ultravioletta di lunghezza d'onda
$$
\lambda = \frac{h c}{4{,}9\,\mathrm{eV}} = \frac{6{,}63 \cdot 10^{-34} \cdot 3{,}00 \cdot 10^{8}}{4{,}9 \cdot 1{,}60 \cdot 10^{-19}}\,\mathrm{m} \approx 254\,\mathrm{nm} ,
$$
emessa dagli atomi che tornano allo stato fondamentale. L'esperimento conferma, senza usare la luce, che gli atomi assorbono energia solo in quantità determinate.
:::

## Onde di materia

:::richiamo{titolo="Energia e quantità di moto del fotone"}
Un fotone di frequenza $f$ e lunghezza d'onda $\lambda$ ha energia $E = h f$ e quantità di moto di modulo $p = \dfrac{h}{\lambda}$. Si rimanda all'argomento su corpo nero, effetto fotoelettrico ed effetto Compton.
:::

:::teorema{#ipotesi-di-de-broglie titolo="Ipotesi di de Broglie"}
Nel 1924 de Broglie ipotizzò che il dualismo onda-corpuscolo valga anche per le particelle materiali. A una particella con quantità di moto di modulo $p$ è associata un'onda, detta **onda di materia**, di lunghezza d'onda
$$
\lambda = \frac{h}{p} .
$$
È un'ipotesi, confermata dall'esperimento di Davisson e Germer. Per velocità molto minori di $c$ si ha $p = m v$. La lunghezza d'onda di de Broglie decide se gli effetti ondulatori sono osservabili. Questi effetti compaiono quando la particella interagisce con oggetti di dimensioni paragonabili a $\lambda$. Per un elettrone con velocità $v = 1{,}0 \cdot 10^{6}\,\mathrm{m/s}$ si ha
$$
\lambda = \frac{h}{m_e v} = \frac{6{,}63 \cdot 10^{-34}}{9{,}11 \cdot 10^{-31} \cdot 1{,}0 \cdot 10^{6}}\,\mathrm{m} \approx 7{,}3 \cdot 10^{-10}\,\mathrm{m} ,
$$
che è dell'ordine delle distanze tra gli atomi di un cristallo.
:::

:::esempio{titolo="Elettroni accelerati e corpi macroscopici"}
Un elettrone, inizialmente fermo, viene accelerato dalla differenza di potenziale $V = 100\,\mathrm{V}$. Acquista l'energia cinetica $K = eV$, e poiché $K = \dfrac{p^2}{2 m_e}$ la quantità di moto è $p = \sqrt{2 m_e e V}$. Quindi
$$
\lambda = \frac{h}{\sqrt{2 m_e e V}} = \frac{6{,}63 \cdot 10^{-34}}{\sqrt{2 \cdot 9{,}11 \cdot 10^{-31} \cdot 1{,}60 \cdot 10^{-19} \cdot 100}}\,\mathrm{m} \approx 1{,}23 \cdot 10^{-10}\,\mathrm{m} = 0{,}123\,\mathrm{nm} .
$$
Una palla da tennis di massa $0{,}15\,\mathrm{kg}$ lanciata a $30\,\mathrm{m/s}$ ha invece
$$
\lambda = \frac{6{,}63 \cdot 10^{-34}}{0{,}15 \cdot 30}\,\mathrm{m} \approx 1{,}5 \cdot 10^{-34}\,\mathrm{m} ,
$$
un valore enormemente più piccolo di qualsiasi oggetto con cui la palla può interagire. Per questo motivo gli effetti ondulatori dei corpi macroscopici non si osservano.
:::

::::teorema{#onde-stazionarie-bohr titolo="Orbite di Bohr e onde stazionarie"}
La condizione del secondo postulato di Bohr, $m_e v r = n \dfrac{h}{2\pi}$, equivale alla condizione che la circonferenza dell'orbita contenga un numero intero di lunghezze d'onda di de Broglie dell'elettrone:
$$
2\pi r_n = n \lambda_n .
$$
L'onda associata all'elettrone si richiude su sé stessa senza interferire in modo distruttivo e forma un'**onda stazionaria**, come una corda vibrante richiusa ad anello. Le orbite permesse sono quindi quelle su cui l'onda dell'elettrone è stazionaria. Per esempio sull'orbita $n = 1$ si ha $\lambda_1 = 2\pi r_1 \approx 2\pi \cdot 5{,}3 \cdot 10^{-11}\,\mathrm{m} \approx 3{,}3 \cdot 10^{-10}\,\mathrm{m}$.

::grafico{assi=0 uguale=1 curve="(3+0.45*sin(4*t))*cos(t),(3+0.45*sin(4*t))*sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-4 ymax=4 legenda="\text{onda di de Broglie};\text{orbita } r_4" titolo="Onda stazionaria sull'orbita $n = 4$: la circonferenza contiene esattamente quattro lunghezze d'onda di de Broglie"}

:::dimostrazione
Per l'ipotesi di de Broglie l'elettrone con velocità $v_n$ ha lunghezza d'onda $\lambda_n = \dfrac{h}{m_e v_n}$, perché $v_n \ll c$. La condizione $2\pi r_n = n \lambda_n$ diventa perciò
$$
2\pi r_n = n \frac{h}{m_e v_n} .
$$
Moltiplicando entrambi i membri per $\dfrac{m_e v_n}{2\pi}$ si ottiene $m_e v_n r_n = n \dfrac{h}{2\pi}$, che è la condizione del secondo postulato. I passaggi si possono percorrere anche in senso inverso, quindi le due condizioni sono equivalenti.
:::
::::

:::richiamo{titolo="Reticolo di diffrazione"}
Se un'onda piana di lunghezza d'onda $\lambda$ incide perpendicolarmente su una fila di fenditure o di centri diffusori equidistanti, con distanza $d$ tra due vicini, le onde diffuse interferiscono in modo costruttivo nelle direzioni che formano con la normale un angolo $\theta$ tale che
$$
d \sin\theta = k \lambda , \qquad k = 1, 2, \ldots
$$
:::

:::osservazione{#esperimento-davisson-germer titolo="Esperimento di Davisson e Germer"}
Nel 1927 Davisson e Germer inviarono un fascio di elettroni, accelerati con una tensione di $54\,\mathrm{V}$, perpendicolarmente sulla superficie di un cristallo di nichel, e misurarono il numero di elettroni diffusi nelle varie direzioni. Si misura un massimo netto di elettroni diffusi a un angolo $\theta = 50^\circ$ rispetto alla normale alla superficie. Gli atomi della superficie formano file con distanza $d = 0{,}215\,\mathrm{nm}$ e si comportano come un reticolo di diffrazione. Il primo massimo corrisponde quindi a
$$
\lambda = d \sin\theta = 0{,}215 \cdot \sin 50^\circ\,\mathrm{nm} \approx 0{,}165\,\mathrm{nm} .
$$
La lunghezza d'onda di de Broglie degli elettroni da $54\,\mathrm{eV}$ è
$$
\lambda = \frac{h}{\sqrt{2 m_e e V}} = \frac{6{,}63 \cdot 10^{-34}}{\sqrt{2 \cdot 9{,}11 \cdot 10^{-31} \cdot 1{,}60 \cdot 10^{-19} \cdot 54}}\,\mathrm{m} \approx 0{,}167\,\mathrm{nm} ,
$$
in accordo con il valore misurato. Gli elettroni producono quindi una figura di diffrazione, come le onde, e questa fu la conferma sperimentale dell'ipotesi di de Broglie. Sulla diffrazione degli elettroni si basa il microscopio elettronico, che distingue dettagli molto più piccoli di quelli visibili con la luce perché usa lunghezze d'onda molto più corte.

::grafico{assi=0 uguale=1 linee="-1,0 7,0" vettori="2,4,2,0.15;4,4,4,0.15;2,0,4.45,2.06;4,0,6.45,2.06" segmenti="2,0.15,2,3.2;4,0,3.17,0.985" punti="0,0,pieno;2,0,pieno;4,0,pieno;6,0,pieno" etichette="2.2,2.7,θ;2.9,-0.45,d;2.55,0.12,d sin θ;1.2,3.5,e⁻" xmin=-1.5 xmax=7.5 ymin=-1.2 ymax=4.4 titolo="Elettroni incidenti perpendicolarmente su una fila di atomi a distanza $d$: le onde diffuse da due atomi vicini all'angolo $\theta$ hanno differenza di cammino $d \sin\theta$"}

:::

## Principio di indeterminazione

:::teorema{#indeterminazione-posizione titolo="Principio di indeterminazione per posizione e quantità di moto"}
Non è possibile misurare contemporaneamente con precisione arbitraria la posizione $x$ e la componente $p_x$ della quantità di moto di una particella lungo la stessa direzione. Se $\Delta x$ e $\Delta p_x$ sono le incertezze delle due grandezze, vale
$$
\Delta x \cdot \Delta p_x \geq \frac{h}{4\pi} .
$$
È il **principio di indeterminazione di Heisenberg** (1927), un principio della meccanica quantistica confermato da tutti gli esperimenti. L'incertezza è una proprietà della natura, legata al carattere ondulatorio delle particelle, e resta anche con strumenti ideali. Il limite riguarda il prodotto delle due incertezze, quindi più si restringe $\Delta x$, più deve crescere $\Delta p_x$.

Un elettrone in un atomo si trova in una regione di dimensioni circa $\Delta x = 1{,}0 \cdot 10^{-10}\,\mathrm{m}$. Allora
$$
\Delta p_x \geq \frac{6{,}63 \cdot 10^{-34}}{4\pi \cdot 1{,}0 \cdot 10^{-10}}\,\mathrm{kg\cdot m/s} \approx 5{,}3 \cdot 10^{-25}\,\mathrm{kg\cdot m/s} ,
\qquad
\Delta v_x = \frac{\Delta p_x}{m_e} \geq 5{,}8 \cdot 10^{5}\,\mathrm{m/s} .
$$
L'incertezza sulla velocità è circa un quarto della velocità $v_1 \approx 2{,}2 \cdot 10^{6}\,\mathrm{m/s}$ dell'orbita di Bohr. Perciò l'elettrone nell'atomo non percorre una traiettoria precisa, e nella meccanica quantistica le orbite di Bohr sono sostituite da una descrizione probabilistica.
:::

:::esempio{titolo="Il principio di indeterminazione per un corpo macroscopico"}
Un granello di massa $m = 1{,}0 \cdot 10^{-3}\,\mathrm{kg}$ ha una posizione nota con l'incertezza $\Delta x = 1{,}0\,\mu\mathrm{m}$. L'incertezza minima sulla sua velocità è
$$
\Delta v_x = \frac{h}{4\pi\, m\, \Delta x} = \frac{6{,}63 \cdot 10^{-34}}{4\pi \cdot 1{,}0 \cdot 10^{-3} \cdot 1{,}0 \cdot 10^{-6}}\,\mathrm{m/s} \approx 5{,}3 \cdot 10^{-26}\,\mathrm{m/s} ,
$$
molto al di sotto di qualsiasi precisione di misura. Per i corpi macroscopici il principio di indeterminazione ha effetti trascurabili, e la meccanica classica descrive il moto con ottima approssimazione.
:::

:::teorema{#indeterminazione-energia-tempo titolo="Principio di indeterminazione per energia e tempo"}
Se un sistema resta in uno stato per un intervallo di tempo $\Delta t$, la sua energia in quello stato è determinata con un'incertezza $\Delta E$ tale che
$$
\Delta E \cdot \Delta t \geq \frac{h}{4\pi} .
$$
Anche questa è una relazione della meccanica quantistica confermata dagli esperimenti. Uno stato eccitato di un atomo dura in media un tempo finito prima che l'elettrone scenda a un livello più basso, quindi la sua energia ha un'incertezza, e le righe spettrali hanno una piccola larghezza in frequenza. Lo stato fondamentale dura invece indefinitamente e la sua energia è determinata con precisione.

Uno stato eccitato con vita media $\Delta t = 1{,}0 \cdot 10^{-8}\,\mathrm{s}$ ha un'incertezza sull'energia
$$
\Delta E \geq \frac{6{,}63 \cdot 10^{-34}}{4\pi \cdot 1{,}0 \cdot 10^{-8}}\,\mathrm{J} \approx 5{,}3 \cdot 10^{-27}\,\mathrm{J} \approx 3{,}3 \cdot 10^{-8}\,\mathrm{eV} ,
$$
molto piccola rispetto alle differenze tra i livelli, che sono di alcuni $\mathrm{eV}$; perciò le righe dell'idrogeno appaiono sottili.
:::

## Funzione d'onda e interpretazione probabilistica

:::definizione{#funzione-d-onda titolo="Funzione d'onda"}
Nella meccanica quantistica lo stato di una particella che si muove lungo una retta è descritto da una funzione $\psi(x)$, detta **funzione d'onda**. Il quadrato del suo valore assoluto è legato alla probabilità di trovare la particella. La probabilità che una misura di posizione trovi la particella in un piccolo intervallo di ampiezza $\Delta x$ attorno al punto $x$ è
$$
P = |\psi(x)|^2 \, \Delta x .
$$
Questa è l'**interpretazione probabilistica** proposta da Born nel 1926. La particella si trova con certezza da qualche parte, perciò la somma delle probabilità su tutto l'asse è uguale a $1$. Nei punti in cui $\psi = 0$ la particella non si trova mai, nei punti in cui $|\psi|^2$ è massimo la si trova più spesso. La meccanica quantistica prevede con quale frequenza si ottengono i vari risultati ripetendo la misura molte volte, mentre il risultato della singola misura è casuale. Per esempio, se in un intervallo di ampiezza $\Delta x = 0{,}010\,\mathrm{nm}$ attorno a un punto si ha $|\psi|^2 = 2{,}0\,\mathrm{nm^{-1}}$, la probabilità di trovare lì la particella è $2{,}0 \cdot 0{,}010 = 0{,}020$, cioè il $2\%$.
:::

:::osservazione{#doppia-fenditura-elettroni titolo="Elettroni attraverso una doppia fenditura"}
Quando un fascio di elettroni molto debole attraversa due fenditure vicine, ogni elettrone lascia sullo schermo un solo punto, come una particella. Dopo l'arrivo di molti elettroni i punti si distribuiscono in frange chiare e scure, come nella figura di interferenza della luce. La densità dei punti segue $|\psi|^2$, dove $\psi$ è la somma delle onde provenienti dalle due fenditure. La posizione di arrivo del singolo elettrone è casuale, mentre la distribuzione di molti arrivi è prevista con precisione.
:::

## Particella in una scatola ed effetto tunnel

:::richiamo{titolo="Onde stazionarie in una corda fissata agli estremi"}
In una corda di lunghezza $L$ con gli estremi fissi le onde stazionarie hanno nodi agli estremi, e le lunghezze d'onda possibili sono quelle per cui la corda contiene un numero intero di mezze lunghezze d'onda: $L = n \dfrac{\lambda}{2}$, con $n = 1, 2, 3, \ldots$
:::

::::teorema{#particella-in-una-scatola titolo="Livelli di energia di una particella in una scatola"}
Una particella di massa $m$ si muove lungo una retta tra due pareti che non può attraversare, poste alla distanza $L$; la lunghezza $L$ si chiama larghezza della scatola. All'interno l'energia potenziale è nulla e la velocità è molto minore di $c$. Allora l'energia della particella può assumere solo i valori
$$
E_n = \frac{n^2 h^2}{8 m L^2} , \qquad n = 1, 2, 3, \ldots
$$
e la funzione d'onda nel livello $n$ è $\psi_n(x) = A \sin\left( \dfrac{n \pi x}{L} \right)$ per $0 \leq x \leq L$, con $A$ costante. Anche qui l'energia è **quantizzata**, perché la particella è confinata in una regione limitata. Il livello più basso, $E_1 = \dfrac{h^2}{8 m L^2}$, è diverso da zero, quindi la particella non può stare ferma nella scatola; questo è in accordo con il principio di indeterminazione, perché con $\Delta x \leq L$ la quantità di moto non può essere nota con precisione.

Per un elettrone in una scatola di larghezza $L = 0{,}50\,\mathrm{nm}$, simile a un atomo, si ha
$$
E_1 = \frac{\left( 6{,}63 \cdot 10^{-34} \right)^2}{8 \cdot 9{,}11 \cdot 10^{-31} \cdot \left( 0{,}50 \cdot 10^{-9} \right)^2}\,\mathrm{J} \approx 2{,}4 \cdot 10^{-19}\,\mathrm{J} \approx 1{,}5\,\mathrm{eV} ,
$$
e poi $E_2 = 4 E_1 \approx 6{,}0\,\mathrm{eV}$ e $E_3 = 9 E_1 \approx 13{,}6\,\mathrm{eV}$, valori dello stesso ordine delle energie atomiche.

::grafico{f="x<0||x>4?NaN:sin(pi*x/4);x<0||x>4?NaN:sin(pi*x/2)" linee="0,-1.4 0,1.4;4,-1.4 4,1.4" xmin=-1 xmax=5 ymin=-1.5 ymax=1.5 nomi="x,ψ" legenda="\psi_1;\psi_2" titolo="Funzioni d'onda dei livelli $n = 1$ e $n = 2$ in una scatola di larghezza $L$ (qui $L = 4$ unità): la scatola contiene una e due mezze lunghezze d'onda"}

:::dimostrazione
La particella non può trovarsi fuori dalla scatola, quindi lì la funzione d'onda è nulla. La funzione d'onda varia senza salti, perciò si annulla anche sulle pareti, in $x = 0$ e in $x = L$. L'onda di de Broglie della particella è quindi un'onda stazionaria con nodi agli estremi, come in una corda fissata, e la scatola contiene un numero intero di mezze lunghezze d'onda:
$$
L = n \frac{\lambda_n}{2}
\qquad \Longrightarrow \qquad
\lambda_n = \frac{2L}{n} .
$$
Il valore $n = 0$ è escluso, perché darebbe una funzione d'onda nulla ovunque e quindi nessuna particella. Per l'ipotesi di de Broglie la quantità di moto ha modulo $p_n = \dfrac{h}{\lambda_n} = \dfrac{n h}{2L}$. L'energia potenziale è nulla, perciò l'energia è tutta cinetica e, poiché $v \ll c$,
$$
E_n = \frac{p_n^2}{2m} = \frac{n^2 h^2}{4 L^2} \cdot \frac{1}{2m} = \frac{n^2 h^2}{8 m L^2} .
$$
La funzione $A \sin\left( \dfrac{n\pi x}{L} \right)$ si annulla in $x = 0$ e in $x = L$, perché $\sin(n\pi) = 0$, e ha lunghezza d'onda $\dfrac{2\pi}{\frac{n\pi}{L}} = \dfrac{2L}{n} = \lambda_n$.
:::
::::

:::esempio{titolo="Dove si trova la particella nella scatola"}
Nel livello $n = 2$ la probabilità di trovare la particella è proporzionale a $|\psi_2(x)|^2 = A^2 \sin^2\left( \dfrac{2\pi x}{L} \right)$. Questa funzione è massima in $x = \dfrac{L}{4}$ e in $x = \dfrac{3L}{4}$ ed è nulla al centro della scatola, in $x = \dfrac{L}{2}$. Una particella classica che rimbalza tra le pareti con velocità costante si troverebbe invece con la stessa probabilità in ogni punto. Quando $n$ è molto grande i massimi di $|\psi_n|^2$ sono molto fitti, e la probabilità media su un intervallo piccolo ma non microscopico diventa uniforme, come nel caso classico.

::grafico{f="x<0||x>4?NaN:sin(pi*x/2)^2;x<0||x>4?NaN:sin(pi*x/4)^2" linee="0,0 0,1.4;4,0 4,1.4" xmin=-1 xmax=5 ymin=-0.5 ymax=1.5 nomi="x,P" legenda="|\psi_2|^2;|\psi_1|^2" titolo="Densità di probabilità $|\psi|^2$ nei livelli $n = 2$ e $n = 1$ di una scatola di larghezza $L = 4$ unità: nel livello $n = 2$ la particella non si trova mai al centro"}

:::

:::osservazione{#effetto-tunnel titolo="Effetto tunnel"}
Si consideri una particella che incontra una barriera, cioè una regione in cui l'energia potenziale $U$ è maggiore della sua energia totale $E$. Per la meccanica classica la particella non può entrare nella barriera, perché la sua energia cinetica $E - U$ sarebbe negativa, e viene sempre respinta. Per la meccanica quantistica la funzione d'onda dentro la barriera è diversa da zero e decresce in modo esponenziale; se la barriera è abbastanza sottile, la funzione d'onda dall'altra parte è ancora diversa da zero. Perciò esiste una probabilità, piccola ma non nulla, che la particella attraversi la barriera. Questo fenomeno si chiama **effetto tunnel**.

La probabilità di attraversamento diminuisce molto in fretta quando crescono lo spessore della barriera, la differenza $U - E$ e la massa della particella, quindi l'effetto tunnel è rilevante solo per particelle microscopiche e barriere di spessore atomico. Su di esso si basano il decadimento $\alpha$ dei nuclei, in cui la particella $\alpha$ esce dal nucleo pur avendo un'energia minore della barriera elettrica, e il microscopio a effetto tunnel, che misura la corrente di elettroni che attraversano il piccolo spazio vuoto tra una punta e una superficie.

::grafico{f="x<0?cos(4*x+0.3588):(x<=1?0.9363*exp(-1.5*x):0.2231*cos(4*(x-1)+0.3588))" poligoni="0,0 1,0 1,1.2 0,1.2" xmin=-3 xmax=4 ymin=-1.5 ymax=1.5 nomi="x,ψ" legenda="\psi" titolo="Andamento qualitativo della funzione d'onda di una particella che incontra una barriera (riquadro colorato): dentro la barriera decresce in modo esponenziale, e oltre la barriera resta un'onda di ampiezza minore"}

:::
