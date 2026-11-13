# Orientamento allo studio e alla scelta universitaria

## Scelta di Carmine

Il 13 novembre 2026 Carmine ha scelto la soluzione A: una sezione
«Orientamento» con due ingressi indipendenti, collegamenti dalle materie
e risultati recuperabili nell’account.

Pagine italiane:

- `/orientamento`: scelta del percorso e risultati conservati.
- `/orientamento/studio`: disciplina, obiettivo, quesiti e attività successive.
- `/orientamento/universita`: interessi, preferenze e confronto fra percorsi.
- `/account#orientamento`: risultati salvati, con apertura ed eliminazione.

Le pagine delle materie portano al test con `?materia=<slug>`.
Il 13 novembre Carmine ha autorizzato la pubblicazione **soltanto per i GM**.
Si riutilizza il permesso `utenti.gm_manuale` gestito dalla dashboard e restituito
come `gm` da `/api/io`. Il permesso Premium e il cookie della dashboard non
attribuiscono accesso. Non vengono assegnati nuovi permessi a nessun account.
Gli ingressi nell’indice, nelle materie e nell’account compaiono soltanto ai GM;
la sezione è esclusa da ricerca, sitemap e llms pubblici ed è `noindex`.
Non sono dichiarate traduzioni inesistenti. Per accedere serve un account GM.

## Test di studio

La banca originale è in `src/data/orientamento-studio.mjs`: 35 materie attive,
85 competenze, quattro quesiti per competenza (340 complessivi). I profili
contengono prerequisiti, nuclei del corso e materiali pertinenti alla materia.

Gli obiettivi sono `iniziare`, `recuperare`, `riprendere`, `esame`. Il core
`src/lib/orientamento-studio.mjs` sceglie sei nuclei, proponendo tre quesiti
per nucleo e interlacciandoli. Ogni percorso ha quindi 18 domande iniziali.
Se una competenza dà risposte contrastanti, viene aggiunto il quarto quesito,
fino a un massimo di sei conferme. Soltanto le risposte iniziali determinano
le conferme: rispondere alla conferma non può farla scomparire.

Le risposte sono gli indici `0..3`, `non-so` oppure `non-studiato`.
Il risultato distingue errori e contenuti ancora nuovi. Ordina al massimo
tre priorità, affrontando i prerequisiti prima dei nuclei successivi, e
collega teoria, esercizi svolti ed esercizi da fare realmente presenti.
Non assegna un voto globale né dichiara la padronanza dell’intero programma.
Il perimetro indica esplicitamente i nuclei osservati e quelli non osservati.
I test incompleti non producono priorità complessive.

Le domande hanno spiegazioni originali e, quando serve, una figura con dati
esatti. Le spiegazioni si aprono dopo la conclusione; sono disponibili anche
riaprendo un risultato salvato della versione corrente.

## Questionario universitario

I dati sono in `src/data/orientamento-universita.mjs`, il core in
`src/lib/orientamento-universita.mjs`. Il questionario comprende 44 domande
base: 30 sugli interessi, due per ciascuna delle 15 macroaree, 10 sulle
preferenze di studio e quattro sulle priorità. Ci sono altri 41 quesiti di
approfondimento; ogni sessione ne propone al massimo sei, facoltativi.

Le risposte sono `1..5` oppure `non-conosco`. Il confronto fra aree usa
esclusivamente gli interessi dichiarati. Preferenze e priorità vengono
restituite separatamente, senza utilizzare voti, risultati dei test di
studio o acquisti. Le aree includono discipline esterne al catalogo del sito.
I percorsi AFAM sono identificati come tali.

Le regole descrivono direttamente le risposte: vengono evidenziate le attività
valutate «Molto» o «Moltissimo». Le aree con entrambe le attività così valutate
appaiono insieme; anche le aree con una sola risposta alta rimangono disponibili.
Con più di tre candidate, lo studente sceglie due aree da confrontare.
Non ci sono medie, distanze dal massimo, soglie minime di aree conosciute
o graduatorie. Una risposta bassa, una sconosciuta e una mancante restano
distinte. Il numero di risposte alte descrive i quesiti, non misura una
caratteristica personale o l'adeguatezza a un corso.

Chi ha già scelto una famiglia può indicarla prima del test o dal risultato.
Gli approfondimenti sono disponibili soltanto dopo questa scelta esplicita e
confrontano i suoi indirizzi; per Ingegneria sono sei quesiti su civile e
ambientale, industriale e informazione. I risultati mostrano le attività
associate alle risposte, le alternative e che cosa verificare nei piani di studio.

