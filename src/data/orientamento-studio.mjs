// Quesiti originali per una diagnosi iniziale. Le risposte campionano competenze,
// non certificano la padronanza di un programma o la probabilità di superare l'esame.
// Le posizioni corrette sono stabili e bilanciate; non viene usata casualità.
export const VERSIONE_STUDIO = '2026-11-13.1';
export const COMPETENZE_STUDIO = Object.create(null);
export const DOMANDE_STUDIO = [];

function materiali(materia, argomento) {
  const base = '/' + materia + '/' + argomento;
  return [
    { titolo: 'Teoria e definizioni', url: base + '/teoria', tipo: 'teoria' },
    { titolo: 'Esempi svolti', url: base + '/esercizi-svolti', tipo: 'svolti' },
    { titolo: 'Esercizi da provare', url: base + '/esercizi', tipo: 'esercizi' },
  ];
}

function quesito(testo, risposta, errate, spiegazione, figura) {
  return { testo, scelte: [risposta, ...errate], corretta: 0, spiegazione, ...(figura ? { figura } : {}) };
}

function posizioni(id) {
  let seme = 2166136261;
  for (const carattere of id) seme = Math.imul(seme ^ carattere.charCodeAt(0), 16777619) >>> 0;
  const p = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    seme = (Math.imul(seme, 1664525) + 1013904223) >>> 0;
    const j = seme % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  return p;
}

function competenza(id, titolo, materia, argomento, domande) {
  COMPETENZE_STUDIO[id] = { id, titolo, materiali: materiali(materia, argomento) };
  const ordine = posizioni(id);
  domande.forEach((domanda, indice) => {
    const corretto = domanda.scelte[0];
    const scelte = domanda.scelte.slice(1);
    scelte.splice(ordine[indice], 0, corretto);
    DOMANDE_STUDIO.push({ ...domanda, id: id + '-' + (indice + 1), competenza: id, scelte, corretta: ordine[indice] });
  });
}

const q = quesito;

competenza('aritmetica', 'Frazioni, segni e ordine delle operazioni', 'matematica-da-zero', 'frazioni', [
  q('Quanto vale $\\dfrac{2}{3}+\\dfrac{1}{4}$?', '$\\dfrac{11}{12}$', ['$\\dfrac{3}{7}$', '$\\dfrac{1}{12}$', '$\\dfrac{8}{12}$'], 'Il denominatore comune è $12$. Quindi $\\dfrac{2}{3}+\\dfrac{1}{4}=\\dfrac{8+3}{12}=\\dfrac{11}{12}$.'),
  q('Quanto vale $-3^2+(-3)^2$?', '$0$', ['$18$', '$-18$', '$6$'], 'Nel primo termine la potenza precede il segno meno: $-3^2=-9$. Il secondo termine vale $9$, quindi la somma è $0$.'),
  q('Quanto vale $18-12:3\\cdot2$?', '$10$', ['$16$', '$4$', '$12$'], 'Divisione e moltiplicazione si eseguono da sinistra a destra: $12:3\\cdot2=8$. Pertanto $18-8=10$.'),
  q('Una quantità è $\\dfrac{3}{5}$ di $20$. Quanto vale?', '$12$', ['$\\dfrac{3}{100}$', '$15$', '$\\dfrac{100}{3}$'], 'Dividendo $20$ in cinque parti si ottiene $4$ per parte. Tre parti valgono $3\\cdot4=12$.'),
]);

competenza('percentuali', 'Proporzioni e percentuali', 'matematica-superiori-1', 'potenze-proporzioni-percentuali', [
  q('Dopo una riduzione del $30\\%$, un prezzo è $84\\,\\mathrm{euro}$. Qual era il prezzo iniziale?', '$120\\,\\mathrm{euro}$', ['$109{,}20\\,\\mathrm{euro}$', '$58{,}80\\,\\mathrm{euro}$', '$280\\,\\mathrm{euro}$'], 'Il prezzo finale è il $70\\%$ di quello iniziale: $0{,}70P=84$. Quindi $P=\\dfrac{84}{0{,}70}=120\\,\\mathrm{euro}$.'),
  q('In una miscela il rapporto tra componente A e componente B è $2:3$. Su $25\\,\\mathrm{kg}$ totali, quanti sono di A?', '$10\\,\\mathrm{kg}$', ['$\\dfrac{50}{3}\\,\\mathrm{kg}$', '$15\\,\\mathrm{kg}$', '$5\\,\\mathrm{kg}$'], 'Le parti totali sono $2+3=5$. Ogni parte pesa $25:5=5\\,\\mathrm{kg}$; A occupa due parti, quindi pesa $10\\,\\mathrm{kg}$.'),
  q('Una quantità aumenta del $20\\%$ e poi diminuisce del $20\\%$. Rispetto al valore iniziale, il valore finale è:', 'inferiore del $4\\%$', ['uguale', 'superiore del $4\\%$', 'inferiore del $40\\%$'], 'I due fattori si moltiplicano: $1{,}20\\cdot0{,}80=0{,}96$. Rimane il $96\\%$ del valore iniziale, quindi la diminuzione è del $4\\%$.'),
  q('Una macchina produce $150$ pezzi in $6$ minuti a ritmo costante. Quanti ne produce in $10$ minuti?', '$250$', ['$90$', '$154$', '$900$'], 'Il ritmo è $150:6=25$ pezzi al minuto. In $10$ minuti produce $25\\cdot10=250$ pezzi.'),
]);

competenza('potenze', 'Potenze, radici e notazione scientifica', 'precorso', 'potenze-e-radici', [
  q('Quanto vale $2^3\\cdot2^{-5}$?', '$\\dfrac{1}{4}$', ['$-4$', '$4$', '$\\dfrac{1}{8}$'], 'Con la stessa base si sommano gli esponenti: $2^{3-5}=2^{-2}=\\dfrac{1}{4}$.'),
  q('Per $x\\in\\mathbb{R}$, quale espressione è sempre uguale a $\\sqrt{x^2}$?', '$|x|$', ['$x$', '$-x$', '$x^2$'], 'La radice quadrata è non negativa. Per questo $\\sqrt{x^2}$ coincide con il valore assoluto $|x|$, anche quando $x<0$.'),
  q('Qual è la notazione scientifica di $0{,}00072$?', '$7{,}2\\cdot10^{-4}$', ['$7{,}2\\cdot10^{4}$', '$72\\cdot10^{-4}$', '$0{,}72\\cdot10^{-4}$'], 'Spostando la virgola di quattro posti si ottiene $7{,}2$. Quindi il fattore compensativo è $10^{-4}$.'),
  q('Quanto vale $\\sqrt{18}+\\sqrt{8}$?', '$5\\sqrt{2}$', ['$\\sqrt{26}$', '$10$', '$13\\sqrt{2}$'], 'Si estraggono i quadrati perfetti: $\\sqrt{18}=3\\sqrt{2}$ e $\\sqrt{8}=2\\sqrt{2}$. La somma è $5\\sqrt{2}$.'),
]);

competenza('algebra', 'Prodotti notevoli e scomposizioni', 'precorso', 'polinomi', [
  q('Qual è lo sviluppo di $(x-3)^2$?', '$x^2-6x+9$', ['$x^2+9$', '$x^2-9$', '$x^2-3x+9$'], 'Il quadrato del binomio contiene il doppio prodotto: $(x-3)^2=x^2-2\\cdot3x+9=x^2-6x+9$.'),
  q('Qual è la scomposizione di $x^2-5x+6$?', '$(x-2)(x-3)$', ['$(x+2)(x+3)$', '$(x-1)(x-6)$', '$(x-2)(x+3)$'], 'I numeri $-2$ e $-3$ hanno somma $-5$ e prodotto $6$. Quindi il polinomio si scompone in $(x-2)(x-3)$.'),
  q('Per $x\\ne2$, quanto vale $\\dfrac{x^2-4}{x-2}$?', '$x+2$', ['$x-2$', '$x^2-2$', '$1$'], 'Il numeratore è $(x-2)(x+2)$. Poiché $x\\ne2$, il fattore $x-2$ può essere semplificato e resta $x+2$.'),
  q('Qual è il raccoglimento completo di $6x^3-9x^2$?', '$3x^2(2x-3)$', ['$3x(2x-3)$', '$3x^2(2x+3)$', '$x^2(6x-3)$'], 'Il fattore comune è $3x^2$. Dividendo i due termini per questo fattore si ottengono rispettivamente $2x$ e $-3$.'),
]);

competenza('equazioni', 'Equazioni e isolamento di una variabile', 'precorso', 'equazioni-polinomiali', [
  q('Quale valore risolve $3(2x-1)=9$?', '$x=2$', ['$x=1$', '$x=4$', '$x=\\dfrac{3}{2}$'], 'Dividendo per $3$ si ottiene $2x-1=3$, quindi $2x=4$ e $x=2$.'),
  q('Dalla formula $v=\\dfrac{s}{t}$, con $v\\ne0$, come si ricava $t$?', '$t=\\dfrac{s}{v}$', ['$t=sv$', '$t=\\dfrac{v}{s}$', '$t=s-v$'], 'Moltiplicando per $t$ si ottiene $vt=s$. Dividendo per $v\\ne0$ segue $t=\\dfrac{s}{v}$.'),
  q('Quali sono le soluzioni reali di $x^2-9=0$?', '$x=-3$ oppure $x=3$', ['$x=3$ soltanto', '$x=-9$ oppure $x=9$', 'Nessuna soluzione reale'], 'L’equazione equivale a $x^2=9$. Entrambi i numeri $3$ e $-3$ hanno quadrato uguale a $9$.'),
  q('Quale valore risolve $\\dfrac{x+1}{x-1}=3$?', '$x=2$', ['$x=1$', '$x=-2$', '$x=\\dfrac{1}{2}$'], 'La condizione è $x\\ne1$. Moltiplicando per $x-1$ si ottiene $x+1=3x-3$, quindi $x=2$, che soddisfa la condizione.'),
]);

competenza('disequazioni', 'Disequazioni e condizioni di esistenza', 'precorso', 'equazioni-polinomiali', [
  q('Qual è l’insieme delle soluzioni di $-2x>6$?', '$x<-3$', ['$x>-3$', '$x<3$', '$x>3$'], 'Dividendo per il numero negativo $-2$ si inverte il verso della disequazione. Quindi $x<-3$.'),
  q('Qual è il dominio di $\\sqrt{\\dfrac{x-3}{x+2}}$?', '$(-\\infty,-2)\\cup[3,+\\infty)$', ['$[-2,3]$', '$(-2,3]$', '$(-\\infty,-2)\\cup(3,+\\infty)$'], 'Il denominatore esclude $-2$ e il radicando deve essere non negativo. Lo studio del segno dà $x<-2$ oppure $x\\ge3$.'),
  q('Qual è l’insieme delle soluzioni di $x^2-4<0$?', '$-2<x<2$', ['$x<-2$ oppure $x>2$', '$x<2$', '$-2\\le x\\le2$'], 'La parabola ha zeri $-2$ e $2$ ed è rivolta verso l’alto. Il polinomio è strettamente negativo tra gli zeri, che restano esclusi.'),
  q('Quali valori soddisfano $|x-1|\\le2$?', '$-1\\le x\\le3$', ['$x\\le-1$ oppure $x\\ge3$', '$-2\\le x\\le2$', '$-3\\le x\\le1$'], 'La condizione equivale a $-2\\le x-1\\le2$. Aggiungendo $1$ ai tre membri si ottiene $-1\\le x\\le3$.'),
]);

competenza('funzioni', 'Funzioni, dominio e lettura delle variazioni', 'analisi-1', 'insiemi', [
  q('Se $f(x)=2x+1$ e $g(x)=x^2$, quanto vale $f(g(3))$?', '$19$', ['$49$', '$7$', '$10$'], 'Si applica prima $g$: $g(3)=9$. Poi $f(9)=2\\cdot9+1=19$.'),
  q('Qual è il dominio reale di $f(x)=\\log(x-2)$?', '$x>2$', ['$x\\ge2$', '$x<2$', '$x\\ne2$'], 'L’argomento del logaritmo deve essere strettamente positivo: $x-2>0$, quindi $x>2$.'),
  q('Qual è la funzione inversa di $f(x)=3x-2$ su $\\mathbb{R}$?', '$f^{-1}(x)=\\dfrac{x+2}{3}$', ['$f^{-1}(x)=\\dfrac{x-2}{3}$', '$f^{-1}(x)=\\dfrac{1}{3x-2}$', '$f^{-1}(x)=3x+2$'], 'Ponendo $y=3x-2$ e isolando $x$ si ottiene $x=\\dfrac{y+2}{3}$. Scambiando i nomi delle variabili segue la formula dell’inversa.'),
  q('La funzione $f(x)=-2x+5$ su $\\mathbb{R}$ è:', 'strettamente decrescente', ['strettamente crescente', 'costante', 'pari'], 'Il coefficiente di $x$ è negativo. Se $x$ aumenta di $h>0$, il valore della funzione varia di $-2h<0$.'),
]);

competenza('geometria', 'Geometria e coordinate', 'precorso', 'geometria-analitica', [
  q('Qual è la distanza tra $A(1,2)$ e $B(4,6)$?', '$5$', ['$7$', '$25$', '$\\sqrt{7}$'], 'Le differenze di coordinate sono $3$ e $4$. Per Pitagora, la distanza è $\\sqrt{3^2+4^2}=5$.'),
  q('Qual è il coefficiente angolare della retta passante per $(1,2)$ e $(3,8)$?', '$3$', ['$\\dfrac{1}{3}$', '$6$', '$4$'], 'Il coefficiente angolare è il rapporto tra le variazioni: $m=\\dfrac{8-2}{3-1}=3$.'),
  q('La circonferenza $(x-2)^2+(y+1)^2=9$ ha:', 'centro $(2,-1)$ e raggio $3$', ['centro $(-2,1)$ e raggio $3$', 'centro $(2,-1)$ e raggio $9$', 'centro $(2,1)$ e raggio $3$'], 'La forma è $(x-a)^2+(y-b)^2=r^2$. Si leggono $a=2$, $b=-1$ e $r=\\sqrt9=3$.'),
  q('Un triangolo rettangolo ha cateti $6\\,\\mathrm{cm}$ e $8\\,\\mathrm{cm}$. Qual è la sua area?', '$24\\,\\mathrm{cm^2}$', ['$48\\,\\mathrm{cm^2}$', '$14\\,\\mathrm{cm^2}$', '$40\\,\\mathrm{cm^2}$'], 'I cateti sono perpendicolari e possono essere base e altezza. L’area è $\\dfrac{6\\cdot8}{2}=24\\,\\mathrm{cm^2}$.'),
]);

competenza('trigonometria', 'Angoli e relazioni trigonometriche', 'precorso', 'goniometriche', [
  q('A quanti radianti corrispondono $150^\\circ$?', '$\\dfrac{5\\pi}{6}$', ['$\\dfrac{3\\pi}{5}$', '$\\dfrac{5\\pi}{3}$', '$\\dfrac{\\pi}{6}$'], 'Si moltiplicano i gradi per $\\dfrac{\\pi}{180}$: $150\\cdot\\dfrac{\\pi}{180}=\\dfrac{5\\pi}{6}$.'),
  q('Se $\\sin\\theta=\\dfrac35$ e $\\theta$ è nel secondo quadrante, quanto vale $\\cos\\theta$?', '$-\\dfrac45$', ['$\\dfrac45$', '$-\\dfrac35$', '$\\dfrac25$'], 'Dall’identità fondamentale si ottiene $\\cos^2\\theta=1-\\dfrac9{25}=\\dfrac{16}{25}$. Nel secondo quadrante il coseno è negativo, quindi vale $-\\dfrac45$.'),
  q('Quali sono le soluzioni di $\\sin x=0$ nell’intervallo $[0,2\\pi)$?', '$0$ e $\\pi$', ['$0$, $\\pi$ e $2\\pi$', '$\\dfrac{\\pi}{2}$ e $\\dfrac{3\\pi}{2}$', '$\\pi$ soltanto'], 'Il seno si annulla nei multipli interi di $\\pi$. Nell’intervallo indicato appartengono $0$ e $\\pi$, mentre $2\\pi$ è escluso.'),
  q('In un triangolo rettangolo l’ipotenusa è $10\\,\\mathrm{cm}$ e un angolo acuto è $30^\\circ$. Quanto misura il cateto opposto a quell’angolo?', '$5\\,\\mathrm{cm}$', ['$5\\sqrt3\\,\\mathrm{cm}$', '$10\\sqrt3\\,\\mathrm{cm}$', '$20\\,\\mathrm{cm}$'], 'Il cateto opposto è l’ipotenusa moltiplicata per il seno dell’angolo: $10\\sin30^\\circ=10\\cdot\\dfrac12=5\\,\\mathrm{cm}$.'),
]);

competenza('logaritmi', 'Esponenziali e logaritmi', 'precorso', 'logaritmiche', [
  q('Quale valore risolve $2^{x+1}=16$?', '$x=3$', ['$x=4$', '$x=2$', '$x=7$'], 'Poiché $16=2^4$, si uguagliano gli esponenti: $x+1=4$, quindi $x=3$.'),
  q('Per $a,b>0$, quanto vale $\\log(ab)$?', '$\\log a+\\log b$', ['$\\log a\\cdot\\log b$', '$\\log(a+b)$', '$\\dfrac{\\log a}{\\log b}$ sempre'], 'Il logaritmo di un prodotto di fattori positivi è la somma dei loro logaritmi: $\\log(ab)=\\log a+\\log b$.'),
  q('Quale valore risolve $\\log_3(x-1)=2$?', '$x=10$', ['$x=7$', '$x=9$', '$x=3$'], 'La definizione di logaritmo dà $x-1=3^2=9$. Quindi $x=10$, che soddisfa anche $x>1$.'),
  q('Per $k>0$, quando $t$ aumenta la funzione $C(t)=C_0e^{-kt}$, con $C_0>0$:', 'diminuisce restando positiva', ['aumenta senza limite', 'diventa negativa dopo un certo tempo', 'resta costante'], 'L’esponente $-kt$ diminuisce con $t$. L’esponenziale resta positivo e diminuisce, quindi anche $C(t)$ diminuisce senza cambiare segno.'),
]);

competenza('logica', 'Condizioni, negazioni e deduzioni', 'precorso', 'logica', [
  q('Qual è la negazione di «Tutti gli studenti hanno consegnato»?', 'Almeno uno studente non ha consegnato', ['Nessuno studente ha consegnato', 'Almeno uno studente ha consegnato', 'Tutti gli studenti hanno consegnato in ritardo'], 'Per rendere falsa una proposizione universale basta un controesempio: esiste almeno uno studente che non ha consegnato.'),
  q('Si sa che «se piove, la strada è bagnata» e che la strada non è bagnata. Che cosa segue necessariamente?', 'Non piove', ['Piove', 'La strada è coperta', 'Non si può concludere nulla sulla pioggia'], 'Si applica la contrapposizione: dall’implicazione $P\\Rightarrow B$ e da $\\neg B$ segue $\\neg P$.'),
  q('Essere divisibile per $4$ è, per essere divisibile per $2$:', 'una condizione sufficiente, ma non necessaria', ['una condizione necessaria, ma non sufficiente', 'una condizione necessaria e sufficiente', 'né necessaria né sufficiente'], 'Ogni multiplo di $4$ è multiplo di $2$. Il numero $6$ è divisibile per $2$ ma non per $4$, quindi la condizione non è necessaria.'),
  q('La proposizione «$P$ oppure $Q$», con oppure inclusivo, è falsa quando:', 'sia $P$ sia $Q$ sono false', ['solo $P$ è vera', 'solo $Q$ è vera', 'sia $P$ sia $Q$ sono vere'], 'La disgiunzione inclusiva è vera se almeno una proposizione è vera. È quindi falsa soltanto quando entrambe sono false.'),
]);

competenza('successioni', 'Progressioni e successioni', 'matematica-superiori-4', 'successioni-e-progressioni', [
  q('Una progressione aritmetica ha $a_1=3$ e ragione $4$. Quanto vale $a_5$?', '$19$', ['$23$', '$15$', '$12$'], 'Dal primo al quinto termine ci sono quattro incrementi. Quindi $a_5=3+(5-1)\\cdot4=19$.'),
  q('Una progressione geometrica ha $a_1=2$ e ragione $3$. Quanto vale $a_4$?', '$54$', ['$24$', '$18$', '$162$'], 'La formula è $a_n=a_1q^{n-1}$. Quindi $a_4=2\\cdot3^3=54$.'),
  q('Quanto vale $1+2+\\cdots+20$?', '$210$', ['$200$', '$220$', '$400$'], 'La somma dei primi $n$ interi è $\\dfrac{n(n+1)}2$. Per $n=20$ si ottiene $\\dfrac{20\\cdot21}2=210$.'),
  q('Qual è il limite di $a_n=\\dfrac{2n+1}{n+3}$ per $n\\to+\\infty$?', '$2$', ['$0$', '$1$', '$+\\infty$'], 'Dividendo numeratore e denominatore per $n$ si ottiene $\\dfrac{2+\\dfrac1n}{1+\\dfrac3n}$. I termini $\\dfrac1n$ e $\\dfrac3n$ tendono a zero, quindi il limite è $2$.'),
]);

competenza('complessi', 'Numeri complessi', 'analisi-1', 'numeri-complessi', [
  q('Quanto vale $(1+i)(1-i)$?', '$2$', ['$0$', '$2i$', '$-2$'], 'Il prodotto è $1-i^2$. Poiché $i^2=-1$, si ottiene $1-(-1)=2$.'),
  q('Qual è il modulo di $3-4i$?', '$5$', ['$7$', '$1$', '$25$'], 'Il modulo è $\\sqrt{3^2+(-4)^2}=\\sqrt{25}=5$.'),
  q('Quanto vale $\\dfrac{1}{i}$?', '$-i$', ['$i$', '$1$', '$-1$'], 'Moltiplicando numeratore e denominatore per $i$ si ottiene $\\dfrac{i}{i^2}=\\dfrac{i}{-1}=-i$.'),
  q('Qual è il coniugato di $-2+3i$?', '$-2-3i$', ['$2+3i$', '$2-3i$', '$-3+2i$'], 'Il coniugato conserva la parte reale e cambia il segno della parte immaginaria. Quindi è $-2-3i$.'),
]);

competenza('limiti', 'Limiti e continuità', 'analisi-1', 'limiti', [
  q('Quanto vale $\\displaystyle\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$?', '$4$', ['$0$', '$2$', 'Il limite non esiste'], 'Per $x\\ne2$ il rapporto è $x+2$. Il limite è quindi $2+2=4$, anche se il rapporto originario non è definito in $2$.'),
  q('Quanto vale $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin(3x)}{x}$?', '$3$', ['$1$', '$0$', '$\\dfrac13$'], 'Si scrive $\\dfrac{\\sin(3x)}x=3\\dfrac{\\sin(3x)}{3x}$. Il secondo fattore tende a $1$, quindi il limite è $3$.'),
  q('Si pone $f(x)=\\dfrac{x^2-1}{x-1}$ per $x\\ne1$ e $f(1)=k$. Per quale $k$ la funzione è continua in $1$?', '$k=2$', ['$k=0$', '$k=1$', 'Nessun valore di $k$'], 'Per $x\\ne1$ vale $f(x)=x+1$, il cui limite in $1$ è $2$. La continuità richiede $f(1)=2$.'),
  q('Quanto vale $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{3x^2+x}{x^2+2}$?', '$3$', ['$0$', '$1$', '$+\\infty$'], 'Dividendo per $x^2$ si ottiene $\\dfrac{3+\\dfrac1x}{1+\\dfrac2{x^2}}$. I termini con potenze negative tendono a zero, quindi il limite è $3$.'),
]);

competenza('derivate', 'Derivate e composizione', 'analisi-1', 'derivate', [
  q('Qual è la derivata di $f(x)=e^{3x^2}$?', '$6xe^{3x^2}$', ['$e^{3x^2}$', '$3e^{3x^2}$', '$6xe^{6x}$'], 'Si usa la derivata della composta: la derivata dell’esponenziale è l’esponenziale stesso, moltiplicato per la derivata $6x$ dell’esponente.'),
  q('Qual è la derivata di $f(x)=x\\sin x$?', '$\\sin x+x\\cos x$', ['$\\cos x$', '$x\\cos x$', '$\\sin x+\\cos x$'], 'La regola del prodotto dà $f\\prime(x)=1\\cdot\\sin x+x\\cdot\\cos x$.'),
  q('La retta tangente a $y=x^2$ nel punto con ascissa $2$ ha equazione:', '$y=4x-4$', ['$y=2x$', '$y=4x+4$', '$y=x+2$'], 'Il punto è $(2,4)$ e la derivata vale $2x=4$. Quindi $y-4=4(x-2)$, ossia $y=4x-4$.'),
  q('Per $f(x)=x^3-3x$, dove è strettamente positiva la derivata?', '$x<-1$ oppure $x>1$', ['$-1<x<1$', '$x>0$', 'Per ogni $x\\ne0$'], 'La derivata è $3x^2-3=3(x^2-1)$. È positiva se $x^2>1$, quindi per $x<-1$ oppure $x>1$.'),
]);

