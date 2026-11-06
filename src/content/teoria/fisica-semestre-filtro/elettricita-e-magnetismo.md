---
titolo: Elettricità, circuiti e magnetismo
sommario: Cariche e campi, energia e potenziale, conduttori e dielettrici, corrente e circuiti, condensatori, forza magnetica e induzione.
---

:::percorso
Si usano i vettori e i bilanci di energia e quantità di moto della meccanica. Le resistenze idrauliche suggeriscono come impostare le reti elettriche. Il legame fra campi elettrici e magnetici preparerà lo studio della radiazione elettromagnetica.
:::

## Carica elettrica e legge di Coulomb

:::definizione{#coulomb titolo="Cariche e interazione elettrica"}
La **carica elettrica** si misura in coulomb, si conserva nei sistemi isolati e compare in multipli della carica elementare $e\simeq1{,}602\cdot10^{-19}\,\mathrm C$. Il protone ha carica $+e$, l'elettrone $-e$. Per cariche puntiformi ferme nel vuoto il modulo della forza è
$$
F=k_e\frac{|q_1q_2|}{r^2},\qquad
k_e=\frac1{4\pi\varepsilon_0}\simeq8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
La forza è lungo la congiungente, repulsiva per cariche dello stesso segno e attrattiva per segni opposti. Per più cariche si sommano vettorialmente i contributi.
:::

## Campo elettrico e moto delle cariche

:::definizione{#campo-elettrico titolo="Forza per unità di carica"}
Il **campo elettrico** è la forza per unità di carica di prova positiva, $\vec E=\dfrac{\vec F}{q}$. Per una carica sorgente $Q$, $\vec E=k_e\dfrac{Q}{r^2}\hat r$, con $\hat r$ diretto dalla sorgente al punto. Il campo si misura in $\mathrm{N/C}$, equivalenti a $\mathrm{V/m}$.

Le linee di campo sono tangenti a $\vec E$, escono dalle cariche positive ed entrano nelle negative. Per una particella di massa $m$ in un campo uniforme, con altre forze trascurabili,
$$
\vec a=\frac{q\vec E}{m}.
$$
Una carica negativa accelera nel verso opposto al campo. Le equazioni del moto a accelerazione costante si applicano separatamente alle componenti.

Per più cariche puntiformi vale il **principio di sovrapposizione**: il campo totale è la somma vettoriale dei campi di ciascuna carica, $\vec E(P)=\sum_i\vec E_i(P)$. Si calcolano prima direzione, verso e componenti di ogni contributo, poi si sommano le componenti lungo gli stessi assi. Due contributi di uguale modulo possono quindi annullarsi se hanno versi opposti.
:::

## Energia potenziale e differenza di potenziale

:::teorema{#potenziale titolo="Lavoro elettrico e conservazione dell'energia"}
Il campo elettrostatico è conservativo. Scelto lo zero all'infinito per cariche puntiformi isolate,
$$
U=k_e\frac{Qq}{r},\qquad V=\frac Uq=k_e\frac Qr.
$$
Il potenziale è uno scalare e si somma algebricamente per più sorgenti. La **differenza di potenziale** è legata al lavoro elettrico da
$$
W_{A\to B}=q(V_A-V_B),\qquad
\Delta K=-q\Delta V.
$$
L'ultima relazione richiede che il lavoro delle altre forze sia nullo. Fra due punti di un campo uniforme distanti $d$ lungo il campo, $V_B-V_A=-Ed$. Il volt vale $\mathrm{J/C}$. Un elettronvolt è l'energia $1\,\mathrm{eV}=e\cdot1\,\mathrm V\simeq1{,}602\cdot10^{-19}\,\mathrm J$.
:::

## Conduttori e dielettrici

:::definizione{#materiali titolo="Risposta dei materiali a un campo"}
In un **conduttore** le cariche libere si ridistribuiscono. In equilibrio elettrostatico il campo all'interno del materiale conduttore è nullo e il conduttore è equipotenziale. Avvicinare una carica esterna produce una separazione di cariche per induzione elettrostatica; un conduttore isolato mantiene la propria carica totale.

In un **dielettrico** le cariche legate si spostano di poco o i dipoli si orientano: il materiale si polarizza. Per un dielettrico lineare omogeneo la permittività è $\varepsilon=\varepsilon_r\varepsilon_0$. La polarizzazione permette di aumentare la capacità di un condensatore piano completamente riempito.
:::

## Corrente e leggi di Ohm

:::definizione{#ohm titolo="Corrente, resistenza e resistività"}
La **corrente** è la carica che attraversa una sezione per unità di tempo, $I=\dfrac{\Delta q}{\Delta t}$ per un flusso costante. Il verso convenzionale è quello delle cariche positive; nei metalli gli elettroni si spostano nel verso opposto. Un generatore ideale mantiene la differenza di potenziale assegnata.

Per un conduttore ohmico a temperatura fissata,
$$
\Delta V=RI,\qquad R=\rho_e\frac LA.
$$
La resistenza si misura in ohm, $\Omega=\mathrm{V/A}$; la resistività $\rho_e$ in $\Omega\,\mathrm m$. Per un filo cilindrico l'area è $A=\pi r^2$, quindi raddoppiare il raggio riduce la resistenza a un quarto a parità di materiale, lunghezza e temperatura.
:::

## Reti di resistori ed effetto Joule

:::teorema{#circuiti titolo="Serie, parallelo e potenza"}
In serie passa la stessa corrente e $R_{\mathrm{eq}}=\sum_iR_i$. In parallelo i resistori hanno la stessa differenza di potenziale e
$$
\frac1{R_{\mathrm{eq}}}=\sum_i\frac1{R_i}.
$$
La corrente si conserva nei nodi: la somma di quelle entranti uguaglia la somma di quelle uscenti. Per un resistore ohmico,
$$
P=I\Delta V=RI^2=\frac{(\Delta V)^2}{R}.
$$
L'energia dissipata in un intervallo $t$ a potenza costante è $E=Pt$. In un resistore diventa energia interna per effetto Joule. Confrontando resistori diversi si deve specificare se è fissata la corrente o la tensione.
:::

## Capacità e condensatori

:::definizione{#condensatori titolo="Carica immagazzinata"}
Un **condensatore** ha due armature con cariche opposte e capacità $C=\dfrac{q}{\Delta V}$, misurata in farad. Per armature piane di area $A$ e distanza $d$ molto minore delle dimensioni laterali, trascurando gli effetti ai bordi,
$$
C=\frac{\varepsilon A}{d},\qquad
U_C=\frac12C(\Delta V)^2=\frac{q^2}{2C}.
$$
Inserire completamente un dielettrico lineare moltiplica la capacità per $\varepsilon_r$. Se il condensatore è isolato resta costante $q$; se è collegato a un generatore ideale resta costante $\Delta V$. Le variazioni dell'energia dipendono quindi dal vincolo.
:::

:::teorema{#reti-condensatori titolo="Condensatori in serie e parallelo"}
In parallelo le tensioni sono uguali e le cariche si sommano, quindi $C_{\mathrm{eq}}=\sum_iC_i$. Per condensatori ideali in serie con nodi intermedi inizialmente neutri, le cariche sulle armature hanno uguale modulo e le tensioni si sommano:
$$
\frac1{C_{\mathrm{eq}}}=\sum_i\frac1{C_i}.
$$
Due condensatori identici in serie hanno capacità $\dfrac C2$; in parallelo $2C$. La regola è diversa da quella delle resistenze, perché diverse sono le grandezze che si sommano.
:::

## Campo magnetico e forza di Lorentz

:::definizione{#lorentz titolo="Forze magnetiche"}
L'esperimento di Oersted mostra che una corrente genera un campo magnetico. Il **campo magnetico** $\vec B$ si misura in tesla. Su una carica in moto la forza magnetica è
$$
\vec F_B=q\vec v\times\vec B,\qquad
F_B=|q|vB\sin\theta.
$$
La forza è perpendicolare alla velocità e non compie lavoro sulla particella; può cambiarne la direzione senza cambiarne il modulo. Con velocità iniziale perpendicolare a un campo uniforme e altre forze trascurabili, il moto è circolare:
$$
|q|vB=\frac{mv^2}{r},\qquad r=\frac{mv}{|q|B}.
$$
Su un filo rettilineo di lunghezza $\ell$, percorso da corrente $I$ in un campo uniforme, $\vec F=I\vec\ell\times\vec B$, con $\vec\ell$ orientato nel verso convenzionale della corrente. Il modulo è $I\ell B\sin\theta$.
:::

## Induzione elettromagnetica

:::teorema{#induzione titolo="Faraday-Neumann-Lenz"}
Il **flusso magnetico** attraverso una superficie piana in campo uniforme è $\Phi_B=BA\cos\theta$, dove $\theta$ è l'angolo fra campo e normale orientata. Se il flusso concatenato con $N$ spire cambia, nasce una forza elettromotrice indotta:
$$
\mathcal E=-N\frac{d\Phi_B}{dt},\qquad
\mathcal E_{\mathrm m}=-N\frac{\Delta\Phi_B}{\Delta t}.
$$
Il segno della legge di Lenz esprime l'opposizione alla variazione del flusso. Se un campo entrante nel piano aumenta, la corrente indotta tende a generare un campo uscente; vista frontalmente, circola in senso antiorario. Se il circuito è chiuso e prevalentemente resistivo, il modulo della corrente è $|I|=\dfrac{|\mathcal E|}{R}$.
:::
