const L = (it, en) => ({ it, en });
const plain = value => typeof value === 'string' ? L(value, value) : value;
const equation = (line, denominator = '', tendsTo = '') => ({ line, denominator, tendsTo });
const example = (title, task, formula, steps) => ({ title, task, formula, steps });
const question = (skill, action, prompt, formula, choices, correct, explanation, mistakes = {}) =>
  ({ skill, action, prompt, formula, choices: choices.map(plain), correct, explanation, mistakes });
const goal = (title, detail) => ({ title, detail });

const limits = {
  headline: L('Come vuoi lavorare sui limiti?', 'How would you like to practise limits?'),
  goals: [
    goal(L('Capire il procedimento', 'Understand the method'), L('Cosa faccio quando sostituendo trovo 0/0?', 'What should I do when substitution gives 0/0?')),
    goal(L('Prepararmi allo scritto', 'Practise for my exam'), L('Vorrei scegliere da solo il passaggio giusto.', 'I want to pick the next step on my own.'))
  ],
  questions: {
    method: question(L('Forma indeterminata', 'Indeterminate forms'), L('Parti dalla forma 0/0', 'Start with the 0/0 form'),
      L('Sostituendo 2 ottieni 0/0. Cosa puoi concludere?', 'Substituting 2 gives 0/0. What can you conclude?'),
      equation('x² − 4', 'x − 2', 'x → 2'),
      [L('Il limite vale zero.', 'The limit is zero.'), L('Serve un altro passaggio.', 'Another step is needed.'), L('Il limite non esiste.', 'The limit does not exist.')], 1,
      L('Qui x² − 4 = (x − 2)(x + 2). Vicino a 2 puoi semplificare x − 2 e leggere il limite su x + 2.', 'Here x² − 4 = (x − 2)(x + 2). Near 2 you can cancel x − 2 and take the limit of x + 2.'),
      {0:L('Anche il denominatore tende a zero. Il solo numeratore non basta per stabilire il risultato.', 'The denominator also tends to zero. The numerator alone cannot determine the limit.'),2:L('Il rapporto è indefinito in 2, ma il limite dipende dai valori vicini a 2.', 'The ratio is undefined at 2, but the limit depends on nearby values.')}),
    practice: question(L('Semplificazione', 'Cancelling a factor'), L('Cerca il fattore comune', 'Find the common factor'),
      L('Per x ≠ 3, quale espressione equivale a questo rapporto?', 'For x ≠ 3, which expression equals this ratio?'),
      equation('x² − 9', 'x − 3'), ['x + 3', 'x − 3', 'x² − 3'], 0,
      L('Scrivi x² − 9 = (x − 3)(x + 3). Dividendo per il fattore x − 3 resta x + 3.', 'Write x² − 9 = (x − 3)(x + 3). Dividing by x − 3 leaves x + 3.')),
    support: question(L('Differenza di quadrati', 'Difference of squares'), L('Ripassa la differenza di quadrati', 'Review the difference of squares'),
      L('Quale prodotto ricostruisce il numeratore?', 'Which product gives the numerator?'), equation('x² − 4'),
      ['(x − 2)²', '(x − 2)(x + 2)', 'x(x − 4)'], 1,
      L('Moltiplicando (x − 2)(x + 2), i termini +2x e −2x si annullano e rimane x² − 4.', 'Expanding (x − 2)(x + 2) cancels +2x and −2x, leaving x² − 4.')),
    stretch: question(L('Valore del limite', 'Evaluating a limit'), L('Segui il segno dopo la semplificazione', 'Track the sign after cancelling'),
      L('Il denominatore ora è x + 2. Quanto vale il limite?', 'The denominator is now x + 2. What is the limit?'), equation('x² − 4', 'x + 2', 'x → −2'),
      ['0', '4', '−4'], 2,
      L('Per x ≠ −2 cancelli x + 2 e rimane x − 2. Quando x tende a −2 ottieni −2 − 2 = −4.', 'For x ≠ −2, cancel x + 2 to leave x − 2. As x tends to −2, this gives −2 − 2 = −4.'))
  },
  next: L('Prova un limite con due polinomi da scomporre', 'Try a limit that takes two factorisations'),
  samples: [
    example(L('Cancellare un fattore comune', 'Cancel a common factor'), L('Calcola il limite.', 'Find the limit.'), equation('x² − 16', 'x − 4', 'x → 4'), [
      L('Sostituendo 4 ottieni 0/0. Riscrivi il numeratore come (x − 4)(x + 4).', 'Substituting 4 gives 0/0. Rewrite the numerator as (x − 4)(x + 4).'),
      L('Per x diverso da 4 puoi dividere per x − 4. Resta x + 4.', 'For x unequal to 4 you can divide by x − 4. This leaves x + 4.'),
      L('Avvicinandoti a 4 il risultato si avvicina a 4 + 4 = 8.', 'As x approaches 4, the result approaches 4 + 4 = 8.')]),
    example(L('Quale fattore rimane?', 'Which factor remains?'), L('Riscrivi il rapporto e calcola il limite.', 'Rewrite the ratio and find the limit.'), equation('x² − 25', 'x + 5', 'x → −5'), [
      L('Il numeratore è (x − 5)(x + 5). Il fattore uguale al denominatore è x + 5.', 'The numerator is (x − 5)(x + 5). The factor matching the denominator is x + 5.'),
      L('Vicino a −5, con x ≠ −5, il rapporto coincide con x − 5.', 'Near −5, for x ≠ −5, the ratio equals x − 5.'),
      L('Su x − 5 la sostituzione è possibile. Ottieni −5 − 5 = −10.', 'You can now substitute into x − 5. This gives −5 − 5 = −10.')]),
    example(L('Due polinomi da scomporre', 'Factor both polynomials'), L('Trova il limite semplificando un solo fattore.', 'Find the limit by cancelling a single factor.'), equation('x² − 2x + 1', 'x² − 1', 'x → 1'), [
      L('Il numeratore è (x − 1)². Il denominatore è (x − 1)(x + 1).', 'The numerator is (x − 1)². The denominator is (x − 1)(x + 1).'),
      L('Per x vicino a 1 e diverso da 1, cancelli un fattore x − 1. Resta (x − 1)/(x + 1).', 'For x near but unequal to 1, cancel one x − 1 factor. This leaves (x − 1)/(x + 1).'),
      L('Il denominatore tende a 2. Il rapporto tende quindi a 0/2 = 0.', 'The denominator tends to 2. The ratio therefore tends to 0/2 = 0.')])
  ],
  syllabus: L('Limiti, derivate, integrali e serie', 'Limits, derivatives, integrals and series'),
  courseUse: L('Puoi aprire gli altri esercizi sui limiti e ritrovare i passaggi quando ripassi per lo scritto.', 'Open more limit problems and revisit the worked steps when you prepare for the exam.')
};

