---
titolo: Searching, sorting and complexity
sommario: Specifications and invariants for searching and sorting, with counts of key comparisons and auxiliary storage.
---

## Specifying the position to find

:::definizione{#precondizione-ricerca titolo="Search contract"}
Let `a` be an array of `n` integers. Assume that positions `0` through `n - 1` are readable when `n` is positive. The smallest index at which a value `key` occurs is its **first occurrence**. The value `n` can represent absence because every readable index is strictly less than `n`. For the empty array the result is `0`, which is also the length.

The specification distinguishes membership, which needs only a Boolean answer, from a search for the first position. With duplicates, a function that promises any occurrence may return several different indices. The first-occurrence contract determines one result. The C examples use `size_t` from `<stddef.h>` for lengths and indices.
:::

:::definizione{#ricerca-lineare titolo="Scanning in index order"}
**Linear search** tests equality between the key and each element starting at index zero. Each false comparison rules out one more element. A true comparison follows the exclusion of every previous position, so the return gives the first occurrence. This method works on an array in any order.

```c
size_t linear_first(const int a[], size_t n, int key)
{
    for (size_t i = 0; i < n; ++i) {
        if (a[i] == key) {
            return i;
        }
    }
    return n;
}
```

At the guard `i < n`, the invariant is that no element of $[0,i)$ matches the key. It holds initially because that range is empty. If `a[i] == key` is false, the excluded range grows by one. When the guard is false, `i == n` and the invariant rules out the whole array.
:::

:::esempio{titolo="Index order determines the result"}
The array $(7,2,6,2,1)$ contains two values equal to $2$. A scan for this key compares $7$ first and then $2$, so it returns index $1$. The later occurrence at index $3$ is irrelevant to the contract.

If the first occurrence is at index $i$, there are $i+1$ equality comparisons because the scan starts at zero. If the value is absent, there are $n$ comparisons. For the empty array, the initial length test prevents access to any element, and there are zero comparisons with the key.
:::

## Narrowing a sorted range

:::definizione{#lower-bound titolo="Lower bound for a key"}
An array is **nondecreasing** when $a_i\le a_{i+1}$ for each adjacent pair that exists. In such an array, the **lower bound** for `key` is the first index whose element is greater than or equal to the key, or `n` when every element is smaller. The indices before the lower bound therefore contain smaller values. From the lower-bound position onward, every value is greater than or equal to the key.

To find the first occurrence, check whether the lower bound is a readable index and whether its key equals the search key. A strictly larger value at the lower bound proves absence. The values to its left are all smaller than the key, and the sorted order makes the values to its right at least as large as the value at the lower bound.
:::

::::teorema{#dicotomia-invariante titolo="Bounds and invariant of binary search"}
With a nondecreasing array as its precondition, the following function computes the lower bound. The range of elements still to examine is half-open, $[\mathrm{lo},\mathrm{hi})$.

```c
size_t lower_bound(const int a[], size_t n, int key)
{
    size_t lo = 0, hi = n;
    while (lo < hi) {
        size_t mid = lo + (hi - lo) / 2;
        if (a[mid] < key) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}
```

The bounds satisfy $0\le \mathrm{lo}\le\mathrm{hi}\le n$. Each index in $[0,\mathrm{lo})$ has an element smaller than the key. Each index in $[\mathrm{hi},n)$ has an element greater than or equal to it. The required position is therefore one of the possible boundaries from `lo` through `hi`, including both endpoints.

:::dimostrazione
Initially the two classified ranges are empty, and the inequalities on the bounds hold. When `lo < hi`, the difference `hi - lo` is positive. Integer division gives a value smaller than the difference, so `lo <= mid` and `mid < hi`. The subtraction and addition in the midpoint expression are representable because each result is between zero and `hi`. Also, `mid + 1` is at most `hi`.

If `a[mid] < key`, the sorted order extends that inequality to all earlier elements, so the excluded prefix can reach through `mid`. In the other branch, every element from `mid` onward is at least the key, so `mid` can become the new `hi`. In both cases, the length still to classify strictly decreases and remains nonnegative. At the end, the bounds coincide. The two relations in the invariant then characterize the lower bound.
:::
::::

:::esempio{titolo="The first position in a group of duplicates"}
Use key $4$ on the array $(1,3,4,4,4,7,9)$.

![Lower bound for key 4. The lo, hi, mid, a[mid] rows are (0,7,3,4), (0,3,1,3), (2,3,2,4), and finally the bounds (2,2).](/immagini/informatica/ricerca-ordinamento-complessita/schema-teoria-en.png)

The comparison at index $3$ finds an equal value, so the branch that moves the right bound sets `hi` to $3$. The comparison at index $1$ finds a smaller value and moves `lo` to $2$. At index $2$, equality narrows the range again, until both bounds equal $2$. The lower bound coincides with the first occurrence.

```c
size_t binary_first(const int a[], size_t n, int key)
{
    size_t p = lower_bound(a, n, key);
    return (p < n && a[p] == key) ? p : n;
}
```

If `p == n`, short-circuit evaluation prevents reading `a[p]`. The equality test is added only when the lower bound belongs to the array.
:::

## Counting operations and comparing growth

:::definizione{#modello-di-costo titolo="Cost model and input size"}
The **input size** for a search or sort here is the number $n$ of array elements. A **cost model** fixes which operation to count. In comparing order-based algorithms, it is common to count key comparisons. That count excludes tests on indices, counter updates, and writes. Writes give a second useful count because two algorithms can make the same number of comparisons and a different number of writes.

For each $n$, the cost can vary with the initial data. The worst case is the maximum over inputs of that size and the best case is the minimum. An estimate based on unit-cost operations describes how work grows with $n$. Available memory and the range of the index type limit the concrete instances on a C machine.
:::

:::definizione{#ordini-asintotici titolo="Upper and tight bounds"}
For nonnegative cost functions, $T\in O(g)$ means that a constant $C>0$ and a threshold $n_0$ exist such that $T(n)\le Cg(n)$ for every $n\ge n_0$. The notation $T\in\Theta(g)$ also requires a lower bound $T(n)\ge cg(n)$ for a constant $c>0$ beyond a threshold. The constants can differ, and the bounds must hold for all sufficiently large sizes.

For example, if $T(n)=4n+7$, then for $n\ge1$ we have $4n\le T(n)\le 11n$. This proves $T\in\Theta(n)$. Since $n\le n^2$ for $n\ge1$, the same cost also belongs to $O(n^2)$. The quadratic bound is a looser upper bound.
:::

::::teorema{#confronti-dicotomici titolo="Binary-search cost"}
The lower bound on $n\ge1$ elements requires at most $1+\lfloor\log_2 n\rfloor$ comparisons of `a[mid] < key`. This bound is attained on an array in which every element is at least the key. For $n=0$ the count is zero.

:::dimostrazione
With current length $m$, the branch that assigns `hi = mid` leaves $\left\lfloor\dfrac{m}{2}\right\rfloor$ elements. The other branch also discards the middle element, so it leaves at most the same number. After $k$ comparisons, at most $\left\lfloor\dfrac{n}{2^k}\right\rfloor$ elements remain. This quantity is zero when $2^k>n$. The least integer $k$ satisfying that inequality is $1+\lfloor\log_2 n\rfloor$. If all elements are at least the key, execution always takes the branch that keeps exactly $\left\lfloor\dfrac{m}{2}\right\rfloor$ elements, and the bound is attained.
:::
::::

:::esempio{titolo="Boundaries in the logarithmic count"}
If $n=13$ and all keys are at least the target, the remaining lengths are $13$, $6$, $3$, $1$, and $0$. Four comparisons reduce the length to zero. For $n=16$ under the same conditions, $8$ elements remain after the first step, and five comparisons are needed. The difference is that $2^4$ equals $16$, leaving one element after four halvings.

These sequences count only the lower-bound calculation. In the first-occurrence function, the lower bound can identify a value strictly greater than the key. In that case the final equality comparison takes place and is false. If the lower bound is `n`, the function establishes absence using only the test on indices.
:::

## Inserting a key into the prefix

:::definizione{#insertion-sort titolo="Insertion sort"}
**Insertion sort** extends a sorted prefix by one position per pass. In the pass with index `i`, it saves the key to insert and shifts the greater preceding keys right. The guard checks `j > 0` before reading `a[j - 1]`. At the end, `j` is the position for the saved key.

```c
void insertion_sort(int a[], size_t n)
{
    for (size_t i = 1; i < n; ++i) {
        int key = a[i];
        size_t j = i;
        while (j > 0 && a[j - 1] > key) {
            a[j] = a[j - 1];
            --j;
        }
        a[j] = key;
    }
}
```
:::

::::teorema{titolo="Preserving the sorted prefix"}
For each pass, the prefix $[0,i)$ is a sorted permutation of the records originally in that prefix. On completion, the whole array is a nondecreasing permutation of its input.

:::dimostrazione
The initial prefix has one element, so it is sorted. Assuming the earlier prefix is sorted, keys strictly greater than `key` make up a trailing run in the prefix. The `while` loop shifts precisely those keys and preserves their order. When the guard stops the loop, the free slot is either at the start or after a key at most `key`. Inserting the saved key preserves the order and extends the permutation by one. The property therefore holds for every pass. Arrays of length zero or one are already sorted.
:::
::::

:::osservazione
In the pass with index $i$, there are at most $i$ key comparisons. On a strictly decreasing sequence, each new key must be moved to the start, so the bound is attained in every pass. For $n\ge1$ the worst-case total is $\dfrac{n(n-1)}{2}$. On nondecreasing data, each pass's first key comparison is false, so there are $n-1$ comparisons. Count the shift writes after true comparisons separately from the final write of the saved key.
:::

:::esempio{titolo="Shifts and inversions"}
An **inversion** is a pair of initial positions in which the earlier key is strictly greater than the later one. Inserting the second key causes a shift of the first because the prefix already contains the earlier record. Thus, in this code, the number of shifts equals the number of initial inversions.

On the array $(5,2,4,2)$, the first $2$ shifts $5$. Key $4$ shifts $5$ again on the next pass. The final $2$ shifts $5$ and $4$, giving a total of four shifts. Counting the writes separately, there are also three writes of saved keys, one per pass. The pair of records with key $2$ keeps its original order and does not contribute to the inversion count.
:::

## Choosing the smallest key in the suffix

:::definizione{#selection-sort titolo="Selection sort"}
**Selection sort** finds the minimum in positions `i` through `n - 1` and swaps it with the element at `i`. The function keeps the index of the first minimum on each scan because it updates `min_index` only for a strictly smaller key.

```c
void selection_sort(int a[], size_t n)
{
    for (size_t i = 0; i < n; ++i) {
        size_t min_index = i;
        for (size_t j = i + 1; j < n; ++j) {
            if (a[j] < a[min_index]) {
                min_index = j;
            }
        }
        if (min_index != i) {
            int saved = a[i];
            a[i] = a[min_index];
            a[min_index] = saved;
        }
    }
}
```

After a pass, the extended prefix is nondecreasing and every key in it is at most every remaining key. The new key placed at the end of the prefix is a minimum of the previous suffix, which gives both properties. The swap retains all keys.
:::

:::osservazione
Pass $i$ compares exactly $n-i-1$ elements with the current minimum. For $n\ge1$ the total is $\dfrac{n(n-1)}{2}$ for every initial arrangement. The comparison count therefore belongs to $\Theta(n^2)$ in both the best and worst cases. A swap occurs only when the minimum is in a different position. This permits zero through $n-1$ swaps when $n\ge1$, because the last position has a suffix of length one.
:::

:::esempio{titolo="Two counts for the same array"}
For six equal keys, selection performs $5+4+3+2+1=15$ comparisons. Since the selected minimum stays at the first position of each suffix, it performs zero swaps. Insertion uses five comparisons, all false in the `a[j - 1] > key` test. It performs zero shifts, and the code still writes the saved key to `a[j]` on every pass. A comparison of memory traffic therefore needs to specify whether it counts shifts of one record, swaps of two records, or each individual write.
:::

## Identifying stable sorting

:::definizione{#stabilita-ordinamento titolo="Relative order of equal keys"}
A sort is **stable** if each pair of records with equal keys preserves its original relative order. Two records may have the same key and different fields. To observe their order, give each a tag that moves with the record even though comparisons use only the key.

The insertion sort shown is stable because a key equal to the one being inserted stops the shifts. The new key therefore goes after all equivalent occurrences already in the prefix. By induction, equal keys retain their original relative order.
:::

:::esempio{titolo="A swap that reverses two records"}
Consider $(2,A)$, $(2,B)$, and $(1,C)$ in this order. The first selection-sort pass chooses the unique minimum, $(1,C)$, and swaps it with $(2,A)$. The array becomes $(1,C)$, $(2,B)$, $(2,A)$. On subsequent passes the first minimum in the suffix is also its first position. Thus the final order for the equal keys is $B$ followed by $A$.

The result is sorted and contains the three input records, so it meets the sorting specification. Stability is an extra property of relative order. Keeping the first minimum by value does not prevent a swap from moving another record past its equals.
:::

## Merging already sorted runs

:::definizione{#fusione-ordinata titolo="Merging from two heads"}
Assume that $[\mathrm{lo},\mathrm{mid})$ and $[\mathrm{mid},\mathrm{hi})$ are nondecreasing runs in `a`, with `lo <= mid` and `mid <= hi`. A **merge** compares the first remaining element of each run and writes the one with the smaller key to `tmp`. The array `tmp` is writable in the same positions and uses storage disjoint from `a`. Once one run is exhausted, the tail of the other is copied.

```c
void merge_range(const int a[], int tmp[],
                 size_t lo, size_t mid, size_t hi)
{
    size_t i = lo, j = mid, k = lo;
    while (i < mid && j < hi) {
        if (a[i] <= a[j]) {
            tmp[k++] = a[i++];
        } else {
            tmp[k++] = a[j++];
        }
    }
    while (i < mid) {
        tmp[k++] = a[i++];
    }
    while (j < hi) {
        tmp[k++] = a[j++];
    }
}
```

Before each write, $[\mathrm{lo},k)$ contains all consumed elements in sorted order. The next remaining minimum must be at one of the two heads because each run is sorted. Consuming that head preserves the invariant. Choosing the left run on a tie preserves relative order when the two runs came from adjacent sections of the same array.
:::

:::esempio{titolo="Counting comparisons before the tail"}
Merging $(3,7)$ and $(4,8,9)$ requires checking $3$ against $4$, then $7$ against $4$, and finally $7$ against $8$. After writing $7$, the first run is exhausted. Values $8$ and $9$ are copied without comparing them with the first run. The merge therefore costs three key comparisons and five writes.

With two runs of positive lengths $p$ and $q$, each comparison transfers one key to the output. When the first run is exhausted, at least one element remains in the other run because both were nonempty before that transfer. This gives the upper bound $p+q-1$ on comparisons. With an empty run there are zero comparisons.
:::

:::esempio{titulo="Equal keys at the heads of both runs"}
Merge the records $(2,A),(4,B)$ and $(2,C),(3,D)$. The first comparison finds equal keys, so it writes $(2,A)$ from the left run. The next comparison has $4$ on the left and $2$ on the right and writes $(2,C)$. Then $(3,D)$ is written because $3<4$, and the tail $(4,B)$ is copied. The relative order $A,C$ matches the input.

If a comparison chose the right run on a tie, the first record written would be $(2,C)$. The order by key would still be correct, and the relative order of the two equal-key records would be reversed.
:::

## Following the divisions in merge sort

:::definizione{#merge-sort titolo="Sorting by splitting and merging"}
**Merge sort** splits a range in two, sorts each half using the same procedure, then merges the results. The base case has length zero or one. The following function receives a disjoint auxiliary array. The positions of `a` and `tmp` in the range must exist and be writable. The function `merge_range` is declared before its use.

```c
void merge_sort(int a[], int tmp[], size_t lo, size_t hi)
{
    size_t n = hi - lo;
    if (n < 2) {
        return;
    }
    size_t mid = lo + n / 2;
    merge_sort(a, tmp, lo, mid);
    merge_sort(a, tmp, mid, hi);
    merge_range(a, tmp, lo, mid, hi);
    for (size_t k = lo; k < hi; ++k) {
        a[k] = tmp[k];
    }
}
```

The function requires `lo <= hi` and chooses `mid` so that the two halves differ in length by at most one. Both lengths are less than $n$ when $n\ge2$, so the base case is reached. By induction on the lengths, the two calls return nondecreasing runs. The merge builds the entire range in order, and the copy puts it back into the input array.
:::

::::teorema{#spazio-ausiliario titolo="Work per level and reused storage"}
With $n=2^k$, for integer $k\ge0$, the number of writes that copy from auxiliary storage back to the array is $nk$. The merge sort shown has total cost $\Theta(n\log n)$ when the count includes at least those writes and comparisons, accesses, updates, and writes have unit cost. Sorting the whole array uses one auxiliary array of $n$ positions, plus the storage for active calls.

:::dimostrazione
For a power of two, on every one of the $k$ merge levels the runs partition the array. Each run is written once into auxiliary storage and once when copying back, so the copy-back step totals $n$ writes per level. This gives $nk$ writes. The total work at each level is at most a constant multiple of $n$, because each merge makes at most one comparison per element written, and the cost of all instructions is proportional to the lengths.

For general $n$, the number of merge levels is at most $\lceil\log_2 n\rceil$ for $n\ge2$. At the first $\lfloor\log_2 n\rfloor$ levels counted from the longest calls, all runs have length at least two and their merges cover $n$ elements. This also gives the lower bound on the order of growth. The child calls execute one after the other and use parts of the same auxiliary array, so $n$ positions suffice. Each activation record contains a fixed amount of data, and the maximum number of simultaneous calls is in $O(\log n)$.
:::
::::
