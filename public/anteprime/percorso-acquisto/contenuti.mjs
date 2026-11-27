const L = (it, en) => ({ it, en });
const plain = value => typeof value === 'string' ? L(value, value) : value;
const equation = (line, denominator = '', tendsTo = '') => ({ line, denominator, tendsTo });
const example = (title, task, formula, steps) => ({ title, task, formula, steps });
const question = (skill, action, prompt, formula, choices, correct, explanation, mistakes = {}) =>
  ({ skill, action, prompt, formula, choices: choices.map(plain), correct, explanation, mistakes });
const goal = (title, detail) => ({ title, detail });

const limits = {
  label: L('Limiti', 'Limits'), detail: L('Forme indeterminate', 'Indeterminate forms'), symbol: 'lim',
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
      L('Il denominatore tende a 2. Il rapporto tende quindi a 0/2 = 0.', 'The denominator tends to 2. The ratio therefore tends to 0/2 = 0.')]),
    example(L('Un cubo e un quadrato', 'A cube and a square'), L('Trova il limite scomponendo entrambi i polinomi.', 'Find the limit by factoring both polynomials.'), equation('x³ − 8', 'x² − 4', 'x → 2'), [
    L('Il numeratore è (x − 2)(x² + 2x + 4). Il denominatore è (x − 2)(x + 2).', 'The numerator is (x − 2)(x² + 2x + 4). The denominator is (x − 2)(x + 2).'),
    L('Per x vicino a 2 e diverso da 2 puoi cancellare x − 2.', 'For x near but unequal to 2 you can cancel x − 2.'),
    L('Sostituendo 2 nel rapporto rimanente ottieni (4 + 4 + 4)/4 = 3.', 'Substituting 2 into the remaining ratio gives (4 + 4 + 4)/4 = 3.')])
  ],
  courseUse: L('Puoi aprire gli altri esercizi sui limiti e ritrovare i passaggi quando ripassi per lo scritto.', 'Open more limit problems and revisit the worked steps when you prepare for the exam.')
};

const motion = {
  label: L('Cinematica', 'Kinematics'), detail: L('Tempi e velocità', 'Time and velocity'), symbol: 'v',
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
      L('La distanza percorsa è invece 120 m. Usandola troveresti la rapidità media, 4 m/s.', 'The distance travelled is 120 m. Using it would give the average speed, 4 m/s.')]),
    example(L('Una sosta durante il ritorno', 'A pause on the way back'), L('In 30 s cammini 90 m verso est, poi 50 m verso ovest in 10 s e infine ti fermi per 10 s. Trova la velocità media.', 'Walk 90 m east in 30 s and 50 m west in 10 s, then stop for 10 s. Find your average velocity.'), equation('30 s + 10 s + 10 s'), [
    L('Lo spostamento totale è 90 − 50 = 40 m verso est.', 'The total displacement is 90 − 50 = 40 m east.'),
    L('Il tempo comprende anche la sosta e vale 50 s.', 'The time includes the pause and totals 50 s.'),
    L('La velocità media è quindi 40/50 = 0,8 m/s verso est.', 'The average velocity is therefore 40/50 = 0.8 m/s east.')])
  ],
  courseUse: L('Puoi proseguire con i problemi di cinematica e controllare come si scelgono formule e unità.', 'Continue with kinematics problems and check how to choose formulas and units.')
};

const tangent = {
  label: L('Derivate', 'Derivatives'), detail: L('Pendenza e tangenti', 'Slope and tangents'), symbol: 'f′',
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
      L('Il punto è (2, 6). La tangente y − 6 = 5(x − 2) ha la pendenza richiesta.', 'The point is (2, 6). Its tangent y − 6 = 5(x − 2) has the required slope.')]),
    example(L('Trova la tangente orizzontale', 'Find the horizontal tangent'), L('In quale punto la tangente è orizzontale? Scrivi la sua equazione.', 'At which point is the tangent horizontal? Write its equation.'), equation('f(x) = x² − 4x + 1'), [
    L('Per una tangente orizzontale la pendenza è zero.', 'A horizontal tangent has slope zero.'),
    L('La derivata è 2x − 4. Ponendola uguale a zero si trova x = 2.', 'The derivative is 2x − 4. Setting it equal to zero gives x = 2.'),
    L('Calcola f(2) = −3. La tangente orizzontale passa per (2, −3) e ha equazione y = −3.', 'Evaluate f(2) = −3. The horizontal tangent passes through (2, −3) and has equation y = −3.')])
  ],
  courseUse: L('Puoi proseguire con le tangenti e applicare lo stesso metodo nello studio di funzione.', 'Continue with tangent lines and apply the same method when sketching curves.')
};

const percent = {
  label: L('Percentuali', 'Percentages'), detail: L('Sconti e variazioni', 'Discounts and changes'), symbol: '%',
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
      L('Dividi 44 per 0,88 per ritrovare il prezzo iniziale di 50 €.', 'Divide 44 by 0.88 to recover the original price of €50.')]),
    example(L('Dal numero alla percentuale', 'From a count to a percentage'), L('Hanno già superato la prova 24 studenti, il 60% del gruppo. Se la superano altri 5, quale percentuale del gruppo l’avrà superata?', 'Twenty-four students, 60% of a group, have passed a test. If five more pass, what percentage of the group will have passed?'), equation(L('24 = 0,60 × N', '24 = 0.60 × N')), [
    L('Trova il totale dividendo 24 per 0,60. Il gruppo è di 40 studenti.', 'Divide 24 by 0.60 to find the total. The group has 40 students.'),
    L('Il nuovo numero di promossi è 24 + 5 = 29.', 'The new number who have passed is 24 + 5 = 29.'),
    L('Il rapporto è 29/40 = 0,725. La percentuale richiesta è 72,5%.', 'The ratio is 29/40 = 0.725, or 72.5%.')])
  ],
  courseUse: L('Puoi passare dagli esercizi commentati ai quesiti a tempo e mettere alla prova il procedimento.', 'Move from worked solutions to timed questions and try the method under test conditions.')
};

