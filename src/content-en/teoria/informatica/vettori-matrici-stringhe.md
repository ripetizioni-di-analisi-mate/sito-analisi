---
titolo: Arrays, matrices and strings
sommario: How to traverse an array within its bounds, read a matrix row by row, and build C strings with the terminator in the correct position.
---

## Aggregate objects and valid indices

:::definizione{#vettore-c titolo="Array of elements of the same type"}
An **array** is a sequence of variables of the same type, placed one after the other in memory and referred to by a single name. The declaration `int a[5];` creates five `int` variables, called **elements**. Each element is referred to by the name of the array and an **index** in square brackets, as in `a[2]`. Indices start from zero, so for an array of length $n$ the valid indices are
$$
0\le i<n .
$$
The first element is `a[0]` and the last is `a[n - 1]`; in an array of five elements the last is `a[4]`, and `a[5]` does not exist. An array is usually processed with a loop `for (i = 0; i < n; ++i)`, in which $n$ is the first excluded index.
:::

:::definizione{#inizializzazione-vettore titolo="Initialization from a list"}
An array is initialized with a list of values in braces, assigned to the elements in order. In `int a[5] = {7, -2};` the element `a[0]` is $7$ and `a[1]` is $-2$. If the list has fewer values than there are elements, the remaining ones receive zero, so `a[2]`, `a[3]` and `a[4]` are $0$. If the size is omitted, as in `int b[] = {7, -2};`, the compiler derives it from the list, and `b` has two elements.
:::

:::esempio{titolo="Reading an initialized cell"}
In the following fragment the array has five elements, and the second line reads two of them.
```c
int a[5] = {7, -2};
int value = a[1] + a[4];
```
The element `a[1]` is $-2$, the second value of the list. The element `a[4]` does not appear in the list and is $0$. Hence `value` receives $-2+0=-2$.
:::

:::attenzione
An array declared inside a function without a list, such as `int a[5];`, is not zeroed, and its elements have unpredictable values until the program assigns them a value. Reading an element before assigning it is an error. A different error is using an index outside the range, such as `a[5]` for an array of five elements; C does not check indices, and the access has undefined behavior.
:::

## Ranges and traversal invariants

:::definizione{#intervallo-semichiuso titolo="Half-open index range"}
A part of an array is specified by two indices, the first included and the second excluded. The **half-open** interval $[lo,hi)$ contains the indices from $lo$ to $hi-1$; for example $[1,4)$ contains $1$, $2$ and $3$. With this convention the number of indices is $hi-lo$, the interval is empty when $lo=hi$, and the whole array of capacity $n$ is $[0,n)$. The endpoints must satisfy $0\le lo\le hi\le n$. An interval is divided into two non-overlapping parts by choosing an intermediate index $k$, and the parts are $[lo,k)$ and $[k,hi)$.
:::

::::teorema{#traversata-vettore titolo="Accumulator over a range"}
The following loop computes the sum of the elements with index in $[lo,hi)$. It is assumed that $0\le lo\le hi\le n$, that the elements of the interval have a value and that no intermediate sum overflows. The type `size_t`, declared in `<stddef.h>`, is the unsigned integer type used for indices and sizes.
```c
int sum = 0;
for (size_t i = lo; i < hi; ++i) {
    sum += a[i];
}
```

:::dimostrazione
The invariant is “before every check of the condition, `sum` contains the sum of the elements with index in $[lo,i)$”. At the start $i=lo$, the interval is empty and `sum` is zero. If $i<hi$, the index $i$ is valid; the body adds `a[i]` and the increment brings the index to $i+1$, so `sum` contains the sum over $[lo,i+1)$ and the invariant is preserved. The quantity $hi-i$ decreases by one at each iteration, so the loop terminates, and it terminates with $i=hi$. At that moment `sum` contains the sum over the whole of $[lo,hi)$.
:::
::::

:::esempio{titolo="Counting under a condition"}
One wants to count the negative elements of `int a[5] = {4, -1, -3, 2, -2};` in the interval $[1,4)$. One starts from a counter at zero and increases it by one when `a[i] < 0`. The indices $1$, $2$ and $3$ correspond to the values $-1$, $-3$ and $2$; the first two are negative, so the result is $2$. The element `a[4]` is negative, but the index $4$ is excluded from the interval and is not counted.
:::

:::osservazione
The length $hi-lo$ makes sense only if $lo\le hi$. If $hi<lo$ the difference would be negative, but in a `size_t` variable, which is unsigned, it becomes a huge positive number. For this reason one checks $lo\le hi$ before subtracting. For the sum, moreover, every intermediate sum must be representable and not only the final result. With a $4$-byte `int`, adding in order $2\,000\,000\,000$, $1\,000\,000\,000$ and $-2\,000\,000\,000$ the final result $1\,000\,000\,000$ is representable, but the first intermediate sum $3\,000\,000\,000$ exceeds `INT_MAX`.
:::

:::osservazione
A function that receives $lo$, $hi$ and the capacity $n$ checks the validity of the interval with `lo <= hi && hi <= n`; negative endpoints are already excluded by the type `size_t`. With $n=5$, the pair $(4,2)$ fails the first check and the pair $(3,6)$ fails the second. The pair $(5,5)$ passes both and denotes an empty interval. The second comparison is `hi <= n` and not `hi < n`, because $hi$ is the excluded endpoint; with `hi < n` even $[0,5)$, that is, the whole array, would be rejected.
:::

## Object size and parameters

:::definizione{#dimensione-vettore titolo="Size in bytes and element count"}
The `sizeof` operator applied to an array gives the number of bytes occupied by the whole array, and applied to an element gives the bytes of one element. For `int a[7];`, with a $4$-byte `int`, `sizeof a` is $28$ and `sizeof a[0]` is $4$. Since the elements all have the same size,
$$
\texttt{sizeof a}=7\cdot\texttt{sizeof a[0]} .
$$
The number of elements is therefore obtained with `sizeof a / sizeof a[0]`, which is $7$ whatever the size of an `int`. In this way, if the size in the declaration changes, the rest of the program remains correct without modifications.
:::

:::definizione{#parametro-vettore titolo="Passing an array to a function"}
When an array is passed to a function, the function receives the address of the first element and not a copy of the elements. A parameter declared `const int a[]` is in fact a **pointer**, that is, a variable that contains an address, and can equivalently be written `const int *a`; pointers are the subject of the next chapter. Inside the function one writes `a[i]` as usual, and the word `const` says that the function reads the elements without modifying them. There are two consequences. The function does not know the length of the array, which must be passed in another parameter. Inside the function `sizeof a` gives the size of an address, so the formula `sizeof a / sizeof a[0]` works only where the array is declared.
:::

:::esempio{titolo="Contract for a partial sum"}
The function computes the sum of the elements with index in $[lo,hi)$. Its contract requires that the array passed has at least $hi$ elements, that those in the interval have a value and that the intermediate sums do not overflow.
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
With `int samples[4] = {9, 1, 6, 3};` the call `sum_range(samples, 1, 4)` returns $1+6+3=10$. The call with $lo=4$ and $hi=4$ denotes an empty interval and returns $0$ without reading any element. Since the parameter is declared `const`, a statement such as `a[i] = 0;` in the body would be reported as an error by the compiler.
:::

:::osservazione
A parameter can also be declared in the form `const int a[static 4]`. It means that the caller must pass an array with at least four elements, and the compiler may report calls that do not respect this. An array of seven elements is allowed, one of three is not. The form suits functions that always read a fixed number of elements; when the length varies, or may be zero, one uses a parameter with the length.
:::

## Physical layout of rows

:::definizione{#matrice-per-righe titolo="Matrix as an array of arrays"}
A **matrix** is a table of elements arranged in rows and columns. The declaration `int m[3][4];` creates a matrix with $3$ rows and $4$ columns, that is, $12$ integers. The element in row $r$ and column $c$ is written `m[r][c]`, with $0\le r<3$ and $0\le c<4$. For C the matrix is an array of three elements, each of which is a row, that is, an array of four `int` values. In memory the rows are written one after the other, first the whole of row $0$, then row $1$, then row $2$.
:::

::::teorema{#scostamento-matrice titolo="Cell offset in row-major layout"}
Let `T m[R][C]` be a matrix with $R>0$ rows and $C>0$ columns of elements of type `T`. Since the rows are stored one after the other, the element `m[r][c]` is preceded by $k$ elements and lies $b$ bytes after the start of the matrix, with
$$
k=rC+c,\qquad b=k\,\texttt{sizeof(T)} .
$$
:::dimostrazione
Before row $r$ there are $r$ complete rows of $C$ elements each, that is, $rC$ elements. In row $r$, before column $c$ there are the elements of the columns from $0$ to $c-1$, of which there are $c$. The total is $rC+c$, and each element occupies `sizeof(T)` bytes.
:::
::::

:::esempio{titolo="Locating a grid cell"}
Consider the matrix shown in the diagram.

![Three rows with values 5, 9, 2, 7, then 4, 0, 8, 1, then 6, 3, 5, 2. The cell at row 1 and column 2 contains 8.](/immagini/informatica/vettori-matrici-stringhe/schema-teoria-en.png)

The element `m[1][2]` is $8$. Before it in memory there are the four elements of row $0$ and the elements `m[1][0]` and `m[1][1]`, in all $1\cdot4+2=6$ elements. With a $4$-byte `int` the element lies $6\cdot4=24$ bytes after the start of the matrix.
:::

:::attenzione
Even though the rows are consecutive in memory, each index must stay in its own range. In a matrix with rows of $4$ elements, `m[0][4]` is an access outside row $0$ and has undefined behavior, even though in memory `m[1][0]` is located at that point. To pass from a position $k$ counted from the start, with $0\le k<RC$, to the indices one uses division by $C$, whose quotient is the row and whose remainder is the column. With $C=4$ position $6$ gives row $1$ and column $2$.
:::

## Traversing rectangular matrices

:::definizione{#traversata-matrice titolo="Visiting cells, columns and the diagonal"}
To process all the elements of a matrix with $R$ rows and $C$ columns one uses two nested loops. The outer loop makes the row $r$ vary from $0$ to $R-1$ and, for each row, the inner one makes the column $c$ vary from $0$ to $C-1$. To process a single column $j$ one loop over the rows is enough, reading `m[r][j]`. The elements of the **main diagonal** are those whose row index equals the column index, that is, `m[i][i]`. The index $i$ must be valid both as a row and as a column, so there are $\min(R,C)$ diagonal elements; in a $3\times 4$ matrix there are three.
:::

:::esempio{titolo="Summing a column with a fixed row width"}
The function adds the elements of column `col` of a matrix with rows of four elements. In a matrix parameter the number of columns must always be written, here `[4]`, because the compiler needs it to compute the position of the elements; the number of rows is passed in the parameter `rows`. The contract requires `col < 4`.
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
With the matrix in the figure and `col = 2` the function reads $2$, $8$ and $5$ and returns $2+8+5=15$.
:::

:::osservazione
The **transpose** of a matrix is obtained by exchanging rows and columns. If `m` has $R$ rows and $C$ columns, the transpose `t` has $C$ rows and $R$ columns, and `t[c][r]` equals `m[r][c]`. It is computed with two nested loops that execute `t[c][r] = m[r][c];` for every pair of indices, using for `t` a matrix distinct from `m`.
:::

:::osservazione
Two matrices with the same total number of elements may have rows of different length, and they are not interchangeable. An `int[2][6]` matrix and an `int[3][4]` matrix both contain twelve integers, but the function `column_sum` accepts only the second, because its parameter requires rows of four elements. The element in row $1$ and column $0$ is preceded by $6$ elements in the first matrix and by $4$ in the second. To write a function that accepts matrices of any width one stores the matrix in a plain array of $R\cdot C$ elements and computes the position with the formula $rC+c$.
:::

## Text termination and length

:::definizione{#stringa-c titolo="Null-terminated string"}
In C a text is stored in an array of `char`, one character per element. To mark where the text ends, after the last character one puts a special character with value zero, written `'\0'` and called the **null character** or **terminator**. A **C string** is therefore a sequence of characters followed by the terminator. The string `"ciao"` occupies five elements, the four characters and the terminator. The null character `'\0'`, with value $0$, is different from the digit `'0'`, which is a printable character and in the ASCII code has value $48$. An empty string contains only the terminator. All the functions that work on strings read the characters up to the first terminator and ignore what the array contains after it.
:::

:::definizione{#dimensione-e-lunghezza titolo="Capacity, sizeof and strlen"}
For a string one distinguishes two numbers. The **capacity** $B$ is the number of elements of the array; for an array `s` of `char` it is given by `sizeof s`, because a `char` occupies one byte. The **length** $\ell$ is the number of characters before the terminator, and is given by the function `strlen(s)` from `<string.h>`. For `char s[10] = "ciao";` the capacity is $10$ and the length is $4$. Since one element is needed for the terminator too, we always have
$$
0\le\ell<B .
$$
The terminator is in the element with index $\ell$. `strlen` counts `char` elements and requires the array to contain a terminator; otherwise it goes on past the end of the array, with undefined behavior.
:::

:::esempio{titolo="Sequence with an embedded null"}
In the declaration `char s[8] = "ab\0cd";` the array contains in order `'a'`, `'b'`, `'\0'`, `'c'`, `'d'`, then the terminator that the compiler adds at the end of every text in double quotes, and finally two elements set to zero. The capacity `sizeof s` is $8$. The length `strlen(s)` is $2$, because the first terminator is at index $2$. The characters `'c'` and `'d'` are in the array and can be read with `s[3]` and `s[4]`, but they are outside the string.
:::

:::attenzione
The declaration `char raw[3] = "ram";` fills the three elements with the three characters and leaves no room for the terminator. The array is valid as a sequence of three characters, but it is not a string, and passing it to `strlen` or to `printf` with `%s` has undefined behavior. With `char text[4] = "ram";` the terminator is in the element with index $3$. An array that must contain a text of $\ell$ characters therefore needs at least $\ell+1$ elements.
:::

## Space for building a string

::::teorema{#capacita-stringa titolo="Capacity needed for concatenation"}
**Concatenating** two strings means writing the second right after the first. If the two strings have lengths $u$ and $v$, the array that contains the result must have capacity $B$ at least equal to $u+v+1$, that is, the characters of the two strings plus one terminator. For `"ciao"` and `"mondo"` $4+5+1=10$ elements are needed.
:::dimostrazione
The first string occupies the indices $[0,u)$ and the second the indices $[u,u+v)$, so the terminator goes at index $u+v$. This index is valid if $u+v<B$, that is, $B\ge u+v+1$. In a program that uses `size_t` it is better to avoid computing $u+v$, which might exceed the maximum of the type. One checks first $u<B$ and then $v\le B-1-u$, two comparisons that cannot overflow.
:::
::::

:::esempio{#costruzione-stringa titolo="Appending a character with known capacity"}
The function appends the character `ch` to the end of a string `s` of length `len`, contained in an array of capacity `cap`. Two elements are needed starting from index `len`, one for the character and one for the new terminator. If they are not available, the function modifies nothing and returns `false`; the type `bool` and the values `true` and `false` come from `<stdbool.h>`.
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
With `char s[5] = "tre";` we have `len = 3` and `cap = 5`. The difference `cap - len` is $2$, so `'s'` is written at index $3$ and the terminator at index $4$, and the string becomes `"tres"`. With a capacity of four elements the difference would be $1$ and the function would return `false` without writing. The condition `len >= cap` is written first because it protects the subtraction `cap - len`, which between `size_t` values would give a huge number if `len` were greater than `cap`.
:::

:::osservazione
Checking that the write index is valid is not enough. With capacity $5$ and length $4$ the element `s[4]` exists, and it is the one that contains the terminator. Writing the new character into `s[4]` would be a valid access, but it would erase the terminator, and the new terminator would go into `s[5]`, which does not exist. For this reason the function requires two free elements.
:::

## Reading and rewriting with two indices

:::definizione{#traversata-stringa titolo="Read and write indices"}
To copy only some of the characters of a string one uses two indices. The read index $i$ runs over all the characters of the source string. The write index $k$ gives the position at which to write the next character that is kept, and it increases only when a character is copied. At every moment the first $k$ elements of the result contain, in the same order, the characters to keep among the first $i$ read, and $k\le i$ holds. At the end the terminator is written at index $k$. If the source string has length $\ell$, $\ell+1$ elements are enough for the result.
:::

:::esempio{titolo="Filtering without changing the order"}
The fragment copies into `out` the characters of `"sasso"` different from `'s'`. The capacity of `out` is $6$, enough even if all five characters were kept. The loop stops when `source[i]` is the terminator.
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
The three characters `'s'` are skipped, `'a'` is copied at index $0$ and `'o'` at index $1$. At the end `k` is $2$, the terminator is written into `out[2]` and the result is `"ao"`. If the source string is empty the loop performs no iteration and the terminator is written into `out[0]`, so the result is the empty string.
:::

:::osservazione
To search for a word of length $q$ inside a text of length $\ell$ one tries every starting position and compares $q$ consecutive characters. If $q>\ell$ the word cannot occur. Otherwise the possible starting positions go from $0$ to $\ell-q$, because beyond that not enough characters remain. Trying all the positions one by one also counts occurrences that overlap; in `"ananas"` the word `"ana"` occurs at indices $0$ and $2$, so the count is $2$.
:::
