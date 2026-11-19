---
titolo: Pointers and dynamic memory
sommario: Follow the memory of a C17 program from its first allocation to release by tracing addresses, arrays and object lifetimes.
---

## Addresses, values and access to an object

:::definizione{#indirizzo-e-accesso titolo="Pointed-to object and dereferencing"}
Every variable occupies a position in memory, and the number of that position is its **address**. The operator `&` gives the address of a variable, so if `x` is an `int`, `&x` is the address of `x`. A **pointer** is a variable that contains an address. The declaration `int *p = &x;` creates a pointer `p` that contains the address of `x`; one says that `p` **points to** `x`. The type `int *` is read “pointer to `int`”. `p` is a variable too and in turn has an address, `&p`, of type `int **`.

The operator `*` applied to a pointer gives the variable the pointer points to; the operation is called **dereferencing**. If `p` points to `x`, writing `*p` is equivalent to writing `x`. When read, `*p` gives the value of `x`; on the left of an assignment, `*p = 14;` puts $14$ into `x`. To follow a program with pointers one keeps two pieces of information distinct, namely which variable each pointer points to and what each variable is worth.
:::

:::esempio{titolo="Copying a value and writing through an address"}
The fragment is in the body of a function and uses three variables, the integer `x`, the pointer `p` and the integer `copy`.

```c
int x = 7;
int *p = &x;
int copy = *p;
*p = 14;
```

The third line reads `x` through `p` and puts $7$ into `copy`. The fourth writes $14$ into `x` through `p`. At the end `x` is $14$ and `copy` is still $7$, because `copy` is a distinct variable that had received a copy of the value before the modification.

| Statement executed | `p` points to | `x` | `copy` |
|---|---|---:|---:|
| `int *p = &x;` | `x` | 7 | does not exist yet |
| `int copy = *p;` | `x` | 7 | 7 |
| `*p = 14;` | `x` | 14 | 7 |
:::

:::osservazione{#puntatore-nullo titolo="Explicit indication of absence"}
A pointer may also point to nothing. This state is denoted by the special value `NULL`, defined for example in `<stddef.h>`, and the pointer is said to be **null**. `NULL` is different from the address of any variable. A function that searches for an element and returns its address uses `NULL` to signal that the element is not there, and whoever calls it compares the result with `NULL` before using it.
:::

:::attenzione
A pointer declared without an initial value, such as `int *p;` inside a function, contains an unpredictable address, and even comparing it with `NULL` gives no reliable information. A pointer that initially points to nothing is declared with `int *p = NULL;`. Dereferencing a null pointer, that is, writing `*p` when `p` is `NULL`, has undefined behavior, and usually the program stops.
:::

## Effects of copies and the meaning of const

:::definizione{#alias-e-const titolo="Aliases and qualified access"}
Assigning one pointer to another copies the address. After `int *q = p;`, if `p` points to `x` then `q` points to `x` as well. Two pointers that point to the same variable are called **aliases**, and a modification made through one of them is seen through the other too. A later assignment `p = &y;` changes only `p`, whereas `q` keeps pointing to `x`.

The word `const` in a pointer declaration has two different meanings depending on its position. In `const int *p` the integer pointed to is constant, so through `p` it can be read but not modified, and `*p = 5;` is a compilation error; `p` itself can be made to point elsewhere. In `int *const p` the pointer is constant, always pointing to the same variable, whereas the integer pointed to can be modified.
:::

::::teorema{titolo="Observing a write through an alias"}
Let `p` and `q` be two pointers that point to the same `int` variable. After the assignment `*p = v;`, reading `*q` gives the value `v`, provided the variable has not been modified again in the meantime. What matters is therefore which variable the pointers point to, and not the name through which it is reached.

:::dimostrazione
The assignment writes `v` into the variable `p` points to. By hypothesis it is the same one `q` points to, so `*q` reads that variable, which contains `v`.
:::
::::

:::esempio{titolo="Changing the target of an alias"}
The fragment, in the body of a function, uses two integers and two pointers.

```c
int x = 4;
int y = 6;
int *p = &x;
int *q = p;
*p = 9;
q = &y;
*q = *p + 3;
```

After the fourth line `p` and `q` both point to `x`, and `*p = 9;` brings `x` to $9$. The line `q = &y;` makes `q` point to `y`. The last line reads `x` through `p`, obtains $9$, and writes $9+3=12$ into `y` through `q`. At the end `x` is $9$ and `y` is $12$.
:::

:::osservazione
Pointers allow a function to modify a variable of its caller. The pass-by-value rule still holds, but what is copied into the parameter is an address, and through the address the function reaches the original variable.

```c
void store(int *out, int value)
{
    *out = value;
}
```

The call `store(&x, 18)` copies the address of `x` into the parameter `out`, and `*out = value;` writes $18$ into `x`. It is the same mechanism as in `scanf("%d", &n)`. An assignment to `out` itself, such as `out = NULL;`, would modify only the local copy of the address.
:::

## Valid positions within one array

:::definizione{#passi-nello-stesso-array titolo="Offsets and differences in elements"}
The name of an array, used in an expression, is worth the address of its first element, so `a` is equivalent to `&a[0]`. An integer can be added to a pointer. If `a` is an array of $n\geq 1$ elements, `a + i` is the address of the element with index $i$, that is, `&a[i]`, and `*(a + i)` is equivalent to `a[i]`. The sum counts in elements and not in bytes, because the compiler takes the size of the type into account. The value `a + n` is the address of the position just after the last element. It does not correspond to an element, but it is allowed as a boundary with which to compare the other pointers.

The difference between two pointers into the same array gives the number of elements that separate them. If `p` points to the element with index $i$ and `q` to the one with index $j$, `q - p` is $j-i$. The result has type `ptrdiff_t`, a signed integer type declared in `<stddef.h>`. The distance in bytes is the difference multiplied by the size of one element.
:::

:::esempio{titolo="Reading a signed distance"}
Let `a` be the array `{10, 20, 30, 40}`. Take `p = a + 1`, `q = a + 3` and `end = a + 4`.

![Array a has values 10, 20, 30, 40, with p at index 1, q at index 3 and end at boundary 4.](/immagini/informatica/puntatori-e-memoria/schema-teoria-en.png)

The pointer `q` corresponds to index $3$ and `p` to index $1$, so `q - p` is $2$ and `p - q` is $-2$. With four-byte elements the two addresses are eight bytes apart. The difference `end - p` is $4-1=3$, and it is the number of elements from the one `p` points to up to the end of the array.
:::

:::attenzione
Sums and differences of pointers are defined only within one and the same array, including the position just after the last element. For an array of four elements `a + 4` is a valid boundary, but `*(a + 4)` is an access outside the array, and even just computing `a + 5` has undefined behavior. The difference between pointers into two different arrays is undefined, even if in a given execution the two arrays happen to be close in memory.
:::

## Traversing a range with an excluded endpoint

:::definizione{#intervallo-di-puntatori titolo="Half-open pointer range"}
A part of an array can be specified by two pointers instead of two indices. The interval `[first, last)` comprises the elements from the one `first` points to up to the one that precedes `last`; `last` is the excluded boundary. The two pointers must belong to the same array, with `first` not after `last`. If `first == last` the interval is empty.

A loop over an interval of pointers starts from `first`, advances with `++p` and stops when `p` equals `last`. The same loop works for the whole array, with `first = a` and `last = a + n`, and for a part of it.
:::

::::teorema{titolo="Exact counting during traversal"}
Let `first` and `last` be the boundaries of a valid interval of integers that have a value. The following fragment counts in `hits` the elements of the interval equal to `key`. The pointer is declared `const int *` because the elements are only read, and `size_t` is declared in `<stddef.h>`.

```c
size_t hits = 0;
for (const int *p = first; p != last; ++p) {
    if (*p == key) {
        ++hits;
    }
}
```

:::dimostrazione
The invariant is “at the start of every iteration `hits` is the number of elements equal to `key` in the stretch `[first, p)`”. At the start `p` equals `first`, the stretch is empty and `hits` is zero. If `p != last`, `p` points to an element of the interval; the body increases `hits` exactly when that element equals `key`, and `++p` lengthens the stretch by one element, so the invariant is preserved.

At each iteration `p` advances by one element and the positions up to `last` are finite in number, so the loop terminates with `p == last`. At that moment the stretch `[first, p)` is the whole interval.
:::
::::

:::esempio{titolo="Counting without including the endpoint"}
In the array `{4, 8, 4, 1, 4}` one sets `first = a + 1`, `last = a + 4` and `key = 4`. The loop examines the elements with indices $1$, $2$ and $3$, which are $8$, $4$ and $1$, and only the one with index $2$ equals `key`. The element with index $4$ is $4$, but it is the excluded boundary, so the result is $1$.
:::

## Lifetimes and validity of access

:::definizione{#durata-degli-oggetti-puntati titolo="Storage duration"}
A pointer is usable only as long as the variable it points to exists. The period in which a variable exists is its **storage duration**, and there are three cases.

- **Automatic duration.** A variable declared inside a function, such as `int x = 12;`, exists from when execution enters the block in which it is declared until it leaves it. On return from the function it no longer exists.
- **Static duration.** A variable declared with `static` exists for the whole execution of the program, even though its name is visible only inside the function.
- **Allocated duration.** A block of memory obtained with `malloc` exists from when it is obtained until the program releases it with `free`.

Duration is distinct from scope, which is the part of the source in which a name can be used. A variable may still exist in memory at a point of the program where its name is not visible, and be reached through a pointer.
:::

:::esempio{titolo="Obtaining an address that remains valid"}
The function returns the address of a static variable, which remains valid after the return.

```c
const int *limit_address(void)
{
    static const int limit = 120;
    return &limit;
}
```

The name `limit` is visible only inside the function, but the variable exists for the whole execution, so the caller can read its value through the address received. Two calls return the same address, because there is only one variable.
:::

:::attenzione
When a variable ceases to exist, the pointers that pointed to it are no longer usable; a pointer in this state is called a **dangling pointer**. The typical error is a function that returns the address of one of its own automatic variables, as in `int x = 5; return &x;`. On return `x` no longer exists, and using that address has undefined behavior. The same holds for a pointer to a block already released with `free`.
:::

## Requesting space in bytes and initializing it

:::definizione{#dimensione-allocazione titolo="Sizing a block before requesting it"}
So far the amount of memory was fixed when writing the program. With **dynamic allocation** the program asks for memory during execution, in the amount needed at that moment, for example for an array whose length is known only after reading the data. The function `malloc`, declared in `<stdlib.h>`, receives the number of bytes requested and returns the address of the start of the block obtained, or `NULL` if the memory is not available. The result has type `void *`, that is, “pointer to an unspecified type”, and is assigned directly to a pointer of the desired type. The contents of the block just obtained are unpredictable.

For $n$ elements of $s>0$ bytes each, $ns$ bytes are needed, and the request is written `malloc(n * sizeof *p)`. The product is computed in the type `size_t` and must not exceed its maximum `SIZE_MAX`, defined in `<stdint.h>`. This happens if and only if
$$
n \leq \left\lfloor \dfrac{\mathrm{SIZE\_MAX}}{s}\right\rfloor .
$$
The limit is computed with the integer division `SIZE_MAX / s`, and the comparison must be made before the multiplication.
:::

:::esempio{titolo="Allocating an array with an explicit bound"}
The function receives the number of elements and returns a block for `n` integers, or `NULL` if `n` is zero, if the product would exceed `SIZE_MAX` or if `malloc` fails.

```c
#include <stdint.h>
#include <stdlib.h>

int *allocate_ints(size_t n)
{
    int *p;
    if (n == 0 || n > SIZE_MAX / sizeof *p) {
        return NULL;
    }
    p = malloc(n * sizeof *p);
    return p;
}
```

The expression `sizeof *p` is the size of the type `p` points to, that is, `int`. The compiler derives it from the type without reading `p`, so it can be used even when `p` does not have a value yet. With a four-byte `int` and $n=6$ the request is for twenty-four bytes. Whoever calls the function must check that the result is different from `NULL` before using it.
:::

:::definizione{#inizializzazione-allocata titolo="Contents before the first access"}
Memory obtained with `malloc` must be filled before it is read, by assigning a value to each element. The function `calloc(n, s)` asks for memory for $n$ elements of $s$ bytes and in addition zeroes it, setting all the bits to zero. For integer types this means that every element is $0$. The standard does not guarantee that all bits zero represent the null pointer or floating-point zero, although on common computers this is the case.
:::

:::esempio{titolo="Distinguishing allocation from initialization"}
With `<stdlib.h>` included, after `unsigned char *p = calloc(4, sizeof *p);` one checks that `p` is different from `NULL`. The four elements are zero. After `p[1] = 7;` and `p[3] = 2;` the contents are $(0,7,0,2)$, with sum $9$. With `malloc` in place of `calloc` one would have to assign `p[0]` and `p[2]` explicitly as well.
:::

## Responsibility for blocks and release

:::definizione{#proprieta-del-blocco titolo="Owners and borrowed references"}
Every block obtained with `malloc` must be given back to the system with `free` when it is no longer needed; a block that is never released stays occupied to no purpose, and the error is called a **memory leak**. To avoid forgetting a release or making two, for each block one establishes which part of the program is its **owner**, that is, has the task of calling `free`. Ownership is a convention, written in the contract of the functions, and the compiler does not check it. Copying the address of a block into another pointer does not create a second block; the two pointers refer to the same memory, and only one of them is the owner.

A function that allocates a block and returns its address transfers ownership to its caller, which will have to release it on every execution path, including those that leave early because of an error.
:::

:::esempio{titolo="Completing two successive requests"}
The function allocates two integers, uses them and releases them before returning, so it is their owner from beginning to end. It returns $1$ if both allocations succeed and $0$ otherwise.

```c
int record_pair(int x, int y)
{
    int *left = malloc(sizeof *left);
    if (left == NULL) {
        return 0;
    }
    int *right = malloc(sizeof *right);
    if (right == NULL) {
        free(left);
        return 0;
    }
    *left = x;
    *right = y;
    free(right);
    free(left);
    return 1;
}
```

There are three possible paths. If the first allocation fails there is nothing to release. If the first succeeds and the second fails, the function releases `left` before returning. If both succeed, the function uses the two blocks and releases both of them. On every path, on return all the blocks obtained have been released.
:::

:::attenzione{#rilascio-e-alias titolo="Effects of free on references"}
To `free` one passes the address returned by `malloc`, `calloc` or `realloc` for a block not yet released, or `NULL`, in which case nothing happens. Releasing the same block twice, passing an address inside the block such as `p + 1`, and using the block after its release are errors with undefined behavior. After `free(p);` it is advisable to write `p = NULL;`, so that a later use by mistake can be recognized. Any other copies of the address, however, remain dangling pointers.
:::

## Resizing and preserving contents

:::definizione{#ridimensionamento-con-realloc titolo="Outcomes of realloc for a positive size"}
The function `realloc(p, bytes)` changes the size of a block already allocated, for example to lengthen an array. Here `p` is the address of the block and `bytes` the new size, greater than zero. There are two possible outcomes.

- If the memory is not available, `realloc` returns `NULL` and the old block remains valid, with its contents unchanged.
- If it succeeds, it returns the address of the block with the new size, which may be at a different point in memory. The contents are preserved up to the smaller of the old and the new size, and the added part has unpredictable contents. The old address is no longer usable, and neither are the pointers that pointed inside the old block.

For this reason the result must be put into a variable different from `p`. Writing `p = realloc(p, bytes);`, in case of failure `p` would become `NULL` and the address of the old block, still allocated, would be lost. Only after checking that the result is different from `NULL` is it copied into `p`.
:::

:::esempio{titolo="Growing capacity while preserving three integers"}
With `<stdlib.h>` included, `p` points to a block of three integers worth $7$, $11$ and $18$. The fragment brings the block to five integers.

```c
int *next = realloc(p, 5 * sizeof *p);
if (next != NULL) {
    p = next;
    p[3] = 0;
    p[4] = 0;
}
```

If `realloc` succeeds, the first three integers keep their values and the two assignments give a value to the added elements, so the contents are $(7,11,18,0,0)$. If it fails, `p` is not modified and still points to the block of three integers. In both cases `p` contains the address of the block to release at the end.
:::

:::osservazione
If `p` is `NULL`, `realloc(p, bytes)` behaves like `malloc(bytes)`. A growing array can therefore be handled with a single scheme, starting from a null pointer and a capacity of zero and using `realloc` both for the first block and for the extensions. Since the block may change position, to remember an element across a resize one keeps its index and not its address.
:::
