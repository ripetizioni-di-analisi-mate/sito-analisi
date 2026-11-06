# Verifica dell'unità Biomolecole

Contenuti prodotti: una teoria con 10 sezioni e 23 ancore; 10 schede con due esercizi svolti ciascuna; 14 esercizi da fare con risposta finale; 14 domande a quattro alternative con spiegazione. Totale 39 file Markdown. Le prime tre schede svolte sono gratuite.

La teoria tratta i venti amminoacidi standard (nomi, due sigle e catene laterali), configurazioni e acidità, punto isoelettrico, legame peptidico e livelli delle proteine; monosaccaridi, stereoisomeria, ciclizzazione, reazioni, disaccaridi e polisaccaridi/GAG; acidi grassi e classi lipidiche; basi, nucleosidi, nucleotidi, ATP, coenzimi redox e DNA/RNA; glicazione, deaminazione e ossidazione delle biomolecole.

Controlli realmente eseguiti:

- `python strumenti/yamlcheck.py` su tutti i 39 file: zero errori.
- Resa KaTeX di tutte le 211 formule con `throwOnError: true` e `strict: error`: zero errori.
- Controllo delle ancore in frontmatter e dei collegamenti delle domande: tutte presenti nella teoria.
- Controllo di esattamente due esercizi per scheda e quattro alternative distinte per domanda; distribuzione delle corrette 4/4/3/3.
- Undici verifiche numeriche con `decimal.Decimal`, svolte indipendentemente dalla scrittura: pI, tre masse peptidiche, rapporti della saponificazione, elettroni NADH/FADH2 e rapporto GSH/GSSG. Due verifiche del complementare inverso del DNA mediante trasformazione della stringa.
- Rilettura delle risposte concettuali: distinzione Asp/Asn e catene polari, L-cisteina R e glicina achirale, forma prevalente rispetto a carica media, conservazione della sequenza nella sola riduzione dei disolfuri, anomeri/epimeri e zuccheri riducenti, nomenclatura lipidica e nucleotidica.

Fonti primarie consultate per conferme puntuali, con testi rielaborati e quesiti originali:

- IUPAC-IUB, nomenclatura e sigle degli amminoacidi: https://iupac.qmul.ac.uk/AminoAcid/tab1.html
- National Library of Medicine, MeSH Maillard Reaction: https://www.ncbi.nlm.nih.gov/mesh/68015416

La verifica numerica riguarda gli esempi con dati assegnati, non costituisce una revisione specialistica indipendente dell'intera teoria. La compilazione Astro e la verifica visiva delle pagine spettano all'integrazione del corso.
