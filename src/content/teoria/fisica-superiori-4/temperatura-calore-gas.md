---
titolo: Temperatura, calore e gas ideali
sommario: Equilibrio termico, dilatazione, bilanci con e senza passaggi di stato, trasferimento del calore e leggi dei gas ideali.
---

## Temperatura ed equilibrio termico

:::definizione{#temperatura titolo="Temperatura ed equilibrio termico"}
Due corpi sono in **equilibrio termico** quando, messi in contatto attraverso una parete che permette lo scambio di calore, mantengono la stessa temperatura. Il principio zero della termodinamica afferma che se due corpi sono in equilibrio termico con un terzo, allora sono in equilibrio termico tra loro. Per misurare la temperatura di un corpo si attende che il termometro raggiunga l'equilibrio con esso. La misura rappresenta bene lo stato iniziale del corpo se il termometro assorbe o cede una quantità di energia trascurabile.

Sia $t$ il valore della temperatura in gradi Celsius e sia $T$ il suo valore in kelvin. Le due scale hanno incrementi della stessa ampiezza, perciò
$$
T=t+273{,}15,
\qquad
T_2-T_1=t_2-t_1
$$
come uguaglianze fra valori numerici. Per esempio $20\,{}^\circ\mathrm C$ corrispondono a $293{,}15\,\mathrm K$ e un aumento di $20\,{}^\circ\mathrm C$ corrisponde a un aumento di $20\,\mathrm K$. Alla pressione atmosferica normale l'acqua pura fonde a circa $0\,{}^\circ\mathrm C$ e bolle a circa $100\,{}^\circ\mathrm C$.
:::

:::attenzione
In un rapporto di temperature delle leggi dei gas si usano i kelvin. Se un gas ideale in un recipiente rigido chiuso passa da $20$ a $40\,{}^\circ\mathrm C$, il rapporto fra la pressione finale e quella iniziale è
$$
\frac{p_2}{p_1}=\frac{313{,}15}{293{,}15}\simeq1{,}068.
$$
La pressione cresce di circa il $6{,}8\%$. Il rapporto $\dfrac{40}{20}$ darebbe un raddoppio perché usa una scala il cui zero non corrisponde allo zero assoluto.
:::

:::esempio{titolo="Conversioni fra le scale"}
La temperatura del corpo umano, $37\,{}^\circ\mathrm C$, corrisponde a $T=37+273{,}15=310{,}15\,\mathrm K$. L'azoto liquido bolle a $77\,\mathrm K$, cioè a $t=77-273{,}15=-196{,}15\,{}^\circ\mathrm C$. Lo zero assoluto, $T=0\,\mathrm K$, corrisponde a $-273{,}15\,{}^\circ\mathrm C$.
:::

## Dilatazione dei corpi

:::teorema{#dilatazione titolo="Dilatazione lineare e volumica"}
Siano $L_0$ la lunghezza iniziale di una sbarra libera e $\Delta T$ la variazione di temperatura, uniforme lungo la sbarra. Il **coefficiente di dilatazione lineare** $\alpha$, misurato in $\mathrm{K^{-1}}$, esprime la variazione relativa di lunghezza per kelvin. Se $\alpha$ è circa costante nell'intervallo considerato e il prodotto $|\alpha\Delta T|$ è piccolo rispetto a $1$, valgono le approssimazioni
$$
\Delta L=\alpha L_0\Delta T,
\qquad L=L_0(1+\alpha\Delta T).
$$
Per $\alpha>0$ il segno di $\Delta L$ coincide con quello di $\Delta T$. Il modello descrive la sbarra libera di allungarsi o di accorciarsi. Se le estremità sono bloccate, il vincolo impedisce la dilatazione libera e può produrre sollecitazioni nella sbarra.

Per una variazione di volume si scrive $\Delta V=\beta V_0\Delta T$, con $\beta$ coefficiente di dilatazione volumica. In un solido isotropo le tre dimensioni cambiano nello stesso rapporto. Un cubo di spigolo $L_0$ passa quindi dal volume $L_0^3$ al volume $L_0^3(1+\alpha\Delta T)^3$. Sviluppando il cubo,
$$
\frac{\Delta V}{V_0}
=3\alpha\Delta T+3(\alpha\Delta T)^2+(\alpha\Delta T)^3
\simeq3\alpha\Delta T.
$$
Gli ultimi due termini sono trascurabili nel modello lineare, perciò $\beta\simeq3\alpha$. Per un liquido si usa il suo coefficiente volumico. Tra $0$ e $4\,{}^\circ\mathrm C$ il volume dell'acqua diminuisce quando la temperatura aumenta.
:::

:::esempio{titolo="Allungamento e lettura della pendenza"}
Una sbarra di acciaio lunga $2{,}0\,\mathrm m$ ha $\alpha=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$. Per un aumento di temperatura di $50\,\mathrm K$ il suo allungamento è
$$
\Delta L=(1{,}2\cdot10^{-5})\cdot2{,}0\cdot50\,\mathrm m
=1{,}2\cdot10^{-3}\,\mathrm m
=1{,}2\,\mathrm{mm}.
$$
La pendenza $\alpha L_0$ della retta indica di quanto si allunga la sbarra per un aumento di un kelvin. Per una sbarra dello stesso materiale lunga il doppio la pendenza sarebbe doppia.

::grafico{f="0.024*x" punti="50,1.2,pieno" xmin=-7 xmax=63 ymin=-0.2 ymax=2 nomi="ΔT,ΔL (mm)" titolo="Per la sbarra del problema la pendenza è 0,024 mm per kelvin"}
:::

:::esempio{titolo="Giunti di dilatazione di una rotaia"}
Una rotaia di acciaio lunga $12\,\mathrm m$ passa da $-5\,{}^\circ\mathrm C$ a $35\,{}^\circ\mathrm C$, quindi $\Delta T=40\,\mathrm K$. Con $\alpha=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$ si ha
$$
\Delta L=(1{,}2\cdot10^{-5})\cdot12\cdot40\,\mathrm m=5{,}76\cdot10^{-3}\,\mathrm m.
$$
Lo spazio fra due rotaie consecutive deve quindi essere almeno di $5{,}76\,\mathrm{mm}$, perché le estremità non si tocchino durante il riscaldamento.
:::

:::osservazione
Una cavità in una lamina si dilata come se fosse fatta dello stesso materiale della lamina. Per un foro circolare di diametro $d_0=20{,}0\,\mathrm{mm}$ in una lamina di alluminio, con $\alpha=2{,}4\cdot10^{-5}\,\mathrm{K^{-1}}$, riscaldata di $100\,\mathrm K$, il diametro aumenta di
$$
\Delta d=(2{,}4\cdot10^{-5})\cdot20{,}0\cdot100\,\mathrm{mm}=0{,}048\,\mathrm{mm}.
$$
Ogni segmento tracciato sulla lamina, compreso il diametro del foro, varia nello stesso rapporto $\alpha\Delta T$, perciò il foro si ingrandisce insieme alla lamina.
:::

:::attenzione
La variazione relativa di volume è il triplo di quella di lunghezza. Con $\alpha\Delta T=4{,}8\cdot10^{-4}$ la lunghezza di una sbarra aumenta in proporzione di $4{,}8\cdot10^{-4}$, mentre un blocco dello stesso materiale di volume $1000\,\mathrm{cm^3}$ aumenta in proporzione di $3\cdot4{,}8\cdot10^{-4}=1{,}44\cdot10^{-3}$, cioè di $1{,}44\,\mathrm{cm^3}$. Se si usasse $\alpha$ al posto di $\beta=3\alpha$ si troverebbe $0{,}48\,\mathrm{cm^3}$, un terzo del valore corretto.
:::

## Calore e capacità termica

:::definizione{#calorimetria titolo="Calore specifico e capacità termica"}
Il **calore** è energia trasferita a causa di una differenza di temperatura e si misura in joule. Si attribuisce segno positivo al calore assorbito dal corpo e segno negativo al calore ceduto. L'energia interna, a differenza del calore, è una proprietà dello stato del corpo.

Per una sostanza di massa $m$ che rimane nella stessa fase, con calore specifico $c$ circa costante e nelle condizioni in cui quel valore di $c$ è applicabile, si scrive
$$
Q=mc(T_f-T_i),\qquad C=mc.
$$
Il **calore specifico** $c$ è l'energia necessaria per aumentare di un kelvin la temperatura di un chilogrammo di sostanza, nelle condizioni considerate. La **capacità termica** $C$ si riferisce all'intero corpo. Le unità corrispondenti sono $\mathrm{J/(kg\,K)}$ e $\mathrm{J/K}$. A parità di calore assorbito, dalla relazione $\Delta T=\dfrac QC$ segue che si scalda di più il corpo con capacità termica minore.
:::

:::esempio{titolo="Energia assorbita e tempo di riscaldamento"}
Si scaldano $0{,}50\,\mathrm{kg}$ di acqua di $10\,\mathrm K$, con $c=4180\,\mathrm{J/(kg\,K)}$. Occorrono $Q=0{,}50\cdot4180\cdot10\,\mathrm J=20\,900\,\mathrm J$. Se l'acqua riceve energia a un ritmo costante di $1000\,\mathrm{J/s}$, il tempo richiesto è
$$
\Delta t=\frac QP=\frac{20\,900}{1000}\,\mathrm s=20{,}9\,\mathrm s.
$$
Si utilizza la potenza trasferita all'acqua.
:::

:::teorema{#equilibrio-calorimetrico titolo="Bilancio calorimetrico"}
Siano $C_h$ e $C_c$ le capacità termiche dei due corpi e $t_h>t_c$ le loro temperature iniziali. Se l'insieme è isolato, gli scambi si limitano al calore e nessun corpo cambia fase, l'energia ceduta dal corpo caldo è assorbita dal corpo freddo. Alla temperatura finale comune $t_f$ si ha
$$
C_h(t_f-t_h)+C_c(t_f-t_c)=0.
$$
Raccogliendo $t_f$ si ottiene
$$
t_f=\frac{C_ht_h+C_ct_c}{C_h+C_c}.
$$
È una media pesata con pesi positivi, quindi $t_c<t_f<t_h$.

Se il recipiente ha una capacità termica apprezzabile $C_r$ ed è inizialmente a $t_r$, si aggiunge al bilancio $C_r(t_f-t_r)$. La temperatura finale si avvicina a $t_r$ rispetto al valore calcolato senza recipiente, perché nella media entra anche il peso $C_r$.
:::

:::esempio{titolo="Stessa energia, sostanze diverse"}
Si forniscono $10\,\mathrm{kJ}$ a $1{,}0\,\mathrm{kg}$ di acqua e a $1{,}0\,\mathrm{kg}$ di rame, con $c_{\mathrm{rame}}=385\,\mathrm{J/(kg\,K)}$. Da $\Delta T=\dfrac{Q}{mc}$ si ottiene
$$
\Delta T_{\mathrm{acqua}}=\frac{10\,000}{1{,}0\cdot4180}\,\mathrm K\simeq2{,}4\,\mathrm K,
\qquad
\Delta T_{\mathrm{rame}}=\frac{10\,000}{1{,}0\cdot385}\,\mathrm K\simeq26{,}0\,\mathrm K.
$$
A parità di massa e di energia assorbita, l'aumento di temperatura del rame è circa undici volte quello dell'acqua, perché il suo calore specifico è circa undici volte minore.
:::

:::attenzione
La temperatura finale di un mescolamento coincide con la media aritmetica delle temperature iniziali solo se le due capacità termiche sono uguali. Se si mescolano $0{,}20\,\mathrm{kg}$ di acqua a $60\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$, il calore specifico è lo stesso e si semplifica. Il bilancio dà $t_f=\dfrac{0{,}20\cdot60+0{,}30\cdot20}{0{,}20+0{,}30}\,{}^\circ\mathrm C=36\,{}^\circ\mathrm C$, mentre la media aritmetica darebbe $40\,{}^\circ\mathrm C$. La massa fredda è maggiore e pesa di più nella media.
:::

:::esempio{titolo="Temperatura finale al variare della massa fredda"}
Si versano $0{,}20\,\mathrm{kg}$ di acqua a $60\,{}^\circ\mathrm C$ in una massa $x$ di acqua a $20\,{}^\circ\mathrm C$, con $x$ espresso in kilogrammi. Il bilancio calorimetrico dà
$$
t_f(x)=\frac{0{,}20\cdot60+20\,x}{0{,}20+x}\,{}^\circ\mathrm C.
$$
Per $x=1{,}0$ si trova $\dfrac{32}{1{,}2}\,{}^\circ\mathrm C\simeq26{,}7\,{}^\circ\mathrm C$. Se $x$ cresce, la temperatura finale diminuisce e si avvicina a $20\,{}^\circ\mathrm C$ senza raggiungerlo, perché la massa fredda diventa molto maggiore di quella calda. Per $x$ che tende a zero tende a $60\,{}^\circ\mathrm C$.

::grafico{f="(12+20*x)/(0.2+x)" punti="0.3,36,pieno,36 °C" xmin=0 xmax=2 ymin=10 ymax=60 nomi="x,t" titolo="Temperatura finale $t_f$ in gradi Celsius in funzione della massa $x$ in kilogrammi di acqua a $20\,{}^\circ\mathrm C$"}
:::

## Cambiamenti di stato

:::definizione{#calore-latente titolo="Calore latente e curva di riscaldamento"}
Alla pressione di equilibrio una sostanza pura fonde a temperatura fissata. Finché coesistono solido e liquido, l'energia assorbita trasforma una parte del solido in liquido. Il **calore latente specifico di fusione** $\ell_f$ è l'energia per unità di massa trasformata, perciò $Q=m_{\mathrm{fusa}}\ell_f$. Per la solidificazione di quella stessa massa, il calore ceduto ha uguale modulo. La relazione si applica al tratto di cambiamento di stato. I tratti in cui una singola fase si riscalda si calcolano separatamente con $Q=mc\Delta T$.

Per portare $0{,}10\,\mathrm{kg}$ di ghiaccio a $0\,{}^\circ\mathrm C$ ad acqua a $20\,{}^\circ\mathrm C$ occorrono
$$
\begin{aligned}
Q_{\mathrm{fus}}&=0{,}10\cdot334\,000\,\mathrm J=33\,400\,\mathrm J,\\
Q_{\mathrm{liq}}&=0{,}10\cdot4180\cdot20\,\mathrm J=8360\,\mathrm J,\\
Q&=41\,760\,\mathrm J.
\end{aligned}
$$
Il calore latente interviene anche nell'ebollizione e nella condensazione. L'evaporazione dalla superficie, invece, può avvenire anche al di sotto della temperatura di ebollizione.
:::

:::esempio{titolo="Riscaldamento del ghiaccio, fusione e riscaldamento dell'acqua"}
Per $1\,\mathrm{kg}$ di ghiaccio inizialmente a $-20\,{}^\circ\mathrm C$, con $c_s=2100\,\mathrm{J/(kg\,K)}$, si raggiungono $0\,{}^\circ\mathrm C$ dopo aver fornito $42\,\mathrm{kJ}$. Per fondere tutto il ghiaccio occorrono altri $334\,\mathrm{kJ}$, quindi il tratto orizzontale termina quando il calore totale raggiunge $376\,\mathrm{kJ}$. Dopo la fusione la pendenza è $\dfrac{1}{mc}$, con $c=4180\,\mathrm{J/(kg\,K)}$. Per raggiungere $20\,{}^\circ\mathrm C$ occorrono altri $83{,}6\,\mathrm{kJ}$.

::grafico{linee="0,-20 42,0 376,0 459.6,20" punti="42,0,pieno,42 kJ;376,0,pieno,376 kJ" xmin=0 xmax=500 ymin=-25 ymax=25 nomi="Q,t (°C)" titolo="La fusione avviene tra 42 kJ e 376 kJ a 0 °C"}
:::

:::esempio{titolo="Fusione parziale in un recipiente isolato"}
Si mescolano $0{,}20\,\mathrm{kg}$ di ghiaccio a $0\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ di acqua a $40\,{}^\circ\mathrm C$. Il recipiente è isolato e la sua capacità termica è trascurabile. Prima di impostare il bilancio si confrontano il calore che l'acqua può cedere raffreddandosi fino a $0\,{}^\circ\mathrm C$ e quello necessario per fondere tutto il ghiaccio:
$$
Q_{\mathrm{disp}}=0{,}30\cdot4180\cdot40\,\mathrm J=50\,160\,\mathrm J,
\quad
Q_{\mathrm{fus}}=0{,}20\cdot334\,000\,\mathrm J=66\,800\,\mathrm J.
$$
Poiché $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, all'equilibrio restano entrambe le fasi a $0\,{}^\circ\mathrm C$. La massa di ghiaccio che fonde è $\dfrac{Q_{\mathrm{disp}}}{\ell_f}\simeq0{,}150\,\mathrm{kg}$, perciò rimangono circa $0{,}050\,\mathrm{kg}$ di ghiaccio.
:::

:::attenzione
Durante la fusione la temperatura resta costante, quindi la formula $Q=mc\Delta T$ con $\Delta T=0$ darebbe calore nullo. Il calore assorbito dal ghiaccio che fonde vale invece $m\ell_f$, per $0{,}10\,\mathrm{kg}$ sono $33\,400\,\mathrm J$, e serve a cambiare la fase della sostanza.
:::

:::esempio{titolo="Vaporizzazione dell'acqua"}
Il calore latente specifico di vaporizzazione dell'acqua alla pressione atmosferica normale è $\ell_v=2{,}26\cdot10^{6}\,\mathrm{J/kg}$. Per trasformare in vapore $0{,}10\,\mathrm{kg}$ di acqua già a $100\,{}^\circ\mathrm C$ occorrono
$$
Q_{\mathrm{vap}}=0{,}10\cdot2{,}26\cdot10^6\,\mathrm J=2{,}26\cdot10^5\,\mathrm J,
$$
mentre per scaldare la stessa massa da $0$ a $100\,{}^\circ\mathrm C$ occorrono $0{,}10\cdot4180\cdot100\,\mathrm J=4{,}18\cdot10^4\,\mathrm J$. La vaporizzazione richiede quindi circa $5{,}4$ volte l'energia del riscaldamento. Nella condensazione il vapore cede la stessa energia.
:::

:::richiamo{titolo="Calore latente di fusione e calore specifico"}
Una massa $m_{\mathrm{fusa}}$ di sostanza pura che fonde a temperatura costante assorbe il calore $Q=m_{\mathrm{fusa}}\ell_f$. Una massa $m$ che resta nella stessa fase e cambia temperatura di $\Delta T$ scambia il calore $Q=mc\Delta T$.
:::

::::teorema{#equilibrio-con-ghiaccio titolo="Equilibrio fra acqua e ghiaccio"}
In un recipiente isolato, di capacità termica trascurabile e a pressione atmosferica normale, si mescolano una massa $m_a$ di acqua a $t_a>0\,{}^\circ\mathrm C$ e una massa $m_g$ di ghiaccio a $0\,{}^\circ\mathrm C$. Siano $c$ il calore specifico dell'acqua, $Q_{\mathrm{disp}}=m_ac\,t_a$ il calore che l'acqua cede raffreddandosi fino a $0\,{}^\circ\mathrm C$ e $Q_{\mathrm{fus}}=m_g\ell_f$ il calore che occorre per fondere tutto il ghiaccio. Allora
$$
\begin{cases}
Q_{\mathrm{disp}}\le Q_{\mathrm{fus}}\ \Rightarrow\ t_f=0\,{}^\circ\mathrm C\ \text{e}\ m_{\mathrm{fusa}}=\dfrac{Q_{\mathrm{disp}}}{\ell_f},\\[10pt]
Q_{\mathrm{disp}}>Q_{\mathrm{fus}}\ \Rightarrow\ t_f=\dfrac{m_ac\,t_a-m_g\ell_f}{(m_a+m_g)\,c}.
\end{cases}
$$
Il confronto fra $Q_{\mathrm{disp}}$ e $Q_{\mathrm{fus}}$ stabilisce quale dei due casi si presenta prima di scrivere il bilancio.

:::dimostrazione
Se $Q_{\mathrm{disp}}\le Q_{\mathrm{fus}}$, l'acqua che si raffredda fino a $0\,{}^\circ\mathrm C$ non cede abbastanza energia per fondere tutto il ghiaccio. Acqua e ghiaccio possono coesistere in equilibrio solo a $0\,{}^\circ\mathrm C$, quindi $t_f=0\,{}^\circ\mathrm C$. Tutto il calore ceduto serve a fondere una parte del ghiaccio, perciò $m_{\mathrm{fusa}}\ell_f=Q_{\mathrm{disp}}$ e si ricava $m_{\mathrm{fusa}}$.

Se $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, il ghiaccio fonde per intero e l'energia che avanza riscalda l'acqua. A equilibrio raggiunto tutta l'acqua è liquida alla temperatura $t_f>0\,{}^\circ\mathrm C$. L'acqua iniziale cede $m_ac(t_a-t_f)$. Il ghiaccio assorbe $m_g\ell_f$ per fondere e poi $m_gc\,t_f$ per portare l'acqua ottenuta da $0\,{}^\circ\mathrm C$ a $t_f$. Poiché il recipiente è isolato, il calore ceduto è uguale a quello assorbito:
$$
\begin{aligned}
m_ac(t_a-t_f)&=m_g\ell_f+m_gc\,t_f\\[6pt]
m_ac\,t_a-m_g\ell_f&=(m_a+m_g)\,c\,t_f\\[6pt]
t_f&=\frac{m_ac\,t_a-m_g\ell_f}{(m_a+m_g)\,c}.
\end{aligned}
$$
Il numeratore è $Q_{\mathrm{disp}}-Q_{\mathrm{fus}}$ ed è positivo per ipotesi, quindi $t_f>0\,{}^\circ\mathrm C$ come richiesto.
:::
::::

:::esempio{titolo="Acqua calda su poco ghiaccio"}
Si versano $0{,}50\,\mathrm{kg}$ di acqua a $40\,{}^\circ\mathrm C$ su $0{,}10\,\mathrm{kg}$ di ghiaccio a $0\,{}^\circ\mathrm C$. I calori sono $Q_{\mathrm{disp}}=0{,}50\cdot4180\cdot40\,\mathrm J=83\,600\,\mathrm J$ e $Q_{\mathrm{fus}}=0{,}10\cdot334\,000\,\mathrm J=33\,400\,\mathrm J$. Poiché $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, il ghiaccio fonde del tutto e
$$
t_f=\frac{83\,600-33\,400}{(0{,}50+0{,}10)\cdot4180}\,{}^\circ\mathrm C=\frac{50\,200}{2508}\,{}^\circ\mathrm C\simeq20{,}0\,{}^\circ\mathrm C.
$$
Con $0{,}20\,\mathrm{kg}$ di ghiaccio la temperatura finale in funzione della massa $x$ di acqua a $40\,{}^\circ\mathrm C$ è nulla finché l'acqua non basta a fondere il ghiaccio, cioè per $x\le\dfrac{66\,800}{167\,200}\,\mathrm{kg}\simeq0{,}40\,\mathrm{kg}$. Per $x$ maggiore cresce secondo la seconda formula del teorema.

::grafico{f="max(0,(167200*x-66800)/(4180*(x+0.2)))" punti="0.4,0,pieno,soglia" xmin=0 xmax=2 ymin=-4 ymax=36 nomi="x,t" titolo="Temperatura finale $t_f$ in gradi Celsius, con $0{,}20\,\mathrm{kg}$ di ghiaccio e una massa $x$ di acqua a $40\,{}^\circ\mathrm C$"}
:::

## Trasferimento del calore

:::teorema{#trasmissione titolo="Conduzione, convezione e irraggiamento"}
Nella **conduzione** l'energia si trasferisce attraverso la materia senza trasporto macroscopico di materia. Sia $\kappa$ la conducibilità di una parete piana omogenea di area $A$ e spessore $d$. In regime stazionario, se le temperature delle due facce sono $T_h>T_c$, la potenza termica dal lato caldo al lato freddo è
$$
P=\kappa A\frac{T_h-T_c}{d}.
$$
Il regime stazionario implica che la parete non accumula energia. Se due strati sono a contatto perfetto e le perdite laterali sono trascurabili, la potenza che attraversa il primo è uguale alla potenza che attraversa il secondo. Per ciascuno vale $\Delta T_i=P\dfrac{d_i}{\kappa_i A}$. Sommando le cadute di temperatura si trova
$$
P=\frac{T_h-T_c}{\dfrac{d_1}{\kappa_1 A}+\dfrac{d_2}{\kappa_2 A}}.
$$
Il termine $\dfrac d{\kappa A}$ è la resistenza termica dello strato, espressa in $\mathrm{K/W}$. Due strati identici hanno resistenza complessiva doppia rispetto a uno solo, quindi a parità di temperature esterne trasferiscono metà della potenza.

Nella **convezione** il movimento di un fluido trasporta energia. Nell'**irraggiamento** l'energia si propaga come radiazione elettromagnetica, anche nel vuoto. Per una superficie grigia di area $A$ ed emissività $\varepsilon$, immersa in un grande ambiente isotermo a $T_a$, la potenza netta uscente è
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
\qquad
\sigma=5{,}67\cdot10^{-8}\,\mathrm{W/(m^2\,K^4)}.
$$
Le temperature sono assolute. Se la superficie è più fredda dell'ambiente, $P_{\mathrm{net}}<0$ e per irraggiamento entra più energia di quella che esce.
:::

:::esempio{titolo="Parete con strato isolante"}
Una parete di mattoni di area $10\,\mathrm{m^2}$, spessore $0{,}25\,\mathrm m$ e conducibilità $0{,}80\,\mathrm{W/(m\,K)}$ separa un ambiente a $20\,{}^\circ\mathrm C$ dall'esterno a $0\,{}^\circ\mathrm C$. La sua resistenza termica è $R_1=\dfrac{0{,}25}{0{,}80\cdot10}\,\mathrm{K/W}=0{,}03125\,\mathrm{K/W}$, quindi $P=\dfrac{20}{0{,}03125}\,\mathrm W=640\,\mathrm W$. Si aggiunge uno strato isolante di spessore $0{,}060\,\mathrm m$ e conducibilità $0{,}040\,\mathrm{W/(m\,K)}$, con $R_2=\dfrac{0{,}060}{0{,}040\cdot10}\,\mathrm{K/W}=0{,}15\,\mathrm{K/W}$. Ora
$$
P=\frac{20}{0{,}03125+0{,}15}\,\mathrm W\simeq110\,\mathrm W.
$$
La potenza si riduce a circa un sesto. La caduta di temperatura nei mattoni è $PR_1\simeq3{,}4\,\mathrm K$, perciò l'interfaccia è a circa $16{,}6\,{}^\circ\mathrm C$ e quasi tutta la differenza di temperatura si trova nello strato con la resistenza maggiore.

::grafico{linee="0,20 25,16.55 31,0" punti="25,16.55,pieno,interfaccia" xmin=-4 xmax=36 ymin=-3 ymax=27 nomi="x,t" titolo="Temperatura $t$ in gradi Celsius nella parete a due strati: mattoni da $0$ a $25\,\mathrm{cm}$, isolante da $25$ a $31\,\mathrm{cm}$"}
:::

:::richiamo{titolo="Conduzione in una parete piana"}
In regime stazionario, attraverso una parete piana omogenea di area $A$, spessore $d$ e conducibilità $\kappa$, con facce alle temperature $T_h>T_c$, la potenza termica è $P=\kappa A\dfrac{T_h-T_c}{d}=\dfrac{T_h-T_c}{R}$, con $R=\dfrac{d}{\kappa A}$.
:::

::::teorema{#resistenze-parallelo titolo="Pareti affiancate: potenze che si sommano"}
Una parete è formata da due parti affiancate, di resistenze termiche $R_1$ e $R_2$, che hanno le stesse temperature $T_h$ e $T_c$ sulle facce esterne. In regime stazionario e senza scambio di calore fra le due parti, la potenza totale è
$$
P=(T_h-T_c)\left(\frac{1}{R_1}+\frac{1}{R_2}\right),
$$
cioè la parete ha resistenza equivalente $R_{\mathrm{eq}}$ con $\dfrac{1}{R_{\mathrm{eq}}}=\dfrac{1}{R_1}+\dfrac{1}{R_2}$. La resistenza equivalente è minore della più piccola fra $R_1$ e $R_2$.

:::dimostrazione
Le due parti hanno le stesse temperature sulle facce esterne, quindi la stessa differenza $\Delta T=T_h-T_c$. Per la conduzione in ciascuna parte si ha $P_1=\dfrac{\Delta T}{R_1}$ e $P_2=\dfrac{\Delta T}{R_2}$. Poiché non c'è scambio laterale, la potenza totale è la somma delle due:
$$
P=P_1+P_2=\Delta T\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
Per una parete unica equivalente la stessa potenza vale $P=\dfrac{\Delta T}{R_{\mathrm{eq}}}$. Il confronto dei due risultati dà $\dfrac{1}{R_{\mathrm{eq}}}=\dfrac{1}{R_1}+\dfrac{1}{R_2}$. Poiché $\dfrac{1}{R_{\mathrm{eq}}}>\dfrac{1}{R_1}$ e $\dfrac{1}{R_{\mathrm{eq}}}>\dfrac{1}{R_2}$, risulta $R_{\mathrm{eq}}<R_1$ e $R_{\mathrm{eq}}<R_2$.
:::
::::

:::esempio{titolo="Parete con una porta"}
Una parete di area totale $10\,\mathrm{m^2}$ è formata da una parte in mattoni di area $8\,\mathrm{m^2}$, spessore $0{,}25\,\mathrm m$ e $\kappa=0{,}80\,\mathrm{W/(m\,K)}$ e da una porta di legno di area $2\,\mathrm{m^2}$, spessore $0{,}040\,\mathrm m$ e $\kappa=0{,}15\,\mathrm{W/(m\,K)}$. La differenza di temperatura fra le facce è $20\,\mathrm K$. Le resistenze sono $R_p=\dfrac{0{,}25}{0{,}80\cdot8}\,\mathrm{K/W}\simeq0{,}0391\,\mathrm{K/W}$ e $R_d=\dfrac{0{,}040}{0{,}15\cdot2}\,\mathrm{K/W}\simeq0{,}133\,\mathrm{K/W}$. Le potenze sono $P_p=\dfrac{20}{R_p}=512\,\mathrm W$ e $P_d=\dfrac{20}{R_d}=150\,\mathrm W$, quindi
$$
P=512\,\mathrm W+150\,\mathrm W=662\,\mathrm W.
$$
La porta occupa il $20\%$ dell'area e trasmette circa il $23\%$ della potenza totale.
:::

:::esempio{titolo="Potenza irraggiata dalla pelle"}
La superficie cutanea di una persona, di area $1{,}5\,\mathrm{m^2}$ e con $\varepsilon=0{,}95$, è a $34\,{}^\circ\mathrm C$, cioè $307{,}15\,\mathrm K$, in una stanza a $20\,{}^\circ\mathrm C$, cioè $293{,}15\,\mathrm K$. La potenza netta uscente è
$$
P_{\mathrm{net}}=0{,}95\cdot5{,}67\cdot10^{-8}\cdot1{,}5\cdot\left(307{,}15^4-293{,}15^4\right)\,\mathrm W\simeq122\,\mathrm W.
$$
Il segno positivo indica che la persona emette più energia di quella che assorbe dalle pareti.
:::

:::attenzione
Nella formula dell'irraggiamento le temperature sono assolute. Per $30\,{}^\circ\mathrm C$ e $10\,{}^\circ\mathrm C$ il termine $T^4-T_a^4$ vale $303{,}15^4-283{,}15^4\simeq2{,}0\cdot10^9\,\mathrm K^4$, mentre con i valori in gradi Celsius si troverebbe $30^4-10^4=8\cdot10^5\,\mathrm K^4$, circa $2500$ volte meno.
:::

## Stato di un gas ideale

:::teorema{#gas-ideale titolo="Equazione di stato dei gas ideali"}
Il **gas ideale** è un modello nel quale le particelle hanno volume trascurabile e, tra urti elastici, si muovono senza interagire. Il modello approssima molti gas diluiti e lontani dalla condensazione. In equilibrio,
$$
pV=nRT,
\qquad R=8{,}314\,\mathrm{J/(mol\,K)}.
$$
Qui $p$ è la pressione assoluta, $V$ il volume, $n$ la quantità di sostanza in moli e $T$ la temperatura assoluta. Se la massa è $m$ e la massa molare è $M$, si ha $n=\dfrac mM$, con unità di massa coerenti. Con $R$ espresso nelle unità indicate si usano pascal, metri cubi e kelvin.

Se la quantità di gas è la stessa in entrambi gli stati, $nR$ è costante e
$$
\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}.
$$
A temperatura costante $pV$ è costante, quindi dimezzare il volume raddoppia la pressione. A pressione costante $V$ è proporzionale a $T$. A volume costante $p$ è proporzionale a $T$. Queste proporzioni si riferiscono a una quantità fissa di gas. Se un recipiente viene aperto e cambia la quantità di sostanza, si applica $pV=nRT$ con il valore di $n$ di ciascuno stato.
:::

:::esempio{titolo="Da pressione manometrica a pressione assoluta"}
Un manometro indica $50\,\mathrm{kPa}$ in un recipiente posto dove la pressione atmosferica è $100\,\mathrm{kPa}$. Il valore indicato è $p_{\mathrm{man}}=p-p_{\mathrm{atm}}$, perciò nell'equazione di stato si usa $p=150\,\mathrm{kPa}$. Se a temperatura costante il volume del gas chiuso raddoppia, la pressione assoluta scende a $75\,\mathrm{kPa}$. Nello stesso ambiente la nuova pressione manometrica è quindi $-25\,\mathrm{kPa}$. Il segno negativo indica che la pressione interna è inferiore a quella atmosferica.
:::

:::esempio{titolo="Confronto di stati lungo un'isoterma"}
A temperatura e quantità di sostanza costanti, si consideri uno stato con $p=200\,\mathrm{kPa}$ e $V=6\,\mathrm L$. Si ha $pV=1200\,\mathrm{kPa\,L}=1200\,\mathrm J$. A $12\,\mathrm L$ la pressione è $100\,\mathrm{kPa}$. Nel grafico i due punti appartengono allo stesso ramo di iperbole. La pendenza si riduce in valore assoluto al crescere di $V$, quindi uguali incrementi di volume causano diminuzioni di pressione sempre più piccole.

::grafico{f="1200/x" punti="6,200,pieno,A;12,100,pieno,B" xmin=4 xmax=16 ymin=0 ymax=320 nomi="V,p (kPa)" titolo="Lungo l'isoterma il prodotto pV vale 1200 kPa L"}
:::

:::esempio{titolo="Moli e massa di ossigeno"}
Una massa $8{,}0\,\mathrm g$ di ossigeno molecolare $\mathrm O_2$, con massa molare $M=32\,\mathrm{g/mol}$, contiene $n=\dfrac mM=\dfrac{8{,}0}{32}\,\mathrm{mol}=0{,}25\,\mathrm{mol}$. In un volume di $10\,\mathrm L=0{,}010\,\mathrm{m^3}$ a $300\,\mathrm K$ la pressione assoluta è
$$
p=\frac{nRT}{V}=\frac{0{,}25\cdot8{,}314\cdot300}{0{,}010}\,\mathrm{Pa}\simeq6{,}24\cdot10^4\,\mathrm{Pa}.
$$
:::

::::teorema{#leggi-dei-gas titolo="Isoterme, isobare e isocore del gas ideale"}
Per una quantità fissa $n$ di gas ideale in equilibrio, con $T$ in kelvin:
- se $T$ è costante, $pV$ è costante (isoterma);
- se $p$ è costante, $\dfrac VT$ è costante (isobara);
- se $V$ è costante, $\dfrac pT$ è costante (isocora).

Nel piano $p$-$V$ l'isoterma è il ramo di iperbole $p=\dfrac{nRT}{V}$ e la tangente in un suo punto ha coefficiente angolare $-\dfrac pV$.

:::dimostrazione
Vale l'equazione di stato $pV=nRT$ con $n$ fisso, quindi il prodotto $nR$ è costante in tutte le trasformazioni considerate. A $T$ costante il secondo membro $nRT$ è costante, quindi lo è $pV$. A $p$ costante si divide per $pT$ e si ottiene $\dfrac VT=\dfrac{nR}{p}$, costante. A $V$ costante si divide per $VT$ e si ottiene $\dfrac pT=\dfrac{nR}{V}$, costante.

Sull'isoterma $p(V)=\dfrac{C}{V}$, con $C=nRT$ costante. La derivata è
$$
\frac{dp}{dV}=-\frac{C}{V^2}=-\frac{1}{V}\cdot\frac{C}{V}=-\frac{p}{V},
$$
che è il coefficiente angolare della tangente.
:::
::::

:::esempio{titolo="Pressione a volume costante e zero assoluto"}
Un gas ideale in un recipiente rigido ha pressione $100\,\mathrm{kPa}$ a $0\,{}^\circ\mathrm C$, cioè $273{,}15\,\mathrm K$. Poiché $\dfrac pT$ è costante, a $t$ gradi Celsius la pressione è
$$
p(t)=100\cdot\frac{t+273{,}15}{273{,}15}\,\mathrm{kPa}.
$$
A $20\,{}^\circ\mathrm C$ vale $107{,}3\,\mathrm{kPa}$ e a $40\,{}^\circ\mathrm C$ vale $114{,}6\,\mathrm{kPa}$. La retta si annulla a $t=-273{,}15\,{}^\circ\mathrm C$, cioè a $T=0\,\mathrm K$. Questa è un'estrapolazione del modello: i gas reali condensano prima di raggiungere quella temperatura.

::grafico{f="100*(1+x/273.15)" punti="-273.15,0,pieno,zero assoluto;20,107.3,pieno;40,114.6,pieno" xmin=-320 xmax=80 ymin=-15 ymax=135 nomi="t,p" titolo="Pressione di un gas ideale a volume costante in funzione della temperatura in gradi Celsius"}
:::

:::attenzione
Con $R=8{,}314\,\mathrm{J/(mol\,K)}$ il volume va espresso in metri cubi. Per $1\,\mathrm{mol}$ a $300\,\mathrm K$ in $25\,\mathrm L$ il valore corretto è $V=0{,}025\,\mathrm{m^3}$ e dà $p\simeq9{,}98\cdot10^4\,\mathrm{Pa}$. Scrivendo $V=25$ si troverebbe $p\simeq99{,}8\,\mathrm{Pa}$, mille volte meno.
:::

## Modello microscopico

:::definizione{#modello-cinetico titolo="Agitazione termica ed energia interna"}
Le particelle del gas urtano le pareti e cambiano la loro quantità di moto. Gli impulsi ripetuti producono una forza media sulla parete, dalla quale deriva la pressione. Nel modello classico, all'equilibrio la temperatura determina l'energia cinetica traslazionale media per particella:
$$
\langle K_{\mathrm{trasl}}\rangle=\frac32 k_BT,
\qquad k_B=1{,}381\cdot10^{-23}\,\mathrm{J/K}.
$$
Particelle a velocità diverse contribuiscono alla stessa media. Per una particella di massa $m_0$, $\langle K_{\mathrm{trasl}}\rangle=\frac12 m_0\langle v^2\rangle$. Due gas alla stessa temperatura hanno quindi la stessa energia traslazionale media per particella. Le particelle più leggere hanno velocità quadratica media maggiore secondo $v_{\mathrm{rms}}=\sqrt{\dfrac{3k_BT}{m_0}}$.

Per un gas ideale monoatomico l'energia interna è la somma delle energie traslazionali. Poiché il numero di particelle è $N=nN_A$ e $N_Ak_B=R$, si ottiene
$$
U=N\langle K_{\mathrm{trasl}}\rangle=\frac32nRT,
\qquad
\Delta U=\frac32nR(T_f-T_i).
$$
A $300\,\mathrm K$ una mole ha $U\simeq3741\,\mathrm J$ nel riferimento del modello. Se il gas ideale monoatomico cambia volume ma torna alla stessa temperatura e conserva il numero di moli, la variazione di energia interna è nulla. Nelle molecole composte anche rotazioni e vibrazioni possono contribuire all'energia interna, perciò il valore $\dfrac32 R$ della capacità termica molare a volume costante riguarda il modello monoatomico classico.
:::

:::richiamo{titolo="Teorema dell'impulso"}
Se su un punto materiale agisce una forza media $F$ lungo una direzione per un intervallo di tempo $\Delta t$, la variazione della componente della quantità di moto lungo quella direzione è $\Delta p=F\Delta t$. Questa relazione si applica anche alla forza media esercitata da un insieme di particelle su una parete, con il segno opposto.
:::

::::teorema{#pressione-cinetica titolo="Pressione ed energia cinetica traslazionale"}
In un recipiente di volume $V$ sono contenute $N$ particelle identiche di massa $m_0$ che urtano elasticamente le pareti e non interagiscono fra loro. Nessuna direzione è privilegiata, cioè $\langle v_x^2\rangle=\langle v_y^2\rangle=\langle v_z^2\rangle$. Allora
$$
p=\frac13\,\frac NV\,m_0\langle v^2\rangle,
\qquad
pV=\frac23\,N\langle K_{\mathrm{trasl}}\rangle.
$$
Confrontando con $pV=nRT=Nk_BT$ si ottiene $\langle K_{\mathrm{trasl}}\rangle=\dfrac32k_BT$, cioè la relazione fra temperatura ed energia cinetica media usata nella definizione di agitazione termica.

:::dimostrazione
Si considera un recipiente cubico di spigolo $L$ e volume $V=L^3$. Una particella con componente di velocità $v_x$ colpisce la parete perpendicolare all'asse $x$. L'urto è elastico, quindi $v_x$ cambia segno e la variazione di quantità di moto della particella ha modulo $2m_0|v_x|$. La parete riceve un impulso uguale e opposto.

Fra due urti successivi con la stessa parete la particella percorre $2L$ lungo $x$, in un tempo $\dfrac{2L}{|v_x|}$. Il numero di urti per unità di tempo è quindi $\dfrac{|v_x|}{2L}$. Per il teorema dell'impulso la forza media di una particella sulla parete è
$$
F_1=2m_0|v_x|\cdot\frac{|v_x|}{2L}=\frac{m_0v_x^2}{L}.
$$
Sommando su $N$ particelle, la forza totale è $F=\dfrac{m_0}{L}\,N\langle v_x^2\rangle$. La parete ha area $L^2$, perciò
$$
p=\frac{F}{L^2}=\frac{N m_0\langle v_x^2\rangle}{L^3}=\frac NV\,m_0\langle v_x^2\rangle.
$$
Poiché $v^2=v_x^2+v_y^2+v_z^2$ e nessuna direzione è privilegiata, $\langle v_x^2\rangle=\dfrac{\langle v^2\rangle}{3}$. Si ottiene $p=\dfrac13\dfrac NVm_0\langle v^2\rangle$. Moltiplicando per $V$ e usando $\langle K_{\mathrm{trasl}}\rangle=\dfrac12m_0\langle v^2\rangle$ si trova
$$
pV=\frac13\,N m_0\langle v^2\rangle=\frac23\,N\,\frac12m_0\langle v^2\rangle=\frac23\,N\langle K_{\mathrm{trasl}}\rangle.
$$
Uguagliando a $Nk_BT$ si ricava $\langle K_{\mathrm{trasl}}\rangle=\dfrac32k_BT$.
:::
::::

:::esempio{titolo="Velocità quadratica media di azoto ed elio"}
A $300\,\mathrm K$ ogni particella ha energia traslazionale media $\dfrac32\cdot1{,}381\cdot10^{-23}\cdot300\,\mathrm J\simeq6{,}21\cdot10^{-21}\,\mathrm J$, qualunque sia il gas. La massa di una molecola di azoto è $m_0=\dfrac{28\cdot10^{-3}\,\mathrm{kg/mol}}{6{,}022\cdot10^{23}\,\mathrm{mol^{-1}}}\simeq4{,}65\cdot10^{-26}\,\mathrm{kg}$, quindi
$$
v_{\mathrm{rms}}=\sqrt{\frac{3k_BT}{m_0}}\simeq517\,\mathrm{m/s}.
$$
Per l'elio, con massa molare $4\cdot10^{-3}\,\mathrm{kg/mol}$, si trova $v_{\mathrm{rms}}\simeq1370\,\mathrm{m/s}$. Il rapporto fra le due velocità è $\sqrt{7}$, uguale alla radice del rapporto fra le masse. A parità di gas la velocità cresce come $\sqrt T$.

::grafico{f="517*sqrt(x/300);1368*sqrt(x/300)" legenda="Azoto;Elio" punti="300,517,pieno;300,1368,pieno" xmin=0 xmax=400 ymin=0 ymax=1600 nomi="T,v" titolo="Velocità quadratica media $v$ in $\mathrm{m/s}$ in funzione della temperatura assoluta $T$ in kelvin"}
:::

:::esempio{titolo="Variazione di energia interna"}
Un gas ideale monoatomico di $2{,}0\,\mathrm{mol}$ viene riscaldato di $50\,\mathrm K$. Nel modello classico
$$
\Delta U=\frac32\,nR\,\Delta T=\frac32\cdot2{,}0\cdot8{,}314\cdot50\,\mathrm J\simeq1{,}25\cdot10^3\,\mathrm J.
$$
Il valore dipende solo dalla temperatura iniziale e da quella finale. Se il riscaldamento avviene a volume costante, a pressione costante o in un altro modo, la variazione di energia interna è la stessa.
:::

## Lettura degli stati e delle trasformazioni

:::osservazione{#lettura-grafici titolo="Stati e trasformazioni nel piano pressione-volume"}
Un punto del diagramma $p$-$V$ rappresenta uno stato di equilibrio. Una linea rappresenta una successione di stati quando il processo è abbastanza lento da poter attribuire al gas una pressione e una temperatura uniformi. Un tratto orizzontale è un'isobara. Un tratto verticale è un'isocora. Un'isoterma del gas ideale è un ramo di iperbole.

Fra due stati con $p_1V_1=p_2V_2$ e lo stesso numero di moli, l'equazione di stato dà $T_1=T_2$.

L'equazione di stato permette di confrontare gli estremi. Per calcolare il lavoro e il calore scambiati occorre specificare come si passa da un estremo all'altro. Nel capitolo sul primo principio si usa questa distinzione per collegare il bilancio energetico ai diversi tratti di un diagramma.
:::

:::esempio{titolo="Un percorso A-B-C e l'isoterma di confronto"}
Si considerano gli stati $A(6\,\mathrm L,\,100\,\mathrm{kPa})$, $B(6\,\mathrm L,\,200\,\mathrm{kPa})$ e $C(3\,\mathrm L,\,200\,\mathrm{kPa})$, collegati da una isocora $AB$ e da una isobara $BC$. I prodotti $pV$ valgono $600\,\mathrm J$ in $A$, $1200\,\mathrm J$ in $B$ e $600\,\mathrm J$ in $C$. A numero di moli fisso la temperatura è proporzionale a $pV$, perciò $T_B=2T_A$ e $T_C=T_A$. Gli stati $A$ e $C$ stanno sulla stessa isoterma, $p=\dfrac{600}{V}$, ma il gas passa per una temperatura doppia nello stato intermedio $B$.

::grafico{f="600/x" vettori="6,100,6,200;6,200,3,200" punti="6,100,pieno,A;6,200,pieno,B;3,200,pieno,C" xmin=2 xmax=10 ymin=0 ymax=250 nomi="V,p" titolo="Volume in litri e pressione in kilopascal. Il percorso $A\to B\to C$ e l'isoterma $pV=600\,\mathrm J$ per $A$ e $C$"}
:::

:::attenzione
Due stati con la stessa pressione non hanno la stessa temperatura. Gli stati $A(6\,\mathrm L,\,100\,\mathrm{kPa})$ e $D(12\,\mathrm L,\,100\,\mathrm{kPa})$ hanno pressione uguale, ma $pV$ vale $600\,\mathrm J$ in $A$ e $1200\,\mathrm J$ in $D$. Per lo stesso numero di moli ne segue $T_D=2T_A$.
:::
