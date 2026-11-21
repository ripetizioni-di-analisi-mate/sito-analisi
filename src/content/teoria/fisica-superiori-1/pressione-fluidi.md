---
titolo: "Pressione nei fluidi in quiete"
sommario: "Pressione, legge di Stevino, pressa idraulica, vasi comunicanti e manometri."
---

## Definizione di pressione

:::definizione{#pressione titolo="Forza normale per unità di area"}
Una **forza** è una spinta o una trazione. Il suo **modulo** è il numero che dice quanto la forza è intensa e si misura in newton, simbolo $\mathrm N$. Una forza è **normale** a una superficie quando è perpendicolare a essa, cioè forma un angolo retto con la superficie. Il simbolo $F_\perp$ si legge «F perpendicolare» e indica il modulo di una forza normale.

Premendo sulla sabbia con il palmo della mano e poi, con la stessa forza, con un solo dito, il dito affonda di più, perché la stessa forza agisce su un'area più piccola. La **pressione** è la grandezza che misura questo effetto, cioè la forza normale che agisce su ogni unità di area. Se una forza normale di modulo $F_\perp$ è distribuita uniformemente su una superficie di area $A$, cioè parti uguali della superficie ricevono parti uguali della forza, la pressione è

$$
p=\frac{F_\perp}{A}.
$$

L'area si misura in metri quadrati ($\mathrm m^2$), quindi la pressione si misura in newton per metro quadrato. Questa unità si chiama **pascal**, simbolo $\mathrm{Pa}$, e vale $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$.

Una forza inclinata rispetto alla superficie si scompone in due parti, dette componenti, una perpendicolare e una parallela alla superficie. Alla pressione contribuisce la sola componente perpendicolare.

Dividendo una stessa forza su un'area doppia si ottiene metà pressione, perché il denominatore di $\dfrac{F_\perp}{A}$ raddoppia. La forza totale che preme su una superficie si chiama **carico**. Conoscere il carico e conoscere la pressione sono quindi due informazioni diverse.

Un **fluido** è una sostanza che scorre e prende la forma del recipiente, come un liquido o un gas. In un fluido fermo la pressione in un punto è una grandezza **scalare**, cioè è descritta da un solo numero con la sua unità di misura, senza direzione e senza verso. La forza che il fluido esercita su un piccolo pezzo di parete è invece perpendicolare alla parete. La direzione di questa forza dipende quindi da come è orientata la parete.

Per una parete piana sulla quale la pressione è uniforme, cioè ha lo stesso valore in ogni punto, il modulo della forza totale è $pA$. Se la pressione cambia da un punto all'altro della parete, $\dfrac{F_\perp}{A}$ è la **pressione media**, cioè la pressione uniforme che darebbe la stessa forza totale.
:::

:::esempio{titolo="Stessa forza, due superfici"}
Una forza di $60\,\mathrm N$ è distribuita su $0{,}02\,\mathrm m^2$. La pressione è

$$
p_1=\frac{60\,\mathrm N}{0{,}02\,\mathrm m^2}=3000\,\mathrm{Pa}.
$$

Lo stesso carico distribuito su $0{,}04\,\mathrm m^2$ produce

$$
p_2=\frac{60\,\mathrm N}{0{,}04\,\mathrm m^2}=1500\,\mathrm{Pa}.
$$

La forza resta sessanta newton. Per ritrovarla da ciascuna pressione si moltiplica per la relativa area, quindi $3000\cdot0{,}02=1500\cdot0{,}04=60$ nelle unità SI. La sigla SI indica il Sistema Internazionale di unità di misura, che comprende il metro, il chilogrammo ($\mathrm{kg}$), il newton e il pascal.
:::

:::esempio{#pressione-media titolo="Una superficie con due pressioni"}
Il chilopascal, simbolo $\mathrm{kPa}$, vale $1000\,\mathrm{Pa}$. Su una piastra ci sono due zone adiacenti, cioè una accanto all'altra. L'area della prima è $0{,}030\,\mathrm m^2$ e la pressione è $2{,}0\,\mathrm{kPa}$. L'area della seconda è $0{,}020\,\mathrm m^2$ e la pressione è $5{,}0\,\mathrm{kPa}$. Le forze premono dalla stessa parte.

Su ciascuna zona la forza è la pressione, in pascal, per l'area della zona.

$$
\begin{aligned}
F_1&=2000\,\mathrm{Pa}\cdot0{,}030\,\mathrm m^2=60\,\mathrm N\\[6pt]
F_2&=5000\,\mathrm{Pa}\cdot0{,}020\,\mathrm m^2=100\,\mathrm N
\end{aligned}
$$

La forza totale vale $60\,\mathrm N+100\,\mathrm N=160\,\mathrm N$ e l'area totale vale $0{,}030\,\mathrm m^2+0{,}020\,\mathrm m^2=0{,}050\,\mathrm m^2$. Sull'area totale la pressione media, indicata con $\bar p$ e letta «p medio», è

$$
\bar p=\frac{160\,\mathrm N}{0{,}050\,\mathrm m^2}=3200\,\mathrm{Pa}=3{,}2\,\mathrm{kPa}.
$$

La media semplice delle due pressioni è $\dfrac{2{,}0+5{,}0}{2}\,\mathrm{kPa}=3{,}5\,\mathrm{kPa}$. Moltiplicata per l'area totale darebbe $3500\cdot0{,}050\,\mathrm N=175\,\mathrm N$, che è diverso dalla forza vera di $160\,\mathrm N$. Con zone di area diversa, ogni pressione conta in proporzione all'area su cui agisce. La pressione media dà la stessa forza complessiva, mentre le pressioni delle singole zone descrivono come quella forza è distribuita.

Nel grafico l'asse orizzontale riporta l'area in decimetri quadrati. Un decimetro quadrato ($\mathrm{dm^2}$) è un quadrato di lato $10\,\mathrm{cm}$ e vale $0{,}01\,\mathrm m^2$, quindi le due zone misurano $3$ e $2\,\mathrm{dm^2}$.

::grafico{linee="0,2 3,2;3,5 5,5" asintoti="x=3;y=3.2" nomi="A (dm²),p (kPa)" xmin=0 xmax=5.5 ymin=0 ymax=6 titolo="L'ascissa indica l'area accumulata a partire da un bordo, in decimetri quadrati. Il tratto più largo pesa di più nella media tratteggiata."}
:::

## Unità della pressione

:::osservazione{#unita titolo="Pascal e conversioni delle aree"}
Il pascal è un newton per metro quadrato. Il prefisso «chilo» significa mille, quindi $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$.

Molte aree sono date in centimetri quadrati ($\mathrm{cm^2}$). Un centimetro è la centesima parte di un metro, cioè $1\,\mathrm{cm}=0{,}01\,\mathrm m=10^{-2}\,\mathrm m$. Un centimetro quadrato è un quadrato di lato $1\,\mathrm{cm}$, quindi la sua area è

$$
1\,\mathrm{cm^2}=0{,}01\,\mathrm m\cdot0{,}01\,\mathrm m=0{,}0001\,\mathrm m^2=10^{-4}\,\mathrm m^2.
$$

L'esponente raddoppia, da $-2$ a $-4$, perché l'area contiene due fattori di lunghezza. Ne segue

$$
1\,\mathrm{N/cm^2}=\frac{1\,\mathrm N}{10^{-4}\,\mathrm m^2}=10^4\,\mathrm{Pa}=10\,000\,\mathrm{Pa}.
$$

Esempio. Un **pistone** è un disco che scorre dentro un cilindro senza lasciar passare il fluido. Una **depressione** è una pressione più bassa di quella presa come confronto. Su un pistone di $25\,\mathrm{cm^2}$ una depressione di modulo $8\,\mathrm{kPa}$ rispetto all'altro lato corrisponde a un contributo netto di forza, cioè a una differenza fra le forze sulle due facce, di $8000\cdot25\cdot10^{-4}\,\mathrm N=20\,\mathrm N$. Nel conto $8\,\mathrm{kPa}=8000\,\mathrm{Pa}$ e $25\,\mathrm{cm^2}=25\cdot10^{-4}\,\mathrm m^2$. Il verso è dal lato a pressione maggiore verso quello a pressione minore.
:::

:::esempio{#taratura-pistone titolo="Tarare un sensore con una forza nota"}
Un sensore di pressione è uno strumento che misura la pressione e ne mostra il valore, detto lettura. Tarare un sensore significa confrontare le sue letture con pressioni di valore noto.

Un pistone di area $20\,\mathrm{cm^2}$ comunica con un sensore. La lettura è azzerata prima di aggiungere un carico, cioè lo strumento segna zero in partenza, quindi dopo l'aggiunta del carico la lettura è soltanto l'aumento di pressione, indicato con $\Delta p$. La lettera greca $\Delta$ si legge «delta» e indica una variazione o una differenza.

Un carico di $8\,\mathrm N$ agisce sull'area $20\,\mathrm{cm^2}=20\cdot10^{-4}\,\mathrm m^2=0{,}0020\,\mathrm m^2$, quindi produce

$$
\Delta p=\frac{8\,\mathrm N}{0{,}0020\,\mathrm m^2}=4000\,\mathrm{Pa}.
$$

Se un secondo strumento legge in $\mathrm{N/cm^2}$, mostra $\dfrac{8}{20}=0{,}40$. Le due letture descrivono il medesimo carico distribuito sulla stessa area.

Con il pistone invariato l'aumento di pressione è il carico diviso per un'area fissa, quindi il grafico dell'aumento di pressione in funzione del carico aggiunto è una retta che passa per l'origine, cioè per il punto con carico zero e aumento zero. La **pendenza** di una retta è il rapporto fra quanto la retta sale e quanto avanza in orizzontale. In queste unità la pendenza è

$$
\frac{4000\,\mathrm{Pa}}{8\,\mathrm N}=500\,\mathrm{Pa/N}.
$$

L'**intercetta** è il valore che la retta assume a carico zero. In una taratura ideale, e in assenza di un carico iniziale non contato, l'intercetta è zero. Un'intercetta diversa da zero indica che lo zero dello strumento è spostato. In quel caso la pendenza si trova ancora dalla differenza fra due letture, divisa per la differenza fra i due carichi, perché lo spostamento dello zero è lo stesso nelle due letture e nella sottrazione si elimina.

::grafico{f="0.5*x" punti="0,0,pieno;8,4,pieno" nomi="F (N),Δp (kPa)" xmin=0 xmax=10 ymin=0 ymax=6 titolo="A 8 N corrispondono 4 kPa. La pendenza letta in kPa/N equivale a 500 Pa/N."}
:::

## Legge di Stevino

::::teorema{#stevino titolo="Pressione e profondità"}
Chi si immerge in piscina sente la pressione sulle orecchie crescere man mano che scende. La legge di Stevino dice di quanto. Vi compaiono quattro grandezze.

- La **densità** di un liquido è la massa contenuta in ogni unità di volume. Si indica con la lettera greca $\rho$, che si legge «ro», e si misura in chilogrammi per metro cubo ($\mathrm{kg/m^3}$). Un metro cubo d'acqua ha massa $1000\,\mathrm{kg}$, quindi la densità dell'acqua è $1000\,\mathrm{kg/m^3}$.
- Il **campo gravitazionale** $g$ è il peso, in newton, di ogni chilogrammo di massa. Vicino alla superficie della Terra vale circa $9{,}8\,\mathrm{N/kg}$ e negli esempi di questo capitolo è arrotondato a $10\,\mathrm{N/kg}$.
- La **profondità** $h$ è la distanza, misurata in verticale, fra il punto e la superficie del liquido che gli sta sopra.
- $p_0$, che si legge «p zero», è la pressione che agisce sulla superficie del liquido, per esempio quella dell'aria.

In un liquido in quiete, cioè fermo, di densità costante $\rho$, con campo gravitazionale uniforme $g$, la pressione a profondità verticale $h$ sotto una superficie a pressione $p_0$ vale
$$
p=p_0+\rho gh.
$$
Il termine $\rho gh$ è l'aumento di pressione dovuto al liquido che sta sopra il punto.

Per confrontare due punti nello stesso liquido con profondità $h_1$ e $h_2$, si scrive la legge per ciascuno e si sottrae. Il termine $p_0$ è lo stesso nelle due scritture e si elimina, quindi si ottiene $p_2-p_1=\rho g(h_2-h_1)$.

:::dimostrazione
Si consideri una colonna verticale immaginaria di liquido che va dalla superficie fino alla profondità $h$, con base di area $A$ e altezza $h$. Sulla colonna agiscono queste forze.

- Alla base, il fluido sottostante esercita verso l'alto la forza $pA$, dove $p$ è la pressione alla profondità $h$.
- In alto la pressione esterna esercita verso il basso la forza $p_0A$.
- Il peso della colonna agisce verso il basso. Il volume della colonna è $Ah$, la sua massa è la densità per il volume, cioè $\rho Ah$, e il peso è la massa per $g$, cioè $\rho Ahg$.
- Le forze laterali sono orizzontali, perché sono perpendicolari alle pareti verticali della colonna. Non hanno quindi componente verticale.

La colonna è ferma, quindi la somma delle forze verticali è nulla. Contando positive le forze verso l'alto si ha $pA-p_0A-\rho Ahg=0$, cioè $pA=p_0A+\rho Ahg$. Si dividono i due membri per $A>0$, che si cancella, e si ottiene $p=p_0+\rho gh$.
:::
::::

:::esempio{titolo="Pressioni a due quote"}
La **quota** di un punto è la sua altezza misurata in verticale. In acqua con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, il prodotto $\rho g$ vale

$$
\rho g=1000\cdot10\,\mathrm{Pa/m}=10\,000\,\mathrm{Pa/m}=10\,\mathrm{kPa/m},
$$

quindi la pressione aumenta di $10\,\mathrm{kPa}$ per ogni metro di profondità. Questo aumento per metro, cioè $\rho g$, in questo capitolo si chiama **gradiente**.

Due punti a $2$ e $5\,\mathrm m$ dalla medesima superficie hanno un dislivello, cioè una differenza di quota, di $3\,\mathrm m$. Le loro pressioni differiscono di $10\,\mathrm{kPa/m}\cdot3\,\mathrm m=30\,\mathrm{kPa}$. Una distanza orizzontale fra i due punti non cambia la differenza, perché nella legge compare soltanto il dislivello verticale $h_2-h_1$.
:::

::grafico{f="10*x" nomi="h (m),Δp (kPa)" punti="2,20,pieno,A;5,50,pieno,B" xmin=0 xmax=6 ymin=0 ymax=65 titolo="In acqua la pendenza è 10 kPa per metro. Da A a B il dislivello è 3 m e la pressione cresce di 30 kPa"}

:::esempio{#densita-da-pressioni titolo="Dedurre densità e pressione superficiale"}
In un recipiente chiuso la densità del liquido e la pressione alla superficie sono ignote. Due sensori assoluti, cioè sensori che misurano la pressione a partire dallo zero del vuoto, leggono $104\,\mathrm{kPa}$ a $0{,}50\,\mathrm m$ di profondità e $120\,\mathrm{kPa}$ a $2{,}50\,\mathrm m$. Il liquido è uniforme, cioè ha la stessa densità in ogni punto, e $g=10\,\mathrm{N/kg}$.

La legge di Stevino scritta per i due punti dà $104\,\mathrm{kPa}=p_0+\rho g\cdot0{,}50\,\mathrm m$ e $120\,\mathrm{kPa}=p_0+\rho g\cdot2{,}50\,\mathrm m$. Sottraendo la prima uguaglianza dalla seconda, la pressione superficiale $p_0$ si elimina. Dividendo poi per il dislivello si ottiene il gradiente.

$$
\rho g=\frac{(120-104)\,\mathrm{kPa}}{(2{,}50-0{,}50)\,\mathrm m}
       =\frac{16\,\mathrm{kPa}}{2{,}00\,\mathrm m}
       =8{,}0\,\mathrm{kPa/m}.
$$

Dividendo il gradiente, $8000\,\mathrm{Pa/m}$, per il campo gravitazionale si trova la densità.

$$
\rho=\frac{8000\,\mathrm{Pa/m}}{10\,\mathrm{N/kg}}=800\,\mathrm{kg/m^3}.
$$

Si risale quindi da uno dei punti alla superficie. Il primo punto è a $0{,}50\,\mathrm m$ di profondità, quindi fra la superficie e quel punto la pressione aumenta di $8{,}0\cdot0{,}50=4{,}0\,\mathrm{kPa}$. Si sottrae questo aumento dalla lettura e si ottiene $p_0=104\,\mathrm{kPa}-4{,}0\,\mathrm{kPa}=100\,\mathrm{kPa}$. Dal secondo punto si sottraggono $8{,}0\cdot2{,}50=20\,\mathrm{kPa}$ e si ritrova lo stesso valore, $120\,\mathrm{kPa}-20\,\mathrm{kPa}=100\,\mathrm{kPa}$.

Con una sola misura esistono più coppie di densità e pressione superficiale che la rispettano. La sola lettura di $104\,\mathrm{kPa}$ a $0{,}50\,\mathrm m$ si ottiene con $\rho=800\,\mathrm{kg/m^3}$ e $p_0=100\,\mathrm{kPa}$, e si ottiene anche con $\rho=1000\,\mathrm{kg/m^3}$ e $p_0=99\,\mathrm{kPa}$, perché $99+10\cdot0{,}50=104$. La coppia è una sola quando si conosce una delle due grandezze oppure si aggiunge una seconda pressione a profondità diversa.

::grafico{f="100+8*x" punti="0,100,pieno;0.5,104,pieno,A;2.5,120,pieno,B" nomi="h (m),p (kPa)" xmin=0 xmax=3 ymin=94 ymax=127 titolo="L'intercetta è la pressione alla superficie. Tra A e B la pressione aumenta di 16 kPa su 2 m."}
:::

:::esempio{#spinta-su-parete titolo="Spinta su una parete verticale"}
Una piastra rettangolare verticale, larga $0{,}30\,\mathrm m$, è immersa in acqua. Il suo bordo superiore è a $0{,}20\,\mathrm m$ sotto la superficie e quello inferiore è a $0{,}80\,\mathrm m$. Sull'altra faccia della piastra agisce la stessa atmosfera che preme sulla superficie dell'acqua. L'aria preme quindi con la stessa pressione su entrambe le facce, e sulla piastra conta la sola differenza di pressione $\Delta p=\rho gh$ dovuta all'acqua.

Con gradiente $10\,\mathrm{kPa/m}$ la differenza di pressione al bordo superiore è $10\cdot0{,}20=2\,\mathrm{kPa}$ e al bordo inferiore è $10\cdot0{,}80=8\,\mathrm{kPa}$.

La differenza di pressione cresce linearmente, cioè aumenta della stessa quantità per ogni centimetro di profondità. La piastra è un rettangolo, quindi tutte le strisce orizzontali di uguale altezza hanno la stessa area. La quota centrale della piastra è a $0{,}50\,\mathrm m$ di profondità, dove la differenza di pressione è $5\,\mathrm{kPa}$. Si accoppiano le strisce simmetriche rispetto alla quota centrale. Le strisce a $0{,}30$ e a $0{,}70\,\mathrm m$ hanno $3$ e $7\,\mathrm{kPa}$, e la loro media è $5\,\mathrm{kPa}$. Lo stesso accade per ogni coppia, quindi la media di tutta la piastra è

$$
\bar p=\frac{2\,\mathrm{kPa}+8\,\mathrm{kPa}}{2}=5\,\mathrm{kPa}.
$$

L'altezza della piastra è $0{,}80-0{,}20=0{,}60\,\mathrm m$ e la sua area è $0{,}30\cdot0{,}60\,\mathrm m^2=0{,}18\,\mathrm m^2$. La forza è la pressione media per l'area.

$$
F=5000\,\mathrm{Pa}\cdot0{,}30\cdot0{,}60\,\mathrm m^2=900\,\mathrm N.
$$

Questo calcolo determina il modulo della forza totale. Una pressione uniforme di $5\,\mathrm{kPa}$ su tutta la piastra darebbe lo stesso modulo, mentre le forze sulle singole strisce sarebbero diverse.

::grafico{poligoni="0.2,0 0.8,0 0.8,8 0.2,2" linee="0.2,2 0.8,8" segmenti="0.2,5,0.8,5" punti="0.2,2,pieno;0.5,5,pieno;0.8,8,pieno" xmin=0 xmax=1 ymin=0 ymax=9 nomi="h (m),Δp (kPa)" titolo="Dalla sommità al bordo inferiore la pressione cresce da 2 a 8 kPa. Il tratteggio indica la media di 5 kPa."}
:::

## Pressione assoluta e relativa

:::definizione{#assoluta titolo="Scegliere il riferimento"}
Il **vuoto** è uno spazio senza materia, nel quale la pressione è zero. La **pressione assoluta** è la pressione misurata a partire dal vuoto e si indica con $p_{\mathrm{ass}}$. La **pressione atmosferica** è la pressione dell'aria che circonda la Terra. Al livello del mare vale circa $101\,\mathrm{kPa}$ assoluti e negli esempi è arrotondata a $100\,\mathrm{kPa}$.

Molti strumenti misurano di quanto una pressione supera un'altra pressione, scelta come riferimento e indicata con $p_{\mathrm{rif}}$. La pressione **relativa** a quel riferimento è la differenza

$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{rif}}.
$$

Per un recipiente aperto il riferimento più usato è la pressione atmosferica, perché l'aria preme sulla superficie del liquido. In un recipiente chiuso, sopra il liquido c'è un gas con una pressione propria, anche diversa dall'atmosferica.

Con atmosfera a $100\,\mathrm{kPa}$ e un gradiente di $10\,\mathrm{kPa/m}$, in acqua alla profondità di $1{,}5\,\mathrm m$ l'aumento dovuto all'acqua è $10\cdot1{,}5=15\,\mathrm{kPa}$. La pressione assoluta è $100+15=115\,\mathrm{kPa}$ e la relativa all'atmosfera è $115-100=15\,\mathrm{kPa}$.

Una membrana è una lamina sottile che separa due ambienti. Se un gas a $90\,\mathrm{kPa}$ assoluti è separato dall'atmosfera da una membrana piana, la sua pressione relativa è $90-100=-10\,\mathrm{kPa}$. Il segno meno indica una pressione più bassa del riferimento. Le forze sulle due facce della membrana hanno versi opposti, quindi la forza netta è la differenza fra le due forze e dipende dalla differenza di pressione.
:::

:::esempio{#tre-riferimenti titolo="Tre letture per lo stesso punto"}
Un recipiente chiuso contiene acqua. Il gas sulla superficie del liquido è a $103\,\mathrm{kPa}$ assoluti e l'ambiente esterno è a $98\,\mathrm{kPa}$ assoluti. Con gradiente $10\,\mathrm{kPa/m}$, a $1{,}5\,\mathrm m$ sotto la superficie la pressione assoluta è $103+10\cdot1{,}5=118\,\mathrm{kPa}$.

Un sensore tarato rispetto all'esterno sottrae la pressione esterna e indica quindi $118-98=20\,\mathrm{kPa}$. Un sensore che prende a riferimento il gas nel recipiente sottrae la pressione del gas e indica $118-103=15\,\mathrm{kPa}$.

| Posizione | Assoluta | Relativa all'esterno | Relativa al gas |
| --- | ---: | ---: | ---: |
| Ambiente esterno | 98 kPa | 0 kPa | −5 kPa |
| Superficie interna | 103 kPa | 5 kPa | 0 kPa |
| A 1,5 m di profondità | 118 kPa | 20 kPa | 15 kPa |

La differenza fra le pressioni di due posizioni è la stessa in ogni colonna, perché i due valori sono riferiti al medesimo zero. Per esempio, tra superficie interna e sensore profondo l'incremento è $118-103=15\,\mathrm{kPa}$ in assoluto ed è $20-5=15\,\mathrm{kPa}$ rispetto all'esterno.

La forza su una parete dipende dalla differenza fra le pressioni che agiscono davvero sulle sue due facce. Due letture si confrontano dopo averle espresse entrambe nella stessa scala di riferimento.

::grafico{f="5+10*x;10*x" legenda="\text{Riferimento esterno};\text{Riferimento al gas}" punti="1.5,20,pieno;1.5,15,pieno" nomi="h (m),p_rel (kPa)" xmin=0 xmax=2 ymin=0 ymax=28 titolo="La retta più alta usa l'esterno come riferimento, l'altra il gas interno. In entrambi i casi il gradiente è lo stesso."}
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmettere una variazione di pressione"}
Un fluido è **incomprimibile** quando il suo volume non cambia anche se viene premuto. I liquidi lo sono con ottima approssimazione. Un fluido è confinato quando è chiuso in un recipiente da cui non esce.

In un fluido incomprimibile in quiete e confinato, una variazione di pressione imposta in un punto si trasmette a tutto il fluido. Se la forma del recipiente e le profondità non cambiano, il contributo $\rho gh$ di ogni punto resta lo stesso e a ogni punto si aggiunge la stessa variazione imposta alla superficie.

Una **pressa idraulica** è formata da due cilindri di area diversa, pieni di liquido e collegati fra loro, ciascuno chiuso da un pistone. È ideale quando si trascurano gli attriti e le perdite di liquido. Una forza aggiuntiva $F_1$ sul pistone di area $A_1$ aumenta la pressione di $\dfrac{F_1}{A_1}$. Lo stesso aumento arriva sotto il pistone di area $A_2$, dove produce la forza aggiuntiva $F_2$. In una pressa ideale con pistoni alla stessa quota e con la stessa pressione esterna sui due pistoni, le forze aggiuntive soddisfano quindi

$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$

Con $A_1=5\,\mathrm{cm^2}$, $A_2=25\,\mathrm{cm^2}$ e $F_1=16\,\mathrm N$, l'aumento di pressione è $\dfrac{16\,\mathrm N}{5\,\mathrm{cm^2}}=3{,}2\,\mathrm{N/cm^2}$. Il pistone grande sviluppa $3{,}2\,\mathrm{N/cm^2}\cdot25\,\mathrm{cm^2}=80\,\mathrm N$.

Se il pistone piccolo avanza di $5\,\mathrm{cm}$ e il liquido è incomprimibile, il volume spostato è l'area per l'avanzamento, cioè $5\,\mathrm{cm^2}\cdot5\,\mathrm{cm}=25\,\mathrm{cm^3}$. Il pistone grande si sposta verso l'esterno per fare posto allo stesso volume, quindi di $\dfrac{25\,\mathrm{cm^3}}{25\,\mathrm{cm^2}}=1\,\mathrm{cm}$. Il rapporto di aree aumenta la forza e riduce lo spostamento.

Un pistone circolare di raggio $r$ ha area $\pi r^2$, dove $\pi$ si legge «pi greco» e vale circa $3{,}14$. Il rapporto fra le aree di due pistoni circolari è quindi il quadrato del rapporto fra i raggi. Con raggi di $8$ e $16\,\mathrm{cm}$ il rapporto fra i raggi è $2$ e quello fra le aree, e fra le forze, è $2^2=4$.
:::

:::esempio{#corsa-e-lavoro titolo="La forza aumenta e la corsa si riduce"}
La **corsa** di un pistone è la distanza di cui si sposta. In una pressa ideale il carico aggiuntivo di $16\,\mathrm N$ agisce su un pistone di $4\,\mathrm{cm^2}$. Un secondo pistone ha area $12\,\mathrm{cm^2}$. Le forze qui considerate sono quelle dovute alla sola variazione di pressione.

L'aumento di pressione è $\dfrac{16\,\mathrm N}{4\,\mathrm{cm^2}}=4\,\mathrm{N/cm^2}$. La forza aggiuntiva all'uscita vale $4\,\mathrm{N/cm^2}\cdot12\,\mathrm{cm^2}=48\,\mathrm N$, tripla di quella d'ingresso perché l'area d'uscita è tripla.

In un piccolo movimento durante il quale l'aumento di pressione resta costante, l'avanzamento di $6\,\mathrm{cm}$ del primo pistone sposta $4\,\mathrm{cm^2}\cdot6\,\mathrm{cm}=24\,\mathrm{cm^3}$ di liquido. Il secondo pistone arretra per accogliere quel volume, quindi di $\dfrac{24\,\mathrm{cm^3}}{12\,\mathrm{cm^2}}=2\,\mathrm{cm}$.

Per una forza costante che agisce nel verso dello spostamento, il **lavoro** è il prodotto del modulo della forza per la distanza percorsa. Si misura in joule, simbolo $\mathrm J$, e un joule è un newton per un metro. Le corse in metri sono $6\,\mathrm{cm}=0{,}06\,\mathrm m$ e $2\,\mathrm{cm}=0{,}02\,\mathrm m$. I prodotti della forza aggiuntiva per la rispettiva corsa, in modulo, sono

$$
\begin{aligned}
16\,\mathrm N\cdot0{,}06\,\mathrm m&=0{,}96\,\mathrm J\\[6pt]
48\,\mathrm N\cdot0{,}02\,\mathrm m&=0{,}96\,\mathrm J
\end{aligned}
$$

I due lavori sono uguali. Per ogni pistone la forza aggiuntiva è $\Delta p\cdot A$ e il volume spostato è $A$ per la corsa, quindi il lavoro è $\Delta p$ per il volume spostato, che è lo stesso per i due pistoni.

L'uguaglianza riguarda le forze aggiuntive nella pressa ideale. Se si misurano i carichi totali, o se i pistoni sono a quote differenti, nel conto entrano anche le pressioni presenti prima di aggiungere il carico, cioè la pressione esterna e il termine $\rho gh$.

::grafico{assi=0 uguale=1 linee="0,3 0,0 6,0 6,3;1,3 1,0.5 3,0.5 3,3;0,2.5 1,2.5;3,2.1 6,2.1" segmenti="0,1.3,1,1.3;3,1.7,6,1.7" vettori="0.5,2.35,0.5,1.4;4.5,1.76,4.5,2.06" etichette="0.1,2.9,4 cm²;3.8,2.6,12 cm²;-0.8,1.9,6 cm;4.9,1.95,2 cm" xmin=-1 xmax=6.4 ymin=-0.3 ymax=3.45 titolo="Il pistone più piccolo avanza di 6 cm. Quello di area tripla arretra di 2 cm."}
:::

## Vasi comunicanti

:::teorema{#vasi titolo="Uguaglianza delle pressioni allo stesso livello"}
I **vasi comunicanti** sono due o più recipienti, detti rami, collegati in basso in modo che il liquido passi dall'uno all'altro. Un liquido è omogeneo quando ha la stessa densità in ogni punto. La **superficie libera** è la superficie del liquido a contatto con l'aria o con un gas.

Due punti alla stessa quota in un liquido fermo, omogeneo e collegato hanno la stessa pressione. Se le pressioni fossero diverse, il liquido si sposterebbe dal punto a pressione maggiore verso quello a pressione minore e non sarebbe fermo.

Se due rami aperti alla stessa atmosfera contengono lo stesso liquido, le superfici libere sono quindi alla stessa quota. Infatti in due punti del fondo alla stessa quota la pressione è $p_{\mathrm{atm}}+\rho gh$, dove $p_{\mathrm{atm}}$ è la pressione atmosferica e $h$ è la profondità sotto la superficie libera del proprio ramo. Le due pressioni sono uguali, quindi le due profondità sono uguali. Il risultato vale anche quando un ramo è più largo dell'altro. Il ramo più largo contiene più volume per ogni centimetro di altezza, e la pressione dipende soltanto dalla profondità.

Due liquidi sono immiscibili quando non si mescolano, come l'olio e l'acqua. La superficie che li separa si chiama **interfaccia**. Per liquidi immiscibili si confrontano le pressioni alla stessa quota nel liquido comune, cioè in quello che occupa il fondo e passa da un ramo all'altro.

In un ramo c'è una colonna d'olio di densità $800\,\mathrm{kg/m^3}$, alta $25\,\mathrm{cm}$ sopra l'interfaccia, e sotto c'è acqua di densità $1000\,\mathrm{kg/m^3}$. Nell'altro ramo c'è solo acqua, che sale di un'altezza $h$ sopra la quota dell'interfaccia. A quella quota le pressioni nei due rami sono uguali.

$$
p_{\mathrm{atm}}+800\cdot g\cdot0{,}25=p_{\mathrm{atm}}+1000\cdot g\cdot h
$$

La pressione dell'aria è comune ai due membri e il fattore $g$ si semplifica. Resta $800\cdot0{,}25=1000\cdot h$, quindi l'acqua sale sopra quella quota di $h=\dfrac{200}{1000}\,\mathrm m=0{,}20\,\mathrm m=20\,\mathrm{cm}$.
:::

:::esempio{#vasi-con-gas titolo="Due superfici a pressioni differenti"}
Due rami comunicanti, A e B, contengono la stessa acqua. Ciascun ramo è chiuso da un gas. Alla superficie di A la pressione è $106\,\mathrm{kPa}$ e alla superficie di B è $101\,\mathrm{kPa}$. Il gradiente è $\rho g=10\,\mathrm{kPa/m}$.

Si sceglie la quota della superficie di A come livello di confronto nel liquido. Nel ramo A la pressione a quella quota è direttamente $106\,\mathrm{kPa}$. Nel ramo B la stessa quota si raggiunge scendendo dalla superficie di B di una profondità $d$, e la pressione lì vale $101\,\mathrm{kPa}+10\,\mathrm{kPa/m}\cdot d$. Le due pressioni sono alla stessa quota nello stesso liquido, quindi sono uguali.

$$
101\,\mathrm{kPa}+10\,\mathrm{kPa/m}\cdot d=106\,\mathrm{kPa}
$$

Serve un incremento idrostatico, cioè dovuto al peso del liquido, di $106-101=5\,\mathrm{kPa}$. Si ottiene $d=\dfrac{5\,\mathrm{kPa}}{10\,\mathrm{kPa/m}}=0{,}50\,\mathrm m$, quindi la superficie di B è più alta di $0{,}50\,\mathrm m$ rispetto a quella di A.

Per trovare di quanto ciascuna superficie si sia spostata rispetto a un livello iniziale comune serve anche il bilancio dei volumi. La sezione di un ramo è l'area del suo taglio orizzontale. Il volume d'acqua che lascia il ramo A è la sezione di A per la discesa di A, ed è uguale al volume che entra in B, cioè alla sezione di B per la salita di B. Se la sezione di A è doppia di quella di B, B sale quindi del doppio di quanto A scende.

La somma di salita e discesa vale il dislivello finale. Posta $x$ la discesa di A, la salita di B è $2x$ e vale

$$
\begin{aligned}
x+2x&=0{,}50\,\mathrm m\\[6pt]
3x&=0{,}50\,\mathrm m\\[6pt]
x&=\frac{0{,}50}{3}\,\mathrm m\approx0{,}17\,\mathrm m
\end{aligned}
$$

Il simbolo $\approx$ si legge «circa uguale». A scende quindi di circa $0{,}17\,\mathrm m$ e B sale di circa $0{,}33\,\mathrm m$.

::grafico{assi=0 uguale=1 poligoni="0,0.7 1.4,0.7 1.4,0.35 2.5,0.35 2.5,1.2 3.2,1.2 3.2,0 0,0" linee="0,1.8 0,0 3.2,0 3.2,1.8;1.4,1.8 1.4,0.35 2.5,0.35 2.5,1.8;0,0.7 1.4,0.7;2.5,1.2 3.2,1.2" segmenti="1.4,0.7,2.85,0.7;2.2,1.2,2.5,1.2;2.2,0.7,2.2,1.2" etichette="0.08,1.5,A 106 kPa;2.1,1.95,B 101 kPa;1.49,0.97,0.50 m" xmin=-0.35 xmax=3.8 ymin=-0.24 ymax=2.25 titolo="La pressione maggiore abbassa la superficie A. Nel ramo B si confrontano le pressioni 0,50 m sotto la superficie."}
:::

## Strati sovrapposti

:::osservazione{#strati titolo="Somma dei contributi idrostatici"}
Quando due liquidi immiscibili sono nello stesso recipiente, il meno denso sta sopra e forma uno strato. Ogni strato uniforme, di densità $\rho_i$ e spessore $h_i$, contribuisce alla pressione con $\rho_i g h_i$. Il pedice $i$ è il numero dello strato, $1$ per il primo dall'alto, $2$ per il secondo. Partendo dalla superficie e scendendo, si sommano gli incrementi fino al punto cercato.

In un recipiente ci sono $0{,}5\,\mathrm m$ di olio di densità $800\,\mathrm{kg/m^3}$ sopra $1\,\mathrm m$ d'acqua, con $g=10\,\mathrm{N/kg}$.

$$
\begin{aligned}
\text{olio}\quad &800\cdot10\cdot0{,}5\,\mathrm{Pa}=4000\,\mathrm{Pa}=4\,\mathrm{kPa}\\[6pt]
\text{acqua}\quad &1000\cdot10\cdot1\,\mathrm{Pa}=10\,000\,\mathrm{Pa}=10\,\mathrm{kPa}
\end{aligned}
$$

Il fondo è quindi a $4+10=14\,\mathrm{kPa}$ sopra la pressione della superficie, presa come riferimento.

La tensione superficiale è la resistenza che la superficie di un liquido oppone a essere deformata. All'interfaccia piana fra due liquidi in quiete, trascurando la tensione superficiale, la pressione è continua, cioè ha lo stesso valore subito sopra e subito sotto l'interfaccia. Nell'esempio vale $4\,\mathrm{kPa}$ da entrambe le parti. La pendenza del grafico della pressione rispetto alla profondità invece cambia, perché nello strato più denso la pressione cresce più rapidamente, con $8\,\mathrm{kPa/m}$ nell'olio e $10\,\mathrm{kPa/m}$ nell'acqua. Nel grafico il tratto più ripido corrisponde all'acqua.
:::

::grafico{linee="0,0 0.5,4 1.5,14" punti="0.5,4,pieno,I;1.5,14,pieno,F" nomi="h (m),Δp (kPa)" xmin=0 xmax=1.65 ymin=0 ymax=16 titolo="Il punto I è l'interfaccia fra olio e acqua. La pressione resta continua e la pendenza aumenta nell'acqua"}

:::esempio{#spessori-da-pressione titolo="Trovare due spessori da una misura"}
Un recipiente contiene olio e acqua sovrapposti, per uno spessore complessivo di $1{,}50\,\mathrm m$. Sul fondo la pressione supera quella della superficie di $13{,}2\,\mathrm{kPa}$. Il gradiente nell'olio vale $8\,\mathrm{kPa/m}$ e quello nell'acqua $10\,\mathrm{kPa/m}$.

Sia $x$ lo spessore dell'olio in metri. I due spessori sommati danno $1{,}50\,\mathrm m$, quindi lo spessore d'acqua è $1{,}50-x$. Il contributo dell'olio è $8x$ e quello dell'acqua è $10(1{,}50-x)$, entrambi in chilopascal. La loro somma è l'aumento misurato.

$$
\begin{aligned}
8x+10(1{,}50-x)&=13{,}2\\
8x+15{,}0-10x&=13{,}2\\
15{,}0-2x&=13{,}2 \\
2x&=1{,}8\\
x&=0{,}90.
\end{aligned}
$$

L'olio è spesso $0{,}90\,\mathrm m$ e l'acqua $1{,}50-0{,}90=0{,}60\,\mathrm m$. I due contributi sono $8\cdot0{,}90=7{,}2\,\mathrm{kPa}$ e $10\cdot0{,}60=6{,}0\,\mathrm{kPa}$.

Un recipiente pieno solo d'olio darebbe $8\cdot1{,}50=12{,}0\,\mathrm{kPa}$, mentre uno pieno solo d'acqua darebbe $10\cdot1{,}50=15{,}0\,\mathrm{kPa}$. La lettura di $13{,}2\,\mathrm{kPa}$ è compresa fra questi due valori, e questo confronto si fa prima di risolvere l'equazione. Una lettura minore di $12{,}0$ o maggiore di $15{,}0\,\mathrm{kPa}$ non si otterrebbe con due spessori entrambi positivi. I due valori estremi corrispondono al caso in cui uno dei due strati manca.

Nel grafico i due cerchi vuoti sono i valori $12{,}0$ e $15{,}0\,\mathrm{kPa}$ dei liquidi puri.

::grafico{linee="0,0 0.9,7.2 1.5,13.2" f="8*x;10*x" legenda="\text{Solo olio};\text{Solo acqua}" xmin=0 xmax=1.6 ymin=0 ymax=16.5 nomi="h (m),Δp (kPa)" punti="0.9,7.2,pieno,I;1.5,12,vuoto;1.5,13.2,pieno;1.5,15,vuoto" titolo="La spezzata segue prima la retta dell'olio e piega in I. Al fondo il risultato è fra i valori dei liquidi puri."}
:::

## Manometri e barometri

:::osservazione{#manometri titolo="Colonne che misurano una pressione"}
Un **manometro** è uno strumento che misura una differenza di pressione. Il manometro a tubo a U è un tubo piegato a forma di U che contiene un liquido. Ciascuno dei due rami è a contatto con un gas. Il dislivello fra le due superfici del liquido si indica con $\Delta h$.

Se il liquido è uniforme e il gas ha densità trascurabile, cioè così piccola che il peso del gas non conta, il dislivello fra le superfici dà il modulo della differenza di pressione, che vale $\rho g\Delta h$. Il lato su cui la superficie è più bassa è a pressione maggiore. Alla quota della superficie più bassa, infatti, le pressioni nei due rami sono uguali. In un ramo c'è la sola pressione del primo gas, nell'altro la pressione del secondo gas più quella della colonna di liquido alta $\Delta h$. Il primo gas ha quindi una pressione più grande di $\rho g\Delta h$.

Con acqua, $g=10\,\mathrm{N/kg}$ e dislivello $12\,\mathrm{cm}=0{,}12\,\mathrm m$, il modulo è $1000\cdot10\cdot0{,}12\,\mathrm{Pa}=1200\,\mathrm{Pa}$.

Un **barometro** è uno strumento che misura la pressione atmosferica. È un tubo chiuso in cima, pieno di liquido e capovolto in una vaschetta dello stesso liquido. Il liquido scende nel tubo fino a un'altezza $h$ sopra la superficie della vaschetta e sopra la colonna resta uno spazio quasi vuoto. In un barometro ideale la pressione sopra la colonna è trascurabile rispetto a quella atmosferica. Per la legge di Stevino con $p_0=0$, l'altezza $h$ soddisfa allora

$$
p_{\mathrm{atm}}=\rho gh.
$$

A parità di pressione, un liquido più denso richiede una colonna più corta. Con $p_{\mathrm{atm}}=100\,\mathrm{kPa}$ e $g=10\,\mathrm{N/kg}$, l'acqua dà una colonna di $10\,\mathrm m$. Il mercurio, un metallo liquido di densità $13\,600\,\mathrm{kg/m^3}$, dà $h=\dfrac{100\,000}{13\,600\cdot10}\,\mathrm m\approx0{,}74\,\mathrm m$.

Un fluido meno denso aumenta il dislivello per la stessa differenza di pressione. Nel manometro, la differenza di $1200\,\mathrm{Pa}$ produce $12\,\mathrm{cm}$ con l'acqua e $\dfrac{1200}{800\cdot10}\,\mathrm m=0{,}15\,\mathrm m=15\,\mathrm{cm}$ con un olio di densità $800\,\mathrm{kg/m^3}$. Cambia di conseguenza il campo di misura dello strumento, cioè l'intervallo di pressioni che un tubo di lunghezza data riesce a misurare.
:::

:::esempio{#barometro-pressione-residua titolo="Una pressione residua nel barometro"}
Un barometro contiene un liquido di densità $12\,500\,\mathrm{kg/m^3}$ e si usa $g=10\,\mathrm{N/kg}$. In cima alla colonna è rimasto un gas, detto residuo, con pressione assoluta $3\,\mathrm{kPa}$. La colonna è alta $0{,}80\,\mathrm m$.

Si parte dalla pressione in cima e si scende fino alla superficie della vaschetta. L'incremento idrostatico vale

$$
\rho gh=12\,500\cdot10\cdot0{,}80\,\mathrm{Pa}=100\,000\,\mathrm{Pa}=100\,\mathrm{kPa}.
$$

Alla quota della superficie della vaschetta la pressione nel tubo è quindi $3+100=103\,\mathrm{kPa}$. Alla stessa quota, fuori dal tubo, il liquido è a contatto con l'atmosfera. Le due pressioni sono alla stessa quota nello stesso liquido, quindi sono uguali, e la pressione atmosferica risulta $103\,\mathrm{kPa}$.

Un calcolo che supponesse il vuoto in cima userebbe $p_{\mathrm{atm}}=\rho gh$ e attribuirebbe all'atmosfera i soli $100\,\mathrm{kPa}$ della colonna, con un valore più basso del vero di $3\,\mathrm{kPa}$. A parità di atmosfera, infatti, il gas in cima spinge la colonna verso il basso e riduce l'altezza di liquido che l'atmosfera sostiene.

Nell'equazione $h$ è l'altezza verticale della colonna, anche se il tubo è obliquo. In misure molto precise, la pressione sulla sommità si valuta alla temperatura a cui si fa la misura, poiché anche il vapore del liquido, cioè la parte di liquido passata allo stato di gas, contribuisce a quella pressione.

::grafico{f="125*x;3+125*x" legenda="\text{Vuoto in cima};\text{Gas residuo}" xmin=0 xmax=1 ymin=0 ymax=132 nomi="h (m),p (kPa)" punti="0.8,100,vuoto;0.8,103,pieno" segmenti="0.8,0,0.8,100;0.65,100,0.8,100;0.8,103,0.82,122" etichette="0.52,101,100 kPa;0.83,125,103 kPa" titolo="A 0,80 m l'atmosfera vale 103 kPa con gas residuo. La retta che parte dal vuoto darebbe 100 kPa."}
:::
