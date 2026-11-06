# Revisione scientifica indipendente: acidi, basi, tamponi e redox

Letti integralmente i 39 contenuti dell'unità `acidi-basi-redox`: teoria, 10 schede svolte con 20 esercizi, 14 tracce e 14 quiz. Confrontata la copertura con il BRIEF. Nessun errore riscontrato nei risultati numerici, nelle risposte corrette dei quiz o nei segni di Nernst e Gibbs. Individuati due interventi puntuali, descritti sotto.

## Controlli eseguiti

Ricalcolati indipendentemente in Python 50 valori intermedi/finali: pH/pOH di acidi e basi forti, fattori stechiometrici degli idrossidi, radici quadratiche per acidi e basi deboli, rapporti di dissociazione, approssimazione diprotica e anfiprotica, idrolisi dei sali, bilanci molari di neutralizzazione e titolazione, tamponi prima/dopo aggiunte, sistema bicarbonato a 37 °C, rapporto fosfato, potenziali standard/non standard, quozienti di reazione e Gibbs.

Valori di controllo rappresentativi:
- Acido acetico 0,0100 mol/L, Ka 1,80×10⁻⁵: h = 4,15359517×10⁻⁴ mol/L e pH = 3,38157583, coerenti con i valori arrotondati dello svolgimento.
- NH3 0,0250 mol/L: pH = 10,82077976.
- Acido diprotico col solo primo stadio: pH = 2,56838504; rapporto A²⁻/HA⁻ = 3,70156×10⁻⁶, quindi secondo stadio trascurabile.
- Bicarbonato anfiprotico con i Ka dati: pH = 8,34721684.
- NH4Cl 0,100 mol/L: pH quadratico = 5,12765244; acetato corrispondente: pH = 8,87234756. Per NH4Cl 0,0200 mol/L: pH = 5,47715745, arrotondato correttamente a 5,48.
- Tampone acetico con rapporto 1,5: pH = 4,93609126; con rapporto 2: pH = 5,061029996. Le aggiunte di acido/base modificano le moli nel verso corretto prima dell'applicazione di Henderson-Hasselbalch.
- Tampone bicarbonato: CO2 disciolta = 1,20 mmol/L e pH = 7,401029996, usando correttamente le unità del coefficiente di Henry e il pK apparente a 37 °C.
- Cella Zn/Cu: E° = 1,10 V; ΔrG° = −212267 J/mol. Con Q = 100 si ha E = 1,04084 V; con Q = 0,010 si ha E = 1,15916 V. La reazione trasferisce due elettroni.
- Coppia O2/acqua a pH 7, pressione standard e acqua ad attività unitaria: log10 Q = 28 ed E = 0,81488 V. Il segno negativo della correzione con il pH è corretto.

Verificate indipendentemente conservazione degli atomi e della carica in 11 reazioni: ammoniaca/acqua; due ruoli del diidrogenofosfato; permanganato/ferro; dicromato/ioduro; Fenton; riduzione del ferro da superossido; bilancio di Haber-Weiss; riduzione dell'ossigeno; ossidazione complessiva del glucosio; Zn/Cu. I coefficienti e le cariche sono coerenti.

Verificate le definizioni e le condizioni d'uso: attività adimensionali e convenzione delle concentrazioni ridotte, pKw dipendente dalla temperatura, acqua trascurabile nelle approssimazioni numeriche impiegate, reazioni preliminari ai calcoli tampone, acidità/pH dei sali, coppie coniugate, pK apparente del sistema bicarbonato, standard chimico e standard biochimico trasformato distinti. La trattazione di urato e ossalato evita di attribuire a tutti i sali il medesimo andamento della solubilità col pH.

Controllati tutti i 14 quiz: quattro alternative distinte per ciascuno, una sola risposta corretta nelle ipotesi date e indici coerenti con le spiegazioni. Controllati inoltre i riferimenti delle 18 ancore e i conteggi dei 39 file.

La copertura richiesta nel BRIEF è presente, inclusi indicatori, poliprotici, sali, capacità tampone, bicarbonato/fosfati/proteine, solubilità-pH, semireazioni, Nernst/Gibbs, respirazione, Fenton e Haber-Weiss.

## Rilievi puntuali da correggere

1. `src/content/dafare/chimica-semestre-filtro/acidi-basi-redox/8.md`.

   La traccia chiede quale intervallo sia adatto «tra quelli proposti», ma non contiene alcun intervallo proposto. Il quiz corrispondente li contiene. La traccia autonoma degli esercizi da fare è quindi incompleta.

   Correzione minima: aggiungere alla traccia gli intervalli del quiz, cioè 1,0–2,0; 3,1–4,4; 6,0–7,0; 8,2–10,0. La risposta finale già presente resta corretta. In alternativa si può chiedere esplicitamente un possibile intervallo, riconoscendo che la soluzione indicata è soltanto un esempio.

2. `src/content/teoria/chimica-semestre-filtro/acidi-basi-redox.md`, blocco `celle-potenziali`, prima frase.

   Il testo attribuisce spontaneità alle «due semireazioni» prese separatamente. Il criterio di spontaneità termodinamica riguarda invece la reazione redox complessiva, ottenuta accoppiando ossidazione e riduzione.

   Correzione proposta: «Una cella galvanica realizza una reazione redox spontanea separando le due semireazioni in compartimenti collegati da un circuito esterno e da un contatto ionico.» Le frasi successive su anodo, catodo e segni restano corrette.

I rilievi sono stati comunicati all'integrazione. Non sono stati modificati i contenuti revisionati.