const integrals = {
  label: L('Integrali', 'Integrals'), detail: L('Primitive e aree', 'Antiderivatives and areas'), symbol: '∫',
  headline: L('Da dove vuoi partire con gli integrali?', 'Where would you like to start with integrals?'),
  goals: [
    goal(L('Riconoscere una primitiva', 'Recognise an antiderivative'), L('Voglio controllarla con la derivata.', 'I want to check it by differentiating.')),
    goal(L('Calcolare un integrale definito', 'Evaluate a definite integral'), L('Voglio usare i due estremi.', 'I want to work with the two endpoints.'))
  ],
  questions: {
    method: question(L('Derivata della primitiva', 'Checking an antiderivative'), L('Controlla la risposta derivando', 'Check by differentiating'),
      L('Quale funzione ha derivata 2x?', 'Which function has derivative 2x?'), null, ['2x²', 'x² + 3', '2'], 1,
      L('La derivata di x² è 2x e quella di 3 è zero. Anche x² con qualsiasi altra costante funziona.', 'The derivative of x² is 2x, and the derivative of 3 is zero. Adding any other constant to x² works too.')),
    practice: question(L('Valutazione agli estremi', 'Evaluating at the endpoints'), L('Sottrai i valori della primitiva', 'Subtract the endpoint values'),
      L('Una primitiva di 2x è x². Quanto vale l’integrale da 1 a 3?', 'An antiderivative of 2x is x². What is its definite integral from 1 to 3?'), equation('∫₁³ 2x dx'),
      ['9', '4', '8'], 2, L('Calcola il valore finale 3² e togli quello iniziale 1². Ottieni 9 − 1 = 8.', 'Evaluate at the upper endpoint and subtract the value at the lower one. This gives 3² − 1² = 8.')),
    support: question(L('Regola delle potenze', 'Power rule'), L('Deriva una potenza prima di integrare', 'Differentiate a power first'),
      L('Qual è la derivata di x³/3?', 'What is the derivative of x³/3?'), null, ['x²', '3x²', 'x⁴/12'], 0,
      L('Derivando x³ ottieni 3x². Dividendo per 3 rimane x², quindi x³/3 è una sua primitiva.', 'Differentiating x³ gives 3x². Dividing by 3 leaves x², so x³/3 is an antiderivative of x².')),
    stretch: question(L('Segno dell’integrale', 'Signed integral'), L('Separa la parte positiva e la negativa', 'Separate the positive and negative contributions'),
      L('Quanto vale l’integrale di x tra −1 e 1?', 'What is the integral of x from −1 to 1?'), equation('∫₋₁¹ x dx'),
      ['1', '0', '2'], 1, L('La parte sotto l’asse e quella sopra sono due triangoli uguali con segno opposto. Il loro contributo totale è zero.', 'The parts below and above the axis are equal triangles with opposite signs. Their contributions add to zero.'))
  },
  next: L('Distingui integrale e area geometrica', 'Distinguish the integral from geometric area'),
  samples: [
    example(L('Verificare una primitiva', 'Check an antiderivative'), L('Trova una primitiva di 4x.', 'Find an antiderivative of 4x.'), null, [
      L('La derivata di x² è 2x.', 'The derivative of x² is 2x.'),
      L('Ti serve il doppio, quindi prova con 2x².', 'You need twice that, so try 2x².'),
      L('Derivando 2x² ottieni proprio 4x.', 'Differentiating 2x² gives exactly 4x.')]),
    example(L('Usare entrambi gli estremi', 'Use both endpoints'), L('Calcola l’integrale di 3x² da 1 a 2.', 'Integrate 3x² from 1 to 2.'), null, [
      L('Una primitiva è x³.', 'An antiderivative is x³.'),
      L('Vale 8 in 2 e vale 1 in 1.', 'Its value at 2 is 8, and its value at 1 is 1.'),
      L('Sottrai i valori in questo ordine. L’integrale è 8 − 1 = 7.', 'Subtract in that order. The integral is 8 − 1 = 7.')]),
    example(L('Due triangoli sotto la lente', 'Two triangles on the graph'), L('Per y = x tra −2 e 2, trova l’integrale e l’area geometrica tra grafico e asse x.', 'For y = x from −2 to 2, find the integral and the geometric area between the graph and the x-axis.'), null, [
      L('Ciascun triangolo ha base 2 e altezza 2, quindi area 2.', 'Each triangle has base 2 and height 2, hence area 2.'),
      L('Per l’integrale il triangolo a sinistra contribuisce −2. Quello a destra contribuisce +2.', 'For the integral, the left triangle contributes −2 and the right one +2.'),
      L('L’integrale vale 0. Le due aree geometriche si sommano e danno 4.', 'The integral is 0. The two geometric areas add up to 4.')]),
    example(L('Un cambio di segno interno', 'A sign change inside the interval'), L('Trova l’area tra y = x − 1 e l’asse x da 0 a 3.', 'Find the area between y = x − 1 and the x-axis from 0 to 3.'), null, [
      L('Il grafico incontra l’asse in x = 1. Dividi lì l’intervallo.', 'The graph crosses the axis at x = 1. Split the interval there.'),
      L('Il triangolo a sinistra ha area 1/2. A destra base e altezza sono 2, quindi l’area è 2.', 'The left triangle has area 1/2. On the right the base and height are both 2, giving area 2.'),
      L('L’area richiesta è 1/2 + 2 = 5/2.', 'The required area is 1/2 + 2 = 5/2.')])
  ],
  courseUse: L('Passa dalle prime primitive agli integrali definiti e controlla la scelta del metodo negli svolgimenti.', 'Move from antiderivatives to definite integrals and check your choice of method in the worked solutions.')
};