competenza('integrali', 'Integrali e teorema fondamentale', 'analisi-1', 'integrali', [
  q('Una primitiva di $2x e^{x^2}$ è:', '$e^{x^2}$', ['$2e^{x^2}$', '$\\dfrac{e^{x^2}}{2x}$', '$x^2e^{x^2}$'], 'L’integrando contiene la derivata $2x$ dell’esponente. Con $u=x^2$ l’integrale diventa $\\int e^u\\,du=e^u+C$.'),
  q('Quanto vale $\\displaystyle\\int_0^2 x\\,dx$?', '$2$', ['$4$', '$1$', '$0$'], 'Una primitiva è $\\dfrac{x^2}{2}$. Tra $0$ e $2$ la differenza è $\\dfrac{4}{2}-0=2$.'),
  q('Se $F(x)=\\displaystyle\\int_0^x\\cos(t^2)\\,dt$, quanto vale $F\\prime(x)$?', '$\\cos(x^2)$', ['$-2x\\sin(x^2)$', '$\\sin(x^2)$', '$\\dfrac{\\sin(x^2)}{2x}$ per ogni $x$'], 'L’integrando è continuo. Per il teorema fondamentale del calcolo la derivata rispetto all’estremo superiore è il valore dell’integrando in quell’estremo.'),
  q('Qual è $\\displaystyle\\int x\\,dx$?', '$\\dfrac{x^2}{2}+C$', ['$x^2+C$', '$\\dfrac{x^2}{2}$ come unica primitiva', '$1+C$'], 'La formula delle potenze dà $\\int x^1\\,dx=\\dfrac{x^{2}}2+C$. La costante rappresenta tutte le primitive.'),
]);

competenza('serie', 'Serie numeriche e criteri elementari', 'analisi-1', 'serie', [
  q('Quanto vale $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\dfrac12\\right)^n$?', '$2$', ['$1$', '$\\dfrac12$', 'La serie diverge'], 'È una serie geometrica di primo termine $1$ e ragione $\\dfrac12$. La somma è $\\dfrac{1}{1-\\dfrac12}=2$.'),
  q('La condizione $a_n\\to0$ è, per la convergenza di $\\sum a_n$:', 'necessaria ma non sufficiente', ['sufficiente ma non necessaria', 'necessaria e sufficiente', 'né necessaria né sufficiente'], 'Una serie convergente ha termine generale che tende a zero. La serie armonica ha termini che tendono a zero ma diverge, quindi la condizione non è sufficiente.'),
  q('La serie $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^2}$:', 'converge', ['diverge a $+\\infty$', 'oscilla senza limite', 'ha somma $0$'], 'È una serie armonica generalizzata con esponente $p=2>1$, quindi converge. I termini positivi escludono che la somma sia zero.'),
  q('Per la serie $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n}{3^n}$, il limite del rapporto tra termini consecutivi è:', '$\\dfrac13$', ['$3$', '$1$', '$0$'], 'Il rapporto è $\\dfrac{n+1}{3^{n+1}}\\dfrac{3^n}{n}=\\dfrac{n+1}{3n}$, che tende a $\\dfrac13<1$.'),
]);

competenza('equazioni-differenziali', 'Equazioni differenziali e condizioni iniziali', 'analisi-1', 'equazioni-differenziali', [
  q('Quale funzione risolve $y\\prime=2y$, $y(0)=3$?', '$y(x)=3e^{2x}$', ['$y(x)=2e^{3x}$', '$y(x)=3e^x$', '$y(x)=2x+3$'], 'Le soluzioni dell’equazione sono $Ce^{2x}$. La condizione iniziale impone $C=3$.'),
  q('Qual è l’ordine dell’equazione $y^{\\prime\\prime}+y\\prime-y=0$?', 'Secondo', ['Primo', 'Terzo', 'Zero'], 'La derivata di ordine più alto presente è la derivata seconda, quindi l’equazione è del secondo ordine.'),
  q('Quale funzione risolve $y\\prime=x$, $y(0)=2$?', '$y(x)=\\dfrac{x^2}{2}+2$', ['$y(x)=x^2+2$', '$y(x)=x+2$', '$y(x)=\\dfrac{x^2}{2}$'], 'Integrando si ottiene $y=\\dfrac{x^2}{2}+C$. Ponendo $x=0$, la condizione iniziale dà $C=2$.'),
  q('Per $y\\prime+2y=0$, quale espressione è un fattore integrante?', '$e^{2x}$', ['$e^{-2x}$', '$2x$', '$x^2$'], 'Il fattore integrante è $e^{\\int2\\,dx}=e^{2x}$. Moltiplicando l’equazione si ottiene $(e^{2x}y)\\prime=0$.'),
]);

competenza('multivariabile', 'Derivate parziali e geometria locale', 'analisi-2', 'calcolo-differenziale', [
  q('Per $f(x,y)=x^2y+3y^2$, quanto vale $\\dfrac{\\partial f}{\\partial x}(2,-1)$?', '$-4$', ['$-2$', '$4$', '$8$'], 'Derivando rispetto a $x$, $y$ resta costante: $f_x=2xy$. Nel punto indicato vale $2\\cdot2\\cdot(-1)=-4$.'),
  q('Se $\\nabla f(P)=(2,-1)$ e $u=\\left(\\dfrac35,\\dfrac45\\right)$, quanto vale la derivata direzionale di una funzione differenziabile lungo $u$?', '$\\dfrac25$', ['$2$', '$\\dfrac{14}{5}$', '$-\\dfrac25$'], 'Il vettore $u$ ha norma uno. La derivata direzionale è $\\nabla f(P)\\cdot u=\\dfrac65-\\dfrac45=\\dfrac25$.'),
  q('Qual è il dominio reale di $\\log(1-x^2-y^2)$?', '$x^2+y^2<1$', ['$x^2+y^2\\le1$', '$x^2+y^2>1$', '$x^2+y^2\\ne1$'], 'L’argomento del logaritmo deve essere positivo: $1-x^2-y^2>0$. Ne segue il disco aperto $x^2+y^2<1$.'),
  q('Per $f(x,y)=x^2+2y^2$, il punto $(0,0)$ è:', 'un minimo assoluto stretto', ['un massimo assoluto stretto', 'un punto di sella', 'un punto non stazionario'], 'Entrambi i termini sono non negativi e si annullano insieme solo nell’origine. Quindi $f(0,0)=0$ è un minimo assoluto stretto.'),
]);

competenza('integrali-multipli', 'Domini e integrali multipli', 'analisi-2', 'integrali-doppi-e-tripli', [
  q('Quanto vale $\\displaystyle\\int_0^1\\int_0^2 xy\\,dy\\,dx$?', '$1$', ['$2$', '$\\dfrac12$', '$4$'], 'L’integrale interno vale $x\\left[\\dfrac{y^2}{2}\\right]_0^2=2x$. Integrando tra $0$ e $1$ si ottiene $[x^2]_0^1=1$.'),
  q('Il dominio $D=\\{(x,y):0\\le x\\le1,\\ 0\\le y\\le x\\}$ ha area:', '$\\dfrac12$', ['$1$', '$2$', '$\\dfrac14$'], 'L’area si ottiene da $\\int_0^1\\int_0^x1\\,dy\\,dx=\\int_0^1x\\,dx=\\dfrac12$.'),
  q('Nel cambio di coordinate $x=r\\cos\\theta$, $y=r\\sin\\theta$, con $r\\ge0$, quale elemento di area si usa?', '$r\\,dr\\,d\\theta$', ['$dr\\,d\\theta$', '$r^2\\,dr\\,d\\theta$', '$\\dfrac1r\\,dr\\,d\\theta$'], 'Il valore assoluto del determinante jacobiano delle coordinate polari è $r$. Perciò $dx\\,dy=r\\,dr\\,d\\theta$.'),
  q('Sul rettangolo $D=[0,2]\\times[0,3]$, quanto vale $\\displaystyle\\iint_D 4\\,dx\\,dy$?', '$24$', ['$12$', '$20$', '$4$'], 'L’integrando è costante e il rettangolo ha area $2\\cdot3=6$. L’integrale è $4\\cdot6=24$.'),
]);

competenza('campi', 'Campi vettoriali e potenziali', 'analisi-2', 'campi-vettoriali', [
  q('Quale funzione è un potenziale del campo $F(x,y)=(2x,2y)$?', '$\\phi(x,y)=x^2+y^2$', ['$\\phi(x,y)=2x+2y$', '$\\phi(x,y)=xy$', '$\\phi(x,y)=x^2-y^2$'], 'Un potenziale soddisfa $\\nabla\\phi=F$. Derivando $x^2+y^2$ si ottengono proprio le componenti $(2x,2y)$.'),
  q('Per $F=\\nabla\\phi$ e $\\phi(x,y)=x^2+y^2$, quanto vale l’integrale di linea da $(0,0)$ a $(1,2)$?', '$5$', ['$3$', '$-5$', '$\\sqrt5$'], 'Per un campo gradiente l’integrale è la differenza dei valori del potenziale: $(1^2+2^2)-0=5$.'),
  q('Se $F=\\nabla\\phi$ su tutto un aperto e una curva chiusa regolare a tratti è contenuta in quell’aperto, l’integrale di $F$ lungo la curva vale:', '$0$', ['$1$', 'sempre la lunghezza della curva', 'sempre l’area racchiusa'], 'La differenza di potenziale tra punto finale e iniziale è nulla, perché i due punti coincidono. Quindi l’integrale è zero.'),
  q('Qual è la divergenza di $F(x,y)=(x^2,3y)$?', '$2x+3$', ['$x^2+3y$', '$2x+3y$', '$2x$'], 'La divergenza è la somma delle derivate delle componenti rispetto alle coordinate corrispondenti: $\\partial_x(x^2)+\\partial_y(3y)=2x+3$.'),
]);

competenza('analisi-complessa', 'Olomorfia e residui', 'analisi-3', 'integrali-complessi-e-residui', [
  q('Qual è la derivata complessa di $f(z)=z^3$?', '$3z^2$', ['$3|z|^2$', '$z^2$', '$\\overline z^2$'], 'I polinomi sono olomorfi e si derivano con la regola delle potenze. Quindi $f\\prime(z)=3z^2$.'),
  q('Qual è il residuo in $z=2$ di $f(z)=\\dfrac{3}{z-2}$?', '$3$', ['$2$', '$1$', '$0$'], 'In un polo semplice il residuo è il coefficiente di $(z-2)^{-1}$ nello sviluppo di Laurent. Qui tale coefficiente è $3$.'),
  q('La circonferenza $|z|=2$ è percorsa una volta in senso antiorario. Quanto vale $\\displaystyle\\oint\\dfrac{1}{z}\\,dz$?', '$2\\pi i$', ['$0$', '$-2\\pi i$', '$2\\pi$'], 'La curva racchiude il polo semplice in $0$, di residuo $1$. Per il teorema dei residui l’integrale vale $2\\pi i\\cdot1$.'),
  q('La funzione $f(z)=\\overline z$ è complessamente derivabile in $0$?', 'No, il rapporto incrementale dipende dalla direzione', ['Sì, con derivata $1$', 'Sì, con derivata $-1$', 'Sì, con derivata $0$'], 'Il rapporto è $\\dfrac{\\overline h}{h}$. Per $h$ reale vale $1$, per $h$ immaginario puro vale $-1$: il limite non è unico.'),
]);

competenza('misura', 'Misura e convergenza di integrali', 'analisi-3', 'misura-e-integrale-di-lebesgue', [
  q('Qual è la misura di Lebesgue di $\\mathbb{Q}\\cap[0,1]$?', '$0$', ['$1$', '$+\\infty$', '$\\dfrac12$'], 'L’insieme dei razionali è numerabile. Ogni singleton ha misura zero e l’unione numerabile conserva misura zero.'),
  q('Su $[0,1]$, sia $f_n=\\mathbf1_{\\left(0,\\dfrac1n\\right)}$. Quanto vale $\\int_0^1 f_n(x)\\,dx$?', '$\\dfrac1n$', ['$n$', '$1$', '$0$ per ogni $n$'], 'L’integrale di una funzione indicatrice è la misura del suo insieme. L’intervallo $\\left(0,\\dfrac1n\\right)$ ha lunghezza $\\dfrac1n$.'),
  q('Due funzioni integrabili coincidono quasi ovunque. I loro integrali di Lebesgue sullo stesso dominio:', 'sono uguali', ['differiscono sempre', 'sono entrambi zero', 'sono uguali solo se coincidono in ogni punto'], 'La loro differenza è nulla fuori da un insieme di misura zero. Il suo integrale è quindi zero e gli integrali coincidono.'),
  q('Nel teorema di convergenza dominata, una dominazione valida richiede una funzione $g$:', 'integrabile, indipendente da $n$, con $|f_n|\\le g$ quasi ovunque', ['qualunque, purché positiva', 'dipendente da $n$, senza controllo degli integrali', 'costante su un dominio di misura infinita, senza altre condizioni'], 'La funzione dominante deve essere integrabile e comune a tutta la successione. Insieme alla convergenza quasi ovunque, questo controllo consente il passaggio al limite sotto l’integrale.'),
]);

competenza('spazi-funzionali', 'Norme, ortogonalità e operatori', 'analisi-3', 'spazi-lp-e-hilbert', [
  q('Nel prodotto scalare euclideo, i vettori $(1,2)$ e $(2,-1)$ sono:', 'ortogonali', ['uguali', 'paralleli', 'entrambi di norma uno'], 'Il prodotto scalare è $1\\cdot2+2\\cdot(-1)=0$. Quindi i vettori sono ortogonali.'),
  q('Qual è la norma $L^2(0,1)$ della funzione $f(x)=x$?', '$\\dfrac1{\\sqrt3}$', ['$\\dfrac13$', '$\\dfrac12$', '$1$'], 'La norma è $\\left(\\int_0^1x^2\\,dx\\right)^{\\frac12}=\\left(\\dfrac13\\right)^{\\frac12}=\\dfrac1{\\sqrt3}$.'),
  q('Qual è la proiezione ortogonale di $(2,3)$ sull’asse delle ascisse?', '$(2,0)$', ['$(0,3)$', '$(2,3)$', '$(0,0)$'], 'L’asse delle ascisse contiene i vettori $(a,0)$. La differenza $(2,3)-(2,0)=(0,3)$ è ortogonale all’asse.'),
  q('Per l’operatore $T(x,y)=(2x,3y)$ su $\\mathbb{R}^2$ con norma euclidea, qual è la norma di operatore?', '$3$', ['$2$', '$5$', '$\\sqrt{13}$'], 'Si ha $\\|T(x,y)\\|^2=4x^2+9y^2\\le9(x^2+y^2)$. L’uguaglianza è raggiunta per $(0,1)$, quindi la norma è $3$.'),
]);

competenza('trasformate', 'Trasformate e convenzioni', 'analisi-3', 'trasformata-di-laplace', [
  q('Per $s>0$, quanto vale $\\displaystyle\\int_0^{\\infty}e^{-st}\\,dt$?', '$\\dfrac1s$', ['$s$', '$0$', '$\\dfrac1{s^2}$'], 'Una primitiva è $-\\dfrac1s e^{-st}$. Il valore all’infinito è zero e quello in $0$ è $-\\dfrac1s$, quindi l’integrale è $\\dfrac1s$.'),
  q('La trasformata di Laplace di $e^{2t}$, per $s>2$, è:', '$\\dfrac1{s-2}$', ['$\\dfrac1{s+2}$', '$e^{2s}$', '$\\dfrac2s$'], 'L’integrando diventa $e^{-(s-2)t}$. Applicando l’integrale esponenziale si ottiene $\\dfrac1{s-2}$ per $s-2>0$.'),
  q('Se $F(s)$ è la trasformata di Laplace di $f(t)$ e valgono le ipotesi per trasformare la derivata, la trasformata di $f\\prime(t)$ è:', '$sF(s)-f(0^+)$', ['$sF(s)$ in ogni caso', '$F(s)-f(0^+)$', '$\\dfrac{F(s)}s$'], 'Integrando per parti compare il termine al bordo $-f(0^+)$ e l’integrale restante è $sF(s)$.'),
  q('Per $s>0$, la trasformata di Laplace di $t$ è:', '$\\dfrac1{s^2}$', ['$\\dfrac1s$', '$s$', '$\\dfrac2{s^3}$'], 'Integrando per parti $\\int_0^\\infty te^{-st}\\,dt$ si ottiene $\\dfrac1s\\int_0^\\infty e^{-st}\\,dt=\\dfrac1{s^2}$.'),
]);

competenza('sistemi', 'Sistemi lineari e rango', 'algebra-lineare', 'sistemi-lineari', [
  q('Quante soluzioni ha $\\begin{cases}x+2y=3\\\\2x+4y=7\\end{cases}$?', 'Nessuna', ['Una', 'Infinite con un parametro libero', 'Infinite con due parametri liberi'], 'Sottraendo due volte la prima equazione dalla seconda si ottiene $0=1$. Il sistema è incompatibile.'),
  q('Un sistema omogeneo con $4$ incognite ha matrice di rango $3$. Qual è la dimensione dello spazio delle soluzioni?', '$1$', ['$3$', '$4$', '$0$'], 'Per il teorema rango-nullità, la dimensione del nucleo è il numero di colonne meno il rango: $4-3=1$.'),
  q('Quale coppia risolve $\\begin{cases}x+y=5\\\\x-y=1\\end{cases}$?', '$(3,2)$', ['$(2,3)$', '$(4,1)$', '$(5,0)$'], 'Sommando le equazioni si ottiene $2x=6$, quindi $x=3$. Dalla prima segue $y=2$.'),
  q('Per il teorema di Rouché-Capelli, un sistema $Ax=b$ è compatibile quando:', '$\\operatorname{rank}(A)=\\operatorname{rank}(A\\mid b)$', ['$\\det A=0$ in ogni caso', '$\\operatorname{rank}(A)<\\operatorname{rank}(A\\mid b)$', 'il numero di equazioni è maggiore del numero di incognite'], 'Il sistema ammette soluzioni esattamente quando il rango della matrice dei coefficienti coincide con quello della matrice completa.'),
]);

competenza('matrici', 'Matrici, indipendenza e applicazioni lineari', 'algebra-lineare', 'matrici', [
  q('Qual è il determinante di $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$?', '$-2$', ['$2$', '$10$', '$-5$'], 'Per una matrice $2\\times2$ il determinante è $ad-bc$. Quindi $1\\cdot4-2\\cdot3=4-6=-2$.'),
  q('I vettori $(1,2)$ e $(2,4)$ sono:', 'linearmente dipendenti', ['linearmente indipendenti', 'ortogonali', 'entrambi di norma uno'], 'Il secondo vettore è il doppio del primo. Esiste quindi una combinazione lineare non banale uguale a zero.'),
  q('Se $A$ è una matrice $2\\times3$ e $B$ una matrice $3\\times4$, il prodotto $AB$ ha dimensione:', '$2\\times4$', ['$3\\times3$', '$4\\times2$', 'Il prodotto non è definito'], 'Le dimensioni interne sono entrambe $3$, quindi il prodotto è definito. Le dimensioni esterne determinano il risultato $2\\times4$.'),
  q('Quale applicazione da $\\mathbb{R}$ a $\\mathbb{R}$ è lineare?', '$T(x)=3x$', ['$T(x)=3x+1$', '$T(x)=x^2$', '$T(x)=|x|$'], 'La moltiplicazione per una costante conserva somme e prodotti per scalari. Le altre applicazioni non soddisfano entrambe le proprietà.'),
]);

competenza('autovalori', 'Autovalori e diagonalizzazione', 'algebra-lineare', 'autovalori', [
  q('Gli autovalori della matrice $\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}$ sono:', '$2$ e $5$', ['$0$ e $7$', '$1$ e $10$', '$-2$ e $-5$'], 'Per una matrice diagonale gli elementi sulla diagonale sono gli autovalori. Il polinomio caratteristico è $(2-\\lambda)(5-\\lambda)$.'),
  q('Se $Av=\\lambda v$ e $v\\ne0$, che cosa rappresenta $v$?', 'Un autovettore associato a $\\lambda$', ['Sempre un vettore del nucleo di $A$', 'Un autovalore di $A$', 'Sempre un vettore unitario'], 'L’equazione $Av=\\lambda v$, con vettore non nullo, è la definizione di autovettore associato all’autovalore $\\lambda$.'),
  q('Una matrice reale $2\\times2$ con due autovalori reali distinti:', 'è diagonalizzabile su $\\mathbb{R}$', ['non è mai diagonalizzabile', 'ha necessariamente determinante zero', 'è necessariamente simmetrica'], 'Autovettori associati ad autovalori distinti sono indipendenti. Due autovettori indipendenti formano una base di $\\mathbb{R}^2$.'),
  q('Se una matrice quadrata ha autovalore $0$, allora:', 'non è invertibile', ['è la matrice nulla', 'è invertibile', 'ha tutti gli autovalori nulli'], 'Esiste $v\\ne0$ con $Av=0$. Il nucleo è quindi non banale e la matrice non può essere invertibile.'),
]);

competenza('probabilita', 'Probabilità e conteggio', 'statistica', 'probabilita-e-combinatoria', [
  q('Si lancia un dado equo a sei facce. Qual è la probabilità di ottenere un numero pari?', '$\\dfrac12$', ['$\\dfrac16$', '$\\dfrac23$', '$\\dfrac13$'], 'Gli esiti pari sono $2$, $4$ e $6$: tre esiti su sei equiprobabili. Quindi la probabilità è $\\dfrac36=\\dfrac12$.'),
  q('In quanti modi si possono scegliere $2$ persone da un gruppo di $5$, senza distinguere l’ordine?', '$10$', ['$20$', '$25$', '$5$'], 'Si usano le combinazioni: $\\binom52=\\dfrac{5\\cdot4}{2}=10$. Dividere per $2$ elimina i due ordini della stessa coppia.'),
  q('Due monete eque vengono lanciate indipendentemente. Qual è la probabilità di ottenere due teste?', '$\\dfrac14$', ['$\\dfrac12$', '$\\dfrac34$', '$1$'], 'Per indipendenza si moltiplicano le probabilità: $\\dfrac12\\cdot\\dfrac12=\\dfrac14$.'),
  q('Se $P(A)=0{,}3$, quanto vale $P(A^c)$?', '$0{,}7$', ['$0{,}3$', '$1{,}3$', '$-0{,}3$'], 'Un evento e il suo complementare hanno probabilità che sommano a uno. Quindi $P(A^c)=1-0{,}3=0{,}7$.'),
]);

competenza('condizionata', 'Condizionamento e indipendenza', 'statistica', 'probabilita-condizionata', [
  q('Su $50$ studenti, $20$ usano l’autobus e tra questi $12$ sono puntuali. Tra gli altri $30$, $15$ sono puntuali. Si sceglie a caso uno studente tra quelli che usano l’autobus. Qual è la probabilità che sia puntuale?', '$\\dfrac35$', ['$\\dfrac6{25}$', '$\\dfrac25$', '$\\dfrac49$'], 'Il gruppo di riferimento contiene $20$ studenti, di cui $12$ puntuali. Quindi la probabilità richiesta è $\\dfrac{12}{20}=\\dfrac35$.'),
  q('Se $P(A\\cap B)=0{,}12$ e $P(B)=0{,}3$, quanto vale $P(A\\mid B)$?', '$0{,}4$', ['$0{,}036$', '$0{,}18$', '$2{,}5$'], 'La probabilità condizionata è $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0{,}12}{0{,}3}=0{,}4$.'),
  q('Se $A$ e $B$ sono indipendenti, $P(A)=0{,}4$ e $P(B)=0{,}5$, quanto vale $P(A\\cap B)$?', '$0{,}2$', ['$0{,}9$', '$0{,}1$', '$0{,}8$'], 'Per indipendenza vale $P(A\\cap B)=P(A)P(B)$. Quindi il risultato è $0{,}4\\cdot0{,}5=0{,}2$.'),
  q('Due eventi incompatibili hanno entrambi probabilità strettamente positiva. Possono essere indipendenti?', 'No, perché l’intersezione ha probabilità zero e il prodotto delle probabilità è positivo', ['Sì, sempre', 'Sì, se hanno la stessa probabilità', 'Sì, se la somma delle probabilità è uno'], 'L’incompatibilità impone $P(A\\cap B)=0$. L’indipendenza richiederebbe invece $P(A\\cap B)=P(A)P(B)>0$, in contraddizione.'),
]);