const motion = {
  headline: L('Come vuoi studiare il moto rettilineo?', 'How would you like to study motion in one dimension?'),
  goals: [
    goal(L('Capire le formule', 'Understand the formulas'), L('Voglio distinguere distanza, tempo e velocità.', 'I want to connect distance, time and velocity.')),
    goal(L('Risolvere un problema d’esame', 'Solve an exam problem'), L('Voglio combinare due tratti di uno stesso viaggio.', 'I want to combine the two legs of a journey.'))
  ],
  questions: {
    method: question(L('Tempo di percorrenza', 'Travel time'), L('Parti dal tempo di ciascun tratto', 'Start with the time for each leg'),
      L('In quanto tempo si percorrono 12 km a questa velocità costante?', 'How long does it take to cover 12 km at this constant speed?'), equation('24 km/h'),
      [L('2 ore', '2 hours'), L('12 minuti', '12 minutes'), L('Mezz’ora', 'Half an hour')], 2,
      L('Una velocità di 24 km/h copre 24 km in un’ora. Per 12 km serve metà del tempo, cioè 12/24 = 0,5 h.', 'At 24 km/h you cover 24 km in an hour. For 12 km you need half the time, or 12/24 = 0.5 h.')),
    practice: question(L('Velocità media', 'Average velocity'), L('Somma i tempi prima di dividere', 'Add the times before dividing'),
      L('Due tratti rettilinei nello stesso verso, a velocità diverse. Quale rapporto dà la velocità media?', 'You travel two legs in the same direction at different speeds. Which ratio gives average velocity?'), null,
      [L('Distanza totale / tempo totale', 'Total distance / total time'), L('Somma delle due velocità / 2, sempre', 'Sum of the two speeds / 2, always'), L('Tempo totale / distanza totale', 'Total time / total distance')], 0,
      L('Nello stesso verso, lo spostamento ha modulo uguale alla distanza totale. Dividilo per la somma dei tempi.', 'In one direction, displacement has the same magnitude as total distance. Divide it by the sum of the travel times.'),
      {1:L('La media aritmetica delle velocità funziona quando durano ugualmente a lungo.', 'The arithmetic mean works when both speeds are maintained for equal lengths of time.')}),
    support: question(L('Distanza divisa per tempo', 'Distance divided by time'), L('Scrivi le unità prima del calcolo', 'Write the units before calculating'),
      L('Un ciclista percorre 8 km in mezz’ora. Quale calcolo restituisce km/h?', 'A cyclist covers 8 km in half an hour. Which calculation gives km/h?'), null,
      [L('8 × 0,5', '8 × 0.5'), L('8 ÷ 0,5', '8 ÷ 0.5'), L('0,5 ÷ 8', '0.5 ÷ 8')], 1,
      L('Dividi 8 km per 0,5 h e ottieni 16 km/h. A questa velocità in un’ora si copre il doppio della distanza.', 'Divide 8 km by 0.5 h to get 16 km/h. At this speed you cover twice the distance in an hour.')),
    stretch: question(L('Due tratti di uguale lunghezza', 'Two legs of equal length'), L('Calcola i due tempi separatamente', 'Calculate the two times separately'),
      L('Percorri 6 km a 12 km/h e altri 6 km a 6 km/h nello stesso verso. Qual è la velocità media?', 'You travel 6 km at 12 km/h, then another 6 km at 6 km/h in the same direction. What is your average velocity?'), null,
      ['9 km/h', '8 km/h', '6 km/h'], 1,
      L('Il primo tratto dura mezz’ora e il secondo un’ora. In totale sono 12 km in 1,5 h, ossia 8 km/h.', 'The first leg takes half an hour and the second takes an hour. That is 12 km in 1.5 h, or 8 km/h.'))
  },
  next: L('Prova un percorso con inversione di verso', 'Try a journey with a change of direction'),
  samples: [
    example(L('Dai minuti ai km/h', 'From minutes to km/h'), L('Percorri 8 km nello stesso verso in 20 minuti. Trova la velocità media.', 'You travel 8 km in one direction in 20 minutes. Find the average velocity.'), equation(L('8 km in 20 min', '8 km in 20 min')), [
      L('Per ottenere km/h, esprimi il tempo in ore. Venti minuti sono 20/60 = 1/3 h.', 'For km/h, express time in hours. Twenty minutes is 20/60 = 1/3 h.'),
      L('Dividi gli 8 km per 1/3 h. Dividere per un terzo equivale a moltiplicare per 3.', 'Divide 8 km by 1/3 h. Dividing by one third is the same as multiplying by 3.'),
      L('La velocità media è 24 km/h nel verso di marcia.', 'The average velocity is 24 km/h in the direction of travel.')]),
    example(L('Quanto dura il viaggio?', 'How long does the trip take?'), L('Nello stesso verso percorri 10 km a 20 km/h e altri 5 km a 10 km/h. Trova la velocità media.', 'You travel 10 km at 20 km/h, then another 5 km at 10 km/h in the same direction. Find the average velocity.'), equation('10 km + 5 km'), [
      L('Il primo tratto dura 10/20 h, cioè mezz’ora.', 'The first leg takes 10/20 h, or half an hour.'),
      L('Il secondo tratto dura 5/10 h, ancora mezz’ora. Il viaggio dura un’ora.', 'The second leg takes 5/10 h, again half an hour. The journey lasts one hour.'),
      L('In un’ora percorri 15 km. La velocità media è 15 km/h nel verso di marcia.', 'You cover 15 km in one hour. The average velocity is 15 km/h in the direction of travel.')]),
    example(L('Quando cambia il verso', 'When direction changes'), L('In 30 s cammini 80 m verso est e poi 40 m verso ovest. Trova la velocità media.', 'In 30 s you walk 80 m east and then 40 m west. Find your average velocity.'), equation(L('80 m est · 40 m ovest', '80 m east · 40 m west')), [
      L('Prendi l’est come verso positivo. Lo spostamento è +80 − 40 = +40 m.', 'Take east as positive. The displacement is +80 − 40 = +40 m.'),
      L('Dividi lo spostamento per il tempo. Ottieni 40/30 ≈ 1,33 m/s verso est.', 'Divide displacement by time. This gives 40/30 ≈ 1.33 m/s east.'),
      L('La distanza percorsa è invece 120 m. Usandola troveresti la rapidità media, 4 m/s.', 'The distance travelled is 120 m. Using it would give the average speed, 4 m/s.')])
  ],
  syllabus: L('Cinematica, dinamica, energia e termodinamica', 'Kinematics, dynamics, energy and thermodynamics'),
  courseUse: L('Puoi proseguire con i problemi di cinematica e controllare come si scelgono formule e unità.', 'Continue with kinematics problems and check how to choose formulas and units.')
};

