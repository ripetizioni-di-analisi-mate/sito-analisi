---
titolo: Recursion and activation records
sommario: Recursive contracts, return traces, induction and analysis of call counts and depth.
---

## A function that calls itself

:::definizione{#contratto-ricorsivo titolo="Contract of a recursive function"}
A function is **recursive** when it calls itself in its own body. The idea is to solve a problem by reducing it to a smaller version of the same problem. For example, the sum of the integers from $1$ to $n$ equals $n$ plus the sum of the integers from $1$ to $n-1$, and the latter is the same problem with a smaller input. A recursive function therefore has two parts. The **base case** is the smallest case, in which the result is known directly without further calls; for the sum it is $n=0$, with result $0$. The **recursive step** calls the function on a smaller input and uses the result to build the one required.

Every call, including the inner one, must respect the precondition of the function. When writing a recursive function one checks two things separately, namely that the input passed to the inner call is admissible and closer to the base case, and that the result is rebuilt correctly.
:::

:::esempio{titolo="A contract for the sum"}
The following function takes an unsigned integer $n$ with $0\leq n\leq 20$. It returns the sum of the integers from $1$ to $n$.

```c
unsigned sum(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    return n + sum(n - 1u);
}
```

The recursive branch is executed only for $n\geq1$, so `n - 1u` lies between $0$ and $19$ and respects the precondition. The largest result is $210$, for $n=20$, and it fits in an `unsigned`. For `sum(3)` the calls follow one another with arguments $3$, $2$, $1$ and $0$. The last is the base case and returns $0$; going back one obtains $1+0=1$, then $2+1=3$, then $3+3=6$.
:::

:::osservazione
For a recursive function three properties must be verified. The arguments of the inner calls must satisfy the precondition. The chain of calls must reach a base case after a finite number of steps, that is, the function must **terminate**. The result built from that of the inner call must be the one required. For `sum` the first follows from the check on $n$; the other two are proved in the following sections, termination with a decreasing measure and the result by induction.
:::

## A measure that guarantees termination

::::teorema{#misura-decrescente titolo="Termination criterion using a natural-number measure"}
To prove that a recursive function terminates one associates with each call an integer greater than or equal to zero, called the **measure** and denoted by $\mu$, computed from its arguments; for `sum` the measure is $n$. If every inner call has a measure strictly smaller than that of the call that makes it, and every call performs a finite number of operations and of inner calls, then every call terminates. Indeed a non-negative integer cannot decrease forever.

:::dimostrazione
One proceeds by induction on the measure $m$. A call of measure $0$ cannot make inner calls, because there is no non-negative integer measure smaller than zero, so it performs a finite number of operations and terminates. Suppose now that all calls of measure smaller than $m$ terminate. A call of measure $m$ makes a finite number of inner calls, all of smaller measure, which terminate by hypothesis; since the other operations are finite in number too, the call terminates.
:::
::::

:::esempio{titolo="Reducing the argument by division"}
The function counts how many times $n$ can be halved, with integer division, before reaching zero. The domain is $0\leq n\leq127$.

```c
unsigned halves(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    return 1u + halves(n / 2u);
}
```

For $n>0$ the integer quotient $\left\lfloor\dfrac{n}{2}\right\rfloor$ is strictly smaller than $n$, so the measure $\mu(n)=n$ decreases at each call and the function terminates. Starting from $13$ the arguments are $13$, $6$, $3$, $1$ and $0$. The first four calls perform the recursive step and each adds $1$, so `halves(13)` returns $4$. In the domain there are at most seven recursive calls, because $127<2^7$.
:::

:::osservazione
The number of halvings can be obtained from the powers of two without listing the arguments. Dividing $k$ times by two with integer division is equivalent to dividing once by $2^k$. If $2^{k-1}\leq n<2^k$, after $k-1$ halvings the quotient is $1$ and after $k$ it is $0$, so `halves(n)` is $k$. For $13$ we have $2^3=8\leq13<16=2^4$, so $k=4$, in agreement with the example.
:::

:::attenzione
Writing a base case is not enough to guarantee termination; the inner calls must reach it. A function that checks $n=0$ and in the other cases calls itself with the same $n$ never terminates for $n=3$, because the measure stays $3$. The subtraction in the type used must be checked as well. With `unsigned`, `n - 1u` for $n=0$ does not give $-1$ but the maximum of the type, so an inner call made for $n=0$ too would not decrease the measure.
:::

:::esempio{titolo="Choosing a measure with two parameters"}
A function receives two non-negative integers $(a,b)$ and, when $b>0$, calls itself with $(b, a \bmod b)$, where $a\bmod b$ is the remainder of the division of $a$ by $b$; the base case is $b=0$. The first argument may increase, as in the step from $(6,15)$ to $(15,6)$, so it is not a measure. The suitable measure is the second argument, because the remainder of a division is always smaller than the divisor. Starting from $(6,15)$ the calls are $(15,6)$, $(6,3)$ and $(3,0)$, with measures $15$, $6$, $3$ and $0$. The function therefore terminates. That the result is the desired one, namely the greatest common divisor, is proved separately, in the last section of the chapter.
:::

## The state of active invocations

:::definizione{#record-attivazione titolo="Activation records in the logical model"}
Every function call needs a memory space of its own, in which to keep the parameters, the local variables and the point of the program from which to resume when the call ends. This space is called an **activation record**. When a recursive function calls itself, the new call receives a new record, distinct from that of the call that made it. For this reason the parameter `n` can be $3$ in the first call and $2$ in the second without the two values being confused.

The records accumulate on a **stack**. Each call adds its own record on top; the function that made the call stays waiting, with its record underneath. When a call ends, its record is removed from the top and the waiting function resumes from the point where it had stopped. The last record added is therefore the first to be removed.
:::

:::definizione{#traccia-ritorni titolo="Descending through calls and recovering results"}
The **trace** of a recursive function is built in two phases. On the way down one writes the arguments of the calls, one below the other, and next to each the computation left pending while waiting for the result of the inner call. Once the base case is reached one goes back up. The result of each call is inserted into the pending computation of the previous row, until the first call is reached.
:::

:::esempio{titolo="A local term for each invocation"}
For $0\leq n\leq20$, the following function sums the positive even integers through $2n$.

```c
unsigned scaled_total(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    unsigned term = 2u * n;
    unsigned smaller = scaled_total(n - 1u);
    return term + smaller;
}
```

For `scaled_total(3)` three records exist at the same time, in which `term` is $6$, $4$ and $2$. In the call with argument $0$ the function returns from the first branch and `term` is not created.

| Argument | Pending computation | Result |
|---:|---|---:|
| $3$ | $6+$ inner result | $12$ |
| $2$ | $4+$ inner result | $6$ |
| $1$ | $2+$ inner result | $2$ |
| $0$ | none | $0$ |

The call with argument $0$ returns $0$. The one with argument $1$ computes $2+0$ and returns $2$. The one with argument $2$ uses its own `term`, which is $4$, and returns $4+2=6$. The first one uses its own `term`, which is $6$, and returns $6+6=12$. The result coincides with the sum $2+4+6$.
:::

## Proving the return value

::::teorema{#induzione-ricorsiva titolo="Correctness of the recursive sum"}
For every integer $n$ with $0\leq n\leq20$, `sum` terminates and returns
$$
S(n)=\frac{n(n+1)}{2}.
$$

:::dimostrazione
The function terminates by the measure criterion, with measure $n$. The formula is proved by induction on $n$. For $n=0$ the function returns $0$ and the formula gives $\dfrac{0\cdot 1}{2}=0$. For $n\geq1$ one assumes the formula true for $n-1$, that is, that the inner call returns $\dfrac{(n-1)n}{2}$. The function adds $n$, so it returns
$$
\begin{aligned}
n+\frac{(n-1)n}{2}
 &= \frac{2n+(n-1)n}{2}\\[6pt]
 &= \frac{n(n+1)}{2}.
\end{aligned}
$$
All the values are non-negative and the largest is $210$, so the sums performed by the program do not leave the range of `unsigned` and coincide with the mathematical ones.
:::
::::

:::osservazione
Induction corresponds exactly to the structure of the function. The base case of the proof is the base case of the code, and the induction hypothesis is the statement that the inner call, with a smaller argument, returns the right value. In the induction step one therefore uses the formula only for $n-1$, and derives it for $n$.
:::

:::esempio{titolo="A second check using a difference"}
The formula can also be checked in another way. According to the code, the result for $n$ exceeds that for $n-1$ by exactly $n$. With the formula one finds
$$
S(n)-S(n-1)=\frac{n(n+1)-(n-1)n}{2}=n .
$$
The difference is exactly the term $n$ added in the code, and the initial value $S(0)=0$ coincides with the base case.
:::

## Applying the method to an array prefix

:::definizione{#ricorsione-su-prefisso titolo="Splitting off the last position of a prefix"}
Recursion applies to arrays too. The sum of the first $n$ elements of an array `a` is the sum of the first $n-1$ elements plus the element `a[n - 1]`. The base case is $n=0$, in which the sum is zero and no element is read. The measure is $n$, the number of elements still to be added. The array is the same in all the calls, and only the number of elements considered changes.

In the example one assumes $0\leq n\leq6$ with elements between $0$ and $100$, so the sum is at most $600$ and fits in an `unsigned`.

```c
#include <stddef.h>

unsigned prefix_sum(const unsigned a[], size_t n)
{
    if (n == 0) {
        return 0u;
    }
    return prefix_sum(a, n - 1) + a[n - 1];
}
```

With the elements $3$, $5$ and $1$ and $n=3$, the call with $n=1$ returns $0+3=3$, the one with $n=2$ returns $3+5=8$ and the one with $n=3$ returns $8+1=9$. In the recursive branch $n>0$ holds, so the index $n-1$ is valid.
:::

:::esempio{titolo="A base case for the maximum"}
The maximum of the first $n$ elements is the larger of the maximum of the first $n-1$ and the element `a[n - 1]`. Here the base case is $n=1$, because the maximum of a single element is the element itself, whereas an array with no elements has no maximum. The precondition is therefore $1\leq n\leq6$.

```c
#include <stddef.h>

int max_prefix(const int a[], size_t n)
{
    if (n == 1) {
        return a[0];
    }
    int previous = max_prefix(a, n - 1);
    return a[n - 1] > previous ? a[n - 1] : previous;
}
```

With the elements $-5$, $-2$ and $-8$ the calls with $n=1$, $2$ and $3$ return $-5$, $-2$ and $-2$. The base case with one element works even when all the values are negative. Choosing $n=0$ with result $0$ as the base case, for these data one would obtain $0$, which is not an element of the array.
:::

## When one call starts two more

:::definizione{#albero-chiamate titolo="Logical tree of invocations"}
When a call makes more than one inner call, the calls are represented by a **call tree**. Each call is a **node**. The node at the top, the **root**, is the initial call. Below each node one draws its **children**, that is, the calls it makes directly. The nodes without children, the **leaves**, are the base cases. Two calls with the same argument, if both are executed, are two distinct nodes. The result of a node is computed from the results of its children.
:::

:::esempio{titolo="Decomposing the fourth Fibonacci number"}
For $0\leq n\leq10$, the following function returns $F_n$, where $F_0=0$, $F_1=1$ and $F_n=F_{n-1}+F_{n-2}$ when $n\geq2$.

```c
unsigned fib(unsigned n)
{
    if (n <= 1u) {
        return n;
    }
    unsigned left = fib(n - 1u);
    unsigned right = fib(n - 2u);
    return left + right;
}
```

![Tree of fib(4) with two distinct fib(2) nodes and leaves labelled fib(0) or fib(1).](/immagini/informatica/ricorsione/schema-teoria-en.png)

The tree is read from the bottom. Each of the two nodes `fib(2)` receives $1$ from `fib(1)` and $0$ from `fib(0)` and returns $1$. The node `fib(3)` receives $1$ from `fib(2)` and $1$ from `fib(1)` and returns $2$. The root receives $2$ and $1$ and returns $3$, which is $F_4$. The value `fib(2)` is computed twice, at two different points of the tree. In the domain the largest result is $F_{10}=55$.
:::

:::osservazione
The correctness of `fib` is proved by strong induction, that is, assuming the result true for all arguments smaller than $n$ and not only for $n-1$. The two base cases return $F_0=0$ and $F_1=1$. For $n\geq2$ the two inner calls have arguments $n-1$ and $n-2$, both smaller than $n$, so by hypothesis they return $F_{n-1}$ and $F_{n-2}$; the function returns their sum, which by definition is $F_n$.
:::

:::definizione{#sequenza-chiamate titolo="Order set by separate expressions"}
In the code of `fib` the two calls are in two separate statements, so their order is determined. The call with argument $n-1$ is completed, and its result saved in `left`, before the one with argument $n-2$ begins.

Writing instead `return fib(n - 1u) + fib(n - 2u);` the result would be the same, but the order of the two calls would not be determined, because C does not fix which operand of `+` is computed first. The tree and the number of nodes are the same in the two cases; only the order in which the branches are traversed changes.
:::

:::esempio{titolo="Recording when invocations start"}
One wants to list the order in which the calls of `fib(4)` begin, in the version with the two separate statements. The list includes the base cases as well. The root has argument $4$ and starts with its left child, `fib(3)`, which in turn starts with `fib(2)`, which calls `fib(1)` and then `fib(0)`. Once `fib(2)` is complete, the node `fib(3)` calls its second child, `fib(1)`. Once `fib(3)` is complete, the root calls its second child, `fib(2)`, which calls `fib(1)` and `fib(0)`. The order is therefore $4$, $3$, $2$, $1$, $0$, $1$, $2$, $1$, $0$, nine calls in all.
:::

## Separating depth from number of calls

:::definizione{#profondita-ricorsione titolo="Maximum number of active records"}
Two different quantities are of interest for a recursive function. The **number of calls** is the total number of nodes of the tree, and measures the work done. The **depth** is the maximum number of activation records present on the stack at the same time, and measures the memory needed. A call stays on the stack until it ends, so at every moment the stack contains the nodes of a single path from the root downwards. The depth is therefore the number of nodes of the longest path from the root to a leaf.

For `fib(4)` the longest path goes through the arguments $4$, $3$, $2$, $1$, so the depth is $4$, whereas there are $9$ calls. When the left branch has ended its records have already been removed from the stack, and the right branch reuses the same space. The number of calls can also be computed without a drawing. A base case is one call. For `fib(2)` there are $1+1+1=3$ calls, for `fib(3)` there are $1+3+1=5$ and for `fib(4)` there are $1+5+3=9$.
:::

::::teorema{#ricorrenza-costo titolo="Counting a complete binary tree"}
Consider a function with integer argument $n\geq0$ that for $n=0$ is a base case and for $n>0$ makes, one after the other, two calls with argument $n-1$. The total number of calls is $N(n)=2^{n+1}-1$ and the depth is $n+1$. The work doubles each time $n$ increases, whereas the memory grows by a single record; for $n=10$ there are $2047$ calls and the depth is $11$.

:::dimostrazione
The initial call counts as one, and each of the two inner calls generates $N(n-1)$ in all. Hence $N(0)=1$ and $N(n)=1+2N(n-1)$ for $n>0$. By induction, if $N(n-1)=2^n-1$ then $N(n)$ equals
$$
1+2(2^n-1)=2^{n+1}-1.
$$
The formula holds for $n=0$ as well, because $2^1-1=1$. For the depth, while one of the two inner calls is running the stack contains in addition only the record of the initial call. So $D(0)=1$ and $D(n)=1+D(n-1)$, that is, $D(n)=n+1$.
:::
::::

:::osservazione
The number of calls is a good estimate of the time when each call performs about the same amount of operations. The depth says how many records must be on the stack at the same moment. A recursion that is too deep exhausts the space of the stack and the program stops (*stack overflow*). The bytes actually occupied and the seconds taken then depend on the compiler and on the machine.
:::

## Identifying the state to carry forward

:::definizione{#ricorsione-in-coda titolo="Recursive call in tail position"}
A recursive call is in **tail position** when it is the last operation of the function, that is, when its result is returned as it is. In `return gcd(b, a % b);` the call is in tail position. In `return n + sum(n - 1u);` it is not, because after the inner call returns the sum with `n` remains to be performed, and for this reason the record must keep `n`. A function with tail recursion has no pending computations, and can be rewritten as a loop that updates the variables instead of making the call.
:::

:::osservazione
The recursive sum is brought into tail form by adding a parameter, the **accumulator** $d$, which contains the partial sum and starts from zero. The call with $(n,d)$ makes the call with $(n-1,d+n)$, and the base case $n=0$ returns $d$. For $n=3$ the calls have arguments $(3,0)$, $(2,3)$, $(1,5)$ and $(0,6)$, and the result is $6$. The quantity $d+S(n)$, where $S(n)$ is the sum of the integers from $1$ to $n$, stays the same at every step, because $n$ moves from the sum still to be done to the accumulator. The same computation is written as a loop with two variables, `n` and the accumulator.
:::

:::esempio{titolo="Euclid with a direct call and with a loop"}
**Euclid’s algorithm** computes the greatest common divisor of two unsigned integers $a$ and $b$, not both zero. If $b>0$, let $r$ be the remainder of the division of $a$ by $b$, that is, $a=qb+r$ with $0\leq r<b$. A number that divides $a$ and $b$ also divides $r=a-qb$, and a number that divides $b$ and $r$ also divides $a=qb+r$. The pairs $(a,b)$ and $(b,r)$ therefore have the same common divisors and the same greatest common divisor. If $b=0$, the greatest common divisor is $a$.

```c
unsigned gcd(unsigned a, unsigned b)
{
    if (b == 0u) {
        return a;
    }
    return gcd(b, a % b);
}
```

The measure is $b$, which decreases at each call because the remainder is smaller than the divisor. For $48$ and $18$ the calls have arguments $(48,18)$, $(18,12)$, $(12,6)$ and $(6,0)$, and the result is $6$. The recursive call is in tail position, so the function is rewritten as a loop.

```c
unsigned gcd_loop(unsigned a, unsigned b)
{
    while (b != 0u) {
        unsigned remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
```

The remainder is saved in `remainder` before modifying `a` and `b`, because its computation uses the old values of both. At each iteration the pair `(a, b)` takes the same values as the arguments of the recursive calls. The loop ends when `b` is $0$ and returns `a`, like the base case. The result $6$ divides both $48$ and $18$.
:::

:::osservazione
Two special cases to test are those with a zero. `gcd(7, 0)` is the base case and returns $7$ at once. In `gcd(0, 7)` the remainder of $0$ divided by $7$ is $0$, so the inner call is `gcd(7, 0)`, which returns $7$.
:::
