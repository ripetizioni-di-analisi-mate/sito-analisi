---
titolo: Secondo principio, macchine termiche ed entropia
sommario: Verso dei processi spontanei, rendimento, ciclo di Carnot, frigoriferi e calcolo dell'entropia nei processi reversibili e irreversibili.
---

## Trasformazioni reversibili e irreversibili

:::definizione{#reversibilita titolo="Reversibilità"}
Una trasformazione è **reversibile** se può essere invertita ripristinando sia il sistema sia l'ambiente senza altri cambiamenti. È un modello limite che richiede assenza di attrito e di altre dissipazioni, insieme a differenze infinitesime delle grandezze che producono lo scambio. Uno scambio termico reversibile avviene con una differenza di temperatura infinitesima.

Una trasformazione molto lenta è quasi statica, cioè attraversa stati prossimi all'equilibrio. La lentezza da sola non elimina l'attrito. Una compressione lenta con un pistone che sfrega è quindi irreversibile. Sono irreversibili anche il passaggio spontaneo di calore tra corpi a temperature diverse, il mescolamento e l'espansione libera nel vuoto.

Il primo principio stabilisce il bilancio dell'energia. Uno scambio di $100\,\mathrm J$ dal corpo freddo a quello caldo rispetterebbe quel bilancio, ma non avviene spontaneamente come unico risultato. Il secondo principio distingue il verso possibile di questi processi.
:::

## Due enunciati del secondo principio

:::teorema{#secondo-principio titolo="Enunciati di Clausius e Kelvin-Planck"}
Secondo l'enunciato di **Clausius**, è impossibile un processo il cui unico risultato sia trasferire calore da un corpo più freddo a uno più caldo. Un frigorifero effettua quel trasferimento perché riceve anche lavoro dall'esterno.

Secondo l'enunciato di **Kelvin-Planck**, è impossibile una macchina ciclica il cui unico risultato sia assorbire calore da una sola sorgente e trasformarlo interamente in lavoro. Una macchina termica ciclica deve cedere una parte dell'energia assorbita, oppure produrre altri cambiamenti nell'ambiente.

La parola *ciclica* riguarda il ritorno del sistema allo stato iniziale. In una singola espansione isoterma reversibile un gas ideale può assorbire calore e convertirlo interamente in lavoro. Alla fine occupa però un volume diverso; per chiudere il ciclo occorrono altre trasformazioni. I due enunciati esprimono lo stesso limite fisico e sono compatibili con la conservazione dell'energia.
:::

## Macchine termiche e rendimento

:::definizione{#rendimento titolo="Bilancio di una macchina termica"}
Una macchina termica ciclica assorbe dalla sorgente calda una quantità di calore $Q_h>0$, cede alla sorgente fredda una quantità $Q_c>0$ e compie un lavoro netto $W$. In questa notazione $Q_c$ è il *modulo* del calore ceduto, quindi
$$
W=Q_h-Q_c,\qquad
\eta=\frac{W}{Q_h}=1-\frac{Q_c}{Q_h}.
$$
Il **rendimento** $\eta$ è un numero senza unità. Una macchina che assorbe $2000\,\mathrm J$ e cede $1400\,\mathrm J$ produce $600\,\mathrm J$ e ha $\eta=0{,}30=30\%$. Se compie cinque cicli al secondo, la potenza meccanica media vale $3000\,\mathrm W$.

Il calore netto del ciclo è $Q_h-Q_c$ e coincide con il lavoro. Il calore assorbito $Q_h$ compare invece al denominatore del rendimento, perché rappresenta l'energia ricevuta dalla sorgente calda. Usare il calore netto al denominatore darebbe sempre uno e non misurerebbe l'efficienza della macchina.
:::

::grafico{assi=0 uguale=1 linee="-2,2 2,2 2,3 -2,3 -2,2;-1,-0.5 1,-0.5 1,0.5 -1,0.5 -1,-0.5;-2,-3 2,-3 2,-2 -2,-2 -2,-3" vettori="0,1.9,0,0.6,Qh;0,-0.6,0,-1.9,Qc;1.1,0,3,0,W" etichette="-0.9,2.5,calda;-0.8,-2.5,fredda" xmin=-3 xmax=4 ymin=-4 ymax=4 titolo="Bilancio di una macchina termica: il lavoro e il calore ceduto provengono dall'energia assorbita dalla sorgente calda"}

## Ciclo e teorema di Carnot

:::teorema{#carnot titolo="Rendimento massimo fra due sorgenti"}
Il ciclo di **Carnot** comprende due isoterme reversibili e due adiabatiche reversibili. La macchina assorbe calore all'isoterma calda e lo cede a quella fredda; nelle adiabatiche non scambia calore. Fra due sorgenti alle temperature assolute $T_h>T_c$, il suo rendimento è
$$
\eta_C=1-\frac{T_c}{T_h}.
$$
Nessuna macchina che operi esclusivamente fra quelle due sorgenti può avere rendimento maggiore. Le macchine reversibili fra le stesse sorgenti hanno lo stesso rendimento; quelle irreversibili hanno rendimento minore. Con $T_h=600\,\mathrm K$ e $T_c=300\,\mathrm K$, il limite è $50\%$. Se una macchina reale dichiara $60\%$ nelle stesse condizioni, i dati sono incompatibili con il secondo principio.

La relazione implica $\dfrac{Q_c}{Q_h}=\dfrac{T_c}{T_h}$ per il ciclo reversibile. Con $Q_h=1000\,\mathrm J$ nell'esempio si hanno $Q_c=500\,\mathrm J$ e $W=500\,\mathrm J$. Aumentare la temperatura calda o diminuire quella fredda aumenta il limite teorico. Le temperature Celsius non si possono inserire nel rapporto.
:::

::grafico{f="1-300/x" xmin=300 xmax=900 ymin=0 ymax=1 nomi="Th,η" titolo="Limite di Carnot con sorgente fredda a $300\,\mathrm K$: a $600\,\mathrm K$ il rendimento massimo vale $0{,}50$"}

## Frigoriferi e pompe di calore

:::definizione{#frigorifero titolo="Coefficienti di prestazione"}
Un frigorifero assorbe $Q_c>0$ dall'ambiente freddo e riceve lavoro $W>0$. Cede all'ambiente caldo
$$
Q_h=Q_c+W.
$$
Il coefficiente di prestazione frigorifero è $\mathrm{COP}_f=\dfrac{Q_c}{W}$. Se $Q_c=600\,\mathrm J$ e $W=200\,\mathrm J$, il coefficiente vale $3$ e il calore ceduto vale $800\,\mathrm J$. Un coefficiente maggiore di uno è possibile perché il lavoro serve a trasferire calore già presente nell'ambiente freddo.

Una pompa di calore usa lo stesso principio per riscaldare l'ambiente caldo; il suo coefficiente è $\mathrm{COP}_p=\dfrac{Q_h}{W}=\mathrm{COP}_f+1$. Nel limite reversibile fra due temperature costanti,
$$
\mathrm{COP}_{f,C}=\frac{T_c}{T_h-T_c},\qquad
\mathrm{COP}_{p,C}=\frac{T_h}{T_h-T_c}.
$$
Fra $270$ e $300\,\mathrm K$ i valori massimi sono rispettivamente $9$ e $10$. Le macchine reali hanno prestazioni inferiori nelle medesime condizioni di scambio.
:::

## Definizione di entropia

:::definizione{#entropia titolo="Variazione di entropia"}
L'**entropia** $S$ è una funzione di stato che permette di esprimere quantitativamente il secondo principio. Per uno scambio reversibile di calore a temperatura costante,
$$
\Delta S=\frac{Q_{\mathrm{rev}}}{T}.
$$
Si misura in $\mathrm{J/K}$. Il segno del calore è riferito al sistema considerato. Una sorgente a $400\,\mathrm K$ che cede $800\,\mathrm J$ varia la propria entropia di $-2{,}0\,\mathrm{J/K}$. Un sistema che assorbe reversibilmente la stessa energia alla stessa temperatura varia di $+2{,}0\,\mathrm{J/K}$.

Quando la temperatura varia, si può immaginare di dividere un cammino reversibile in piccoli scambi e sommare i rapporti fra calore e temperatura. La variazione totale dipende soltanto dagli stati estremi. Perciò si può usare un cammino reversibile immaginato anche quando il processo reale è irreversibile. Il rapporto $\dfrac{Q}{T}$ con una temperatura arbitraria non è una formula generale per i processi irreversibili.
:::

:::teorema{#formule-entropia titolo="Entropia nei casi di calcolo"}
Per un corpo con capacità termica $C$ costante che passa da $T_i$ a $T_f$ senza cambiamenti di stato,
$$
\Delta S=C\ln\frac{T_f}{T_i}.
$$
Con $C=100\,\mathrm{J/K}$, da $300$ a $600\,\mathrm K$, si ottiene circa $69{,}3\,\mathrm{J/K}$. Il logaritmo confronta temperature assolute. Per una fusione reversibile alla temperatura $T_f$ di equilibrio si ha $\Delta S=\dfrac{m\ell_f}{T_f}$, perché il calore è $m\ell_f$ e la temperatura resta costante.

Per un gas ideale con $C_V$ costante,
$$
\Delta S=nC_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}.
$$
In un'isoterma il primo termine è nullo. Una mole che raddoppia il volume ha quindi $\Delta S=R\ln2\simeq5{,}76\,\mathrm{J/K}$, sia che il passaggio avvenga reversibilmente sia che gli stessi stati siano raggiunti con un'espansione libera.
:::

## Entropia totale e processi spontanei

:::teorema{#entropia-totale titolo="Secondo principio in forma entropica"}
Per un insieme isolato formato dal sistema e da tutti gli ambienti che interagiscono con esso,
$$
\Delta S_{\mathrm{tot}}\geq0.
$$
L'uguaglianza vale per il processo reversibile; una trasformazione irreversibile produce entropia. L'entropia di una singola parte può diminuire quando la variazione delle altre parti compensa tale diminuzione.

Se $Q=600\,\mathrm J$ passa da una sorgente a $600\,\mathrm K$ a una a $300\,\mathrm K$, le variazioni sono $-1{,}0$ e $+2{,}0\,\mathrm{J/K}$. La somma è $+1{,}0\,\mathrm{J/K}$ e il trasferimento è compatibile con il secondo principio. Il trasferimento opposto, senza altri cambiamenti, darebbe una somma negativa. Nel ciclo di una macchina il fluido torna allo stato iniziale, quindi la sua variazione totale di entropia è zero; resta da considerare quella delle sorgenti.
:::

## Lettura microscopica e limiti delle formule

:::osservazione{#interpretazione titolo="Macrostati e microstati"}
Un macrostato descrive il sistema mediante poche grandezze, come pressione e temperatura. Un microstato specifica una configurazione microscopica compatibile con quei valori. La relazione di Boltzmann $S=k_B\ln\Omega$ collega l'entropia al numero $\Omega$ dei microstati accessibili, nell'impostazione statistica del modello.

Quando un gas si espande in un volume inizialmente vuoto, le particelle possono occupare molte più configurazioni. Questo spiega perché il ritorno spontaneo di tutte le particelle nella metà iniziale è estremamente improbabile per un campione macroscopico. La descrizione quantitativa usa però le variabili fisiche e i cammini reversibili, senza identificare genericamente l'entropia con una sensazione di disordine.

Nei problemi sulle macchine si verifica prima il bilancio energetico e poi il limite di Carnot. Nei problemi sugli scambi si sommano le variazioni di tutti i corpi coinvolti. Il controllo $\Delta S_{\mathrm{tot}}\geq0$ stabilisce la compatibilità del processo e affianca il bilancio del primo principio.
:::
