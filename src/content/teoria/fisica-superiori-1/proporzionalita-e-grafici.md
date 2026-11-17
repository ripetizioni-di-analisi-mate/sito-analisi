---
titolo: "Proporzionalità e grafici"
sommario: "Lettura di tabelle, scale e grafici. Modelli diretti, inversi, affini e quadratici."
---

Le coppie di dati sperimentali collegano il valore di una grandezza a quello di un'altra. Un grafico permette di vedere la relazione, mentre un modello ne rende esplicita la legge e il campo di applicazione.

## Assi e scale

:::definizione{#assi titolo="Associare coordinate e grandezze"}
Un punto $(x;y)$ rappresenta una coppia. La coordinata $x$ si legge sull'asse orizzontale, quella $y$ sull'asse verticale. Occorre indicare quale grandezza e quale unità corrispondano a ogni asse. Una distanza di due quadretti può rappresentare $4\,\mathrm{cm}$ lungo un asse e $10\,\mathrm N$ lungo l'altro. Per confrontare in modo quantitativo due punti si usano i valori letti sulle scale. L'angolo che la linea forma sulla carta dipende dalla scelta grafica delle due scale.
:::

:::esempio{#unita-pendenza titolo="Dai quadretti alle grandezze"}
Nel grafico di una forza $F$ rispetto a una lunghezza $l$, ogni quadretto vale $2\,\mathrm{cm}$ in orizzontale e $5\,\mathrm N$ in verticale. Su una retta, avanzare di due quadretti e salire di tre significa $\Delta l=4\,\mathrm{cm}$ e $\Delta F=15\,\mathrm N$. La pendenza è $\dfrac{15}{4}\,\mathrm{N/cm}$. Il rapporto fra i quadretti, $\dfrac32$, descrive l'inclinazione sulla carta e va trasformato usando le scale.
:::

::grafico{f="15*x/4" xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno,P;4,15,pieno,Q" segmenti="0,0,4,0;4,0,4,15" nomi="l (cm),F (N)" titolo="Il rapporto fra le differenze di coordinate vale 15 N divisi per 4 cm"}

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
Per una **proporzionalità diretta** $y=kx$, con coefficiente costante $k$. Per $x\neq0$ il rapporto $y/x$ vale $k$. Le unità di $k$ sono quelle di $y$ divise per quelle di $x$. Quando l'origine appartiene al dominio, il modello dà $y=0$ in corrispondenza di $x=0$. Se si moltiplica $x$ per un fattore, anche $y$ viene moltiplicata per quel fattore. Nel caso di una raccolta d'acqua a portata costante, il doppio del tempo dall'inizio dà il doppio del volume raccolto.
:::

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="t (min),V (L)" punti="1,3,pieno,A;2,6,pieno,B" titolo="Con portata 3 L/min, raddoppiare il tempo raddoppia il volume raccolto"}

:::esempio{#diretta-inversa titolo="Dal volume al tempo"}
Assumiamo $V=3t$, con $V$ in litri e $t$ in minuti. Per ottenere $7{,}5\,\mathrm L$ occorrono $\dfrac{7{,}5}{3}=2{,}5\,\mathrm{min}$. La divisione è necessaria perché si cerca $t$, il fattore moltiplicato per tre. Sul grafico si parte da $7{,}5$ in ordinata, si raggiunge la retta e si legge l'ascissa. Sostituendo $2{,}5$ nella legge si ritrova il volume richiesto.
:::

## Proporzionalità inversa

:::definizione{#inversa titolo="Prodotto costante"}
Due grandezze positive sono in **proporzionalità inversa** se $xy=c$ con $c>0$ costante. La legge esplicita è $y=\dfrac{c}{x}$ con $x>0$. Duplicare la prima grandezza dimezza la seconda, perché il prodotto deve restare uguale. Se si distribuiscono $12\,\mathrm{cm}^3$ di un materiale in uno strato di spessore uniforme, un'area di $2\,\mathrm{cm}^2$ richiede $6\,\mathrm{cm}$ di spessore e un'area di $4\,\mathrm{cm}^2$ ne richiede $3\,\mathrm{cm}$. Nel grafico il modello scende e il rapporto $y/x$ varia.
:::

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="A (cm²),h (cm)" punti="2,6,pieno,A;4,3,pieno,B" titolo="Raddoppiando l'area lo spessore si dimezza. In entrambi i punti il volume è 12 cm³"}

:::attenzione{#calo-non-inverso titolo="Una diminuzione da sola"}
In $y=12-2x$, passare da $x=2$ a $x=4$ porta $y$ da $8$ a $4$. In questi due punti il prodotto vale $16$, ma in $x=3$ vale $18$. Due osservazioni possono coincidere con più modelli. Per distinguere una discesa a pendenza costante da una proporzionalità inversa, si controllano le previsioni anche in altri punti, oppure si parte dalla legge fisica del fenomeno.
:::

## Relazioni affini

:::definizione{#affine titolo="Pendenza e valore iniziale"}
Una **relazione affine** si scrive $y=mx+q$. Il coefficiente $m$ misura la variazione di $y$ per aumento unitario di $x$. L'intercetta $q$ è il valore dato dal modello in $x=0$. Se lo zero è osservabile, l'intercetta può rappresentare il dato iniziale. Due punti con ascisse diverse bastano per trovare $m$ e $q$ nel modello affine. Invece il rapporto $y/x$ dipende da $x$ se $q$ è diverso da zero.
:::

::::teorema{#due-punti titolo="Ricavare pendenza e intercetta"}
Per due punti della stessa retta con $x_1\neq x_2$, vale
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$

:::dimostrazione
Si scrivono $y_1=mx_1+q$ e $y_2=mx_2+q$. Sottraendo nel medesimo ordine le coordinate, l'intercetta si cancella e rimane $y_2-y_1=m(x_2-x_1)$. Si può dividere perché la differenza delle ascisse è diversa da zero. Sostituendo $m$ nella prima uguaglianza si ricava $q$.
:::
::::

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="t (min),V (L)" legenda="\text{recipiente A};\text{recipiente B}" punti="0,0,pieno;0,4,pieno;3,6,pieno;3,10,pieno" titolo="I recipienti iniziano con volumi diversi e si riempiono alla stessa portata"}

:::esempio{#confronti-modelli titolo="L'incontro di due rette"}
Due recipienti contengono $V_A=2t+4$ e $V_B=4t$, con volumi in litri e tempi in minuti. Il primo parte con un vantaggio di quattro litri, mentre il secondo raccoglie due litri al minuto in più. Dopo $\dfrac42=2\,\mathrm{min}$ hanno lo stesso volume, $8\,\mathrm L$. Scrivere $2t+4=4t$ esprime la condizione di intersezione. Conta la differenza delle pendenze perché entrambe le quantità cambiano nel tempo.
:::

::grafico{f="2*x+4;4*x" xmin=0 xmax=4 ymin=0 ymax=16 punti="2,8,pieno,P" nomi="t (min),V (L)" legenda="A;B" titolo="Le rette si incontrano quando i volumi sono uguali per lo stesso istante"}

## Leggere una tabella

:::osservazione{#tabelle titolo="Scegliere una relazione compatibile con i dati"}
Si verifica un modello diretto calcolando $y/x$ quando $x$ è non nullo, un modello inverso calcolando $xy$ e un modello affine confrontando i rapporti fra differenze successive. Se le ascisse sono equispaziate, per quest'ultimo bastano differenze verticali uguali. Quando i dati sperimentali hanno incertezze, rapporti non esattamente uguali possono rappresentare la stessa legge. Si valuta quindi la dimensione degli scarti rispetto alle incertezze disponibili.
:::

:::esempio{#residui titolo="Uno scarto rispetto al modello"}
Il volume previsto da $V=2t+1$ a $t=4\,\mathrm{min}$ è $9\,\mathrm L$. Una misura di $8{,}8\,\mathrm L$ ha **residuo** $8{,}8-9=-0{,}2\,\mathrm L$: la lettura è più bassa della previsione. Con incertezza $0{,}3\,\mathrm L$, il valore previsto è dentro l'intervallo associato alla lettura. La verifica su un singolo punto controlla quell'osservazione, mentre un confronto su tutto il grafico stabilisce se gli scarti hanno un andamento riconoscibile.
:::

:::osservazione{#dominio titolo="Prevedere all'interno e all'esterno dei dati"}
Un modello usato fra le ascisse osservate fornisce un'interpolazione. Usato oltre quell'intervallo dà una estrapolazione, che richiede di supporre che il meccanismo resti valido. Per esempio, un modello di riempimento continuo in un recipiente descrive il volume finché c'è spazio. Dopo la capacità massima il comportamento cambia. Si può calcolare l'istante in cui la retta raggiunge quel limite per capire fino a dove usarla.
:::

## Dipendenze dal quadrato

:::osservazione{#quadratica titolo="Fattori di scala"}
Quando $y=cx^2$ e $c>0$, raddoppiare $x>0$ moltiplica $y$ per quattro. Vale invece l'inverso quadratico $y=c/x^2$ quando lo stesso raddoppio divide $y$ per quattro. Per riconoscere i due casi si controllano rispettivamente il rapporto $y/x^2$ e il prodotto $yx^2$. L'area del quadrato fornisce un esempio diretto. Per un incremento di lunghezza da $x$ a $x+1$ la nuova area aumenta di $2x+1$, mentre in una relazione affine incrementi uguali dell'ascissa danno sempre lo stesso aumento verticale.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=16 nomi="l (cm),A (cm²)" punti="1,1,pieno;2,4,pieno;3,9,pieno" titolo="Aumenti uguali del lato producono aumenti di area diversi"}

:::esempio{titolo="Leggere una legge trasformando l'ascissa"}
Se $y=2x^2$, si definisce $u=x^2$ e si disegna $y$ in funzione di $u$. La legge diventa $y=2u$, una retta che permette di leggere il coefficiente. Le unità dell'asse cambiano: se $x$ è in centimetri, $u$ è in centimetri quadrati. Il grafico trasformato può aiutare a controllare il modello, purché i nuovi assi siano dichiarati.
:::