const sequences = {
  label: L('Successioni', 'Sequences'), detail: L('Termini e convergenza', 'Terms and convergence'), symbol: 'aₙ',
  headline: L('Cosa vuoi capire delle successioni?', 'What would you like to practise with sequences?'),
  goals: [
    goal(L('Leggere il termine generale', 'Read the general term'), L('Voglio passare dalla formula ai numeri.', 'I want to turn a formula into terms.')),
    goal(L('Trovare il limite', 'Find a limit'), L('Voglio capire cosa succede per n grande.', 'I want to see what happens as n grows.'))
  ],
  questions: {
    method: question(L('Indice e termine', 'Index and term'), L('Sostituisci l’indice nella formula', 'Substitute the index into the formula'), L('Quanto vale il terzo termine?', 'What is the third term?'), equation('aₙ = 1/(n + 1),  n ≥ 1'), ['1/3','1/4','4'], 1,
      L('Inserisci 3 al posto di n. Il denominatore diventa 3 + 1 = 4.', 'Put 3 in place of n. The denominator becomes 3 + 1 = 4.')),
    practice: question(L('Limite di un rapporto', 'Limit of a ratio'), L('Dividi per la potenza più alta di n', 'Divide by the highest power of n'), L('A quale valore si avvicina questo termine?', 'Which value does this term approach?'), equation('(3n + 1)/(n + 2)'), ['1','3','0'], 1,
      L('Dividi sopra e sotto per n. In (3 + 1/n)/(1 + 2/n) le frazioni con n al denominatore tendono a zero.', 'Divide top and bottom by n. In (3 + 1/n)/(1 + 2/n), the fractions with n in the denominator approach zero.')),
    support: question(L('Il reciproco di n', 'The reciprocal of n'), L('Confronta tre termini consecutivi', 'Compare successive terms'), L('Quando n cresce, verso quale numero va 1/n?', 'As n grows, which number does 1/n approach?'), null, ['1','∞','0'], 2,
      L('Per n = 10, 100, 1000 ottieni un decimo, un centesimo e un millesimo. I valori si avvicinano a zero.', 'At n = 10, 100, 1000 you get one tenth, one hundredth and one thousandth. The values approach zero.')),
    stretch: question(L('Alternanza e ampiezza', 'Alternation and amplitude'), L('Guarda quanto dista il termine da zero', 'Look at the distance from zero'), L('Questa successione cambia segno a ogni passo. Qual è il suo limite?', 'This sequence changes sign at each step. What is its limit?'), equation('aₙ = (−1)ⁿ/n'), [L('Non esiste','It does not exist'),'−1','0'], 2,
      L('La distanza da zero è 1/n e diventa sempre più piccola. Anche alternando il segno, i termini tendono a zero.', 'The distance from zero is 1/n and gets smaller. Despite the alternating sign, the terms tend to zero.'))
  },
  next: L('Confronta termini pari e dispari', 'Compare the even and odd terms'),
  samples: [
    example(L('Scrivere i primi termini', 'Write the first terms'), L('Trova i termini con indice 1, 2 e 3 per aₙ = 2/(n + 1).', 'Find terms 1, 2 and 3 for aₙ = 2/(n + 1).'), null, [
      L('Con n = 1 il termine è 2/2 = 1.', 'For n = 1 the term is 2/2 = 1.'), L('Con n = 2 hai 2/3.', 'For n = 2 you get 2/3.'), L('Con n = 3 hai 2/4 = 1/2.', 'For n = 3 you get 2/4 = 1/2.')]),
    example(L('Un rapporto per n grande', 'A ratio for large n'), L('Trova il limite di (2n − 1)/(n + 4).', 'Find the limit of (2n − 1)/(n + 4).'), null, [
      L('Dividi numeratore e denominatore per n.', 'Divide numerator and denominator by n.'), L('Ottieni (2 − 1/n)/(1 + 4/n).', 'This gives (2 − 1/n)/(1 + 4/n).'), L('I termini 1/n e 4/n tendono a zero. Il limite è 2.', 'Both 1/n and 4/n tend to zero. The limit is 2.')]),
    example(L('Oscillare attorno a 2', 'Oscillating around 2'), L('Studia il limite di 2 + (−1)ⁿ/n.', 'Find the limit of 2 + (−1)ⁿ/n.'), null, [
      L('Per n pari il termine è 2 + 1/n.', 'For even n the term is 2 + 1/n.'), L('Per n dispari il termine è 2 − 1/n.', 'For odd n the term is 2 − 1/n.'), L('Entrambe le successioni parziali tendono a 2. Questo è il limite dell’intera successione.', 'Both subsequences tend to 2, so the entire sequence tends to 2.')]),
    example(L('Quando l’oscillazione rimane', 'When the oscillation persists'), L('La successione 2 + (−1)ⁿ converge?', 'Does the sequence 2 + (−1)ⁿ converge?'), null, [
      L('Per n pari ottieni sempre 3.', 'For even n you always get 3.'), L('Per n dispari ottieni sempre 1.', 'For odd n you always get 1.'), L('Le due successioni parziali hanno limiti diversi. Manca un unico limite.', 'The two subsequences have different limits, so there is no single limit.')])
  ],
  courseUse: L('Nel capitolo sulle successioni puoi esercitarti su termini generali, confronti e limiti.', 'The sequences chapter gives you practice with general terms, comparisons and limits.')
};

