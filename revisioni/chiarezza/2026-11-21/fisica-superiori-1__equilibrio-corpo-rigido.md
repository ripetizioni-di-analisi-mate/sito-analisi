# Fisica 1° anno · Equilibrio del corpo rigido

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 equilibrio-corpo-rigido`): nessun ERRORE, esito «a posto, con avvisi da valutare».

**Parole**: italiano 2681 → 5314 (×1,98); inglese 2660 → 5487 (×2,06).

## Che cosa è cambiato

1. Ogni termine è definito alla prima comparsa: corpo rigido, modello, momento, modulo, retta d'azione, braccio, perpendicolare, perno, trave, risultante, equilibrio, reazione, forze esterne, punto materiale, cerniera, tensione, leva, fulcro, forza resistente e motrice, appoggio, appoggio semplice, omogenea, a sbalzo, contrappeso, baricentro, centro di massa, campo uniforme, media pesata, base d'appoggio, soglia, spigolo, attrito statico, proiezione ortogonale.
2. Simboli e unità spiegati: N e Sistema Internazionale (SI), m, N m, kg, cm, θ (teta), Σ (sigma, «somma di»), $M_O$, le barre del valore senza segno, $m_i$ e $x_i$, $g$ (circa 9,8 N/kg), il pedice «rib».
3. Seno e tangente non sono definiti in nessun capitolo precedente della materia. Ora sono definiti sul triangolo rettangolo nel punto in cui servono ($b=r\sin\theta$ e $h\tan\theta$), con i valori usati dagli esercizi (sin 30°, 60°, 90°).
4. Il momento è introdotto con la definizione e un caso numerico (25 N · 0,3 m = 7,5 N m) prima della formula con r e θ.
5. I conti hanno i passaggi intermedi: momenti delle due componenti, cambio di riferimento da O a O′ (50 e 40 N m), tensione della fune (0,72 T = 57,6), reazioni delle travi ricavate dall'equazione dei momenti, baricentro con le unità.
6. La dimostrazione dell'equilibrio è riscritta con un'asta e forze verticali ($(x-d)F_y=xF_y-dF_y$), poi estesa a forze qualsiasi con il vettore $\overrightarrow{OO'}$. Quella della coppia richiama esplicitamente questo risultato.
7. Il blocco `:::attenzione` ha ora un controesempio numerico (due forze da 10 N a 0,5 m: risultante 0, momento 5 N m).
8. Il testo attorno a due figure dice che cosa mostrano (grafico delle soglie con i punti R, S, T; pesi $P_a$ e $P_m$ nel baricentro).

Titoli `##`, ancore, titoli dei blocchi, righe delle figure e dati numerici degli esempi sono invariati. Nessun blocco aggiunto o tolto.

## Com'era / Com'è ora (esempio «Cerniera e fune»)

**Com'era**

> Una fune collega l'estremità libera a un punto più alto sul muro. Se il modulo della tensione è $T$, la sua componente orizzontale vale $-\dfrac45T$ e la componente verticale $\dfrac35T$.

Le frazioni comparivano senza origine: l'altezza del punto di attacco (0,90 m) era solo nel disegno.

**Com'è ora**

> Una fune collega l'estremità libera B a un punto più alto sul muro, che nella figura si trova $0{,}90\,\mathrm m$ sopra A.
>
> La barra, il muro e la fune formano un triangolo rettangolo con cateti $1{,}20\,\mathrm m$ e $0{,}90\,\mathrm m$. Per il teorema di Pitagora la fune, che è l'ipotenusa, è lunga $\sqrt{1{,}20^2+0{,}90^2}\,\mathrm m=\sqrt{2{,}25}\,\mathrm m=1{,}50\,\mathrm m$.
>
> La tensione è diretta lungo la fune, da B verso il muro e verso l'alto. Le sue componenti stanno al modulo $T$ come i cateti stanno all'ipotenusa. Poiché $\dfrac{1{,}20}{1{,}50}=\dfrac45$ e $\dfrac{0{,}90}{1{,}50}=\dfrac35$, se il modulo della tensione è $T$, la sua componente orizzontale vale $-\dfrac45T$ e la componente verticale $\dfrac35T$. Il segno meno indica il verso sinistro, verso il muro.

## Errori nell'originale

Nessuno. Tutti i numeri sono stati ricalcolati (momenti, T = 80 N, reazioni 25/75, 45/95, 120/−30, 130/20, baricentro 1,25 m, soglie 50, 40 e 80 N, tan θ = 0,50) e coincidono.

## Aggiunte per coprire gli esercizi

- **Vantaggio** della leva, **forza motrice** e **forza resistente** (blocco `#leve`): usati da domande e tracce, mancavano in teoria.
- **Componente perpendicolare** $F_\perp$ e valori del seno (blocco `#momento`): notazione delle schede svolte.
- **Appoggio semplice** (esempio dello sbalzo) e l'unità $\mathrm{kg\,m}$ nel calcolo del baricentro: usati dalle domande.
- Condizione di scorrimento sul piano inclinato ($\tan\theta$ uguale al coefficiente d'attrito statico), in una riga: la usano le domande e serviva a giustificare l'ultima frase del blocco.

## Dubbi rimasti

- **Lunghezza sopra l'intervallo atteso** (1,2-1,7): italiano ×1,98, inglese ×2,06 (qui lo script dà l'avviso «oltre il doppio»). Dopo tre giri di tagli sugli esempi aggiunti, il resto è fatto di definizioni (seno, tangente, una trentina di termini) e di passaggi di calcolo. L'inglese è la traduzione integrale e risulta più lungo solo per la lingua. Se va accorciato, i candidati sono la riga sul grafico delle soglie e il secondo controllo dei momenti in B nelle travi.
- L'altezza 0,90 m del punto di attacco della fune è stata letta dagli attributi della figura (`0,.90 1.2,0`); nel testo originale non c'era.
- L'angolo di circa 27° per $\tan\theta=0{,}50$ è un dato aggiunto (arctan 0,5 = 26,6°).
- Il titolo della figura del secondo esempio usa «risultante» prima della definizione (che sta nell'esempio dei due punti di riferimento); la riga della figura non è modificabile e il termine è già nel capitolo sulle forze.
- L'avviso sulle sigle riguarda «OA», che è il nome di un segmento.
- Nel blocco `#momento` restano cinque grassetti (corpo rigido, momento, retta d'azione, braccio, seno): sono tutti termini definiti lì.
- Nel file inglese il titolo «Restoring the centre of mass to the midpoint» è rimasto com'era; nel testo si usa «centre of gravity», come in italiano.
