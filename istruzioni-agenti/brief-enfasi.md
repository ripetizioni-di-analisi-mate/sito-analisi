# Aggiungere grassetto e corsivo ai testi di studio

Repository: /home/claude/sito-analisi1 (sito di teoria ed esercizi di matematica). Non usare git (né commit né checkout), non lanciare la build. Modifica SOLO i file elencati nel tuo incarico.

## Il compito
Nei file assegnati aggiungi **grassetto** (`**…**`) e *corsivo* (`*…*`) per rendere la lettura più scorrevole, SENZA cambiare nessuna parola, nessuna formula e nessuna punteggiatura. L'unica modifica ammessa è inserire gli asterischi.

Prima di cominciare leggi `GUIDA-CONTENUTI.md`, sezione "Grassetto e corsivo", e guarda l'esempio già fatto nelle prime due sezioni di `src/content/teoria/analisi-1/limiti.md` e nella prima spiegazione di `src/content/svolti/analisi-1/limiti/2.md`.

### Dove
- File di teoria: dentro i blocchi (definizioni, teoremi, esempi, osservazioni, dimostrazioni) e nelle righe di testo.
- Schede di esercizi svolti: dentro le spiegazioni `<div class="spiegazione">` e nelle frasi di testo tra le formule.

### Come
- **Grassetto**: il termine che si sta definendo, nel punto in cui viene definito ("si chiama **punto critico**"); il nome di un teorema, criterio o metodo quando la frase lo applica ("per il **teorema di Weierstrass**", "si applica il **criterio del confronto**"); la conclusione detta a parole ("la serie **converge**", "il sistema **non ha soluzioni**", "la funzione è **continua**"). Al massimo 2–3 grassetti per blocco o per spiegazione; molte frasi non ne hanno.
- *Corsivo*: la parola su cui cade l'accento logico (*necessaria*, *sufficiente*, *ogni*, *almeno uno*, *solo se*, *se e solo se*, *non*, *tutti*, *esiste*), con parsimonia: al massimo 1–2 per blocco.
- Vietato: asterischi dentro o attorno a `$…$` e `$$…$$`; nei titoli `##`; nel frontmatter (tra i due `---`); nelle righe delle direttive (`:::…`, `::grafico{…}`) e nei loro attributi; su frasi intere; su parole già in grassetto o corsivo.
- Un grassetto racchiude parole intere: `**teorema di Rolle**`, non `**teorema** di Rolle**`. Lascia uno spazio o una punteggiatura prima e dopo i marcatori come nel testo originale (scrivi `è **continua** in`, mai `è**continua**`).

### Strumento
Usa il tool Edit con sostituzioni brevi e uniche (la frase o la porzione di frase interessata). Non riscrivere i file per intero.

## Controllo obbligatorio
Alla fine esegui, dalla radice del repository, il controllo su tutti i tuoi file:
```
python3 strumenti/controlla_enfasi.py <file1> <file2> ...
```
Lo script confronta ogni file con la versione salvata: togliendo gli asterischi il testo deve risultare identico, e frontmatter, formule e righe strutturali invariati. Se un file risulta ERRORE, correggi finché tutti sono "ok".

## Rapporto
Breve, in italiano: file trattati, numero di grassetti per file (dallo script), conferma che lo script dà "ok" su tutti.
