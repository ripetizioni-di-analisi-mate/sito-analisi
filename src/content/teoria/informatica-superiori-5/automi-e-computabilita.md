---
titolo: Automi, linguaggi e limiti della computazione
sommario: Automi finiti per riconoscere sequenze, macchine di Turing e differenza fra decidibilità e costo.
---

## Descrivere le stringhe

:::definizione{#alfabeto titolo="Alfabeto e linguaggio"}
Un **alfabeto** è un insieme finito di simboli, indicato con $\Sigma$. Con $\Sigma=\{0,1\}$ si descrivono sequenze binarie. Una **parola** è una sequenza finita di simboli dell’alfabeto. La lunghezza $|w|$ di una parola $w$ è il numero di simboli che contiene. La parola vuota si indica con $\varepsilon$ e ha lunghezza zero.

L’insieme $\Sigma^*$ contiene tutte le parole finite su $\Sigma$, compresa $\varepsilon$. Un **linguaggio** $L$ è un sottoinsieme di $\Sigma^*$. Un problema di riconoscimento chiede se la parola ricevuta appartiene a $L$. Per esempio, nel linguaggio delle parole binarie che terminano con `01`, la parola `1101` appartiene a $L$ perché gli ultimi due simboli sono `01`.
:::

:::esempio{titolo="Ordine e lunghezza delle parole"}
Concatenare $u$ e $v$ significa scrivere $v$ dopo $u$. Se $u$ è `10` e $v$ è `01`, la concatenazione $uv$ è `1001`, mentre $vu$ è `0110`. Entrambe le parole hanno lunghezza $|u|+|v|=4$. La posizione dei simboli conta perché il riconoscitore legge in quell’ordine. Concatenare $\varepsilon$ lascia invariata qualsiasi parola.

Un *prefisso* comprende i primi simboli di una parola e un *suffisso* gli ultimi. In `10110`, `101` è un prefisso, `110` è un suffisso e `011` è un blocco contiguo interno. La proprietà «contiene `011`» resta vera se si aggiungono altri simboli. La proprietà «termina con `110`» può cambiare già al simbolo successivo.
:::

:::attenzione
Il linguaggio vuoto $\varnothing$ contiene zero parole. Il linguaggio $\{\varepsilon\}$ contiene esattamente una parola, lunga zero. Nel primo caso si rifiuta anche $\varepsilon$. Nel secondo caso si accetta $\varepsilon$ e si rifiuta ogni parola con almeno un simbolo.
:::

## Componenti di un automa finito

:::definizione{#automa titolo="Automa finito deterministico"}
Un **automa finito deterministico** comprende un insieme finito $Q$ di stati, un alfabeto $\Sigma$, uno stato iniziale $q_0$ in $Q$, un insieme $F$ di stati finali e una funzione di transizione $\delta$. Quando lo stato corrente è $q$ e il simbolo letto è $a$, il nuovo stato è $\delta(q,a)$.

Nel modello completo, la tabella contiene esattamente una destinazione per ogni coppia stato-simbolo. Se $Q$ ha quattro stati e $\Sigma$ ha due simboli, la tabella ha $4\cdot 2=8$ celle. Due celle possono avere la stessa destinazione, per esempio quando `0` e `1` lasciano l’automa nello stesso stato. Il **determinismo** richiede che la destinazione sia unica per una data coppia, perciò una parola genera un solo percorso di lettura.
:::

:::esempio{titolo="Tabella e grafo delle transizioni"}
Gli stati `N` e `Z` registrano se nella parte già letta è comparso almeno uno zero. Si parte da `N`. Lo stato `Z` è finale.

| Stato | Legge `0` | Legge `1` |
| --- | --- | --- |
| `N` | `Z` | `N` |
| `Z` | `Z` | `Z` |

Nel grafo delle transizioni, ogni stato è un nodo e ciascuna cella si rappresenta con una freccia etichettata dal simbolo letto. La freccia in ingresso priva di un nodo di partenza indica lo stato iniziale. Il doppio cerchio identifica uno stato finale. Le due transizioni da `Z` possono essere disegnate con un solo anello etichettato `0, 1`, perché hanno la stessa partenza e la stessa destinazione.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=5.1 ymin=-0.85 ymax=1.85 legenda=0 curve="1+0.44*cos(t),0.44*sin(t),0,6.2832;4+0.44*cos(t),0.44*sin(t),0,6.2832;4+0.35*cos(t),0.35*sin(t),0,6.2832;1+0.48*cos(t),0.77+0.48*sin(t),-0.82,3.96;4+0.48*cos(t),0.77+0.48*sin(t),-0.82,3.96" vettori="-0.44,0,0.53,0;1.47,0,3.53,0;0.53,0.61,0.67,0.42;3.53,0.61,3.67,0.42" etichette="1,0,N;4,0,Z;2.47,0.28,0;1,1.48,1;4,1.48,0 e 1" titolo="Automa che riconosce la presenza di almeno uno zero. N è iniziale. Il doppio cerchio indica Z, l’unico finale."}
:::

:::osservazione{#stato-pozzo titolo="Completamento con uno stato pozzo"}
Una tabella abbreviata può lasciare sottintese le transizioni che portano a un rifiuto definitivo. Per rendere completo il modello, si introduce uno **stato pozzo** di rifiuto, si indirizzano verso di esso le transizioni sottintese e si definisce una transizione da tale stato a se stesso per ogni simbolo.

Per esempio, per accettare la sola parola `01`, dallo stato iniziale si passa allo stato intermedio leggendo `0`. Da quello intermedio si passa al finale leggendo `1`. La lettura di `1` nello stato iniziale oppure di `0` nello stato intermedio conduce al pozzo. Anche una lettura dopo lo stato finale conduce al pozzo, perché la parola risulta più lunga di `01`.
:::

## Riconoscere una stringa

:::definizione{#esecuzione titolo="Stato raggiunto dopo un prefisso"}
All’inizio lo stato è $q_0$. Dopo ogni simbolo si applica una transizione e si procede al simbolo successivo. Finita la lettura, l’automa **accetta** se lo stato raggiunto appartiene a $F$. Per la parola vuota lo stato raggiunto coincide con $q_0$, quindi $\varepsilon$ è accettata esattamente quando $q_0\in F$.

Si scrive $\delta^*(q,w)$ per indicare lo stato raggiunto partendo da $q$ dopo l’intera parola $w$. In particolare, $\delta^*(q,\varepsilon)=q$. Se si conosce lo stato dopo $u$, allora per continuare con $v$ si applica la lettura di $v$ da quello stato. Per questo $\delta^*(q,uv)=\delta^*(\delta^*(q,u),v)$.
:::

:::esempio{titolo="La parità durante la lettura"}
In un automa che conta la parità degli uni, `P` indica un conteggio pari e `D` uno dispari. Si parte da `P`, che è finale. Il simbolo `1` scambia i due stati, perché aggiunge un’unità al conteggio. Il simbolo `0` mantiene lo stato, perché il numero di uni resta invariato.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=6.6 ymin=-1.4 ymax=1.4 punti="0,0,pieno;2,0,pieno;4,0,pieno;6,0,pieno" vettori="0.22,0,1.78,0;2.22,0,3.78,0;4.22,0,5.78,0" etichette="0,0.55,P;2,0.55,D;4,0.55,D;6,0.55,P;1,-0.52,1;3,-0.52,0;5,-0.52,1" titolo="Lettura di 101 da sinistra a destra. Ogni freccia indica il simbolo consumato per raggiungere lo stato successivo."}

La parola `101` porta da `P` a `D`, poi mantiene `D`, poi torna a `P`. Viene accettata. Se si aggiunge un altro `1`, la parola `1011` termina in `D` e viene rifiutata. La visita intermedia a `P` descrive soltanto l’esito del prefisso `101`.
:::

:::esempio{titolo="Tracciare una lettura in tabella"}
Per verificare `10110` nell’automa di parità si annota lo stato dopo ciascun prefisso. La prima riga corrisponde all’input ancora interamente da leggere.

| Prefisso letto | Stato |
| --- | --- |
| $\varepsilon$ | `P` |
| `1` | `D` |
| `10` | `D` |
| `101` | `P` |
| `1011` | `D` |
| `10110` | `D` |

Poiché `D` è lo stato dopo l’intera parola, l’esito è il rifiuto. La tabella individua anche il primo prefisso non vuoto accettato, `101`. Si tratta di una domanda diversa dall’accettazione dell’intero input.
:::

## Costruire gli stati

:::definizione{#invariante titolo="Significato dello stato"}
Prima di assegnare le transizioni si decide quale informazione sul prefisso già letto debba essere conservata. Il **significato dello stato** è una proprietà del prefisso. Costituisce un invariante di lettura se vale inizialmente e se ogni transizione lo mantiene coerente con il simbolo appena aggiunto.

Per esempio, per controllare se la parola termina in `1` servono due casi. Lo stato `S` indica che il prefisso è vuoto oppure termina in `0`. Lo stato `U` indica che termina in `1`. Inizialmente la parola letta è vuota, quindi lo stato iniziale è `S`. Da entrambi gli stati si va in `S` con `0` e in `U` con `1`, perché l’ultimo simbolo coincide con quello appena letto. Soltanto `U` è finale.
:::

:::esempio{titolo="Resto modulo tre"}
Per accettare una parola con un numero di uni multiplo di tre, si distinguono i resti $0$, $1$ e $2$. Iniziale e finale sono entrambi lo stato del resto $0$. Se si legge `1`, il numero di uni aumenta di uno. Se si legge `0`, il conteggio resta invariato.

| Resto | Legge `0` | Legge `1` |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $1$ | $1$ | $2$ |
| $2$ | $2$ | $0$ |

La transizione $2\to0$ con `1` rappresenta il passaggio al successivo multiplo di tre. Con `1101` il percorso dei resti è $0,1,2,2,0$, quindi la parola è accettata. Per decidere l’esito bastano tre stati, anche quando la parola è molto lunga.
:::

:::osservazione{#condizioni-composte titolo="Combinare due condizioni finite"}
Quando il linguaggio richiede due proprietà, si può conservare una coppia di stati, uno per ciascuna proprietà. Ogni simbolo aggiorna entrambe le componenti. Per «numero pari di uni e parola che termina con zero», la prima componente tiene la parità degli uni e la seconda distingue il suffisso `0` dagli altri casi, compresa la parola vuota.

Le due componenti hanno due valori ciascuna, perciò la costruzione prevede quattro coppie. Si accetta solo nella coppia «pari, ultimo zero». Su `110` la prima componente torna a pari al secondo `1` e l’ultimo `0` rende vera la seconda condizione. Su `11` la prima è vera e la seconda è falsa, perciò l’automa rifiuta.
:::

## Suffissi, blocchi e vincoli di formato

:::esempio{#suffissi titolo="Parole che terminano con 01"}
Per riconoscere il suffisso `01`, si usano `A`, `B` e `C`. `A` indica che il prefisso letto non offre una corrispondenza utile, `B` che termina con `0` e `C` che termina con `01`. Inizialmente si è in `A`. Lo stato `C` è l’unico finale.

| Stato | Legge `0` | Legge `1` |
| --- | --- | --- |
| `A` | `B` | `A` |
| `B` | `B` | `C` |
| `C` | `B` | `A` |

Da `C`, leggendo `0`, si torna in `B` perché l’ultima cifra è di nuovo uno zero utile. Leggendo `1` si va in `A`, perché le ultime due cifre sono `11`. Le transizioni da `C` sono quindi necessarie per riconoscere un nuovo `01` dopo un prefisso già accettato. Per `0101` la successione è `A`, `B`, `C`, `B`, `C`.
:::

:::esempio{#blocchi-interni titolo="Parole che contengono 00"}
Per riconoscere il blocco `00` in qualsiasi posizione, si mantengono tre stati. `A` indica che `00` non è comparso e il prefisso è vuoto oppure termina in `1`. `B` indica che `00` non è comparso e il prefisso termina in `0`. `C` indica che `00` è comparso.

| Stato | Legge `0` | Legge `1` |
| --- | --- | --- |
| `A` | `B` | `A` |
| `B` | `C` | `A` |
| `C` | `C` | `C` |

Lo stato `C` è finale e assorbente, perché un blocco già incontrato resta presente dopo ogni estensione. In `001`, i primi due zeri portano in `C` e l’ultimo `1` mantiene lo stato. Se la richiesta fosse «termina con `00`», la transizione da `C` con `1` tornerebbe ad `A`.
:::

:::esempio{titolo="Controllare una sigla"}
Una sigla di laboratorio è formata da `A` seguita da una o più cifre binarie. L’alfabeto comprende `A`, `0` e `1`. Lo stato `I` attende `A`, lo stato `L` ha letto la lettera e attende la prima cifra, lo stato `V` ha letto una sigla valida, e `X` è il pozzo di rifiuto.

| Stato | `A` | `0` | `1` |
| --- | --- | --- | --- |
| `I` | `L` | `X` | `X` |
| `L` | `X` | `V` | `V` |
| `V` | `X` | `V` | `V` |
| `X` | `X` | `X` | `X` |

`A01` raggiunge `V` con la prima cifra e rimane in `V` con la seconda. `A` raggiunge soltanto `L`, quindi manca una cifra. `AA1` raggiunge `X` con la seconda lettera, quindi la cifra successiva non può rendere valida la sigla.
:::

## Misurare la memoria disponibile

:::definizione{#memoria-finita titolo="Memoria finita e linguaggi regolari"}
Un linguaggio si dice **regolare** se un automa finito può riconoscerlo. Con un numero fisso di stati l’automa distingue un numero fisso di situazioni. Può conservare un resto modulo un intero fissato, l’ultimo simbolo o una soglia come «almeno due uni». In questi esempi, il numero delle situazioni da distinguere non aumenta con la lunghezza dell’input.

Un contatore che conserva il numero *esatto* di uni ha esigenze diverse. Dopo parole via via più lunghe, il conteggio può assumere valori arbitrariamente grandi. Un programma può usare memoria aggiuntiva per scriverlo. Un automa finito può conservare una proprietà del conteggio, per esempio il suo resto, quando quella proprietà basta per il riconoscimento.
:::

::::teorema{#zeri-uni titolo="Lo stesso numero di zeri e uni in due blocchi"}
Il linguaggio $L=\{0^n1^n\mid n\geq0\}$ comprende parole con $n$ zeri seguiti da $n$ uni. Poiché $n$ non è limitato, il linguaggio **non è regolare**.

:::dimostrazione
L’idea è mostrare che due prefissi diversi, portando allo stesso stato, produrrebbero uno stesso esito su un seguito che dovrebbe invece distinguerli.

Supponiamo che un automa con $k$ stati riconosca $L$. Leggendo i $k+1$ prefissi $\varepsilon,0,00,\dots,0^k$, almeno due conducono allo stesso stato, perché ci sono soltanto $k$ stati. Indichiamo i due prefissi con $0^i$ e $0^j$, con $i<j$.

Aggiungiamo a entrambi il suffisso $1^i$. Poiché lo stato di partenza per il suffisso è lo stesso e ogni transizione è deterministica, le parole $0^i1^i$ e $0^j1^i$ terminano nello stesso stato. La prima appartiene a $L$. La seconda ha più zeri che uni e quindi è fuori da $L$. L’automa dovrebbe assegnare due esiti diversi a uno stesso stato raggiunto dopo la lettura, il che è impossibile.
:::
::::

:::osservazione
Fissato il limite $n\leq5$, le sole parole possibili sono sei, compresa $\varepsilon$. Si può allora costruire una tabella finita che distingue tutti i prefissi delle sei parole. La prova del caso illimitato dipende dalla disponibilità di $k+1$ prefissi diversi per ogni possibile numero $k$ di stati.
:::

## Descrivere un modello generale

:::definizione{#turing titolo="Macchina di Turing"}
Una **macchina di Turing** comprende un controllo a stati finiti, un nastro di celle leggibili e scrivibili e una testina. Il nastro offre celle vuote oltre la parte inizialmente occupata dall’input. In un passo la macchina legge il simbolo sotto la testina, determina la regola applicabile dallo stato e dal simbolo, può riscrivere quella cella, cambia stato e sposta la testina secondo la regola. In uno stato di arresto l’esecuzione termina.

La memoria accessibile sul nastro può crescere durante il calcolo. Per questo il controllo a stati finiti può eseguire procedimenti con più memoria di un automa che legge l’input una sola volta. Per esempio, una macchina può segnare coppie di simboli per confrontare due conteggi senza conservare il numero totale nello stato.
:::

:::esempio{titolo="Segnare coppie di zeri e uni"}
Per decidere se una parola è della forma $0^n1^n$, si verifica prima che nessuno zero segua un uno. Poi si cerca il primo zero non segnato, lo si marca e si cerca un uno non segnato da abbinargli. Se l’uno manca, la parola viene rifiutata. Quando tutti gli zeri risultano segnati, si controlla che non rimangano uni non segnati.

Su `0011`, il primo giro marca le posizioni uno e tre. Il secondo marca le posizioni due e quattro. Tutte le posizioni sono marcate e la parola viene accettata. Su `001`, la seconda ricerca di un uno non segnato fallisce e si rifiuta. Ciascun giro utile marca un nuovo zero e la parola è finita, perciò il procedimento termina.
:::

:::esempio{titolo="Tracciare due mosse della testina"}
Una macchina parte nello stato `I` sulla prima cella del nastro `10`. In `I` leggendo `1` scrive `X`, passa in `J` e si sposta a destra. In `J` leggendo `0` scrive `Y`, si sposta a sinistra ed entra nello stato di arresto `H`. Dopo il primo passo il nastro è `X0` e la testina è sulla seconda cella. Dopo il secondo il nastro è `XY`, la testina è sulla prima cella e la macchina termina. Per ogni passo si distinguono il simbolo che determina la regola, il simbolo scritto e la cella raggiunta.
:::

## Distinguere decisione e costo

:::definizione{#arresto titolo="Decidibilità e problema dell’arresto"}
Un **decisore** è un algoritmo che termina su ogni input previsto e restituisce la risposta corretta. Un problema di decisione è **decidibile** se esiste un decisore. Per esempio, per decidere se una parola contiene `B` si scorre l’input. Si restituisce sì al primo `B` e no quando l’input finisce senza aver trovato `B`. Il ciclo ha al massimo un passo per simbolo.

Il **problema dell’arresto** chiede se un programma arbitrario termina su un dato input. Nel modello generale è indecidibile. È comunque possibile stabilire l’esito in casi specifici, come un ciclo di $n$ iterazioni con corpo che termina a ogni iterazione.
:::

::::teorema{#limite-arresto titolo="Perché il problema generale è indecidibile"}
Non esiste un decisore che, per ogni coppia programma-input, stabilisca correttamente se l’esecuzione termina.

:::dimostrazione
L’idea è costruire un programma che usi la decisione ipotetica per produrre l’esito opposto quando gli si passa il suo stesso codice.

Supponiamo che il decisore `H(P, x)` termini sempre e dica se `P` termina su `x`. I programmi possono essere rappresentati come dati. Si costruisce quindi `D(P)`, che chiama `H(P, P)`. Se `H` risponde sì, `D` esegue un ciclo infinito. Se `H` risponde no, `D` termina.

Su input pari al codice di `D`, la risposta sì di `H(D, D)` implica che `D(D)` non termini. La risposta no implica che `D(D)` termini. Entrambe le risposte contraddicono la correttezza supposta di `H`, quindi il decisore generale non esiste.
:::
::::

:::osservazione{#costo-decisione titolo="Decidibilità ed efficienza"}
La decidibilità riguarda l’esistenza di un procedimento corretto che termini. La **complessità** descrive come crescono le risorse impiegate da un procedimento al crescere dell’input. Per cercare `B` si può leggere la parola una volta. Un secondo procedimento ripete l’intera scansione per ogni posizione della parola e restituisce lo stesso esito. Su una parola lunga $n$ che non contiene `B`, il primo fa $n$ confronti e il secondo $n^2$. Entrambi sono decisori, anche se hanno costi diversi.

Un limite di un milione di passi è utile per interrompere una simulazione. Se il programma è ancora attivo al termine del limite, si sa soltanto che non è terminato *entro quei passi*. Per decidere che non terminerà mai occorre un argomento ulteriore, per esempio un invariante di un ciclo che mantiene sempre vera la sua condizione.
:::

## Laboratorio in Python

:::esempio{#simulatore titolo="Simulare l’automa di parità"}
In Python un dizionario associa ogni coppia di stato e simbolo alla destinazione. La funzione riceve una stringa sull’alfabeto binario. Il ciclo aggiorna lo stato una volta per simbolo e restituisce il confronto con l’unico stato finale.

```python
transizioni = {
    ("P", "0"): "P",
    ("P", "1"): "D",
    ("D", "0"): "D",
    ("D", "1"): "P",
}


def accetta(parola):
    stato = "P"
    for simbolo in parola:
        stato = transizioni[stato, simbolo]
    return stato == "P"


assert accetta("")
assert accetta("101")
assert not accetta("10110")
```

Per la parola vuota il ciclo non esegue passi, quindi si verifica la condizione sullo stato iniziale. `101` contiene due uni e `10110` ne contiene tre. Questi due input controllano esiti opposti. Per un input che contiene un simbolo fuori alfabeto occorre specificare una politica di validazione, per esempio rifiutare il dato prima di avviare il simulatore.
:::

:::osservazione{#verifica-automa titolo="Casi di prova e correttezza"}
Si possono enumerare tutte le parole binarie di lunghezza fino a quattro e confrontare l’uscita del simulatore con la parità calcolata contando gli uni. È utile includere la parola vuota, parole con soli zeri e parole con molti passaggi fra `P` e `D`. Ogni test confronta l’uscita attesa con quella effettiva.

L’enumerazione fino a una lunghezza fissata verifica soltanto quelle parole. Per tutte le lunghezze si usa l’invariante. Inizialmente il conteggio è pari. Una transizione con `0` conserva conteggio e stato, mentre una transizione con `1` cambia la parità e scambia i due stati. Il significato dello stato resta quindi valido a ogni passo, e la condizione finale decide correttamente per ogni parola binaria.
:::
