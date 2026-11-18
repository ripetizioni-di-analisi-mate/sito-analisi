---
titolo: Arrays, matrices and strings
sommario: How to traverse an array within its bounds, read a matrix row by row, and build C strings with the terminator in the correct position.
---

## Aggregate objects and valid indices

:::definizione{#vettore-c titolo="Array of elements of the same type"}
An **array** in C is an object made up of contiguous elements of the same type. The declaration `int a[5];` reserves five elements of type `int`. The array has length $n=5$, and each element can be identified by its index $i$. The index bounds are
$$
0\le i<n .
$$
The first element is `a[0]`, and the last is `a[n - 1]`. The value $n$ is the first excluded index, so it provides a natural endpoint for a traversal. An array declared with a constant size has a strictly positive size in portable C17. A procedure can still process zero elements when its active range is empty.
:::

:::definizione{#inizializzazione-vettore titolo="Initialization from a list"}
A list of values in braces initializes the cells in increasing index order. In `int a[5] = {7, -2};`, the elements at indices $0$ and $1$ receive $7$ and $-2$, respectively. Because the declaration provides a list, the remaining three elements receive zero. In `int b[] = {7, -2};`, the compiler instead infers the size $2$ from the length of the list. Every cell has a definite initial value in both examples.
:::

:::esempio{titolo="Reading an initialized cell"}
Consider the following fragment, where all indices are in the range $[0,5)$.
```c
int a[5] = {7, -2};
int value = a[1] + a[4];
```
The value of `a[1]` is $-2$ because the second value in the list initializes that cell. The value of `a[4]` is $0$ because that cell is initialized implicitly. The assignment to `value` therefore stores $-2+0=-2$. First establish how each value was assigned, because an index on its own identifies only a position.
:::

:::attenzione
A declaration such as `int a[5];` inside a block, with automatic storage duration, leaves the array contents initially indeterminate. An algorithm that uses these cells assigns a value to each cell before reading it. The access `a[5]` is outside the array even when all five elements are initialized. The first case concerns whether a value is available, and the second concerns the domain of the indices.
:::

## Ranges and traversal invariants

:::definizione{#intervallo-semichiuso titolo="Half-open index range"}
Let $n$ be an array’s capacity in elements. For integer endpoints satisfying $0\le lo\le hi\le n$, the **half-open** range $[lo,hi)$ contains the indices from $lo$ inclusive to $hi$ exclusive. The number of indices is $hi-lo$. If $lo=hi$, the range is empty and its length is zero. The ranges $[lo,k)$ and $[k,hi)$, with $lo\le k\le hi$, cover $[lo,hi)$ without sharing indices. This makes it possible to split a traversal into two groups and combine the results.
:::

::::teorema{#traversata-vettore titolo="Accumulator over a range"}
Suppose that $0\le lo\le hi\le n$ and that the elements in $[lo,hi)$ are initialized. If every partial sum is representable in the type of `sum`, the following loop produces the sum of the segment. The type `size_t` is declared in `<stddef.h>`.
```c
int sum = 0;
for (size_t i = lo; i < hi; ++i) {
    sum += a[i];
}
```

:::dimostrazione
Before the condition is tested with index $i$, the accumulator holds the sum over $[lo,i)$. Initially $i=lo$, so the sum is over an empty range and equals zero. If $i<hi$, the index $i$ is valid and `a[i]` is the sole element added when moving to $[lo,i+1)$. Incrementing the index to $i+1$ preserves the invariant. Every execution of the body reduces the number $hi-i$ of remaining elements by one. The loop stops at $i=hi$, so the sum covers all of $[lo,hi)$.
:::
::::

:::esempio{titolo="Counting under a condition"}
To count the negative cells of `int a[5] = {4, -1, -3, 2, -2};` in the range $[1,4)$, start a count at zero. Add one only when `a[i] < 0`. In the input, the indices $1,2,3$ correspond to the values $-1,-3,2$. The first two satisfy the condition, so the final count is $2$. The element `a[4]` is negative but has an excluded index, so it remains outside the count. The invariant uses the number of negative values in the prefix already examined, and the same measure $hi-i$ proves termination.
:::

:::osservazione
Establish the order of the endpoints before computing the length of the segment. If $hi<lo$, the mathematical difference is negative. Storing this difference in a variable of type `size_t` produces the congruent value in the unsigned type. For $hi-lo$ to represent a count, the relation $lo\le hi$ is therefore necessary. Similarly, for a sum, it is sufficient that all *prefix sums* in the chosen traversal order be representable. Requiring the final result alone to be representable is a weaker condition.
:::

:::osservazione
For a function that also receives capacity $n$, the checks `lo <= hi` and `hi <= n` can be combined into one condition. The type `size_t` already excludes negative endpoints. If $n=5$, the pair $(4,2)$ fails the first check, while $(3,6)$ fails the second. The pair $(5,5)$ passes both checks and specifies an empty traversal. Requiring `hi < n` would also reject $[0,5)$, which contains exactly the five cells. The comparison with $n$ concerns the excluded endpoint, whereas the comparison with $hi$ bounds each index visited.
:::

## Object size and parameters

:::definizione{#dimensione-vettore titolo="Size in bytes and element count"}
The `sizeof` operator returns the size of its operand in C bytes as a value of type `size_t`. For an object declared as `int a[7];`, `sizeof a` measures the complete array and `sizeof a[0]` measures one element. The elements are contiguous and have the same size, so
$$
\texttt{sizeof a}=7\cdot\texttt{sizeof a[0]} .
$$
The expression `sizeof a / sizeof a[0]` has value $7$ even on an implementation where `sizeof(int)` differs from four. Here `sizeof a[0]` measures the type `int`, so it can be used immediately after the declaration, before the cells receive values.
:::

:::definizione{#parametro-vettore titolo="Passing an array to a function"}
In a parameter declaration, `const int a[]` is adjusted to `const int *a`. The declaration `const int a[7]`, without the `static` keyword inside the brackets, also gives the same parameter type. The function can use `a[i]` when the caller provides the required elements. Pass the actual length as a separate parameter or, between functions that share a fixed size, specify it in a contract. Within the function, `sizeof a` measures the parameter after adjustment to a pointer. The formula for finding the element count therefore applies in the block where `a` is an array object.
:::

:::esempio{titolo="Contract for a partial sum"}
Assume `<stddef.h>` is available. The caller provides access to at least $hi$ elements if the range has positive length. The cells from $lo$ up to $hi$ exclusive are initialized, and each partial sum is representable in `int`.
```c
int sum_range(const int a[], size_t lo, size_t hi)
{
    int sum = 0;
    for (size_t i = lo; i < hi; ++i) {
        sum += a[i];
    }
    return sum;
}
```
For `int samples[4] = {9, 1, 6, 3};`, `sum_range(samples, 1, 4)` equals $1+6+3=10$. Calling it with $lo=4$ and $hi=4$ returns $0$ without reading any element. The contract identifies the part to visit. The signature `const int a[]` allows reads through the parameter and prevents assignments through `a[i]`.
:::

:::osservazione
A function parameter can be declared as `const int a[static 4]`. In C17 this form requires the argument to provide access to the first element of an array containing at least four elements. The actual size remains a caller-side fact and the parameter still has pointer type. For example, a function that reads a fixed group of four samples can use this contract. An array of seven samples meets it if its first element is accessible. A three-sample array is ruled out by the contract before the function body is considered. In other cases, such as summing a range that can be empty, an explicit length parameter is suitable.
:::

## Physical layout of rows

:::definizione{#matrice-per-righe titolo="Matrix as an array of arrays"}
The declaration `int m[3][4];` creates three elements of type `int[4]`. Each element is therefore a row of four integers. The expression `m[r][c]` selects the row with index $r$, then the element with index $c$ within that row. Valid indices satisfy $0\le r<3$ and $0\le c<4$. The second dimension describes the type of a row and determines how far its position changes when moving to the next row.
:::

::::teorema{#scostamento-matrice titolo="Cell offset in row-major layout"}
Let $R>0$ and $C>0$ be the row and column counts of an object `T m[R][C]`, with constant dimensions and valid indices $r,c$. The offset of cell `m[r][c]` from the start of the matrix, first in elements and then in C bytes, is
$$
k=rC+c,\qquad b=k\,\texttt{sizeof(T)} .
$$
:::dimostrazione
The first $r$ rows are contiguous and contain $C$ elements each, which accounts for $rC$ skipped elements. Within row $r$, the chosen cell is preceded by the $c$ cells at indices $0$ through $c-1$. The total is $rC+c$ and each element takes `sizeof(T)` C bytes. The formula identifies a position in the object representation. Indexed accesses still follow the bounds of each row.
:::
::::

:::esempio{titolo="Locating a grid cell"}
Consider the matrix shown in the diagram.

![Three rows with values 5, 9, 2, 7, then 4, 0, 8, 1, then 6, 3, 5, 2. The cell at row 1 and column 2 contains 8.](/immagini/informatica/vettori-matrici-stringhe/schema-teoria-en.png)

The cell `m[1][2]` has value $8$. Reaching it means skipping row $0$, which contains four elements, and cells $0$ and $1$ in row $1$. The offset is $1\cdot4+2=6$ elements. If `sizeof(int)` is four on the machine under consideration, the offset in C bytes is $6\cdot4=24$.
:::

:::attenzione
In the inner array of length $4$, index $4$ is outside the valid domain. Therefore `m[0][4]` does not access cell `m[1][0]`, even though rows are stored contiguously. The first cell of the second row has row index $1$ and column index $0$. Dividing a linear offset by $C$ gives those two indices as quotient and remainder when the offset lies between $0$ and $RC-1$.
:::

## Traversing rectangular matrices

:::definizione{#traversata-matrice titolo="Visiting cells, columns and the diagonal"}
To visit each cell of an $R\times C$ matrix, one may use an outer loop over the rows and an inner loop over the columns. When the outer loop fixes $r$, the inner loop examines $c\in[0,C)$. To visit only column $j$, it is sufficient to vary $r$ and access `m[r][j]`, after checking $0\le j<C$. On the main diagonal, set $r=c=i$. The index must belong to both $[0,R)$ and $[0,C)$, so the diagonal contains $\min(R,C)$ cells. This condition keeps the traversal valid for a rectangular matrix.
:::

:::esempio{titolo="Summing a column with a fixed row width"}
The function receives rows of four integers and reads column `col`, with `col < 4`. The caller provides `rows` accessible rows. The column is initialized, and every partial sum is representable in `int`. Assume `<stddef.h>` is available.
```c
int column_sum(const int m[][4], size_t rows, size_t col)
{
    int sum = 0;
    for (size_t r = 0; r < rows; ++r) {
        sum += m[r][col];
    }
    return sum;
}
```
For the three rows in the diagram, declared with elements of type `const int`, execution with `col = 2` reads $2$, $8$ and $5$ in order. The sum is $2+8+5=15$. The parameter type lets the compiler determine the width of one row. The number of rows depends on the object supplied and is passed separately.
:::

:::osservazione
The transpose of an $R\times C$ matrix has dimensions $C\times R$. The value `m[r][c]` is assigned to `t[c][r]`. Since $c<C$ and $r<R$, both indices are valid in the transposed shape. Each pair of indices in the source matrix reaches a distinct pair in the destination matrix, and swapping the indices again restores the source pair. This correspondence justifies transposition with two loops when the matrices occupy separate storage.
:::

:::osservazione
Two matrices can have the same total size while having different row types. For example, the constant matrices of types `const int[2][6]` and `const int[3][4]` both contain twelve integers. The `column_sum` function in the example receives a pointer to a four-element row. The second type provides that row type, while the first provides a row of six integers. The cell at row index $1$ and column $0$ occupies linear position $6$ in the first matrix and position $4$ in the second. The total cell count is therefore insufficient for choosing the parameter. To accept varying widths, one may design a representation with a one-dimensional array and state an explicit contract on the row count, column count and array size.
:::

## Text termination and length

:::definizione{#stringa-c titolo="Null-terminated string"}
A **C string** is a sequence of characters ending at the first null character `'\0'`. The terminator is stored in the object and has value zero. The digit character `'0'` is part of the text and has a different code. If the first element is `'\0'`, the string is empty and still occupies the cell holding the terminator. An array of `char` can contain other data after the first null. Within the array, the string starting at index $0$ ends at the first null reached from that position.
:::

:::definizione{#dimensione-e-lunghezza titolo="Capacity, sizeof and strlen"}
Let `s` be a `char` array object with capacity $B$, measured in elements. Because `sizeof(char)` is one, `sizeof s` equals $B$ C bytes. The function `strlen(s)`, declared in `<string.h>`, returns the number $\ell$ of characters before the first null. Its precondition is that the terminator lies within the array and every cell from the starting character through the terminator is readable. It follows that
$$
0\le\ell<B .
$$
The terminator occupies element `s[ell]`. The length counts units of type `char` before the null. If the text is encoded with several bytes per symbol, the number of symbols can differ from $\ell$.
:::

:::esempio{titolo="Sequence with an embedded null"}
In the declaration `char s[8] = "ab\0cd";`, the first six cells hold `'a'`, `'b'`, `'\0'`, `'c'`, `'d'` and the final null that the language appends to the literal. The remaining two cells are initialized to zero. The operator `sizeof s` gives $8$. The function `strlen(s)` gives $2$ because the first null is at index $2$. The cells containing `'c'` and `'d'` remain in the object. Their contents can be read with valid indices, while they lie outside the string starting at `s[0]`.
:::

:::attenzione
The declaration `char raw[3] = "ram";` initializes the three cells with the three visible characters and uses all the capacity. The literal also has a terminating character, but the destination array has no room for it. The resulting array is valid as a sequence of three `char` values. Using it as an argument to a function that requires a C string would violate the precondition. With `char text[4] = "ram";`, the terminator fits at index $3$.
:::

## Space for building a string

::::teorema{#capacita-stringa titolo="Capacity needed for concatenation"}
Let $u$ and $v$ be the lengths of two texts, excluding their terminators. Concatenating them into a single array of capacity $B$ and keeping a terminator at the end requires at least $u+v+1$ cells.
:::dimostrazione
The first text occupies $[0,u)$ and the second occupies $[u,u+v)$. Together they occupy $[0,u+v)$, so the terminator goes at index $u+v$. A valid index satisfies $u+v<B$. Since the quantities are integers, this is equivalent to $B\ge u+v+1$. This proof uses mathematical integers. To check the inequality with `size_t` without first forming the sum, verify $u<B$ first. Under this assumption, $B-1-u$ is representable and the second text must satisfy $v\le B-1-u$.
:::
::::

:::esempio{#costruzione-stringa titolo="Appending a character with known capacity"}
Let `s` be a valid string of length `len` in an array of capacity `cap`. To append a character `ch` different from `'\0'`, the function checks for at least two cells starting at position `len`. The caller updates the length if the function returns `true`. Assume `<stdbool.h>` and `<stddef.h>` are available.
```c
bool append_char(char s[], size_t cap, size_t len, char ch)
{
    if (len >= cap || cap - len < 2 || ch == '\0') {
        return false;
    }
    s[len] = ch;
    s[len + 1] = '\0';
    return true;
}
```
With `char s[5] = "tre";`, `len = 3` and `cap = 5`. The difference is $2$, so the character `'s'` can be written at index $3$ and the new null at index $4$. The resulting string is `"tres"`. With a capacity of four cells, the rejection branch runs before the assignments and leaves the elements unchanged. The condition `len >= cap` is evaluated first, preventing an oversized length from being subtracted from `cap`.
:::

:::osservazione
Checking the write index and checking the terminator serve two separate purposes. With $B=5$ and $\ell=4$, the last valid cell is `s[4]`, which holds the terminator. Writing a character into `s[4]` stays within the array for that single assignment. For the result to be a valid string after the append, however, `s[5]` would also be needed. Requiring two cells prevents this loss of termination.
:::

## Reading and rewriting with two indices

:::definizione{#traversata-stringa titolo="Read and write indices"}
To filter the characters of a string, keep a read index $i$ and a write index $k$, both initially zero. At the start of an iteration, the output prefix $[0,k)$ contains exactly the characters to keep among the first $i$ input characters, in their original order. The relation $k\le i$ follows because each character read produces at most one character written. If the input length is $\ell$, a capacity of at least $\ell+1$ elements covers every character write and the final null.
:::

:::esempio{titolo="Filtering without changing the order"}
Consider the string `"sasso"` and copy the characters different from `'s'` into a separate array. The output capacity is $6$, so it can also handle keeping all five characters. Assume the type `size_t` is available.
```c
char source[] = "sasso";
char out[6];
size_t k = 0;
for (size_t i = 0; source[i] != '\0'; ++i) {
    if (source[i] != 's') {
        out[k] = source[i];
        ++k;
    }
}
out[k] = '\0';
```
The loop skips the three `'s'` characters, copies `'a'` to index $0$ and copies `'o'` to index $1$. The null is written at index $2$, giving `"ao"`. If the input is empty, the condition fails at index $0$ and the null is written to `out[0]`. The empty case therefore meets the same output contract.
:::

:::osservazione
To find a nonempty pattern of length $q$ in a text of length $\ell$, each attempt checks $q$ consecutive characters. If $q>\ell$, no valid starting position exists. If $q\le\ell$, the last valid start is $\ell-q$, and only indices $j\in[0,q)$ are checked within the pattern. Visiting starts one at a time makes it possible to count overlapping occurrences. For instance, in `"ananas"` the pattern `"ana"` occurs at indices $0$ and $2$, so the count is $2$.
:::
