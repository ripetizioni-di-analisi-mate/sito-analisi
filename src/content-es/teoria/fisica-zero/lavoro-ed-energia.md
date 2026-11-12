---
titolo: Trabajo, energía y potencia
sommario: Aprende a calcular el trabajo de una fuerza, a aplicar la conservación de la energía mecánica y a distinguir entre potencia y rendimiento.
---

## El trabajo de una fuerza

:::definizione{#lavoro titolo="Trabajo de una fuerza constante"}
Una fuerza puede transferir energía a un cuerpo al desplazarlo. El **trabajo** mide esa transferencia y se representa con $W$. Consideremos un cuerpo que se desplaza en línea recta y una fuerza constante paralela al desplazamiento. Si la fuerza y el desplazamiento tienen el mismo sentido, el trabajo de la fuerza es
$$
W=Fs,
$$
donde $F$ es el módulo de la fuerza y $s$ es la distancia recorrida. Si la fuerza tiene sentido contrario al desplazamiento, su trabajo es $W=-Fs$.

El trabajo se mide en **julios**, cuyo símbolo es $\mathrm{J}$. Un julio es el trabajo que realiza una fuerza de un newton cuando el punto donde se aplica se desplaza un metro en el sentido de la fuerza. Por tanto,
$$
1\,\mathrm{J}=1\,\mathrm{N\cdot m}.
$$
Por ejemplo, si una fuerza horizontal de $12\,\mathrm{N}$ tira de una caja y la desplaza $3\,\mathrm{m}$ en el mismo sentido, realiza un trabajo de $W=12\cdot3=36\,\mathrm{J}$. El tiempo que tarda en desplazarla no interviene en el cálculo.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.5,0 5,0" vettori="1,0.5,3,0.5,F;0,-0.7,4,-0.7,s" xmin=-1 xmax=5.5 ymin=-1.5 ymax=2 titolo="La fuerza y el desplazamiento tienen el mismo sentido. Por eso el trabajo de la fuerza es positivo."}
:::

:::osservazione{#lavoro-nullo titolo="Fuerzas perpendiculares al desplazamiento"}
Una fuerza perpendicular al desplazamiento realiza un trabajo nulo. Por ejemplo, cuando una caja se desliza sobre una superficie horizontal, su peso actúa en dirección vertical y su trabajo es $W_P=0$. La fuerza normal que ejerce la superficie tampoco realiza trabajo.

Si el punto de aplicación de una fuerza permanece inmóvil durante todo el intervalo, el trabajo de la fuerza es nulo. Una persona que sostiene una maleta sin moverla realiza un trabajo mecánico nulo sobre ella, aunque su cuerpo consuma energía.
:::

:::definizione{#lavoro-totale titolo="Trabajo total"}
El **trabajo total**, representado por $W_{\mathrm{tot}}$, es la suma de los trabajos de todas las fuerzas que actúan sobre el cuerpo. Cada trabajo se suma con su signo.

Si una fuerza que impulsa el cuerpo realiza $50\,\mathrm{J}$ de trabajo, el rozamiento realiza $-20\,\mathrm{J}$ y el peso y la fuerza normal realizan un trabajo nulo, se obtiene
$$
W_{\mathrm{tot}}=50\,\mathrm{J}-20\,\mathrm{J}=30\,\mathrm{J}.
$$
Esta suma permite estudiar el efecto conjunto de las fuerzas sobre el movimiento.
:::

## Energía cinética

:::definizione{#energia-cinetica titolo="Energía cinética"}
Un cuerpo en movimiento tiene **energía cinética**. Si lo tratamos como una partícula de masa $m$ que se mueve con rapidez $v$, su energía cinética es
$$
K=\frac{1}{2}mv^2.
$$
El símbolo $v^2$ representa el producto $v\cdot v$. Con la masa en kilogramos y la rapidez en metros por segundo, el resultado se obtiene en julios. En el sistema de referencia elegido, $K$ es positiva si el cuerpo se mueve y nula si está en reposo.

Un cuerpo de $2\,\mathrm{kg}$ que se mueve a $3\,\mathrm{m/s}$ tiene una energía cinética de
$$
K=\frac{1}{2}\cdot2\cdot3^2\,\mathrm{J}=9\,\mathrm{J}.
$$
Si el mismo cuerpo se mueve a $6\,\mathrm{m/s}$, su energía cinética es $K=36\,\mathrm{J}$. Como la rapidez está elevada al cuadrado, al duplicarla la energía cinética se multiplica por cuatro.

::grafico{f="x^2" xmin=0 xmax=6 ymin=0 ymax=40 nomi="v,K" punti="3,9;6,36" legenda="K=v^2" titolo="Energía cinética de un cuerpo de $2\,\mathrm{kg}$. La rapidez $v$ se mide en $\mathrm{m/s}$ y $K$ en julios."}
:::

## El trabajo y los cambios de rapidez

::::teorema{#teorema-energia-cinetica titolo="Teorema del trabajo y la energía cinética"}
En un sistema de referencia inercial, el trabajo total de las fuerzas que actúan sobre una partícula de masa constante es igual a la variación de su energía cinética.
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
Los subíndices $i$ y $f$ indican los valores inicial y final. Si el trabajo total es positivo, la rapidez aumenta. Si es negativo, disminuye. Si $W_{\mathrm{tot}}=0$, la energía cinética final es igual a la inicial.

:::dimostrazione
En un movimiento rectilíneo con fuerza resultante constante, podemos combinar la segunda ley de Newton con una ecuación del movimiento uniformemente acelerado. Elegimos el eje en el sentido del movimiento y estudiamos un tramo en el que no cambia de sentido.
$$
F_{\mathrm{tot}}=ma,
\qquad v_f^2-v_i^2=2as.
$$
Al multiplicar la segunda ecuación por $\dfrac{m}{2}$, obtenemos
$$
\frac{1}{2}mv_f^2-\frac{1}{2}mv_i^2=mas=F_{\mathrm{tot}}s.
$$
El producto del lado derecho es el trabajo total, que coincide con la variación de energía cinética del lado izquierdo. La demostración cubre el caso rectilíneo con fuerza resultante constante. El teorema también es válido en casos más generales.
:::
::::

:::esempio{titolo="Trabajo necesario para detener un carrito"}
Un carrito de $4\,\mathrm{kg}$ se mueve a $5\,\mathrm{m/s}$. Su energía cinética inicial es $K_i=\dfrac{1}{2}\cdot4\cdot25=50\,\mathrm{J}$. Cuando se detiene, $K_f=0$. Por tanto,
$$
W_{\mathrm{tot}}=0-50\,\mathrm{J}=-50\,\mathrm{J}.
$$
El signo negativo indica que la energía cinética disminuye. Para calcular el trabajo total basta con conocer la masa y las velocidades inicial y final. No hace falta saber cuánto dura el frenado.
:::

## Energía potencial gravitatoria

:::definizione{#energia-potenziale titolo="Energía potencial gravitatoria"}
Cerca de la superficie terrestre, podemos considerar constante la aceleración de la gravedad $g$. En ese caso, al elegir un nivel de referencia donde la energía es cero, la **energía potencial gravitatoria** de un cuerpo es
$$
U=mgh,
$$
donde $h$ es la altura medida hacia arriba desde ese nivel. Usaremos $g=9{,}81\,\mathrm{m/s^2}$, salvo que se indique otro valor. Esta energía se debe a la interacción entre el cuerpo y la Tierra.

Por ejemplo, si tomamos el suelo como nivel de referencia, un cuerpo de $2\,\mathrm{kg}$ situado a $3\,\mathrm{m}$ de altura tiene
$$
U=2\cdot9{,}81\cdot3\,\mathrm{J}=58{,}86\,\mathrm{J}.
$$
Si cambiamos el nivel de referencia, cambia el valor de $U$, pero la diferencia de energía entre dos posiciones sigue siendo la misma. Por debajo del nivel elegido, tanto $h$ como $U$ son negativas.
:::

:::teorema{#lavoro-del-peso titolo="Trabajo del peso y diferencia de altura"}
Si un cuerpo de masa $m$ pasa de una altura $h_i$ a una altura $h_f$ en una región donde $g$ es constante, el trabajo del peso es
$$
W_P=mg(h_i-h_f)=U_i-U_f.
$$
Cuando el cuerpo baja, $h_i>h_f$ y el trabajo del peso es positivo. Cuando sube, es negativo. El resultado depende de la diferencia entre las alturas inicial y final.

Por ejemplo, un cuerpo de $2\,\mathrm{kg}$ que baja de $3\,\mathrm{m}$ a $1\,\mathrm{m}$ pierde $39{,}24\,\mathrm{J}$ de energía potencial. Por tanto, el trabajo del peso es $+39{,}24\,\mathrm{J}$.

::grafico{assi=0 uguale=1 linee="-0.5,0 4,0;0,1 2,1;0,3 2,3" punti="1,3,pieno,A;1,1,pieno,B" vettori="2.8,3,2.8,1,P" etichette="0.3,3.4,hᵢ = 3 m;0.3,1.4,hᶠ = 1 m;2.7,0.4,h = 0" xmin=-1 xmax=4.5 ymin=-0.5 ymax=4 titolo="El trabajo del peso depende de la diferencia de altura, que en este caso es de $2\,\mathrm{m}$."}
:::

## Energía de un resorte

::::teorema{#energia-elastica titolo="Energía potencial elástica"}
Un resorte ideal, dentro de su límite elástico, ejerce una fuerza restauradora de módulo $F_e=kx$. El símbolo $k$ representa la constante elástica y $x$ es cuánto se ha estirado o comprimido el resorte respecto a su longitud natural. La energía potencial elástica es cero en la posición de equilibrio y se calcula así.
$$
U_e=\frac{1}{2}kx^2.
$$
Cuando el resorte recupera su longitud natural, puede transferir esta energía a un cuerpo. Si $k=100\,\mathrm{N/m}$ y $x=0{,}20\,\mathrm{m}$, se obtiene $U_e=2\,\mathrm{J}$.

:::dimostrazione
Al deformar lentamente el resorte desde cero hasta $x$, la fuerza externa que equilibra la fuerza elástica aumenta linealmente de cero a $kx$. El trabajo de la fuerza externa es el área del triángulo bajo la gráfica de la fuerza frente a la deformación.
$$
W=\frac{\text{base}\cdot\text{altura}}{2}
=\frac{x\cdot kx}{2}
=\frac{1}{2}kx^2.
$$
Si las pérdidas de energía y la rapidez son despreciables, este trabajo aumenta la energía potencial elástica del resorte.
:::
::::

:::esempio{titolo="El área bajo la gráfica de la fuerza"}
En el modelo ideal, si deformamos lentamente $3\,\mathrm{m}$ un resorte con $k=2\,\mathrm{N/m}$, la fuerza final es $6\,\mathrm{N}$. El área del triángulo es $\dfrac{3\cdot6}{2}=9\,\mathrm{J}$. Si usáramos la fuerza final para todo el desplazamiento, obtendríamos $18\,\mathrm{J}$. Ese cálculo daría el doble del trabajo real, porque la fuerza aumenta de forma gradual.

::grafico{f="2*x" area="2*x;0;0;3" xmin=0 xmax=4 ymin=0 ymax=8 nomi="x,F" punti="3,6" legenda="F=2x" titolo="En el modelo ideal, $x$ se mide en metros y $F$ en newtons. El área sombreada representa un trabajo de $9\,\mathrm{J}$."}
:::

## Conservación de la energía mecánica

::::teorema{#conservazione titolo="Conservación de la energía mecánica"}
La **energía mecánica** es la suma de la energía cinética y la potencial, $E=K+U$. Cuando las únicas fuerzas que realizan trabajo son el peso y las fuerzas elásticas ideales, la energía mecánica se conserva.
$$
K_i+U_i=K_f+U_f.
$$
El término $U$ incluye todas las energías potenciales que intervienen en el problema. Si actúan otras fuerzas, su trabajo debe ser nulo. Es el caso de la fuerza normal de una guía fija y lisa.

:::dimostrazione
Para las fuerzas consideradas, el trabajo total es igual a la disminución de energía potencial, $W_{\mathrm{tot}}=U_i-U_f$. Por el teorema del trabajo y la energía cinética, también tenemos $W_{\mathrm{tot}}=K_f-K_i$. Al igualar ambas expresiones, obtenemos
$$
K_f-K_i=U_i-U_f.
$$
Si sumamos $K_i+U_f$ a ambos lados de la igualdad, obtenemos la ecuación de conservación de la energía mecánica.
:::
::::

:::esempio{titolo="Caída desde el reposo"}
Un cuerpo cae $5\,\mathrm{m}$ desde el reposo con una resistencia del aire despreciable. Elegimos la altura final como nivel de energía potencial cero y, para este ejemplo, tomamos $g=10\,\mathrm{m/s^2}$. Al aplicar la conservación de la energía mecánica, obtenemos
$$
mg h=\frac{1}{2}mv_f^2,
\qquad v_f=\sqrt{2gh}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
La masa se cancela porque aparece a ambos lados de la ecuación. La raíz positiva da el módulo de la velocidad. El cuerpo se mueve hacia abajo.
:::

## Rozamiento y transformaciones de energía

:::teorema{#dissipazione titolo="Trabajo de la fuerza de rozamiento"}
Sobre una superficie fija, la fuerza de rozamiento cinético actúa en sentido contrario al deslizamiento. Si su módulo $f$ es constante a lo largo de un tramo recto de longitud $s$, su trabajo es
$$
W_a=-fs.
$$
Si las únicas fuerzas que realizan trabajo son el rozamiento, el peso y las fuerzas elásticas, se cumple
$$
E_f-E_i=W_a.
$$
Como el trabajo del rozamiento es negativo, la energía mecánica disminuye. La energía transferida al cuerpo y a la superficie por el rozamiento aumenta su energía interna. Si incluimos esa transformación, la energía total se conserva.

Si un cuerpo tiene al principio $40\,\mathrm{J}$ de energía mecánica y el rozamiento realiza un trabajo de $-12\,\mathrm{J}$, la energía mecánica final es $E_f=28\,\mathrm{J}$.
:::

## Potencia y rendimiento

:::definizione{#potenza titolo="Potencia media"}
La **potencia media** mide la energía que se transfiere por unidad de tiempo. Si un motor realiza un trabajo $W$ durante un intervalo $\Delta t$, su potencia mecánica media es
$$
P_m=\frac{W}{\Delta t}.
$$
La unidad de potencia es el **vatio**, cuyo símbolo es $\mathrm{W}$. Un vatio equivale a un julio por segundo, $1\,\mathrm{W}=1\,\mathrm{J/s}$. En estas fórmulas, $W$ en cursiva representa el trabajo y $\mathrm{W}$ junto a un número es la unidad de potencia.

Un elevador que realiza $600\,\mathrm{J}$ de trabajo en $3\,\mathrm{s}$ desarrolla una potencia media de $P_m=200\,\mathrm{W}$. Si tarda $6\,\mathrm{s}$ en realizar el mismo trabajo, su potencia media es de $100\,\mathrm{W}$. En ambos casos transfiere la misma cantidad de energía.
:::

:::definizione{#rendimento titolo="Rendimiento"}
Una máquina recibe una cantidad de energía $E_{\mathrm{ass}}$ y transfiere una parte de ella, $E_{\mathrm{utile}}$, en la forma que necesitamos. El **rendimiento** es la proporción de energía recibida que se aprovecha.
$$
\eta=\frac{E_{\mathrm{utile}}}{E_{\mathrm{ass}}}.
$$
La letra griega $\eta$ se lee «eta». El cociente no tiene unidades y también puede expresarse en porcentaje. Si la energía almacenada en la máquina no varía, se cumple $0\leq\eta\leq1$. Un rendimiento de $1$ es el caso ideal en el que se aprovecha toda la energía recibida.

Si la máquina recibe $500\,\mathrm{J}$ y proporciona $350\,\mathrm{J}$ de energía útil, su rendimiento es $\eta=0{,}70=70\%$. Los $150\,\mathrm{J}$ restantes se transfieren de otras formas. También puede calcularse como $\eta=\dfrac{P_{\mathrm{utile}}}{P_{\mathrm{ass}}}$ si ambas potencias medias se refieren al mismo intervalo de tiempo.
:::
