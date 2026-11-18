---
titolo: Pointers and dynamic memory
sommario: Follow the memory of a C17 program from its first allocation to release by tracing addresses, arrays and object lifetimes.
---

## Addresses, values and access to an object

:::definizione{#indirizzo-e-accesso titolo="Pointed-to object and dereferencing"}
An object in C is a region of memory whose contents represent a value. Given an object `x` of type `int`, the expression `&x` gives its address and has type `int *`. This value can be stored in a variable `p` of type `int *`. The variable `p` is also an object. The value stored in `p` identifies `x`, while `&p` identifies the pointer itself and has type `int **`.

If `p` points to a live `int` object, **dereferencing** it with `*p` gives an expression that designates that object. Reading the expression obtains the stored value. On the left side of an assignment, provided no qualifier prevents modification, it specifies where to write. A trace therefore records the pointer’s target and the object’s contents in separate columns.
:::

:::esempio{titolo="Copying a value and writing through an address"}
The fragment occurs in a function body. Each of the objects `x`, `p` and `copy` occupies its own storage.

```c
int x = 7;
int *p = &x;
int copy = *p;
*p = 14;
```

During the initialization of `copy`, dereferencing reads $7$ from `x`. The last statement still selects `x` as its destination and writes $14$ there. At that point `x` is $14$ and `copy` is $7$, because its value was copied before the write.

| Statement completed | Target of `p` | `x` | `copy` |
|---|---|---:|---:|
| `int *p = &x;` | `x` | 7 | not yet declared |
| `int copy = *p;` | `x` | 7 | 7 |
| `*p = 14;` | `x` | 14 | 7 |
:::

:::osservazione{#puntatore-nullo titolo="Explicit indication of absence"}
The macro `NULL`, available in `<stddef.h>` among other headers, expands to a null pointer constant. Assigning it to a pointer produces the null value of that type. A null pointer compares unequal to a pointer to an object or function. A function that looks up an object can therefore return `NULL` to report its absence. The caller compares the result with `NULL` before attempting to access an object through it.
:::

:::attenzione
An automatic pointer declared as `int *p;` has an indeterminate value until it is initialized or assigned. The test `p != NULL` requires a value that is already determinate. If the pointer initially represents absence, the declaration is `int *p = NULL;`. Dereferencing a null pointer has undefined behaviour.
:::

## Effects of copies and the meaning of const

:::definizione{#alias-e-const titolo="Aliases and qualified access"}
Two pointers are **aliases** for an object when they both designate it. The initialization `int *q = p;` copies the value of an already initialized `int *`. If `p` points to `x`, the copy makes `q` point to `x` as well. The subsequent assignment `p = &y;` changes only the value stored in `p`. In a trace diagram, one arrow moves while the other keeps its target.

In the declaration `const int *p`, the qualifier applies to the integer accessed through `p`. The expression `*p` designates a `const int`, so assigning through that expression violates the constraint that requires a modifiable lvalue. In the declaration `int *const p`, the qualifier applies to the pointer. In that case the pointed-to object can be a modifiable integer, while the initial target stays fixed throughout the lifetime of `p`.
:::

::::teorema{titolo="Observing a write through an alias"}
Let `p` and `q` be valid pointers to the same modifiable `int` object. If an assignment `*p = v;` writes a representable value and a later read through `*q` occurs before any other write, the read returns the assigned value. The criterion concerns the identity of the object designated by the two expressions.

:::dimostrazione
The destination of the assignment is the object designated by `*p`. By hypothesis, `*q` designates that same object. The later read accesses its contents after the assignment. Since the contents remain unchanged between those operations, the read returns the stored value.
:::
::::

:::esempio{titolo="Changing the target of an alias"}
Start from two distinct integers inside a function body.

```c
int x = 4;
int y = 6;
int *p = &x;
int *q = p;
*p = 9;
q = &y;
*q = *p + 3;
```

Before `q` is updated, both pointers designate `x` and the assignment sets that object to $9$. After `q = &y`, the write through `q` goes to `y`, while the read through `p` gets $9$ from `x`. The final pair of values is $(9,12)$.
:::

:::osservazione
A function receives each argument **by value**, including an address. For example, in the following definition the parameter `out` is a copy of the address passed. Writing through the copy modifies the caller’s object, provided the argument points to a writable, live `int`.

```c
void store(int *out, int value)
{
    *out = value;
}
```

The call `store(&x, 18)` writes $18$ to `x`. An assignment to the parameter `out` itself would affect the local parameter. To update a pointer variable in the caller, pass its address, which adds one level of indirection.
:::

## Valid positions within one array

:::definizione{#passi-nello-stesso-array titolo="Offsets and differences in elements"}
Let `a` be an array of $n\geq1$ elements of the same type `T`. In `a + i`, the name `a` is converted to a pointer to the first element. For an index $i$ satisfying $0\leq i<n$, `a + i` points to element `a[i]`. The value `a + n` is the **one-past pointer**. It denotes a boundary and can be compared with pointers within the same array.

If `p` corresponds to index $i$ and `q` to index $j$ in the same array, including the one-past position, `q - p` is $j-i$ when the difference is representable in `ptrdiff_t`. This signed integer type is declared in `<stddef.h>`. The difference is measured in elements. In the contiguous layout model, the signed distance in bytes is obtained by multiplying the difference by `sizeof(T)` as a mathematical quantity.
:::

:::esempio{titolo="Reading a signed distance"}
Let `a` be the array `{10, 20, 30, 40}`. Take `p = a + 1`, `q = a + 3` and `end = a + 4`.

![Array a has values 10, 20, 30, 40, with p at index 1, q at index 3 and end at boundary 4.](/immagini/informatica/puntatori-e-memoria/schema-teoria-en.png)

Since `q` is at index $3$ and `p` at index $1$, `q - p` is $3-1=2$. The opposite difference `p - q` is $-2$. On a machine where an element occupies four bytes, two elements correspond to an eight-byte distance. The value of `end - p` is $4-1=3$. This is the number of elements starting with the one designated by `p` and continuing to the end of the array.
:::

:::attenzione
Pointer arithmetic stays within the same array extended by its one-past position. For a four-element array, `a + 4` is a valid boundary, while evaluating `a + 5` has undefined behaviour. Reading or writing through `a + 4` has undefined behaviour because there is no object at that position. Subtracting pointers to elements of distinct arrays also has undefined behaviour. Addresses appearing close together in a particular execution do not meet the same-array requirement.
:::

## Traversing a range with an excluded endpoint

:::definizione{#intervallo-di-puntatori titolo="Half-open pointer range"}
A half-open range `[first, last)` in an array contains the elements from `first` through the position before `last`. Both endpoints belong to the allowed positions of the same array and the index of `first` is less than or equal to the index of `last`. The case `first == last` is the empty range. In the special case where a contract allows both endpoints to be null for an empty range, equality must end the loop before any arithmetic.

Traversing a range by address lets the same algorithm process the entire array or an internal section. The final position remains the loop boundary. The body accesses only the element immediately before that boundary or an earlier element.
:::

::::teorema{titolo="Exact counting during traversal"}
Let `first` and `last` be ordered endpoints of a valid range of initialized integers, with length representable in `size_t`. The following fragment counts the elements equal to `key`. The declarations for `size_t` from `<stddef.h>` are visible.

```c
size_t hits = 0;
for (const int *p = first; p != last; ++p) {
    if (*p == key) {
        ++hits;
    }
}
```

:::dimostrazione
At the start of each iteration, `hits` is the number of occurrences in the visited range `[first, p)`. When `p = first`, that range is empty and the counter is zero. If `p != last`, the current position denotes an element in the range. The conditional statement adds one exactly when the element equals the key. Advancing `p` then extends the visited range by one element and preserves the invariant.

The pointer advances by one element per iteration and the endpoints enclose a finite number of positions. At termination `p == last`, so the invariant applies to the whole range. The counter never exceeds its length, so every increment is representable.
:::
::::

:::esempio{titolo="Counting without including the endpoint"}
In the array `{4, 8, 4, 1, 4}`, take `first = a + 1`, `last = a + 4` and `key = 4`. The traversal visits indices $1$, $2$ and $3$, whose values are $8$, $4$ and $1$, respectively. Only index $2$ contributes to the count. The element at index $4$ also has value $4$, but it is the excluded endpoint, so the result is $1$.
:::

## Lifetimes and validity of access

:::definizione{#durata-degli-oggetti-puntati titolo="Storage duration"}
**Storage duration** determines the period for which an object’s storage is available. Three cases apply to the examples in this chapter.

- An ordinary local object, such as `int x = 12;` in a function, has automatic storage duration. For an automatic object without a variably sized type, the lifetime extends from entry into the associated block until the block ends. A call or an inner block suspends execution of the outer block while the object’s lifetime continues.
- An object declared `static` inside a block has static storage duration. It exists throughout the execution of the program, although its name is usable only within the scope of its declaration.
- An object obtained through a successful allocation has allocated storage duration, from allocation until the corresponding release.

The scope of a name concerns the part of the source in which the name can be used. The lifetime concerns the object during execution. A pointer parameter and the object it points to can have different lifetimes.
:::

:::esempio{titolo="Obtaining an address that remains valid"}
This function returns the address of an object with static storage duration.

```c
const int *limit_address(void)
{
    static const int limit = 120;
    return &limit;
}
```

The name `limit` is local to the function block. The object remains available after the return, and the caller can read its value through the returned address. Two calls return the address of the same object. The function block ends on the first return, while the static lifetime of `limit` continues.
:::

:::attenzione
When an object’s lifetime ends, the value of a pointer that designated it becomes indeterminate. For example, after leaving the block that declares an automatic integer, accessing it through an address saved before leaving the block has undefined behaviour. The same rule applies to pointers that designated a block that has been released. A trace first reconstructs the object’s lifetime and then checks whether the access falls within it.
:::

## Requesting space in bytes and initializing it

:::definizione{#dimensione-allocazione titolo="Sizing a block before requesting it"}
`malloc`, declared in `<stdlib.h>`, takes a byte count of type `size_t`. If a positive request succeeds, it returns a pointer to the block obtained. On failure it returns a null pointer. Its result has type `void *`. Assignment to an `int *` converts the value to the destination pointer type. The initial contents of a block obtained with `malloc` are indeterminate.

For $n$ elements of size $s$, where $s>0$, the mathematical request is $n s$ bytes. The product is representable in `size_t` if and only if
$$
n \leq \left\lfloor \dfrac{\mathrm{SIZE\_MAX}}{s}\right\rfloor .
$$
`SIZE_MAX`, declared in `<stdint.h>`, is the maximum value of `size_t`. Integer division of `SIZE_MAX` by the positive element size gives the bound to check before multiplication.
:::

:::esempio{titolo="Allocating an array with an explicit bound"}
The following function takes an element count and returns a block of integers to be initialized. The contract also chooses `NULL` for $n=0$, so every actual call to `malloc` uses a positive size.

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

Here `sizeof *p` uses the fixed type `int`, and its operand is not evaluated. The value of `p` is therefore irrelevant to the size computation. If `sizeof(int)` is four bytes and $n=6$, the checked request is twenty-four bytes. A representable request can still fail if storage is unavailable, so the caller checks the returned pointer in all cases.
:::

:::definizione{#inizializzazione-allocata titolo="Contents before the first access"}
With `malloc`, a program obtains storage and then writes the value of each element it will read. With `calloc(n, s)`, when $n>0$, $s>0$ and the result is non-null, the storage obtained holds $n$ elements of $s$ bytes each, with all bits initially zero. For `unsigned char`, these bits represent numerical zero. An all-zero representation is not required for a null pointer value or for floating-point zero.
:::

:::esempio{titolo="Distinguishing allocation from initialization"}
With `<stdlib.h>` included and `unsigned char *p = calloc(4, sizeof *p);`, the four elements initially have value zero if `p` is non-null. After the assignments `p[1] = 7;` and `p[3] = 2;`, the sequence is $(0,7,0,2)$. Its sum is $9$. The same sequence can be obtained with `malloc` by explicitly initializing the elements at indices $0$ and $2$ as well. A check of the pointer comes before either procedure.
:::

## Responsibility for blocks and release

:::definizione{#proprieta-del-blocco titolo="Owners and borrowed references"}
**Ownership** of a block is the responsibility for releasing it when its use is finished. It is a program convention documented in function contracts. An owning pointer retains the reference used to call `free`. A borrowed reference accesses the block during the period permitted by the owner. Copying the address creates another pointer value to the same block and leaves the number of allocations unchanged.

A function can transfer ownership by returning a pointer to a newly obtained block. The caller keeps the result if it is non-null and arranges for its release on each later exit path. To check a branch, list the live blocks and identify who is responsible for each one.
:::

:::esempio{titolo="Completing two successive requests"}
With `<stdlib.h>` included, the function uses two allocated integers for which it retains responsibility. Its return value indicates whether it could perform both writes.

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

If the first allocation fails, the function has no blocks to release. If only the first allocation succeeds, `left` retains responsibility for the single block obtained. On success there are two distinct blocks, and the releases end their respective lifetimes. The final live-block count is zero on each of the three paths.
:::

:::attenzione{#rilascio-e-alias titolo="Effects of free on references"}
`free` accepts a null pointer with no effect, or a value matching the starting address returned for a block that is still live. After release, the owner variable can be assigned `NULL`, because direct assignment to the pointer does not read its previous contents. The write affects that variable alone. A copy of the address stored elsewhere remains indeterminate and does not permit reading, comparing or releasing the object again. An interior pointer away from the start of the block is also invalid as an argument to `free`.
:::

## Resizing and preserving contents

:::definizione{#ridimensionamento-con-realloc titolo="Outcomes of realloc for a positive size"}
Let `p` be the owning pointer to a live allocated block. Let `bytes` be a strictly positive new size representable in `size_t`. The call `realloc(p, bytes)` has two relevant outcomes.

- On failure it returns `NULL`. The previous block is still available and its contents are unchanged.
- On success it returns a pointer to the new block. The contents are preserved up to the smaller of the previous size and the requested size. Any added portion has indeterminate contents. The lifetime of the previous object ends and pointers that designated it become indeterminate even if the returned storage is at the same location.

The call result is stored in a new variable. The success branch replaces the owning reference, rebuilds any needed interior pointers from the new pointer, and initializes the added elements that will be read. A zero-size request follows implementation-defined rules in C17, so the contracts in this chapter handle it before calling `realloc`.
:::

:::esempio{titolo="Growing capacity while preserving three integers"}
With `<stdlib.h>` included, suppose `p` owns a block of three integers initialized to $7$, $11$ and $18$, and the byte count for five integers is representable. The fragment runs inside a function.

```c
int *next = realloc(p, 5 * sizeof *p);
if (next != NULL) {
    p = next;
    p[3] = 0;
    p[4] = 0;
}
```

On success the first three integers keep their values, and the two writes complete initialization. The sequence becomes $(7,11,18,0,0)$. On failure the assignment to `p` is skipped and the block of three elements remains valid. A capacity stored in a separate variable is updated in the success branch. In both cases the reference held in `p` identifies the block that will need to be released.
:::

:::osservazione
With a null pointer `p` and a positive size, `realloc(p, bytes)` behaves like `malloc(bytes)`. This lets a program represent an initially empty array with zero capacity and a null owning reference, then obtain the first block with the same checks used for growth. To preserve the position of an element across a resize, save its index. If the index is within the new capacity, its pointer can be reconstructed from the successful result without reusing an address from the previous block.
:::
