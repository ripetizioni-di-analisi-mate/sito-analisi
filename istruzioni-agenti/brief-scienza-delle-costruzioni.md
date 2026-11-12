# Scienza delle costruzioni — corso esteso

Lingua italiana. Conservare slug e tutte le ancore esistenti. Prerequisiti: Analisi 1, Algebra lineare, Fisica 1 e Statica di base. Il riferimento editoriale è Analisi 1. Leggere GUIDA-CONTENUTI.md e le istruzioni di figura in src/plugins/struttura.mjs. La richiesta corrente prevale sulle quantità della guida.

Per ciascun capitolo: teoria originale 2.500–3.500 parole di prosa, 6–10 sezioni ##, 8–10 figure tecniche con didascalia. Tutta la teoria nei blocchi Manuali, senza :::percorso. Definizioni motivate, dimostrazioni centrali esplicite, esempi numerici e limiti di validità. Figure con assi orientati, quote e dati coerenti. La fotografia commentata collega una struttura o una prova reale al modello. Conservare l’attribuzione e la licenza nella didascalia. Evitare dati attribuiti alle foto.

8 schede svolte numerate 1..8, con titolo al plurale entro 45 caratteri, 2–4 problemi originali per scheda, gratis true per le prime tre. 14 tracce numerate 1..14 con sola risposta nel blocco :::soluzione. Frontmatter titolo, teoria (ancore vere), parole; anche gratis per svolti. Ogni esercizio svolto: ## Esercizio k, traccia con dati, figura dei soli dati subito dopo, calcolo a passaggi espliciti, spiegazione dentro <div class="spiegazione"> e verifica indipendente scritta per esteso. Ogni traccia con schema se pertinente. Due minuti per i quiz; primo blocco 1..14 abbinato alle tracce. Tenere 90 quiz per ciascun capitolo. Una sola risposta corretta su quattro, spiegazione, distrattori derivati da errori tipici, posizioni bilanciate, niente varianti cosmetiche per riempire. Autore quiz distinto dall’autore del capitolo.

Notazioni: assi strutturali globali x verso destra, y verso l'alto, z uscente. Reazioni H_A verso destra, V_A verso l'alto, M_A antiorario. q intensità positiva verso il basso, P forza, \mathcal{M} coppia antioraria. N > 0 a trazione, T > 0 tende a ruotare il concio in senso orario, M > 0 tende le fibre inferiori. Nel tratto regolare T'=-q, M'=T. Diagramma M sul lato teso, N/T positivo sopra. Per la linea elastica v positiva verso il basso come nella teoria esistente, EI v''=-M, rotazione antioraria \varphi=-v' per piccole rotazioni. Per la sezione della trave x longitudinale, y verso l'alto e z trasversale uscente. Convenzione esplicita per M_z e M_y quando coesistono. Sforzi in kN, lunghezze in m, momenti in kN m, tensioni in MPa; 1 MPa = 1 N/mm². Frazioni in colonna e virgole decimali in LaTeX. Vietati riempitivi, negazioni contrastive, espressioni vaghe.

## Confini del corso

1 statica-vincoli: idealizzazione, equilibrio dei corpi rigidi, carichi equivalenti, rango e labilità, cerniere interne; niente NTM sistematico.
2 sollecitazioni: N, T, M, metodo del taglio, equazioni locali, salti, diagrammi per trave e telaio; niente tensioni di sezione.
3 reticolari: modello, stabilità geometrica, nodi, aste scariche, Ritter, variazione di lunghezza come applicazione.
4 geometria-sezioni: composizione e fori, baricentro, Steiner, tensore, assi principali, moduli ai lembi; niente calcolo tensionale.
5 tensioni-deformazioni: Cauchy, compatibilità e piccole deformazioni, Hooke, Mohr, rosetta. Conservare l'ancora von-mises con richiamo al capitolo dedicato.
6 de-saint-venant: prisma, azione assiale, flessione retta/deviata e pressoflessione, Jourawski, torsione circolare e pareti sottili aperte/chiuse, combinazioni.
7 criteri-resistenza: principali 3D, duttili Tresca/von Mises, fragili Rankine e Coulomb–Mohr con limiti, applicazioni. Distinguere criterio teorico da verifica di progetto.
8 linea-elastica: Eulero–Bernoulli, condizioni al contorno/raccordo, integrazione, simmetria e casi notevoli; lavori virtuali nel capitolo 9.
9 iperstatiche: schema principale, forze ridondanti, forza unitaria, congruenza, cedimenti e temperatura; conservare castigliano come richiamo.
10 metodi-energetici-spostamenti: energia e reciprocità, Clapeyron, Betti/Maxwell, Castigliano e Menabrea, metodo degli spostamenti con telai semplici.
11 stabilita: biforcazione, modi di Eulero, lunghezze efficaci, asse debole, snellezza e limiti di elasticità, Rayleigh e imperfezioni.
12 lastre-piane: lastra nel proprio piano e piastra inflessa, ipotesi di Kirchhoff–Love, rigidezza, momenti e tagli, bordi, esempio di Navier, limiti; niente dimensionamento normativo.


## Controlli

Ricalcolare esercizi e tracce con SymPy a partire dai dati della traccia e dello schema. Controllare segni, unità, ancore, figure e alternative dei quiz. Eseguire `strumenti/yamlcheck.py`, `strumenti/verifica-domande.mjs` e una build Astro con `SOLO_MATERIE=scienza-delle-costruzioni,analisi-1`. Analisi 1 serve nella build ridotta per le rotte spagnole già registrate. Generare le vetrine e verificare le tre schede gratuite per capitolo, i contenuti riservati e il funzionamento dei collegamenti.

Programmi di riferimento [Politecnico di Milano, Scienza delle costruzioni 056796](https://onlineservices.polimi.it/schedaincarico/schedaincarico/controller/scheda_pubblica/SchedaPublic.do?__pj0=0&__pj1=9c22b9830b1bdc32aa25fba0cc84aadc&c_classe=888063&evn_default=evento&lang=IT) e [Politecnico di Torino, Scienza delle costruzioni 16CFOXF](https://didattica.polito.it/pls/portal30/sviluppo.guide.visualizza?p_a_acc=2029&p_cod_ins=16CFOXF).
