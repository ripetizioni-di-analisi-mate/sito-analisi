# Verifica · Fisica 2° anno · I principi della dinamica

## Esito

`python3 strumenti/controlla_capitolo.py fisica-superiori-2 principi-dinamica`: **a posto**, nessun ERRORE né AVVISO.

Parole (originale → autore → dopo la verifica): IT 2559 → 4330 → 4332 (×1,69); EN 2507 → 4497 → 4495 (×1,79). Entrambe restano entro i limiti dati all'autore (1,7 e 1,8), quindi non ho alleggerito oltre: il testo è già sotto la soglia di 1,8 indicata dal coordinatore.

## Conti rifatti

38 conti rifatti con sympy (Pitagora 6-8-10, carrello, slitta, inerzia sul pianale, sensore, ascensore, pattinatori, carrelli col filo, peso sulla Terra e sulla Luna, molla 18→14 cm e 6,4 N, $k=160$ N/m → 1,6 N/cm, $\mu_{s,\min}=0{,}20$, tabella dell'attrito, piano a 30°, rampa 3:4:5 con $N=55$ N, curva 8 N e $v=\sqrt{10}\simeq3{,}16$ m/s): **nessuno sbagliato**. Figure coerenti con il testo (pendenza 0,75 della rampa, 30° del piano, frecce dell'ascensore).

## Errori di contenuto corretti

- Slitta, blocco «Compensare una sola componente» (IT ed EN). La fune di componenti $(-3;4)\,\mathrm N$ forma con il nord un angolo di circa 36,9° verso ovest, non 45°. L'autore aveva scritto «verso nord-ovest, cioè in una direzione fra nord e ovest»: il nome «nord-ovest» indica la direzione a 45° ed è quindi inesatto.
  - era → «Una seconda fune la tira verso nord-ovest, cioè in una direzione fra nord e ovest.»
  - è → «Una seconda fune la tira in una direzione compresa fra nord e ovest, più vicina al nord.»
  - EN: «towards the northwest, that is, in a direction between north and west» → «in a direction between north and west, closer to north».

## Completezza rispetto all'originale

Confronto blocco per blocco: ogni frase, caso e dato dell'originale è presente nel blocco con ancora in cui stava (anche «come un arresto mantenuto» → «come un ascensore fermo», «richiede altre considerazioni» → riferimento non inerziale con il pianale). Nessun contenuto da rimettere. Dati numerici invariati.

## Termini e sigle

Definiti alla prima comparsa tutti quelli elencati dall'autore. Unico punto non perfetto: la parola «accelerazione» compare la prima volta nel blocco della slitta («componente di forza o di accelerazione») e nel pianale di `#inerzia`, mentre il richiamo è all'inizio di `#newton`. È un termine del capitolo di cinematica del 1° anno; ho lasciato il richiamo dove sta per non duplicare la definizione.

## Voce

Nessuna frase prescrittiva, a effetto o di raccordo trovata; «può/possono» 1,9 ogni 1000 parole.

## Inglese

Traduzione integrale e fedele del testo italiano finale (stessi blocchi, numeri, punto decimale, grafia britannica: *metre*, *centre*, *recognise*, *lift*).

## Dubbi rimasti

- Quelli già segnalati dall'autore su schede ed esercizi (scheda 8 con `teoria: ["inerzia"]`, domanda 11 che rimanda a `#forze`, cifre dell'esercizio da fare 3, «$\simeq$» per risultati esatti negli svolti 1.1 e 7.1): confermati, non corretti perché fuori dai file del capitolo.
- Nastro trasportatore (domanda 87): nessun esempio in teoria, come segnalato dall'autore.
