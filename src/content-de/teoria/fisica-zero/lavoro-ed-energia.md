---
titolo: Arbeit, Energie und Leistung
sommario: Mechanische Arbeit, Bewegungs- und Lageenergie, Energieerhaltung, Leistung und Wirkungsgrad mit Rechenbeispielen.
---

## Arbeit einer Kraft

:::definizione{#lavoro titolo="Arbeit einer konstanten Kraft"}
Eine Kraft kann bei einer Verschiebung Energie auf einen Körper übertragen. Die **Arbeit** $W$ gibt an, wie viel Energie die Kraft überträgt. Wir betrachten einen Körper, der sich geradlinig bewegt, und eine konstante Kraft, die parallel zur Bewegungsrichtung wirkt. Zeigt die Kraft in Bewegungsrichtung, so gilt
$$
W=Fs.
$$
Dabei ist $F$ der Betrag der Kraft und $s$ die zurückgelegte Strecke. Wirkt die Kraft entgegen der Bewegungsrichtung, so gilt $W=-Fs$.

Die Einheit der Arbeit ist das **Joule** mit dem Einheitenzeichen $\mathrm{J}$. Ein Joule ist die Arbeit einer Kraft von einem Newton, die entlang einer Verschiebung von einem Meter wirkt. Daher gilt
$$
1\,\mathrm{J}=1\,\mathrm{N\cdot m}.
$$
Zieht beispielsweise eine waagerechte Kraft von $12\,\mathrm{N}$ eine Kiste über $3\,\mathrm{m}$ in Kraftrichtung, so verrichtet sie die Arbeit $W=12\cdot3=36\,\mathrm{J}$. Die Dauer des Vorgangs spielt in dieser Rechnung keine Rolle.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.5,0 5,0" vettori="1,0.5,3,0.5,F;0,-0.7,4,-0.7,s" xmin=-1 xmax=5.5 ymin=-1.5 ymax=2 titolo="Die Kraft zeigt in Richtung der Verschiebung und verrichtet daher positive Arbeit."}
:::

:::osservazione{#lavoro-nullo titolo="Kräfte senkrecht zur Verschiebung"}
Eine Kraft, die stets senkrecht zur Verschiebung wirkt, verrichtet keine Arbeit. Gleitet eine Kiste über eine waagerechte Fläche, so wirkt die Gewichtskraft senkrecht zur Fläche und es gilt $W_P=0$. Auch die Normalkraft der Fläche verrichtet in diesem Fall keine Arbeit.

Bleibt der Angriffspunkt einer Kraft während des gesamten betrachteten Zeitraums in Ruhe, ist ihre Arbeit null. Wer einen Koffer regungslos hält, verrichtet deshalb am Koffer keine mechanische Arbeit. Der Körper verbraucht dabei trotzdem Energie.
:::

:::definizione{#lavoro-totale titolo="Gesamtarbeit"}
Die **Gesamtarbeit** $W_{\mathrm{tot}}$ ist die Summe der Arbeiten aller Kräfte, die auf den Körper wirken. Jede Arbeit geht mit ihrem Vorzeichen in die Summe ein.

Verrichtet die Antriebskraft $50\,\mathrm{J}$ und die Reibungskraft $-20\,\mathrm{J}$, während Gewichtskraft und Normalkraft keine Arbeit verrichten, so gilt
$$
W_{\mathrm{tot}}=50\,\mathrm{J}-20\,\mathrm{J}=30\,\mathrm{J}.
$$
Aus dieser Summe lässt sich die gemeinsame Wirkung der Kräfte auf die Bewegung bestimmen.
:::

## Kinetische Energie

:::definizione{#energia-cinetica titolo="Kinetische Energie"}
Ein Körper in Bewegung besitzt **kinetische Energie**. Für einen Körper der Masse $m$, den wir als Massenpunkt betrachten, gilt bei der Geschwindigkeit vom Betrag $v$
$$
K=\frac{1}{2}mv^2.
$$
Dabei ist $v^2$ das Produkt $v\cdot v$. Setzt man die Masse in Kilogramm und die Geschwindigkeit in Metern pro Sekunde ein, erhält man die Energie in Joule. Wenn sich der Körper im gewählten Bezugssystem bewegt, ist $K$ positiv. Ruht er darin, ist $K=0$.

Ein Körper mit $2\,\mathrm{kg}$ hat bei $3\,\mathrm{m/s}$ die kinetische Energie
$$
K=\frac{1}{2}\cdot2\cdot3^2\,\mathrm{J}=9\,\mathrm{J}.
$$
Bei $6\,\mathrm{m/s}$ hat derselbe Körper $K=36\,\mathrm{J}$. Da die Geschwindigkeit quadratisch eingeht, vervierfacht sich die kinetische Energie bei doppelter Geschwindigkeit.

::grafico{f="x^2" xmin=0 xmax=6 ymin=0 ymax=40 nomi="v,K" punti="3,9;6,36" legenda="K=v^2" titolo="Kinetische Energie eines Körpers mit $2\,\mathrm{kg}$. Die Achsen geben $v$ in $\mathrm{m/s}$ und $K$ in Joule an."}
:::

## Arbeit und Änderung der Geschwindigkeit

::::teorema{#teorema-energia-cinetica titolo="Arbeitssatz der Mechanik"}
In einem Inertialsystem ist die Gesamtarbeit der Kräfte an einem Massenpunkt mit konstanter Masse gleich der Änderung seiner kinetischen Energie.
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
Die Indizes $i$ und $f$ stehen für den Anfangs- und den Endwert. Bei positiver Gesamtarbeit nimmt der Geschwindigkeitsbetrag zu, bei negativer Gesamtarbeit nimmt er ab. Ist $W_{\mathrm{tot}}=0$, sind anfängliche und abschließende kinetische Energie gleich.

:::dimostrazione
Für eine geradlinige Bewegung mit konstanter resultierender Kraft kombinieren wir das zweite Newton’sche Gesetz mit der Weg-Geschwindigkeits-Beziehung der gleichmäßig beschleunigten Bewegung. Wir wählen die Achse in Bewegungsrichtung und betrachten den Abschnitt bis zu einem möglichen Richtungswechsel. Dann gilt
$$
F_{\mathrm{tot}}=ma,
\qquad v_f^2-v_i^2=2as.
$$
Multiplizieren wir die zweite Gleichung mit $\dfrac{m}{2}$, so erhalten wir
$$
\frac{1}{2}mv_f^2-\frac{1}{2}mv_i^2=mas=F_{\mathrm{tot}}s.
$$
Rechts steht die Gesamtarbeit. Damit folgt die Behauptung für die geradlinige Bewegung mit konstanter resultierender Kraft. Der Arbeitssatz gilt auch bei veränderlichen Kräften und gekrümmten Bahnen.
:::
::::

:::esempio{titolo="Arbeit beim Abbremsen"}
Ein Wagen mit $4\,\mathrm{kg}$ fährt mit $5\,\mathrm{m/s}$. Seine anfängliche kinetische Energie beträgt $K_i=\dfrac{1}{2}\cdot4\cdot25=50\,\mathrm{J}$. Sobald er steht, gilt $K_f=0$. Die Gesamtarbeit beträgt daher
$$
W_{\mathrm{tot}}=0-50\,\mathrm{J}=-50\,\mathrm{J}.
$$
Das negative Vorzeichen zeigt, dass die kinetische Energie abgenommen hat. Für die Berechnung genügen Anfangs- und Endgeschwindigkeit. Wie lange das Bremsen dauert, muss man dafür nicht wissen.
:::

## Potenzielle Energie im Schwerefeld

:::definizione{#energia-potenziale titolo="Gravitative potenzielle Energie"}
Nahe der Erdoberfläche kann man die Fallbeschleunigung $g$ als konstant annehmen. Die potenzielle Energie eines Körpers hängt dann von seiner Höhe relativ zur Erde ab. Wählt man ein Niveau, auf dem die Energie null sein soll, so gilt für die **gravitative potenzielle Energie**
$$
U=mgh.
$$
Dabei ist $h$ die nach oben gemessene Höhe über diesem Niveau. Sofern nichts anderes angegeben ist, verwenden wir $g=9{,}81\,\mathrm{m/s^2}$. Die potenzielle Energie gehört zur Wechselwirkung zwischen Körper und Erde.

Wählen wir den Boden als Nullniveau, so hat ein Körper von $2\,\mathrm{kg}$ in einer Höhe von $3\,\mathrm{m}$ die potenzielle Energie
$$
U=2\cdot9{,}81\cdot3\,\mathrm{J}=58{,}86\,\mathrm{J}.
$$
Ein anderes Nullniveau ändert den Wert von $U$. Die Energiedifferenz zwischen zwei Positionen bleibt gleich. Unterhalb des Nullniveaus sind die Höhe und die potenzielle Energie negativ.
:::

:::teorema{#lavoro-del-peso titolo="Arbeit der Gewichtskraft und Höhenunterschied"}
Bewegt sich ein Körper der Masse $m$ von der Höhe $h_i$ zur Höhe $h_f$, so gilt bei konstantem $g$ für die Arbeit der Gewichtskraft
$$
W_P=mg(h_i-h_f)=U_i-U_f.
$$
Beim Abstieg gilt $h_i>h_f$, daher verrichtet die Gewichtskraft positive Arbeit. Beim Aufstieg ist ihre Arbeit negativ. Der Wert hängt nur vom Höhenunterschied zwischen Anfangs- und Endpunkt ab.

Sinkt ein Körper von $2\,\mathrm{kg}$ von $3\,\mathrm{m}$ auf $1\,\mathrm{m}$, nimmt seine potenzielle Energie um $39{,}24\,\mathrm{J}$ ab. Die Gewichtskraft verrichtet also $+39{,}24\,\mathrm{J}$ Arbeit.

::grafico{assi=0 uguale=1 linee="-0.5,0 4,0;0,1 2,1;0,3 2,3" punti="1,3,pieno,A;1,1,pieno,B" vettori="2.8,3,2.8,1,P" etichette="0.3,3.4,hᵢ = 3 m;0.3,1.4,hᶠ = 1 m;2.7,0.4,h = 0" xmin=-1 xmax=4.5 ymin=-0.5 ymax=4 titolo="Beim Abstieg hängt die Arbeit der Gewichtskraft vom Höhenunterschied von $2\,\mathrm{m}$ ab."}
:::

## Spannenergie einer Feder

::::teorema{#energia-elastica titolo="Elastische potenzielle Energie"}
Eine ideale Feder übt im elastischen Bereich eine Rückstellkraft mit dem Betrag $F_e=kx$ aus. Dabei ist $k$ die Federkonstante und $x$ der Betrag der Längenänderung gegenüber der unbelasteten Feder. Die **Spannenergie** ist bei unbelasteter Feder null. Es gilt
$$
U_e=\frac{1}{2}kx^2.
$$
Wenn sich die Feder entspannt, kann sie diese Energie auf einen Körper übertragen. Für $k=100\,\mathrm{N/m}$ und $x=0{,}20\,\mathrm{m}$ ergibt sich $U_e=2\,\mathrm{J}$.

:::dimostrazione
Wird die Feder langsam von null auf $x$ gedehnt oder gestaucht, steigt der Betrag der äußeren Kraft, die die Federkraft ausgleicht, linear von null auf $kx$. Die Arbeit entspricht der Dreiecksfläche unter dem Kraft-Weg-Diagramm.
$$
W=\frac{\text{Grundseite}\cdot\text{Höhe}}{2}
=\frac{x\cdot kx}{2}
=\frac{1}{2}kx^2.
$$
Sind Energieverluste und die kinetische Energie vernachlässigbar, erhöht diese Arbeit die Spannenergie der Feder.
:::
::::

:::esempio{titolo="Dreiecksfläche und Arbeit"}
Eine ideale Feder mit $k=2\,\mathrm{N/m}$ wird langsam um $3\,\mathrm{m}$ gedehnt. Am Ende beträgt die Kraft $6\,\mathrm{N}$. Die Dreiecksfläche liefert $\dfrac{3\cdot6}{2}=9\,\mathrm{J}$. Wer mit der Endkraft über die gesamte Strecke rechnet, erhält $18\,\mathrm{J}$. Dabei bleibt unberücksichtigt, dass die Kraft erst nach und nach anwächst.

::grafico{f="2*x" area="2*x;0;0;3" xmin=0 xmax=4 ymin=0 ymax=8 nomi="x,F" punti="3,6" legenda="F=2x" titolo="Ideales Federmodell mit $x$ in Metern und $F$ in Newton. Die farbige Fläche entspricht der Arbeit von $9\,\mathrm{J}$."}
:::

## Erhaltung der mechanischen Energie

::::teorema{#conservazione titolo="Erhaltung der mechanischen Energie"}
Die Summe aus kinetischer und potenzieller Energie heißt **mechanische Energie**. Es gilt $E=K+U$. Verrichten nur die Gewichtskraft und ideale Federkräfte Arbeit, bleibt die mechanische Energie erhalten.
$$
K_i+U_i=K_f+U_f.
$$
Die Größe $U$ umfasst alle potenziellen Energien im betrachteten System. Weitere Kräfte können vorhanden sein, sofern sie keine Arbeit verrichten. Ein Beispiel ist die Normalkraft einer festen, reibungsfreien Führung.

:::dimostrazione
Bei den betrachteten Kräften ist die Gesamtarbeit gleich der Abnahme der potenziellen Energie, also $W_{\mathrm{tot}}=U_i-U_f$. Nach dem Arbeitssatz gilt auch $W_{\mathrm{tot}}=K_f-K_i$. Gleichsetzen liefert
$$
K_f-K_i=U_i-U_f.
$$
Addiert man auf beiden Seiten $K_i+U_f$, so erhält man die Gleichung für die Erhaltung der mechanischen Energie.
:::
::::

:::esempio{titolo="Freier Fall aus der Ruhe"}
Ein Körper fällt aus der Ruhe um $5\,\mathrm{m}$. Der Luftwiderstand ist vernachlässigbar. Wir wählen den Endpunkt als Nullniveau der potenziellen Energie und setzen in diesem Beispiel $g=10\,\mathrm{m/s^2}$. Aus der Energieerhaltung folgt
$$
mg h=\frac{1}{2}mv_f^2,
\qquad v_f=\sqrt{2gh}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
Die Masse kürzt sich, weil sie auf beiden Seiten steht. Die positive Wurzel gibt den Betrag der Geschwindigkeit an. Der Körper bewegt sich nach unten.
:::

## Reibung und Energieumwandlung

:::teorema{#dissipazione titolo="Arbeit der Reibungskraft"}
Auf einer ruhenden Fläche wirkt eine Gleitreibungskraft mit konstantem Betrag $f$ entgegen der Gleitbewegung. Auf einer geraden Strecke der Länge $s$ verrichtet sie die Arbeit
$$
W_a=-fs.
$$
Wenn außer der Gewichtskraft und idealen Federkräften nur die Reibung Arbeit verrichtet, gilt
$$
E_f-E_i=W_a.
$$
Die mechanische Energie nimmt daher ab. Durch die Reibung erhöht sich die innere Energie des Körpers und der Unterlage. In der Gesamtbilanz bleibt die Energie erhalten.

Besitzt ein Körper zunächst $40\,\mathrm{J}$ mechanische Energie und verrichtet die Reibung die Arbeit $-12\,\mathrm{J}$, so beträgt seine mechanische Energie am Ende $E_f=28\,\mathrm{J}$.
:::

## Leistung und Wirkungsgrad

:::definizione{#potenza titolo="Mittlere Leistung"}
Die **mittlere Leistung** gibt an, wie viel Energie im Mittel pro Zeiteinheit übertragen wird. Verrichtet ein Motor im Zeitintervall $\Delta t$ die Arbeit $W$, so beträgt seine mittlere mechanische Leistung
$$
P_m=\frac{W}{\Delta t}.
$$
Die Einheit ist das **Watt** mit dem Einheitenzeichen $\mathrm{W}$. Es gilt $1\,\mathrm{W}=1\,\mathrm{J/s}$. Das kursive $W$ bezeichnet die physikalische Größe Arbeit. Das aufrechte $\mathrm{W}$ hinter einem Zahlenwert steht für Watt.

Eine Hebevorrichtung, die in $3\,\mathrm{s}$ eine Arbeit von $600\,\mathrm{J}$ verrichtet, hat die mittlere Leistung $P_m=200\,\mathrm{W}$. Braucht sie für dieselbe Arbeit $6\,\mathrm{s}$, beträgt die mittlere Leistung $100\,\mathrm{W}$. In beiden Fällen wird gleich viel Energie übertragen. Die Dauer ist verschieden.
:::

:::definizione{#rendimento titolo="Wirkungsgrad"}
Eine Maschine nimmt die Energie $E_{\mathrm{ass}}$ auf und gibt einen Teil davon in der gewünschten Form als Nutzenergie $E_{\mathrm{utile}}$ ab. Der **Wirkungsgrad** ist
$$
\eta=\frac{E_{\mathrm{utile}}}{E_{\mathrm{ass}}}.
$$
Der griechische Buchstabe $\eta$ heißt Eta. Das Verhältnis ist dimensionslos und kann in Prozent angegeben werden. Ändert sich die in der Maschine gespeicherte Energie nicht, gilt $0\leq\eta\leq1$. Der Wert $1$ entspricht dem Idealfall, in dem die gesamte aufgenommene Energie als Nutzenergie abgegeben wird.

Nimmt eine Maschine $500\,\mathrm{J}$ auf und gibt $350\,\mathrm{J}$ als Nutzenergie ab, so beträgt der Wirkungsgrad $\eta=0{,}70=70\%$. Die übrigen $150\,\mathrm{J}$ werden in anderen Formen abgegeben. Für mittlere Leistungen im selben Zeitintervall gilt auch $\eta=\dfrac{P_{\mathrm{utile}}}{P_{\mathrm{ass}}}$.
:::