const tangent = {
  headline: L('Cosa vuoi capire delle derivate?', 'What would you like to work on with derivatives?'),
  goals: [
    goal(L('Leggere il significato di una derivata', 'Interpret a derivative'), L('Voglio collegare formula e pendenza del grafico.', 'I want to connect the formula to the slope of the graph.')),
    goal(L('Prepararmi alla verifica', 'Practise for a test'), L('Voglio trovare l’equazione della tangente.', 'I want to find the equation of a tangent line.'))
  ],
  questions: {
    method: question(L('Significato della derivata', 'Meaning of a derivative'), L('Collega la derivata alla pendenza', 'Connect the derivative to the slope'),
      L('Che cosa ti dice questo valore sul grafico nel punto di ascissa 2?', 'What does this value tell you about the graph at x = 2?'), equation('f′(2) = 3'),
      [L('La tangente ha pendenza 3.', 'The tangent has slope 3.'), L('Il punto ha ordinata 3.', 'The point has y-coordinate 3.'), L('La tangente passa per l’origine.', 'The tangent passes through the origin.')], 0,
      L('La derivata in un punto dà il coefficiente angolare della tangente. L’altezza del punto si legge invece da f(2).', 'The derivative at a point gives the slope of the tangent. The height of the point comes from f(2).')),
    practice: question(L('Equazione della tangente', 'Equation of a tangent'), L('Scrivi prima il punto di tangenza', 'Write down the point of tangency first'),
      L('Quale retta è tangente al grafico con questi dati?', 'Which line is tangent to the graph given these values?'), equation('f(2) = 3,   f′(2) = 4'),
      ['y − 4 = 3(x − 2)', 'y − 3 = 4(x − 2)', 'y − 2 = 4(x − 3)'], 1,
      L('Il punto è (2, 3) e la pendenza è 4. Inseriscili in y − y₀ = m(x − x₀).', 'The point is (2, 3) and the slope is 4. Use them in y − y₀ = m(x − x₀).')),
    support: question(L('Punto e pendenza', 'Point and slope'), L('Distingui altezza e pendenza', 'Distinguish height from slope'),
      L('La retta tangente sale di 3 unità quando x aumenta di 1. Qual è la sua pendenza?', 'The tangent line rises by 3 units when x increases by 1. What is its slope?'), null,
      ['1/3', '−3', '3'], 2, L('La pendenza è la variazione verticale divisa per quella orizzontale. Qui vale 3/1 = 3.', 'Slope is the vertical change divided by the horizontal change. Here it is 3/1 = 3.')),
    stretch: question(L('Tangente in un punto assegnato', 'Tangent at a given point'), L('Controlla punto e coefficiente angolare', 'Check the point and slope'),
      L('Qual è la tangente a questa parabola nel punto con x = −1?', 'Which line is tangent to this parabola at x = −1?'), equation('f(x) = x² + 1'),
      ['y = 2x', 'y = −2x + 2', 'y = −2x'], 2,
      L('Si ha f(−1) = 2 e f′(−1) = −2. La retta è y − 2 = −2(x + 1), cioè y = −2x.', 'Here f(−1) = 2 and f′(−1) = −2. The line is y − 2 = −2(x + 1), or y = −2x.'))
  },
  next: L('Trova il punto a partire dalla pendenza', 'Work backwards from the slope'),
  samples: [
    example(L('Dal punto alla retta', 'From the point to the line'), L('Trova la tangente sapendo che passa per (1, 4) e che f′(1) = 2.', 'Find the tangent given that it passes through (1, 4) and f′(1) = 2.'), equation('P = (1, 4),   m = 2'), [
      L('Scrivi la forma punto-pendenza, y − y₀ = m(x − x₀).', 'Write the point-slope form, y − y₀ = m(x − x₀).'),
      L('Sostituisci il punto (1, 4) e la pendenza 2. Ottieni y − 4 = 2(x − 1).', 'Insert the point (1, 4) and slope 2. This gives y − 4 = 2(x − 1).'),
      L('Distribuendo il 2 trovi y = 2x + 2. Per x = 1 la retta passa proprio per y = 4.', 'Expanding gives y = 2x + 2. At x = 1 the line does pass through y = 4.')]),
    example(L('Una tangente con pendenza negativa', 'A tangent with a negative slope'), L('Trova la tangente a f(x) = x² nel punto con x = −2.', 'Find the tangent to f(x) = x² at x = −2.'), equation('f(x) = x²'), [
      L('La funzione vale 4 nel punto assegnato. Il punto è (−2, 4).', 'The function equals 4 at the given input, so the point is (−2, 4).'),
      L('La derivata è 2x. Calcolata in −2 fornisce la pendenza −4.', 'The derivative is 2x. At −2 it gives slope −4.'),
      L('Sostituisci in y − 4 = −4(x + 2) e ottieni y = −4x − 4.', 'Use y − 4 = −4(x + 2) to obtain y = −4x − 4.')]),
    example(L('Dalla pendenza al punto', 'From the slope to the point'), L('Per quale x la tangente a f(x) = x² + x è parallela alla retta y = 5x?', 'For which x is the tangent to f(x) = x² + x parallel to y = 5x?'), equation('f(x) = x² + x'), [
      L('Due rette parallele hanno la stessa pendenza, qui 5.', 'Parallel lines have the same slope, here 5.'),
      L('La derivata vale 2x + 1. Imposta 2x + 1 = 5 e ricava x = 2.', 'The derivative is 2x + 1. Set 2x + 1 = 5 to get x = 2.'),
      L('Il punto è (2, 6). La tangente y − 6 = 5(x − 2) ha la pendenza richiesta.', 'The point is (2, 6). Its tangent y − 6 = 5(x − 2) has the required slope.')])
  ],
  syllabus: L('Derivate, studio di funzione, integrali e probabilità', 'Derivatives, curve sketching, integrals and probability'),
  courseUse: L('Puoi proseguire con le tangenti e applicare lo stesso metodo nello studio di funzione.', 'Continue with tangent lines and apply the same method when sketching curves.')
};

