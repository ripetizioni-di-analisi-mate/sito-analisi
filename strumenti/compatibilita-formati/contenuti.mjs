// Programmi di prova per «Compatibilità con il tuo esame»: stessi contenuti, scritti poi in molti formati
// (formati.mjs). Sono elenchi di argomenti tipici dei corsi universitari, senza nomi di persone.
// Ogni sezione: [titolo, voci]. Alcune voci hanno virgole, due punti e parentesi per mettere alla prova la divisione.
export const PROGRAMMI = {
  'analisi-1': { nome: 'Analisi Matematica I', sezioni: [
    ['Numeri reali e funzioni', ['Insiemi numerici', 'Estremo superiore ed estremo inferiore', 'Principio di induzione', 'Funzioni iniettive, suriettive e invertibili', 'Funzioni monotone', 'Funzioni elementari: potenze, esponenziali, logaritmi']],
    ['Numeri complessi', ['Forma algebrica dei numeri complessi', 'Forma trigonometrica', 'Forma esponenziale', 'Radici n-esime di un numero complesso']],
    ['Limiti e continuità', ['Punti di accumulazione', 'Definizione di limite', 'Teorema di unicità del limite', 'Teorema della permanenza del segno', 'Teorema del confronto', 'Limiti notevoli', 'Infinitesimi e infiniti', 'Funzioni continue', 'Teorema degli zeri', 'Teorema di Weierstrass', 'Asintoti verticali, orizzontali e obliqui']],
    ['Calcolo differenziale', ['Definizione di derivata', 'Retta tangente', 'Regole di derivazione', 'Derivata della funzione composta', 'Teorema di Fermat', 'Teorema di Rolle', 'Teorema di Lagrange', 'Teorema di de l\'Hôpital', 'Formula di Taylor con resto di Peano', 'Funzioni convesse e concave', 'Studio del grafico di una funzione']],
    ['Calcolo integrale', ['Primitive e integrale indefinito', 'Integrazione per parti', 'Integrazione per sostituzione', 'Integrazione delle funzioni razionali', 'Integrale definito secondo Riemann', 'Teorema della media integrale', 'Teorema fondamentale del calcolo integrale', 'Integrali impropri: criterio del confronto e del confronto asintotico']],
    ['Serie numeriche', ['Condizione necessaria per la convergenza', 'Serie geometrica', 'Serie armonica generalizzata', 'Criterio del rapporto', 'Criterio della radice', 'Convergenza assoluta', 'Criterio di Leibniz']],
    ['Equazioni differenziali', ['Equazioni a variabili separabili', 'Equazioni lineari del primo ordine', 'Equazioni lineari del secondo ordine a coefficienti costanti', 'Problema di Cauchy']],
  ] },
  'analisi-2': { nome: 'Analisi Matematica II', sezioni: [
    ['Funzioni di più variabili', ['Insiemi aperti e chiusi del piano', 'Limiti e continuità per funzioni di due variabili', 'Derivate parziali', 'Differenziabilità', 'Gradiente e derivate direzionali', 'Teorema di Schwarz', 'Matrice hessiana']],
    ['Ottimizzazione', ['Punti critici e loro classificazione', 'Massimi e minimi vincolati', 'Moltiplicatori di Lagrange', 'Teorema della funzione implicita']],
    ['Integrali multipli', ['Integrali doppi su domini normali', 'Cambiamento di variabili: coordinate polari', 'Integrali tripli', 'Coordinate cilindriche e sferiche']],
    ['Curve e superfici', ['Curve parametriche regolari', 'Lunghezza di una curva', 'Integrali curvilinei di prima e seconda specie', 'Campi conservativi e potenziale', 'Formule di Gauss-Green', 'Superfici parametriche e integrali di superficie', 'Teorema della divergenza', 'Teorema di Stokes']],
    ['Successioni e serie di funzioni', ['Convergenza puntuale e uniforme', 'Serie di potenze e raggio di convergenza', 'Serie di Taylor', 'Serie di Fourier']],
  ] },
  'algebra-lineare': { nome: 'Algebra Lineare e Geometria', sezioni: [
    ['Matrici e sistemi lineari', ['Operazioni tra matrici', 'Determinante', 'Rango di una matrice', 'Matrice inversa', 'Metodo di eliminazione di Gauss', 'Teorema di Rouché-Capelli', 'Regola di Cramer']],
    ['Spazi vettoriali', ['Sottospazi vettoriali', 'Dipendenza e indipendenza lineare', 'Basi e dimensione', 'Formula di Grassmann', 'Somma diretta']],
    ['Applicazioni lineari', ['Nucleo e immagine', 'Teorema della dimensione', 'Matrice associata a un\'applicazione lineare', 'Cambiamento di base']],
    ['Diagonalizzazione', ['Autovalori e autovettori', 'Polinomio caratteristico', 'Molteplicità algebrica e geometrica', 'Matrici diagonalizzabili', 'Teorema spettrale']],
    ['Spazi euclidei', ['Prodotto scalare', 'Basi ortonormali', 'Procedimento di Gram-Schmidt', 'Proiezioni ortogonali', 'Forme quadratiche']],
    ['Geometria analitica', ['Rette e piani nello spazio', 'Posizioni reciproche di rette e piani', 'Distanze e angoli', 'Coniche e loro classificazione']],
  ] },
  'fisica-1': { nome: 'Fisica Generale I', sezioni: [
    ['Cinematica', ['Grandezze fisiche e unità di misura', 'Vettori e operazioni vettoriali', 'Moto rettilineo uniforme e uniformemente accelerato', 'Moto del proiettile', 'Moto circolare', 'Moti relativi']],
    ['Dinamica del punto materiale', ['Leggi di Newton', 'Forza peso e reazioni vincolari', 'Forze di attrito', 'Forza elastica e moto armonico', 'Lavoro ed energia cinetica', 'Forze conservative ed energia potenziale', 'Conservazione dell\'energia meccanica', 'Quantità di moto e impulso']],
    ['Sistemi di punti e corpo rigido', ['Centro di massa', 'Urti elastici e anelastici', 'Momento angolare', 'Momento d\'inerzia', 'Teorema di Huygens-Steiner', 'Rotolamento', 'Statica del corpo rigido']],
    ['Gravitazione e fluidi', ['Legge di gravitazione universale', 'Leggi di Keplero', 'Legge di Stevino', 'Principio di Archimede', 'Teorema di Bernoulli']],
    ['Termodinamica', ['Temperatura e calore', 'Gas ideali', 'Primo principio della termodinamica', 'Trasformazioni termodinamiche', 'Secondo principio della termodinamica', 'Ciclo di Carnot', 'Entropia']],
  ] },
  'fisica-2': { nome: 'Fisica Generale II', sezioni: [
    ['Elettrostatica', ['Legge di Coulomb', 'Campo elettrico', 'Teorema di Gauss', 'Potenziale elettrico', 'Conduttori in equilibrio', 'Condensatori e capacità', 'Dielettrici', 'Energia del campo elettrico']],
    ['Corrente elettrica', ['Intensità di corrente', 'Leggi di Ohm', 'Effetto Joule', 'Leggi di Kirchhoff', 'Circuiti RC']],
    ['Magnetismo', ['Forza di Lorentz', 'Forza su un conduttore percorso da corrente', 'Legge di Biot-Savart', 'Teorema di Ampère', 'Proprietà magnetiche della materia']],
    ['Induzione elettromagnetica', ['Legge di Faraday-Neumann-Lenz', 'Autoinduzione e mutua induzione', 'Circuiti RL', 'Energia del campo magnetico', 'Corrente alternata']],
    ['Onde elettromagnetiche', ['Corrente di spostamento', 'Equazioni di Maxwell', 'Onde elettromagnetiche piane', 'Vettore di Poynting']],
  ] },
  'matematica-generale': { nome: 'Matematica Generale', sezioni: [
    ['Funzioni', ['Funzioni reali di variabile reale', 'Funzioni lineari e quadratiche', 'Funzioni esponenziali e logaritmiche', 'Dominio di una funzione']],
    ['Limiti e derivate', ['Limiti di funzioni', 'Funzioni continue', 'Derivata e regole di derivazione', 'Elasticità di una funzione', 'Massimi e minimi', 'Concavità e convessità', 'Studio di funzione']],
    ['Integrali', ['Integrale indefinito', 'Integrale definito', 'Calcolo di aree']],
    ['Algebra lineare', ['Vettori e matrici', 'Determinante e matrice inversa', 'Sistemi lineari']],
    ['Funzioni di due variabili', ['Derivate parziali', 'Punti stazionari', 'Ottimizzazione vincolata']],
    ['Matematica finanziaria', ['Capitalizzazione semplice e composta', 'Tassi equivalenti', 'Rendite', 'Piani di ammortamento']],
  ] },
  statistica: { nome: 'Statistica e Probabilità', sezioni: [
    ['Statistica descrittiva', ['Distribuzioni di frequenza', 'Media, mediana e moda', 'Varianza e scarto quadratico medio', 'Quantili e box plot', 'Covarianza e correlazione', 'Retta di regressione']],
    ['Probabilità', ['Spazio campionario ed eventi', 'Probabilità condizionata', 'Teorema di Bayes', 'Indipendenza stocastica', 'Calcolo combinatorio']],
    ['Variabili aleatorie', ['Variabili aleatorie discrete e continue', 'Valore atteso e varianza', 'Distribuzione binomiale', 'Distribuzione di Poisson', 'Distribuzione normale', 'Teorema del limite centrale']],
    ['Inferenza', ['Stimatori e loro proprietà', 'Intervalli di confidenza', 'Verifica di ipotesi', 'Test chi quadrato']],
  ] },
  idraulica: { nome: 'Idraulica', sezioni: [
    ['Idrostatica', ['Proprietà dei fluidi', 'Legge di Stevino', 'Spinte idrostatiche su superfici piane', 'Spinte su superfici curve', 'Galleggiamento']],
    ['Dinamica dei fluidi', ['Equazione di continuità', 'Teorema di Bernoulli', 'Equazione globale della quantità di moto', 'Moto laminare e turbolento', 'Numero di Reynolds']],
    ['Correnti in pressione', ['Perdite di carico distribuite', 'Perdite di carico localizzate', 'Lunghe condotte', 'Impianti di sollevamento', 'Reti di condotte']],
    ['Correnti a pelo libero', ['Moto uniforme in un canale', 'Energia specifica e profondità critica', 'Profili di moto permanente', 'Risalto idraulico', 'Efflusso da luci e stramazzi']],
  ] },
};

