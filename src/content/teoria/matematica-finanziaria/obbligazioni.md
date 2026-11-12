---
titolo: Titoli obbligazionari, prezzi e rendimenti
sommario: Prezzi dei titoli con e senza cedola, rendimento a scadenza, rateo, corso secco e rendimento realizzato durante il possesso.
---

## Titoli senza cedola

:::definizione{#zero-coupon titolo="Prezzo e rendimento di uno zero coupon"}
Il prezzo di un'obbligazione è l'importo versato dall'acquirente alla data di regolamento. Il contratto stabilisce quali importi il possessore ha diritto di ricevere e a quali date. Uno **zero coupon bond**, abbreviato ZCB, prevede un solo pagamento futuro. Sia $M>0$ il suo valore di rimborso, dovuto tra $T>0$ anni. In regime composto, a un rendimento annuo effettivo $y>-1$ corrisponde il prezzo $P$, dato da

$$
P=\frac{M}{(1+y)^T}.
$$

Il fattore $(1+y)^T$ trasporta un capitale di oggi alla scadenza. La divisione per quel fattore riporta il rimborso alla data di acquisto. Se il prezzo è noto e $P>0$, si può risolvere la stessa equazione rispetto a $y$.

$$
1+y=\left(\frac{M}{P}\right)^{\frac{1}{T}},
\qquad
y=\left(\frac{M}{P}\right)^{\frac{1}{T}}-1.
$$

Il rapporto $\dfrac{M}{P}$ è il fattore di crescita sull'intera durata. La potenza con esponente $\dfrac{1}{T}$ esprime lo stesso incremento su base annua. Quando $T$ è frazionario si usa la convenzione esponenziale.
:::

:::esempio{titolo="Rendimento annuo e rendimento complessivo"}
Uno zero coupon si acquista per $800\,\mathrm{euro}$ e rimborsa $968\,\mathrm{euro}$ dopo due anni. Il rapporto $\dfrac{968}{800}$ è $1{,}21$, quindi il rendimento complessivo è $21\%$. Il fattore annuo è $\sqrt{1{,}21}=1{,}1$, perciò il rendimento annuo effettivo è il $10\%$. Si verifica il risultato capitalizzando $800\,\mathrm{euro}$ per due anni al $10\%$.
:::

:::osservazione
Il valore nominale $N$ è la base contrattuale usata per esprimere cedole e quotazioni. Il rimborso $M$ è il pagamento di capitale che compare tra i flussi. Se un titolo di nominale $1000\,\mathrm{euro}$ rimborsa al $102\%$ del nominale, si ha $M=1020\,\mathrm{euro}$. Se la quotazione è $96$ per $100$ di nominale, il prezzo è $960\,\mathrm{euro}$. Nella formula del rendimento entrano $1020$ e $960$, quindi il risultato tiene conto anche del premio di rimborso.
:::

:::attenzione
Uno zero coupon può avere un rendimento negativo. Se il prezzo è $1050\,\mathrm{euro}$ e il rimborso è $1000\,\mathrm{euro}$ dopo un anno, il rendimento è $\dfrac{1000}{1050}-1=-\dfrac{1}{21}$. Il segno dipende dal confronto tra l'esborso iniziale e l'importo incassato alla scadenza.
:::

## Titoli con cedola

:::definizione{titolo="Cedola, nominale e rimborso"}
Una **cedola** è un pagamento periodico previsto dal contratto. Per un titolo a tasso fisso che paga una cedola all'anno, l'importo è $C=Nr_c$, dove $N$ è il valore nominale e $r_c$ è il tasso cedolare annuo. Alla scadenza si incassano insieme l'ultima cedola e il rimborso di capitale $M$. Per esempio, con nominale $2000\,\mathrm{euro}$, cedola annua al $3\%$ e rimborso a $2040\,\mathrm{euro}$, l'ultima entrata è $60+2040=2100\,\mathrm{euro}$.
:::

::::teorema{#prezzo-obbligazione titolo="Prezzo come valore attuale dei pagamenti"}
Sia $n\geq1$ il numero di cedole residue, tutte uguali a $C\geq0$. Il regolamento avviene subito dopo una data cedolare e la prossima cedola scade fra un periodo. Il titolo rimborsa $M>0$ insieme all'ultima cedola. Al rendimento effettivo per periodo $i>-1$, si pongono $q=1+i$ e $v=q^{-1}$. Il prezzo è

$$
P(i)=C a_{\overline n|i}+Mv^n,
\qquad
a_{\overline n|i}=\sum_{k=1}^{n}v^k.
$$

Il primo termine valuta la successione delle cedole. Il secondo valuta il solo capitale rimborsato.

:::dimostrazione
L'equivalenza finanziaria alla data di regolamento dà $\sum_{k=1}^{n-1} Cv^k+(C+M)v^n$. Separando l'ultimo incasso nelle due componenti si ottiene $C\sum_{k=1}^{n}v^k+Mv^n$. Se $i\ne0$, dalla somma geometrica segue $a_{\overline n|i}=\dfrac{1-v^n}{i}$. Se $i=0$, ciascun fattore $v^k$ è uno, quindi $a_{\overline n|0}=n$.
:::
::::

:::esempio{titolo="Due scadenze e rimborso finale"}
Un titolo paga $55\,\mathrm{euro}$ fra un anno e $1155\,\mathrm{euro}$ fra due anni, di cui $1100\,\mathrm{euro}$ sono il rimborso. Al $10\%$ annuo effettivo il valore attuale della prima cedola è $50\,\mathrm{euro}$. L'incasso finale vale $\dfrac{1155}{1{,}21}=\dfrac{10500}{11}\,\mathrm{euro}$. Il prezzo è quindi $\dfrac{11050}{11}\,\mathrm{euro}$, pari a circa $1004{,}55\,\mathrm{euro}$. I due esponenti sono diversi perché le entrate si ricevono a un anno di distanza.
:::

:::osservazione
Se gli importi cedolari sono diversi, si attualizza ciascun flusso alla propria scadenza. Per esempio, cedole di $30$ e $45\,\mathrm{euro}$ seguite da un rimborso di $1000\,\mathrm{euro}$ insieme alla seconda cedola danno $P=30v+1045v^2$. La formula della rendita costante si applica alle rate uguali. Quando si adotta un tasso a pronti diverso per ogni scadenza, i singoli flussi ricevono fattori di sconto diversi, come nel capitolo sulla struttura a termine.
:::

## Rendimento a scadenza

:::definizione{#rendimento-scadenza titolo="Tasso di rendimento effettivo a scadenza"}
Il **tasso di rendimento effettivo a scadenza**, o TRES, è il tasso interno di rendimento dell'acquisto seguito dagli incassi contrattuali fino al rimborso. È detto anche *yield to maturity*. Sia $P_{\mathrm{obs}}>0$ il prezzo pagato al regolamento e siano $F_k>0$ gli incassi alle date residue $t_k>0$, tutte espresse nella stessa unità. Il rendimento $i$ per quell'unità soddisfa

$$
P_{\mathrm{obs}}=\sum_{k=1}^{n}\frac{F_k}{(1+i)^{t_k}}.
$$

I dati dell'equazione sono il prezzo pagato, gli importi e le date. Quando il regolamento è fra due date cedolari, si usa il prezzo comprensivo del rateo e si misura ciascun tempo a partire dal regolamento.
:::

::::teorema{titolo="Esistenza e unicità del rendimento a scadenza"}
Per un prezzo positivo e una sequenza finita di incassi futuri positivi, l'equazione del TRES ha una sola soluzione $i>-1$. Di conseguenza, un intervallo in cui il prezzo teorico passa da sopra a sotto il prezzo osservato contiene esattamente il tasso cercato.

:::dimostrazione
Ogni termine $F_k(1+i)^{-t_k}$ è continuo e strettamente decrescente per $i>-1$, perché $F_k>0$ e $t_k>0$. La somma ha le stesse proprietà. Al tendere di $i$ a $-1$ da destra, ogni termine tende a $+\infty$. Al tendere di $i$ a $+\infty$, ogni termine tende a zero. Il teorema dei valori intermedi garantisce l'esistenza per ogni prezzo positivo e la stretta monotonia garantisce l'unicità.
:::
::::

:::esempio{titolo="Ricerca del tasso per tentativi"}
Un titolo costa $900\,\mathrm{euro}$ e paga $60\,\mathrm{euro}$ fra un anno e $1060\,\mathrm{euro}$ fra due anni. Al $10\%$ annuo il prezzo teorico è circa $930{,}58\,\mathrm{euro}$. Al $15\%$ è circa $853{,}69\,\mathrm{euro}$. Il prezzo osservato è fra questi valori, quindi il TRES appartiene all'intervallo fra $10\%$ e $15\%$. Con la bisezione si valuta il prezzo teorico al punto medio. Se questo prezzo è maggiore di quello osservato, si conserva la metà con i tassi più alti. Se è minore, si conserva la metà con i tassi più bassi.
:::

:::attenzione
Il **rendimento cedolare corrente** di un titolo con cedola annuale $C$ è il rapporto $\dfrac{C}{P_{\mathrm{obs}}}$. Esso misura l'incasso cedolare di un anno rispetto al prezzo. Per un titolo che costa $800\,\mathrm{euro}$ e paga $40\,\mathrm{euro}$ di cedola e $840\,\mathrm{euro}$ di rimborso fra un anno, il rapporto corrente è il $5\%$. Il TRES è invece $\dfrac{880}{800}-1=10\%$, perché include anche l'aumento di capitale da $800$ a $840\,\mathrm{euro}$.
:::

## Cedole infrannuali

:::definizione{#cedole-infrannuali titolo="Periodo cedolare e rendimento equivalente"}
Siano $m$ il numero di cedole uguali in un anno, $N$ il nominale e $r_c$ il tasso cedolare nominale annuo. L'importo della cedola è $C=\dfrac{Nr_c}{m}$. Per attualizzarla si usa il rendimento effettivo $i$ di un periodo cedolare. Se il dato è il rendimento annuo effettivo $y>-1$, il rendimento del periodo si trova imponendo l'equivalenza

$$
(1+i)^m=1+y,
\qquad
i=(1+y)^{\frac{1}{m}}-1.
$$

Se il dato è il rendimento annuo nominale convertibile $m$ volte $j^{(m)}$, la sua definizione dà $i=\dfrac{j^{(m)}}{m}$. Cedola e rendimento si riferiscono allo stesso periodo nel calcolo del prezzo, mentre l'esponente conta quanti di quei periodi mancano all'incasso.
:::

:::esempio{titolo="Valutazione con due cedole semestrali"}
Un titolo di nominale $1000\,\mathrm{euro}$ paga cedole semestrali al tasso nominale annuo del $6\%$ e rimborsa alla pari tra un anno. Il rendimento annuo effettivo è il $10{,}25\%$ e il regolamento avviene subito dopo lo stacco. L'importo di una cedola è $\dfrac{1000\cdot0{,}06}{2}=30\,\mathrm{euro}$. Poiché $1{,}1025=1{,}05^2$, il rendimento semestrale è il $5\%$. Il prezzo è quindi

$$
\begin{aligned}
P&=\frac{30}{1{,}05}+\frac{1030}{1{,}05^2}\\[6pt]
 &\approx962{,}81\,\mathrm{euro}.
\end{aligned}
$$
:::

:::osservazione
Un rendimento semestrale del $5\%$ si può esprimere come $10\%$ annuo nominale convertibile due volte oppure come $10{,}25\%$ annuo effettivo. Entrambe le indicazioni danno il medesimo fattore semestrale $1{,}05$ quando se ne applica la definizione. Il tasso cedolare nominale del titolo rimane il dato da cui ricavare l'importo di ciascuna cedola. Se il tempo residuo è tre anni e il regolamento è all'inizio del periodo, le scadenze semestrali sono sei. Per un periodo di lunghezza diversa da quello regolare si ricavano importi e distanze temporali dalla convenzione dichiarata nel testo.
:::

## Corso secco e tel quel

:::definizione{#corso-secco titolo="Prezzo di regolamento e rateo cedolare"}
Con diritto alla prossima cedola, il compratore paga il **prezzo tel quel** $P_{\mathrm{tq}}$, detto anche *dirty price*. La quotazione può esprimere il **corso secco** $P_{\mathrm{s}}$, detto *clean price*. Nella convenzione lineare, con cedola $C$ e frazione $\alpha$ del periodo cedolare già trascorsa, il rateo $A$ è

$$
A=\alpha C,
\qquad
P_{\mathrm{tq}}=P_{\mathrm{s}}+A.
$$

Se il testo assegna il conteggio effettivo nel periodo, $\alpha$ è il rapporto tra i giorni dalla cedola precedente al regolamento e i giorni del periodo cedolare. Le due quantità si misurano con la stessa convenzione. Il prezzo secco separa dal totale la quota di cedola maturata secondo quel conteggio.
:::

:::esempio{titolo="Dal corso per cento all'importo versato"}
Un titolo di nominale $2000\,\mathrm{euro}$ quota al corso secco $98{,}5$ per $100$ di nominale. La prossima cedola è $40\,\mathrm{euro}$. Al regolamento sono trascorsi $45$ dei $180$ giorni del periodo, con conteggio effettivo. Il corso secco espresso in euro è $98{,}5\cdot20=1970\,\mathrm{euro}$, mentre il rateo è $40\cdot\dfrac{45}{180}=10\,\mathrm{euro}$. Il compratore versa $1980\,\mathrm{euro}$. Nel calcolo del TRES, questo è l'esborso iniziale a fronte degli incassi residui.
:::

:::osservazione
Nel calcolo del valore attuale tra due cedole conta il tempo *residuo* alla prossima scadenza. Se lo stesso conteggio viene usato per il rateo e per lo sconto, il prossimo flusso dista $1-\alpha$ periodi. Con cedole regolari, $t_k=k-\alpha$ per la $k$-esima scadenza residua. Il prezzo teorico tel quel è dunque $q^{\alpha}\sum_{k=1}^{n}F_kv^k$. Si può ottenere lo stesso risultato partendo dal valore subito dopo la cedola precedente e capitalizzandolo per $\alpha$ periodi, perché in quel tratto il titolo non paga alcun flusso. Il corso secco si ricava poi sottraendo il rateo, che segue la regola lineare.
:::

:::attenzione
Alla data cedolare va stabilito a chi spetta la cedola in pagamento. In un esercizio con regolamento subito dopo lo stacco, la cedola di quella data è già stata pagata al venditore. Il compratore paga un tel quel pari al corso secco e riceve le cedole successive. Per esempio, se resta un unico pagamento di $1050\,\mathrm{euro}$ fra un anno, al $5\%$ il prezzo è $1000\,\mathrm{euro}$. Attribuire al compratore anche i $50\,\mathrm{euro}$ appena staccati alzerebbe il prezzo a $1050\,\mathrm{euro}$.
:::

## Relazione fra prezzo e rendimento

::::teorema{#tassi-prezzi titolo="Prezzo sopra, alla o sotto la pari"}
Siano $N>0$ il nominale e il rimborso, $C\geq0$ la cedola costante, $n\geq1$ il numero di cedole residue e $i>-1$ il rendimento del periodo cedolare. Si valuta il titolo subito dopo uno stacco, con prima cedola a un periodo di distanza. Vale

$$
P-N=(C-iN)a_{\overline n|i}.
$$

Il fattore $a_{\overline n|i}$ è positivo. Perciò il titolo quota sopra la pari se il tasso cedolare per periodo $\dfrac{C}{N}$ è maggiore di $i$, alla pari se è uguale e sotto la pari se è minore.

:::dimostrazione
Posto $v=(1+i)^{-1}$, vale $iv^k=v^{k-1}-v^k$ per ogni $k\geq1$. Sommando si trova $ia_{\overline n|i}=1-v^n$, identità valida anche per $i=0$. Si sostituisce quindi $Nv^n=N-Nia_{\overline n|i}$ nell'espressione del prezzo. Raccogliendo il fattore della rendita si ottiene la formula.
:::
::::

:::esempio{titolo="Premio sul prezzo e premio di rimborso"}
Un titolo di nominale $1000\,\mathrm{euro}$ paga $60\,\mathrm{euro}$ fra un anno e rimborsa alla pari nella stessa data. Al rendimento del $5\%$ il prezzo supera il nominale di $(60-50)\dfrac{1}{1{,}05}$, cioè circa $9{,}52\,\mathrm{euro}$. Se il rimborso salisse a $1021\,\mathrm{euro}$, il prezzo aumenterebbe del valore attuale dei $21\,\mathrm{euro}$ aggiuntivi, pari a $20\,\mathrm{euro}$.
:::

:::osservazione
Per un rimborso $M$ diverso dal nominale, la stessa identità dà $P-M=(C-iM)a_{\overline n|i}$. Il confronto con $M$ dipende quindi da $\dfrac{C}{M}$, mentre per il confronto con $N$ occorre tenere conto anche di $M-N$. Per esempio, con $N=1000$, $M=1050$, $C=20$, una sola scadenza e $i=5\%$, il prezzo $\dfrac{1070}{1{,}05}$ è sopra il nominale e sotto il rimborso.
:::

:::esempio{titolo="Curva del prezzo a flussi fissi"}
Un titolo di nominale $1000\,\mathrm{euro}$ paga $50\,\mathrm{euro}$ alla fine del primo anno e $1050\,\mathrm{euro}$ alla fine del secondo. Il rendimento effettivo annuo è $i$. Al $5\%$ il titolo quota alla pari. Poiché gli incassi sono positivi, ogni aumento di $i$ riduce il valore attuale di entrambi. Per misurare la sensibilità del prezzo a questi cambiamenti si rimanda al capitolo su duration e convexity.

::grafico{f="50/(1+x/100)+1050/(1+x/100)^2" xmin=-1 xmax=13 ymin=850 ymax=1150 nomi="i,P" punti="5,1000,pieno" etichette="5.8,1015,Alla pari" legenda="P(i)" titolo="Prezzo in euro al variare del rendimento annuo percentuale per un titolo con due anni residui"}

:::

## Rendimento di periodo

:::definizione{#rendimento-periodo titolo="Rendimento realizzato durante il possesso"}
Il rendimento realizzato misura quanto ha prodotto un investimento dalla data di acquisto alla data finale scelta. Siano $P_0>0$ il prezzo tel quel pagato all'acquisto, $P_H$ il prezzo tel quel ottenuto alla vendita al tempo $H$ e $W_H$ il valore al tempo $H$ delle cedole ricevute durante il possesso. Per una vendita subito dopo una cedola, questa cedola appartiene a $W_H$ e il prezzo di vendita riguarda i soli flussi successivi. Il rendimento complessivo è

$$
h=\frac{P_H+W_H-P_0}{P_0}.
$$

Quando $H$ è espresso in anni e $P_H+W_H>0$, il rendimento annuo effettivo equivalente è $(1+h)^{\frac{1}{H}}-1$. Se si tiene il titolo fino al rimborso, al posto del prezzo di vendita si usa il capitale rimborsato. In entrambi i casi ogni entrata ha una sola collocazione nel conto finale.
:::

:::esempio{titolo="Vendita e rendimento di un anno"}
Un titolo è acquistato a $980\,\mathrm{euro}$ e rivenduto a $970\,\mathrm{euro}$ dopo un anno, subito dopo l'incasso di una cedola di $50\,\mathrm{euro}$. Alla fine dell'anno il possessore ha ricevuto $1020\,\mathrm{euro}$. La differenza rispetto al prezzo iniziale è $40\,\mathrm{euro}$, quindi il rendimento è $\dfrac{40}{980}=\dfrac{2}{49}$, circa il $4{,}08\%$. La cedola compensa il calo del prezzo e produce un guadagno netto.
:::

:::osservazione
Se una cedola è incassata prima della data finale, il suo contributo al patrimonio finale dipende dal reinvestimento. Con un tasso effettivo annuo di reinvestimento $r>-1$, una cedola $C_k$ ricevuta al tempo $t_k$ contribuisce con $C_k(1+r)^{H-t_k}$. Il modello in cui si conservano le cedole in contanti corrisponde a $r=0$. Se il titolo si tiene fino al rimborso e tutte le cedole intermedie si reinvestono al TRES, il rendimento annuo equivalente coincide con il TRES. Infatti, moltiplicando entrambi i membri dell'equazione del prezzo per il fattore di montante fino alla scadenza, si ottiene proprio il patrimonio finale.
:::

:::esempio{titolo="Patrimonio finale con reinvestimento"}
Un titolo costa $1000\,\mathrm{euro}$, paga due cedole annue da $50\,\mathrm{euro}$ e rimborsa $1000\,\mathrm{euro}$ al secondo anno. Il TRES è il $5\%$. Se la prima cedola viene reinvestita al $2\%$, vale $51\,\mathrm{euro}$ al secondo anno. Il patrimonio finale è $51+50+1000=1101\,\mathrm{euro}$. Il rendimento annuo realizzato è $\sqrt{1{,}101}-1$, inferiore al $5\%$ perché $1{,}101<1{,}05^2$.
:::

## Portafoglio di titoli

:::definizione{#portafoglio-titoli titolo="Valore e flussi aggregati"}
Siano $x_j$ il numero di unità detenute del titolo $j$ e $P_j$ il prezzo unitario, tutti riferiti alla stessa data. Il valore del **portafoglio** è $\sum_j x_jP_j$. In ogni data futura il flusso aggregato è $\sum_j x_j F_j(t)$, dove $F_j(t)$ è l'importo per unità del titolo $j$ pagato in quella data. Il valore di mercato somma prezzi omogenei, mentre il flusso aggregato somma incassi con la stessa scadenza. Questa distinzione permette di ricavare separatamente il capitale investito e il calendario dei pagamenti.
:::

:::esempio{titolo="Dai pesi di mercato alle quantità"}
Si investono $4500\,\mathrm{euro}$ in due zero coupon, destinando il $40\%$ al primo e il $60\%$ al secondo. Il primo costa $90\,\mathrm{euro}$ per unità e rimborsa $100\,\mathrm{euro}$ tra un anno. Il secondo costa $75\,\mathrm{euro}$ e rimborsa $100\,\mathrm{euro}$ tra due anni. Le quantità sono $\dfrac{1800}{90}=20$ unità del primo titolo e $\dfrac{2700}{75}=36$ del secondo. Il portafoglio paga $2000\,\mathrm{euro}$ al primo anno e $3600\,\mathrm{euro}$ al secondo. I pesi degli incassi differiscono dai pesi di mercato perché i prezzi unitari dei due titoli sono diversi.
:::

:::osservazione
Se $h_j$ è il rendimento realizzato dal titolo $j$ sullo stesso orizzonte e secondo la stessa regola per le cedole, il rendimento realizzato del portafoglio senza movimenti intermedi è $\sum_j w_j h_j$. Il peso iniziale $w_j=\dfrac{x_j P_j}{\sum_k x_kP_k}$ è la quota di capitale investita nel titolo $j$. Infatti, il suo contributo in euro alla variazione patrimoniale è $x_jP_jh_j$. Dividendo la somma delle variazioni per il valore iniziale si ottiene la media ponderata.
:::

:::attenzione
Per ricavare il TRES del portafoglio si usano il prezzo totale e il calendario degli incassi aggregati. Per esempio, due zero coupon costano ciascuno $100\,\mathrm{euro}$. Uno paga $100\,\mathrm{euro}$ dopo un anno e l'altro paga $144\,\mathrm{euro}$ dopo due anni. I TRES individuali sono $0\%$ e $20\%$, con media aritmetica $10\%$. A quel tasso il valore attuale aggregato è $\dfrac{100}{1{,}1}+\dfrac{144}{1{,}21}\approx209{,}92\,\mathrm{euro}$, superiore al prezzo complessivo di $200\,\mathrm{euro}$. Poiché il valore attuale decresce al crescere del tasso, il TRES del portafoglio è maggiore del $10\%$.
:::
