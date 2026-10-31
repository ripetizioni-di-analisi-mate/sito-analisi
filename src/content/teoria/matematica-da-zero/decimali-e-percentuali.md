---
titolo: Numeri decimali, proporzioni e percentuali
sommario: Che cosa sono i numeri decimali e come si fanno con essi le operazioni e gli arrotondamenti, come si passa da una frazione a un numero decimale e viceversa, che cosa sono rapporti, scale e proporzioni, quando due grandezze sono direttamente o inversamente proporzionali e come si calcolano percentuali, sconti, aumenti e percentuali successive.
---

## Numeri decimali

:::definizione{#numeri-decimali titolo="Numeri decimali"}
Un **numero decimale** è un numero scritto con una virgola, come $3{,}58$. Le cifre a sinistra della virgola formano la **parte intera**; le cifre a destra formano la **parte decimale**. Nella parte decimale la prima cifra conta i decimi, la seconda i centesimi, la terza i millesimi:
$$
0{,}1 = \frac{1}{10} ,
\qquad
0{,}01 = \frac{1}{100} ,
\qquad
0{,}001 = \frac{1}{1000} .
$$
In altre parole, ogni posto verso destra vale un decimo del posto precedente, come accade per unità, decine e centinaia nei numeri naturali. Per esempio
$$
3{,}58 = 3 + \frac{5}{10} + \frac{8}{100} ,
$$
cioè $3$ unità, $5$ decimi e $8$ centesimi. Gli zeri aggiunti in fondo alla parte decimale non cambiano il numero, quindi $2{,}5 = 2{,}50 = 2{,}500$. I numeri decimali servono a scrivere le quantità che stanno fra due numeri naturali, come un prezzo di $2{,}50$ euro o una lunghezza di $1{,}75$ metri.

::grafico{assi=0 uguale=1 linee="-0.6,0 10.8,0;10.4,0.2 10.8,0 10.4,-0.2;0,-0.3 0,0.3;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.25 5,0.25;6,-0.15 6,0.15;7,-0.15 7,0.15;8,-0.15 8,0.15;9,-0.15 9,0.15;10,-0.3 10,0.3" punti="3,0,pieno;7.5,0,pieno" etichette="-0.15,-0.9,0;4.55,-0.9,0,5;9.85,-0.9,1;2.65,0.6,0,3;6.95,0.6,0,75" xmin=-1 xmax=11 ymin=-1.4 ymax=1.3 titolo="Il segmento da $0$ a $1$ è diviso in dieci decimi; il numero $0{,}3$ è il terzo decimo, e $0{,}75$ sta a metà fra $0{,}7$ e $0{,}8$"}

:::

:::teorema{#confronto-decimali titolo="Confronto tra numeri decimali"}
Fra due numeri decimali è maggiore quello con la parte intera maggiore. Se le parti intere sono uguali, si confrontano i decimi; se anche i decimi sono uguali, si confrontano i centesimi, e così via, da sinistra verso destra. Per esempio $4{,}2 > 3{,}9$, perché $4 > 3$; inoltre $2{,}48 < 2{,}5$, perché le parti intere sono uguali e i decimi sono $4$ contro $5$. La regola permette di ordinare i numeri decimali e di collocarli sulla retta dei numeri.
:::

:::attenzione
Un numero decimale con più cifre dopo la virgola può essere minore di uno con meno cifre. Per esempio $0{,}65 < 0{,}7$, anche se $65$ è maggiore di $7$. Scrivendo $0{,}7 = 0{,}70$ i due numeri hanno lo stesso numero di cifre, e il confronto fra $65$ centesimi e $70$ centesimi dà subito il risultato.
:::

## Operazioni con i numeri decimali

:::teorema{#addizione-sottrazione-decimali titolo="Addizione e sottrazione"}
Per sommare o sottrarre due numeri decimali si scrivono uno sotto l'altro con le virgole in colonna, così che i decimi stiano sotto i decimi e i centesimi sotto i centesimi. Dove mancano cifre si aggiungono zeri; poi si esegue l'operazione come con i numeri naturali e si mette la virgola nella stessa colonna. Per esempio
$$
\begin{array}{r}
12{,}50 \\
+\ \ 3{,}47 \\
\hline
15{,}97
\end{array}
\qquad\qquad
\begin{array}{r}
8{,}00 \\
-\ \ 2{,}35 \\
\hline
5{,}65
\end{array}
$$
Le virgole in colonna garantiscono che si sommino fra loro cifre dello stesso tipo, come si fa con le unità e le decine.
:::

:::richiamo{titolo="Moltiplicazione di frazioni"}
Se $b \neq 0$ e $d \neq 0$, allora $\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{a \cdot c}{b \cdot d}$.
:::

::::teorema{#moltiplicazione-decimali titolo="Moltiplicazione"}
Per moltiplicare due numeri decimali si moltiplicano i numeri senza la virgola. Nel risultato le cifre decimali sono tante quante, in tutto, quelle dei due fattori. Per esempio
$$
2{,}4 \cdot 0{,}15 = 0{,}360 = 0{,}36 ,
$$
perché $24 \cdot 15 = 360$ e i fattori hanno in tutto $1 + 2 = 3$ cifre decimali. Allo stesso modo $0{,}4 \cdot 0{,}3 = 0{,}12$, perché $4 \cdot 3 = 12$ e servono due cifre decimali.

:::dimostrazione
Si scrive ogni fattore come frazione con denominatore $10$, $100$ o $1000$. Per il primo esempio
$$
2{,}4 \cdot 0{,}15 = \frac{24}{10} \cdot \frac{15}{100} = \frac{24 \cdot 15}{10 \cdot 100} = \frac{360}{1000} = 0{,}360 .
$$
Il denominatore $1000$ ha tre zeri, uno per la cifra decimale di $2{,}4$ e due per le cifre decimali di $0{,}15$. Perciò il risultato ha tre cifre decimali.
:::
::::

:::teorema{#moltiplicazione-divisione-per-10 titolo="Moltiplicazione e divisione per 10, 100, 1000"}
Moltiplicare un numero per $10$, $100$ o $1000$ sposta la virgola di uno, due o tre posti verso destra. Dividerlo per $10$, $100$ o $1000$ sposta la virgola di uno, due o tre posti verso sinistra. Dove mancano cifre si aggiungono zeri. Per esempio
$$
3{,}25 \cdot 100 = 325 ,
\qquad
0{,}6 \cdot 1000 = 600 ,
\qquad
\frac{47}{1000} = 0{,}047 .
$$
La regola segue dalla moltiplicazione dei decimali, perché $3{,}25 \cdot 100 = \dfrac{325}{100} \cdot 100 = 325$. Con questa regola si cambiano le unità di misura; per esempio $1{,}8$ metri sono $1{,}8 \cdot 100 = 180$ centimetri.
:::

:::richiamo{titolo="Proprietà invariantiva"}
Se $b \neq 0$ e $k \neq 0$, allora $\dfrac{a}{b} = \dfrac{a \cdot k}{b \cdot k}$.
:::

:::teorema{#divisione-decimali titolo="Divisione"}
Per dividere due numeri decimali si moltiplicano dividendo e divisore per $10$, $100$ o $1000$, fino a rendere il divisore un numero naturale; poi si esegue la divisione. Il quoziente non cambia, per la proprietà invariantiva. Per esempio
$$
\frac{7{,}5}{0{,}25} = \frac{7{,}5 \cdot 100}{0{,}25 \cdot 100} = \frac{750}{25} = 30 ,
\qquad
\frac{1{,}2}{0{,}4} = \frac{12}{4} = 3 .
$$
Nel secondo esempio dividendo e divisore sono stati moltiplicati per $10$.
:::

:::osservazione{#moltiplicare-per-numeri-minori-di-uno titolo="Moltiplicare per un numero minore di 1"}
Se si moltiplica un numero positivo per un decimale compreso fra $0$ e $1$, il risultato è *minore* del numero di partenza. Per esempio $8 \cdot 0{,}5 = 4$, perché moltiplicare per $0{,}5 = \dfrac{1}{2}$ significa prendere la metà. Se invece si divide per un decimale compreso fra $0$ e $1$, il risultato è *maggiore*. Per esempio $\dfrac{8}{0{,}5} = \dfrac{80}{5} = 16$, perché in $8$ ci sono $16$ mezzi.
:::

## Arrotondamento

:::definizione{#arrotondamento titolo="Arrotondamento"}
**Arrotondare** un numero ai decimi, ai centesimi o a un'altra cifra significa sostituirlo con il numero più vicino che ha cifre soltanto fino a quella posizione. Si guarda la cifra successiva a quella a cui ci si ferma.

- Se la cifra successiva è $0$, $1$, $2$, $3$ o $4$, la cifra a cui ci si ferma resta uguale.
- Se la cifra successiva è $5$, $6$, $7$, $8$ o $9$, la cifra a cui ci si ferma aumenta di $1$.

In entrambi i casi le cifre successive si eliminano. Per esempio $2{,}64$ arrotondato ai decimi diventa $2{,}6$, perché la cifra dei centesimi è $4$, mentre $3{,}85$ diventa $3{,}9$, perché la cifra dei centesimi è $5$. Il numero $3{,}85$ sta a metà fra $3{,}8$ e $3{,}9$, e la regola lo arrotonda a $3{,}9$. Si arrotonda quando un risultato ha troppe cifre per l'uso che se ne fa; per esempio un prezzo di $12{,}347$ euro si arrotonda ai centesimi e diventa $12{,}35$ euro.

::grafico{assi=0 uguale=1 linee="-0.6,0 10.8,0;10.4,0.2 10.8,0 10.4,-0.2;0,-0.3 0,0.3;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.25 5,0.25;6,-0.15 6,0.15;7,-0.15 7,0.15;8,-0.15 8,0.15;9,-0.15 9,0.15;10,-0.3 10,0.3" punti="4,0,pieno" segmenti="0,0.6,4,0.6;4,1.3,10,1.3" etichette="-0.7,-0.9,2,60;3.3,-0.9,2,64;9.3,-0.9,2,70;1.4,0.8,0,04;6.4,1.5,0,06" xmin=-1 xmax=11 ymin=-1.4 ymax=2 titolo="Il numero $2{,}64$ dista $0{,}04$ da $2{,}6$ e $0{,}06$ da $2{,}7$, quindi arrotondato ai decimi diventa $2{,}6$"}

:::

:::esempio{titolo="Arrotondamenti con il riporto"}
Il numero $7{,}96$ arrotondato ai decimi diventa $8{,}0$. La cifra dei centesimi è $6$, quindi i $9$ decimi diventano $10$ decimi, cioè un'unità in più. Il numero $0{,}4982$ arrotondato ai centesimi diventa $0{,}50$, per lo stesso motivo. Lo zero finale indica che l'arrotondamento è stato fatto ai centesimi.
:::

## Frazioni e numeri decimali

:::definizione{#da-frazione-a-decimale titolo="Numero decimale di una frazione"}
Una frazione è il quoziente fra numeratore e denominatore, come si è visto nell'argomento sulle frazioni. Perciò, dividendo il numeratore per il denominatore, si ottiene il numero decimale che corrisponde alla frazione. Per esempio $\dfrac{3}{4} = 0{,}75$, perché $3$ diviso $4$ dà $0{,}75$, e $\dfrac{9}{5} = 1{,}8$. La divisione può avere due esiti.

- Il resto a un certo punto è $0$, e la divisione finisce. Il numero ottenuto si chiama **decimale limitato**, come $0{,}75$.
- Il resto non è mai $0$, e da un certo punto le cifre si ripetono sempre uguali. Il numero ottenuto si chiama **decimale periodico**.

Per esempio $\dfrac{1}{3} = 0{,}333\ldots$, dove la cifra $3$ si ripete senza fine. Il gruppo di cifre che si ripete si chiama **periodo** e si indica con una linea sopra, quindi $\dfrac{1}{3} = 0{,}\overline{3}$.
:::

:::definizione{#decimali-periodici titolo="Periodici semplici e misti"}
Un decimale periodico è **semplice** se il periodo comincia subito dopo la virgola, come $0{,}\overline{3}$ oppure $2{,}\overline{18}$. È **misto** se fra la virgola e il periodo ci sono altre cifre, che formano l'**antiperiodo**. Per esempio
$$
\frac{7}{6} = 1{,}1666\ldots = 1{,}1\overline{6} ,
$$
dove la parte intera è $1$, l'antiperiodo è $1$ e il periodo è $6$. La distinzione serve per scrivere la frazione corrispondente al numero periodico.
:::

:::teorema{#decimali-limitati-periodici titolo="Quando un decimale è limitato"}
Sia data una frazione ridotta ai minimi termini. Se il denominatore non ha fattori primi diversi da $2$ e da $5$, il numero decimale è limitato; altrimenti è periodico. Per esempio $\dfrac{7}{20}$ dà un decimale limitato, perché $20 = 2^2 \cdot 5$, e infatti $\dfrac{7}{20} = 0{,}35$. Invece $\dfrac{5}{12}$ dà un decimale periodico, perché $12 = 2^2 \cdot 3$ contiene il fattore $3$, e infatti $\dfrac{5}{12} = 0{,}41\overline{6}$.

La regola dipende dal fatto che $10 = 2 \cdot 5$. Quando il denominatore contiene solo i fattori $2$ e $5$, la frazione si può trasformare in una equivalente con denominatore $10$, $100$ o $1000$; per esempio $\dfrac{7}{20} = \dfrac{7 \cdot 5}{20 \cdot 5} = \dfrac{35}{100}$. Con un altro fattore primo al denominatore, come $3$, questo non è possibile, perché i numeri $10$, $100$, $1000, \ldots$ hanno come fattori primi soltanto $2$ e $5$.
:::

:::teorema{#frazione-decimale-limitato titolo="Frazione di un decimale limitato"}
Un decimale limitato è uguale alla frazione che ha al numeratore il numero scritto senza virgola e al denominatore $1$ seguito da tanti zeri quante sono le cifre decimali. Poi la frazione si riduce ai minimi termini. Per esempio
$$
0{,}35 = \frac{35}{100} = \frac{7}{20} ,
\qquad
2{,}4 = \frac{24}{10} = \frac{12}{5} .
$$
La regola segue dal significato delle cifre, perché $0{,}35$ sono $35$ centesimi e $2{,}4$ sono $24$ decimi.
:::

::::teorema{#frazione-generatrice titolo="Frazione generatrice di un decimale periodico"}
Ogni decimale periodico è uguale a una frazione, detta **frazione generatrice**, che si costruisce così.

- Al numeratore si scrive il numero senza virgola fino alla fine del primo periodo, meno il numero formato dalle cifre che vengono prima del periodo.
- Al denominatore si scrivono tanti $9$ quante sono le cifre del periodo, seguiti da tanti $0$ quante sono le cifre dell'antiperiodo.

Per esempio
$$
0{,}\overline{45} = \frac{45}{99} = \frac{5}{11} ,
\qquad
1{,}2\overline{3} = \frac{123 - 12}{90} = \frac{111}{90} = \frac{37}{30} .
$$
Con la frazione generatrice si fanno i calcoli con i numeri periodici, che non si possono incolonnare perché hanno infinite cifre. Per esempio $0{,}\overline{3} + 0{,}\overline{6} = \dfrac{3}{9} + \dfrac{6}{9} = 1$.

:::dimostrazione
Sia $x = 0{,}\overline{45}$, cioè $x = 0{,}4545\ldots$. Il periodo ha due cifre, quindi si moltiplica per $100$, che sposta la virgola di due posti:
$$
100 \cdot x = 45{,}4545\ldots
$$
I due numeri $100 \cdot x$ e $x$ hanno la stessa parte decimale. Perciò, sottraendo $x$ da $100 \cdot x$, le cifre decimali si eliminano e resta $99 \cdot x = 45$, cioè $x = \dfrac{45}{99}$.

Per $x = 1{,}2\overline{3}$, cioè $x = 1{,}2333\ldots$, si sposta prima la virgola dopo l'antiperiodo e poi dopo il periodo:
$$
10 \cdot x = 12{,}333\ldots ,
\qquad
100 \cdot x = 123{,}333\ldots
$$
Questi due numeri hanno la stessa parte decimale, quindi $100 \cdot x - 10 \cdot x = 123 - 12$, cioè $90 \cdot x = 111$. Ne segue $x = \dfrac{111}{90}$, che è proprio la frazione data dalla regola.
:::
::::

:::osservazione{#numeri-razionali-decimali titolo="Decimali e numeri razionali"}
Ogni frazione dà un decimale limitato o periodico, e ogni decimale limitato o periodico è uguale a una frazione. Quindi i numeri razionali $\mathbb{Q}$, introdotti nell'argomento sulle frazioni, sono esattamente i numeri decimali limitati e periodici. Per esempio $0{,}125 = \dfrac{1}{8}$ e $0{,}\overline{1} = \dfrac{1}{9}$ sono numeri razionali. Nell'argomento sulle potenze e radici compare un numero, $\sqrt{2}$, che ha infinite cifre decimali senza periodo.
:::

## Rapporti e scale

:::definizione{#rapporto titolo="Rapporto"}
Il **rapporto** fra due numeri $a$ e $b$, con $b \neq 0$, è il quoziente $\dfrac{a}{b}$, che si scrive anche $a : b$. Il rapporto indica quante volte il primo numero contiene il secondo, oppure quale frazione del secondo è il primo. Per esempio in un gruppo di $12$ adulti e $8$ bambini il rapporto fra adulti e bambini è
$$
\frac{12}{8} = \frac{3}{2} ,
$$
cioè ci sono $3$ adulti ogni $2$ bambini. Il rapporto si può semplificare come una frazione.

Se le due grandezze sono dello stesso tipo, come due lunghezze, prima si scrivono nella stessa unità di misura. Il rapporto fra $30$ cm e $2$ m è $\dfrac{30}{200} = \dfrac{3}{20}$, perché $2$ m sono $200$ cm. Se le grandezze sono di tipo diverso, il rapporto è una nuova grandezza. Per esempio $150$ km percorsi in $2$ ore danno $\dfrac{150}{2} = 75$ km all'ora, cioè la velocità media.
:::

:::definizione{#scala titolo="Scala di una carta"}
La **scala** di una carta geografica o di un disegno è il rapporto fra una lunghezza sul disegno e la lunghezza vera corrispondente. La scala $1 : 50\,000$ significa che $1$ cm sulla carta corrisponde a $50\,000$ cm nella realtà. Poiché $1$ m $= 100$ cm, si ha
$$
50\,000 \text{ cm} = \frac{50\,000}{100} \text{ m} = 500 \text{ m} .
$$
Due paesi che sulla carta distano $6$ cm sono quindi lontani $6 \cdot 500 = 3000$ m, cioè $3$ km. La scala serve a ricavare le distanze vere da quelle misurate sulla carta, e viceversa.
:::

## Proporzioni

:::definizione{#proporzione titolo="Proporzione"}
Una **proporzione** è un'uguaglianza fra due rapporti:
$$
a : b = c : d ,
$$
che si legge "$a$ sta a $b$ come $c$ sta a $d$", con $b \neq 0$ e $d \neq 0$. I numeri $a$ e $d$ si chiamano **estremi**, i numeri $b$ e $c$ si chiamano **medi**. Per esempio $2 : 3 = 8 : 12$ è una proporzione, perché $\dfrac{2}{3}$ e $\dfrac{8}{12}$ sono frazioni equivalenti. Gli estremi sono $2$ e $12$, i medi sono $3$ e $8$.
:::

::::teorema{#proprieta-fondamentale titolo="Proprietà fondamentale delle proporzioni"}
In ogni proporzione il prodotto dei medi è uguale al prodotto degli estremi:
$$
a : b = c : d
\qquad \text{se e solo se} \qquad
a \cdot d = b \cdot c .
$$
Nella proporzione $2 : 3 = 8 : 12$ si ha infatti $2 \cdot 12 = 24$ e $3 \cdot 8 = 24$. La proprietà permette di controllare se quattro numeri formano una proporzione. Per esempio $3 : 5 = 9 : 16$ *non* è una proporzione, perché $3 \cdot 16 = 48$ mentre $5 \cdot 9 = 45$.

:::dimostrazione
La proporzione significa che $\dfrac{a}{b} = \dfrac{c}{d}$. Si moltiplicano i due membri per $b \cdot d$. A sinistra il fattore $b$ si semplifica e resta $a \cdot d$; a destra il fattore $d$ si semplifica e resta $c \cdot b$. Quindi $a \cdot d = b \cdot c$. Con i numeri dell'esempio, moltiplicando $\dfrac{2}{3} = \dfrac{8}{12}$ per $3 \cdot 12 = 36$ si ottiene $2 \cdot 12 = 8 \cdot 3$, cioè $24 = 24$. Viceversa, se $a \cdot d = b \cdot c$, dividendo i due membri per $b \cdot d$ si ritrova $\dfrac{a}{b} = \dfrac{c}{d}$.
:::
::::

:::teorema{#termine-incognito titolo="Termine incognito di una proporzione"}
Se in una proporzione un termine è sconosciuto, lo si indica con $x$ e lo si trova con la proprietà fondamentale.

- Un medio incognito è uguale al prodotto degli estremi diviso per l'altro medio.
- Un estremo incognito è uguale al prodotto dei medi diviso per l'altro estremo.

Per esempio nella proporzione $4 : 10 = x : 25$ il termine $x$ è un medio, quindi
$$
x = \frac{4 \cdot 25}{10} = \frac{100}{10} = 10 .
$$
Infatti la proprietà fondamentale dà $4 \cdot 25 = 10 \cdot x$, e dividendo i due membri per $10$ si ottiene $x = \dfrac{4 \cdot 25}{10}$. Nella proporzione $1{,}5 : 2 = 6 : x$ il termine $x$ è un estremo, perciò
$$
x = \frac{2 \cdot 6}{1{,}5} = \frac{12}{1{,}5} = \frac{120}{15} = 8 .
$$
:::

## Grandezze direttamente e inversamente proporzionali

:::definizione{#direttamente-proporzionali titolo="Grandezze direttamente proporzionali"}
Due grandezze $x$ e $y$ sono **direttamente proporzionali** se il loro rapporto $\dfrac{y}{x}$ è sempre lo stesso numero $k$, detto **coefficiente di proporzionalità**. Allora $y = k \cdot x$, e quando $x$ raddoppia o triplica anche $y$ raddoppia o triplica. Per esempio, se un quaderno costa $2$ euro, il costo $y$ di $x$ quaderni è $y = 2 \cdot x$:

| quaderni $x$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- |
| costo $y$ in euro | $2$ | $4$ | $6$ | $8$ |

In ogni colonna il rapporto è $\dfrac{y}{x} = 2$. Nel piano cartesiano i punti della tabella stanno su una retta che passa per l'origine.

::grafico{f="2*x+0*sqrt(x)" punti="1,2,pieno;2,4,pieno;3,6,pieno;4,8,pieno" segmenti="3,0,3,6;0,6,3,6" xmin=-1 xmax=6 ymin=-2 ymax=12 nomi="x,y" legenda="y = 2x" titolo="I punti che danno il costo $y$ di $x$ quaderni a $2$ euro l'uno stanno su una retta che passa per l'origine, perché $\dfrac{y}{x} = 2$ in ogni punto"}

:::

:::attenzione
Due grandezze che aumentano insieme possono non essere direttamente proporzionali. Un taxi chiede $3$ euro alla partenza e $1$ euro per ogni chilometro. Per $2$ km si pagano $3 + 2 = 5$ euro, per $4$ km si pagano $3 + 4 = 7$ euro. I chilometri raddoppiano, ma il prezzo passa da $5$ a $7$ euro e non raddoppia; infatti i rapporti $\dfrac{5}{2}$ e $\dfrac{7}{4}$ sono diversi.
:::

:::definizione{#inversamente-proporzionali titolo="Grandezze inversamente proporzionali"}
Due grandezze $x$ e $y$ sono **inversamente proporzionali** se il loro prodotto $x \cdot y$ è sempre lo stesso numero $k$. Allora $y = \dfrac{k}{x}$, e quando $x$ raddoppia $y$ diventa la metà. Per esempio, per percorrere $120$ km il tempo $y$ in ore e la velocità $x$ in km all'ora sono legati da $x \cdot y = 120$:

| velocità $x$ in km all'ora | $30$ | $40$ | $60$ | $120$ |
| --- | --- | --- | --- | --- |
| tempo $y$ in ore | $4$ | $3$ | $2$ | $1$ |

In ogni colonna il prodotto è $120$. I punti della tabella stanno su una curva chiamata ramo di **iperbole**, che si avvicina agli assi senza toccarli.

::grafico{f="120/x+0*sqrt(x)" punti="30,4,pieno;40,3,pieno;60,2,pieno;120,1,pieno" xmin=-20 xmax=180 ymin=-1 ymax=8 nomi="x,y" legenda="y = \dfrac{120}{x}" titolo="I punti che danno il tempo $y$ per percorrere $120$ km alla velocità $x$ stanno su un ramo di iperbole, perché $x \cdot y = 120$ in ogni punto"}

:::

:::osservazione{#regola-del-tre titolo="Regola del tre"}
Quando due grandezze sono proporzionali e si conoscono una coppia di valori e un terzo valore, il quarto valore si trova con una proporzione. Questo metodo si chiama **regola del tre**.

- Grandezze direttamente proporzionali: $3$ kg di arance costano $4{,}50$ euro, quindi il costo $x$ di $5$ kg soddisfa $3 : 4{,}50 = 5 : x$. Si ottiene $x = \dfrac{4{,}50 \cdot 5}{3} = \dfrac{22{,}50}{3} = 7{,}50$ euro.
- Grandezze inversamente proporzionali: $4$ amici si dividono una spesa e pagano $15$ euro a testa, quindi con $6$ amici la quota $x$ soddisfa $6 \cdot x = 4 \cdot 15$, perché il totale è lo stesso. Si ottiene $x = \dfrac{60}{6} = 10$ euro.

Il tipo di proporzionalità si stabilisce osservando che cosa accade a una grandezza quando l'altra raddoppia. Con più amici la quota a testa diminuisce, quindi le due grandezze sono inversamente proporzionali.
:::

## Percentuali

:::definizione{#percentuale titolo="Percentuale"}
Una **percentuale** è una frazione con denominatore $100$, scritta con il simbolo $\%$, che si legge "per cento". Quindi
$$
25\% = \frac{25}{100} = 0{,}25 ,
\qquad
5\% = \frac{5}{100} = 0{,}05 ,
\qquad
150\% = \frac{150}{100} = 1{,}5 .
$$
In altre parole, il $25\%$ significa $25$ parti su $100$. Si usano le percentuali per confrontare quantità prese da totali diversi, perché ogni totale viene pensato diviso in $100$ parti. Alcune percentuali corrispondono a frazioni semplici: $50\% = \dfrac{1}{2}$, $25\% = \dfrac{1}{4}$, $20\% = \dfrac{1}{5}$, $10\% = \dfrac{1}{10}$.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,5 0,5" linee="0,0 10,0 10,10 0,10 0,0" segmenti="1,0,1,10;2,0,2,10;3,0,3,10;4,0,4,10;5,0,5,10;6,0,6,10;7,0,7,10;8,0,8,10;9,0,9,10;0,1,10,1;0,2,10,2;0,3,10,3;0,4,10,4;0,5,10,5;0,6,10,6;0,7,10,7;0,8,10,8;0,9,10,9" xmin=-0.5 xmax=10.5 ymin=-0.5 ymax=10.5 titolo="Il quadrato è diviso in $100$ quadretti uguali; i $25$ quadretti colorati sono il $25\%$ del quadrato, cioè $\dfrac{25}{100} = \dfrac{1}{4}$"}

:::

:::teorema{#percentuale-di-un-numero titolo="Percentuale di un numero"}
Il $p\%$ di un numero $N$ si calcola moltiplicando $N$ per la frazione $\dfrac{p}{100}$:
$$
\frac{p}{100} \cdot N .
$$
Per esempio il $15\%$ di $80$ è $\dfrac{15}{100} \cdot 80 = \dfrac{1200}{100} = 12$. In modo equivalente si moltiplica per il numero decimale, $0{,}15 \cdot 80 = 12$. Il $10\%$ di un numero si ottiene spostando la virgola di un posto a sinistra, quindi il $10\%$ di $345$ è $34{,}5$. Il $20\%$ ne è il doppio, cioè $69$.
:::

:::osservazione{#tre-problemi-percentuali titolo="Parte, percentuale e totale"}
In un calcolo con le percentuali compaiono tre numeri: il totale $N$, la percentuale $p\%$ e la parte $P$. Fra loro vale la proporzione
$$
P : N = p : 100 ,
$$
perché la parte sta al totale come $p$ sta a $100$. Conoscendo due dei tre numeri, il terzo si trova con il termine incognito della proporzione.

- La parte: il $30\%$ di $250$ è $P = \dfrac{30 \cdot 250}{100} = 75$.
- La percentuale: $18$ su $72$ è il $p\%$ con $p = \dfrac{18 \cdot 100}{72} = 25$, cioè il $25\%$.
- Il totale: se $12$ è il $40\%$ di un numero $N$, allora $N = \dfrac{12 \cdot 100}{40} = 30$.
:::

## Sconti, aumenti e percentuali successive

:::richiamo{titolo="Proprietà distributiva"}
Per tre numeri $a$, $b$, $c$ qualsiasi vale $a \cdot b + a \cdot c = a \cdot (b + c)$.
:::

:::teorema{#aumenti-e-sconti titolo="Aumenti e sconti percentuali"}
Un aumento del $p\%$ moltiplica il valore $V$ per $1 + \dfrac{p}{100}$; uno sconto del $p\%$ lo moltiplica per $1 - \dfrac{p}{100}$:
$$
V \cdot \left( 1 + \frac{p}{100} \right) ,
\qquad
V \cdot \left( 1 - \frac{p}{100} \right) .
$$
Il numero per cui si moltiplica si chiama **fattore moltiplicativo**. Per esempio un prezzo di $80$ euro aumentato del $15\%$ diventa $80 \cdot 1{,}15 = 92$ euro, e un prezzo di $45$ euro scontato del $20\%$ diventa $45 \cdot 0{,}8 = 36$ euro.

La regola viene dalla proprietà distributiva. Aumentare $80$ del $15\%$ significa aggiungere a $80$ il $15\%$ di $80$, cioè calcolare $80 + 0{,}15 \cdot 80$. Poiché $80 = 80 \cdot 1$, per la proprietà distributiva questa somma è uguale a $80 \cdot (1 + 0{,}15) = 80 \cdot 1{,}15$. Per lo sconto il ragionamento è lo stesso, con la sottrazione al posto della somma.
:::

:::esempio{titolo="Dal prezzo scontato al prezzo iniziale"}
Un paio di scarpe scontato del $20\%$ costa $64$ euro. Il prezzo scontato è il prezzo iniziale $V$ moltiplicato per $0{,}8$, quindi $V \cdot 0{,}8 = 64$. Perciò il prezzo iniziale si trova dividendo per il fattore moltiplicativo:
$$
V = \frac{64}{0{,}8} = \frac{640}{8} = 80 \text{ euro} .
$$
Il risultato è corretto, perché il $20\%$ di $80$ è $16$ e $80 - 16 = 64$.
:::

:::definizione{#variazione-percentuale titolo="Variazione percentuale"}
Quando una grandezza passa da un valore iniziale $V_1$, diverso da $0$, a un valore finale $V_2$, la sua **variazione percentuale** è
$$
\frac{V_2 - V_1}{V_1} \cdot 100 .
$$
La differenza si divide per il valore *iniziale*. Il risultato è positivo per un aumento e negativo per una diminuzione. Per esempio una bolletta che passa da $40$ a $46$ euro aumenta del $15\%$, perché $\dfrac{6}{40} \cdot 100 = 15$. Un prezzo che scende da $64$ a $48$ euro ha variazione $-25\%$, perché $\dfrac{-16}{64} \cdot 100 = -25$; quindi il prezzo diminuisce del $25\%$.
:::

:::teorema{#percentuali-successive titolo="Percentuali successive"}
Se un valore subisce due variazioni percentuali una dopo l'altra, il valore finale si ottiene moltiplicando il valore iniziale per i due fattori moltiplicativi. Infatti la seconda variazione si calcola sul valore già cambiato dalla prima. Per esempio un prezzo di $100$ euro scontato prima del $20\%$ e poi del $10\%$ diventa
$$
100 \cdot 0{,}8 \cdot 0{,}9 = 80 \cdot 0{,}9 = 72 \text{ euro} .
$$
Il fattore complessivo è $0{,}8 \cdot 0{,}9 = 0{,}72$, quindi lo sconto complessivo è del $28\%$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,5 0,5;3,0 5,0 5,4 3,4;6,0 8,0 8,3.6 6,3.6" linee="-0.5,0 8.5,0" etichette="0.3,5.3,100 €;3.45,4.3,80 €;6.45,3.9,72 €;0.4,-0.7,inizio;3.4,-0.7,− 20%;6.4,-0.7,− 10%" xmin=-1 xmax=9 ymin=-1.3 ymax=6.2 titolo="Uno sconto del $20\%$ porta $100$ euro a $80$ euro; il successivo sconto del $10\%$ si calcola su $80$ euro e porta il prezzo a $72$ euro"}

:::

:::attenzione
Due percentuali successive non si sommano. Nell'esempio dei due sconti la somma $20\% + 10\% = 30\%$ darebbe un prezzo finale di $70$ euro, mentre il prezzo vero è $72$ euro, perché il $10\%$ è calcolato su $80$ euro e vale $8$ euro. Per lo stesso motivo un aumento e uno sconto della stessa percentuale non si compensano. Per esempio $100$ euro aumentati del $10\%$ diventano $110$ euro, e scontati poi del $10\%$ diventano $110 \cdot 0{,}9 = 99$ euro.
:::