const percent = {
  headline: L('Come vuoi allenarti sulle percentuali?', 'How would you like to practise percentages?'),
  goals: [
    goal(L('Capire la base del calcolo', 'Find the right base'), L('Su quale numero devo applicare la percentuale?', 'Which number should I apply the percentage to?')),
    goal(L('Allenarmi per il TOLC-I', 'Practise for the TOLC-I'), L('Voglio riconoscere il procedimento tra più risposte.', 'I want to recognise the method in a multiple-choice problem.'))
  ],
  questions: {
    method: question(L('Parte percentuale', 'Percentage of an amount'), L('Parti dal valore del 10%', 'Start by finding 10%'),
      L('Una prova ha 80 quesiti. Quanti quesiti sono il 20% del totale?', 'A test has 80 questions. How many is 20% of the total?'), null,
      ['20', '16', '64'], 1, L('Il 10% di 80 è 8. Per ottenere il 20% raddoppia, arrivando a 16.', 'Ten percent of 80 is 8. Double it to find 20%, giving 16.'),
      {2:L('64 è il numero che rimane dopo aver tolto il 20%. Qui si cerca la parte tolta.', '64 is the number left after removing 20%. Here you are looking for the part removed.')}),
    practice: question(L('Base di una seconda variazione', 'Base for a second change'), L('Individua la base di ogni variazione', 'Find the base for each change'),
      L('Un prezzo di 100 € sale del 20% e poi scende del 20%. Su quale prezzo calcoli la diminuzione?', 'A €100 price rises by 20% and then falls by 20%. Which price is the decrease based on?'), null,
      [L('100 €', '€100'), L('80 €', '€80'), L('120 €', '€120')], 2, L('Dopo l’aumento il prezzo è 120 €. Il secondo 20% si calcola su 120 €, quindi la diminuzione è 24 €.', 'After the rise the price is €120. The second 20% applies to €120, so the decrease is €24.')),
    support: question(L('Fattore di sconto', 'Discount multiplier'), L('Trova la percentuale che rimane', 'Find the percentage left'),
      L('Un articolo costa 60 €. Quale operazione dà il prezzo dopo uno sconto del 15%?', 'An item costs €60. Which operation gives the price after a 15% discount?'), null,
      [L('60 × 0,85', '60 × 0.85'), L('60 × 0,15', '60 × 0.15'), L('60 − 15', '60 − 15')], 0,
      L('Dopo lo sconto resta l’85% del prezzo. Moltiplica 60 per 0,85 e ottieni 51 €.', 'After the discount, 85% of the price remains. Multiply 60 by 0.85 to get €51.')),
    stretch: question(L('Variazioni successive', 'Successive percentage changes'), L('Applica i fattori uno alla volta', 'Apply the multipliers in order'),
      L('Un valore di 80 aumenta del 25% e poi diminuisce del 20%. Quanto vale alla fine?', 'A value of 80 rises by 25% and then falls by 20%. What is the final value?'), null,
      ['84', '80', '76'], 1, L('Il primo passaggio dà 80 × 1,25 = 100. Il secondo dà 100 × 0,80 = 80.', 'The first step gives 80 × 1.25 = 100. The second gives 100 × 0.80 = 80.'))
  },
  next: L('Ricostruisci il valore iniziale', 'Reconstruct the original amount'),
  samples: [
    example(L('La parte e il totale', 'The part and the whole'), L('In una classe di 30 persone il 40% arriva in bici. Quante persone sono?', 'In a class of 30, 40% cycle to school. How many people is that?'), equation('40% × 30'), [
      L('Il totale su cui fare il calcolo è 30. Dividendo per 10 trovi il suo 10%, cioè 3 persone.', 'The base is 30. Dividing by 10 gives its 10%, or 3 people.'),
      L('Il 40% equivale a quattro volte il 10%.', 'Forty percent is four times ten percent.'),
      L('Moltiplica 4 × 3. Sono 12 persone.', 'Multiply 4 × 3. That is 12 people.')]),
    example(L('Due variazioni, due basi', 'Two changes, two bases'), L('Un abbonamento da 50 € scende del 20% e poi sale del 10%. Quanto costa alla fine?', 'A €50 subscription falls by 20% and then rises by 10%. What is the final price?'), equation(L('50 € · −20% · +10%', '€50 · −20% · +10%')), [
      L('Dopo la riduzione rimane l’80% di 50 €, cioè 40 €.', 'After the decrease, 80% of €50 remains, or €40.'),
      L('Il 10% successivo si calcola su 40 €. L’aumento è 4 €.', 'The subsequent 10% applies to €40. The increase is €4.'),
      L('Ottieni 44 €. La perdita rispetto ai 50 € iniziali è 6/50 = 12%.', 'The result is €44. The decrease relative to the original €50 is 6/50 = 12%.')]),
    example(L('Risalire al prezzo iniziale', 'Recover the original price'), L('Dopo uno sconto del 20% e un aumento del 10%, un libro costa 44 €. Quanto costava all’inizio?', 'After a 20% discount and a 10% rise, a book costs €44. What was the original price?'), equation(L('0,80 × 1,10 × P = 44', '0.80 × 1.10 × P = 44')), [
      L('Indica il prezzo iniziale con P. Dopo lo sconto rimane 0,80P.', 'Call the starting price P. The discount leaves 0.80P.'),
      L('Moltiplica per 1,10. Il prezzo finale è 0,88P e vale 44 €.', 'Multiply by 1.10. The final price is 0.88P and equals €44.'),
      L('Dividi 44 per 0,88 per ritrovare il prezzo iniziale di 50 €.', 'Divide 44 by 0.88 to recover the original price of €50.')])
  ],
  syllabus: L('Matematica, logica, scienze e comprensione verbale', 'Mathematics, logic, science and verbal comprehension'),
  courseUse: L('Puoi passare dagli esercizi commentati ai quesiti a tempo e mettere alla prova il procedimento.', 'Move from worked solutions to timed questions and try the method under test conditions.')
};