competenza('dati', 'Dati, media e dispersione', 'statistica', 'indici-descrittivi', [
  q('Qual è la media aritmetica dei dati $2,4,9$?', '$5$', ['$4$', '$\\dfrac{15}{2}$', '$9$'], 'La somma è $2+4+9=15$ e i dati sono tre. Quindi la media è $\\dfrac{15}{3}=5$.'),
  q('Qual è la mediana dei dati ordinati $1,3,8,10$?', '$5{,}5$', ['$3$', '$8$', '$5$'], 'Con quattro dati la mediana è la media dei due valori centrali: $\\dfrac{3+8}{2}=5{,}5$.'),
  q('A ogni dato si aggiunge $10$. Che cosa succede alla varianza?', 'Resta invariata', ['Aumenta di $10$', 'Si moltiplica per $10$', 'Diventa zero'], 'Anche la media aumenta di $10$, quindi ogni scarto dalla media resta uguale. La media degli scarti quadratici non cambia.'),
  q('Una categoria contiene $18$ osservazioni su un totale di $60$. Qual è la sua frequenza relativa?', '$0{,}3$', ['$0{,}18$', '$3$', '$\\dfrac{60}{18}$'], 'La frequenza relativa è il rapporto tra frequenza assoluta e totale: $\\dfrac{18}{60}=0{,}3$.'),
]);

competenza('inferenza', 'Campionamento e interpretazione dei test', 'statistica', 'test-di-ipotesi', [
  q('Per osservazioni indipendenti con varianza $\\sigma^2$, qual è la varianza della media di $n$ osservazioni?', '$\\dfrac{\\sigma^2}{n}$', ['$\\sigma^2$', '$n\\sigma^2$', '$\\dfrac{\\sigma}{n}$'], 'La somma ha varianza $n\\sigma^2$. La media divide la somma per $n$, quindi la varianza si divide per $n^2$ e vale $\\dfrac{\\sigma^2}{n}$.'),
  q('Un test ha $p$-value $0{,}03$. Con livello di significatività $\\alpha=0{,}05$, la regola usuale porta a:', 'rifiutare l’ipotesi nulla', ['accettare con certezza l’ipotesi nulla', 'concludere che l’ipotesi nulla ha probabilità $3\\%$', 'concludere che l’ipotesi alternativa ha probabilità $97\\%$'], 'Poiché $0{,}03<0{,}05$, si rifiuta l’ipotesi nulla al livello fissato. Il $p$-value non è la probabilità che l’ipotesi nulla sia vera.'),
  q('Un errore di primo tipo consiste nel:', 'rifiutare un’ipotesi nulla vera', ['non rifiutare un’ipotesi nulla falsa', 'aumentare la dimensione del campione', 'scegliere una media campionaria'], 'L’errore di primo tipo è definito come il rifiuto di $H_0$ quando $H_0$ è vera. Il livello del test ne controlla la probabilità.'),
  q('A parità di tutto il resto, se la numerosità campionaria passa da $n$ a $4n$, l’errore standard della media:', 'si dimezza', ['raddoppia', 'si riduce a un quarto', 'resta uguale'], 'L’errore standard è $\\dfrac{\\sigma}{\\sqrt n}$. Con $4n$ diventa $\\dfrac{\\sigma}{\\sqrt{4n}}=\\dfrac{\\sigma}{2\\sqrt n}$.'),
]);

competenza('regimi-finanziari', 'Regimi finanziari e tassi', 'matematica-finanziaria', 'regimi-e-tassi', [
  q('Un capitale di $1000\\,\\mathrm{euro}$ viene capitalizzato per due anni al $10\\%$ annuo effettivo in regime composto. Qual è il montante?', '$1210\\,\\mathrm{euro}$', ['$1200\\,\\mathrm{euro}$', '$1100\\,\\mathrm{euro}$', '$1331\\,\\mathrm{euro}$'], 'In regime composto $M=C(1+i)^n$. Quindi $M=1000\\cdot1{,}1^2=1210\\,\\mathrm{euro}$.'),
  q('In regime semplice, un capitale di $2000\\,\\mathrm{euro}$ al $6\\%$ annuo per sei mesi produce un interesse di:', '$60\\,\\mathrm{euro}$', ['$120\\,\\mathrm{euro}$', '$600\\,\\mathrm{euro}$', '$2060\\,\\mathrm{euro}$'], 'Il tempo in anni è $t=\\dfrac12$. L’interesse è $I=Cit=2000\\cdot0{,}06\\cdot0{,}5=60\\,\\mathrm{euro}$.'),
  q('Qual è il tasso annuo effettivo equivalente al $10\\%$ effettivo semestrale in regime composto?', '$21\\%$', ['$20\\%$', '$10\\%$', '$5\\%$'], 'In un anno ci sono due semestri: $1+i_a=(1+0{,}10)^2=1{,}21$. Quindi $i_a=21\\%$.'),
  q('Qual è il valore attuale di $110\\,\\mathrm{euro}$ disponibili tra un anno, al tasso annuo effettivo del $10\\%$?', '$100\\,\\mathrm{euro}$', ['$99\\,\\mathrm{euro}$', '$121\\,\\mathrm{euro}$', '$10\\,\\mathrm{euro}$'], 'Si sconta il montante dividendo per il fattore di capitalizzazione: $V=\\dfrac{110}{1{,}10}=100\\,\\mathrm{euro}$.'),
]);

competenza('rendite', 'Rendite e ammortamenti', 'matematica-finanziaria', 'rendite-costanti', [
  q('Due rate di $110\\,\\mathrm{euro}$ scadono tra uno e due anni. Al tasso annuo effettivo del $10\\%$, il valore attuale totale è:', '$\\dfrac{2100}{11}\\,\\mathrm{euro}$', ['$220\\,\\mathrm{euro}$', '$200\\,\\mathrm{euro}$', '$210\\,\\mathrm{euro}$'], 'Ogni rata viene scontata alla propria scadenza: $\\dfrac{110}{1{,}1}+\\dfrac{110}{1{,}1^2}=100+\\dfrac{1000}{11}=\\dfrac{2100}{11}\\,\\mathrm{euro}$.'),
  q('Una rendita perpetua paga $50\\,\\mathrm{euro}$ alla fine di ogni anno. Al tasso annuo del $5\\%$, il valore attuale è:', '$1000\\,\\mathrm{euro}$', ['$2500\\,\\mathrm{euro}$', '$50\\,\\mathrm{euro}$', '$1050\\,\\mathrm{euro}$'], 'Per una perpetuità posticipata il valore è $\\dfrac Ri$. Quindi $\\dfrac{50}{0{,}05}=1000\\,\\mathrm{euro}$.'),
  q('Una rata di prestito è $300\\,\\mathrm{euro}$ e contiene $80\\,\\mathrm{euro}$ di interessi. Qual è la quota capitale?', '$220\\,\\mathrm{euro}$', ['$380\\,\\mathrm{euro}$', '$80\\,\\mathrm{euro}$', '$300\\,\\mathrm{euro}$'], 'La rata è la somma di quota capitale e quota interessi. La quota capitale è dunque $300-80=220\\,\\mathrm{euro}$.'),
  q('A tasso positivo e con lo stesso numero di rate uguali e positive, anticipare ogni rata di un periodo:', 'aumenta il valore attuale della rendita', ['riduce il valore attuale', 'lascia invariato il valore attuale', 'rende il valore attuale negativo'], 'Ogni pagamento viene scontato per un periodo in meno. Il valore attuale di ogni rata si moltiplica per $1+i>1$.'),
]);

competenza('valutazione-finanziaria', 'Flussi, VAN e titoli', 'matematica-finanziaria', 'valutazione-investimenti', [
  q('Un’operazione richiede $100\\,\\mathrm{euro}$ oggi e restituisce $121\\,\\mathrm{euro}$ tra un anno. Al tasso di valutazione del $10\\%$, il VAN è:', '$10\\,\\mathrm{euro}$', ['$21\\,\\mathrm{euro}$', '$110\\,\\mathrm{euro}$', '$-10\\,\\mathrm{euro}$'], 'Il VAN è $-100+\\dfrac{121}{1{,}10}=-100+110=10\\,\\mathrm{euro}$. Si confrontano flussi riferiti alla stessa data.'),
  q('Un’operazione richiede $100\\,\\mathrm{euro}$ oggi e restituisce $110\\,\\mathrm{euro}$ tra un anno, senza altri flussi. Qual è il TIR?', '$10\\%$', ['$11\\%$', '$\\dfrac{100}{110}\\%$', '$1\\%$'], 'Il TIR annulla il VAN: $-100+\\dfrac{110}{1+i}=0$. Quindi $1+i=1{,}10$ e $i=10\\%$.'),
  q('Per un titolo che paga un unico importo positivo tra un anno, se il tasso di attualizzazione aumenta, il prezzo attuale:', 'diminuisce', ['aumenta', 'resta invariato', 'diventa necessariamente negativo'], 'Il prezzo è $P=\\dfrac F{1+i}$. A flusso $F>0$ fisso, un denominatore maggiore produce un prezzo minore.'),
  q('Un’obbligazione senza cedole rimborsa $1000\\,\\mathrm{euro}$ tra due anni. Al rendimento annuo effettivo del $10\\%$, il prezzo è:', '$\\dfrac{100000}{121}\\,\\mathrm{euro}$', ['$800\\,\\mathrm{euro}$', '$\\dfrac{10000}{11}\\,\\mathrm{euro}$', '$1210\\,\\mathrm{euro}$'], 'L’unico flusso è scontato per due anni: $P=\\dfrac{1000}{1{,}1^2}=\\dfrac{100000}{121}\\,\\mathrm{euro}$.'),
]);

competenza('unita', 'Unità, conversioni e dimensioni', 'fisica-1', 'grandezze-e-vettori', [
  q('A quanto corrispondono $72\\,\\mathrm{km/h}$?', '$20\\,\\mathrm{m/s}$', ['$72\\,\\mathrm{m/s}$', '$259{,}2\\,\\mathrm{m/s}$', '$2\\,\\mathrm{m/s}$'], 'Un chilometro contiene $1000$ metri e un’ora $3600$ secondi. Quindi $72\\cdot\\dfrac{1000}{3600}=20\\,\\mathrm{m/s}$.'),
  q('A quanto corrisponde $1\\,\\mathrm{cm^2}$?', '$10^{-4}\\,\\mathrm{m^2}$', ['$10^{-2}\\,\\mathrm{m^2}$', '$10^4\\,\\mathrm{m^2}$', '$10^{-6}\\,\\mathrm{m^2}$'], 'Poiché $1\\,\\mathrm{cm}=10^{-2}\\,\\mathrm m$, elevando al quadrato si ottiene $1\\,\\mathrm{cm^2}=10^{-4}\\,\\mathrm{m^2}$.'),
  q('Quale unità equivale a un newton?', '$\\mathrm{kg\\,m\\,s^{-2}}$', ['$\\mathrm{kg\\,m\\,s^{-1}}$', '$\\mathrm{kg\\,m^2\\,s^{-2}}$', '$\\mathrm{kg\\,m^{-1}\\,s^{-2}}$'], 'Dalla relazione $F=ma$, l’unità della forza è il prodotto di chilogrammi e metri al secondo quadrato.'),
  q('Un corpo ha massa $200\\,\\mathrm g$ e volume $50\\,\\mathrm{cm^3}$. Qual è la densità?', '$4\\,\\mathrm{g/cm^3}$', ['$0{,}25\\,\\mathrm{g/cm^3}$', '$10000\\,\\mathrm{g/cm^3}$', '$150\\,\\mathrm{g/cm^3}$'], 'La densità è massa divisa per volume: $\\rho=\\dfrac{200}{50}=4\\,\\mathrm{g/cm^3}$.'),
]);

competenza('misure', 'Misure e incertezze', 'fisica-superiori-1', 'misure-e-incertezze', [
  q('Una misura è $(20{,}0\\pm0{,}5)\\,\\mathrm{cm}$. Qual è l’incertezza relativa percentuale?', '$2{,}5\\%$', ['$0{,}5\\%$', '$10\\%$', '$40\\%$'], 'Si divide l’incertezza assoluta per la misura: $\\dfrac{0{,}5}{20{,}0}=0{,}025$, che corrisponde al $2{,}5\\%$.'),
  q('Quante cifre significative contiene $0{,}00420$?', '$3$', ['$6$', '$2$', '$5$'], 'Gli zeri iniziali individuano la posizione della virgola. Le cifre significative sono $4$, $2$ e lo zero finale dichiarato.'),
  q('Due lunghezze hanno valori $a=(10{,}0\\pm0{,}2)\\,\\mathrm{cm}$ e $b=(5{,}0\\pm0{,}1)\\,\\mathrm{cm}$. Usando la somma delle incertezze massime, $a+b$ è:', '$(15{,}0\\pm0{,}3)\\,\\mathrm{cm}$', ['$(15{,}0\\pm0{,}1)\\,\\mathrm{cm}$', '$(15{,}0\\pm0{,}02)\\,\\mathrm{cm}$', '$(5{,}0\\pm0{,}3)\\,\\mathrm{cm}$'], 'I valori si sommano: $10{,}0+5{,}0=15{,}0$. Nel criterio indicato si sommano anche le incertezze massime: $0{,}2+0{,}1=0{,}3$.'),
  q('Una bilancia indica sempre $2\\,\\mathrm g$ in più del valore vero. Questo scostamento è un esempio di:', 'errore sistematico', ['oscillazione casuale con media zero', 'cifra significativa', 'cambiamento dell’unità di misura'], 'Lo scostamento mantiene segno e valore nelle misure ripetute. È quindi sistematico e richiede una correzione o una taratura.'),
]);

competenza('vettori', 'Componenti e operazioni tra vettori', 'algebra-lineare', 'vettori', [
  q('Qual è il modulo del vettore $(3,4)$?', '$5$', ['$7$', '$25$', '$1$'], 'Il modulo è $\\sqrt{3^2+4^2}=\\sqrt{25}=5$.'),
  q('Quanto vale il prodotto scalare $(1,2)\\cdot(3,-1)$?', '$1$', ['$5$', '$-1$', '$-2$'], 'Si moltiplicano le componenti corrispondenti e si sommano i prodotti: $1\\cdot3+2\\cdot(-1)=1$.'),
  q('Una forza di modulo $10\\,\\mathrm N$ forma un angolo di $60^\\circ$ con l’asse $x$ positivo. Qual è la componente $x$?', '$5\\,\\mathrm N$', ['$5\\sqrt3\\,\\mathrm N$', '$10\\,\\mathrm N$', '$-5\\,\\mathrm N$'], 'La componente è $F_x=F\\cos60^\\circ=10\\cdot\\dfrac12=5\\,\\mathrm N$.'),
  q('Quanto vale $(2,-1)+(-3,4)$?', '$(-1,3)$', ['$(5,-5)$', '$(-6,-4)$', '$(1,3)$'], 'La somma si esegue per componenti: $2+(-3)=-1$ e $-1+4=3$.'),
]);

competenza('cinematica', 'Moto e lettura dei grafici', 'fisica-1', 'cinematica-1d', [
  q('La velocità cresce linearmente da $0$ a $8\\,\\mathrm{m/s}$ in $4\\,\\mathrm s$. Qual è lo spostamento?', '$16\\,\\mathrm m$', ['$2\\,\\mathrm m$', '$8\\,\\mathrm m$', '$32\\,\\mathrm m$'], 'Lo spostamento è l’area sotto il grafico velocità-tempo: il triangolo ha area $\\dfrac{4\\cdot8}{2}=16\\,\\mathrm m$.', { tipo: 'grafico', titolo: 'Velocità in funzione del tempo', xLabel: 't (s)', yLabel: 'v (m/s)', punti: [[0, 0], [4, 8]] }),
  q('Un punto parte con velocità $3\\,\\mathrm{m/s}$ e accelera costantemente a $2\\,\\mathrm{m/s^2}$. Qual è la velocità dopo $4\\,\\mathrm s$?', '$11\\,\\mathrm{m/s}$', ['$8\\,\\mathrm{m/s}$', '$20\\,\\mathrm{m/s}$', '$5\\,\\mathrm{m/s}$'], 'Per accelerazione costante vale $v=v_0+at$. Quindi $v=3+2\\cdot4=11\\,\\mathrm{m/s}$.'),
  q('Una persona percorre $3\\,\\mathrm m$ verso est e poi $2\\,\\mathrm m$ verso ovest. Qual è lo spostamento complessivo?', '$1\\,\\mathrm m$ verso est', ['$5\\,\\mathrm m$ verso est', '$1\\,\\mathrm m$ verso ovest', '$5\\,\\mathrm m$ verso ovest'], 'Scegliendo est positivo, lo spostamento è $3-2=1\\,\\mathrm m$. La distanza percorsa, distinta dallo spostamento, è $5\\,\\mathrm m$.'),
  q('La posizione è $x(t)=(2\\,\\mathrm{m/s^2})t^2$. Qual è la velocità all’istante $t=3\\,\\mathrm s$?', '$12\\,\\mathrm{m/s}$', ['$18\\,\\mathrm{m/s}$', '$6\\,\\mathrm{m/s}$', '$4\\,\\mathrm{m/s}$'], 'La velocità è la derivata della posizione: $v(t)=(4\\,\\mathrm{m/s^2})t$. A $t=3\\,\\mathrm s$ vale $12\\,\\mathrm{m/s}$.'),
]);

competenza('dinamica', 'Forze e leggi di Newton', 'fisica-1', 'leggi-di-newton', [
  q('Una forza risultante di $8\\,\\mathrm N$ agisce su una massa di $2\\,\\mathrm{kg}$. Qual è l’accelerazione?', '$4\\,\\mathrm{m/s^2}$', ['$16\\,\\mathrm{m/s^2}$', '$0{,}25\\,\\mathrm{m/s^2}$', '$6\\,\\mathrm{m/s^2}$'], 'La seconda legge di Newton dà $a=\\dfrac Fm=\\dfrac82=4\\,\\mathrm{m/s^2}$.'),
  q('Un corpo si muove con velocità vettoriale costante in un sistema inerziale. La risultante delle forze è:', 'nulla', ['sempre diretta come la velocità', 'sempre uguale al peso', 'necessariamente diversa da zero'], 'La velocità costante implica accelerazione nulla. Da $\\sum F=ma$ segue che la risultante è zero.'),
  q('Una massa di $5\\,\\mathrm{kg}$ è in un luogo dove $g=10\\,\\mathrm{m/s^2}$. Qual è il suo peso?', '$50\\,\\mathrm N$', ['$5\\,\\mathrm N$', '$0{,}5\\,\\mathrm N$', '$15\\,\\mathrm N$'], 'Il modulo del peso è $P=mg=5\\cdot10=50\\,\\mathrm N$. La massa e il peso sono grandezze diverse.'),
  q('Le due forze di una coppia azione-reazione della terza legge di Newton agiscono:', 'su due corpi diversi', ['sempre sullo stesso corpo', 'solo quando i corpi sono fermi', 'con lo stesso verso'], 'Se A esercita una forza su B, B esercita su A una forza uguale e opposta. I corpi su cui agiscono sono distinti.'),
]);

competenza('energia', 'Lavoro ed energia', 'fisica-1', 'lavoro-ed-energia', [
  q('Una forza costante di $5\\,\\mathrm N$, parallela e concorde allo spostamento, agisce per $4\\,\\mathrm m$. Qual è il lavoro?', '$20\\,\\mathrm J$', ['$1{,}25\\,\\mathrm J$', '$9\\,\\mathrm J$', '$0\\,\\mathrm J$'], 'Il lavoro è $W=Fs\\cos0=5\\cdot4=20\\,\\mathrm J$.'),
  q('A massa costante, se la velocità passa da $2$ a $3\\,\\mathrm{m/s}$, l’energia cinetica viene moltiplicata per:', '$\\dfrac94$', ['$\\dfrac32$', '$\\dfrac23$', '$\\dfrac49$'], 'L’energia cinetica è proporzionale a $v^2$. Il rapporto è dunque $\\dfrac{3^2}{2^2}=\\dfrac94$.'),
  q('Una molla ideale di costante $100\\,\\mathrm{N/m}$ è allungata di $0{,}20\\,\\mathrm m$. Qual è l’energia elastica?', '$2\\,\\mathrm J$', ['$20\\,\\mathrm J$', '$4\\,\\mathrm J$', '$10\\,\\mathrm J$'], 'Si applica $U=\\dfrac12kx^2$: $U=\\dfrac12\\cdot100\\cdot0{,}20^2=2\\,\\mathrm J$.'),
  q('Una massa di $2\\,\\mathrm{kg}$ viene sollevata di $3\\,\\mathrm m$, con $g=10\\,\\mathrm{m/s^2}$. Di quanto aumenta l’energia potenziale gravitazionale?', '$60\\,\\mathrm J$', ['$30\\,\\mathrm J$', '$20\\,\\mathrm J$', '$6\\,\\mathrm J$'], 'La variazione è $\\Delta U=mg\\Delta h=2\\cdot10\\cdot3=60\\,\\mathrm J$.'),
]);

competenza('rotazioni', 'Rotazioni e momento angolare', 'fisica-1', 'corpo-rigido', [
  q('Un punto a distanza $3\\,\\mathrm m$ dall’asse ruota con velocità angolare $2\\,\\mathrm{rad/s}$. Qual è la velocità tangenziale?', '$6\\,\\mathrm{m/s}$', ['$\\dfrac23\\,\\mathrm{m/s}$', '$\\dfrac32\\,\\mathrm{m/s}$', '$12\\,\\mathrm{m/s}$'], 'Nel moto attorno a un asse fisso il modulo della velocità tangenziale è $v=\\omega r=2\\cdot3=6\\,\\mathrm{m/s}$.'),
  q('Un corpo ruota attorno a un asse fisso con momento d’inerzia $2\\,\\mathrm{kg\\,m^2}$ e accelerazione angolare $3\\,\\mathrm{rad/s^2}$. Qual è il momento risultante rispetto all’asse?', '$6\\,\\mathrm{N\\,m}$', ['$1{,}5\\,\\mathrm{N\\,m}$', '$5\\,\\mathrm{N\\,m}$', '$\\dfrac23\\,\\mathrm{N\\,m}$'], 'Per asse fisso e momento d’inerzia costante, $M=I\\alpha$. Quindi $M=2\\cdot3=6\\,\\mathrm{N\\,m}$.'),
  q('Se il momento esterno risultante rispetto a un polo fisso inerziale è nullo, il momento angolare totale rispetto a quel polo:', 'si conserva', ['è necessariamente zero', 'aumenta sempre', 'si dimezza a ogni secondo'], 'Il momento esterno è la derivata temporale del momento angolare. Se tale derivata è nulla, il momento angolare è costante.'),
  q('Un corpo ha $I=4\\,\\mathrm{kg\\,m^2}$ e $\\omega=2\\,\\mathrm{rad/s}$. Qual è l’energia cinetica di rotazione attorno all’asse?', '$8\\,\\mathrm J$', ['$4\\,\\mathrm J$', '$16\\,\\mathrm J$', '$2\\,\\mathrm J$'], 'L’energia è $K=\\dfrac12I\\omega^2=\\dfrac12\\cdot4\\cdot2^2=8\\,\\mathrm J$.'),
]);

competenza('fluidi', 'Pressione ed equilibrio dei fluidi', 'fisica-1', 'fluidi', [
  q('Una forza normale di $200\\,\\mathrm N$ è distribuita uniformemente su $0{,}5\\,\\mathrm{m^2}$. Qual è la pressione?', '$400\\,\\mathrm{Pa}$', ['$100\\,\\mathrm{Pa}$', '$200\\,\\mathrm{Pa}$', '$0{,}0025\\,\\mathrm{Pa}$'], 'La pressione è forza per unità di area: $p=\\dfrac FA=\\dfrac{200}{0{,}5}=400\\,\\mathrm{Pa}$.'),
  q('In acqua ferma con $\\rho=1000\\,\\mathrm{kg/m^3}$ e $g=10\\,\\mathrm{m/s^2}$, qual è l’aumento di pressione a $2\\,\\mathrm m$ sotto la superficie?', '$20000\\,\\mathrm{Pa}$', ['$2000\\,\\mathrm{Pa}$', '$200\\,\\mathrm{Pa}$', '$5000\\,\\mathrm{Pa}$'], 'La legge di Stevino dà $\\Delta p=\\rho gh=1000\\cdot10\\cdot2=20000\\,\\mathrm{Pa}$.'),
  q('La spinta di Archimede su un corpo immerso in un fluido in quiete è uguale:', 'al peso del fluido spostato', ['sempre al peso del corpo', 'alla massa del corpo', 'al volume del corpo senza altri fattori'], 'La spinta ha modulo $F_A=\\rho_f gV_{\\mathrm{immerso}}$, cioè il peso della quantità di fluido che occuperebbe il volume immerso.'),
  q('Un corpo galleggia in equilibrio con metà del proprio volume immerso in acqua. Trascurando l’aria, la sua densità media è:', 'metà della densità dell’acqua', ['uguale alla densità dell’acqua', 'il doppio della densità dell’acqua', 'quattro volte la densità dell’acqua'], 'L’equilibrio impone $\\rho_cVg=\\rho_a\\dfrac V2g$. Semplificando $Vg$ si ottiene $\\rho_c=\\dfrac{\\rho_a}{2}$.'),
]);

