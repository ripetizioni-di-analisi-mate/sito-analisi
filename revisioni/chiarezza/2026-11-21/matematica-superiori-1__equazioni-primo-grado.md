# Revisione di chiarezza · matematica-superiori-1 / equazioni-primo-grado

Controllo (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

## Parole

- Italiano: 2240 → 4181 (×1,87)
- Inglese: 2283 → 4315 (×1,89)

L'aumento supera la fascia attesa (1,2-1,7) e resta sotto la soglia di avviso (2,0). Dopo una prima stesura a ×2,00 sono state tolte le ripetizioni; ciò che resta in più sono definizioni di termini e passaggi di calcolo.

## Che cosa è cambiato

1. La definizione iniziale dice che cos'è un'equazione e definisce alla prima comparsa incognita, membro, soluzione, insieme delle soluzioni $S$, $\varnothing$, primo grado, dominio, $x\in D$, $\mathbb R$. Prima partiva da «un'equazione chiede per quali valori…» e usava $D=\mathbb R$ senza spiegarlo.
2. I due principi di equivalenza sono in elenco, con il caso $2x+3=11$ e $2x=8$; la dimostrazione dice che cosa sono $H(x)$ e $c$ e spiega perché una trasformazione reversibile conserva le soluzioni.
3. Nella riduzione ad $ax=b$ il caso numerico $5x+1=2x+7$ precede le lettere greche, che sono lette per nome (alfa, beta, gamma, delta). Sono definiti coefficiente, termine noto (o fisso), espressione lineare, forma normale, candidato. La dimostrazione ha i passaggi uno per riga.
4. Nei calcoli sono scritti i passaggi che mancavano: sviluppo di $-3(2x-5)+4$ con la riga intermedia, passaggi $-G=6$ e $-x=-14$, moltiplicazione per $12$ termine per termine, calcolo svolto per $\dfrac{x-3}{x+1}=\dfrac13$, verifica di ogni risultato sugli stessi numeri.
5. Definiti dove servono: ascissa e ordinata, pendenza, proprietà distributiva, denominatore, multiplo comune e minimo comune multiplo (mcm), equazione fratta, condizioni di esistenza, $\mathbb R\setminus\{-1\}$, proporzione, prodotti incrociati, equazione determinata / impossibile / identità, parametro, modello, interi consecutivi, pari e dispari, semiperimetro, formula inversa, portata, $V_0$, proporzionalità diretta.
6. Il testo attorno a ogni figura descrive ciò che la figura mostra (piatti della bilancia, punto $P$ e segmenti, punti segnati sulle rette parallele e coincidenti, assi $n$ e $C$ del grafico dei costi).
7. Tolte le forme prescrittive («conviene riconoscere», «conviene dichiarare») e «la parentesi sinistra vale $-1$» (ora «l'espressione $2x-5$ vale $-1$»). Diversi due punti usati come connettivo sono diventati «quindi» o «perché».
8. Frontmatter, titoli `##`, ancore, titoli di tutti i blocchi e righe delle 9 figure sono identici; nessun contenuto tolto; dati numerici degli esempi invariati.

## Com'era / Com'è ora (blocco `#lineari`)

**Com'era**

> Un'equazione con membri $\alpha x+\beta$ e $\gamma x+\delta$ si riduce ad $ax=b$, dove $a=\alpha-\gamma$ e $b=\delta-\beta$. Se $a\ne0$, l'unico candidato è $x=\dfrac ba$. È soluzione se appartiene al dominio.

**Com'è ora**

> In $5x+1$ il numero $5$, che moltiplica l'incognita, è il **coefficiente** di $x$. Il numero $1$, che non è moltiplicato per $x$, è il **termine noto**, detto anche termine fisso. Un'espressione di questo tipo si chiama **lineare**.
>
> Nell'equazione $5x+1=2x+7$ si sottraggono $2x$ e $1$ da entrambi i membri e si ottiene $3x=6$. Qui $3=5-2$ e $6=7-1$. Dividendo per $3$ si trova $x=2$, e infatti $5\cdot2+1=11$ e $2\cdot2+7=11$.
>
> Con le lettere, i quattro numeri si indicano con $\alpha$, $\beta$, $\gamma$, $\delta$ (lettere greche che si leggono alfa, beta, gamma, delta). Un'equazione con membri $\alpha x+\beta$ e $\gamma x+\delta$ si riduce ad $ax=b$, dove $a=\alpha-\gamma$ e $b=\delta-\beta$. La scrittura $ax=b$ è la **forma normale** dell'equazione. Se $a\ne0$, l'unico candidato è $x=\dfrac ba$. Si chiama candidato il valore ottenuto dai calcoli prima di aver controllato il dominio. È soluzione se appartiene al dominio.

## Errori trovati nell'originale

Nessuno. Tutti i risultati sono stati ricalcolati a mano (sympy non è installato nell'ambiente): $x=2$, $x=8$, $x=14$, $x=19$, $x=5$, $x=6$, $m=3$, $n=6$, $n=9$, $t=4$, $t=\dfrac72$, $h=9\,\mathrm{cm}$.

## Aggiunte per coprire gli esercizi

- Notazioni $S=\{\dots\}$, $S=\varnothing$, $\mathbb R\setminus\{\dots\}$, $x\in D$ (usate in schede e domande, assenti in teoria).
- «Equazione fratta» e «condizioni di esistenza» (titolo della scheda 7 e della sezione), nel blocco `#frazioni`.
- Proporzione nella scrittura $x:4=8:2$ (scheda 6), nell'esempio sui prodotti incrociati.
- Media di più numeri (scheda 4): **nuovo esempio senza ancora** «La media in un'equazione» nella sezione dei problemi, con dati $5$, $9$, media $8$, risultato $10$. È l'unico blocco aggiunto (32 blocchi contro 31), in italiano e in inglese.
- Semiperimetro (scheda 5 e titolo della figura), pendenza, termine noto / termine fisso, parametro.

## Dubbi rimasti

- Lunghezza ×1,87: oltre la fascia attesa. Per scendere ancora si dovrebbero togliere passaggi di calcolo o definizioni.
- Il simbolo $\iff$, usato in alcune schede, non è stato introdotto in teoria perché la teoria non lo usa in nessun passaggio; se serve, il posto adatto è il blocco `#equivalenza`.
- In inglese «determinata» è resa con *determinate* e «condizioni di esistenza» con *domain restrictions* (come nel titolo di sezione già esistente); «V con zero» è reso con *V nought*.
- `git status` mostra modificato anche `disequazioni-primo-grado.md`: è il lavoro di un altro agente, non toccato da questa revisione.