export const courses = {
  'analisi-1': limits, 'fisica-1': motion, 'matematica-superiori-5': tangent, 'tolc-i': percent
};
export const extensions = {
  'analisi-1': example(L('Un cubo e un quadrato', 'A cube and a square'), L('Trova il limite scomponendo entrambi i polinomi.', 'Find the limit by factoring both polynomials.'), equation('x³ − 8', 'x² − 4', 'x → 2'), [
    L('Il numeratore è (x − 2)(x² + 2x + 4). Il denominatore è (x − 2)(x + 2).', 'The numerator is (x − 2)(x² + 2x + 4). The denominator is (x − 2)(x + 2).'),
    L('Per x vicino a 2 e diverso da 2 puoi cancellare x − 2.', 'For x near but unequal to 2 you can cancel x − 2.'),
    L('Sostituendo 2 nel rapporto rimanente ottieni (4 + 4 + 4)/4 = 3.', 'Substituting 2 into the remaining ratio gives (4 + 4 + 4)/4 = 3.')]),
  'fisica-1': example(L('Una sosta durante il ritorno', 'A pause on the way back'), L('In 30 s cammini 90 m verso est, poi 50 m verso ovest in 10 s e infine ti fermi per 10 s. Trova la velocità media.', 'Walk 90 m east in 30 s and 50 m west in 10 s, then stop for 10 s. Find your average velocity.'), equation('30 s + 10 s + 10 s'), [
    L('Lo spostamento totale è 90 − 50 = 40 m verso est.', 'The total displacement is 90 − 50 = 40 m east.'),
    L('Il tempo comprende anche la sosta e vale 50 s.', 'The time includes the pause and totals 50 s.'),
    L('La velocità media è quindi 40/50 = 0,8 m/s verso est.', 'The average velocity is therefore 40/50 = 0.8 m/s east.')]),
  'matematica-superiori-5': example(L('Trova la tangente orizzontale', 'Find the horizontal tangent'), L('In quale punto la tangente è orizzontale? Scrivi la sua equazione.', 'At which point is the tangent horizontal? Write its equation.'), equation('f(x) = x² − 4x + 1'), [
    L('Per una tangente orizzontale la pendenza è zero.', 'A horizontal tangent has slope zero.'),
    L('La derivata è 2x − 4. Ponendola uguale a zero si trova x = 2.', 'The derivative is 2x − 4. Setting it equal to zero gives x = 2.'),
    L('Calcola f(2) = −3. La tangente orizzontale passa per (2, −3) e ha equazione y = −3.', 'Evaluate f(2) = −3. The horizontal tangent passes through (2, −3) and has equation y = −3.')]),
  'tolc-i': example(L('Dal numero alla percentuale', 'From a count to a percentage'), L('Hanno già superato la prova 24 studenti, il 60% del gruppo. Se la superano altri 5, quale percentuale del gruppo l’avrà superata?', 'Twenty-four students, 60% of a group, have passed a test. If five more pass, what percentage of the group will have passed?'), equation(L('24 = 0,60 × N', '24 = 0.60 × N')), [
    L('Trova il totale dividendo 24 per 0,60. Il gruppo è di 40 studenti.', 'Divide 24 by 0.60 to find the total. The group has 40 students.'),
    L('Il nuovo numero di promossi è 24 + 5 = 29.', 'The new number who have passed is 24 + 5 = 29.'),
    L('Il rapporto è 29/40 = 0,725. La percentuale richiesta è 72,5%.', 'The ratio is 29/40 = 0.725, or 72.5%.')])
};
