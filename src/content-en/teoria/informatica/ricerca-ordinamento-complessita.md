---
titolo: Searching, sorting and complexity
sommario: Specifications and invariants for searching and sorting, with counts of key comparisons and auxiliary storage.
---

## Specifying the position to find

:::definizione{#precondizione-ricerca titolo="Search contract"}
**Searching** for a value in an array means finding the position where it is located. Let `a` be an array of `n` integers and `key` the value searched for, called the **key**. If the key occurs several times, the function returns the smallest index at which it occurs, that is, the **first occurrence**. If it does not occur, it returns `n`, which is not a valid index and therefore cannot be confused with a position. For an empty array the result is `0`, which coincides with `n`.

Specifying “the first occurrence” makes the result unique. In the array $(7,2,6,2,1)$ the key $2$ occurs at indices $1$ and $3$, and the required result is $1$. In the examples the type `size_t`, from `<stddef.h>`, is used for lengths and indices.
:::

:::definizione{#ricerca-lineare titolo="Scanning in index order"}
**Linear search** compares the key with the elements one after the other, starting from index zero, and stops at the first equal element. Since the elements are examined in order of index, the one found is the first occurrence. The method works on any array, even an unsorted one.

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

The loop invariant is “no element with index in $[0,i)$ equals the key”. At the start $i=0$ and the stretch is empty. If `a[i] == key` is false, the stretch without the key grows by one element. If the loop ends because `i == n`, the invariant says that the key does not occur anywhere in the array, and the function returns `n`.
:::

:::esempio{titolo="Index order determines the result"}
In the array $(7,2,6,2,1)$ the search for the key $2$ compares first $7$ and then $2$, and returns the index $1$. The second $2$, at index $3$, is never examined.

If the first occurrence is at index $i$, there are $i+1$ comparisons with the key. If the key is absent there are $n$, that is, all of them. For an empty array there are zero, because the condition `i < n` is already false at the start.
:::

## Narrowing a sorted range

:::definizione{#lower-bound titolo="Lower bound for a key"}
If the array is sorted one can search much faster. An array is **non-decreasing** when every element is less than or equal to the next, that is, $a_i\le a_{i+1}$; equal elements are allowed. In a non-decreasing array the **lower bound** of `key` is the first index whose element is greater than or equal to the key, or `n` if all the elements are smaller. In the array $(1,3,4,4,4,7,9)$ the lower bound of $4$ is $2$, that of $5$ is $5$ and that of $10$ is $7$. Before the lower bound all the elements are smaller than the key, from the bound onwards they are all greater than or equal to it.

From the lower bound $p$ one obtains the first occurrence. If $p<n$ and `a[p]` equals the key, $p$ is the first occurrence. Otherwise the key is absent, because the elements before $p$ are smaller and those from $p$ onwards are greater.
:::

::::teorema{#dicotomia-invariante titolo="Bounds and invariant of binary search"}
**Binary search** finds the lower bound in a non-decreasing array by halving at each step the stretch in which it may lie. It keeps two indices, `lo` and `hi`, which delimit the stretch $[\mathrm{lo},\mathrm{hi})$ still to be examined, and compares the key with the middle element `a[mid]`. If `a[mid]` is smaller than the key, the bound lies after `mid` and the left half is discarded; otherwise it lies at `mid` or before, and the right half is discarded.

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

The invariant consists of three conditions. We have $0\le \mathrm{lo}\le\mathrm{hi}\le n$. Every element with index in $[0,\mathrm{lo})$ is smaller than the key. Every element with index in $[\mathrm{hi},n)$ is greater than or equal to the key. The lower bound therefore always lies between `lo` and `hi`, endpoints included, and when the two indices coincide it is their common value.

:::dimostrazione
At the start `lo` is $0$ and `hi` is $n$, the two stretches already examined are empty and the invariant holds. If `lo < hi`, the integer half of $\mathrm{hi}-\mathrm{lo}$ is smaller than $\mathrm{hi}-\mathrm{lo}$, so $\mathrm{lo}\le\mathrm{mid}<\mathrm{hi}$ and `mid` is a valid index. The midpoint is computed as `lo + (hi - lo) / 2`, and not as `(lo + hi) / 2`, because the sum `lo + hi` might exceed the maximum of the type.

If `a[mid] < key`, by the ordering all the elements before `mid` are smaller than the key too, so `lo` can move to `mid + 1`. Otherwise `a[mid]` and all the following elements are greater than or equal to the key, so `hi` can move to `mid`. In both cases the invariant is preserved and the length $\mathrm{hi}-\mathrm{lo}$ decreases by at least one, so the loop ends with `lo == hi`, which is the lower bound.
:::
::::

:::esempio{titolo="The first position in a group of duplicates"}
One searches for the key $4$ in the array $(1,3,4,4,4,7,9)$, which has $n=7$ elements.

![Lower bound for key 4. The lo, hi, mid, a[mid] rows are (0,7,3,4), (0,3,1,3), (2,3,2,4), and finally the bounds (2,2).](/immagini/informatica/ricerca-ordinamento-complessita/schema-teoria-en.png)

At the start the stretch is $[0,7)$ and `mid` is $3$. Since `a[3]` is $4$, which is not smaller than the key, `hi` becomes $3$. In the stretch $[0,3)$ `mid` is $1$; `a[1]` is $3$, smaller than the key, so `lo` becomes $2$. In the stretch $[2,3)$ `mid` is $2$; `a[2]` is $4$, so `hi` becomes $2$. Now `lo` and `hi` coincide and the lower bound is $2$, which is also the first occurrence of $4$. The following function completes the search.

```c
size_t binary_first(const int a[], size_t n, int key)
{
    size_t p = lower_bound(a, n, key);
    return (p < n && a[p] == key) ? p : n;
}
```

The lower bound `p` is the first occurrence only if the key itself is at that position. If `p == n`, the condition `p < n` is false and, by short-circuit evaluation, `a[p]` is not read.
:::

## Counting operations and comparing growth

:::definizione{#modello-di-costo titolo="Cost model and input size"}
To compare two algorithms one counts how many operations they perform as a function of the **input size**, which for searching and sorting is the number $n$ of elements. One must decide which operations to count, that is, fix a **cost model**. For searching and sorting one usually counts the comparisons between elements, because the rest of the work is proportional to them. Sometimes the writes into the array are counted too, because two algorithms with the same number of comparisons may perform a different number of writes.

For the same $n$ the cost depends on the data. The **worst case** is the maximum cost over all inputs of size $n$, and the **best case** is the minimum. In linear search the best case is $1$ comparison, when the key is in the first place, and the worst case is $n$ comparisons, when it is absent.
:::

:::definizione{#ordini-asintotici titolo="Upper and tight bounds"}
What matters most about a cost is how it grows as $n$ grows, without regard to constants. The notation $T\in O(g)$, read “$T$ is big O of $g$”, means that from a certain $n$ onwards the cost $T(n)$ is at most a fixed multiple of $g(n)$; in formulas, there exist a constant $C>0$ and a threshold $n_0$ such that $T(n)\le Cg(n)$ for every $n\ge n_0$. It is an upper bound. The notation $T\in\Theta(g)$ means that $T$ lies between two multiples of $g$, that is, $T(n)\ge cg(n)$ also holds for a constant $c>0$; in this case $T$ grows exactly like $g$.

For example, if $T(n)=4n+7$, for $n\ge1$ we have $4n\le T(n)\le 11n$, so $T\in\Theta(n)$, and the cost is said to be linear. Since $n\le n^2$, $T\in O(n^2)$ holds as well, which is a true but less precise statement. Linear search has cost $\Theta(n)$ in the worst case.
:::

::::teorema{#confronti-dicotomici titolo="Binary-search cost"}
Binary search on $n\ge1$ elements performs at most $1+\lfloor\log_2 n\rfloor$ comparisons `a[mid] < key`, so its cost is $O(\log n)$. For an array of one million elements there are at most $20$ comparisons, against the million of linear search. The maximum is attained when all the elements are greater than or equal to the key. For $n=0$ there are zero comparisons.

:::dimostrazione
If the stretch has $m$ elements, after one comparison at most $\left\lfloor\dfrac{m}{2}\right\rfloor$ remain. The branch `hi = mid` leaves exactly this number, and the branch `lo = mid + 1` discards the middle element too and leaves at most as many. After $k$ comparisons at most $\left\lfloor\dfrac{n}{2^k}\right\rfloor$ elements therefore remain, and the loop ends when this quantity is zero, that is, when $2^k>n$. The smallest $k$ with this property is $1+\lfloor\log_2 n\rfloor$. If all the elements are greater than or equal to the key the first branch is always executed and the maximum is attained.
:::
::::

:::esempio{titolo="Boundaries in the logarithmic count"}
With $n=13$ and all the elements greater than or equal to the key, the lengths of the stretch are $13$, $6$, $3$, $1$ and $0$, so there are four comparisons; indeed $\lfloor\log_2 13\rfloor=3$. With $n=16$ the lengths are $16$, $8$, $4$, $2$, $1$ and $0$, and there are five comparisons, because $\log_2 16=4$.

These numbers concern the computation of the lower bound. The function that searches for the first occurrence performs in addition, when the bound is smaller than $n$, one equality comparison.
:::

## Inserting a key into the prefix

:::definizione{#insertion-sort titolo="Insertion sort"}
**Sorting** an array means arranging its elements in non-decreasing order. **Insertion sort** proceeds like someone sorting the cards in their hand. It considers the elements one at a time from the left, and inserts each one in the right place among the already sorted ones that precede it. At the step with index `i` the elements with index smaller than `i` are already sorted. One saves `a[i]` in `key`, moves the elements greater than `key` one position to the right and writes `key` in the place left free. The condition `j > 0` is written before `a[j - 1] > key`, so that by short-circuit evaluation `a[j - 1]` is not read when `j` is zero.

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
At the start of every step with index $i$ the stretch $[0,i)$ contains the same elements it contained initially, arranged in non-decreasing order. At the end the whole array contains the initial elements in non-decreasing order.

:::dimostrazione
At the first step the stretch $[0,1)$ has a single element, so it is sorted. Suppose the stretch $[0,i)$ is sorted. The elements greater than `key` occupy its final part, and the `while` loop moves all of them one position to the right, without changing their order. The loop stops when the free place is at the beginning of the array or is preceded by an element less than or equal to `key`. Writing `key` in that place the stretch $[0,i+1)$ is sorted and contains the same elements as before. An array with zero or one element is already sorted and the outer loop performs no step.
:::
::::

:::osservazione
At the step with index $i$ there are at most $i$ comparisons between elements. The worst case is an array in decreasing order, in which every element must be brought all the way to the beginning; there are $1+2+\dots+(n-1)=\dfrac{n(n-1)}{2}$ comparisons, so the cost is $\Theta(n^2)$. The best case is an array already sorted, in which at each step the first comparison is false; there are $n-1$ comparisons, and the cost is $\Theta(n)$. For $n=1000$ the two cases give $499\,500$ and $999$ comparisons.
:::

:::esempio{titolo="Shifts and inversions"}
An **inversion** is a pair of elements that are in the wrong order, that is, in which the one that comes first is greater than the one that comes after. In insertion sort every move to the right removes exactly one inversion, so the number of moves equals the number of inversions of the initial array.

In the array $(5,2,4,2)$ there are four inversions, namely $5$ with the first $2$, $5$ with $4$, $5$ with the last $2$ and $4$ with the last $2$. Inserting the first $2$ moves $5$. Inserting $4$ moves $5$. Inserting the last $2$ moves $5$ and $4$. There are four moves, like the inversions. The two elements equal to $2$ do not form an inversion and stay in their initial order.
:::

## Choosing the smallest key in the suffix

:::definizione{#selection-sort titolo="Selection sort"}
**Selection sort** looks for the smallest element of the array and swaps it with the first; then it looks for the smallest among the remaining ones and swaps it with the second, and so on. At the step with index `i` it looks for the minimum among the indices from `i` to `n - 1` and brings it to position `i`. The variable `min_index` contains the index of the minimum found so far, and is updated only when a strictly smaller element is found.

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

After the step with index $i$ the elements with indices from $0$ to $i$ are in order and are all less than or equal to the elements that follow, because the minimum of those that remained has been put in position $i$. The swap neither adds nor removes elements.
:::

:::osservazione
At the step with index $i$ there are $n-i-1$ comparisons, whatever the data. The total is $(n-1)+(n-2)+\dots+0=\dfrac{n(n-1)}{2}$, so the cost in comparisons is $\Theta(n^2)$ both in the best and in the worst case; an array already sorted saves nothing. The swaps, on the other hand, are few, at most $n-1$, because each step performs at most one.
:::

:::esempio{titolo="Two counts for the same array"}
On an array of six elements all equal, selection sort performs $5+4+3+2+1=15$ comparisons and no swap. Insertion sort performs five comparisons and no move, but it still writes `key` in its place at each step, for five writes. When comparing two algorithms one must therefore state what is being counted, that is, comparisons, swaps or single writes.
:::

## Identifying stable sorting

:::definizione{#stabilita-ordinamento titolo="Relative order of equal keys"}
When sorting data with several fields, for example students sorted by mark, two different items may have the same key. A sort is **stable** if two elements with the same key remain in the order they were in initially. To see this one writes each element as a pair (key, label), where the label distinguishes elements with the same key but does not enter the comparisons.

Insertion sort is stable. The moving stops when it meets an element equal to `key`, because the condition is `a[j - 1] > key` with strict inequality, so the new element is placed after the equal ones already present.
:::

:::esempio{titolo="A swap that reverses two records"}
One sorts by selection the elements $(2,A)$, $(2,B)$ and $(1,C)$. The first step finds the minimum $(1,C)$ and swaps it with $(2,A)$, and the array becomes $(1,C)$, $(2,B)$, $(2,A)$. The following steps change nothing. The two elements with key $2$ now appear in the order $B$, $A$, the opposite of the initial one.

The final array is sorted, so the result is correct, but selection sort is not stable. The swap has carried $(2,A)$ past $(2,B)$.
:::

## Merging already sorted runs

:::definizione{#fusione-ordinata titolo="Merging from two heads"}
**Merging** builds a single sorted stretch from two stretches that are already sorted. The two stretches are consecutive in the array `a`, namely $[\mathrm{lo},\mathrm{mid})$ and $[\mathrm{mid},\mathrm{hi})$ with `lo <= mid` and `mid <= hi`, and the result is written into a second array `tmp`, distinct from `a`. At each step one compares the first elements not yet copied of the two stretches and copies the smaller one into `tmp`. When one of the two stretches is finished, what remains of the other is copied.

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

The indices `i` and `j` give the first element not yet copied of the two stretches, and `k` the position at which to write. The smallest element among those not yet copied is necessarily the first of one of the two stretches, because each stretch is sorted; for this reason it is enough to compare `a[i]` and `a[j]`. In case of a tie the condition `a[i] <= a[j]` copies the element of the left stretch, and this makes merging stable.
:::

:::esempio{titolo="Counting comparisons before the tail"}
One merges $(3,7)$ and $(4,8,9)$. The comparison between $3$ and $4$ copies $3$. The comparison between $7$ and $4$ copies $4$. The comparison between $7$ and $8$ copies $7$. The first stretch is finished, so $8$ and $9$ are copied without further comparisons. In all there are three comparisons and five writes.

In general, for two non-empty stretches of lengths $p$ and $q$ each comparison copies one element, and when one stretch is finished at least one element remains in the other, which is copied without comparisons. There are therefore at most $p+q-1$ comparisons. The cost of merging is proportional to the total number of elements.
:::

:::esempio{titulo="Equal keys at the heads of both runs"}
One merges $(2,A),(4,B)$ and $(2,C),(3,D)$. In the first comparison the keys are equal and $(2,A)$ is copied, which belongs to the left stretch. Then $4$ and $2$ are compared and $(2,C)$ is copied; then $4$ and $3$ and $(3,D)$ is copied; finally $(4,B)$ is copied. The two elements with key $2$ are in the order $A$, $C$, as at the start.

With the condition `a[i] < a[j]` in place of `a[i] <= a[j]`, in case of a tie $(2,C)$ would be copied first. The result would still be sorted, but merging would no longer be stable.
:::

## Following the divisions in merge sort

:::definizione{#merge-sort titolo="Sorting by splitting and merging"}
**Merge sort** is a recursive algorithm. It divides the stretch to be sorted into two halves, sorts each half by calling itself, and then merges the two sorted halves. The base case is a stretch with zero or one element, which is already sorted. The function also receives the auxiliary array `tmp`, of the same length as `a`, into which `merge_range` writes the result of the merge, which is then copied back into `a`.

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

The precondition is `lo <= hi`. For $n\ge2$ the two halves have lengths that differ by at most one and are both smaller than $n$, so the recursive calls reach the base case. By induction on the length, the two calls leave the two halves sorted; merging produces in `tmp` the whole sorted stretch, and the final loop copies it back into `a`. For $(5,2,4,1)$ the two halves $(5,2)$ and $(4,1)$ become $(2,5)$ and $(1,4)$, and merging gives $(1,2,4,5)$.
:::

::::teorema{#spazio-ausiliario titolo="Work per level and reused storage"}
Merge sort has cost $\Theta(n\log n)$ in every case, counting comparisons and writes. It uses an auxiliary array of $n$ elements, in addition to the space for the recursive calls, whose depth is $O(\log n)$. In particular, for $n=2^k$ with $k\ge0$ an integer the writes that copy back from `tmp` to `a` are exactly $nk$. For $n=1000$, $n\log_2 n$ is about $10\,000$, against the half million comparisons of the worst case of insertion sort and selection sort.

:::dimostrazione
Consider first $n=2^k$. The calls are arranged in levels, that is, one stretch of $n$ elements, two of $\dfrac{n}{2}$, four of $\dfrac{n}{4}$, down to the stretches of one element. There are $k$ levels at which a merge takes place, and at each of them the merged stretches together cover all $n$ elements. Each element is written once into `tmp` and once copied back into `a`, so there are $n$ copies back per level and $nk$ in all. The work of each level is proportional to $n$, because each merge performs at most one comparison per element copied; the total is proportional to $nk=n\log_2 n$.

For arbitrary $n$ there are at most $\lceil\log_2 n\rceil$ merge levels, and in the first $\lfloor\log_2 n\rfloor$ the merges cover all $n$ elements, so the cost remains $\Theta(n\log n)$. The two recursive calls are executed one after the other and use different parts of the same array `tmp`, for which $n$ elements are therefore enough. On the stack there are at most $O(\log n)$ activation records at the same time, each of fixed size.
:::
::::