const forces = {
  label: L('Forze', 'Forces'), detail: L('Le leggi di Newton', 'Newton’s laws'), symbol: 'F',
  headline: L('Su quale passaggio delle forze vuoi lavorare?', 'Which part of a force problem would you like to practise?'),
  goals: [
    goal(L('Trovare la risultante', 'Find the net force'), L('Voglio tenere conto del verso.', 'I want to account for direction.')),
    goal(L('Calcolare l’accelerazione', 'Calculate acceleration'), L('Voglio usare la seconda legge di Newton.', 'I want to apply Newton’s second law.'))
  ],
  questions: {
    method: question(L('Somma delle forze', 'Combining forces'), L('Scegli un verso positivo', 'Choose a positive direction'), L('Due persone spingono una cassa in versi opposti. Qual è la risultante?', 'Two people push a crate in opposite directions. What is the net force?'), equation(L('10 N a destra · 6 N a sinistra','10 N right · 6 N left')), [L('16 N a destra','16 N right'),L('4 N a sinistra','4 N left'),L('4 N a destra','4 N right')], 2,
      L('Prendi positivo il verso destro. La somma è +10 − 6 = +4 N.', 'Take right as positive. The sum is +10 − 6 = +4 N.')),
    practice: question(L('Seconda legge', 'Newton’s second law'), L('Dividi la risultante per la massa', 'Divide net force by mass'), L('Una risultante di 12 N agisce su 3 kg. Quanto vale l’accelerazione?', 'A net force of 12 N acts on a mass of 3 kg. What is its acceleration?'), null, ['4 m/s²','36 m/s²','9 m/s²'], 0,
      L('Dalla relazione F = ma ricavi a = F/m. Dividendo 12 per 3 ottieni 4 m/s².', 'From F = ma, a = F/m. Dividing 12 by 3 gives 4 m/s².')),
    support: question(L('Equilibrio delle forze', 'Balanced forces'), L('Controlla se le forze si compensano', 'Check whether the forces balance'), L('La risultante su un carrello in moto è zero. Come cambia la sua velocità?', 'The net force on a moving cart is zero. How does its velocity change?'), null,
      [L('Diventa subito zero','It immediately becomes zero'), L('Rimane costante','It stays constant'),L('Raddoppia','It doubles')], 1,
      L('La risultante nulla dà accelerazione nulla. La velocità mantiene modulo e verso.', 'Zero net force gives zero acceleration. Velocity keeps both its magnitude and direction.')),
    stretch: question(L('Forza applicata e attrito', 'Applied force and friction'), L('Togli l’attrito prima di dividere', 'Subtract friction before dividing'), L('Spingi con 18 N un carrello di 4 kg. L’attrito si oppone con 6 N. Quanto vale l’accelerazione?', 'You push a 4 kg cart with 18 N. Friction opposes it with 6 N. What is its acceleration?'), null,
      ['6 m/s²', '3 m/s²', L('4,5 m/s²','4.5 m/s²')], 1,
      L('La forza risultante è 18 − 6 = 12 N. Dividi 12 N per 4 kg e ottieni 3 m/s².', 'The net force is 18 − 6 = 12 N. Divide by 4 kg to get 3 m/s².'))
  },
  next: L('Ricava la forza a partire dal moto', 'Work back from the motion to the force'),
  samples: [
    example(L('Due spinte opposte', 'Two opposing pushes'),L('Una slitta riceve 9 N verso est e 5 N verso ovest. Trova la risultante.', 'A sled is pushed with 9 N east and 5 N west. Find the net force.'),null,[
      L('Scegli l’est come verso positivo.', 'Take east as positive.'), L('Scrivi +9 N e −5 N.', 'Write +9 N and −5 N.'), L('La somma è +4 N, cioè 4 N verso est.', 'The sum is +4 N, or 4 N east.')]),
    example(L('Dalla risultante al moto', 'From net force to motion'),L('Una scatola di 5 kg riceve 20 N a destra e 5 N a sinistra. Calcola l’accelerazione.', 'A 5 kg box is pushed with 20 N right and 5 N left. Find its acceleration.'),null,[
      L('A destra resta una forza di 20 − 5 = 15 N.', 'The net force to the right is 20 − 5 = 15 N.'),L('Scrivi a = F/m.', 'Write a = F/m.'),L('L’accelerazione è 15/5 = 3 m/s² verso destra.', 'The acceleration is 15/5 = 3 m/s² to the right.')]),
    example(L('Quanta forza serve?', 'How much force is needed?'), L('Un carrello di 2 kg accelera a 3 m/s². L’attrito vale 4 N. Trova la spinta nel verso del moto.', 'A 2 kg cart accelerates forwards at 3 m/s² against 4 N of friction. Find the push.'), null, [
      L('La risultante richiesta è ma = 2 × 3 = 6 N.', 'The required net force is ma = 2 × 3 = 6 N.'),L('Indicando la spinta con F, scrivi F − 4 = 6.', 'Call the push F and write F − 4 = 6.'),L('La spinta deve essere 10 N.', 'The push must be 10 N.')]),
    example(L('Dai tempi alla forza', 'From times to force'), L('Un corpo di 3 kg passa da 2 a 8 m/s in 2 s con accelerazione costante. Trova la risultante.', 'A 3 kg body speeds up from 2 to 8 m/s in 2 s at constant acceleration. Find the net force.'), null, [
      L('La velocità varia di 8 − 2 = 6 m/s.', 'The velocity change is 8 − 2 = 6 m/s.'), L('L’accelerazione è 6/2 = 3 m/s².', 'The acceleration is 6/2 = 3 m/s².'),L('La risultante vale 3 × 3 = 9 N nel verso dell’accelerazione.', 'The net force is 3 × 3 = 9 N in the direction of acceleration.')])
  ],
  courseUse: L('Puoi rivedere il diagramma delle forze e applicarlo ai problemi con attrito.', 'Revisit free-body diagrams and apply them to problems involving friction.')
};

const energy = {
  label: L('Energia', 'Energy'), detail: L('Lavoro ed energia cinetica', 'Work and kinetic energy'), symbol: 'E',
  headline: L('Come vuoi affrontare il lavoro e l’energia?', 'How would you like to study work and energy?'),
  goals: [
    goal(L('Capire il lavoro di una forza', 'Understand work done by a force'),L('Voglio riconoscerne il segno.', 'I want to identify its sign.')),
    goal(L('Collegare energia e velocità', 'Connect energy and speed'),L('Voglio usare il teorema dell’energia cinetica.', 'I want to use the work–energy theorem.'))
  ],
  questions: {
    method: question(L('Lavoro di una forza parallela', 'Work by a parallel force'),L('Moltiplica la forza per lo spostamento', 'Multiply force by displacement'),L('Una forza di 5 N spinge un oggetto per 3 m nello stesso verso. Quanto lavoro compie?', 'A 5 N force pushes an object 3 m in the same direction. How much work does it do?'), null,['8 J','15 J','2 J'],1,
      L('Forza e spostamento sono paralleli e concordi. Il lavoro è 5 × 3 = 15 joule.', 'Force and displacement point in the same direction. Work is 5 × 3 = 15 joules.')),
    practice: question(L('Variazione di energia cinetica', 'Change in kinetic energy'),L('Aggiungi il lavoro netto all’energia iniziale','Add the net work to the initial energy'),L('Un corpo ha 10 J di energia cinetica. Le forze compiono un lavoro netto di −4 J. Quanta energia cinetica rimane?', 'An object has 10 J of kinetic energy. Net work of −4 J is done on it. How much kinetic energy remains?'),null,['14 J','−4 J','6 J'],2,
      L('Il lavoro netto è la variazione di energia cinetica. L’energia finale è 10 + (−4) = 6 J.', 'Net work equals the change in kinetic energy. The final energy is 10 + (−4) = 6 J.')),
    support: question(L('Segno del lavoro', 'Sign of work'),L('Confronta i versi', 'Compare directions'),L('L’attrito frena una slitta in movimento. Che segno ha il suo lavoro?', 'Friction slows a moving sled. What is the sign of its work?'),null,[L('Negativo','Negative'),L('Positivo','Positive'),L('Nullo','Zero')],0,
      L('L’attrito è opposto allo spostamento, quindi sottrae energia cinetica.', 'Friction opposes displacement, so it removes kinetic energy.')),
    stretch: question(L('Energia e quadrato della velocità', 'Energy and the square of speed'),L('Ricorda il quadrato della velocità','Use the square of the speed'),L('La velocità di un corpo raddoppia, la massa resta la stessa. Come cambia l’energia cinetica?', 'An object doubles its speed while its mass stays the same. What happens to its kinetic energy?'),equation('K = ½mv²'),[L('Raddoppia','It doubles'),L('Quadruplica','It quadruples'),L('Resta uguale','It stays the same')],1,
      L('Il quadrato di 2v è 4v². L’energia cinetica finale è quattro volte quella iniziale.', 'The square of 2v is 4v². Final kinetic energy is four times the initial value.'))
  },
  next: L('Calcola la velocità dal lavoro netto', 'Find speed from net work'),
  samples: [
    example(L('Un lavoro negativo','Negative work'),L('Una forza di 3 N si oppone a uno spostamento di 2 m. Calcola il lavoro.', 'A 3 N force opposes a 2 m displacement. Find the work.'),null,[L('Il prodotto dei moduli è 3 × 2 = 6.', 'The magnitudes give 3 × 2 = 6.'),L('I versi sono opposti, quindi il segno è negativo.', 'The directions are opposite, giving a negative sign.'),L('Il lavoro è −6 J.', 'The work is −6 J.')]),
    example(L('Quanta energia rimane?', 'How much energy is left?'),L('Un corpo ha 18 J di energia cinetica. Il lavoro netto è −5 J. Trova l’energia finale.', 'An object has 18 J of kinetic energy. Net work is −5 J. Find the final energy.'),null,[L('Scrivi K finale = K iniziale + lavoro netto.', 'Write final K = initial K + net work.'),L('Sostituisci 18 + (−5).', 'Substitute 18 + (−5).'),L('Restano 13 J di energia cinetica.', 'The remaining kinetic energy is 13 J.')]),
    example(L('Partire da fermo', 'Starting from rest'), L('Il lavoro netto su un corpo di 2 kg inizialmente fermo è 16 J. Trova la velocità finale.', 'Net work of 16 J is done on a 2 kg object initially at rest. Find its final speed.'),null,[L('L’energia cinetica iniziale è zero. Quella finale è 16 J.', 'Initial kinetic energy is zero. Final kinetic energy is 16 J.'),L('Inserisci la massa in ½mv² = 16. Si ottiene v² = 16.', 'Put the mass into ½mv² = 16. This gives v² = 16.'),L('La velocità in modulo è 4 m/s.', 'The final speed is 4 m/s.')]),
    example(L('La distanza di arresto', 'Stopping distance'), L('Una slitta ha 24 J di energia cinetica. Agisce solo un attrito costante di 6 N lungo il moto, in verso opposto. Dopo quanti metri si ferma?', 'A sled has 24 J of kinetic energy. A constant friction force of 6 N acts opposite to its motion. No other force does work. How far until it stops?'),null,[L('Per fermarsi deve perdere 24 J.', 'It must lose 24 J to stop.'),L('Su una distanza d il lavoro dell’attrito è −6d.', 'Over distance d, friction does work −6d.'),L('Da −6d = −24 ottieni d = 4 m.', 'From −6d = −24 you get d = 4 m.')])
  ],
  courseUse: L('Applica il bilancio energetico a salite, frenate e problemi con attrito.', 'Apply energy balances to climbs, braking and problems with friction.')
};