// Compiti di prova: [materia, righe]. Non sono programmi e non devono essere scambiati per programmi.
export const COMPITI = [
  ['analisi-1', ['Calcolare il limite $\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$.', 'Studiare la funzione $f(x) = x e^{-x}$ e disegnarne il grafico.', 'Calcolare l\'integrale $\\int_0^1 x e^x \\, dx$.', 'Stabilire il carattere della serie $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$.', 'Enunciare e dimostrare il teorema di Rolle.']],
  ['analisi-2', ['Determinare i punti critici di $f(x,y) = x^3 + y^3 - 3xy$ e classificarli.', 'Calcolare l\'integrale doppio $\\iint_D xy \\, dx \\, dy$ con $D$ il triangolo di vertici $(0,0)$, $(1,0)$, $(0,1)$.', 'Verificare che il campo $F = (2xy, x^2)$ è conservativo e trovarne un potenziale.', 'Studiare la convergenza della serie di potenze $\\sum_{n} \\frac{x^n}{n}$.']],
  ['algebra-lineare', ['Si consideri la matrice $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$. Determinare autovalori e autovettori.', 'Stabilire se $A$ è diagonalizzabile.', 'Risolvere il sistema lineare $x + y + z = 1$, $x - y = 0$ al variare del parametro $k$.', 'Trovare una base del nucleo dell\'applicazione lineare $f(x,y,z) = (x+y, y+z)$.']],
  ['fisica-1', ['Un blocco di massa $m = 2\\,\\mathrm{kg}$ scivola su un piano inclinato di $30°$ con attrito $\\mu = 0{,}2$. Calcolare l\'accelerazione.', 'Determinare la velocità alla base del piano, lungo $3\\,\\mathrm{m}$.', 'Un gas ideale compie una trasformazione isoterma. Calcolare il lavoro compiuto.', 'Quanto vale la variazione di entropia?']],
  ['fisica-2', ['Due cariche $q_1 = 2\\,\\mu\\mathrm{C}$ e $q_2 = -3\\,\\mu\\mathrm{C}$ distano $10\\,\\mathrm{cm}$. Calcolare il campo elettrico nel punto medio.', 'Determinare la capacità equivalente di due condensatori in serie da $4\\,\\mu\\mathrm{F}$.', 'Una spira quadrata di lato $5\\,\\mathrm{cm}$ ruota in un campo $B = 0{,}1\\,\\mathrm{T}$. Calcolare la forza elettromotrice indotta.']],
  ['matematica-generale', ['Calcolare la derivata di $f(x) = \\ln(x^2+1)$.', 'Determinare i massimi e i minimi di $f(x) = x^3 - 3x$.', 'Data la funzione di costo $C(q) = q^2 + 4q + 10$, calcolare il costo marginale.', 'Risolvere il sistema lineare con la regola di Cramer.']],
  ['statistica', ['Calcolare media e varianza dei dati $2, 4, 4, 6, 9$.', 'Un\'urna contiene 3 palline rosse e 2 blu. Calcolare la probabilità di estrarre due rosse.', 'Determinare l\'intervallo di confidenza al 95% per la media.', 'Verificare l\'ipotesi $H_0: \\mu = 10$ al livello $0{,}05$.']],
  ['idraulica', ['Calcolare la spinta idrostatica su una paratoia rettangolare larga $2\\,\\mathrm{m}$ e alta $3\\,\\mathrm{m}$.', 'Determinare la portata in una condotta di diametro $D = 0{,}2\\,\\mathrm{m}$ lunga $500\\,\\mathrm{m}$.', 'Tracciare la linea piezometrica.', 'Calcolare la profondità critica in un canale rettangolare.']],
];
