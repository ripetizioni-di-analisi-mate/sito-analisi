---
titolo: Recursion and activation records
sommario: Recursive contracts, return traces, induction and analysis of call counts and depth.
---

## A function that calls itself

:::definizione{#contratto-ricorsivo titolo="Contract of a recursive function"}
A function is **directly recursive** when its body contains a call to that same function. At the start of each invocation, the preconditions of the contract hold. In the **base case**, the function returns the result without recursive calls. In the recursive step, it calls itself on data that satisfy the same contract and uses the result to complete the original problem.

The argument passed to the inner call specifies a new problem. For example, adding the integers from $1$ to $n$ amounts to adding $n$ to the sum through $n-1$. The case $n=0$ is the sum of an empty set and returns $0$. Treating the cases separately makes it possible to check the formation of the next problem and the construction of the result independently.
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

If the recursive branch runs, then $n\geq1$. The subtraction therefore produces an argument between $0$ and $19$. The largest expected result is $210$, so there is room for every sum in the type `unsigned` on this domain. In the trace for `sum(3)`, the requests shrink to $3$, $2$, $1$ and $0$. Starting at the base, the recovered return values are $0$, $1$, $3$ and $6$ in order.
:::

:::osservazione
The contract calls for at least three checks. The arguments of the inner calls must meet the preconditions. The process must reach directly solvable cases in finitely many steps. Finally, the operation that combines the inner results must give the required value for the original data. For `sum`, the first check follows from the test on $n$. A decreasing measure proves termination, and induction proves the value returned.
:::

## A measure that guarantees termination

::::teorema{#misura-decrescente titolo="Termination criterion using a natural-number measure"}
Let $\mu$ assign a nonnegative integer to each admissible invocation. Assume that each individual invocation performs finitely many operations apart from the recursive calls and starts finitely many calls. If every recursive call stays within the domain and has strictly smaller measure than its caller, every invocation terminates.

:::dimostrazione
Proceed by strong induction on the measure $m$. At $m=0$, a recursive call would need a natural number strictly less than zero. The local work therefore suffices and terminates. Now assume that every invocation of measure less than $m$ terminates. Each call started by an invocation of measure $m$ has smaller measure and terminates by the induction hypothesis. Since the number of calls is finite and the remaining work is finite, the invocation of measure $m$ also terminates.
:::
::::

:::esempio{titolo="Reducing the argument by division"}
For the following function, the domain is $0\leq n\leq127$. The division uses two unsigned integers, so it gives the integer quotient.

```c
unsigned halves(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    return 1u + halves(n / 2u);
}
```

For $n>0$, the value $\lfloor\dfrac{n}{2}\rfloor$ is at least zero and strictly smaller than $n$. The measure $\mu(n)=n$ therefore meets the criterion. Starting from $13$ gives $13$, $6$, $3$, $1$ and $0$. Four invocations take the recursive step, each adding one to the received result. Thus `halves(13)` returns $4$. Across the whole domain the chain has at most seven reductions, so every intermediate sum is representable.
:::

:::osservazione
For halving, powers of two give a way to check the number of reductions. After $k$ consecutive integer divisions by two, the result is the quotient on division by $2^k$. Indeed, if $n=2^kq+r$ with $0\leq r<2^k$ and $q=2t+s$ with $s$ equal to $0$ or $1$, then $n=2^{k+1}t+2^ks+r$. The final remainder is less than $2^{k+1}$, so the next quotient is $t$. For positive $n$ from $2^{k-1}$ inclusive to $2^k$ exclusive, the quotient after $k-1$ divisions is one. After the next division it is zero. For $13$, the inequality $8\leq13<16$ confirms the count of four reductions without listing all the arguments.
:::

:::attenzione
Writing a base branch in the source does not by itself give termination. If a function tests for $n=0$ and calls itself with the same $n$ otherwise, starting at $n=3$ leaves the measure at $3$ in every invocation. The base branch stays outside the logical trace. Subtraction, too, must be justified in its declared type. For example, with `unsigned` and $n=0$, subtracting one gives the maximum of the type. That subtraction therefore fails to decrease the natural-number measure.
:::

:::esempio{titolo="Choosing a measure with two parameters"}
A rule replaces the nonnegative pair $(a,b)$ with $(b,a\bmod b)$ whenever $b>0$. The first parameter can increase. For example, with $(6,15)$ the first inner call uses $(15,6)$. The useful measure is the second parameter because the remainder is always smaller than the positive divisor. After the first call, the rule produces $(6,3)$ and $(3,0)$. The measures are thus $15$, $6$, $3$ and $0$. The base case examines the second parameter and is reached at measure zero. Since the test occurs before the remainder calculation, the divisor is positive whenever the remainder is evaluated. The criterion proves termination of this sequence of transformations. Relating the requested result to the result at the base also requires a property that the transformation preserves.
:::

## The state of active invocations

:::definizione{#record-attivazione titolo="Activation records in the logical model"}
An **activation record** represents the data needed for one invocation. It includes the parameter values, the values of the local automatic objects needed and the point at which execution resumes after a call. Two invocations of the same function have separate records. For example, parameter `n` may hold one value in the initial call and another in the inner call, although both are declared by the same function body.

In the model, starting a call creates a record. The caller remains active while the callee works. When the callee returns a value, its record leaves the active sequence and the caller resumes its suspended computation. This order describes a logical stack. In C17, the choice of a physical structure with that layout depends on the implementation, which may use another layout if it preserves the required effects.
:::

:::definizione{#traccia-ritorni titolo="Descending through calls and recovering results"}
To construct a trace, record the arguments in call order on the way down. If some operation remains to be done after a return, associate it with the caller’s record. Starting from the base, recover the results in reverse order and insert each one into the suspended computation of its caller. The trace therefore distinguishes a value belonging to the active record from a value already returned.
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

For `scaled_total(3)` the three retained values of `term` are $6$, $4$ and $2$, respectively. The base call never initializes `term` because it finishes in the first branch.

| Argument | Pending computation | Return value |
|---:|---|---:|
| $3$ | $6+$ inner result | $12$ |
| $2$ | $4+$ inner result | $6$ |
| $1$ | $2+$ inner result | $2$ |
| $0$ | none | $0$ |

After the base call, the record with argument $1$ receives $0$ and returns $2$. The record with argument $2$ retains its own $4$, so it returns $6$. The initial record retains its own $6$ and returns $12$. As a check, the direct sum $2+4+6$ gives the same result. These local values show why the calculation on return uses the caller’s data.
:::

## Proving the return value

::::teorema{#induzione-ricorsiva titolo="Correctness of the recursive sum"}
For every integer $n$ with $0\leq n\leq20$, `sum` terminates and returns
$$
S(n)=\frac{n(n+1)}{2}.
$$

:::dimostrazione
For termination, apply the criterion with measure $n$, since the recursive branch runs only when $n\geq1$ and calls the function with $n-1$. Next prove the formula by induction. At $n=0$ the function returns zero and the formula gives $0$. For $n\geq1$, the induction hypothesis gives $\dfrac{(n-1)n}{2}$ for the inner call. The function adds $n$, so
$$
\begin{aligned}
n+\frac{(n-1)n}{2}
 &= \frac{2n+(n-1)n}{2}\\[6pt]
 &= \frac{n(n+1)}{2}.
\end{aligned}
$$
The intermediate values are nonnegative, and the largest result is $210$. The program’s sums are therefore representable in `unsigned`, and the algebra describes their actual results.
:::
::::

:::osservazione
The induction hypothesis applies to the inner call, whose contract is known for a smaller argument. Using the formula for the current argument before deriving it would leave the induction step unjustified. The closed form also belongs to the mathematical proof. Translating it into C would require a separate check on the product before division. On the domain used here, the product $20\cdot21$ is representable in the type in question as well.
:::

:::esempio{titolo="A second check using a difference"}
The contract predicts that the value at step $n$ exceeds the value at step $n-1$ by $n$. The formula gives
$$
S(n)-S(n-1)=\frac{n(n+1)-(n-1)n}{2}=n .
$$
The difference agrees with the term added by the code. The initial value $S(0)=0$ fixes the sequence, so checking the difference confirms the formula.
:::

## Applying the method to an array prefix

:::definizione{#ricorsione-su-prefisso titolo="Splitting off the last position of a prefix"}
Let `a` be an array accessible at least at positions $0$ through $n-1$. The sum of those positions is the sum of the prefix of length $n-1$ plus the element at index $n-1$. For $n=0$, return zero before reading any elements. The measure is the number of elements in the prefix. The same memory remains available at every call and only the limit being considered changes.

For the example, assume $0\leq n\leq6$ and element values from $0$ through $100$. The bound $600$ ensures that all sums are representable in `unsigned`.

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

With data values $3$, $5$ and $1$, the prefix of length one gives $3$. The prefix of length two gives $3+5=8$. The whole prefix gives $8+1=9$. The branch with $n>0$ accesses only index $n-1$ of the current prefix. That access is within the valid range when the preconditions hold.
:::

:::esempio{titolo="A base case for the maximum"}
The maximum of a one-element array is that element. For a longer prefix, compare the maximum already determined for the shorter prefix with the last element. This contract requires at least one element for the value to be defined. In the example, `a` is accessible at its first $n$ positions and $1\leq n\leq6$.

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

For data values $-5$, $-2$ and $-8$, the successive maxima are $-5$, $-2$ and $-2$. The result is one of the elements in the array and is at least as large as the other two. The base case at length one works when every element is negative. Using zero as an initial maximum would instead give a value outside the array for these data.
:::

## When one call starts two more

:::definizione{#albero-chiamate titolo="Logical tree of invocations"}
A **call tree** associates a node with each invocation. The root is the initial invocation. Each child corresponds to a call started directly by its parent. Leaves finish their local work without starting recursive calls. Two nodes with the same argument represent separate invocations if the program executes them separately. The parent’s return value follows from the children’s results and the data in its record.
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

Each of the two invocations with argument $2$ obtains $1+0=1$. The invocation with argument $3$ receives $1$ and $1$, so it returns $2$. The root adds $2$ and $1$ and returns $3$. The two nodes with argument $2$ calculate the same value, while each has its own parent. Recomputing the sequence directly gives $F_2=1$, $F_3=2$ and $F_4=3$. On the stated domain, the maximum return value is $55$.
:::

:::osservazione
Strong induction proves correctness of `fib`. The two base cases meet the two initial values. For $n\geq2$, the induction hypothesis gives both $F_{n-1}$ and $F_{n-2}$ because the arguments are already in the domain and are smaller than $n$. The code adds them and therefore implements the relation defining $F_n$. The values are nonnegative and the sequence is nondecreasing, so $F_{10}=55$ also bounds every sum encountered on the domain.
:::

:::definizione{#sequenza-chiamate titolo="Order set by separate expressions"}
In `fib` the initializer for `left` finishes before the initializer for `right`. Thus the call with argument $n-1$ completes before the call with argument $n-2$ starts. The caller’s record retains `left` while `right` is calculated.

Putting both calls in the operands of one `+` determines the value of the sum in the cases considered. The `+` operator leaves unspecified which operand is evaluated first. When a trace needs the order in which calls start, use the sequencing written in the code. The shape and node count of the tree can be determined even when the branch order is free, provided that both branches perform the same computations in either order.
:::

:::esempio{titolo="Recording when invocations start"}
Consider checking the chronology of `fib(4)` in the version with separate initializers. Observing the argument on entry to each invocation must occur before the base-case test so that the record includes the leaves. The first observation is $4$. The first branch records $3$, then the inner path records $2$, $1$, $0$ and its next leaf $1$. Once that branch finishes, the root starts its second child, which records $2$, $1$, $0$. The nine observations are, in order, $4$, $3$, $2$, $1$, $0$, $1$, $2$, $1$, $0$. The record distinguishes the two invocations with argument $2$ by their positions. The chronology determines how many invocations started, while depth also requires knowing when each record finishes.
:::

## Separating depth from number of calls

:::definizione{#profondita-ricorsione titolo="Maximum number of active records"}
The **depth** of an invocation in the logical model is the maximum number of simultaneously active records during its computation. Count the initial record as well. A leaf has depth one. If a call starts several children in sequence, the parent remains active while a child runs. The depth is one plus the greatest depth among the children. The total number of calls also includes branches that have already finished.

In `fib(4)` the path with arguments $4$, $3$, $2$, $1$ has four nodes. Every other path has at most four nodes, so the depth is $4$. Counting the nodes in the figure gives a different number, $9$. Once the left branch finishes, its internal records have returned their results and have left the active sequence while the right branch runs. The total can also be checked without a drawing. Each base case has one node. For `fib(2)` the root and its two children give $3$ nodes. For `fib(3)` they give $1+3+1=5$, and for `fib(4)` they give $1+5+3=9$.
:::

::::teorema{#ricorrenza-costo titolo="Counting a complete binary tree"}
Consider a computation with integer argument $n\geq0$. At $n=0$ it performs just the base case. For $n>0$, the invocation starts two calls with argument $n-1$, completing them in sequence. The total number of calls $N(n)$ is $2^{n+1}-1$, and the depth is $n+1$.

:::dimostrazione
The root contributes one node and each child starts a tree with $N(n-1)$ nodes. It follows that $N(0)=1$ and $N(n)=1+2N(n-1)$ for $n>0$. Substituting the formula for the smaller argument gives
$$
1+2(2^n-1)=2^{n+1}-1.
$$
The formula holds in the base case, so the result follows by induction. For the depth, only the additional record for the root stays active during each branch. Consequently the recurrence is $D(0)=1$ and $D(n)=1+D(n-1)$, which gives $n+1$.
:::
::::

:::osservazione
The call count measures work when each invocation performs a comparable amount of local computation. The depth tells how many invocations must be represented at the same time in the model. A C implementation may store extra data or simplify some operations. These logical measures alone do not determine actual memory in bytes or time in seconds.
:::

## Identifying the state to carry forward

:::definizione{#ricorsione-in-coda titolo="Recursive call in tail position"}
A call is in **tail position** when its return value becomes the caller’s result directly. In `return n + sum(n - 1u);` an addition remains after the return, so that case requires keeping the term. An expression of the form `return gcd(b, a % b);` can return the inner call’s result directly. Tail position makes a transformation into a loop possible when the new state depends only on data already available. Eliminating the physical record remains a choice of the implementation.
:::

:::osservazione
To turn the sum into tail recursion, add an accumulator $d$ to the state and initialize it to zero. Moving to $(n-1,d+n)$ preserves $d+S(n)$, where $S$ is the sum that remains to be performed. Since $S(n)=n+S(n-1)$, adding $n$ to the accumulator and removing it from the remaining sum keeps the total constant. At $n=0$ the result is directly $d$. For $n=3$, the accumulator values are $0$, $3$, $5$ and $6$. The intermediate sums do not exceed the initial $S(n)$, which is at most $210$ on the function’s domain. The bound also ensures that the new addition is representable. A loop can perform the same state transition in the same order while keeping a single value of $n$ and one accumulator.
:::

:::esempio{titolo="Euclid with a direct call and with a loop"}
Consider two unsigned integers $a$ and $b$, at least one of which is positive. When $b>0$, write $a=qb+r$ with $0\leq r<b$. Any common divisor of $a$ and $b$ also divides $r=a-qb$. Any common divisor of $b$ and $r$ also divides $a=qb+r$. The sets of common divisors are equal. The state $(a,b)$ can therefore be replaced by $(b,r)$ while preserving the greatest common divisor.

```c
unsigned gcd(unsigned a, unsigned b)
{
    if (b == 0u) {
        return a;
    }
    return gcd(b, a % b);
}
```

The measure $b$ decreases at every step. At $b=0$ the result is $a$. With arguments $48$ and $18$, the path is $(48,18)$, $(18,12)$, $(12,6)$ and $(6,0)$, so the result is $6$. The following loop repeats the same transformation through the same sequence of pairs.

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

The value of `remainder` is calculated before changing `a` and `b`, so the new values match the recursive call’s arguments. When the loop ends, $b=0$ and the result is the same as for the base case. As a check, $6$ divides both $48$ and $18$, and the identity $6=3\cdot18-48$ shows that every common divisor also divides $6$.
:::

:::osservazione
Check the case $b=0$ with `gcd(7,0)`, which returns $7$ directly. Check `gcd(0,7)` as well. In the second case the first remainder is $0$, so the next pair is $(7,0)$ and the return value is again $7$. The two cases test immediate termination and the transition to the base when the first input is zero, respectively. The test values complement the proof, which covers every pair in the contract.
:::