const heat = {
  label: L('Termodinamica', 'Thermodynamics'), detail: L('Calore e lavoro', 'Heat and work'), symbol: 'Q',
  headline: L('Quale aspetto del primo principio vuoi capire?', 'Which part of the first law would you like to practise?'),
  goals: [
    goal(L('Assegnare i segni', 'Assign the signs'), L('Voglio distinguere l’energia che entra da quella che esce.', 'I want to distinguish energy entering from energy leaving.')),
    goal(L('Fare un bilancio', 'Set up an energy balance'),L('Voglio ricavare la grandezza mancante.', 'I want to solve for the missing quantity.'))
  ],
  questions: {
    method: question(L('Calore assorbito','Heat absorbed'),L('Segui il calore verso il gas','Follow the heat into the gas'),L('Usiamo Q positivo se il gas assorbe calore. Il gas riceve 60 J. Quanto vale Q?', 'Take Q as positive when the gas absorbs heat. The gas receives 60 J. What is Q?'),null,['−60 J','+60 J','0 J'],1,L('Il calore entra nel gas. Con la convenzione indicata si scrive Q = +60 J.', 'Heat enters the gas. Under this convention Q = +60 J.')),
    practice: question(L('Bilancio dell’energia interna','Internal energy balance'),L('Sottrai il lavoro compiuto dal gas','Subtract the work done by the gas'),L('Il gas assorbe 100 J e compie 35 J di lavoro. Di quanto varia la sua energia interna?', 'A gas absorbs 100 J and does 35 J of work. What is the change in its internal energy?'),equation('ΔU = Q − W'),['+135 J','−65 J','+65 J'],2,L('Dei 100 J che entrano, 35 J escono come lavoro. L’energia interna aumenta di 65 J.', 'Of the 100 J entering, 35 J leave as work. Internal energy rises by 65 J.')),
    support: question(L('Lavoro a volume costante','Work at constant volume'),L('Controlla se la parete si sposta','Check whether the boundary moves'),L('Un gas in un recipiente rigido viene scaldato. Quanto lavoro di espansione compie?', 'A gas is heated in a rigid container. How much expansion work does it do?'),null,[L('Zero','Zero'),L('Quanto il calore ricevuto','As much as the heat received'),L('Metà del calore ricevuto','Half the heat received')],0,L('Il volume resta costante. La parete non si sposta e il lavoro di espansione è zero.', 'The volume stays constant. The boundary does not move, so expansion work is zero.')),
    stretch: question(L('Lavoro in compressione','Work during compression'),L('Distingui lavoro sul gas e lavoro del gas','Distinguish work on the gas from work by the gas'),L('Un gas isolato termicamente viene compresso. L’esterno compie 20 J di lavoro sul gas. Come varia U?', 'A thermally insulated gas is compressed. The surroundings do 20 J of work on it. How does U change?'),null,['−20 J','0 J','+20 J'],2,L('Il calore scambiato è zero. I 20 J entrano nel gas come lavoro e aumentano l’energia interna.', 'No heat is exchanged. The 20 J enter the gas as work and increase its internal energy.'))
  },
  next: L('Combina due trasformazioni', 'Combine two processes'),
  samples: [
    example(L('Scaldare un gas a volume fisso','Heating a gas at fixed volume'),L('Un gas assorbe 40 J in un recipiente rigido. L’unico lavoro possibile è quello di espansione. Trova ΔU.', 'A gas absorbs 40 J in a rigid container. Only expansion work is possible. Find ΔU.'),null,[L('Il calore ricevuto vale +40 J.', 'Heat received is +40 J.'),L('Il volume è fisso, quindi W = 0.', 'The volume is fixed, so W = 0.'),L('Dal primo principio ΔU = 40 − 0 = +40 J.', 'By the first law ΔU = 40 − 0 = +40 J.')]),
    example(L('Calore e lavoro in uscita','Heat input and work output'),L('Un gas assorbe 90 J e compie 25 J di lavoro. Calcola ΔU.', 'A gas absorbs 90 J and does 25 J of work. Find ΔU.'),null,[L('Il calore assorbito è Q = +90 J.', 'Heat absorbed is Q = +90 J.'),L('Il lavoro compiuto dal gas è W = +25 J.', 'Work by the gas is W = +25 J.'),L('La variazione è 90 − 25 = +65 J.', 'The change is 90 − 25 = +65 J.')]),
    example(L('Due fasi di seguito','Two successive stages'),L('Nella prima fase ΔU = +50 J. Nella seconda il gas cede 10 J di calore senza lavoro. Trova la variazione complessiva.', 'In stage one ΔU = +50 J. In stage two the gas releases 10 J as heat and does no work. Find the total change.'),null,[L('La prima fase aggiunge 50 J.', 'Stage one adds 50 J.'),L('La seconda fase toglie 10 J.', 'Stage two removes 10 J.'),L('La variazione totale è +50 − 10 = +40 J.', 'The total change is +50 − 10 = +40 J.')]),
    example(L('Ricavare il calore','Finding the heat input'),L('Un gas compie 18 J di lavoro e la sua energia interna diminuisce di 7 J. Quanto calore assorbe?', 'A gas does 18 J of work and its internal energy decreases by 7 J. How much heat does it absorb?'),null,[L('Scrivi ΔU = −7 J e W = +18 J.', 'Write ΔU = −7 J and W = +18 J.'),L('Dal primo principio Q = ΔU + W.', 'The first law gives Q = ΔU + W.'),L('Il gas assorbe −7 + 18 = 11 J.', 'The gas absorbs −7 + 18 = 11 J.')])
  ],
  courseUse: L('Nel corso puoi seguire gli scambi di energia nelle trasformazioni dei gas.', 'The course traces energy exchanges in gas processes.')
};