competenza('termodinamica', 'Calore e primo principio', 'fisica-1', 'primo-principio', [
  q('Un sistema assorbe $100\\,\\mathrm J$ di calore e compie $40\\,\\mathrm J$ di lavoro sull’esterno. Quanto varia la sua energia interna?', '$+60\\,\\mathrm J$', ['$+140\\,\\mathrm J$', '$-60\\,\\mathrm J$', '$-140\\,\\mathrm J$'], 'Con lavoro positivo se compiuto dal sistema, il primo principio è $\\Delta U=Q-W$. Quindi $100-40=60\\,\\mathrm J$.'),
  q('Un gas ideale mantiene temperatura e quantità di sostanza costanti. Se il volume raddoppia, la pressione:', 'si dimezza', ['raddoppia', 'quadruplica', 'resta uguale'], 'Da $pV=nRT$, il prodotto $pV$ è costante. Raddoppiando $V$, la pressione deve dimezzarsi.'),
  q('Un corpo ha massa $2\\,\\mathrm{kg}$ e calore specifico $500\\,\\mathrm{J/(kg\\,K)}$. Quanto calore serve per aumentare la temperatura di $3\\,\\mathrm K$, senza cambiamenti di stato?', '$3000\\,\\mathrm J$', ['$1500\\,\\mathrm J$', '$1000\\,\\mathrm J$', '$750\\,\\mathrm J$'], 'Si usa $Q=mc\\Delta T=2\\cdot500\\cdot3=3000\\,\\mathrm J$.'),
  q('A quanti kelvin corrispondono $25\\,{}^\\circ\\mathrm C$?', '$298{,}15\\,\\mathrm K$', ['$248{,}15\\,\\mathrm K$', '$25\\,\\mathrm K$', '$273{,}15\\,\\mathrm K$'], 'La temperatura assoluta si ottiene aggiungendo $273{,}15$: $T=25+273{,}15=298{,}15\\,\\mathrm K$.'),
]);

competenza('onde', 'Periodo, frequenza e propagazione', 'fisica-superiori-4', 'oscillazioni-onde', [
  q('Un’onda ha frequenza $5\\,\\mathrm{Hz}$ e lunghezza d’onda $2\\,\\mathrm m$. Qual è la velocità di propagazione?', '$10\\,\\mathrm{m/s}$', ['$2{,}5\\,\\mathrm{m/s}$', '$0{,}4\\,\\mathrm{m/s}$', '$7\\,\\mathrm{m/s}$'], 'Per un’onda periodica vale $v=f\\lambda$. Quindi $v=5\\cdot2=10\\,\\mathrm{m/s}$.'),
  q('Un’oscillazione ha periodo $0{,}25\\,\\mathrm s$. Qual è la frequenza?', '$4\\,\\mathrm{Hz}$', ['$0{,}25\\,\\mathrm{Hz}$', '$2\\,\\mathrm{Hz}$', '$25\\,\\mathrm{Hz}$'], 'La frequenza è l’inverso del periodo: $f=\\dfrac1T=\\dfrac1{0{,}25}=4\\,\\mathrm{Hz}$.'),
  q('Nel moto $x(t)=A\\cos(\\omega t+\\phi)$, quale parametro rappresenta l’ampiezza, con $A>0$?', '$A$', ['$\\omega$', '$\\phi$', '$A\\omega$'], 'Il coseno varia tra $-1$ e $1$, quindi la posizione varia tra $-A$ e $A$. La massima distanza dall’equilibrio è $A$.'),
  q('Due onde coerenti arrivano in fase e con la stessa ampiezza $A$ in un punto. Qual è l’ampiezza della loro somma?', '$2A$', ['$A$', '$0$', '$4A$'], 'Le oscillazioni hanno lo stesso segno e la stessa fase in ogni istante. Per sovrapposizione le ampiezze si sommano e danno $2A$.'),
]);

competenza('ottica', 'Riflessione e rifrazione', 'fisica-2', 'ottica', [
  q('Un raggio incide su uno specchio piano a $30^\\circ$ rispetto alla normale. L’angolo di riflessione rispetto alla normale è:', '$30^\\circ$', ['$60^\\circ$', '$90^\\circ$', '$15^\\circ$'], 'La legge della riflessione uguaglia l’angolo riflesso a quello incidente, misurati entrambi rispetto alla normale.'),
  q('Un mezzo ha indice di rifrazione $n=1{,}5$. Qual è la velocità della luce nel mezzo, se $c=3\\cdot10^8\\,\\mathrm{m/s}$?', '$2\\cdot10^8\\,\\mathrm{m/s}$', ['$4{,}5\\cdot10^8\\,\\mathrm{m/s}$', '$1{,}5\\cdot10^8\\,\\mathrm{m/s}$', '$3\\cdot10^8\\,\\mathrm{m/s}$'], 'Per definizione $n=\\dfrac cv$, dunque $v=\\dfrac cn=\\dfrac{3\\cdot10^8}{1{,}5}=2\\cdot10^8\\,\\mathrm{m/s}$.'),
  q('Quando la luce attraversa un’interfaccia ferma tra mezzi trasparenti fermi, quale grandezza resta uguale?', 'La frequenza', ['La velocità in ogni caso', 'La lunghezza d’onda in ogni caso', 'L’indice di rifrazione'], 'La frequenza è determinata dalla sorgente e resta continua attraverso l’interfaccia. La velocità e la lunghezza d’onda possono cambiare.'),
  q('Un raggio passa dall’aria a un vetro con indice maggiore, con incidenza obliqua. Il raggio rifratto:', 'si avvicina alla normale', ['si allontana sempre dalla normale', 'ha necessariamente angolo di $90^\\circ$', 'torna sempre nel primo mezzo'], 'Dalla legge $n_1\\sin\\theta_1=n_2\\sin\\theta_2$, con $n_2>n_1$, segue $\\sin\\theta_2<\\sin\\theta_1$ e quindi un angolo rifratto minore.'),
]);

competenza('elettricita', 'Carica, campo e potenziale elettrico', 'fisica-2', 'campo-elettrico', [
  q('Una carica $q=2\\,\\mathrm C$ è in un campo elettrico uniforme $E=3\\,\\mathrm{N/C}$. Qual è il modulo della forza?', '$6\\,\\mathrm N$', ['$1{,}5\\,\\mathrm N$', '$\\dfrac23\\,\\mathrm N$', '$5\\,\\mathrm N$'], 'Il modulo della forza è $F=|q|E=2\\cdot3=6\\,\\mathrm N$.'),
  q('Due cariche puntiformi restano uguali e la loro distanza raddoppia. Il modulo della forza di Coulomb:', 'diventa un quarto', ['raddoppia', 'si dimezza', 'quadruplica'], 'La forza è proporzionale a $\\dfrac1{r^2}$. Sostituendo $2r$ al posto di $r$, il fattore diventa $\\dfrac14$.'),
  q('Una carica positiva si sposta tra due punti con differenza di potenziale $\\Delta V=V_f-V_i>0$. La sua energia potenziale elettrica:', 'aumenta', ['diminuisce', 'resta sempre uguale', 'diventa necessariamente nulla'], 'La variazione di energia potenziale è $\\Delta U=q\\Delta V$. Entrambi i fattori sono positivi, quindi $\\Delta U>0$.'),
  q('Il verso del campo elettrico in un punto è quello della forza elettrica su:', 'una carica di prova positiva', ['una carica di prova negativa', 'qualunque carica, indipendentemente dal segno', 'un corpo neutro non polarizzabile'], 'Il campo è definito dal rapporto $\\dfrac Fq$ per una carica di prova positiva. Per una carica negativa la forza ha verso opposto.'),
]);

competenza('circuiti', 'Corrente, resistenza e circuiti', 'fisica-2', 'corrente-e-circuiti', [
  q('Un resistore da $4\\,\\Omega$ è sottoposto a $12\\,\\mathrm V$. Quale corrente lo attraversa?', '$3\\,\\mathrm A$', ['$48\\,\\mathrm A$', '$\\dfrac13\\,\\mathrm A$', '$8\\,\\mathrm A$'], 'La legge di Ohm dà $I=\\dfrac VR=\\dfrac{12}{4}=3\\,\\mathrm A$.'),
  q('Due resistenze da $2\\,\\Omega$ e $3\\,\\Omega$ sono in serie. La resistenza equivalente è:', '$5\\,\\Omega$', ['$\\dfrac65\\,\\Omega$', '$1\\,\\Omega$', '$6\\,\\Omega$'], 'In serie la stessa corrente attraversa entrambe e le cadute di potenziale si sommano. La resistenza equivalente è $2+3=5\\,\\Omega$.'),
  q('Due resistenze entrambe da $6\\,\\Omega$ sono in parallelo. La resistenza equivalente è:', '$3\\,\\Omega$', ['$12\\,\\Omega$', '$6\\,\\Omega$', '$36\\,\\Omega$'], 'In parallelo si sommano i reciproci: $\\dfrac1R=\\dfrac16+\\dfrac16=\\dfrac13$. Quindi $R=3\\,\\Omega$.'),
  q('Un componente attraversato da $2\\,\\mathrm A$ ha una differenza di potenziale di $5\\,\\mathrm V$. Qual è la potenza assorbita?', '$10\\,\\mathrm W$', ['$2{,}5\\,\\mathrm W$', '$0{,}4\\,\\mathrm W$', '$7\\,\\mathrm W$'], 'La potenza elettrica è $P=VI=5\\cdot2=10\\,\\mathrm W$.'),
]);

competenza('magnetismo', 'Forza magnetica e moto di cariche', 'fisica-2', 'campo-magnetico', [
  q('Una carica si muove parallelamente a un campo magnetico uniforme. Il modulo della forza magnetica è:', '$0$', ['$|q|vB$', '$\\dfrac{|q|B}{v}$', '$\\dfrac{|q|v}{B}$'], 'La forza ha modulo $|q|vB\\sin\\theta$. Per velocità parallela al campo, $\\theta=0$ oppure $\\pi$ e il seno è zero.'),
  q('Una carica di modulo $2\\,\\mathrm C$ si muove a $3\\,\\mathrm{m/s}$ perpendicolarmente a un campo di $4\\,\\mathrm T$. Qual è il modulo della forza magnetica?', '$24\\,\\mathrm N$', ['$6\\,\\mathrm N$', '$12\\,\\mathrm N$', '$\\dfrac32\\,\\mathrm N$'], 'Per moto perpendicolare, $\\sin\\theta=1$. Quindi $F=|q|vB=2\\cdot3\\cdot4=24\\,\\mathrm N$.'),
  q('La potenza istantanea della forza magnetica su una carica puntiforme in movimento è:', 'nullo', ['sempre positivo', 'sempre negativo', 'uguale all’energia cinetica'], 'La forza magnetica è perpendicolare alla velocità. La potenza $F\\cdot v$ è quindi zero.'),
  q('Nel modello non relativistico, a massa, carica e campo fissati, il raggio del moto circolare di una carica con velocità perpendicolare al campo è:', 'proporzionale alla velocità', ['inversamente proporzionale alla velocità', 'indipendente dalla velocità', 'proporzionale al quadrato della velocità'], 'Uguagliando $|q|vB$ a $\\dfrac{mv^2}{r}$ si ricava $r=\\dfrac{mv}{|q|B}$. Quindi $r$ è proporzionale a $v$.'),
]);

competenza('induzione', 'Flusso e induzione elettromagnetica', 'fisica-2', 'induzione-elettromagnetica', [
  q('Il flusso magnetico attraverso una spira aumenta uniformemente di $0{,}6\\,\\mathrm{Wb}$ in $0{,}2\\,\\mathrm s$. Qual è il modulo della forza elettromotrice media indotta?', '$3\\,\\mathrm V$', ['$0{,}12\\,\\mathrm V$', '$0{,}4\\,\\mathrm V$', '$\\dfrac13\\,\\mathrm V$'], 'Per una spira, $|\\mathcal E|=\\dfrac{|\\Delta\\Phi|}{\\Delta t}=\\dfrac{0{,}6}{0{,}2}=3\\,\\mathrm V$.'),
  q('Una superficie piana di area $2\\,\\mathrm{m^2}$ ha normale parallela a un campo uniforme di $3\\,\\mathrm T$. Qual è il flusso, con normale concorde al campo?', '$6\\,\\mathrm{Wb}$', ['$0\\,\\mathrm{Wb}$', '$1{,}5\\,\\mathrm{Wb}$', '$-6\\,\\mathrm{Wb}$'], 'Il flusso è $\\Phi=BA\\cos\\theta$. Con normale concorde, $\\theta=0$, quindi $\\Phi=3\\cdot2=6\\,\\mathrm{Wb}$.'),
  q('Secondo la legge di Lenz, l’effetto magnetico della corrente indotta:', 'si oppone alla variazione del flusso che l’ha prodotta', ['si oppone sempre al campo esterno, anche se sta diminuendo', 'aumenta sempre il flusso esterno', 'ha verso indipendente dalla variazione di flusso'], 'La legge di Lenz riguarda la variazione del flusso. Il verso indotto contrasta tale variazione, sia che il flusso aumenti sia che diminuisca.'),
  q('Se il flusso attraverso una bobina resta costante nel tempo, la forza elettromotrice indotta dalla variazione di quel flusso è:', '$0$', ['sempre positiva', 'sempre negativa', 'uguale al flusso'], 'La legge di Faraday contiene la derivata temporale del flusso. Se il flusso è costante, la derivata è zero.'),
]);

competenza('moderna', 'Quanti e fisica atomica', 'fisica-superiori-5', 'crisi-fisica-classica', [
  q('Se la frequenza di un fotone raddoppia, la sua energia:', 'raddoppia', ['si dimezza', 'quadruplica', 'resta uguale'], 'L’energia del fotone è $E=hf$. A costante di Planck fissata, l’energia è proporzionale alla frequenza.'),
  q('Nell’effetto fotoelettrico, se l’energia di ogni fotone è inferiore al lavoro di estrazione, aumentare solo l’intensità a frequenza fissa:', 'non produce emissione nel modello a singolo fotone', ['produce sempre elettroni più veloci', 'aumenta l’energia di ciascun fotone', 'riduce automaticamente il lavoro di estrazione'], 'A frequenza fissa, l’energia $hf$ del singolo fotone non cambia. Se $hf$ resta sotto la soglia, il modello a singolo fotone non permette l’estrazione.'),
  q('Secondo la relazione di de Broglie, aumentando il modulo della quantità di moto $p$ di una particella, la lunghezza d’onda associata:', 'diminuisce', ['aumenta', 'resta invariata', 'diventa negativa'], 'La relazione è $\\lambda=\\dfrac hp$. Con $p>0$, un denominatore maggiore implica una lunghezza d’onda minore.'),
  q('Un elettrone in un atomo passa da un livello energetico maggiore a uno minore emettendo un fotone. L’energia del fotone è:', 'la differenza positiva tra le energie dei livelli', ['la somma delle energie dei livelli in ogni convenzione', 'sempre l’energia del livello finale', 'zero'], 'Per conservazione dell’energia, il fotone trasporta $E_\\gamma=E_i-E_f>0$, pari all’energia persa dall’atomo.'),
]);

competenza('relativita', 'Tempo proprio ed energia relativistica', 'fisica-superiori-5', 'relativita-spazio-tempo', [
  q('Per una velocità $v$ con $0<v<c$, il fattore di Lorentz $\\gamma=\\dfrac1{\\sqrt{1-\\dfrac{v^2}{c^2}}}$ è:', 'maggiore di uno', ['minore di zero', 'compreso tra zero e uno', 'sempre uguale a uno'], 'Il numero $1-\\dfrac{v^2}{c^2}$ è tra zero e uno. La sua radice è minore di uno, quindi il reciproco è maggiore di uno.'),
  q('Due eventi accadono nello stesso luogo nel sistema di un orologio. L’intervallo misurato da quell’orologio è:', 'il tempo proprio', ['sempre nullo', 'il tempo coordinato di qualsiasi sistema', 'una distanza propria'], 'Il tempo proprio è l’intervallo misurato dall’orologio presente in entrambi gli eventi, che nel suo sistema avvengono nello stesso luogo.'),
  q('Qual è l’energia a riposo di una particella di massa $m$?', '$mc^2$', ['$mc$', '$\\dfrac12mc^2$', '$0$ per ogni massa'], 'La relazione massa-energia assegna alla particella a riposo l’energia $E_0=mc^2$.'),
  q('Una lunghezza propria $L_0$ è parallela alla velocità relativa. In un sistema in cui l’oggetto si muove, misurando simultaneamente gli estremi, si trova:', '$L=\\dfrac{L_0}{\\gamma}$', ['$L=\\gamma L_0$', '$L=L_0$ per ogni velocità', '$L=\\gamma^2L_0$'], 'La contrazione delle lunghezze riguarda la direzione del moto: $L=\\dfrac{L_0}{\\gamma}$. Poiché $\\gamma>1$ per moto non nullo, la lunghezza misurata è minore.'),
]);

competenza('momenti', 'Momenti e sistemi di forze', 'statica', 'sistemi-di-forze', [
  q('Una forza di $10\\,\\mathrm N$ ha braccio perpendicolare di $2\\,\\mathrm m$ rispetto a un polo. Qual è il modulo del momento?', '$20\\,\\mathrm{N\\,m}$', ['$5\\,\\mathrm{N\\,m}$', '$12\\,\\mathrm{N\\,m}$', '$0\\,\\mathrm{N\\,m}$'], 'Il modulo del momento è il prodotto della forza per il braccio perpendicolare: $M=10\\cdot2=20\\,\\mathrm{N\\,m}$.'),
  q('Nel piano $xy$, una forza $F=(4,5)\\,\\mathrm N$ è applicata nel punto $(2,3)\\,\\mathrm m$. Con momenti antiorari positivi, il momento rispetto all’origine è:', '$-2\\,\\mathrm{N\\,m}$', ['$2\\,\\mathrm{N\\,m}$', '$22\\,\\mathrm{N\\,m}$', '$23\\,\\mathrm{N\\,m}$'], 'La componente del momento è $M_z=xF_y-yF_x=2\\cdot5-3\\cdot4=-2\\,\\mathrm{N\\,m}$.'),
  q('Due forze parallele opposte di modulo $4\\,\\mathrm N$ hanno rette d’azione distanti $1{,}5\\,\\mathrm m$. Il modulo del momento della coppia è:', '$6\\,\\mathrm{N\\,m}$', ['$0\\,\\mathrm{N\\,m}$', '$12\\,\\mathrm{N\\,m}$', '$\\dfrac83\\,\\mathrm{N\\,m}$'], 'Il momento di una coppia ha modulo $M=Fd=4\\cdot1{,}5=6\\,\\mathrm{N\\,m}$.'),
  q('Un sistema di forze ha risultante nulla. Cambiando il polo, il momento risultante:', 'resta invariato', ['diventa sempre zero', 'cambia necessariamente segno', 'raddoppia'], 'La variazione di momento tra due poli dipende dal prodotto vettoriale dello spostamento con la risultante. Se la risultante è nulla, la variazione è zero.'),
]);

competenza('equilibrio', 'Vincoli e reazioni di equilibrio', 'statica', 'reazioni-vincolari', [
  q('Una trave di $6\\,\\mathrm m$ ha cerniera in A e carrello con reazione verticale in B. Un carico di $12\\,\\mathrm{kN}$ verso il basso è a $2\\,\\mathrm m$ da A. Trascurando il peso proprio, la reazione verticale in B è:', '$4\\,\\mathrm{kN}$ verso l’alto', ['$8\\,\\mathrm{kN}$ verso l’alto', '$6\\,\\mathrm{kN}$ verso l’alto', '$24\\,\\mathrm{kN}$ verso l’alto'], 'I momenti rispetto ad A danno $6R_B-12\\cdot2=0$. Quindi $R_B=4\\,\\mathrm{kN}$ verso l’alto.', { tipo: 'trave', lunghezza: 6, forza: 12, posizione: 2 }),
  q('Un incastro ideale nel piano impedisce:', 'due traslazioni e una rotazione', ['soltanto una traslazione', 'due traslazioni ma nessuna rotazione', 'soltanto la rotazione'], 'Un corpo rigido piano ha tre gradi di libertà. L’incastro blocca entrambe le traslazioni e la rotazione.'),
  q('La reazione di un carrello ideale senza attrito è diretta:', 'normalmente al piano di scorrimento', ['sempre orizzontalmente', 'sempre verticalmente, qualunque sia il piano', 'tangenzialmente al piano di scorrimento'], 'Il carrello permette lo spostamento tangenziale e impedisce quello normale. La reazione ideale agisce quindi nella direzione normale.'),
  q('Su un punto agiscono una forza orizzontale di $7\\,\\mathrm N$ verso destra e una di $3\\,\\mathrm N$ verso sinistra. Quale forza orizzontale aggiunta dà equilibrio?', '$4\\,\\mathrm N$ verso sinistra', ['$4\\,\\mathrm N$ verso destra', '$10\\,\\mathrm N$ verso sinistra', '$10\\,\\mathrm N$ verso destra'], 'La risultante delle prime due forze è $7-3=4\\,\\mathrm N$ verso destra. La forza equilibrante deve avere uguale modulo e verso opposto.'),
]);

competenza('sezioni', 'Aree, baricentri e inerzie', 'statica', 'geometria-delle-masse', [
  q('Un rettangolo ha base $2\\,\\mathrm{cm}$ e altezza $3\\,\\mathrm{cm}$. Il momento d’inerzia d’area rispetto all’asse baricentrico parallelo alla base è:', '$4{,}5\\,\\mathrm{cm^4}$', ['$6\\,\\mathrm{cm^4}$', '$2\\,\\mathrm{cm^4}$', '$18\\,\\mathrm{cm^4}$'], 'Per quell’asse vale $I=\\dfrac{bh^3}{12}$. Quindi $I=\\dfrac{2\\cdot3^3}{12}=4{,}5\\,\\mathrm{cm^4}$.'),
  q('Una sezione ha $I_G=2\\,\\mathrm{cm^4}$ e area $A=3\\,\\mathrm{cm^2}$. Per un asse parallelo distante $2\\,\\mathrm{cm}$ dall’asse baricentrico, l’inerzia è:', '$14\\,\\mathrm{cm^4}$', ['$8\\,\\mathrm{cm^4}$', '$10\\,\\mathrm{cm^4}$', '$2\\,\\mathrm{cm^4}$'], 'Il teorema di trasporto dà $I=I_G+Ad^2=2+3\\cdot2^2=14\\,\\mathrm{cm^4}$.'),
  q('Due aree uguali hanno baricentri con ascisse $0$ e $4\\,\\mathrm{cm}$. L’ascissa del baricentro della loro unione, senza sovrapposizioni, è:', '$2\\,\\mathrm{cm}$', ['$0\\,\\mathrm{cm}$', '$4\\,\\mathrm{cm}$', '$8\\,\\mathrm{cm}$'], 'La media delle ascisse è pesata con le aree. Con aree uguali vale $x_G=\\dfrac{0+4}{2}=2\\,\\mathrm{cm}$.'),
  q('Se tutte le dimensioni lineari di una sezione vengono raddoppiate, il momento d’inerzia d’area rispetto al corrispondente asse baricentrico:', 'si moltiplica per $16$', ['si moltiplica per $2$', 'si moltiplica per $4$', 'si moltiplica per $8$'], 'Nell’integrale $I=\\int y^2\\,dA$, le distanze al quadrato si moltiplicano per $4$ e l’area per $4$. Il fattore totale è $16$.'),
]);

