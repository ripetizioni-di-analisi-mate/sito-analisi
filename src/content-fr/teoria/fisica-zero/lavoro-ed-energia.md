---
titolo: Travail, énergie et puissance
sommario: Calculer le travail d’une force, appliquer la conservation de l’énergie mécanique et distinguer puissance et rendement.
---

## Le travail d’une force

:::definizione{#lavoro titolo="Travail d’une force constante"}
Une force peut transférer de l’énergie à un corps au cours d’un déplacement. Le **travail**, noté $W$, mesure ce transfert. Considérons un déplacement rectiligne et une force constante parallèle au déplacement. Si la force et le déplacement ont le même sens, le travail de la force vaut
$$
W=Fs,
$$
où $F$ est l’intensité de la force et $s$ la distance parcourue. Si la force est de sens opposé au déplacement, son travail vaut $W=-Fs$.

Le travail s’exprime en **joules**, de symbole $\mathrm{J}$. Un joule correspond au travail d’une force d’un newton dont le point d’application se déplace d’un mètre dans le sens de la force. On a donc
$$
1\,\mathrm{J}=1\,\mathrm{N\cdot m}.
$$
Par exemple, une force horizontale de $12\,\mathrm{N}$ qui déplace une caisse de $3\,\mathrm{m}$ dans le même sens fournit un travail de $W=12\cdot3=36\,\mathrm{J}$. La durée du déplacement n’intervient pas dans ce calcul.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.5,0 5,0" vettori="1,0.5,3,0.5,F;0,-0.7,4,-0.7,s" xmin=-1 xmax=5.5 ymin=-1.5 ymax=2 titolo="La force et le déplacement ont le même sens. Le travail de la force est donc positif."}
:::

:::osservazione{#lavoro-nullo titolo="Forces perpendiculaires au déplacement"}
Une force perpendiculaire au déplacement fournit un travail nul. Par exemple, lorsqu’une caisse glisse sur un plan horizontal, son poids agit à la verticale et son travail vaut $W_P=0$. Le travail de la réaction normale du plan est également nul.

Si le point d’application d’une force reste immobile pendant tout l’intervalle, le travail de cette force est nul. Une personne qui tient une valise immobile exerce une force dont le travail mécanique sur la valise est nul, même si son organisme dépense de l’énergie.
:::

:::definizione{#lavoro-totale titolo="Travail total"}
Le **travail total**, noté $W_{\mathrm{tot}}$, est la somme des travaux de toutes les forces qui agissent sur le corps. Chaque travail entre dans la somme avec son signe.

Si une force motrice fournit un travail de $50\,\mathrm{J}$, si le travail du frottement vaut $-20\,\mathrm{J}$ et si le poids et la réaction normale ne travaillent pas, on obtient
$$
W_{\mathrm{tot}}=50\,\mathrm{J}-20\,\mathrm{J}=30\,\mathrm{J}.
$$
Cette somme permet d’étudier l’effet de l’ensemble des forces sur le mouvement.
:::

## Énergie cinétique

:::definizione{#energia-cinetica titolo="Énergie cinétique"}
Un corps en mouvement possède une **énergie cinétique**. Si on le modélise par un point matériel de masse $m$ dont la vitesse a pour norme $v$, son énergie cinétique vaut
$$
K=\frac{1}{2}mv^2.
$$
Le symbole $v^2$ désigne le produit $v\cdot v$. Si la masse est exprimée en kilogrammes et la vitesse en mètres par seconde, le résultat est en joules. Dans le référentiel choisi, $K$ est positive si le corps se déplace et nulle s’il est immobile.

Un corps de $2\,\mathrm{kg}$ qui se déplace à $3\,\mathrm{m/s}$ possède une énergie cinétique de
$$
K=\frac{1}{2}\cdot2\cdot3^2\,\mathrm{J}=9\,\mathrm{J}.
$$
À $6\,\mathrm{m/s}$, son énergie cinétique vaut $K=36\,\mathrm{J}$. Comme $K$ est proportionnelle au carré de la vitesse, doubler la vitesse multiplie l’énergie cinétique par quatre.

::grafico{f="x^2" xmin=0 xmax=6 ymin=0 ymax=40 nomi="v,K" punti="3,9;6,36" legenda="K=v^2" titolo="Énergie cinétique d’un corps de $2\,\mathrm{kg}$. La vitesse $v$ est en $\mathrm{m/s}$ et $K$ en joules."}
:::

## Travail et variation de la vitesse

::::teorema{#teorema-energia-cinetica titolo="Théorème de l’énergie cinétique"}
Dans un référentiel galiléen, le travail total des forces exercées sur un point matériel de masse constante est égal à la variation de son énergie cinétique.
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
Les indices $i$ et $f$ désignent les valeurs initiale et finale. Si le travail total est positif, la norme de la vitesse augmente. S’il est négatif, elle diminue. Si $W_{\mathrm{tot}}=0$, l’énergie cinétique finale est égale à l’énergie cinétique initiale.

:::dimostrazione
Dans le cas d’un mouvement rectiligne sous l’action d’une force résultante constante, on combine la deuxième loi de Newton et une relation du mouvement uniformément accéléré. On oriente l’axe dans le sens du mouvement et on considère un intervalle sur lequel ce sens ne change pas.
$$
F_{\mathrm{tot}}=ma,
\qquad v_f^2-v_i^2=2as.
$$
En multipliant la deuxième relation par $\dfrac{m}{2}$, on obtient
$$
\frac{1}{2}mv_f^2-\frac{1}{2}mv_i^2=mas=F_{\mathrm{tot}}s.
$$
Le produit de droite est le travail total. Il est égal à la variation d’énergie cinétique, à gauche. Cette démonstration porte sur un mouvement rectiligne de résultante constante. Le théorème s’applique aussi à des mouvements plus généraux.
:::
::::

:::esempio{titolo="Travail des forces lors d’un freinage"}
Un chariot de masse $4\,\mathrm{kg}$ se déplace à $5\,\mathrm{m/s}$. Son énergie cinétique initiale vaut $K_i=\dfrac{1}{2}\cdot4\cdot25=50\,\mathrm{J}$. À l’arrêt, $K_f=0$. On en déduit
$$
W_{\mathrm{tot}}=0-50\,\mathrm{J}=-50\,\mathrm{J}.
$$
Le signe négatif traduit la diminution de l’énergie cinétique. La masse et les vitesses initiale et finale suffisent à calculer le travail total, quelle que soit la durée du freinage.
:::

## Énergie potentielle de pesanteur

:::definizione{#energia-potenziale titolo="Énergie potentielle de pesanteur"}
Près de la surface de la Terre, on peut considérer l’accélération de la pesanteur $g$ comme constante. Après avoir choisi un niveau de référence où l’énergie vaut zéro, on calcule l’**énergie potentielle de pesanteur** par
$$
U=mgh,
$$
où $h$ est l’altitude mesurée vers le haut à partir de ce niveau. Sauf indication contraire, on utilise $g=9{,}81\,\mathrm{m/s^2}$. Cette énergie est associée à l’interaction entre le corps et la Terre.

Si le sol est le niveau de référence, l’énergie potentielle d’un corps de $2\,\mathrm{kg}$ situé à $3\,\mathrm{m}$ de hauteur vaut
$$
U=2\cdot9{,}81\cdot3\,\mathrm{J}=58{,}86\,\mathrm{J}.
$$
Un changement de niveau de référence modifie la valeur de $U$. La différence d’énergie entre deux positions reste la même. Au-dessous du niveau choisi, l’altitude et l’énergie potentielle sont négatives.
:::

:::teorema{#lavoro-del-peso titolo="Travail du poids et dénivelé"}
Si un corps de masse $m$ passe d’une altitude $h_i$ à une altitude $h_f$ dans une région où $g$ est constante, le travail du poids vaut
$$
W_P=mg(h_i-h_f)=U_i-U_f.
$$
Lorsque le corps descend, $h_i>h_f$ et le travail du poids est positif. Lorsqu’il monte, il est négatif. Le résultat dépend de la différence entre les altitudes initiale et finale.

Par exemple, un corps de $2\,\mathrm{kg}$ qui descend de $3\,\mathrm{m}$ à $1\,\mathrm{m}$ perd $39{,}24\,\mathrm{J}$ d’énergie potentielle. Le poids fournit donc un travail de $+39{,}24\,\mathrm{J}$.

::grafico{assi=0 uguale=1 linee="-0.5,0 4,0;0,1 2,1;0,3 2,3" punti="1,3,pieno,A;1,1,pieno,B" vettori="2.8,3,2.8,1,P" etichette="0.3,3.4,hᵢ = 3 m;0.3,1.4,hᶠ = 1 m;2.7,0.4,h = 0" xmin=-1 xmax=4.5 ymin=-0.5 ymax=4 titolo="Le travail du poids dépend du dénivelé entre les deux positions, ici égal à $2\,\mathrm{m}$."}
:::

## Énergie d’un ressort

::::teorema{#energia-elastica titolo="Énergie potentielle élastique"}
Un ressort idéal, utilisé dans sa limite d’élasticité, exerce une force de rappel d’intensité $F_e=kx$. La constante de raideur est notée $k$. La grandeur $x$ est la valeur absolue de l’allongement ou de la compression par rapport à la longueur au repos. L’énergie potentielle élastique est nulle à cette longueur et vaut
$$
U_e=\frac{1}{2}kx^2.
$$
Lorsque le ressort reprend sa longueur au repos, il peut transférer cette énergie à un corps. Avec $k=100\,\mathrm{N/m}$ et $x=0{,}20\,\mathrm{m}$, on obtient $U_e=2\,\mathrm{J}$.

:::dimostrazione
Si on déforme lentement le ressort de zéro à $x$, la force extérieure qui équilibre la force de rappel augmente linéairement de zéro à $kx$. Son travail est donc l’aire du triangle sous le graphique de la force en fonction de la déformation.
$$
W=\frac{\text{base}\cdot\text{hauteur}}{2}
=\frac{x\cdot kx}{2}
=\frac{1}{2}kx^2.
$$
Si la dissipation et la vitesse sont négligeables, ce travail augmente l’énergie potentielle élastique du ressort.
:::
::::

:::esempio{titolo="Travail et aire sous le graphique de la force"}
Dans le modèle idéal, on déforme lentement de $3\,\mathrm{m}$ un ressort dont la raideur vaut $k=2\,\mathrm{N/m}$. La force finale vaut $6\,\mathrm{N}$. L’aire du triangle vaut donc $\dfrac{3\cdot6}{2}=9\,\mathrm{J}$. Si on appliquait la valeur finale de la force à tout le déplacement, on obtiendrait $18\,\mathrm{J}$. Cette valeur est le double du travail réel, car la force augmente progressivement.

::grafico{f="2*x" area="2*x;0;0;3" xmin=0 xmax=4 ymin=0 ymax=8 nomi="x,F" punti="3,6" legenda="F=2x" titolo="Dans le modèle idéal, $x$ est en mètres et $F$ en newtons. L’aire colorée représente un travail de $9\,\mathrm{J}$."}
:::

## Conservation de l’énergie mécanique

::::teorema{#conservazione titolo="Conservation de l’énergie mécanique"}
L’**énergie mécanique** est la somme de l’énergie cinétique et de l’énergie potentielle, $E=K+U$. Lorsque seuls le poids et les forces élastiques idéales travaillent, l’énergie mécanique se conserve.
$$
K_i+U_i=K_f+U_f.
$$
Le terme $U$ regroupe toutes les énergies potentielles du système étudié. Si d’autres forces agissent, leur travail doit être nul. C’est le cas de la réaction normale d’un guide fixe et lisse.

:::dimostrazione
Pour les forces considérées, le travail total est égal à la diminution de l’énergie potentielle, $W_{\mathrm{tot}}=U_i-U_f$. Le théorème de l’énergie cinétique donne aussi $W_{\mathrm{tot}}=K_f-K_i$. En égalant les deux expressions, on trouve
$$
K_f-K_i=U_i-U_f.
$$
On ajoute $K_i+U_f$ aux deux membres pour obtenir la relation de conservation de l’énergie mécanique.
:::
::::

:::esempio{titolo="Chute sans vitesse initiale"}
Un corps est lâché sans vitesse initiale et tombe de $5\,\mathrm{m}$. On néglige la résistance de l’air, on fixe le niveau de référence à l’altitude finale et on prend $g=10\,\mathrm{m/s^2}$ dans cet exemple. La conservation de l’énergie mécanique donne
$$
mg h=\frac{1}{2}mv_f^2,
\qquad v_f=\sqrt{2gh}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
La masse se simplifie parce qu’elle figure dans les deux membres. La racine positive donne la norme de la vitesse. Le mouvement est dirigé vers le bas.
:::

## Frottement et transformations de l’énergie

:::teorema{#dissipazione titolo="Travail de la force de frottement"}
Sur une surface fixe, la force de frottement de glissement est de sens opposé au déplacement. Si son intensité $f$ est constante le long d’un trajet rectiligne de longueur $s$, son travail vaut
$$
W_a=-fs.
$$
Si seuls le frottement, le poids et les forces élastiques travaillent, on a
$$
E_f-E_i=W_a.
$$
Le travail du frottement est négatif, donc l’énergie mécanique diminue. L’énergie transférée par frottement augmente l’énergie interne du corps et de la surface. Si l’on tient compte de cette transformation, l’énergie totale se conserve.

Si l’énergie mécanique initiale est de $40\,\mathrm{J}$ et le travail du frottement de $-12\,\mathrm{J}$, l’énergie mécanique finale vaut $E_f=28\,\mathrm{J}$.
:::

## Puissance et rendement

:::definizione{#potenza titolo="Puissance moyenne"}
La **puissance moyenne** mesure l’énergie transférée par unité de temps. Si un moteur fournit un travail $W$ sur une durée $\Delta t$, sa puissance mécanique moyenne vaut
$$
P_m=\frac{W}{\Delta t}.
$$
L’unité de puissance est le **watt**, de symbole $\mathrm{W}$. Un watt vaut un joule par seconde, soit $1\,\mathrm{W}=1\,\mathrm{J/s}$. Dans les formules, $W$ en italique désigne le travail. Le symbole $\mathrm{W}$ qui suit un nombre désigne l’unité de puissance.

Un appareil de levage qui fournit un travail de $600\,\mathrm{J}$ en $3\,\mathrm{s}$ développe une puissance moyenne de $P_m=200\,\mathrm{W}$. S’il fournit le même travail en $6\,\mathrm{s}$, sa puissance moyenne vaut $100\,\mathrm{W}$. La quantité d’énergie transférée est identique dans les deux cas.
:::

:::definizione{#rendimento titolo="Rendement"}
Une machine reçoit une énergie $E_{\mathrm{ass}}$ et en transfère une partie $E_{\mathrm{utile}}$ sous la forme recherchée. Le **rendement** est la proportion de l’énergie reçue que l’on récupère sous forme utile.
$$
\eta=\frac{E_{\mathrm{utile}}}{E_{\mathrm{ass}}}.
$$
La lettre grecque $\eta$ se lit « êta ». Le rapport est sans unité et peut aussi s’exprimer en pourcentage. Si l’énergie stockée dans la machine reste constante, $0\leq\eta\leq1$. Un rendement de $1$ correspond au cas idéal où toute l’énergie reçue est récupérée sous forme utile.

Si une machine reçoit $500\,\mathrm{J}$ et restitue $350\,\mathrm{J}$ sous forme utile, son rendement vaut $\eta=0{,}70=70\%$. Les $150\,\mathrm{J}$ restants sont transférés sous d’autres formes. On peut également calculer le rendement par $\eta=\dfrac{P_{\mathrm{utile}}}{P_{\mathrm{ass}}}$ si les deux puissances moyennes sont calculées sur le même intervalle.
:::