const probability = {
  label: L('Probabilità', 'Probability'), detail: L('Casi e condizioni', 'Outcomes and conditions'), symbol: 'P',
  headline: L('Che cosa vuoi allenare in probabilità?', 'What would you like to practise in probability?'),
  goals: [
    goal(L('Contare i casi', 'Count outcomes'), L('Voglio scegliere il denominatore corretto.', 'I want to choose the right denominator.')),
    goal(L('Usare una condizione', 'Use a condition'), L('Voglio capire cosa cambia dopo una nuova informazione.', 'I want to see what changes after new information.'))
  ],
  questions: {
    method: question(L('Casi equiprobabili','Equally likely outcomes'),L('Conta prima tutti i casi possibili','Count all possible outcomes first'),L('In un sacchetto ci sono 3 biglie blu e 2 bianche. Ne estrai una a caso. Qual è la probabilità che sia blu?', 'A bag holds 3 blue and 2 white marbles. You draw one at random. What is the probability it is blue?'),null,['3/2','3/5','2/5'],1,L('Le biglie sono 5 in tutto. Le 3 blu sono i casi favorevoli, quindi la probabilità è 3/5.', 'There are 5 marbles in total. Three are blue, so the probability is 3/5.')),
    practice: question(L('Spazio degli esiti condizionato','Conditional sample space'),L('Restringi i casi possibili','Restrict the possible outcomes'),L('Lanci un dado equilibrato. Sai che è uscito un numero pari. Quanto è probabile che sia 6?', 'You roll a fair die and learn the result is even. What is the probability it is 6?'),null,['1/6','1/2','1/3'],2,L('Restano possibili solo 2, 4 e 6. Uno dei tre esiti è 6.', 'Only 2, 4 and 6 remain possible. One of the three is 6.')),
    support: question(L('Complementare','Complement'),L('Conta gli esiti che rimangono','Count the remaining outcomes'),L('In un’urna 7 biglie su 10 sono rosse. Ne scegli una a caso. Qual è la probabilità che non sia rossa?', 'Seven of ten marbles are red. You pick one at random. What is the probability it is not red?'),null,['3/10','7/10','3/7'],0,L('Le biglie degli altri colori sono 10 − 7 = 3. Il totale rimane 10.', 'There are 10 − 7 = 3 marbles of other colours. The total is still 10.')),
    stretch: question(L('Estrazione senza reinserimento','Drawing without replacement'),L('Aggiorna il contenuto dell’urna','Update the contents of the bag'),L('Un’urna contiene 3 rosse e 2 blu. Hai appena tolto una rossa. Quanto è probabile estrarre un’altra rossa scegliendo a caso?', 'A bag contains 3 red and 2 blue marbles. You have just removed one red. What is the probability that the next random draw is red?'),null,['3/5','1/2','2/5'],1,L('Restano 2 rosse su 4 biglie. La probabilità è 2/4 = 1/2.', 'There are now 2 red marbles out of 4. The probability is 2/4 = 1/2.'))
  },
  next: L('Collega due estrazioni', 'Connect two draws'),
  samples: [
    example(L('Contare i multipli','Counting multiples'),L('Con un dado equilibrato a sei facce, quanto è probabile ottenere un multiplo di 3?', 'How likely is a multiple of 3 on a fair six-sided die?'),null,[L('Gli esiti possibili sono sei.', 'There are six possible outcomes.'),L('I multipli di 3 sono 3 e 6.', 'The multiples of 3 are 3 and 6.'),L('La probabilità è 2/6 = 1/3.', 'The probability is 2/6 = 1/3.')]),
    example(L('Una faccia già esclusa','Narrowing down the die roll'),L('Su un dado equilibrato è uscito un numero maggiore di 3. Quanto è probabile che sia dispari?', 'A fair die shows a number greater than 3. What is the probability that it is odd?'),null,[L('Gli esiti compatibili sono 4, 5 e 6.', 'The compatible outcomes are 4, 5 and 6.'),L('Tra questi è dispari solo il 5.', 'Only 5 is odd.'),L('C’è un caso favorevole su tre, quindi la probabilità è 1/3.', 'One of three outcomes is favourable, so the probability is 1/3.')]),
    example(L('Due rosse di fila','Two red marbles in a row'),L('Estrai due biglie a caso senza reinserimento da un’urna con 3 rosse e 2 blu. Quanto è probabile che siano entrambe rosse?', 'Draw twice at random without replacement from a bag of 3 red and 2 blue marbles. How likely are two reds?'),null,[L('La prima è rossa con probabilità 3/5.', 'The first is red with probability 3/5.'),L('Se la prima è rossa, per la seconda restano 2 rosse su 4.', 'Given the first was red, 2 of the remaining 4 are red.'),L('Moltiplica 3/5 per 2/4. Il risultato è 3/10.', 'Multiply 3/5 by 2/4 to get 3/10.')]),
    example(L('Almeno una blu','At least one blue marble'),L('Da un’urna con 4 rosse e 2 blu estrai due biglie a caso senza reinserirle. Quanto è probabile trovare almeno una blu?', 'Draw two marbles at random without replacement from a bag of 4 red and 2 blue. How likely is at least one blue?'),null,[L('Il caso complementare è estrarre due rosse.', 'The complementary event is drawing two reds.'),L('Due rosse hanno probabilità (4/6)(3/5) = 2/5.', 'Two reds have probability (4/6)(3/5) = 2/5.'),L('La probabilità cercata è 1 − 2/5 = 3/5.', 'The required probability is 1 − 2/5 = 3/5.')])
  ],
  courseUse: L('Puoi esercitarti a scegliere i casi possibili e a combinare le probabilità di più eventi.', 'Practise choosing the sample space and combining the probabilities of several events.')
};