competenza('sollecitazioni', 'Sforzo normale, taglio e momento', 'scienza-delle-costruzioni', 'sollecitazioni', [
  q('Si adotta la convenzione $\\dfrac{dM}{dx}=T$. Se su un tratto $T=3\\,\\mathrm{kN}$ costante, tra $x=0$ e $x=2\\,\\mathrm m$ il momento varia di:', '$+6\\,\\mathrm{kN\\,m}$', ['$-6\\,\\mathrm{kN\\,m}$', '$+1{,}5\\,\\mathrm{kN\\,m}$', '$0\\,\\mathrm{kN\\,m}$'], 'Integrando $\\dfrac{dM}{dx}=3\\,\\mathrm{kN}$ su $2\\,\\mathrm m$ si ottiene $\\Delta M=T\\Delta x=6\\,\\mathrm{kN\\,m}$.'),
  q('Si adotta $\\dfrac{dT}{dx}=-q$. Su un tratto con carico distribuito uniforme $q>0$, il taglio:', 'decresce linearmente', ['cresce linearmente', 'resta costante', 'varia quadraticamente'], 'La derivata del taglio è la costante negativa $-q$. Quindi il diagramma del taglio è una retta decrescente.'),
  q('Una barra rettilinea è soggetta solo a due forze assiali opposte applicate agli estremi. Lontano dalle estremità, l’azione interna non nulla è:', 'lo sforzo normale', ['il solo taglio', 'il solo momento flettente', 'il solo momento torcente'], 'Le forze sono allineate con l’asse della barra e non introducono risultanti trasversali o coppie. La sezione trasmette uno sforzo normale.'),
  q('Una cerniera interna ideale, senza coppie applicate nel nodo, trasmette un momento flettente pari a:', '$0$', ['sempre $1\\,\\mathrm{kN\\,m}$', 'sempre al valore del taglio', 'sempre al prodotto del taglio per l’intera luce'], 'La cerniera ideale consente la rotazione relativa e non trasmette una coppia. Il momento flettente nella cerniera è quindi nullo.'),
]);

competenza('tensioni', 'Tensioni e deformazioni assiali', 'scienza-delle-costruzioni', 'tensioni-deformazioni', [
  q('Uno sforzo normale uniforme di trazione $N=20\\,\\mathrm{kN}$ agisce su $A=100\\,\\mathrm{mm^2}$. Qual è la tensione normale media?', '$200\\,\\mathrm{MPa}$', ['$0{,}2\\,\\mathrm{MPa}$', '$20\\,\\mathrm{MPa}$', '$2000\\,\\mathrm{MPa}$'], 'Si converte $N=20000\\,\\mathrm N$. Quindi $\\sigma=\\dfrac NA=200\\,\\mathrm{N/mm^2}=200\\,\\mathrm{MPa}$.'),
  q('In regime elastico lineare monoassiale, $E=200\\,\\mathrm{GPa}$ ed $\\varepsilon=0{,}001$. Quanto vale $\\sigma$?', '$200\\,\\mathrm{MPa}$', ['$0{,}2\\,\\mathrm{MPa}$', '$200000\\,\\mathrm{MPa}$', '$20\\,\\mathrm{MPa}$'], 'La legge di Hooke dà $\\sigma=E\\varepsilon=200\\cdot0{,}001=0{,}2\\,\\mathrm{GPa}$, cioè $200\\,\\mathrm{MPa}$.'),
  q('Una barra inizialmente lunga $1000\\,\\mathrm{mm}$ si allunga di $1\\,\\mathrm{mm}$. Qual è la deformazione longitudinale media?', '$0{,}001$', ['$1$', '$1000$', '$0{,}1$'], 'La deformazione è il rapporto adimensionale $\\varepsilon=\\dfrac{\\Delta L}{L}=\\dfrac1{1000}=0{,}001$.'),
  q('Nel piano, lo stato di puro taglio ha matrice $\\begin{pmatrix}0&\\tau\\\\\\tau&0\\end{pmatrix}$, con $\\tau>0$. Le tensioni principali sono:', '$+\\tau$ e $-\\tau$', ['$\\tau$ e $\\tau$', '$0$ e $0$', '$2\\tau$ e $0$'], 'Gli autovalori soddisfano $\\lambda^2-\\tau^2=0$. Quindi le tensioni principali sono $\\lambda=\\pm\\tau$.'),
]);

competenza('elasticita', 'Rigidezza e spostamenti elastici', 'scienza-delle-costruzioni', 'linea-elastica', [
  q('Una barra prismatica elastica ha $N=1000\\,\\mathrm N$, $L=2\\,\\mathrm m$, $E=200\\cdot10^9\\,\\mathrm{Pa}$ e $A=10^{-4}\\,\\mathrm{m^2}$. Qual è l’allungamento?', '$10^{-4}\\,\\mathrm m$', ['$10^{-2}\\,\\mathrm m$', '$10^{-6}\\,\\mathrm m$', '$1\\,\\mathrm m$'], 'Si usa $\\Delta L=\\dfrac{NL}{EA}$. Il numeratore è $2000$ e il denominatore $2\\cdot10^7$, quindi $\\Delta L=10^{-4}\\,\\mathrm m$.'),
  q('In un problema lineare di flessione con carichi e vincoli invariati, raddoppiando ovunque $EI$ gli spostamenti dovuti ai carichi:', 'si dimezzano', ['raddoppiano', 'quadruplicano', 'restano uguali'], 'Nel modello lineare la curvatura e gli spostamenti da carico sono inversamente proporzionali alla rigidezza flessionale $EI$.'),
  q('Per un incastro posto in $x=0$, nel modello di trave di Euler-Bernoulli, le condizioni cinematiche sono:', '$v(0)=0$ e $v\\prime(0)=0$', ['$v(0)=0$ soltanto', '$v^{\\prime\\prime}(0)=0$ e $v^{\\prime\\prime\\prime}(0)=0$', '$v\\prime(0)=1$'], 'L’incastro impedisce sia lo spostamento trasversale sia la rotazione della sezione. Nel modello la rotazione è collegata alla derivata prima di $v$.'),
  q('Per una trave elastica, con convenzione $\\chi=\\dfrac M{EI}$, se $M=20\\,\\mathrm{N\\,m}$ ed $EI=1000\\,\\mathrm{N\\,m^2}$, la curvatura è:', '$0{,}02\\,\\mathrm{m^{-1}}$', ['$50\\,\\mathrm{m^{-1}}$', '$0{,}02\\,\\mathrm m$', '$20000\\,\\mathrm{m^{-1}}$'], 'Applicando la relazione assegnata, $\\chi=\\dfrac{20}{1000}=0{,}02\\,\\mathrm{m^{-1}}$. L’unità è l’inverso di una lunghezza.'),
]);

competenza('stabilita', 'Instabilità e carico critico', 'scienza-delle-costruzioni', 'stabilita', [
  q('Per un’asta ideale di Eulero, $N_{cr}=\\dfrac{\\pi^2EI}{L_0^2}$. Se la lunghezza libera d’inflessione $L_0$ raddoppia, a $EI$ fisso, il carico critico:', 'diventa un quarto', ['raddoppia', 'si dimezza', 'quadruplica'], 'La lunghezza compare al quadrato al denominatore. Sostituendo $2L_0$, il denominatore cresce di un fattore $4$.'),
  q('Nella formula di Eulero, se il momento d’inerzia $I$ quadruplica lasciando invariati $E$ e $L_0$, il carico critico:', 'quadruplica', ['raddoppia', 'diventa un quarto', 'resta uguale'], 'La formula $N_{cr}=\\dfrac{\\pi^2EI}{L_0^2}$ è lineare rispetto a $I$. Quindi lo stesso fattore $4$ si applica al carico critico.'),
  q('L’instabilità flessionale di Eulero riguarda principalmente un’asta snella sottoposta a:', 'compressione assiale', ['trazione assiale', 'sola pressione idrostatica senza azione assiale', 'solo aumento uniforme della temperatura senza vincoli'], 'L’azione di compressione può amplificare una piccola deviazione laterale fino alla perdita di stabilità della configurazione rettilinea.'),
  q('Per un’asta isotropa con vincoli equivalenti nelle due direzioni principali e diverse inerzie di sezione, l’instabilità avviene prima nella direzione associata:', 'al minore momento d’inerzia', ['al maggiore momento d’inerzia', 'sempre all’asse orizzontale, indipendentemente dalla sezione', 'sempre all’asse verticale, indipendentemente dalla sezione'], 'A $E$ e $L_0$ uguali, il minore valore di $I$ produce il minore carico critico nella formula di Eulero.'),
]);

competenza('lagrange', 'Coordinate e equazioni di Lagrange', 'meccanica-razionale', 'equazioni-di-lagrange', [
  q('Un pendolo semplice rigido si muove in un piano. Quante coordinate indipendenti servono a descriverne la configurazione?', '$1$', ['$2$', '$3$', '$0$'], 'La lunghezza dell’asta è fissata. La posizione della massa si determina con il solo angolo del pendolo.'),
  q('Per $L=\\dfrac12m\\dot x^2-\\dfrac12kx^2$, con $m,k>0$, l’equazione di Lagrange è:', '$m\\ddot x+kx=0$', ['$m\\ddot x-kx=0$', '$m\\dot x+kx=0$', '$m\\ddot x=0$'], 'Si ha $\\dfrac{d}{dt}\\left(\\dfrac{\\partial L}{\\partial\\dot x}\\right)=m\\ddot x$ e $\\dfrac{\\partial L}{\\partial x}=-kx$. La differenza richiesta da Lagrange dà $m\\ddot x+kx=0$.'),
  q('Se una coordinata $q$ non compare esplicitamente in una lagrangiana, in assenza di forze generalizzate aggiuntive, si conserva:', '$\\dfrac{\\partial L}{\\partial\\dot q}$', ['$q$ in ogni caso', '$\\dot q$ in ogni caso', '$\\dfrac{\\partial L}{\\partial t}$ in ogni caso'], 'L’equazione di Lagrange diventa $\\dfrac{d}{dt}\\left(\\dfrac{\\partial L}{\\partial\\dot q}\\right)=0$. Quindi il momento coniugato è costante.'),
  q('Si definisce $V$ come energia potenziale delle forze conservative. Per un sistema naturale la lagrangiana è:', '$L=T-V$', ['$L=T+V$', '$L=TV$', '$L=V-T$ con gli stessi momenti coniugati'], 'Con questa definizione di energia potenziale, la convenzione usuale è energia cinetica meno energia potenziale: $L=T-V$.'),
]);

competenza('portata', 'Portata e continuità', 'idraulica', 'cinematica-dei-fluidi', [
  q('In una condotta la velocità media è $2\\,\\mathrm{m/s}$ e l’area è $0{,}03\\,\\mathrm{m^2}$. Qual è la portata volumetrica?', '$0{,}06\\,\\mathrm{m^3/s}$', ['$\\dfrac{2}{0{,}03}\\,\\mathrm{m^3/s}$', '$0{,}015\\,\\mathrm{m^3/s}$', '$6\\,\\mathrm{m^3/s}$'], 'La portata volumetrica è $Q=Av=0{,}03\\cdot2=0{,}06\\,\\mathrm{m^3/s}$.'),
  q('In moto stazionario incomprimibile, senza derivazioni, la sezione di una condotta si dimezza. La velocità media:', 'raddoppia', ['si dimezza', 'resta uguale', 'quadruplica'], 'La continuità impone $A_1v_1=A_2v_2$. Con $A_2=\\dfrac{A_1}{2}$ si ottiene $v_2=2v_1$.'),
  q('Una portata volumetrica di $0{,}002\\,\\mathrm{m^3/s}$ equivale a:', '$2\\,\\mathrm{L/s}$', ['$0{,}002\\,\\mathrm{L/s}$', '$2000\\,\\mathrm{L/s}$', '$0{,}2\\,\\mathrm{L/s}$'], 'Un metro cubo equivale a $1000$ litri. Quindi $0{,}002\\cdot1000=2\\,\\mathrm{L/s}$.'),
  q('Per un fluido con densità $1000\\,\\mathrm{kg/m^3}$ e portata volumetrica $0{,}01\\,\\mathrm{m^3/s}$, la portata massica è:', '$10\\,\\mathrm{kg/s}$', ['$0{,}00001\\,\\mathrm{kg/s}$', '$100\\,\\mathrm{kg/s}$', '$1000\\,\\mathrm{kg/s}$'], 'La portata massica è $\\dot m=\\rho Q=1000\\cdot0{,}01=10\\,\\mathrm{kg/s}$.'),
]);

competenza('bernoulli', 'Carico ed equazione di Bernoulli', 'idraulica', 'teorema-di-bernoulli', [
  q('Con coefficiente cinetico unitario, quale espressione rappresenta il carico totale?', '$z+\\dfrac{p}{\\rho g}+\\dfrac{v^2}{2g}$', ['$z+p+v$', '$z+\\dfrac{p}{\\rho}+\\dfrac{v}{2g}$', '$\\rho gz+p+\\dfrac{v^2}{2}$'], 'Il carico totale somma quota geometrica, altezza piezometrica di pressione e altezza cinetica. Ogni termine ha dimensione di una lunghezza.'),
  q('In un tratto orizzontale ideale, stazionario, incomprimibile e senza macchine, lungo una linea di corrente la velocità aumenta. La pressione:', 'diminuisce', ['aumenta', 'resta necessariamente uguale', 'diventa necessariamente negativa'], 'In queste ipotesi Bernoulli mantiene costante $\\dfrac{p}{\\rho g}+\\dfrac{v^2}{2g}$. Se il termine cinetico aumenta, quello di pressione diminuisce.'),
  q('Con $v=4\\,\\mathrm{m/s}$ e $g=10\\,\\mathrm{m/s^2}$, l’altezza cinetica vale:', '$0{,}8\\,\\mathrm m$', ['$0{,}2\\,\\mathrm m$', '$1{,}6\\,\\mathrm m$', '$40\\,\\mathrm m$'], 'L’altezza cinetica è $\\dfrac{v^2}{2g}=\\dfrac{16}{20}=0{,}8\\,\\mathrm m$.'),
  q('Una pompa ideale aggiunge $5\\,\\mathrm m$ di carico a una corrente. In assenza di altre perdite e macchine, il carico totale a valle rispetto a monte:', 'aumenta di $5\\,\\mathrm m$', ['diminuisce di $5\\,\\mathrm m$', 'resta invariato', 'raddoppia sempre'], 'La pompa fornisce energia alla corrente. Il contributo di prevalenza entra come incremento del carico totale.'),
]);

competenza('perdite', 'Perdite di carico nelle condotte', 'idraulica', 'perdite-di-carico', [
  q('Nella formula $h_f=\\lambda\\dfrac LD\\dfrac{v^2}{2g}$, se $\\lambda,L,D,g$ restano fissi e $v$ raddoppia, la perdita di carico:', 'quadruplica', ['raddoppia', 'si dimezza', 'resta uguale'], 'La velocità compare al quadrato. Sostituendo $2v$ si ottiene il fattore $\\dfrac{(2v)^2}{v^2}=4$.'),
  q('Una perdita localizzata vale $h_l=K\\dfrac{v^2}{2g}$. Per $K=2$, $v=3\\,\\mathrm{m/s}$ e $g=10\\,\\mathrm{m/s^2}$ si ottiene:', '$0{,}9\\,\\mathrm m$', ['$0{,}3\\,\\mathrm m$', '$1{,}8\\,\\mathrm m$', '$90\\,\\mathrm m$'], 'Sostituendo i dati: $h_l=\\dfrac{2\\cdot9}{20}=0{,}9\\,\\mathrm m$.'),
  q('Due tratti consecutivi di condotta, senza macchine, hanno perdite di carico $2\\,\\mathrm m$ e $3\\,\\mathrm m$. La perdita totale è:', '$5\\,\\mathrm m$', ['$1\\,\\mathrm m$', '$6\\,\\mathrm m$', '$\\dfrac65\\,\\mathrm m$'], 'Lungo lo stesso percorso le perdite di energia si sommano: $h_{tot}=2+3=5\\,\\mathrm m$.'),
  q('Il numero di Reynolds di una condotta circolare è $Re=\\dfrac{vD}{\\nu}$. Questa quantità è:', 'adimensionale', ['una velocità', 'una lunghezza', 'una pressione'], 'Il numeratore $vD$ ha unità $\\mathrm{m^2/s}$, come la viscosità cinematica $\\nu$. Il rapporto non ha unità.'),
]);

competenza('distribuzioni', 'Variabili aleatorie e distribuzioni', 'statistica', 'variabili-discrete', [
  q('Una variabile di Bernoulli vale $1$ con probabilità $p$ e $0$ con probabilità $1-p$. Il suo valore atteso è:', '$p$', ['$1-p$', '$p^2$', '$1$'], 'Il valore atteso è la somma dei valori pesati con le probabilità: $1\\cdot p+0\\cdot(1-p)=p$.'),
  q('Per $X$ binomiale con $n=10$ e $p=0{,}3$, quanto vale $E[X]$?', '$3$', ['$0{,}3$', '$7$', '$30$'], 'Una binomiale conta i successi in $n$ prove indipendenti. Il valore atteso è $np=10\\cdot0{,}3=3$.'),
  q('Una variabile discreta vale $0$ e $2$ con probabilità $\\dfrac12$ ciascuno. Qual è la varianza?', '$1$', ['$2$', '$0$', '$4$'], 'La media è $1$. Gli scarti quadratici sono entrambi $1$, quindi la loro media pesata vale $1$.'),
  q('Una densità di probabilità continua deve avere integrale sull’intera retta uguale a:', '$1$', ['$0$', '$+\\infty$', 'qualunque numero positivo'], 'L’integrale della densità sull’intero insieme dei valori rappresenta la probabilità totale, che è uno.'),
]);

competenza('coniche', 'Parabole e coniche', 'matematica-superiori-3', 'parabola', [
  q('Qual è il vertice della parabola $y=(x-2)^2-3$?', '$(2,-3)$', ['$(-2,-3)$', '$(2,3)$', '$(-2,3)$'], 'Nella forma $y=(x-h)^2+k$, il vertice è $(h,k)$. Qui $h=2$ e $k=-3$.'),
  q('L’ellisse $\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$ ha semiasse maggiore lungo $x$ di misura:', '$3$', ['$9$', '$2$', '$5$'], 'Il denominatore del termine in $x$ è il quadrato del semiasse: $a^2=9$, quindi $a=3$.'),
  q('L’iperbole $xy=1$ ha i due rami:', 'nel primo e nel terzo quadrante', ['nel secondo e nel quarto quadrante', 'nel primo e nel secondo quadrante', 'nel terzo e nel quarto quadrante'], 'Il prodotto è positivo, quindi $x$ e $y$ hanno lo stesso segno. Le due possibilità individuano primo e terzo quadrante.'),
  q('Quali sono le ascisse dei punti di intersezione tra $y=x^2$ e $y=4$?', '$-2$ e $2$', ['$2$ soltanto', '$-4$ e $4$', '$0$ e $4$'], 'Alle intersezioni vale $x^2=4$. Le due soluzioni reali sono $x=-2$ e $x=2$.'),
]);

competenza('geometria-solida', 'Geometria nello spazio', 'matematica-superiori-5', 'geometria-spazio', [
  q('Un cubo ha spigolo $2\\,\\mathrm{cm}$. Qual è il volume?', '$8\\,\\mathrm{cm^3}$', ['$6\\,\\mathrm{cm^3}$', '$12\\,\\mathrm{cm^3}$', '$24\\,\\mathrm{cm^3}$'], 'Il volume del cubo è il cubo dello spigolo: $V=2^3=8\\,\\mathrm{cm^3}$.'),
  q('Quale vettore è normale al piano $z=2$?', '$(0,0,1)$', ['$(1,0,0)$', '$(0,1,0)$', '$(1,1,0)$'], 'Il piano ha equazione $0x+0y+1z-2=0$. Un vettore normale è formato dai coefficienti delle coordinate, cioè $(0,0,1)$.'),
  q('La sfera $(x-1)^2+y^2+(z+2)^2=9$ ha centro:', '$(1,0,-2)$', ['$(-1,0,2)$', '$(1,0,2)$', '$(0,1,-2)$'], 'La forma standard è $(x-a)^2+(y-b)^2+(z-c)^2=r^2$. Si leggono $a=1$, $b=0$ e $c=-2$.'),
  q('Qual è la distanza tra il punto $(1,1,5)$ e il piano $z=2$?', '$3$', ['$5$', '$7$', '$\\sqrt{27}$'], 'La direzione normale al piano è verticale. La distanza è il valore assoluto della differenza delle quote: $|5-2|=3$.'),
]);

competenza('deduzioni', 'Problemi di deduzione', 'logica-concorsi', 'problemi-di-deduzione', [
  q('Tre libri sono in fila. Il verde è dopo il rosso e il blu è dopo il verde. Qual è l’ordine da sinistra a destra?', 'Rosso, verde, blu', ['Verde, rosso, blu', 'Blu, verde, rosso', 'Rosso, blu, verde'], 'Le due condizioni impongono rosso prima di verde e verde prima di blu. L’unico ordine compatibile è rosso, verde, blu.'),
  q('In un recinto ci sono soltanto galline e conigli: in tutto $3$ animali e $10$ zampe. Quanti conigli ci sono, assumendo due zampe per gallina e quattro per coniglio?', '$2$', ['$1$', '$3$', '$0$'], 'Con tre galline ci sarebbero sei zampe. Ogni coniglio sostituito a una gallina aggiunge due zampe; per arrivare a dieci ne servono due.'),
  q('Tutti i membri del gruppo A sono laureati. Alcuni laureati sono musicisti. Quale conclusione è necessariamente vera?', 'Ogni membro di A è laureato', ['Almeno un membro di A è musicista', 'Tutti i musicisti appartengono ad A', 'Nessun membro di A è musicista'], 'La prima affermazione ripete una premessa. Le premesse non specificano se i laureati musicisti appartengano al gruppo A.'),
  q('Un codice usa due cifre distinte scelte tra $1,2,3,4$. La prima è minore della seconda e la somma è $7$. Qual è il codice?', '$34$', ['$43$', '$25$', '$16$'], 'Tra le cifre ammesse, solo $3$ e $4$ hanno somma $7$. La condizione di ordine impone $34$.'),
]);

competenza('insiemi', 'Insiemi e diagrammi di Venn', 'logica-concorsi', 'insiemi-e-venn', [
  q('Un insieme A contiene $25$ persone e B ne contiene $20$. Otto persone appartengono a entrambi. Quante persone appartengono ad almeno uno dei due insiemi?', '$37$', ['$45$', '$53$', '$17$'], 'La somma $25+20$ conta due volte gli otto elementi comuni. Quindi $|A\\cup B|=25+20-8=37$.'),
  q('Se $A\\subseteq B$, l’intersezione $A\\cap B$ è:', '$A$', ['$B$ in ogni caso', 'sempre vuota', '$B\\setminus A$ in ogni caso'], 'Ogni elemento di A appartiene già a B. Gli elementi comuni sono quindi esattamente quelli di A.'),
  q('Nell’universo $U=\\{1,2,3,4,5\\}$, qual è il complementare di $A=\\{2,4\\}$?', '$\\{1,3,5\\}$', ['$\\{2,4\\}$', '$\\{1,2,3,4,5\\}$', '$\\{1,5\\}$'], 'Il complementare contiene gli elementi dell’universo che non appartengono ad A. Togliendo $2$ e $4$ restano $1,3,5$.'),
  q('Due insiemi disgiunti A e B hanno:', 'intersezione vuota', ['unione vuota necessariamente', 'gli stessi elementi', 'lo stesso numero di elementi necessariamente'], 'Disgiunti significa che non esiste alcun elemento comune. Per definizione, $A\\cap B=\\varnothing$.'),
]);

competenza('comprensione', 'Comprensione di testi e vincoli', 'tolc-i', 'comprensione-verbale', [
  q('Un avviso dice: «La biblioteca apre dal lunedì al venerdì dalle 9 alle 18, il sabato dalle 9 alle 13. È chiusa la domenica». Secondo l’avviso, quando è aperta?', 'Sabato alle 12', ['Sabato alle 14', 'Domenica alle 10', 'Lunedì alle 19'], 'Il sabato l’intervallo di apertura termina alle 13, quindi le 12 rientrano nell’orario. Gli altri orari indicati sono esclusi dall’avviso.'),
  q('Un regolamento dice: «Per partecipare è necessario iscriversi. L’iscrizione non garantisce l’ammissione, perché i posti sono limitati». Quale conclusione è giustificata dal testo?', 'Una persona iscritta può non essere ammessa', ['Chi si iscrive è certamente ammesso', 'Si può partecipare senza iscrizione', 'Nessun iscritto viene ammesso'], 'Il testo dichiara l’iscrizione necessaria e precisa che non è sufficiente. È quindi possibile essere iscritti senza ottenere un posto.'),
  q('Un rapporto afferma: «Tra gennaio e marzo sono state registrate 120 iscrizioni». Quale conclusione è sostenuta dal solo testo?', 'Nel periodo gennaio-marzo sono state registrate 120 iscrizioni', ['Nell’intero anno ci saranno 480 iscrizioni', 'Ogni mese ha avuto esattamente 40 iscrizioni', 'Le iscrizioni sono aumentate rispetto all’anno precedente'], 'Il testo fornisce soltanto il totale del periodo. Non specifica distribuzione mensile, andamento futuro o confronto con altri anni.'),
  q('La frase è: «Anna ha restituito a Luca il suo libro». Dal solo enunciato è certo a chi appartenga il libro?', 'No, il possessivo può riferirsi a persone diverse', ['Sì, certamente ad Anna', 'Sì, certamente a Luca', 'Sì, certamente a entrambi'], 'Il possessivo «suo» può avere più antecedenti senza altro contesto. Il destinatario della restituzione non rende univoco il proprietario.'),
]);

