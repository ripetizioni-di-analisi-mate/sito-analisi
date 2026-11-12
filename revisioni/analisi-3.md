# Analisi matematica 3 e Analisi complessa

Corso universitario in 11 capitoli. I capitoli su successioni e serie di funzioni, serie di potenze e serie di Fourier partono dal materiale di Analisi 2. La build aggiunge gli approfondimenti italiani di Analisi 3 e aggiorna i rimandi interni. Gli studenti di Analisi 3 usano gli URL del proprio corso.

La revisione italiana sviluppa ogni capitolo in 6–10 sezioni e circa 2.500–3.500 parole. La teoria usa i blocchi dei manuali, con ipotesi esplicite, dimostrazioni ed esempi. Le figure mostrano le quantità discusse nel testo. Le schede aggiuntive sviluppano tipi di problemi diversi e rimandano alla teoria usata. Restano disponibili 90 domande a tempo per capitolo.

I moduli sono Analisi complessa (funzioni olomorfe, rami del logaritmo, armoniche, integrali complessi, Cauchy, Laurent, residui e Rouché); Analisi reale e funzionale (Lebesgue, convergenze, Lp, Hilbert, Banach e operatori); Fourier, Laplace ed equazioni alle derivate parziali. Le distribuzioni temperate e la formulazione debole sono introduzioni nei capitoli pertinenti.

Il prezzo nel listino Stripe è di 55 EUR una tantum, imposte incluse, con accesso personale senza scadenza. Le prime tre schede di ogni capitolo seguono l'anteprima ordinaria. Prima dell'acquisto, il server limita i quiz a dieci ID fissi complessivi del corso.

Le serie di Fourier usano la normalizzazione del periodo indicata in ciascun esercizio. La trasformata sulla retta usa la frequenza angolare e il fattore di inversione `1/(2π)`. Laplace usa la trasformata unilatera e il tempo a partire da zero. I contorni complessi hanno verso positivo antiorario. La teoria degli spazi normati indica quando il campo è reale o complesso. Le equazioni alle derivate parziali esplicitano il dominio e i dati iniziali o al bordo.

Il catalogo condiviso integra home, indice, ricerca, progressi, compatibilità, Pi e pacchetti a scelta. Il pacchetto Analisi 1+2 e i videocorsi esistenti conservano la propria composizione. I nuovi materiali sono in italiano; i metadati inglesi lo dichiarano.

I Markdown degli otto capitoli propri di Analisi 3 stanno in `src/content/{teoria,svolti,dafare}/analisi-3`. Le integrazioni ai tre capitoli condivisi stanno in `src/contenuti-integrativi/analisi-3/it`. Per recuperare file mancanti dal banco iniziale si può usare `node strumenti/genera-analisi3.mjs`, che conserva i Markdown già presenti.

La build esegue la sincronizzazione, il controllo delle formule con KaTeX, frontmatter, blocchi, ancore, opzioni e conteggi; poi compila il sito e verifica l'accesso nel Worker reale con risorse locali finte, oltre a quadrature e residui numerici indipendenti. Non si effettuano acquisti reali né si scrivono dati negli account degli studenti.

Riferimenti universitari di confronto dei programmi, senza riprodurre i testi:
- https://www.unibo.it/it/studiare/insegnamenti-competenze-trasversali-moocs/insegnamenti/insegnamento/2026/503590
- https://www.uniroma3.it/insegnamento-erogato/dipartimento-di-matematica-e-fisica/l/2026-2027/fisica-0580706203000001/a1342cbd-11d8-4e84-aea2-4a584fad9b54--20430007/
- https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/pages/lecture-notes/
- https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/pages/lecture-notes/

Il programma varia tra atenei: i moduli consentono di selezionare gli argomenti effettivamente richiesti. Nessuna promessa di copertura universale.