const geometry = {
  label: L('Geometria', 'Geometry'), detail: L('Lunghezze e aree', 'Lengths and areas'), symbol: '△',
  headline: L('Su quali figure vuoi metterti alla prova?', 'Which geometry skill would you like to practise?'),
  goals: [
    goal(L('Calcolare un’area', 'Calculate an area'), L('Voglio distinguere base e altezza.', 'I want to identify the base and height.')),
    goal(L('Confrontare figure simili', 'Compare similar shapes'), L('Voglio usare il fattore di scala.', 'I want to use the scale factor.'))
  ],
  questions: {
    method: question(L('Area del triangolo','Area of a triangle'),L('Individua l’altezza perpendicolare','Find the perpendicular height'),L('Un triangolo ha base 8 cm e altezza relativa 3 cm. Qual è l’area?', 'A triangle has base 8 cm and perpendicular height 3 cm. What is its area?'),null,['24 cm²','12 cm²','11 cm²'],1,L('Metà del prodotto tra base e altezza dà (8 × 3)/2 = 12 cm².', 'Half the product of base and height is (8 × 3)/2 = 12 cm².')),
    practice: question(L('Scala delle aree','Area scale factor'),L('Applica il fattore a due dimensioni','Apply the scale factor in two dimensions'),L('Triplichi il lato di un quadrato. Quante volte diventa più grande l’area?', 'You triple the side of a square. By what factor does its area grow?'),null,['3','6','9'],2,L('L’area è lato per lato. Entrambe le lunghezze vengono triplicate, quindi il fattore è 3 × 3 = 9.', 'Area is side times side. Both lengths triple, so the factor is 3 × 3 = 9.')),
    support: question(L('Unità di misura dell’area','Units of area'),L('Conta i quadrati unitari','Count unit squares'),L('Un rettangolo misura 4 cm per 2 cm. Qual è l’unità corretta della sua area?', 'A rectangle is 4 cm by 2 cm. Which unit is used for its area?'),null,['cm','cm²','cm³'],1,L('Moltiplichi due lunghezze in centimetri. Il prodotto si misura in centimetri quadrati.', 'You multiply two lengths in centimetres. Their product is measured in square centimetres.')),
    stretch: question(L('Dall’area alla lunghezza','From area to length'),L('Estrai la radice del rapporto tra le aree','Take the square root of the area ratio'),L('Due triangoli simili hanno aree 4 cm² e 36 cm². Qual è il rapporto tra un lato del grande e il corrispondente del piccolo?', 'Two similar triangles have areas 4 cm² and 36 cm². What is the ratio of a side of the larger triangle to its counterpart on the smaller one?'),null,['9','6','3'],2,L('Le aree sono nel rapporto 36/4 = 9. Le lunghezze sono nel rapporto √9 = 3.', 'The area ratio is 36/4 = 9. The length ratio is √9 = 3.'))
  },
  next: L('Passa dalle aree ai perimetri', 'Go from areas to perimeters'),
  samples: [
    example(L('Misurare un triangolo','Measuring a triangle'),L('Trova l’area di un triangolo di base 6 cm e altezza 5 cm.', 'Find the area of a triangle of base 6 cm and height 5 cm.'),null,[L('Scrivi A = base × altezza / 2.', 'Write A = base × height / 2.'),L('Il prodotto delle lunghezze è 30 cm².', 'The product of the lengths is 30 cm².'),L('Dimezzando ottieni 15 cm².', 'Halving gives 15 cm².')]),
    example(L('Raddoppiare un rettangolo','Enlarging a rectangle'),L('Raddoppia entrambi i lati di un rettangolo di 3 cm per 5 cm. Quanto vale la nuova area?', 'Double both sides of a 3 cm by 5 cm rectangle. What is the new area?'),null,[L('I nuovi lati misurano 6 cm e 10 cm.', 'The new sides measure 6 cm and 10 cm.'),L('L’area è 6 × 10 = 60 cm².', 'Its area is 6 × 10 = 60 cm².'),L('Rispetto ai 15 cm² iniziali l’area è quadruplicata.', 'Compared with the original 15 cm², the area has quadrupled.')]),
    example(L('Perimetri di figure simili','Perimeters of similar figures'),L('Due figure simili hanno aree 9 e 25 cm². Il perimetro della minore è 12 cm. Trova il maggiore.', 'Two similar figures have areas 9 and 25 cm². The smaller perimeter is 12 cm. Find the larger one.'),null,[L('Il rapporto tra le aree è 25/9.', 'The area ratio is 25/9.'),L('Il fattore delle lunghezze è √(25/9) = 5/3.', 'The length factor is √(25/9) = 5/3.'),L('Il perimetro maggiore è 12 × 5/3 = 20 cm.', 'The larger perimeter is 12 × 5/3 = 20 cm.')]),
    example(L('La figura ridotta','Scaling a figure down'),L('Una figura di area 45 cm² viene riprodotta con tutte le lunghezze ridotte a due terzi. Trova la nuova area.', 'A figure of area 45 cm² is copied with every length scaled to two thirds. Find its new area.'),null,[L('Il fattore lineare è 2/3.', 'The length factor is 2/3.'),L('Il fattore delle aree è (2/3)² = 4/9.', 'The area factor is (2/3)² = 4/9.'),L('La nuova area è 45 × 4/9 = 20 cm².', 'The new area is 45 × 4/9 = 20 cm².')])
  ],
  courseUse: L('Puoi passare dal disegno al calcolo con gli esercizi di geometria del TOLC-I.', 'Use the TOLC-I geometry exercises to move from a drawing to a calculation.')
};