competenza('inglese', 'Inglese: frasi e istruzioni', 'tolc-i', 'inglese', [
  q('Completa la frase: «She ___ mathematics every day».', 'studies', ['study', 'studying', 'are studying'], 'Con il soggetto «she», al present simple il verbo prende la forma di terza persona singolare: «studies».'),
  q('Un cartello dice: «Visitors must show a ticket at the entrance». Che cosa richiede?', 'I visitatori devono mostrare un biglietto all’ingresso', ['I visitatori possono entrare sempre senza biglietto', 'I visitatori devono comprare due biglietti', 'Il biglietto va mostrato soltanto all’uscita'], '«Must» esprime un obbligo e «at the entrance» indica l’ingresso. Il cartello richiede di mostrare lì il biglietto.'),
  q('Completa: «This building is ___ than that one».', 'taller', ['tallest', 'more tallness', 'most tall'], 'La presenza di «than» richiede un confronto. Il comparativo dell’aggettivo breve «tall» è «taller».'),
  q('Nel contesto «The temperature increased», «increased» significa:', 'è aumentata', ['è diminuita', 'è rimasta invariata', 'è stata misurata una sola volta'], 'Il verbo «increase» indica un aumento della quantità citata, qui la temperatura.'),
]);

competenza('reti', 'Indirizzi IPv4 e sottoreti', 'informatica-superiori-5', 'ipv4-e-sottoreti', [
  q('Qual è l’indirizzo di rete dell’host $192.168.1.10/24$?', '$192.168.1.0$', ['$192.168.1.10$', '$192.168.1.255$', '$192.168.0.0$'], 'Il prefisso /24 fissa i primi 24 bit, cioè i primi tre ottetti. Azzerando gli otto bit host si ottiene 192.168.1.0.'),
  q('Una sottorete IPv4 /26, con indirizzi di rete e broadcast esclusi e senza usi speciali, permette quanti indirizzi host?', '$62$', ['$64$', '$26$', '$30$'], 'Restano $32-26=6$ bit host, quindi $2^6=64$ indirizzi. Escludendo rete e broadcast ne restano $62$.'),
  q('Quanti bit contiene un indirizzo IPv4?', '$32$', ['$4$', '$8$', '$128$'], 'Un indirizzo IPv4 è composto da quattro ottetti. Ogni ottetto contiene otto bit, quindi $4\\cdot8=32$.'),
  q('Qual è l’indirizzo di broadcast della sottorete $192.168.1.64/26$?', '$192.168.1.127$', ['$192.168.1.64$', '$192.168.1.65$', '$192.168.1.255$'], 'Un blocco /26 contiene 64 indirizzi. A partire da 64, l’ultimo è $64+63=127$, ottenuto ponendo a uno tutti i bit host.'),
]);

competenza('algoritmi', 'Algoritmi e complessità', 'informatica-superiori-5', 'complessita-algoritmi', [
  q('La ricerca binaria standard su un vettore ordinato di $n$ elementi richiede, nel caso peggiore, un numero di confronti dell’ordine di:', '$\\log n$', ['$n$', '$n^2$', '$2^n$'], 'Ogni confronto dimezza l’intervallo di ricerca. Dopo circa $\\log_2 n$ dimezzamenti resta al massimo un elemento.'),
  q('Due cicli annidati eseguono ciascuno $n$ iterazioni, e il corpo interno ha costo costante. Il numero totale di esecuzioni del corpo è:', '$n^2$', ['$2n$', '$n$', '$\\log n$'], 'Per ciascuna delle $n$ iterazioni esterne si eseguono $n$ iterazioni interne. Il prodotto è $n\\cdot n=n^2$.'),
  q('Per cercare un valore in un vettore non ordinato, la scansione lineare può richiedere nel caso peggiore:', 'l’esame di tutti gli $n$ elementi', ['un solo confronto per ogni vettore', 'sempre $\\log_2 n$ confronti', 'nessun accesso agli elementi'], 'Se il valore è assente, oppure si trova soltanto nell’ultima posizione, tutti gli elementi devono essere controllati.'),
  q('Un algoritmo con tempo $T(n)=3n+20$ ha crescita asintotica:', '$\\Theta(n)$', ['$\\Theta(n^2)$', '$\\Theta(1)$', '$\\Theta(2^n)$'], 'Per $n$ grande il termine lineare domina la costante. Il fattore moltiplicativo 3 non cambia l’ordine di crescita lineare.'),
]);

competenza('automi', 'Automi e computabilità', 'informatica-superiori-5', 'automi-e-computabilita', [
  q('Un automa deve riconoscere le stringhe binarie con un numero pari di simboli 1. Quale informazione minima occorre distinguere tra uno stato e l’altro?', 'Se il numero di 1 letti è pari oppure dispari', ['L’intera stringa già letta', 'Il numero esatto di zeri', 'Soltanto l’ultimo simbolo'], 'Leggere uno 0 lascia invariata la parità; leggere un 1 la inverte. Bastano quindi due stati che rappresentino pari e dispari.'),
  q('In un automa finito deterministico completo, per ogni stato e ogni simbolo dell’alfabeto esiste:', 'esattamente una transizione uscente per quel simbolo', ['nessuna transizione', 'almeno due transizioni con lo stesso simbolo', 'una transizione soltanto dagli stati finali'], 'Il determinismo impone unicità e la completezza impone esistenza della transizione per ogni coppia stato-simbolo.'),
  q('Quale stringa appartiene al linguaggio descritto da $a^*b^*$?', 'aaabb', ['bba', 'ababa', 'ba'], 'L’espressione ammette prima zero o più a e poi zero o più b. «aaabb» rispetta questo ordine; le altre stringhe tornano a una a dopo una b.'),
  q('Esiste un algoritmo che decida correttamente per ogni programma e ogni input se il programma terminerà?', 'No, il problema generale dell’arresto è indecidibile', ['Sì, basta eseguire il programma per un minuto', 'Sì, basta contare le righe del programma', 'Sì, ogni programma termina per definizione'], 'L’indecidibilità riguarda un metodo universale per tutti i programmi e input. Alcuni casi particolari restano decidibili.'),
]);

competenza('calcolo-numerico', 'Errori e metodi numerici', 'informatica-superiori-5', 'errori-e-zeri', [
  q('Il valore esatto è $2$ e un’approssimazione è $1{,}98$. Qual è l’errore assoluto?', '$0{,}02$', ['$0{,}01$', '$0{,}04$', '$3{,}98$'], 'L’errore assoluto è il valore assoluto della differenza: $|2-1{,}98|=0{,}02$.'),
  q('Una funzione continua su $[a,b]$ soddisfa $f(a)f(b)<0$. Che cosa è garantito?', 'Almeno uno zero nell’intervallo aperto $(a,b)$', ['Esattamente uno zero', 'Nessuno zero', 'Uno zero necessariamente nel punto medio'], 'Il teorema degli zeri garantisce l’esistenza di almeno uno zero. Il cambio di segno non garantisce da solo l’unicità o la posizione nel punto medio.'),
  q('Un passo del metodo di bisezione su $[1,3]$ valuta inizialmente la funzione nel punto:', '$2$', ['$1{,}5$', '$3$', '$4$'], 'La bisezione usa il punto medio dell’intervallo: $\\dfrac{1+3}{2}=2$.'),
  q('La regola del trapezio su $[0,2]$ per $f(x)=x$ dà:', '$2$', ['$4$', '$1$', '$0$'], 'La formula è $\\dfrac{b-a}{2}[f(a)+f(b)]$. Quindi $\\dfrac22(0+2)=2$, che per una funzione lineare è anche il valore esatto.'),
]);

competenza('atomo', 'Atomi, ioni e legami', 'chimica-semestre-filtro', 'atomo-legami-termodinamica', [
  q('Un atomo neutro ha numero atomico $Z=6$. Quanti elettroni possiede?', '$6$', ['$12$', '$3$', '$0$'], 'Il numero atomico conta i protoni. In un atomo neutro il numero di elettroni è uguale a quello dei protoni, quindi è $6$.'),
  q('Due isotopi dello stesso elemento differiscono nel numero di:', 'neutroni', ['protoni', 'protoni ed elettroni necessariamente', 'nuclei per atomo'], 'Lo stesso elemento ha lo stesso numero atomico e quindi gli stessi protoni. Gli isotopi hanno invece diverso numero di neutroni.'),
  q('Un legame covalente implica principalmente:', 'la condivisione di una o più coppie di elettroni', ['la fusione dei nuclei', 'la conversione dei protoni in neutroni', 'l’assenza di elettroni tra gli atomi'], 'Nel legame covalente gli atomi condividono densità elettronica, descritta nel modello elementare come coppie di elettroni condivise.'),
  q('Rispetto all’atomo neutro di sodio, lo ione $\\mathrm{Na^+}$ ha:', 'un elettrone in meno', ['un protone in più', 'un neutrone in meno', 'un elettrone in più'], 'La carica positiva unitaria deriva dalla perdita di un elettrone. Il nucleo, e quindi il numero di protoni, resta quello del sodio.'),
]);

competenza('stechiometria', 'Moli e rapporti stechiometrici', 'chimica-semestre-filtro', 'reazioni-cinetica-equilibrio', [
  q('Per la reazione $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, quante moli di idrogeno reagiscono con $3\\,\\mathrm{mol}$ di ossigeno?', '$6\\,\\mathrm{mol}$', ['$3\\,\\mathrm{mol}$', '$1{,}5\\,\\mathrm{mol}$', '$9\\,\\mathrm{mol}$'], 'Il rapporto stechiometrico tra idrogeno e ossigeno è $2:1$. Per tre moli di ossigeno servono $2\\cdot3=6$ moli di idrogeno.'),
  q('Assumendo per l’acqua massa molare $18\\,\\mathrm{g/mol}$, a quante moli corrispondono $36\\,\\mathrm g$?', '$2\\,\\mathrm{mol}$', ['$0{,}5\\,\\mathrm{mol}$', '$648\\,\\mathrm{mol}$', '$18\\,\\mathrm{mol}$'], 'La quantità di sostanza è $n=\\dfrac mM=\\dfrac{36}{18}=2\\,\\mathrm{mol}$.'),
  q('Nella reazione $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$ si mescolano $3\\,\\mathrm{mol}$ di $\\mathrm{H_2}$ e $2\\,\\mathrm{mol}$ di $\\mathrm{O_2}$. Con reazione completa, quante moli d’acqua si possono ottenere al massimo?', '$3\\,\\mathrm{mol}$', ['$4\\,\\mathrm{mol}$', '$5\\,\\mathrm{mol}$', '$2\\,\\mathrm{mol}$'], 'Tre moli di idrogeno richiedono solo $1{,}5$ moli di ossigeno, quindi l’idrogeno è limitante. Il rapporto tra idrogeno e acqua è $1:1$, perciò si formano tre moli d’acqua.'),
  q('Qual è il bilanciamento con i più piccoli coefficienti interi della reazione tra monossido di carbonio e ossigeno che forma anidride carbonica?', '$2\\mathrm{CO}+\\mathrm{O_2}\\to2\\mathrm{CO_2}$', ['$\\mathrm{CO}+\\mathrm{O_2}\\to\\mathrm{CO_2}$', '$2\\mathrm{CO}+2\\mathrm{O_2}\\to\\mathrm{CO_2}$', '$\\mathrm{CO}+\\mathrm{O_2}\\to2\\mathrm{CO_2}$'], 'Con coefficienti $2,1,2$ ci sono due atomi di carbonio e quattro di ossigeno su entrambi i lati. Gli altri schemi non conservano tutti gli atomi.'),
]);

competenza('soluzioni', 'Concentrazione e diluizione', 'chimica-semestre-filtro', 'soluzioni-proprieta-colligative', [
  q('Si sciolgono $0{,}5\\,\\mathrm{mol}$ di soluto e si porta il volume finale a $2\\,\\mathrm L$. Qual è la concentrazione molare?', '$0{,}25\\,\\mathrm{mol/L}$', ['$1\\,\\mathrm{mol/L}$', '$4\\,\\mathrm{mol/L}$', '$0{,}5\\,\\mathrm{mol/L}$'], 'La concentrazione molare è $c=\\dfrac nV=\\dfrac{0{,}5}{2}=0{,}25\\,\\mathrm{mol/L}$. Il volume da usare è quello finale della soluzione.'),
  q('Si diluiscono $0{,}10\\,\\mathrm L$ di soluzione $2\\,\\mathrm{mol/L}$ fino a $0{,}50\\,\\mathrm L$, senza reazioni o perdite di soluto. Qual è la concentrazione finale?', '$0{,}40\\,\\mathrm{mol/L}$', ['$10\\,\\mathrm{mol/L}$', '$1\\,\\mathrm{mol/L}$', '$0{,}10\\,\\mathrm{mol/L}$'], 'Le moli si conservano: $c_1V_1=c_2V_2$. Quindi $c_2=\\dfrac{2\\cdot0{,}10}{0{,}50}=0{,}40\\,\\mathrm{mol/L}$.'),
  q('Una soluzione contiene $10\\,\\mathrm g$ di soluto e $90\\,\\mathrm g$ di solvente. Qual è la percentuale in massa del soluto?', '$10\\%$', ['$\\dfrac{100}{9}\\%$', '$90\\%$', '$1\\%$'], 'La massa della soluzione è $10+90=100\\,\\mathrm g$. La frazione massica è $\\dfrac{10}{100}=0{,}10$, cioè il $10\\%$.'),
  q('Per una soluzione ideale diluita di un non elettrolita, a temperatura costante, se la concentrazione molare raddoppia, la pressione osmotica:', 'raddoppia', ['si dimezza', 'quadruplica', 'resta invariata'], 'La legge di van ’t Hoff per un non elettrolita è $\\pi=cRT$. A $R$ e $T$ fissi, la pressione osmotica è proporzionale a $c$.'),
]);

competenza('acidi', 'Acidi, basi e reazioni redox', 'chimica-semestre-filtro', 'acidi-basi-redox', [
  q('Approssimando l’attività con la concentrazione molare, una soluzione ha $[\\mathrm{H^+}]=10^{-3}\\,\\mathrm{mol/L}$. Qual è il pH?', '$3$', ['$-3$', '$11$', '$10^{-3}$'], 'Si applica $\\mathrm{pH}=-\\log_{10}[\\mathrm{H^+}]$. Quindi $-\\log_{10}(10^{-3})=3$.'),
  q('Secondo Brønsted-Lowry, un acido è una specie capace di:', 'donare un protone', ['accettare un protone soltanto', 'donare sempre un elettrone', 'aumentare necessariamente il numero di neutroni'], 'La definizione di Brønsted-Lowry identifica l’acido come donatore di protoni e la base come accettore.'),
  q('In una reazione redox, una specie che perde elettroni:', 'si ossida', ['si riduce', 'resta necessariamente invariata', 'diventa sempre un gas'], 'L’ossidazione corrisponde a una perdita di elettroni e a un aumento del numero di ossidazione della specie considerata.'),
  q('Quale coppia, presente in quantità confrontabili, può formare un tampone acido?', 'Acido acetico e acetato di sodio', ['Acido cloridrico e cloruro di sodio', 'Cloruro di sodio e acqua pura', 'Solo acido cloridrico concentrato'], 'Un tampone contiene un acido debole e la sua base coniugata. L’acido acetico e l’acetato costituiscono tale coppia.'),
]);

competenza('organica', 'Gruppi funzionali e struttura organica', 'chimica-semestre-filtro', 'gruppi-funzionali', [
  q('Nel composto $\\mathrm{CH_3CH_2OH}$, il gruppo funzionale caratteristico è:', 'il gruppo alcolico', ['il gruppo carbossilico', 'il gruppo ammidico', 'il gruppo aldeidico'], 'Il gruppo $-\\mathrm{OH}$ è legato a un carbonio saturo. Questa struttura caratterizza un alcol, qui l’etanolo.'),
  q('Quale formula generale rappresenta un’aldeide?', '$\\mathrm{R{-}CHO}$', ['$\\mathrm{R{-}COOH}$', '$\\mathrm{R{-}O{-}R\\prime}$', '$\\mathrm{R{-}NH_2}$'], 'Un’aldeide contiene un gruppo carbonilico con almeno un idrogeno legato al carbonio carbonilico: $\\mathrm{R{-}CHO}$.'),
  q('Il gruppo $-\\mathrm{COOH}$ è caratteristico:', 'degli acidi carbossilici', ['degli alcani', 'degli eteri', 'degli alcheni'], 'Il gruppo carbossilico contiene insieme carbonile e ossidrile sullo stesso carbonio. Identifica gli acidi carbossilici.'),
  q('Nel modello tetraedrico, un atomo di carbonio saturo legato a quattro sostituenti diversi è:', 'un centro stereogenico', ['necessariamente parte di un doppio legame', 'necessariamente un carbonio carbonilico', 'sempre privo di stereoisomeria'], 'Quattro sostituenti diversi attorno al carbonio tetraedrico permettono due disposizioni speculari non sovrapponibili in quel centro.'),
]);

competenza('biomolecole', 'Struttura e funzione delle biomolecole', 'chimica-semestre-filtro', 'biomolecole', [
  q('Un legame peptidico unisce tipicamente:', 'il gruppo carbossilico di un amminoacido e il gruppo amminico di un altro', ['due basi azotate complementari', 'due gruppi fosfato del DNA', 'due catene di glucosio tramite soli legami a idrogeno'], 'Il legame peptidico è un legame ammidico tra il carbonio del gruppo carbossilico e l’azoto del gruppo amminico di un altro amminoacido.'),
  q('Quale base è normalmente presente nell’RNA al posto della timina del DNA?', 'Uracile', ['Adenina', 'Guanina', 'Citosina'], 'RNA e DNA condividono adenina, guanina e citosina. L’RNA usa normalmente uracile dove il DNA contiene timina.'),
  q('Un enzima accelera una reazione principalmente perché:', 'abbassa l’energia di attivazione', ['modifica necessariamente la differenza di energia libera tra prodotti e reagenti', 'elimina ogni limite di equilibrio', 'viene consumato in modo stechiometrico a ogni ciclo'], 'L’enzima facilita un percorso con minore barriera di attivazione. Non cambia la differenza di energia libera tra gli stati iniziale e finale.'),
  q('Un fosfolipide di membrana è anfipatico perché presenta:', 'una regione idrofila e una regione idrofoba', ['soltanto regioni idrofile', 'soltanto regioni idrofobe', 'un nucleo cellulare proprio'], 'La testa polare interagisce con l’acqua, mentre le code idrofobe la evitano. Questa doppia natura favorisce la formazione del doppio strato.'),
]);

competenza('cellule', 'Membrane e organelli cellulari', 'biologia-semestre-filtro', 'strutture-cellulari', [
  q('La struttura di base della membrana plasmatica è:', 'un doppio strato lipidico con proteine associate', ['una parete rigida di DNA', 'un unico strato di nucleotidi', 'un insieme di soli ribosomi'], 'I lipidi anfipatici formano un doppio strato. Le proteine associate svolgono funzioni di trasporto, riconoscimento e segnalazione.'),
  q('Nelle cellule eucariotiche, la fosforilazione ossidativa mitocondriale è associata principalmente:', 'alla membrana mitocondriale interna', ['alla membrana nucleare esterna', 'al lume dei lisosomi', 'alla parete cellulare'], 'La catena di trasporto degli elettroni e l’ATP sintasi sono collocate nella membrana mitocondriale interna, che mantiene il gradiente protonico.'),
  q('Quale struttura sintetizza le catene polipeptidiche leggendo l’RNA messaggero?', 'Il ribosoma', ['Il lisosoma', 'Il centrosoma', 'Il nucleolo come sede esclusiva di traduzione'], 'Il ribosoma coordina mRNA e tRNA e catalizza la formazione dei legami peptidici durante la traduzione.'),
  q('I lisosomi svolgono principalmente una funzione di:', 'degradazione intracellulare mediante enzimi idrolitici', ['replicazione del DNA nucleare', 'sintesi diretta dell’RNA messaggero', 'organizzazione esclusiva del fuso mitotico'], 'I lisosomi contengono idrolasi attive in ambiente acido, che degradano materiale proveniente dall’esterno o componenti cellulari da riciclare.'),
]);

competenza('genetica', 'Genotipo e trasmissione dei caratteri', 'biologia-semestre-filtro', 'genetica-mutazioni', [
  q('In un incrocio mendeliano $Aa\\times Aa$, con segregazione regolare, qual è la probabilità di un discendente $aa$?', '$\\dfrac14$', ['$\\dfrac12$', '$\\dfrac34$', '$1$'], 'Ogni genitore produce gameti A e a con probabilità $\\dfrac12$. La combinazione aa ha probabilità $\\dfrac12\\cdot\\dfrac12=\\dfrac14$.'),
  q('Per un locus con alleli A e a, un individuo eterozigote ha genotipo:', '$Aa$', ['$AA$', '$aa$', 'A soltanto in una cellula diploide normale'], 'Eterozigote significa che i due alleli del locus sono diversi. Nel caso indicato, la coppia è Aa.'),
  q('Dire che l’allele A è dominante rispetto ad a, in un modello mendeliano semplice, significa che:', 'il fenotipo dell’eterozigote Aa corrisponde a quello associato ad A', ['A è necessariamente l’allele più frequente nella popolazione', 'A impedisce sempre la trasmissione di a', 'tutti gli individui hanno genotipo AA'], 'La dominanza descrive il rapporto tra genotipo e fenotipo nell’eterozigote. Non determina da sola la frequenza o la trasmissione degli alleli.'),
  q('Una mutazione puntiforme che sostituisce una base del DNA:', 'può avere effetti diversi, anche nessun cambiamento della proteina', ['cambia sempre tutti gli amminoacidi della proteina', 'raddoppia sempre il numero dei cromosomi', 'è sempre letale'], 'L’effetto dipende dalla posizione e dal codone. La degenerazione del codice genetico può rendere la sostituzione sinonima, mentre altre sostituzioni hanno effetti differenti.'),
]);

competenza('dna', 'Replicazione ed espressione genica', 'biologia-semestre-filtro', 'flusso-informazione', [
  q('La replicazione del DNA è semiconservativa perché ogni doppia elica figlia contiene:', 'un filamento preesistente e uno neosintetizzato', ['due filamenti interamente preesistenti', 'due filamenti di solo RNA', 'un solo filamento complessivo'], 'I due filamenti parentali si separano e ciascuno guida la sintesi di un filamento complementare nuovo.'),
  q('La trascrizione produce normalmente:', 'RNA a partire da uno stampo di DNA', ['DNA a partire da proteine', 'proteine a partire direttamente da lipidi', 'ribosomi a partire da zuccheri senza informazione genetica'], 'Durante la trascrizione una RNA polimerasi usa uno stampo di DNA per sintetizzare un RNA complementare.'),
  q('Durante la sintesi di un nuovo filamento di DNA, la DNA polimerasi aggiunge nucleotidi all’estremità:', '$3\\prime$', ['$5\\prime$', 'a entrambe le estremità senza preferenza', 'al centro del filamento senza estremità libera'], 'L’aggiunta richiede un gruppo ossidrile libero in posizione 3′. Perciò il filamento nuovo si allunga in direzione 5′→3′.'),
  q('Un codone dell’RNA messaggero è formato da:', 'tre nucleotidi', ['un amminoacido', 'due nucleotidi', 'sei amminoacidi'], 'Il codice genetico viene letto a triplette. Ogni codone contiene tre nucleotidi e specifica un amminoacido oppure un segnale di terminazione.'),
]);

