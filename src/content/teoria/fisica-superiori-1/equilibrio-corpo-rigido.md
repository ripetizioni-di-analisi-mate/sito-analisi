---
titolo: "Equilibrio del corpo rigido"
sommario: "Momenti, leve, coppie di forze, reazioni delle travi, baricentri e stabilità."
---

:::percorso
L'annullamento della risultante controlla l'equilibrio traslatorio.
Per un corpo esteso occorre anche controllare la tendenza a ruotare.
Momenti, bracci e baricentro permettono di risolvere leve, travi appoggiate e problemi di stabilità.
:::

## Momento di una forza

:::definizione{#momento titolo="Forza e distanza perpendicolare"}
Il **momento** di una forza rispetto a un punto descrive la sua tendenza a produrre rotazione. Nel piano il suo modulo è
$$
M=Fb,
$$
dove b è il **braccio**, cioè la distanza perpendicolare dal punto alla linea d'azione della forza. L'unità è N m.
Una forza di 20 N con braccio 0,3 m produce 6 N m. Se la linea d'azione attraversa il punto scelto, il braccio e il momento sono nulli. La distanza dal punto di applicazione al perno coincide con il braccio soltanto quando la forza è perpendicolare a quel segmento.
:::

## Segni dei momenti

:::osservazione{#segni titolo="Orario e antiorario"}
Si sceglie un verso di rotazione positivo, per esempio quello antiorario. Una forza che tende a ruotare il corpo in quel verso ha momento positivo; quella che tende al verso opposto ha momento negativo.
Un momento di 8 N m antiorario e uno di 3 N m orario danno un totale di 5 N m antiorario. Il segno dipende dalla tendenza di rotazione rispetto al punto scelto, non dal solo verso verticale della forza.
:::

## Equilibrio del corpo rigido

:::teorema{#equilibrio-rigido titolo="Forze e momenti devono annullarsi"}
Per un corpo rigido fermo nel piano, in un riferimento inerziale, occorre
$$
\begin{cases}
\sum F_x=0,\\
\sum F_y=0,\\
\sum M_O=0.
\end{cases}
$$
O è il punto rispetto al quale si calcolano i momenti. Quando la risultante è nulla, il momento totale non dipende dalla scelta di O. Conviene scegliere un punto su cui passa una forza incognita: quella forza ha momento nullo e non compare nella relativa equazione.
:::

## Leve

:::teorema{#leve titolo="Uguaglianza dei momenti opposti"}
Una leva ideale con due forze ai lati del fulcro, e peso proprio trascurabile oppure già equilibrato, soddisfa
$$
F_1b_1=F_2b_2.
$$
Per equilibrare 40 N con braccio 0,2 m usando un braccio di 0,8 m occorrono 10 N. Il rapporto fra forza resistente e motrice è il rapporto fra braccio motore e resistente.
I bracci sono distanze perpendicolari. Se la forza è obliqua alla leva, si può usare la componente perpendicolare moltiplicata per la distanza fra fulcro e punto di applicazione.

::grafico{assi=0 uguale=1 xmin=-2.5 xmax=5.5 ymin=-3 ymax=3.2 linee="-1.5,0 4.5,0;-0.35,-0.6 0,0 0.35,-0.6 -0.35,-0.6;-0.6,-0.7 0.6,-0.7" vettori="-1,0,-1,-2,F₁ = 40 N;4,0,4,-0.5,F₂ = 10 N;0,0,0,2.5,R = 50 N" punti="0,0" etichette="-0.65,0.55,0,2 m;2.2,0.55,0,8 m;0,-1.1,O" titolo="Leva di peso trascurabile: $40\cdot0{,}2=10\cdot0{,}8$. La reazione del fulcro, $R=50\,\mathrm N$, equilibra le due forze verso il basso"}
:::

## Coppie di forze

:::definizione{#coppie titolo="Risultante nulla e momento non nullo"}
Una **coppia** è formata da due forze parallele, uguali e opposte, con linee d'azione diverse. La risultante è nulla; il modulo del momento è $M_c=Fd$, dove d è la distanza fra le linee.
Due forze di 10 N distanti 0,2 m producono una coppia di 2 N m. Il momento della coppia non dipende dal punto rispetto al quale si calcola. Il corpo non è in equilibrio sotto l'effetto della sola coppia, anche se la somma delle forze è zero.
:::

## Travi con due appoggi

:::osservazione{#travi titolo="Ricavare le reazioni"}
Una trave orizzontale appoggiata agli estremi A e B riceve reazioni verticali $R_A$ e $R_B$. Prima si impone $R_A+R_B=P_{\mathrm{tot}}$; poi si annullano i momenti, per esempio rispetto ad A.
Una trave senza peso lunga 3 m porta un carico di 60 N a 1 m da A. Da $3R_B=60\cdot1$ si trova $R_B=20\,\mathrm N$; quindi $R_A=40\,\mathrm N$. Il peso proprio di una trave omogenea va applicato al centro e aggiunto ai carichi.
:::

## Baricentro

:::definizione{#baricentro titolo="Posizione della risultante dei pesi"}
In un campo gravitazionale uniforme il peso totale si può applicare al **baricentro**. Per due masse puntiformi lungo un asse,
$$
x_G=\frac{m_1x_1+m_2x_2}{m_1+m_2}.
$$
Due masse 1 kg e 2 kg poste a 0 e 3 m hanno baricentro a 2 m. Per un'asta omogenea il baricentro è il punto medio; per un corpo con distribuzione di massa non uniforme non basta osservare il centro geometrico.
:::

## Stabilità e ribaltamento

:::teorema{#stabilita titolo="La verticale del baricentro"}
Un corpo appoggiato, soggetto soltanto al peso e alle reazioni di sostegno, può mantenere l'equilibrio se la verticale del baricentro attraversa la base di appoggio. Quando raggiunge un bordo si raggiunge una configurazione limite; oltre il bordo il peso tende a ribaltare il corpo.
Con una spinta orizzontale applicata a quota h, si confrontano i momenti rispetto allo spigolo di ribaltamento. Per base larga w e baricentro centrale, alla soglia $Fh=P\,w/2$. Questa conclusione presuppone attrito sufficiente a evitare uno scorrimento precedente.
:::
