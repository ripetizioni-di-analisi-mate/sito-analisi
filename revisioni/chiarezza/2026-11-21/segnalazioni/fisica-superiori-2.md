# Fisica 2° anno · segnalazioni su schede, esercizi da fare e domande

Fonte: i 20 rapporti `revisioni/chiarezza/2026-11-21/fisica-superiori-2__*.md` (autore e verifica). Ogni correzione è fatta in italiano e, dove il file inglese aveva lo stesso difetto, anche in `src/content-en/`. Numeri ricalcolati con Python.

**File modificati: 226** (svolti 25 IT + 25 EN, dafare 18 + 18, domande 71 + 69) più la chiave `src/data/chiavi/fisica-superiori-2.json` (17 valori e un'etichetta). Correzioni distinte: circa 95 (contando una volta la coppia IT/EN).

Oltre alle segnalazioni puntuali ho corretto lo stesso difetto dove l'ho trovato con una ricerca nella materia: opzioni e risultati con 4-8 decimali (`0{,}33333333`, `2{,}6667`, `41{,}8182`…). Arrotondamento: tre cifre significative, o frazione in colonna quando il risultato è un rapporto esatto e le altre opzioni lo consentono. `corretta:` non è stato toccato in nessun file; la risposta giusta resta nella stessa posizione e le sbagliate restano distinte.

## Per capitolo

### Calore e calorimetria
| File | Prima | Ora |
|---|---|---|
| domande 21, 31 | opzione `0{,}33333333` | `\dfrac{1}{3}` |
| domande 48 | `0{,}66666667` | `0{,}67` |
| domande 56 | `0{,}11111111`, `0{,}1`, `0{,}9`, `0{,}5`; risultato `0{,}10` | tutte in frazione: 1/9, 1/10, 9/10, 1/2; risultato 1/10 |
| domande 23 | `0{,}0033333333\,J/K` | `0{,}0033\,J/K` |
| domande 27 | `\frac{C/c_1}{C/c_2}` (frazioni in linea) | frazioni in colonna |
| domande 4, 5 | opzioni a sei cifre (228,571; 41,8182…), formula 5 in stile sympy | tre cifre; formula 5 riscritta `\frac{20\cdot5+60\cdot6}{5+6}` |
| svolti 1 es. 1, 6 es. 1 | `\simeq 10080 J`, `\simeq 63 s` (esatti) | `=` |
| svolti 4 es. 1 | `454{,}545` | `\simeq 455` |
| dafare 4, 5 | 228,571; 41,8182 | 229; 41,8 (chiavi allineate) |

### Cambiamenti di stato
| File | Prima | Ora |
|---|---|---|
| domande 45 | $c_a=4180$ (resto del capitolo 4200), opzioni 17,99 e 7,99 | $c_a=4200$, energia dell'acqua 75,4 kJ (dato solo di questo file), risultato sempre 10 °C; opzioni 10, 18, 8, 0 °C; «Usa … e trova» → domanda impersonale |
| domande 62 | $\Delta Q=mc\Delta T$ | $Q=mc\,\Delta T$ |
| svolti 5 es. 1 | $Q=\Delta T_g c_g m+Lm+T_a c_a m$ con fattori `\left(…\right)` | $Q=mc_g(0-T_i)+mL_f+mc_a(T_f-0)$ come in `#fasi`, con i tre addendi 4200 + 66800 + 10080 J |
| svolti 7 es. 1, domande 7, dafare 7 | $\frac{T_a c m_a}{L}$, risultati 0,0251497 / 0,0628743 | $\frac{m_a c\,(T_a-0)}{L_f}$, 0,0251 / 0,0629 kg; opzioni della domanda a tre cifre |

### Lavoro ed energia
| File | Prima | Ora |
|---|---|---|
| domande 15 | distrattore «−13 J» senza un errore riconoscibile | «−1,6 J» (forza divisa per lo spostamento) |
| domande 16 | `0{,}33333`, `-0{,}5`, `0{,}5` | 1/3, −1/2, 1/2 |
| domande 41 | 0,63246 e 0,44721 m | 0,63; 0,20; 0,40; 0,45 m |
| dafare 5, 13 | 22,3607; 24,4949 | 22,4; 24,5 (chiavi) |

### Luce e riflessione
| File | Prima | Ora |
|---|---|---|
| domande 88 | $|\dot s|$ (derivata col punto) | frase che spiega il raddoppio e $u=2\cdot0{,}3=0{,}6$ m/s |
| domande 48 | «indice di rifrazione» (non ancora definito nel capitolo) | «le proprietà del materiale sono le stesse in ogni punto» (definizione di omogeneo della teoria) |
| svolti 4 es. 1, domande 4 | $\theta_r=90-A$, $A$ mai definita, niente gradi, «≃» su risultato esatto | $\theta_r=90^\circ-\varphi$ con $\varphi$ definito nel testo (stessa lettera dell'es. 2), `=` |
| domande 28 | uso delle componenti senza motivo | aggiunto il perché (angoli uguali, raggi da parti opposte della normale) |
| svolti 7, 8 | $1/f-1/p$, $1/f$ e $-1/p$ in linea | frazioni in colonna |
| domande 22, 25, 26, 46 | 0,33333333; 0,66666667; 5,3333333 | 0,33; 0,67; 5,3 cm; 0,33 |

### Moti nel piano
| File | Prima | Ora |
|---|---|---|
| domande 15, 18 (solo IT) | coordinate con la virgola $(1,3)$, $(3,-1)$ | punto e virgola come nel resto del capitolo |
| domande 28, 30, 35, 36, 38, 42, 46, 48, 8, 19, 37, 44 | opzioni a 5 cifre | due o tre cifre, o frazione (46, 48; in 48 tolto «Scegli il valore più vicino» perché le opzioni sono esatte) |
| svolti 7; dafare 8 | 3,1416; 6,1261; 8,16667 | 3,14; 6,13; 49/6 ≃ 8,17 (chiave) |

### Moto accelerato
| File | Prima | Ora |
|---|---|---|
| svolti 1 es. 1-2 | $\frac63\simeq2$ | `= 2` |
| svolti 4 es. 3 | «La velocità diminuisce quindi alla stessa velocità con cui diminuisce la lettura del tachimetro.» | «La velocità coincide quindi con la lettura del tachimetro, e le due grandezze diminuiscono allo stesso modo.» |
| dafare 1, 4, 5 | 2,66667; 4,66667; 65,3333 | 8/3 ≃ 2,67; 14/3 ≃ 4,67; 65,3 (chiavi) |
| domande 1, 4, 5, 15, 26, 32, 45; svolti 4, 5, 7 | 4-5 decimali | tre cifre |

### Moto uniforme
| File | Prima | Ora |
|---|---|---|
| svolti 2 es. 1, 5 es. 1-2, 6 es. 1-2, 8 es. 1; domande 6, 8 | «≃» su 30, 20, 7, 12, 14 s e 4,8 / 7,2 m/s | `=` |
| svolti 8 es. 1, domande 8, dafare 8 | rapidità media con $v_m$ / $v_{\mathrm{media}}$ (in teoria $v_m$ è la velocità media con segno) | $u$, come nell'es. 2 della stessa scheda (etichetta della chiave → `$u$`) |
| svolti 1 es. 2 | «La pendenza negativa» senza grafico | «La velocità negativa» |
| domande 2, dafare 2 | 38,889 / 38,8889 s | opzioni 38,9; 47,9; 19,4; soluzione 350/9 ≃ 38,9 s (chiave) |
| domande 19, 32, 49; dafare 5 | 6,6667; 13,333; 15,3846 | 6,67; 13,3; 15,4 |

### Principi della dinamica
| File | Prima | Ora |
|---|---|---|
| svolti 8 | `teoria: ["inerzia"]` per l'attrito statico | `teoria: ["attrito"]` |
| domande 11 | link `#forze` | `#newton` (procedimento del secondo principio) |
| dafare 3, domande 3 | 24,525 N (e 12,2625, 6,1312) | 24,5 N; opzioni 12,3 / 49,1 / 24,5 / 6,13 |
| svolti 1 es. 1, 7 es. 1; domande 6 | «≃» su 2 e 8 m/s², 16 N, 5 m/s² | `=` |
| domande 7, 29, 38; dafare 7 | 40,833; 3,3333; 1,6667 | 40,8; 3,33; 1,67 (chiave) |

### Rifrazione e lenti
| File | Prima | Ora |
|---|---|---|
| domande 16 | $\frac{\dfrac{c}{n}_1}{\dfrac{c}{n}_2}$ (pedici fuori posto), opzione 0,83333333 | $\frac{\dfrac{c}{n_1}}{\dfrac{c}{n_2}}$; opzioni 0,83 / 0,25 / 1,50 / 1,20 |
| domande 72, 73, 84 | $f/(p-f)$, $M=f/(f-p)$, $\sin\theta_2=1/2$ | in colonna |
| svolti 3 es. 1, 4 es. 1; domande 3, 4 | formula sympy $\frac{180\arcsin(\ldots\frac{\pi\alpha}{180}\ldots)}{\pi}$ con $\alpha$ mai definita | $\sin\theta_2=\frac{n_1\sin\theta_1}{n_2}$, valore del seno, $\theta_2=\arcsin(\ldots)$ in gradi; opzioni a un decimale |
| domande 5, 7, 8 | formule `\left(9\right)…` e «≃» su −0,45 e 14 cm esatti | formule pulite, `=` |
| domande 8, 9, 12, 20, 22, 24, 39, 85; svolti 1, 8; dafare 3, 8, 9, 12 | 5-8 decimali | due o tre cifre, o frazione (20: 2/3, 4/3, 2, 3/2); chiavi allineate |

### Temperatura e dilatazione
Nessuna segnalazione nei rapporti; nessuna modifica.

## Segnalazioni non confermate o già risolte
- Lavoro ed energia, domande 13 («unità SI») e 73 («prodotto scalare»): la verifica ha aggiunto i due termini alla teoria, quindi le domande sono ora coperte.
- Moti nel piano, domanda 55 («ortonormali»): definito in teoria dal verificatore.
- Calore, svolti con i fattori in ordine invertito ($Q=\Delta T\,c\,m$): l'autore stesso lo indica come non errore; lasciato.
- Calore, domanda 27: le opzioni non erano decimali troncati; c'erano solo le frazioni in linea nella formula (corrette).

## Lasciato al titolare
1. **Formule in stile sympy** (`\left(12\right) \left(4200\right)`, fattori in ordine $\Delta T\,c\,m$) in circa 65 file di schede e domande (calore, cambiamenti di stato, luce, rifrazione, lavoro). Ho pulito solo quelle segnalate o nei blocchi che toccavo; una riscrittura completa è un intervento esteso.
2. **«≃» davanti a risultati esatti** in altri svolti e domande non segnalati: non cercati in modo sistematico.
3. **Coordinate in inglese**: i file EN di Moti nel piano usano in prevalenza il punto e virgola, $(4;5)$, mentre la teoria inglese dice che è la convenzione italiana; le domande EN 15 e 18 hanno la virgola. Serve una scelta unica per l'inglese.
4. Domanda 87 di Principi (nastro trasportatore) e domanda 28 di Luce: la teoria non ha l'esempio dell'attrito che trascina né la regola delle componenti nella riflessione; nella 28 ho aggiunto la giustificazione nella spiegazione.
5. Dati d'esercizio arrotondati ($c$ acqua 4200, rame 400 J/(kg K)): lasciati come sono, usati in molti file.
6. Dafare rifrazione 9: la soluzione scrive $\dfrac{3000000000}{17}$; leggibile ma poco elegante, non toccata.

## Com'era / Com'è ora

**Rifrazione e lenti, domanda 3 (spiegazione)**

Com'era:
$$\theta_2 = \frac{180 \arcsin{\left(\frac{n_1 \sin{\left(\frac{\pi \alpha}{180} \right)}}{n_2} \right)}}{\pi} = \frac{180 \arcsin{\left(\frac{\left(1\right) \sin{\left(\frac{\pi \left(35\right)}{180} \right)}}{\left(1{,}5\right)} \right)}}{\pi} \simeq 22{,}4814{}^\circ$$
con opzioni $35^\circ$, $44{,}9629^\circ$, $22{,}4814^\circ$, $11{,}2407^\circ$.

Com'è ora:
$$\sin\theta_2 = \frac{n_1\sin\theta_1}{n_2} = \frac{1\cdot\sin35^\circ}{1{,}5}\simeq 0{,}382,\qquad \theta_2 = \arcsin(0{,}382)\simeq 22{,}5^\circ$$
con opzioni $35{,}0^\circ$, $45{,}0^\circ$, $22{,}5^\circ$, $11{,}2^\circ$.

**Moto accelerato, scheda 4, esercizio 3**

Com'era: «Nelle due misure il veicolo procede ancora nel verso iniziale, che scegliamo positivo. La velocità diminuisce quindi alla stessa velocità con cui diminuisce la lettura del tachimetro.»

Com'è ora: «Nelle due misure il veicolo procede ancora nel verso iniziale, che scegliamo positivo. La velocità coincide quindi con la lettura del tachimetro, e le due grandezze diminuiscono allo stesso modo.»

**Calore, domanda 56 (opzioni)**

Com'era: $0{,}11111111$ · $0{,}1$ · $0{,}9$ · $0{,}5$, e nella spiegazione $\frac{100}{900+100}=0{,}10$.

Com'è ora: $\dfrac{1}{9}$ · $\dfrac{1}{10}$ · $\dfrac{9}{10}$ · $\dfrac{1}{2}$, e $\frac{100}{900+100}=\frac{1}{10}$.

## Controlli eseguiti
- `python3 strumenti/yamlcheck.py` sui 226 file: errori 0.
- `node strumenti/_rendi-tmp.mjs` su tutti i 226 file (svolti, dafare e domande, IT ed EN): tutti «ok».
- `node strumenti/chiavi-controlla.mjs fisica-superiori-2 src/data/chiavi/fisica-superiori-2.json`: 140 chiavi, 0 errori, 35 avvisi (tutti «l'esercizio ha già la verifica automatica»; prima delle modifiche gli avvisi erano 52).
- Nessuna riga `$$?` nelle domande toccate. Nessun comando git che modifica. Build del sito non eseguita.
