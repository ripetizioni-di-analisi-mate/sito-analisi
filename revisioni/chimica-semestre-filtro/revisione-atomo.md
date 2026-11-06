# Revisione scientifica indipendente: atomo, legami e termodinamica

Letti integralmente tutti i 39 file dell'unità: teoria, 10 schede con 20 esercizi svolti, 14 tracce e 14 quiz. Nessun file di contenuto è stato modificato da questa revisione.

## Esito

Tutti i risultati numerici e tutte le risposte marcate corrette sono confermati. In ciascuno dei 14 quiz è stata controllata anche la falsità delle altre tre alternative nelle condizioni della traccia. La copertura dei punti del BRIEF è completa al livello introduttivo richiesto; non sono stati trovati errori di bilanciamento, di geometria, di conteggio elettronico o di segno nel primo principio e nel calcolo di Gibbs.

Una correzione terminologica da applicare prima della pubblicazione:

- `src/content/teoria/chimica-semestre-filtro/atomo-legami-termodinamica.md`, blocco `#ossidazione-nomenclatura`, attualmente «Il numero di ossidazione è una carica formale assegnata…». L'espressione tecnica *carica formale* indica una quantità diversa, ottenuta condividendo equamente gli elettroni di legame. Lo stato di ossidazione applica invece un'approssimazione ionica ai legami eteronucleari. Per esempio nel carbonio della struttura O=C=O la carica formale è zero e il numero di ossidazione è +4. Correzione puntuale proposta: «Il **numero di ossidazione** è la carica ipotetica attribuita a un atomo assegnando gli elettroni dei legami eteronucleari al partner più elettronegativo e dividendo equamente quelli dei legami tra atomi uguali.» Il resto del blocco e i risultati degli esercizi restano validi.

Raccordo didattico consigliato, senza errore nella risposta:

- `src/content/dafare/chimica-semestre-filtro/atomo-legami-termodinamica/7.md` e relativo quiz introducono l'interazione ione-dipolo e rimandano a `#polarita-interazioni`; il blocco di teoria non nomina esplicitamente questo tipo di interazione. Aggiungere al blocco: «L'interazione **ione-dipolo** è l'attrazione tra uno ione e il dipolo di una molecola polare. Nell'idratazione di Na+, l'estremità parzialmente negativa dell'ossigeno delle molecole d'acqua si orienta prevalentemente verso il catione.» La risposta e le alternative del quiz sono già corrette.

## Controlli riproducibili eseguiti

- Parsing YAML e verifica di tutte le ancore frontmatter e dei collegamenti dei quiz: 39 file, 20 ancore della teoria, nessun rimando mancante.
- Conteggi: 9 sezioni di teoria, 2 esercizi per ciascuna delle 10 schede; 14 quiz con esattamente 4 alternative testualmente distinte; distribuzione corretta nelle posizioni 1/2/3/4 pari a 4/4/3/3.
- Ricalcolo Python indipendente di 38 quantità, inclusi conteggi nucleari/elettronici, masse/moli/particelle, ossidazioni, Boyle e Charles, equazione di stato, densità, primo principio, entalpia e Gibbs. Tutti i valori non arrotondati coincidono entro `rel_tol=1e-9`, `abs_tol=1e-12`; i risultati pubblicati sono arrotondamenti coerenti.
- Rendering KaTeX di tutte le 491 formule estratte dai 39 file, con `throwOnError: true`: nessun errore.
- Controllo delle ipotesi: gas ideali e quantità fisse dichiarati; temperature assolute utilizzate; pressioni assolute esplicitate; sistema chiuso e convenzione di lavoro dichiarati; condizioni per q_p=Delta H esplicitate; approssimazione delle variazioni termodinamiche costanti dichiarata dove si cerca una soglia di temperatura.
- La distinzione dimensionale tra numero di entità in una mole e costante di Avogadro risulta corretta nella versione corrente riletta durante la revisione.

## Copertura del BRIEF

| Tema | Blocchi verificati |
| --- | --- |
| Atomo, isotopi, RMN | atomo-isotopi, isotopi-rmn |
| Numeri quantici, Pauli, Hund, configurazioni | numeri-quantici, configurazioni |
| Proprietà periodiche, mole e masse | proprieta-periodiche, mole-masse |
| Legami, ottetto, orbitali sigma/pi | legami, lewis-ottetto, sigma-pi |
| Ibridazione, geometrie, polarità, interazioni e idrofobicità | geometria-ibridazione, polarita-interazioni |
| Numeri di ossidazione e nomenclatura inorganica | ossidazione-nomenclatura, classi-inorganiche |
| Solidi, leggi dei gas, cinetica e Maxwell-Boltzmann | solidi, gas-ideali, cinetica-gas |
| Liquidi, evaporazione, pressione di vapore, acqua/CO2 | liquidi-fasi, diagrammi-fase |
| Sistemi aperti, entalpia, entropia, Gibbs | energia-entalpia, entropia-gibbs |

Fonti primarie consultate per verificare la distinzione terminologica:
- IUPAC Gold Book, oxidation state: https://goldbook.iupac.org/terms/view/O04365
- IUPAC Gold Book, formal charge: https://goldbook.iupac.org/terms/view/08169

La revisione copre contenuti e formule; integrazione Astro, checkout e verifica visiva restano al proprietario della build.
