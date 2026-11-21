# Matematica 2° anno · Disequazioni di secondo grado e fratte — revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py matematica-superiori-2 disequazioni-secondo-grado`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole** (conteggio dello script, corpo del file): italiano 2328 → 3749 (×1,61); inglese 2283 → 3921 (×1,72). Entro i limiti (1,7 e 1,8). Blocchi 27, esempi 15, figure 9, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici; nessun blocco nuovo, nessun contenuto tolto, dati degli esempi invariati.

## Che cosa è cambiato

1. **Notazione degli insiemi** spiegata nel blocco `#intervalli`: intervalli con parentesi quadre e tonde, estremi, $\infty$, $\in$, $\mathbb R$, $\{3\}$, $\varnothing$, $\cup$, $\cap$, $\mathbb R\setminus\{3\}$, $\forall$, insieme soluzione $S$. Schede, esercizi e domande li usano tutti (75 volte $\cup$, 19 volte $\varnothing$, 13 volte $\setminus$), la teoria non ne spiegava nessuno.
2. **Termini definiti alla prima comparsa**: disequazione, primo e secondo membro, confronto stretto e non stretto, verso, dominio, parabola, ascissa, ordinata, trinomio di secondo grado, coefficienti, radice/zero, discriminante (con la lettura di $\Delta$), radice doppia, completare il quadrato, punto di tangenza, punto di prova, grado, disequazione fratta, quoziente, punti critici, asintoti, molteplicità, sistema di disequazioni, radicando, addendo, valore assoluto, parametro, vertice, condizione necessaria e sufficiente.
3. **Esempio d’apertura completato**: prima si fermava a «occorre studiare il segno dei due fattori»; ora fa lo studio e chiude con la soluzione $[-1,4]$.
4. **Passaggi di calcolo mancanti**: sviluppo di $(x+1)(x-4)$, di $-(x-5)(x-7)$, di $-(x-2)^2-1$; completamento del quadrato riga per riga nella dimostrazione del discriminante; $\Delta=16-20$; denominatore comune in $\dfrac2{x-1}\le1$ con lo studio dei segni dei tre intervalli; scomposizione di $x^2+3x-40$ con somma e prodotto; sviluppo $(k-1)x^2-2x+1=(x-1)^2+(k-2)x^2$.
5. **Motivi dei «quindi»**: perché $Q(x)^2>0$, perché moltiplicare per $-1$ inverte il verso, perché $-\Delta/(4a^2)>0$, perché $x+1$ e $x-4$ hanno segni opposti fra le radici, che cosa vuol dire «per continuità» nel teorema sulle molteplicità.
6. **Procedimento di `#procedimento` in quattro passi numerati**, uno per operazione.
7. **Graffa di sistema** introdotta dove ci sono condizioni da soddisfare insieme (definizione `#sistemi` e primo esempio), come nelle schede.
8. **Figure descritte** nel testo dove non lo erano: le tre righe della figura del sistema, i punti pieni e vuoti del dominio con la radice, gli asintoti della frazione, le tre parabole del parametro.

## Com'era / Com'è ora (dimostrazione del teorema `#discriminante`)

**Com'era**

> Raccogliendo $a$ e completando il quadrato si ottiene
> $$ax^2+bx+c=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].$$
> Si verifica l’identità sviluppando il quadrato, perché la parte costante dentro la parentesi è $\dfrac{b^2-\Delta}{4a^2}=\dfrac ca$. […] Se $\Delta<0$, al quadrato si aggiunge $\dfrac{-\Delta}{4a^2}>0$.

**Com'è ora**

> Si raccoglie $a$ e si **completa il quadrato**, cioè si aggiunge e si toglie lo stesso numero in modo da ottenere il quadrato di un binomio:
> $$\begin{aligned}ax^2+bx+c&=a\left[x^2+\frac ba x+\frac ca\right]\\&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{b^2}{4a^2}+\frac ca\right]\\&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].\end{aligned}$$
> L’uguaglianza vale per ogni $x$ e si verifica sviluppando il quadrato, perché la parte costante dentro la quadra è $\dfrac{b^2-\Delta}{4a^2}=\dfrac{4ac}{4a^2}=\dfrac ca$. […] Se $\Delta<0$, il numero $-\Delta$ è positivo e $4a^2$ è positivo, quindi al quadrato si aggiunge $\dfrac{-\Delta}{4a^2}>0$.

Uno studente del secondo anno non sapeva che cosa fosse «completare il quadrato», non vedeva il passaggio intermedio e leggeva «identità» senza definizione. Anche «la parentesi» per indicare l’espressione è stato tolto.

## Errori nell'originale

Nessun errore numerico: tutti i risultati ricalcolati con Python/sympy (soluzioni di ogni disequazione, aree 36 e 32 m², $\Delta=-4$, fattorizzazioni, domini, insiemi con il parametro, identità $(x-1)^2+(k-2)x^2$) coincidono. Una sola imprecisione di formulazione: l’enunciato di `#segno` diceva «siano $r_1<r_2$ le sue due radici reali» senza dire che il teorema richiede due radici reali distinte; ora è un’ipotesi esplicita.

## Termini degli esercizi aggiunti in teoria

Notazione $\mathbb R$, $\varnothing$, $\{a\}$, $\mathbb R\setminus\{a\}$, $\forall$, $\cap$ (punto 1); vertice e scomposizione con somma e prodotto (usati nella scheda 1 e nelle domande).

## Errori notati in schede, esercizi e domande

Nessuno trovato. Ho letto le schede svolte e cercato in esercizi e domande i simboli e i termini usati; i conti li ho rifatti solo su un campione di domande (per esempio 30, 50, 70, 80, 88), tutte corrette. Le altre domande non sono state ricontrollate una per una.

## Dubbi

- Nell’inglese l’originale usa «factorization» con la -z e le schede «centre»: ho tenuto «factorization» e la grafia britannica per il resto («metres»).
- Le frasi impersonali italiane sono rese in inglese con «one …» o con il passivo; in due esempi l’inglese usa «We solve», «We look for», come in altri capitoli inglesi del sito.