competenza('ciclo-cellulare', 'Ciclo cellulare, mitosi e meiosi', 'biologia-semestre-filtro', 'ciclo-cellulare', [
  q('Nel ciclo cellulare eucariotico, la duplicazione del DNA avviene principalmente durante la fase:', 'S', ['G1', 'G2', 'citodieresi'], 'La fase S dell’interfase è dedicata alla replicazione del DNA. Le fasi G1 e G2 precedono e seguono questo processo.'),
  q('In una mitosi regolare di una cellula diploide, ciascun nucleo figlio riceve:', 'lo stesso numero di cromosomi del nucleo prima della replicazione', ['la metà del numero di cromosomi', 'il doppio del numero di cromosomi', 'nessun cromosoma'], 'La mitosi separa le copie duplicate distribuendole ai due nuclei. Il numero di cromosomi per nucleo viene mantenuto.'),
  q('La prima divisione meiotica separa principalmente:', 'i cromosomi omologhi', ['i cromatidi fratelli di ogni cromosoma', 'le singole basi del DNA', 'i ribosomi'], 'Nella meiosi I gli omologhi di ciascuna coppia vengono separati, mentre i cromatidi fratelli restano uniti fino alla meiosi II.'),
  q('Un controllo del ciclo cellulare che rileva danni al DNA può:', 'ritardare la progressione per consentire la riparazione', ['garantire sempre che ogni danno venga riparato', 'eliminare la necessità della replicazione', 'trasformare automaticamente ogni cellula in un gamete'], 'I punti di controllo possono arrestare o rallentare la progressione e attivare risposte al danno. La riparazione non è garantita in ogni caso.'),
]);

competenza('terra', 'Processi e sistemi della Terra', 'tolc-s', 'scienze-della-terra', [
  q('Una roccia magmatica si forma principalmente attraverso:', 'raffreddamento e solidificazione di materiale fuso', ['compattazione di sedimenti senza fusione', 'sola evaporazione dell’acqua marina in ogni caso', 'sola trasformazione di una roccia allo stato solido'], 'Le rocce magmatiche derivano dalla solidificazione di magma o lava. Sedimentazione e metamorfismo descrivono altri processi.'),
  q('La successione delle stagioni sulla Terra dipende principalmente:', 'dall’inclinazione dell’asse terrestre rispetto al piano orbitale e dalla rivoluzione', ['soltanto dalla variazione della distanza Terra-Sole', 'dalla rotazione della Luna attorno alla Terra', 'dalle eruzioni vulcaniche'], 'L’asse inclinato fa variare durante l’anno altezza del Sole e durata del giorno nei due emisferi, determinando la successione delle stagioni.'),
  q('Nel ciclo dell’acqua, l’evaporazione è il passaggio:', 'dallo stato liquido a quello aeriforme', ['dallo stato aeriforme a quello liquido', 'dallo stato solido a quello liquido', 'dallo stato liquido a quello solido'], 'L’evaporazione porta molecole d’acqua dalla fase liquida a quella di vapore. Il passaggio inverso è la condensazione.'),
  q('Una zona di subduzione si trova tipicamente presso un margine di placche:', 'convergente', ['divergente', 'trasforme puro, senza convergenza', 'completamente fermo per definizione'], 'Nella subduzione una placca scende sotto un’altra mentre le placche convergono. Il processo è quindi associato a un margine convergente.'),
]);