const logic = {
  label: L('Logica', 'Logic'), detail: L('Condizioni e deduzioni', 'Conditions and deductions'), symbol: '⇒',
  headline: L('Quali ragionamenti vuoi allenare?', 'Which reasoning skill would you like to practise?'),
  goals: [
    goal(L('Leggere una condizione','Read a condition'),L('Voglio capire cosa segue da una regola.', 'I want to see what follows from a rule.')),
    goal(L('Verificare una deduzione','Check a deduction'),L('Voglio distinguere una certezza da una possibilità.', 'I want to distinguish certainty from possibility.'))
  ],
  questions: {
    method: question(L('Applicare una regola','Applying a rule'),L('Segui il verso dell’implicazione','Follow the direction of the implication'),L('Tutti i tutor del gruppo hanno un badge. Ada è una tutor del gruppo. Che cosa segue?', 'All tutors in the group have a badge. Ada is a tutor in the group. What follows?'),null,[L('Ada ha un badge.','Ada has a badge.'),L('Chi ha un badge è tutor.','Everyone with a badge is a tutor.'),L('Solo Ada ha un badge.','Only Ada has a badge.')],0,L('La regola vale per ogni tutor del gruppo e quindi anche per Ada.', 'The rule applies to every tutor in the group, including Ada.')),
    practice: question(L('Inversa di una regola','Converse of an implication'),L('Verifica se vale anche il verso inverso','Check whether the converse follows'),L('Tutti i soci hanno una tessera. Leo ha una tessera. Che cosa sai con certezza?', 'All members have a card. Leo has a card. What do you know for certain?'),null,[L('Leo è socio.','Leo is a member.'),L('Leo non è socio.','Leo is not a member.'),L('La tessera da sola non basta a dirlo.','The card alone does not tell us.')],2,L('Anche un ospite potrebbe avere una tessera. La regola dà un’informazione sui soci, ma non identifica tutti i titolari di tessera.', 'A guest might also have a card. The rule tells you about members but does not identify every cardholder.')),
    support: question(L('Controesempio','Counterexample'),L('Cerca un solo caso che smentisca la frase','Look for one case that disproves the claim'),L('Quale numero smentisce «Tutti i numeri pari sono multipli di 4»?', 'Which number disproves “All even numbers are multiples of 4”?'),null,['8','6','12'],1,L('6 è pari e non è divisibile per 4. Un solo caso basta a smentire una frase che dice «tutti».', '6 is even and not divisible by 4. One example is enough to disprove a statement about every even number.')),
    stretch: question(L('Contrapposizione','Contrapositive'),L('Parti dalla conseguenza negata','Start with the negated conclusion'),L('Se un pacco è fragile, porta un’etichetta. Questo pacco non ha l’etichetta. Cosa segue dalla regola?', 'If a parcel is fragile, it has a label. This parcel has no label. What follows from the rule?'),null,[L('È fragile.','It is fragile.'),L('Non è fragile.','It is not fragile.'),L('Ogni pacco con etichetta è fragile.','Every labelled parcel is fragile.')],1,L('Un pacco fragile avrebbe l’etichetta. La sua assenza esclude che questo pacco sia fragile.', 'A fragile parcel would have a label. The absence of a label rules out this parcel being fragile.'))
  },
  next: L('Concatena due regole', 'Chain two rules'),
  samples: [
    example(L('Dal gruppo al singolo','From the group to one person'),L('Ogni finalista riceve un invito. Nina è finalista. Che cosa sai?', 'Every finalist receives an invitation. Nina is a finalist. What do you know?'),null,[L('La regola riguarda tutti i finalisti.', 'The rule applies to every finalist.'),L('Nina appartiene al gruppo dei finalisti.', 'Nina is in that group.'),L('Anche Nina riceve un invito.', 'Nina receives an invitation too.')]),
    example(L('Una conclusione troppo forte','A conclusion that goes too far'),L('Tutti i quadrati sono rettangoli. Una figura è un rettangolo. Deve essere un quadrato?', 'All squares are rectangles. A shape is a rectangle. Must it be a square?'),null,[L('Un quadrato ha quattro lati uguali.', 'A square has four equal sides.'),L('Un rettangolo di lati 2 e 3 soddisfa la premessa.', 'A rectangle with sides 2 and 3 satisfies the premise.'),L('I lati diversi forniscono un controesempio. La conclusione non è necessaria.', 'Its unequal sides give a counterexample. The conclusion does not follow.')]),
    example(L('Due regole in fila','A two-rule chain'),L('Tutti i borsisti sono iscritti. Ogni iscritto può entrare in aula. Cosa segue per i borsisti?', 'All scholarship holders are enrolled. Everyone enrolled may enter the classroom. What follows for scholarship holders?'),null,[L('Parti da un borsista qualsiasi.', 'Start with any scholarship holder.'),L('Con la prima regola sai che è iscritto.', 'The first rule tells you that this person is enrolled.'),L('Con la seconda, anche questo borsista può entrare. Vale per tutti i borsisti.', 'The second rule grants this person entry. This holds for every scholarship holder.')]),
    example(L('Risalire lungo una catena','Reasoning backwards through a chain'),L('Ogni finalista è invitato e ogni invitato compare in elenco. Eva non compare in elenco. Può essere finalista?', 'Every finalist is invited and every invitee is on the list. Eva is not on the list. Can she be a finalist?'),null,[L('Se fosse invitata, Eva comparirebbe in elenco.', 'If Eva were invited, she would be on the list.'),L('L’assenza dall’elenco esclude l’invito.', 'Being absent from the list rules out an invitation.'),L('Ogni finalista riceve l’invito, quindi Eva non può essere finalista.', 'Every finalist receives an invitation, so Eva cannot be a finalist.')])
  ],
  courseUse: L('Nel TOLC-I puoi allenarti a controllare un ragionamento anche quando hai poco tempo.', 'The TOLC-I course gives you practice checking an argument under time pressure.')
};

export const argomenti = {
  limiti: limits, derivate: tangent, integrali: integrals, successioni: sequences,
  cinematica: motion, forze: forces, energia: energy, termodinamica: heat,
  probabilita: probability, percentuali: percent, geometria: geometry, logica: logic
};

export const programmi = {
  'analisi-1': {
    temi: ['limiti', 'derivate', 'integrali', 'successioni'],
    programma: L('Limiti, derivate, integrali e serie', 'Limits, derivatives, integrals and series')
  },
  'fisica-1': {
    temi: ['cinematica', 'forze', 'energia', 'termodinamica'],
    programma: L('Cinematica, dinamica, energia e termodinamica', 'Kinematics, dynamics, energy and thermodynamics')
  },
  'matematica-superiori-5': {
    temi: ['limiti', 'derivate', 'integrali', 'probabilita'],
    programma: L('Derivate, studio di funzione, integrali e probabilità', 'Derivatives, curve sketching, integrals and probability')
  },
  'tolc-i': {
    temi: ['percentuali', 'geometria', 'logica', 'probabilita'],
    programma: L('Matematica, logica, scienze e comprensione verbale', 'Mathematics, logic, science and verbal comprehension')
  }
};