## Riferimenti e limiti

Le domande sono originali. I riferimenti per l’impostazione e il confronto sono:

- [Prove di Posizionamento CISIA](https://www.orientazione.it/per-chi-studia/pps-prove-di-posizionamento).
- [Sillabi CISIA](https://guide.cisiaonline.it/it/Sillabo).
- [AlmaOrièntati](https://www.almalaurea.it/orientamento/strumenti-orientamento-universitario/almaorientati).
- [Note metodologiche pubbliche di AlmaOrièntati](https://aomobile.almalaurea.it/info/note.aspx).
- [Universitaly](https://www.universitaly.it/it/cerca-corsi).

Il questionario originale non è validato psicometricamente. Non attribuire
al sito la validazione degli strumenti citati, non copiare i loro quesiti
e non presentare una scelta universitaria come una previsione di successo.
Modalità di accesso e offerta dei corsi si verificano sulle fonti ufficiali.
Le note di AlmaOrièntati documentano un collegamento tramite CFU reali: questa
implementazione non dispone di quei dati e non replica tale algoritmo.
Le fonti pubbliche sono state consultate il 13 novembre 2026; non sono stati
copiati quesiti, risultati personali o cataloghi protetti. O*NET è stato
consultato per distinguere strumenti validati e licenze; nessun suo contenuto
o modello psicometrico è incorporato nel questionario.

## Risultati sintetici

Il campo `pianoPratico` del test di studio deriva dalla prima priorità effettiva:
teoria, esempio, esercizi per argomenti da studiare o riprendere; esempio ed
esercizi per quelli da consolidare. Con tutti i quesiti risolti, propone una
prova autonoma su una competenza del corso effettivamente osservata.
I collegamenti provengono dai materiali reali della stessa competenza.
Gli altri argomenti, i conteggi e le soluzioni restano in sezioni apribili.
Il questionario universitario mostra risposte motivate e tre passi pratici:
scegliere due corsi reali, controllare programmi/requisiti e provare un'attività.
Le priorità dichiarate specificano che cosa cercare nei programmi.

## Bozze e account

La conservazione locale si attiva soltanto su richiesta: scelta iniziale non
preselezionata, «Salva e interrompi» o «Conserva su questo dispositivo».
Altrimenti le risposte rimangono nella memoria della pagina. La cancellazione
locale interrompe i successivi salvataggi finché l'utente non li richiede di nuovo.
La bozza locale è separata per tipo di test e per account. L’identificativo
locale usa SHA-256 dell’email normalizzata; una chiave diversa è usata per
l’ospite. Le bozze sono recuperabili entro 30 giorni dall’ultima attività;
quelle scadute vengono eliminate quando viene nuovamente eseguito il codice
del servizio. Non esiste un timer che le elimini mentre il browser è chiuso.

L’anteprima GM non offre l’avvio come ospite. Le vecchie bozze restano separate
e non vengono cancellate per un errore di rete, una revoca o un cambio account.
Prima di attivare il test e leggere le bozze, l’interfaccia verifica il permesso
GM effettivo. Se la verifica fallisce, il test resta chiuso; occorre riprovare
quando l’account può essere verificato. Il salvataggio locale, quando richiesto,
deve segnalare eventuali errori del browser.

`worker/orientamento.mjs` gestisce `/api/orientamento`:

- GET restituisce i risultati dell’account autenticato.
- POST riceve tipo, versione, risposte e materia/obiettivo oppure area scelta;
  valida le risposte e ricalcola l’esito con gli stessi core del browser.
- DELETE riceve `id` oppure `tutti: true`.

Identità e dispositivo provengono dal cookie firmato e dalla sessione nel
Durable Object. Il ruolo GM viene riletto dall’archivio per ogni richiesta;
la revoca vale dalla richiesta successiva. Pagine e file contenenti i test
sono protetti prima di servire gli asset e non sono conservabili nella cache.
POST e DELETE richiedono la stessa origine e l’header
`X-Orientamento-Account`, con l’impronta dell’account visto dalla pagina.
L’header è una guardia contro cambi di account in altre schede, non una
fonte alternativa di identità. GET verifica la guardia quando presente.

La tabella SQLite `orientamento_risultati` conserva un risultato per materia
(`studio:<slug>`) e uno universitario (`universita`). Ogni record contiene
versione, risposte, esito e data. La durata è 365 giorni dall'ultimo salvataggio
volontario (politica del servizio, non durata imposta dalla legge). Il campo
`scade` è calcolato dalla data di aggiornamento; le letture non rinnovano il termine.
Le API escludono gli scaduti e li eliminano per l'account corrente; la pulizia
interna oraria elimina gli altri. Il DELETE rimuove anche la bozza locale
completata coincidente, sul dispositivo corrente, preservando altri account,
altre materie e nuove prove modificate. Le copie su altri dispositivi e quelle
tecniche di ripristino del fornitore hanno un ciclo separato.
Una nuova versione della banca richiede
l’aggiornamento della costante di versione; i risultati precedenti vengono
segnalati come storici. Un trigger elimina i risultati alla cancellazione
dell’utente. Il limite del corpo HTTP è 16 KiB. Le risposte API sono private
e `no-store`. Non vengono assegnati EXP né attivati invii email.

## Verifica e manutenzione

Con Node 24 e le dipendenze del progetto:

```sh
npm run test:orientamento
SOLO_MATERIE=analisi-1,precorso,fisica-1,analisi-3,matematica-finanziaria npm run build
```

La suite comprende prove studio, università, API e conservazione locale. I test API
compilano il Worker completo e usano SQLite reale in memoria, con account
fittizi. Coprono isolamento, sessioni revocate, input forgiati, origini
estranee, versioni, test incompleti, limiti e cancellazione.

Per lo studio vengono controllate tutte le 140 combinazioni materia–obiettivo,
le formule KaTeX, la struttura delle figure e l’esistenza dei materiali.
La revisione indipendente iniziale ha letto tutti i 340 quesiti, svolto
49 ricalcoli simbolici e confrontato 515 opzioni. Restano necessari controlli
editoriali quando si aggiungono competenze o si cambia una domanda.

La build limitata include Analisi 3 e Matematica finanziaria perché la pipeline
esegue anche le prove di accesso e dei quiz di queste materie. Controlla le
nuove pagine e i componenti condivisi;
il parametro `SOLO_MATERIE` non va usato per la pubblicazione del catalogo.
Prima di modificare la UI, verificare anche pause/ripresa, risposte cambiate,
salvataggio, cambio account in un’altra scheda, browser senza storage e
risultati storici. Provare una vista stretta e una larga, soprattutto formule,
figure, radio, tastiera e collegamenti alle attività.

## Testi legali e verifica professionale

Privacy e termini IT/EN descrivono finalità, regole, scelte di salvataggio,
tempi e cancellazione; il metodo pubblico spiega la derivazione dei suggerimenti.
Le risposte dell'orientamento non alimentano marketing, accessi ai corsi,
prezzi o probabilità di successo. Nessuna risposta viene inviata a modelli di IA.
Il riepilogo associato a una persona può ricadere nella definizione GDPR di
profilazione: non sostenere il contrario soltanto perché usa regole semplici.
Non è una decisione automatizzata di ammissione o una valutazione psicologica.

Resta la revisione professionale richiesta da `CLAUDE.md`, da completare prima
dell’eventuale apertura al pubblico: qualificazione effettiva del servizio, base giuridica, utenti
minorenni, fornitori e procedura di ripristino che rispetti cancellazioni già
richieste. Le implementazioni e i testi non costituiscono una certificazione.
Fonti primarie per la revisione:

- [GDPR, testo del Garante](https://www.garanteprivacy.it/il-testo-del-regolamento): artt. 4, 5, 6, 13, 17, 22, 25.
- [Garante, minori](https://www.garanteprivacy.it/temi/minori): la soglia italiana di 14 anni riguarda il consenso ai servizi della società dell'informazione; non è un divieto generale di accesso ai quiz.
- Legge 56/1989, art. 1, e [DL 105/2003 coordinato con legge 170/2003](https://www.parlamento.it/parlam/leggi/03170l.htm), art. 3: verificare il confine con le attività riservate. Il vecchio art. 51, comma 2, del DPR 328/2001 è stato abrogato.
- [O*NET, licenze](https://www.onetcenter.org/license_tools.html): la citazione di uno strumento non trasferisce licenza, validazione o approvazione.

Carmine ha autorizzato esplicitamente la pubblicazione dell’anteprima riservata
ai GM. L’apertura agli altri account o agli ospiti richiede una nuova richiesta.
