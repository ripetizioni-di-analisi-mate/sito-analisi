# Rapporto · matematica-superiori-1 / disequazioni-primo-grado

**Controllo** (`strumenti/controlla_capitolo.py`): ESITO «a posto», nessun ERRORE e nessun AVVISO.

**Parole**: IT 2208 → 4068 (×1,84); EN 2224 → 4368 (×1,96). Sopra la fascia attesa 1,2-1,7 e sotto la soglia d'avviso 2,0. Una prima stesura era a ×2,40 ed è stata asciugata togliendo esempi doppi e descrizioni di figure. Il resto dell'aumento sono definizioni di termini che l'originale usava senza spiegarli e passaggi di calcolo prima saltati.

## Che cosa è cambiato

1. **Lessico di base definito alla prima comparsa** nel blocco `#ordine`: disuguaglianza, lettura dei quattro simboli, confronto stretto, incognita, membri, verso, soluzione (con $x=9$ e $x=7$ in $2x+8>24$), dominio, numeri reali e $\mathbb R$, costante, «definita nel dominio», simbolo $\iff$, lettera $S$.
2. **Soglia** (`#coefficienti`): prima «primo grado/lineare», coefficiente e termini simili; poi la forma $ax+b$ ricavata da un caso numerico ($2x+8>24$ diventa $2x-16>0$, soglia $8$); «isolare» spiegato; sinonimo «valore di confine», usato nelle domande.
3. **Calcoli una riga per passaggio** con l'operazione detta sotto: i due confronti dell'esempio sulle rette, il denominatore comune (aggiunta la riga $-3x+7\ge6$ e il perché di $-2(2x-1)$), la doppia disuguaglianza $0\le4-2x<6$, il pacco ($3{,}5n\le37$, perché $\dfrac{74}{7}$ sta fra 10 e 11), le tappe.
4. **Dimostrazioni** tenute nello stesso blocco, a passi brevi, con la proprietà nominata (raccoglimento, regola dei segni) e l'idea detta all'inizio.
5. **Intervalli**: definizione di intervallo ed estremi, i casi in elenco con la condizione corrispondente, lettura di $\infty$ e motivo della parentesi tonda, insieme vuoto, $\cup$, $\cap$, complemento.
6. **Parametro**, vincolo, punto di parità, budget, incremento, mcm, kg: una riga di definizione ciascuno. Nel parametro i tre casi mostrano anche il passaggio intermedio ($x-2\le0$).
7. **Tariffe e problemi**: detto da dove vengono $5+3n$ e $11+2n$ (quota fissa più costo a copia), corrispondenza fra «al massimo / almeno / più di / meno di» e i simboli, condizioni simultanee scritte a sistema con la graffa.
8. Tolte le frasi astratte o prescrittive («Questo controllo è necessario anche quando…», «Il prodotto prende il segno risultante dalla moltiplicazione per $a$»). Frontmatter, titoli `##`, ancore, titoli dei blocchi, righe delle 9 figure e numeri degli esempi sono identici.

## Com'era / Com'è ora (blocco `#coefficienti`)

**Com'era**

> Dopo aver riunito i termini simili, una disequazione lineare si può scrivere confrontando $ax+b$ con zero. Se $a\ne0$, il numero $-\dfrac ba$ rende uguali i due membri ed è la **soglia**. Per ricavare l'insieme soluzione si isola $x$ e si controlla il segno del coefficiente usato per dividere. Il simbolo di confronto determina se la soglia appartiene all'insieme.

**Com'è ora**

> Una disequazione è **di primo grado**, o **lineare**, quando $x$ compare soltanto moltiplicata per un numero, senza potenze come $x^2$. Il numero che moltiplica $x$ è il suo **coefficiente**. I **termini simili** sono i termini con $x$ fra loro e i numeri fra loro, e riunirli significa sommarli.
>
> Portando tutti i termini nel primo membro e riunendo i termini simili, una disequazione lineare diventa un confronto fra $ax+b$ e zero, con $a$ e $b$ numeri. Per esempio, sottraendo $24$ ai due membri, $2x+8>24$ diventa $2x-16>0$, con $a=2$ e $b=-16$.
>
> Se $a\ne0$, cioè se $a$ è diverso da zero, la **soglia** è il numero $-\dfrac ba$, che rende $ax+b$ uguale a zero e quindi rende uguali i due membri. Nell'esempio la soglia è $-\dfrac{-16}{2}=8$, e infatti $2\cdot8+8=24$. […]
>
> Il simbolo di confronto stabilisce se la soglia è una soluzione. Con $<$ e $>$ la soglia è esclusa, con $\le$ e $\ge$ è inclusa.

## Errori nell'originale

Nessuno. Tutti i numeri sono stati ricalcolati (a mano e con sympy): soglie $\dfrac13$, $\dfrac{11}{2}$, $-3$, $3$; $\dfrac{74}{7}$; 39 e 42,5 kg; parità a 23 euro; tappe 20 e 23 punti.

## Aggiunte per coprire schede, esercizi e domande

- Simbolo $\iff$ e lettera $S$ (schede svolte 1, 5, 7), in `#ordine`.
- $\mathbb Z$, $\in$ e conteggio degli interi in un intervallo, $14-9+1=6$ (scheda 4, esercizio 9, domande 41-45), in `#intervalli`.
- Scrittura $\infty$ al posto di $+\infty$ e intervallo $[a,b)$ (soluzioni degli esercizi), in `#intervalli`.
- $\mathbb R\setminus\ldots$ (scheda 6, domanda 39), nell'osservazione sul complemento e nell'esempio sull'unione.
- Minimo con soglia non intera, $4n\ge45$ quindi $12$ (esercizio 11), in `#problemi`.
- «Sempre verificata» e «impossibile» (scheda 7), in `#casi`.

## Dubbi rimasti

- Lunghezza oltre 1,7: per scendere ancora andrebbero tolte definizioni, quindi è stata lasciata così.
- Nelle tariffe l'originale dava solo $5+3n$ e $11+2n$; la lettura «quota fissa più costo a copia» è coerente con il titolo del blocco e con la scheda 8.
- Nel file inglese c'è una frase in più rispetto all'italiano: collega «direction» a «reverses the sign», l'espressione usata dalle schede inglesi.
- Il sistema con la graffa compare nei due esempi sui problemi; nel teorema `#sistemi` la parola «sistema» è definita a parole, senza formula.