// La selezione distingue basi propedeutiche e nuclei del corso. I collegamenti
// locali prevalgono sui materiali condivisi quando il capitolo è presente.
export const PROFILI_STUDIO = {
  "precorso": {
    "materia": "precorso",
    "titolo": "Precorso",
    "gruppo": "Università",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "potenze"
    ],
    "corso": [
      "algebra",
      "equazioni",
      "funzioni",
      "disequazioni",
      "trigonometria",
      "logica",
      "geometria"
    ],
    "inizio": {
      "titolo": "Primo argomento di Precorso",
      "url": "/precorso/logica/teoria"
    },
    "materialiPerCompetenza": {
      "potenze": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/potenze-e-radici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/potenze-e-radici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/potenze-e-radici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "algebra": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/polinomi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/polinomi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/polinomi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/equazioni-polinomiali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/equazioni-polinomiali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/equazioni-polinomiali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "disequazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/equazioni-polinomiali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/equazioni-polinomiali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/equazioni-polinomiali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "trigonometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/goniometriche/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/goniometriche/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/goniometriche/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/logica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/logica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/logica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/precorso/geometria-analitica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/precorso/geometria-analitica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/precorso/geometria-analitica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "analisi-1": {
    "materia": "analisi-1",
    "titolo": "Analisi matematica 1",
    "gruppo": "Università",
    "prerequisiti": [
      "algebra",
      "disequazioni",
      "funzioni",
      "trigonometria"
    ],
    "corso": [
      "limiti",
      "derivate",
      "integrali",
      "serie",
      "complessi",
      "equazioni-differenziali"
    ],
    "inizio": {
      "titolo": "Primo argomento di Analisi matematica 1",
      "url": "/analisi-1/insiemi/teoria"
    },
    "materialiPerCompetenza": {
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/insiemi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/insiemi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/insiemi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "limiti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/limiti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/limiti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/limiti/esercizi",
          "tipo": "esercizi"
        }
      ],
      "derivate": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/derivate/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/derivate/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/derivate/esercizi",
          "tipo": "esercizi"
        }
      ],
      "integrali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/integrali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/integrali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/integrali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "serie": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/serie/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/serie/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/serie/esercizi",
          "tipo": "esercizi"
        }
      ],
      "complessi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/numeri-complessi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/numeri-complessi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/numeri-complessi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni-differenziali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-1/equazioni-differenziali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-1/equazioni-differenziali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-1/equazioni-differenziali/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "analisi-2": {
    "materia": "analisi-2",
    "titolo": "Analisi matematica 2",
    "gruppo": "Università",
    "prerequisiti": [
      "derivate",
      "integrali",
      "vettori",
      "matrici"
    ],
    "corso": [
      "multivariabile",
      "integrali-multipli",
      "campi",
      "serie",
      "equazioni-differenziali"
    ],
    "inizio": {
      "titolo": "Primo argomento di Analisi matematica 2",
      "url": "/analisi-2/funzioni-di-piu-variabili/teoria"
    },
    "materialiPerCompetenza": {
      "multivariabile": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-2/calcolo-differenziale/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-2/calcolo-differenziale/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-2/calcolo-differenziale/esercizi",
          "tipo": "esercizi"
        }
      ],
      "integrali-multipli": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-2/integrali-doppi-e-tripli/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-2/integrali-doppi-e-tripli/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-2/integrali-doppi-e-tripli/esercizi",
          "tipo": "esercizi"
        }
      ],
      "campi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-2/campi-vettoriali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-2/campi-vettoriali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-2/campi-vettoriali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "serie": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-2/successioni-e-serie-di-funzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-2/successioni-e-serie-di-funzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-2/successioni-e-serie-di-funzioni/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "analisi-3": {
    "materia": "analisi-3",
    "titolo": "Analisi matematica 3",
    "gruppo": "Università",
    "prerequisiti": [
      "complessi",
      "serie",
      "integrali",
      "multivariabile"
    ],
    "corso": [
      "analisi-complessa",
      "misura",
      "spazi-funzionali",
      "trasformate",
      "equazioni-differenziali"
    ],
    "inizio": {
      "titolo": "Primo argomento di Analisi matematica 3",
      "url": "/analisi-3/funzioni-complesse/teoria"
    },
    "materialiPerCompetenza": {
      "analisi-complessa": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-3/integrali-complessi-e-residui/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-3/integrali-complessi-e-residui/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-3/integrali-complessi-e-residui/esercizi",
          "tipo": "esercizi"
        }
      ],
      "misura": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-3/misura-e-integrale-di-lebesgue/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-3/misura-e-integrale-di-lebesgue/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-3/misura-e-integrale-di-lebesgue/esercizi",
          "tipo": "esercizi"
        }
      ],
      "spazi-funzionali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-3/spazi-lp-e-hilbert/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-3/spazi-lp-e-hilbert/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-3/spazi-lp-e-hilbert/esercizi",
          "tipo": "esercizi"
        }
      ],
      "trasformate": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-3/trasformata-di-laplace/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-3/trasformata-di-laplace/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-3/trasformata-di-laplace/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni-differenziali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/analisi-3/equazioni-derivate-parziali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/analisi-3/equazioni-derivate-parziali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/analisi-3/equazioni-derivate-parziali/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "algebra-lineare": {
    "materia": "algebra-lineare",
    "titolo": "Algebra lineare e geometria analitica",
    "gruppo": "Università",
    "prerequisiti": [
      "equazioni",
      "algebra",
      "logica"
    ],
    "corso": [
      "vettori",
      "matrici",
      "sistemi",
      "autovalori",
      "geometria"
    ],
    "inizio": {
      "titolo": "Primo argomento di Algebra lineare e geometria analitica",
      "url": "/algebra-lineare/vettori/teoria"
    },
    "materialiPerCompetenza": {
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/algebra-lineare/vettori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/algebra-lineare/vettori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/algebra-lineare/vettori/esercizi",
          "tipo": "esercizi"
        }
      ],
      "matrici": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/algebra-lineare/matrici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/algebra-lineare/matrici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/algebra-lineare/matrici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sistemi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/algebra-lineare/sistemi-lineari/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/algebra-lineare/sistemi-lineari/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/algebra-lineare/sistemi-lineari/esercizi",
          "tipo": "esercizi"
        }
      ],
      "autovalori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/algebra-lineare/autovalori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/algebra-lineare/autovalori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/algebra-lineare/autovalori/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-1": {
    "materia": "fisica-1",
    "titolo": "Fisica 1",
    "gruppo": "Università",
    "prerequisiti": [
      "unita",
      "vettori",
      "derivate",
      "equazioni",
      "trigonometria"
    ],
    "corso": [
      "cinematica",
      "dinamica",
      "energia",
      "termodinamica",
      "rotazioni",
      "fluidi"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 1",
      "url": "/fisica-1/grandezze-e-vettori/teoria"
    },
    "materialiPerCompetenza": {
      "unita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/grandezze-e-vettori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/grandezze-e-vettori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/grandezze-e-vettori/esercizi",
          "tipo": "esercizi"
        }
      ],
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/grandezze-e-vettori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/grandezze-e-vettori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/grandezze-e-vettori/esercizi",
          "tipo": "esercizi"
        }
      ],
      "cinematica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/cinematica-1d/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/cinematica-1d/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/cinematica-1d/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/leggi-di-newton/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/leggi-di-newton/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/leggi-di-newton/esercizi",
          "tipo": "esercizi"
        }
      ],
      "energia": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/lavoro-ed-energia/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/lavoro-ed-energia/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/lavoro-ed-energia/esercizi",
          "tipo": "esercizi"
        }
      ],
      "rotazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/corpo-rigido/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/corpo-rigido/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/corpo-rigido/esercizi",
          "tipo": "esercizi"
        }
      ],
      "fluidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/fluidi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/fluidi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/fluidi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "termodinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-1/primo-principio/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-1/primo-principio/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-1/primo-principio/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-2": {
    "materia": "fisica-2",
    "titolo": "Fisica 2",
    "gruppo": "Università",
    "prerequisiti": [
      "vettori",
      "integrali",
      "derivate",
      "energia"
    ],
    "corso": [
      "elettricita",
      "circuiti",
      "magnetismo",
      "induzione",
      "onde",
      "ottica"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 2",
      "url": "/fisica-2/carica-e-coulomb/teoria"
    },
    "materialiPerCompetenza": {
      "elettricita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-2/campo-elettrico/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-2/campo-elettrico/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-2/campo-elettrico/esercizi",
          "tipo": "esercizi"
        }
      ],
      "circuiti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-2/corrente-e-circuiti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-2/corrente-e-circuiti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-2/corrente-e-circuiti/esercizi",
          "tipo": "esercizi"
        }
      ],
      "magnetismo": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-2/campo-magnetico/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-2/campo-magnetico/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-2/campo-magnetico/esercizi",
          "tipo": "esercizi"
        }
      ],
      "induzione": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-2/induzione-elettromagnetica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-2/induzione-elettromagnetica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-2/induzione-elettromagnetica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "onde": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-2/equazioni-di-maxwell-e-onde/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-2/equazioni-di-maxwell-e-onde/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-2/equazioni-di-maxwell-e-onde/esercizi",
          "tipo": "esercizi"
        }
      ],
      "ottica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-2/ottica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-2/ottica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-2/ottica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "statica": {
    "materia": "statica",
    "titolo": "Statica",
    "gruppo": "Università",
    "prerequisiti": [
      "vettori",
      "trigonometria",
      "equazioni",
      "geometria"
    ],
    "corso": [
      "momenti",
      "equilibrio",
      "sezioni",
      "sollecitazioni"
    ],
    "inizio": {
      "titolo": "Primo argomento di Statica",
      "url": "/statica/sistemi-di-forze/teoria"
    },
    "materialiPerCompetenza": {
      "momenti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statica/sistemi-di-forze/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statica/sistemi-di-forze/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statica/sistemi-di-forze/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equilibrio": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statica/reazioni-vincolari/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statica/reazioni-vincolari/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statica/reazioni-vincolari/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sezioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statica/geometria-delle-masse/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statica/geometria-delle-masse/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statica/geometria-delle-masse/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sollecitazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statica/caratteristiche-della-sollecitazione/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statica/caratteristiche-della-sollecitazione/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statica/caratteristiche-della-sollecitazione/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "meccanica-razionale": {
    "materia": "meccanica-razionale",
    "titolo": "Meccanica razionale",
    "gruppo": "Università",
    "prerequisiti": [
      "derivate",
      "integrali",
      "vettori",
      "momenti"
    ],
    "corso": [
      "cinematica",
      "dinamica",
      "rotazioni",
      "energia",
      "lagrange"
    ],
    "inizio": {
      "titolo": "Primo argomento di Meccanica razionale",
      "url": "/meccanica-razionale/vettori-applicati/teoria"
    },
    "materialiPerCompetenza": {
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/vettori-applicati/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/vettori-applicati/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/vettori-applicati/esercizi",
          "tipo": "esercizi"
        }
      ],
      "momenti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/vettori-applicati/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/vettori-applicati/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/vettori-applicati/esercizi",
          "tipo": "esercizi"
        }
      ],
      "cinematica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/cinematica-del-punto/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/cinematica-del-punto/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/cinematica-del-punto/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/dinamica-del-punto/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/dinamica-del-punto/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/dinamica-del-punto/esercizi",
          "tipo": "esercizi"
        }
      ],
      "rotazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/cinematica-del-rigido/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/cinematica-del-rigido/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/cinematica-del-rigido/esercizi",
          "tipo": "esercizi"
        }
      ],
      "energia": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/dinamica-dei-sistemi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/dinamica-dei-sistemi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/dinamica-dei-sistemi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "lagrange": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/meccanica-razionale/equazioni-di-lagrange/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/meccanica-razionale/equazioni-di-lagrange/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/meccanica-razionale/equazioni-di-lagrange/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "scienza-delle-costruzioni": {
    "materia": "scienza-delle-costruzioni",
    "titolo": "Scienza delle costruzioni",
    "gruppo": "Università",
    "prerequisiti": [
      "equilibrio",
      "momenti",
      "sezioni",
      "derivate"
    ],
    "corso": [
      "sollecitazioni",
      "tensioni",
      "elasticita",
      "stabilita"
    ],
    "inizio": {
      "titolo": "Primo argomento di Scienza delle costruzioni",
      "url": "/scienza-delle-costruzioni/statica-vincoli/teoria"
    },
    "materialiPerCompetenza": {
      "equilibrio": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/statica-vincoli/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/statica-vincoli/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/statica-vincoli/esercizi",
          "tipo": "esercizi"
        }
      ],
      "momenti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/statica-vincoli/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/statica-vincoli/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/statica-vincoli/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sezioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/geometria-sezioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/geometria-sezioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/geometria-sezioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sollecitazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/sollecitazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/sollecitazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/sollecitazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "tensioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/tensioni-deformazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/tensioni-deformazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/tensioni-deformazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "elasticita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/linea-elastica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/linea-elastica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/linea-elastica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "stabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/scienza-delle-costruzioni/stabilita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/scienza-delle-costruzioni/stabilita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/scienza-delle-costruzioni/stabilita/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "idraulica": {
    "materia": "idraulica",
    "titolo": "Idraulica",
    "gruppo": "Università",
    "prerequisiti": [
      "unita",
      "equazioni",
      "energia",
      "integrali"
    ],
    "corso": [
      "fluidi",
      "portata",
      "bernoulli",
      "perdite"
    ],
    "inizio": {
      "titolo": "Primo argomento di Idraulica",
      "url": "/idraulica/idrostatica/teoria"
    },
    "materialiPerCompetenza": {
      "fluidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/idraulica/idrostatica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/idraulica/idrostatica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/idraulica/idrostatica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "portata": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/idraulica/cinematica-dei-fluidi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/idraulica/cinematica-dei-fluidi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/idraulica/cinematica-dei-fluidi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "bernoulli": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/idraulica/teorema-di-bernoulli/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/idraulica/teorema-di-bernoulli/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/idraulica/teorema-di-bernoulli/esercizi",
          "tipo": "esercizi"
        }
      ],
      "perdite": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/idraulica/perdite-di-carico/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/idraulica/perdite-di-carico/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/idraulica/perdite-di-carico/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-generale": {
    "materia": "matematica-generale",
    "titolo": "Matematica generale",
    "gruppo": "Università",
    "prerequisiti": [
      "percentuali",
      "algebra",
      "equazioni",
      "funzioni"
    ],
    "corso": [
      "limiti",
      "derivate",
      "integrali",
      "regimi-finanziari",
      "sistemi",
      "multivariabile"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica generale",
      "url": "/matematica-generale/funzioni/teoria"
    },
    "materialiPerCompetenza": {
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/funzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/funzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/funzioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "limiti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/limiti-e-continuita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/limiti-e-continuita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/limiti-e-continuita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "derivate": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/derivate/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/derivate/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/derivate/esercizi",
          "tipo": "esercizi"
        }
      ],
      "integrali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/integrali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/integrali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/integrali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "regimi-finanziari": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/matematica-finanziaria/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/matematica-finanziaria/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/matematica-finanziaria/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sistemi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/matrici-e-sistemi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/matrici-e-sistemi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/matrici-e-sistemi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "multivariabile": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-generale/funzioni-di-due-variabili/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-generale/funzioni-di-due-variabili/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-generale/funzioni-di-due-variabili/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-finanziaria": {
    "materia": "matematica-finanziaria",
    "titolo": "Matematica finanziaria",
    "gruppo": "Università",
    "prerequisiti": [
      "percentuali",
      "potenze",
      "equazioni",
      "successioni"
    ],
    "corso": [
      "regimi-finanziari",
      "rendite",
      "valutazione-finanziaria"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica finanziaria",
      "url": "/matematica-finanziaria/regimi-e-tassi/teoria"
    },
    "materialiPerCompetenza": {
      "regimi-finanziari": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-finanziaria/regimi-e-tassi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-finanziaria/regimi-e-tassi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-finanziaria/regimi-e-tassi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "rendite": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-finanziaria/rendite-costanti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-finanziaria/rendite-costanti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-finanziaria/rendite-costanti/esercizi",
          "tipo": "esercizi"
        }
      ],
      "valutazione-finanziaria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-finanziaria/valutazione-investimenti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-finanziaria/valutazione-investimenti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-finanziaria/valutazione-investimenti/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "statistica": {
    "materia": "statistica",
    "titolo": "Statistica e probabilità",
    "gruppo": "Università",
    "prerequisiti": [
      "percentuali",
      "algebra",
      "funzioni",
      "integrali"
    ],
    "corso": [
      "dati",
      "probabilita",
      "condizionata",
      "inferenza",
      "distribuzioni"
    ],
    "inizio": {
      "titolo": "Primo argomento di Statistica e probabilità",
      "url": "/statistica/dati-e-frequenze/teoria"
    },
    "materialiPerCompetenza": {
      "dati": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statistica/indici-descrittivi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statistica/indici-descrittivi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statistica/indici-descrittivi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "probabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statistica/probabilita-e-combinatoria/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statistica/probabilita-e-combinatoria/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statistica/probabilita-e-combinatoria/esercizi",
          "tipo": "esercizi"
        }
      ],
      "condizionata": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statistica/probabilita-condizionata/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statistica/probabilita-condizionata/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statistica/probabilita-condizionata/esercizi",
          "tipo": "esercizi"
        }
      ],
      "inferenza": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statistica/test-di-ipotesi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statistica/test-di-ipotesi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statistica/test-di-ipotesi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "distribuzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/statistica/variabili-discrete/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/statistica/variabili-discrete/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/statistica/variabili-discrete/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-superiori-1": {
    "materia": "matematica-superiori-1",
    "titolo": "Matematica 1° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "potenze"
    ],
    "corso": [
      "algebra",
      "equazioni",
      "disequazioni",
      "logica",
      "geometria",
      "dati"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica 1° anno",
      "url": "/matematica-superiori-1/numeri-e-operazioni/teoria"
    },
    "materialiPerCompetenza": {
      "aritmetica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/numeri-e-operazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/numeri-e-operazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/numeri-e-operazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "percentuali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/potenze-proporzioni-percentuali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/potenze-proporzioni-percentuali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/potenze-proporzioni-percentuali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "potenze": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/potenze-proporzioni-percentuali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/potenze-proporzioni-percentuali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/potenze-proporzioni-percentuali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "algebra": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/monomi-e-polinomi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/monomi-e-polinomi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/monomi-e-polinomi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/equazioni-primo-grado/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/equazioni-primo-grado/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/equazioni-primo-grado/esercizi",
          "tipo": "esercizi"
        }
      ],
      "disequazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/disequazioni-primo-grado/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/disequazioni-primo-grado/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/disequazioni-primo-grado/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/insiemi-e-logica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/insiemi-e-logica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/insiemi-e-logica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/geometria-piano-triangoli/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/geometria-piano-triangoli/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/geometria-piano-triangoli/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dati": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-1/dati-e-statistica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-1/dati-e-statistica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-1/dati-e-statistica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-superiori-2": {
    "materia": "matematica-superiori-2",
    "titolo": "Matematica 2° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "algebra",
      "equazioni",
      "percentuali",
      "geometria"
    ],
    "corso": [
      "sistemi",
      "potenze",
      "disequazioni",
      "funzioni",
      "probabilita",
      "dati"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica 2° anno",
      "url": "/matematica-superiori-2/sistemi-lineari/teoria"
    },
    "materialiPerCompetenza": {
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/piano-cartesiano-e-retta/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/piano-cartesiano-e-retta/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/piano-cartesiano-e-retta/esercizi",
          "tipo": "esercizi"
        }
      ],
      "sistemi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/sistemi-lineari/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/sistemi-lineari/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/sistemi-lineari/esercizi",
          "tipo": "esercizi"
        }
      ],
      "potenze": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/radicali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/radicali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/radicali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "disequazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/disequazioni-secondo-grado/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/disequazioni-secondo-grado/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/disequazioni-secondo-grado/esercizi",
          "tipo": "esercizi"
        }
      ],
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/piano-cartesiano-e-retta/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/piano-cartesiano-e-retta/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/piano-cartesiano-e-retta/esercizi",
          "tipo": "esercizi"
        }
      ],
      "probabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/probabilita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/probabilita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/probabilita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dati": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-2/statistica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-2/statistica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-2/statistica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-superiori-3": {
    "materia": "matematica-superiori-3",
    "titolo": "Matematica 3° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "equazioni",
      "algebra",
      "disequazioni",
      "geometria"
    ],
    "corso": [
      "funzioni",
      "coniche",
      "logaritmi",
      "dati"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica 3° anno",
      "url": "/matematica-superiori-3/equazioni-e-disequazioni/teoria"
    },
    "materialiPerCompetenza": {
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/equazioni-e-disequazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/equazioni-e-disequazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/equazioni-e-disequazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "disequazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/equazioni-e-disequazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/equazioni-e-disequazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/equazioni-e-disequazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/piano-cartesiano-e-retta/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/piano-cartesiano-e-retta/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/piano-cartesiano-e-retta/esercizi",
          "tipo": "esercizi"
        }
      ],
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/funzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/funzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/funzioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "coniche": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/parabola/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/parabola/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/parabola/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logaritmi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/logaritmi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/logaritmi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/logaritmi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dati": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-3/statistica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-3/statistica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-3/statistica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-superiori-4": {
    "materia": "matematica-superiori-4",
    "titolo": "Matematica 4° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "algebra",
      "equazioni",
      "funzioni",
      "geometria"
    ],
    "corso": [
      "trigonometria",
      "logaritmi",
      "complessi",
      "successioni",
      "probabilita",
      "geometria-solida"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica 4° anno",
      "url": "/matematica-superiori-4/funzioni-goniometriche/teoria"
    },
    "materialiPerCompetenza": {
      "trigonometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-4/funzioni-goniometriche/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-4/funzioni-goniometriche/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-4/funzioni-goniometriche/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logaritmi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-4/logaritmi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-4/logaritmi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-4/logaritmi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "complessi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-4/numeri-complessi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-4/numeri-complessi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-4/numeri-complessi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "successioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-4/successioni-e-progressioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-4/successioni-e-progressioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-4/successioni-e-progressioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "probabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-4/probabilita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-4/probabilita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-4/probabilita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria-solida": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-4/geometria-solida/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-4/geometria-solida/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-4/geometria-solida/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-superiori-5": {
    "materia": "matematica-superiori-5",
    "titolo": "Matematica 5° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "funzioni",
      "algebra",
      "trigonometria",
      "logaritmi"
    ],
    "corso": [
      "limiti",
      "derivate",
      "integrali",
      "equazioni-differenziali",
      "probabilita",
      "geometria-solida"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica 5° anno",
      "url": "/matematica-superiori-5/funzioni/teoria"
    },
    "materialiPerCompetenza": {
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/funzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/funzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/funzioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "limiti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/limiti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/limiti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/limiti/esercizi",
          "tipo": "esercizi"
        }
      ],
      "derivate": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/derivate/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/derivate/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/derivate/esercizi",
          "tipo": "esercizi"
        }
      ],
      "integrali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/integrali-definiti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/integrali-definiti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/integrali-definiti/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni-differenziali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/equazioni-differenziali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/equazioni-differenziali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/equazioni-differenziali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "probabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/probabilita-e-distribuzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/probabilita-e-distribuzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/probabilita-e-distribuzioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria-solida": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-superiori-5/geometria-spazio/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-superiori-5/geometria-spazio/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-superiori-5/geometria-spazio/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-superiori-1": {
    "materia": "fisica-superiori-1",
    "titolo": "Fisica 1° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "equazioni",
      "geometria"
    ],
    "corso": [
      "unita",
      "misure",
      "vettori",
      "dinamica",
      "equilibrio",
      "fluidi"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 1° anno",
      "url": "/fisica-superiori-1/grandezze-e-unita/teoria"
    },
    "materialiPerCompetenza": {
      "unita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-1/grandezze-e-unita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-1/grandezze-e-unita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-1/grandezze-e-unita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "misure": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-1/misure-e-incertezze/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-1/misure-e-incertezze/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-1/misure-e-incertezze/esercizi",
          "tipo": "esercizi"
        }
      ],
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-1/vettori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-1/vettori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-1/vettori/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-1/forze/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-1/forze/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-1/forze/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equilibrio": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-1/equilibrio-punto/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-1/equilibrio-punto/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-1/equilibrio-punto/esercizi",
          "tipo": "esercizi"
        }
      ],
      "fluidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-1/pressione-fluidi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-1/pressione-fluidi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-1/pressione-fluidi/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-superiori-2": {
    "materia": "fisica-superiori-2",
    "titolo": "Fisica 2° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "unita",
      "equazioni",
      "percentuali",
      "vettori"
    ],
    "corso": [
      "cinematica",
      "dinamica",
      "energia",
      "termodinamica",
      "ottica"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 2° anno",
      "url": "/fisica-superiori-2/moto-uniforme/teoria"
    },
    "materialiPerCompetenza": {
      "cinematica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-2/moto-accelerato/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-2/moto-accelerato/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-2/moto-accelerato/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-2/principi-dinamica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-2/principi-dinamica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-2/principi-dinamica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "energia": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-2/lavoro-energia/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-2/lavoro-energia/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-2/lavoro-energia/esercizi",
          "tipo": "esercizi"
        }
      ],
      "termodinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-2/temperatura-dilatazione/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-2/temperatura-dilatazione/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-2/temperatura-dilatazione/esercizi",
          "tipo": "esercizi"
        }
      ],
      "ottica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-2/rifrazione-lenti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-2/rifrazione-lenti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-2/rifrazione-lenti/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-superiori-3": {
    "materia": "fisica-superiori-3",
    "titolo": "Fisica 3° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "unita",
      "vettori",
      "equazioni",
      "trigonometria"
    ],
    "corso": [
      "cinematica",
      "dinamica",
      "energia",
      "rotazioni",
      "fluidi"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 3° anno",
      "url": "/fisica-superiori-3/misure-vettori/teoria"
    },
    "materialiPerCompetenza": {
      "unita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/misure-vettori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/misure-vettori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/misure-vettori/esercizi",
          "tipo": "esercizi"
        }
      ],
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/misure-vettori/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/misure-vettori/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/misure-vettori/esercizi",
          "tipo": "esercizi"
        }
      ],
      "cinematica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/cinematica-rettilinea/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/cinematica-rettilinea/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/cinematica-rettilinea/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/leggi-newton/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/leggi-newton/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/leggi-newton/esercizi",
          "tipo": "esercizi"
        }
      ],
      "energia": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/lavoro-energia/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/lavoro-energia/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/lavoro-energia/esercizi",
          "tipo": "esercizi"
        }
      ],
      "rotazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/rotazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/rotazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/rotazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "fluidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-3/fluidi-equilibrio/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-3/fluidi-equilibrio/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-3/fluidi-equilibrio/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-superiori-4": {
    "materia": "fisica-superiori-4",
    "titolo": "Fisica 4° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "unita",
      "energia",
      "cinematica",
      "trigonometria"
    ],
    "corso": [
      "termodinamica",
      "onde",
      "ottica",
      "elettricita",
      "circuiti"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 4° anno",
      "url": "/fisica-superiori-4/temperatura-calore-gas/teoria"
    },
    "materialiPerCompetenza": {
      "termodinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-4/temperatura-calore-gas/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-4/temperatura-calore-gas/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-4/temperatura-calore-gas/esercizi",
          "tipo": "esercizi"
        }
      ],
      "onde": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-4/oscillazioni-onde/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-4/oscillazioni-onde/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-4/oscillazioni-onde/esercizi",
          "tipo": "esercizi"
        }
      ],
      "ottica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-4/ottica-geometrica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-4/ottica-geometrica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-4/ottica-geometrica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "elettricita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-4/carica-campo-elettrico/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-4/carica-campo-elettrico/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-4/carica-campo-elettrico/esercizi",
          "tipo": "esercizi"
        }
      ],
      "circuiti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-4/corrente-leggi-ohm/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-4/corrente-leggi-ohm/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-4/corrente-leggi-ohm/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-superiori-5": {
    "materia": "fisica-superiori-5",
    "titolo": "Fisica 5° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "vettori",
      "elettricita",
      "circuiti",
      "onde"
    ],
    "corso": [
      "magnetismo",
      "induzione",
      "moderna",
      "relativita"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica 5° anno",
      "url": "/fisica-superiori-5/campo-magnetico/teoria"
    },
    "materialiPerCompetenza": {
      "magnetismo": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-5/campo-magnetico/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-5/campo-magnetico/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-5/campo-magnetico/esercizi",
          "tipo": "esercizi"
        }
      ],
      "induzione": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-5/induzione-elettromagnetica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-5/induzione-elettromagnetica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-5/induzione-elettromagnetica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "moderna": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-5/crisi-fisica-classica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-5/crisi-fisica-classica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-5/crisi-fisica-classica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "relativita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-superiori-5/relativita-spazio-tempo/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-superiori-5/relativita-spazio-tempo/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-superiori-5/relativita-spazio-tempo/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "informatica-superiori-5": {
    "materia": "informatica-superiori-5",
    "titolo": "Informatica 5° anno",
    "gruppo": "Superiori",
    "prerequisiti": [
      "logica",
      "potenze",
      "funzioni",
      "algebra"
    ],
    "corso": [
      "reti",
      "algoritmi",
      "automi",
      "calcolo-numerico"
    ],
    "inizio": {
      "titolo": "Primo argomento di Informatica 5° anno",
      "url": "/informatica-superiori-5/reti-e-modelli/teoria"
    },
    "materialiPerCompetenza": {
      "reti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/informatica-superiori-5/ipv4-e-sottoreti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/informatica-superiori-5/ipv4-e-sottoreti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/informatica-superiori-5/ipv4-e-sottoreti/esercizi",
          "tipo": "esercizi"
        }
      ],
      "algoritmi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/informatica-superiori-5/complessita-algoritmi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/informatica-superiori-5/complessita-algoritmi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/informatica-superiori-5/complessita-algoritmi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "automi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/informatica-superiori-5/automi-e-computabilita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/informatica-superiori-5/automi-e-computabilita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/informatica-superiori-5/automi-e-computabilita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "calcolo-numerico": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/informatica-superiori-5/errori-e-zeri/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/informatica-superiori-5/errori-e-zeri/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/informatica-superiori-5/errori-e-zeri/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-concorsi": {
    "materia": "matematica-concorsi",
    "titolo": "Matematica per concorsi",
    "gruppo": "Concorsi",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "potenze"
    ],
    "corso": [
      "equazioni",
      "dati",
      "probabilita",
      "geometria",
      "successioni"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica per concorsi",
      "url": "/matematica-concorsi/numeri-e-calcolo/teoria"
    },
    "materialiPerCompetenza": {
      "aritmetica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/numeri-e-calcolo/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/numeri-e-calcolo/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/numeri-e-calcolo/esercizi",
          "tipo": "esercizi"
        }
      ],
      "percentuali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/proporzioni-e-percentuali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/proporzioni-e-percentuali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/proporzioni-e-percentuali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/equazioni-e-problemi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/equazioni-e-problemi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/equazioni-e-problemi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dati": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/statistica-e-grafici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/statistica-e-grafici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/statistica-e-grafici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "probabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/probabilita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/probabilita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/probabilita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/geometria/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/geometria/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/geometria/esercizi",
          "tipo": "esercizi"
        }
      ],
      "successioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-concorsi/successioni-numeriche/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-concorsi/successioni-numeriche/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-concorsi/successioni-numeriche/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "logica-concorsi": {
    "materia": "logica-concorsi",
    "titolo": "Logica per concorsi",
    "gruppo": "Concorsi",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "dati"
    ],
    "corso": [
      "logica",
      "deduzioni",
      "comprensione",
      "insiemi"
    ],
    "inizio": {
      "titolo": "Primo argomento di Logica per concorsi",
      "url": "/logica-concorsi/insiemi-e-venn/teoria"
    },
    "materialiPerCompetenza": {
      "logica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/logica-concorsi/connettivi-e-negazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/logica-concorsi/connettivi-e-negazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/logica-concorsi/connettivi-e-negazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "deduzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/logica-concorsi/problemi-di-deduzione/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/logica-concorsi/problemi-di-deduzione/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/logica-concorsi/problemi-di-deduzione/esercizi",
          "tipo": "esercizi"
        }
      ],
      "comprensione": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/logica-concorsi/logica-verbale/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/logica-concorsi/logica-verbale/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/logica-concorsi/logica-verbale/esercizi",
          "tipo": "esercizi"
        }
      ],
      "insiemi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/logica-concorsi/insiemi-e-venn/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/logica-concorsi/insiemi-e-venn/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/logica-concorsi/insiemi-e-venn/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-da-zero": {
    "materia": "matematica-da-zero",
    "titolo": "Matematica zero",
    "gruppo": "Percorso per principianti",
    "prerequisiti": [
      "aritmetica",
      "potenze",
      "percentuali"
    ],
    "corso": [
      "equazioni",
      "algebra",
      "geometria",
      "disequazioni",
      "funzioni"
    ],
    "inizio": {
      "titolo": "Primo argomento di Matematica zero",
      "url": "/matematica-da-zero/numeri-naturali/teoria"
    },
    "materialiPerCompetenza": {
      "aritmetica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/frazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/frazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/frazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "potenze": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/potenze-e-radici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/potenze-e-radici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/potenze-e-radici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "percentuali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/decimali-e-percentuali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/decimali-e-percentuali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/decimali-e-percentuali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/equazioni-primo-grado/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/equazioni-primo-grado/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/equazioni-primo-grado/esercizi",
          "tipo": "esercizi"
        }
      ],
      "algebra": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/monomi-e-polinomi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/monomi-e-polinomi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/monomi-e-polinomi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/piano-cartesiano-e-retta/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/piano-cartesiano-e-retta/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/piano-cartesiano-e-retta/esercizi",
          "tipo": "esercizi"
        }
      ],
      "disequazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/disequazioni-primo-grado/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/disequazioni-primo-grado/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/disequazioni-primo-grado/esercizi",
          "tipo": "esercizi"
        }
      ],
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-da-zero/piano-cartesiano-e-retta/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-da-zero/piano-cartesiano-e-retta/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-da-zero/piano-cartesiano-e-retta/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-zero": {
    "materia": "fisica-zero",
    "titolo": "Fisica zero",
    "gruppo": "Percorso per principianti",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "equazioni"
    ],
    "corso": [
      "unita",
      "vettori",
      "cinematica",
      "dinamica",
      "energia",
      "fluidi",
      "termodinamica",
      "circuiti"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica zero",
      "url": "/fisica-zero/grandezze-e-unita/teoria"
    },
    "materialiPerCompetenza": {
      "unita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/grandezze-e-unita/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/grandezze-e-unita/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/grandezze-e-unita/esercizi",
          "tipo": "esercizi"
        }
      ],
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/vettori-e-forze/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/vettori-e-forze/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/vettori-e-forze/esercizi",
          "tipo": "esercizi"
        }
      ],
      "cinematica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/moto-rettilineo/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/moto-rettilineo/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/moto-rettilineo/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/dinamica-ed-equilibrio/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/dinamica-ed-equilibrio/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/dinamica-ed-equilibrio/esercizi",
          "tipo": "esercizi"
        }
      ],
      "energia": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/lavoro-ed-energia/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/lavoro-ed-energia/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/lavoro-ed-energia/esercizi",
          "tipo": "esercizi"
        }
      ],
      "fluidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/pressione-e-fluidi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/pressione-e-fluidi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/pressione-e-fluidi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "termodinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/temperatura-e-calore/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/temperatura-e-calore/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/temperatura-e-calore/esercizi",
          "tipo": "esercizi"
        }
      ],
      "circuiti": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-zero/elettricita-e-circuiti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-zero/elettricita-e-circuiti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-zero/elettricita-e-circuiti/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "matematica-semestre-filtro": {
    "materia": "matematica-semestre-filtro",
    "titolo": "Basi di matematica per il semestre filtro",
    "gruppo": "Semestre filtro",
    "prerequisiti": [
      "aritmetica",
      "percentuali",
      "algebra"
    ],
    "corso": [
      "potenze",
      "unita",
      "equazioni",
      "funzioni",
      "logaritmi",
      "trigonometria",
      "vettori"
    ],
    "inizio": {
      "titolo": "Primo argomento di Basi di matematica per il semestre filtro",
      "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/teoria"
    },
    "materialiPerCompetenza": {
      "aritmetica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "percentuali": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/calcolo-e-proporzioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "potenze": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/potenze-e-notazione-scientifica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/potenze-e-notazione-scientifica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/potenze-e-notazione-scientifica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "unita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/unita-di-misura/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/unita-di-misura/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/unita-di-misura/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/equazioni-e-formule/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/equazioni-e-formule/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/equazioni-e-formule/esercizi",
          "tipo": "esercizi"
        }
      ],
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/funzioni-e-grafici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/funzioni-e-grafici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/funzioni-e-grafici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logaritmi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/esponenziali-e-logaritmi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/esponenziali-e-logaritmi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/esponenziali-e-logaritmi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "trigonometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/trigonometria/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/trigonometria/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/trigonometria/esercizi",
          "tipo": "esercizi"
        }
      ],
      "vettori": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/matematica-semestre-filtro/vettori-e-componenti/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/matematica-semestre-filtro/vettori-e-componenti/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/matematica-semestre-filtro/vettori-e-componenti/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "tolc-i": {
    "materia": "tolc-i",
    "titolo": "TOLC-I (Ingegneria)",
    "gruppo": "TOLC, OFA e test di ingresso",
    "prerequisiti": [
      "algebra",
      "equazioni",
      "geometria"
    ],
    "corso": [
      "funzioni",
      "logica",
      "comprensione",
      "dinamica",
      "atomo",
      "inglese"
    ],
    "inizio": {
      "titolo": "Primo argomento di TOLC-I (Ingegneria)",
      "url": "/tolc-i/aritmetica-e-algebra/teoria"
    },
    "materialiPerCompetenza": {
      "algebra": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/aritmetica-e-algebra/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/aritmetica-e-algebra/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/aritmetica-e-algebra/esercizi",
          "tipo": "esercizi"
        }
      ],
      "equazioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/aritmetica-e-algebra/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/aritmetica-e-algebra/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/aritmetica-e-algebra/esercizi",
          "tipo": "esercizi"
        }
      ],
      "geometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/geometria/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/geometria/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/geometria/esercizi",
          "tipo": "esercizi"
        }
      ],
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/funzioni-e-grafici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/funzioni-e-grafici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/funzioni-e-grafici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/logica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/logica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/logica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "comprensione": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/comprensione-verbale/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/comprensione-verbale/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/comprensione-verbale/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/fisica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/fisica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/fisica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "atomo": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/chimica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/chimica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/chimica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "inglese": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-i/inglese/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-i/inglese/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-i/inglese/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "tolc-s": {
    "materia": "tolc-s",
    "titolo": "TOLC-S (Scienze)",
    "gruppo": "TOLC, OFA e test di ingresso",
    "prerequisiti": [
      "algebra",
      "probabilita",
      "funzioni"
    ],
    "corso": [
      "logica",
      "comprensione",
      "cellule",
      "atomo",
      "fluidi",
      "terra",
      "inglese"
    ],
    "inizio": {
      "titolo": "Primo argomento di TOLC-S (Scienze)",
      "url": "/tolc-s/aritmetica-e-algebra/teoria"
    },
    "materialiPerCompetenza": {
      "algebra": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/aritmetica-e-algebra/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/aritmetica-e-algebra/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/aritmetica-e-algebra/esercizi",
          "tipo": "esercizi"
        }
      ],
      "probabilita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/probabilita-e-dati/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/probabilita-e-dati/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/probabilita-e-dati/esercizi",
          "tipo": "esercizi"
        }
      ],
      "funzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/funzioni-e-grafici/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/funzioni-e-grafici/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/funzioni-e-grafici/esercizi",
          "tipo": "esercizi"
        }
      ],
      "logica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/logica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/logica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/logica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "comprensione": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/comprensione-verbale/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/comprensione-verbale/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/comprensione-verbale/esercizi",
          "tipo": "esercizi"
        }
      ],
      "cellule": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/biologia/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/biologia/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/biologia/esercizi",
          "tipo": "esercizi"
        }
      ],
      "atomo": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/chimica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/chimica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/chimica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "terra": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/scienze-della-terra/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/scienze-della-terra/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/scienze-della-terra/esercizi",
          "tipo": "esercizi"
        }
      ],
      "inglese": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/tolc-s/inglese/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/tolc-s/inglese/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/tolc-s/inglese/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "fisica-semestre-filtro": {
    "materia": "fisica-semestre-filtro",
    "titolo": "Fisica per il semestre filtro di Medicina",
    "gruppo": "Semestre filtro",
    "prerequisiti": [
      "unita",
      "equazioni",
      "vettori",
      "trigonometria"
    ],
    "corso": [
      "cinematica",
      "fluidi",
      "termodinamica",
      "onde",
      "elettricita",
      "ottica"
    ],
    "inizio": {
      "titolo": "Primo argomento di Fisica per il semestre filtro di Medicina",
      "url": "/fisica-semestre-filtro/metodi-della-fisica/teoria"
    },
    "materialiPerCompetenza": {
      "unita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/metodi-della-fisica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/metodi-della-fisica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/metodi-della-fisica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "cinematica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/meccanica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/meccanica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/meccanica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "fluidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/fluidi/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/fluidi/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/fluidi/esercizi",
          "tipo": "esercizi"
        }
      ],
      "termodinamica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/termodinamica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/termodinamica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/termodinamica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "onde": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/onde-meccaniche/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/onde-meccaniche/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/onde-meccaniche/esercizi",
          "tipo": "esercizi"
        }
      ],
      "elettricita": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/elettricita-e-magnetismo/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/elettricita-e-magnetismo/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/elettricita-e-magnetismo/esercizi",
          "tipo": "esercizi"
        }
      ],
      "ottica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/fisica-semestre-filtro/radiazioni-e-ottica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/fisica-semestre-filtro/radiazioni-e-ottica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/fisica-semestre-filtro/radiazioni-e-ottica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "chimica-semestre-filtro": {
    "materia": "chimica-semestre-filtro",
    "titolo": "Chimica e propedeutica biochimica per il semestre filtro",
    "gruppo": "Semestre filtro",
    "prerequisiti": [
      "percentuali",
      "potenze",
      "equazioni"
    ],
    "corso": [
      "atomo",
      "stechiometria",
      "soluzioni",
      "acidi",
      "organica",
      "biomolecole"
    ],
    "inizio": {
      "titolo": "Primo argomento di Chimica e propedeutica biochimica per il semestre filtro",
      "url": "/chimica-semestre-filtro/atomo-legami-termodinamica/teoria"
    },
    "materialiPerCompetenza": {
      "atomo": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/chimica-semestre-filtro/atomo-legami-termodinamica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/chimica-semestre-filtro/atomo-legami-termodinamica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/chimica-semestre-filtro/atomo-legami-termodinamica/esercizi",
          "tipo": "esercizi"
        }
      ],
      "stechiometria": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/chimica-semestre-filtro/reazioni-cinetica-equilibrio/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/chimica-semestre-filtro/reazioni-cinetica-equilibrio/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/chimica-semestre-filtro/reazioni-cinetica-equilibrio/esercizi",
          "tipo": "esercizi"
        }
      ],
      "soluzioni": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/chimica-semestre-filtro/soluzioni-proprieta-colligative/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/chimica-semestre-filtro/soluzioni-proprieta-colligative/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/chimica-semestre-filtro/soluzioni-proprieta-colligative/esercizi",
          "tipo": "esercizi"
        }
      ],
      "acidi": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/chimica-semestre-filtro/acidi-basi-redox/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/chimica-semestre-filtro/acidi-basi-redox/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/chimica-semestre-filtro/acidi-basi-redox/esercizi",
          "tipo": "esercizi"
        }
      ],
      "organica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/chimica-semestre-filtro/gruppi-funzionali/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/chimica-semestre-filtro/gruppi-funzionali/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/chimica-semestre-filtro/gruppi-funzionali/esercizi",
          "tipo": "esercizi"
        }
      ],
      "biomolecole": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/chimica-semestre-filtro/biomolecole/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/chimica-semestre-filtro/biomolecole/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/chimica-semestre-filtro/biomolecole/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  },
  "biologia-semestre-filtro": {
    "materia": "biologia-semestre-filtro",
    "titolo": "Biologia per il semestre filtro",
    "gruppo": "Semestre filtro",
    "prerequisiti": [
      "logica",
      "probabilita",
      "atomo"
    ],
    "corso": [
      "cellule",
      "genetica",
      "dna",
      "ciclo-cellulare",
      "biomolecole"
    ],
    "inizio": {
      "titolo": "Primo argomento di Biologia per il semestre filtro",
      "url": "/biologia-semestre-filtro/organizzazione-biologica/teoria"
    },
    "materialiPerCompetenza": {
      "cellule": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/biologia-semestre-filtro/strutture-cellulari/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/biologia-semestre-filtro/strutture-cellulari/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/biologia-semestre-filtro/strutture-cellulari/esercizi",
          "tipo": "esercizi"
        }
      ],
      "genetica": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/biologia-semestre-filtro/genetica-mutazioni/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/biologia-semestre-filtro/genetica-mutazioni/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/biologia-semestre-filtro/genetica-mutazioni/esercizi",
          "tipo": "esercizi"
        }
      ],
      "dna": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/biologia-semestre-filtro/flusso-informazione/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/biologia-semestre-filtro/flusso-informazione/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/biologia-semestre-filtro/flusso-informazione/esercizi",
          "tipo": "esercizi"
        }
      ],
      "ciclo-cellulare": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/biologia-semestre-filtro/ciclo-cellulare/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/biologia-semestre-filtro/ciclo-cellulare/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/biologia-semestre-filtro/ciclo-cellulare/esercizi",
          "tipo": "esercizi"
        }
      ],
      "biomolecole": [
        {
          "titolo": "Teoria e definizioni",
          "url": "/biologia-semestre-filtro/organizzazione-biologica/teoria",
          "tipo": "teoria"
        },
        {
          "titolo": "Esempi svolti",
          "url": "/biologia-semestre-filtro/organizzazione-biologica/esercizi-svolti",
          "tipo": "svolti"
        },
        {
          "titolo": "Esercizi da provare",
          "url": "/biologia-semestre-filtro/organizzazione-biologica/esercizi",
          "tipo": "esercizi"
        }
      ]
    }
  }
};
