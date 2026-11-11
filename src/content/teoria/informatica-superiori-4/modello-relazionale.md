---
titolo: "Modello relazionale, chiavi e relazioni"
sommario: "Modellare entità, attributi, chiavi e associazioni."
---

## Rappresentare entità

:::definizione{#tabelle titolo="Tabelle, righe e colonne"}
Una tabella raccoglie dati dello stesso tipo. Ogni riga rappresenta una occorrenza e ogni colonna un attributo. Una tabella Studenti può avere matricola, nome e classe.
:::

## Distinguere le chiavi

:::definizione{#chiavi titolo="Chiave primaria e chiave esterna"}
La chiave primaria identifica una riga in modo univoco. Una chiave esterna collega una riga a una chiave della tabella di riferimento. Due studenti possono avere lo stesso nome e matricole diverse.
:::

## Rappresentare le associazioni

:::definizione{#cardinalita titolo="Cardinalità"}
Una classe può contenere molti studenti e ogni studente appartiene a una classe. Si memorizza il riferimento alla classe nella tabella degli studenti. Un’associazione molti-a-molti usa una tabella di collegamento.
:::
