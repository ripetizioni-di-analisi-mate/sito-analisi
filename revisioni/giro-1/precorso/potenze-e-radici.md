# Potenze e radici: primo giro dello studente puntiglioso

## Modifiche fatte

- `teoria/precorso/potenze-e-radici.md`, blocco *Proprietà delle radici*: l'enunciato dichiarava "indici $m, n \geq 2$" e poi usava $m$ come esponente in $\sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$ e nella proprietà invariantiva, dove $m = 1$ è ammesso e necessario. Ora l'esponente si chiama $k$, naturale con $k \geq 1$, e le due formule sono $\sqrt[n]{a^k} = \left(\sqrt[n]{a}\right)^k$ e $\sqrt[n]{a^k} = \sqrt[np]{a^{kp}}$. Corretto anche in `content-en`. (matematica)
- `svolti/precorso/potenze-e-radici/2.md`, esercizio 3: la traccia chiedeva $\sqrt{\sqrt[3]{a^{12}}}$ "per $a \geq 0$" e la soluzione passava per $a^{\frac{12}{6}}$, ma la teoria definisce le potenze a esponente razionale solo per base positiva. Ora la traccia dice "per $a > 0$" e la spiegazione "la base $a$ è positiva". Corretto anche in `content-en`. (matematica)
- `svolti/precorso/potenze-e-radici/4.md`, esercizio 1: "La verifica con un caso ridotto conferma il verso, perché $\frac{2}{3} > \frac{4}{9}$" non diceva quali potenze si stavano confrontando. Ora: "Il confronto tra gli esponenti $1$ e $2$ conferma il verso, perché $\left(\frac{2}{3}\right)^1 = \frac{2}{3}$ è maggiore di $\left(\frac{2}{3}\right)^2 = \frac{4}{9}$". (didattica)
- `teoria/precorso/potenze-e-radici.md`, grafico di $y = x^2$ e $y = x^3$: le etichette "(−2)² = 4" e "(−2)³ = −8" coprivano le curve accanto ai punti. Ora sono spostate in zone libere. (figure)
- `teoria/precorso/potenze-e-radici.md`, grafico di $y = \sqrt{x}$: la didascalia era in testo semplice ("y = √x", "x ≥ 0"), diversa dalle altre. Ora usa le formule. (figure)
- `teoria/precorso/potenze-e-radici.md`, grafico della simmetria tra $y = x^2$ e $y = \sqrt{x}$: la legenda mostrava "$y = (\sqrt{x})^4$", cioè l'espressione tecnica usata per disegnare il ramo con $x \geq 0$, mentre testo ed etichetta parlano di $y = x^2$. Ora la legenda dice "$y = x^2 \ (x \geq 0)$", "$y = x$", "$y = \sqrt{x}$". (figure)

Tutti i risultati di teoria, schede e tracce sono stati ricalcolati con sympy e sono corretti.

## Modifiche da fare

- Svolti e tracce: le potenze a esponente razionale hanno un blocco di teoria ma nessun esercizio di calcolo numerico ($8^{\frac{2}{3}}$, $27^{-\frac{1}{3}}$, $\left(\frac{16}{81}\right)^{\frac{3}{4}}$), che lo studente incontra subito nei limiti e nelle derivate. Proposta: un esercizio in più nella scheda 1 oppure due tracce in `dafare`.
- Svolti: l'avviso $\sqrt{a^2} = |a|$ non ha nessun esercizio collegato. Lo studente lo legge e poi scrive $\sqrt{(x - 1)^2} = x - 1$ senza accorgersene. Proposta: un esercizio nella scheda 2 del tipo "semplificare $\sqrt{x^2 - 6x + 9}$ e dire per quali $x$ vale $x - 3$", con la traccia corrispondente.
- Tracce: le condizioni di esistenza trattano solo radicandi di primo grado. Proposta: una traccia con radicando fratto o di secondo grado ($\sqrt{\frac{x - 1}{x + 2}}$, $\sqrt{4 - x^2}$), che collega questo argomento alle disequazioni.
- Teoria, blocco *Proprietà delle potenze*: l'enunciato parla di "esponenti $m, n$ reali", ma le potenze a esponente reale sono definite due sezioni dopo. Proposta: scrivere "esponenti $m, n$ interi" nell'enunciato e lasciare ai blocchi *Potenza a esponente razionale* e *Potenza a esponente reale* le frasi, già presenti, che dicono che le proprietà restano valide.
