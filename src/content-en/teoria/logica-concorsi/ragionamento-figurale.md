---
titolo: "Figural and spatial reasoning"
sommario: "How to describe changes in a figure (rotation, reflection, fill, number, and position) and solve problems involving figure sequences and matrices, the odd figure out, rotated figures and mirror images, cube nets, and counting triangles, squares, and unit cubes."
---

## Transformations of a figure

:::definizione{#caratteristiche-di-una-figura titolo="Cells and features of a figure"}
In figural reasoning questions, each drawing appears in a box called a **cell**. A few **features** describe the contents of a cell:

- the *shape* of the figures (circle, square, triangle, arrow, or letter);
- the *fill* (unfilled, gray, solid, or striped);
- the *number* of copies of a figure;
- the *position* of the figure in the cell (center, top left, right, …);
- the *orientation*, or the direction in which the figure is turned (an arrow pointing up or right).

Moving from one cell to the next changes one or more features and leaves the others unchanged. In the sequence below, the shape, number, and fill stay the same. Only the orientation of the arrow changes.

::figura{tipo="serie" celle="freccia pieno | freccia pieno r90 | freccia pieno r180" titolo="Three cells in which only the orientation of the arrow changes"}
:::

:::definizione{#rotazione titolo="Rotation"}
A **rotation** turns the figure through a given angle around the center of the cell without changing its shape. The direction is *clockwise* if the figure turns in the same direction as the hands of a clock and *counterclockwise* if it turns in the opposite direction. The angles in these questions are almost always $45°$, $90°$, and $180°$.

::figura{tipo="serie" celle="freccia pieno | freccia pieno r45 | freccia pieno r90 | freccia pieno r180 | freccia pieno r-90" titolo="The original arrow and its rotations through $45°$, $90°$, and $180°$ clockwise and $90°$ counterclockwise"}

Two rotations through the same angle in opposite directions cancel, and a rotation through $360°$ returns a figure to its original position. Therefore, rotating $90°$ counterclockwise gives the same result as rotating $270°$ clockwise, and a rotation through $180°$ gives the same result in either direction. An upward-pointing arrow rotated $90°$ counterclockwise points left, just as if it had been rotated clockwise three times through $90°$.
:::

:::definizione{#simmetria-assiale titolo="Reflection across a line"}
A **reflection across a line** produces the *mirror image* of the figure. Reflection across a vertical line switches left and right. Reflection across a horizontal line switches top and bottom.

::figura{tipo="serie" celle="lettera:F | lettera:F specchio | lettera:F specchio-o" titolo="The letter F and its reflections across a vertical line and a horizontal line"}

The two horizontal strokes of the letter F extend to the right of its stem. In its reflection across a vertical line they extend to the left. In its reflection across a horizontal line the stem stays on the left and the strokes are at the bottom.
:::

:::definizione{#riempimento-numero-posizione titolo="Fill, number, and position"}
Three other transformations occur frequently.

- A **change of fill** preserves the shape and changes the shading inside, often in a repeating order (unfilled, gray, solid, unfilled, …).
- A **change in number** adds or removes copies of a figure, often one at a time.
- A **shift** moves a figure from one position in a cell to another. The figure usually moves clockwise or counterclockwise around the edge of the cell, one position at a time.

::figura{tipo="serie" celle="stella | stella grigio | stella pieno | stella righe" titolo="Four fills for the same shape: unfilled, gray, solid, and striped"}

::figura{tipo="serie" celle="punto no | punto n | punto ne | punto e | punto se" titolo="The dot moves clockwise around the edge of the cell, one position at a time"}
:::

:::osservazione{#descrivere-la-trasformazione titolo="Describing the change from one cell to the next"}
To find the rule, compare adjacent cells one feature at a time, in the order shape, fill, number, position, and orientation. Describe the change in each feature in words. The list of changes gives the rule. In the sequence below the shape and fill stay the same, the orientation changes by $90°$ clockwise at each step, and the figure stays in the center. The rule is therefore “the right triangle rotates $90°$ clockwise.” The triangle in the fourth cell has rotated $270°$ clockwise from the first, equivalent to $90°$ counterclockwise.

::figura{tipo="serie" celle="squadra grigio | squadra grigio r90 | squadra grigio r180 | squadra grigio r-90" titolo="The right triangle rotates $90°$ clockwise from one cell to the next"}
:::

## Figure sequences

:::definizione{#serie-di-figure titolo="Figure sequences"}
A **figure sequence** is a row of cells constructed according to a rule that takes each cell to the next. The question shows the first few cells and a cell with a question mark, and asks which option continues the sequence. The answer is the cell obtained by applying the rule to the last cell shown.

::figura{tipo="serie" celle="cerchio piccolo x1 | cerchio piccolo x2 | cerchio piccolo x3 | cerchio piccolo x4 | ?" titolo="One circle is added at each step, so the fifth cell contains $5$ circles"}

The shape and fill stay the same throughout the sequence, while the number of circles increases by one at each step. Therefore, the missing cell contains five unfilled circles.
:::

:::teorema{#regole-indipendenti titolo="Several rules acting together"}
When several features change, each usually follows its own rule, independently of the others. The missing cell can then be constructed one feature at a time by applying the corresponding rule to each feature. This works because the rules concern different features, and the value chosen for one feature does not affect the others.

::figura{tipo="serie" celle="freccia pieno; punto no | freccia pieno r90; punto no; punto ne | freccia pieno r180; punto no; punto ne; punto se | ?" titolo="The arrow rotates $90°$ clockwise as the number of dots increases by one"}

In the sequence the arrow rotates $90°$ clockwise at each step, so it points left in the fourth cell. The number of dots increases by one, and the dots appear in the corners in clockwise order starting at the top left. Therefore, the fourth cell contains a left-pointing arrow and four dots, one in each corner.
:::

:::osservazione{#cicli titolo="Cyclic rules"}
Many rules repeat after a certain number of steps, called the *period*. A fill that cycles through unfilled, gray, and solid has period $3$. A dot that moves around the four corners of a cell has period $4$. To find what appears in a distant cell, use the remainder after dividing the number of steps by the period. If the dot starts in the top left corner of the first cell and moves to the next corner clockwise in each cell, it has taken $9$ steps by the tenth cell. Since $9 = 2 \cdot 4 + 1$, it has made two full circuits and moved one more step, so it is at the top right.
:::

:::attenzione{#rotazioni-invisibili titolo="Rotations that leave a figure looking the same"}
A rotation does *not* always change a figure's appearance. A square rotated through $90°$ and a cross rotated through $90°$ both coincide with their original figures, so a rotation through $90°$ cannot be detected in a sequence of squares. For this reason rotation sequences use figures whose orientation is visible, such as an arrow, a right triangle, or a figure with a dot near one side.
:::

## Figure matrices

:::definizione{#matrice-di-figure titolo="Figure matrix"}
A **figure matrix** is a grid of cells, usually $3 \times 3$, with the bottom right cell missing. The cells follow a rule along the rows, down the columns, or in both directions. Since the first two rows are complete, the rule can be inferred from them and applied to the third row.
:::

:::teorema{#regola-per-riga titolo="Row and column rules"}
Two kinds of rules are especially common in matrices.

- **Three values in each row.** Each row contains each of three values of a feature exactly once, such as the three shapes circle, square, and triangle. The missing value in the third row is the one that has not yet appeared.
- **Progression along a row.** From one cell to the next, the feature always changes in the same way, such as by a rotation through $90°$ or the addition of one element. Sometimes the third cell is obtained from the first two by an operation such as adding their numbers of elements.

Both rules can apply to different features at the same time, one across the rows and the other down the columns.

::figura{tipo="matrice" celle="cerchio | quadrato grigio | triangolo pieno | quadrato | triangolo grigio | cerchio pieno | triangolo | cerchio grigio | ?" titolo="Each row contains a circle, a square, and a triangle, and each column has its own fill"}

The third row is missing a square, and the fill in the third column is solid. Therefore, the missing cell contains a solid square.
:::

:::definizione{#sovrapposizione titolo="Superposition: union and symmetric difference"}
In **superposition** matrices, the third cell of each row is formed by superimposing the first two.

- For the **union**, the third cell contains every element present in at least one of the first two cells.
- For the **symmetric difference**, the third cell contains only the elements present in exactly one of the first two cells. Elements present in both cancel.

These are the same two operations introduced in the topic on sets and Venn diagrams, applied to the sets of segments or dots drawn in the cells.

::figura{tipo="serie" celle="linea; linea r45 | linea; linea r90 | linea; linea r45; linea r90" titolo="Union: the common vertical segment appears once, together with the other two"}

::figura{tipo="serie" celle="linea; linea r45 | linea; linea r90 | linea r45; linea r90" titolo="Symmetric difference: the common vertical segment cancels"}
:::

:::attenzione{#unione-o-differenza titolo="Checking the operation in two rows"}
Union and symmetric difference give the same result only when the first two cells have *no* elements in common. To distinguish the operations, look in the complete rows for an element appearing in both the first and second cells. If it appears in the third cell, the operation is union. If it is missing, the operation is symmetric difference.
:::

## The odd figure out

:::definizione{#figura-estranea titolo="The odd figure out"}
**Odd-figure-out** questions show five figures. Four follow a common rule, and the answer is the one that does not. As in a sequence, look for the rule by comparing one feature at a time.

::figura{tipo="opzioni" celle="triangolo | quadrato grigio | pentagono | esagono pieno | stella" titolo="Four figures are convex polygons, while the outline of the star dips toward its center"}

In these five figures the fill and the number of sides vary without a pattern. The corners of the triangle, square, pentagon, and hexagon all point outward. The star has five corners that point inward. Therefore, E is the odd figure out.
:::

:::osservazione{#relazioni-interne titolo="Rules relating parts of a figure"}
Often the common rule is a relationship between two parts of the cell. Three relationships are especially common.

- One count equals another, as when the number of dots equals the number of sides of the polygon.
- A direction, as when an arrow points toward a dot.
- A symmetry, as when the figure has an axis across which it coincides with its own reflection.

::figura{tipo="opzioni" celle="freccia r45; punto ne | freccia r180; punto s | freccia r90; punto o | freccia r-90; punto o | freccia; punto n" titolo="In four cells the arrow points toward the dot. In cell C it points away from it"}

In cells A, B, D, and E the arrow points toward the dot. In cell C the arrow points right and the dot is on the left, so C is the odd figure out.
:::

:::attenzione{#una-sola-regola titolo="A rule that singles out just one figure"}
A feature that singles out a figure is *not* enough to identify it as the odd one out. The rule must hold for all four other figures. If “unfilled figure” were chosen as the rule in the polygon example, two figures would be excluded, the gray square and the solid hexagon, so the rule does not answer the question.
:::

## Rotations and reflections of plane figures

:::teorema{#rotazione-o-specchio titolo="Rotated figures and mirror images"}
Consider a figure with no axes of symmetry, such as the letters F, R, G, or L. Rotations can never turn the figure into its mirror image. Two successive reflections, one across the vertical axis and one across the horizontal axis, are equivalent to a rotation through $180°$.

::figura{tipo="opzioni" celle="lettera:F r90 | lettera:F r180 | lettera:F specchio | lettera:F specchio r90 | lettera:F r-90" titolo="Figures A, B, and E are rotations of the letter F. Figures C and D are mirror images, with D also rotated"}

To see why, trace the outline of the letter. As you follow the stem of the F upward from its foot, the two horizontal strokes are on your right. Rotating the whole letter leaves the strokes on your right as you follow the stem. In the mirror image the strokes are on your left as you follow the stem, and no rotation can bring them back to your right.
:::

:::osservazione{#riconoscere-lo-specchio titolo="Recognizing a mirror image"}
To decide whether a figure has been rotated or reflected, choose a reference part, such as the stem of the F or the leg of the R. Mentally rotate the figure to return that part to its original position. If the rest of the figure then coincides with the original, the figure is rotated. If the rest is on the opposite side, the figure is a mirror image. In figure D in the example the stem is horizontal. Rotating the figure $90°$ counterclockwise makes the stem vertical and places the strokes on the left, so D is a mirror image.
:::

:::attenzione{#figure-simmetriche titolo="Figures with an axis of symmetry"}
For a figure with an axis of symmetry, a mirror image *cannot* be distinguished from a rotation. An upward-pointing arrow coincides with its own reflection across the vertical axis, and its reflection across the horizontal axis is a downward-pointing arrow, which is the original arrow rotated through $180°$. For this reason questions about rotations and reflections use letters or composite figures without axes of symmetry, such as an arrow with a dot beside it.
:::

## Cube nets

:::definizione{#sviluppo-del-cubo titolo="Net of a cube"}
The **net** of a cube is the plane figure obtained by cutting the cube along some of its edges and laying its six faces flat. It consists of six squares joined along their sides. Folding the squares along their common edges reassembles the cube. There are $11$ different cube nets, the best known of which is the Latin cross.

::figura{tipo="sviluppo" schema=".x..|xxxx|.x.." celle="punto | cerchio | croce pieno | anello | quadrato grigio | x" titolo="A Latin cross net with a symbol on each face"}

In these questions the faces carry symbols that look the same after a rotation through $90°$, such as a circle, a cross, or a square. Thus, only which faces are adjacent matters. The orientation of the drawing on each face makes no difference.
:::

:::teorema{#facce-opposte titolo="Opposite faces"}
Two rules hold for a net that folds into a cube.

- If three faces lie consecutively in a straight line, the first and third are **opposite**, because the middle face folds between them like the bottom of a box between two walls.
- If four faces form a Z, with two faces in a straight line followed by another pair in a parallel line one step over, the first and last are opposite.

In the Latin cross net, the horizontal row contains the circle, solid cross, ring, and gray square. The circle and the ring are the first and third faces in a straight run of three, so they are opposite. For the same reason the solid cross and the gray square are opposite. In the vertical column the dot, solid cross, and diagonal cross lie in a straight line, so the dot and the diagonal cross are opposite. Two opposite faces never appear together in a view of the cube, which rules out many options.
:::

:::teorema{#sviluppi-che-non-si-chiudono titolo="Arrangements that do not fold into a cube"}
Six squares joined along their edges do *not* always form a cube net. Three common arrangements fail to fold into a cube:

- four squares form a $2 \times 2$ block;
- five squares lie in a straight row;
- four squares lie in a straight row and the other two are attached to the same side of the row.

In the first case four faces meet at the same point, whereas only three meet at each vertex of a cube. In the second case four faces in a row wrap all the way around the cube, and the fifth overlaps the first. In the third case the two squares attached to the same side end up on the same face, leaving the other face uncovered.

::figura{tipo="sviluppo" schema="xx..|xxxx" celle="- | - | - | - | - | -" titolo="An arrangement that does not fold into a cube: the two upper faces are on the same side of the row of four"}

::figura{tipo="sviluppo" schema="x...|xxxx|..x." celle="- | - | - | - | - | -" titolo="A net that folds into a cube: the two faces outside the row are on opposite sides"}
:::

:::teorema{#facce-attorno-a-un-vertice titolo="Faces meeting at a vertex"}
If three faces touch at one point on the net, they meet at a vertex when the cube is folded and retain their clockwise order as viewed from outside the cube. In a drawing of the cube, the visible faces are the top, front, and right faces. Clockwise around the vertex nearest the viewer, the order is top, right, then front.

In the Latin cross net, the dot, circle, and cross meet at the top left corner of the cross. Their clockwise order is circle, dot, cross. Therefore, a cube with the dot on top can have the cross on the right and the circle in front. A cube with the dot on top, the cross in front, and the circle on the right *cannot* be obtained from this net.

::figura{tipo="cubi" celle="punto / cerchio / croce pieno | punto / croce pieno / cerchio" etichette="yes,no" titolo="The first cube can be obtained from the Latin cross net. The second has the same three faces in the opposite order"}
:::

:::osservazione{#metodo-per-i-cubi titolo="Solving cube questions"}
Questions that ask which cube can be formed from a net can be checked in two steps.

1. Write the three pairs of opposite faces in the margin and eliminate cubes showing both faces of any opposite pair.
2. For the remaining cubes, check the order of the three visible faces around the vertex. If those faces meet at one point on the net, read their order there. Otherwise, follow the faces as you fold the net mentally until they meet.
:::

## Counting figures

:::teorema{#contare-triangoli titolo="Triangles with a common vertex"}
Consider a triangle in which segments from the top vertex divide the base into $k$ parts. Every triangle in the figure has the top vertex and two endpoints on the base, chosen from the $k + 1$ division points. The number of pairs of points is
$$
\frac{k\,(k + 1)}{2},
$$
so this is the number of triangles. With three interior segments, the base is divided into $k = 4$ parts and there are $\dfrac{4 \cdot 5}{2} = 10$ triangles.

::figura{tipo="linee" segmenti="0,10,10,10;0,10,5,0;10,10,5,0;5,0,2.5,10;5,0,5,10;5,0,7.5,10" titolo="Three segments from the vertex divide the base into $4$ parts, giving $10$ triangles"}

The count can also be checked by the number of parts. There are $4$ triangles consisting of a single part, $3$ consisting of two adjacent parts, $2$ consisting of three parts, and the whole triangle, for a total of $4 + 3 + 2 + 1 = 10$.
:::

:::teorema{#contare-quadrati titolo="Squares in a grid"}
In a square grid of $n \times n$ small squares, the number of squares of side length $1$ is $n^2$. For side length $2$ the number is $(n-1)^2$, and so on up to the entire square. The total number of squares is
$$
1^2 + 2^2 + \dots + n^2 .
$$
This rule holds because the top left corner of a square of side length $\ell$ can occupy $n - \ell + 1$ positions along a row and the same number along a column. In a $3 \times 3$ grid there are $9 + 4 + 1 = 14$ squares. Counting only the small squares gives $9$.

::figura{tipo="linee" segmenti="1,1,10,1;1,4,10,4;1,7,10,7;1,10,10,10;1,1,1,10;4,1,4,10;7,1,7,10;10,1,10,10" titolo="A $3 \times 3$ grid: $9$ squares of side length $1$, $4$ of side length $2$, and $1$ of side length $3$"}
:::

:::osservazione{#conteggio-ordinato titolo="Counting systematically"}
When there is no regular pattern, count the figures by size, starting with the smallest, and record the subtotals in the margin. In a square with both diagonals drawn there are $4$ small triangles, each containing one side of the square, and $4$ triangles made up of two adjacent small triangles, each covering half the square. The total number of triangles is therefore $8$.

::figura{tipo="linee" segmenti="1,1,10,1;10,1,10,10;10,10,1,10;1,10,1,1;1,1,10,10;10,1,1,10" titolo="A square with both diagonals drawn contains $4$ small triangles and $4$ triangles that each cover half the square"}
:::

:::definizione{#costruzioni-di-cubetti titolo="Building with layers of unit cubes"}
A structure made of identical cubes can be described by a **top view**: a grid whose entries give the number of cubes stacked in each column. Each cube rests on the table or on another cube, so the number in each square is the height of its stack. The total number of cubes is the sum of the numbers in the grid.

::figura{tipo="matrice" celle="lettera:2 | lettera:1 | lettera:3 | lettera:1 | lettera:0 | lettera:2 | lettera:3 | lettera:2 | lettera:1" titolo="Top view of a structure on a $3 \times 3$ base: the number in each square is the height of its stack"}

The structure shown contains $2 + 1 + 3 + 1 + 0 + 2 + 3 + 2 + 1 = 15$ unit cubes. To complete a $3 \times 3 \times 3$ cube, which contains $27$ unit cubes, $27 - 15 = 12$ more are needed. The same number is obtained by adding, for every square, the difference between $3$ and the number shown.
:::

## Quick methods for timed questions

:::osservazione{#metodi-rapidi titolo="Notes in the margin and eliminating options"}
A few consistent habits make figural reasoning questions quicker to solve.

- **One feature at a time**: compare cells first by shape, then by fill, number, position, and orientation. Note the rule for each feature in the margin.
- **Elimination**: for each feature, eliminate options that do not have the required value. Usually only one option remains after two features.
- **Period**: for cyclic rules, find the period and use the remainder after division to determine where the figure will be in a distant cell.
- **Matrices**: infer the rule from the first two rows and check it down the columns as well. For superpositions, check what happens to the common elements.
- **Mirror images**: mentally bring a reference part back to its original position and check which side the rest of the figure is on.
- **Cubes**: first check opposite pairs of faces, then the clockwise order of the faces around a vertex.
- **Counting**: count figures by size or by number of parts. For a grid use the sum of squares.
:::
