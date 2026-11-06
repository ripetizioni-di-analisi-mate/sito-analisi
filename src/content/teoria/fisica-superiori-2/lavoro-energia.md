---
titolo: "Lavoro, energia e potenza"
sommario: "Lavoro delle forze, energia cinetica e potenziale, conservazione, potenza e rendimento."
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Forza e spostamento"}
Una forza trasferisce energia al corpo quando compie **lavoro**. Per una forza costante,
$$W=Fs\cos\alpha,$$
dove $s$ è il modulo dello spostamento e $\alpha$ è l'angolo tra forza e spostamento. Il lavoro si misura in joule, con $1\,\mathrm J=1\,\mathrm{N\,m}$. Il lavoro è positivo se la forza favorisce il moto, negativo se lo ostacola e nullo se è perpendicolare allo spostamento.

Per l'attrito dinamico costante lungo un tratto di lunghezza $s$, il lavoro vale $W_a=-F_as$. La normale compie lavoro nullo quando lo spostamento è tangente a una superficie fissa.
:::

## Energia cinetica

::::teorema{#cinetica titolo="Il lavoro totale cambia l'energia cinetica"}
Un corpo di massa $m$ e velocità di modulo $v$ possiede **energia cinetica** $K=\dfrac12mv^2$. Il lavoro della risultante delle forze è uguale alla variazione di energia cinetica,
$$W_{\mathrm{tot}}=K_f-K_i.$$
:::dimostrazione
Nel caso rettilineo con risultante costante, $W_{\mathrm{tot}}=mas$. Dal moto uniformemente accelerato si ha $2as=v_f^2-v_i^2$. Sostituendo si ottiene $W_{\mathrm{tot}}=\dfrac12m(v_f^2-v_i^2)$.
:::
::::

## Energia potenziale gravitazionale

:::definizione{#potenziale titolo="Energia associata alla quota"}
Vicino alla superficie terrestre e con $g$ costante, l'energia potenziale gravitazionale è $U_g=mgh$. La quota $h$ è misurata rispetto a un livello di riferimento scelto. Le differenze di energia dipendono solo dal dislivello, quindi il lavoro del peso è
$$W_P=mg(h_i-h_f)=-\Delta U_g.$$
Sollevare un corpo richiede lavoro contro il peso; scendendo, il corpo può trasformare l'energia potenziale in energia cinetica.
:::

## Energia elastica

:::teorema{#elastica titolo="Energia di una molla ideale"}
Una molla ideale deformata di $x$ rispetto alla lunghezza a riposo ha energia potenziale
$$U_e=\frac12kx^2.$$
La forza elastica cresce da zero a $kx$, quindi durante una deformazione da zero a $x$ il lavoro della forza esterna quasistatica è l'area del triangolo nel grafico forza-deformazione. Questa area vale $\dfrac12kx^2$ e coincide con l'energia immagazzinata.

::grafico{f="100*x" area="100*x;0;0;0.2" xmin=0 xmax=0.3 ymin=0 ymax=30 nomi="x,F" titolo="Con $k=100\,\mathrm{N/m}$ e deformazione $0{,}20\,\mathrm m$, l'area triangolare vale $2\,\mathrm J$"}
:::

## Conservazione dell'energia meccanica

:::teorema{#conservazione titolo="Trasformazioni tra energia cinetica e potenziale"}
L'energia meccanica è $E=K+U$. Se agiscono solo forze conservative, oppure le altre forze compiono lavoro totale nullo,
$$K_i+U_i=K_f+U_f.$$
Un corpo che parte da fermo e scende di un dislivello $h$ senza dissipazioni raggiunge la velocità $v=\sqrt{2gh}$. Se sono presenti forze non conservative, la relazione diventa $E_f-E_i=W_{\mathrm{nc}}$. Il lavoro negativo dell'attrito riduce l'energia meccanica e aumenta l'energia interna dei corpi coinvolti.
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Energia trasferita nell'unità di tempo"}
La **potenza media** è $\mathcal P=\dfrac{W}{\Delta t}$ e si misura in watt, con $1\,\mathrm W=1\,\mathrm{J/s}$. Con forza parallela alla velocità e valori costanti, $\mathcal P=Fv$.

Il rendimento è $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{assorbita}}}$, oppure il rapporto tra le corrispondenti potenze. Un rendimento del $75\%$ significa $\eta=0{,}75$. Il chilowattora è un'unità di energia e vale $1\,\mathrm{kWh}=3{,}6\cdot10^6\,\mathrm J$.
:::
