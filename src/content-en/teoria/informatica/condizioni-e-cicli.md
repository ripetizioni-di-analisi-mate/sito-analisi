---
titolo: Conditionals, loops and invariants
sommario: From guards and selection to proofs of loop correctness and termination in C.
---

## Expressions that determine the next step

:::definizione{#verita-scalare titolo="Truth value of a scalar"}
The controlling expressions of `if` statements and loops in C have scalar type. For an integer condition, zero is false and every nonzero integer is true, including negative integers. A comparison such as `x < 10` produces a value of type `int` that is exactly `0` or `1`. The same convention applies to equality `==`, inequality `!=`, and the logical operators.

The **state** includes the values of the variables at a point in the program. A **guard** is the condition that decides whether to execute a branch or another iteration. In the state `x = -6`, the guard `x` is true, while `x > 0` is false. The two expressions describe different properties of the same integer, so the choice depends on the property the problem calls for.
:::

:::definizione{#cortocircuito titolo="Short-circuit evaluation"}
The `&&` and `||` operators evaluate the left operand first. In a conjunction, a false first operand gives a result of `0` and the right operand is skipped. In a disjunction, a true first operand gives a result of `1` and the right operand is skipped. In the remaining cases, the second evaluation determines the result. The `!` operator produces `1` when its operand is zero and `0` when its operand is nonzero.

Because `&&` takes precedence over `||`, the expression `a || b && c` groups the last two operands. Parentheses express the grouping `(a || b) && c`, in which the value of `c` contributes when the first disjunction is true.
:::

:::esempio{titolo="Guarding an integer division"}
The fragment checks whether the integer quotient exceeds `3` after checking that the divisor is nonzero.

```c
int numerator = 18, divisor = 0;
int ok = divisor != 0 && numerator / divisor > 3;
```

With the given values, the first comparison is false, so `ok` is `0` and the division is skipped. With `divisor = 4`, the first comparison is true, so the integer quotient `18 / 4` is evaluated and equals `4`. The comparison `4 > 3` is true and `ok` is `1`. With `divisor = 6` the division is defined, but the quotient is exactly `3`, so the strict comparison produces `0`.
:::

:::attenzione
In the expression `0 < x < 10` the first comparison produces `0` or `1`. Both results are less than `10`, so the entire expression is true even when `x = 12`. The expression `0 < x && x < 10` tests both inequalities directly.

Short-circuit evaluation also applies to side effects. If `count = 2`, the disjunction `count > 0 || ++count == 3` is `1` and `count` is still `2`, because the right operand is skipped.
:::

## Choosing which branch to execute

:::definizione{#selezione-if titolo="Selection with if"}
With `if (condition) statement`, the controlled statement executes when the condition is true. If the `else` clause is present, exactly one of the two branches executes. Braces group several statements into a single block. In an `else if` chain, each guard is evaluated only if all earlier guards are false. A true guard determines the block to execute and completes the selection. A final `else`, when present, covers the states in which every previous comparison is false.

An execution trace can record the guards in the order in which they are tested. Two consecutive `if` statements are separate selections. Both can execute their branch if the corresponding conditions are true when they are evaluated.
:::

:::esempio{titolo="Partitioning values at two thresholds"}
The fragment assigns an integer category to each value of `t`. The first threshold is `0` and the second is `7`.

```c
int t = 7, band;
if (t < 0) {
    band = -1;
} else if (t < 7) {
    band = 0;
} else {
    band = 1;
}
```

To enter the second branch, both `t >= 0` and `t < 7` must hold. Its range therefore includes the integers from `0` to `6`. For the given value `t = 7` both guards are false, and the third branch assigns `1`. If `t = 6`, the second guard is true and determines category `0`. With `t = -1`, the first branch is entered directly, so the second comparison is skipped.
:::

:::definizione{#selezione-switch titolo="Selection with switch"}
The controlling expression of a `switch` has integer type and undergoes the integer promotions. Each `case` label requires an integer constant expression. The values of these expressions, converted to the promoted type, must all be distinct and identify the points in the body at which execution can resume. If the controlling value matches a constant, execution starts at the corresponding label. When no constant matches, a `default` label supplies the entry point if present. With no `default` and no match, the body is skipped.

After entry, the statements are executed in their written order. A later label supplies another possible entry point and by itself allows execution to proceed. This behavior is called **fall-through**. A `break` whose target is the `switch` ends the selection.
:::

:::attenzione
With two nested `if` statements, an `else` is attached to the nearest preceding `if` to which the grammar still permits an `else` to be attached. For example, if `if (x > 0)` directly controls `if (y > 0) s = 1; else s = -1;`, the alternative assignment belongs to the selection on `y`. With `x = 0` the whole inner `if` is skipped. A block enclosed in braces lets the selection on `y` end before the `else` for the selection on `x` is written.
:::

## Testing before and after the body

:::definizione{#ciclo-while titolo="The while loop"}
In a `while` loop, the condition is evaluated before the body. A true condition starts an iteration and, when the body reaches its end normally, control returns to the guard. A false condition transfers control to the statement after the loop. If the first check is false, the body executes zero times.

A **trace table** can reconstruct the execution with one row per guard evaluation, including the false evaluation that ends the loop. Its columns record only the state needed to evaluate the guard and compute the update. The last row also shows the state available after the loop.
:::

:::esempio{titolo="Tripling up to a threshold"}
The program counts the multiplications by three needed to make `p` at least `13`.

```c
int p = 1, steps = 0;
while (p < 13) {
    p *= 3;
    ++steps;
}
```

| `p` at the guard | `steps` | Outcome |
|---:|---:|---|
| 1 | 0 | true |
| 3 | 1 | true |
| 9 | 2 | true |
| 27 | 3 | false |

The last value used in the body is `9` because it is the last entry state with a true guard. The final value is `27` because the update completes before the next check. The value can therefore exceed the threshold.
:::

:::definizione{#ciclo-do titolo="The do while loop"}
In a `do while` loop, control reaches the body before evaluating the guard. When execution reaches the trailing test, a true condition starts another execution of the body and a false condition ends the loop. The syntax requires a semicolon after the closing parenthesis of the condition.

```c
int x = 9;
do {
    x -= 2;
} while (x > 10);
```

The update produces `x = 7` before the first test, so the comparison with `10` is false and the loop ends. The sequence contains one update. Starting from `9` with an initial guard `x > 10` would result in zero updates. The position of the first check determines what happens for boundary input values.
:::

:::osservazione
In a `while` loop that exits on a false guard, with $k$ complete executions of the body and no early exit, the guard is evaluated $k+1$ times. The first $k$ evaluations are true and the last is false. Under the same conditions, a `do while` loop has $k$ checks for $k$ complete executions, because each check follows the body. These counts distinguish the operations in the guard from those in the body.
:::

## Counters and bounds in for loops

:::definizione{#ciclo-for titolo="Stages of the for loop"}
A `for` loop has an initialization, a controlling condition, and an update. The initialization executes once on entry. The condition is checked before each possible iteration. After an execution of the body that reaches its end, the update executes and the condition is evaluated again. If the initialization declares a counter, its name is visible in the remainder of the declaration and throughout the loop, so the condition and the update can both use it. An omitted condition is treated as always true.

When counting iterations, separate the values used by the body from the first value that makes the condition false. If the body modifies the counter or other values on which the condition depends, the sequence of values follows from the updates that actually execute.
:::

::::teorema{#intervalli-discreti titolo="Counting with a positive step"}
Let $a,b$ be integers and let $d>0$ be an integer. Consider a `for` loop with initial counter $a$, guard `i < b`, and update `i += d`, where `b` and `d` represent the corresponding mathematical values. Suppose that each execution of the body terminates, the body leaves the counter, the bound and the step unchanged, the loop exits via its guard, and all updates are representable. If $a\ge b$, there are zero iterations. If $a<b$, the number $m$ of iterations is

$$
m=\left\lceil\frac{b-a}{d}\right\rceil .
$$

:::dimostrazione
After $j$ updates the counter is $a+jd$. This holds for $j=0$, and if it holds for $j$, adding $d$ gives $a+(j+1)d$. The loop therefore exits at the first $j$ for which $a+jd\ge b$. When $a<b$ the inequality is equivalent to $j\ge \dfrac{b-a}{d}$, so the least admissible integer is the ceiling.
:::
::::

:::esempio{titolo="Traversing a half-open interval"}
With a step of $1$, a loop from $a$ inclusive to $b$ exclusive, where $a\le b$, visits $b-a$ integers. The interval $[a,b)$ makes it explicit that $a=b$ gives zero visits. With step $3$ and interval $[5,19)$, the data give

$$
m=\left\lceil\frac{19-5}{3}\right\rceil
 =\left\lceil\frac{14}{3}\right\rceil=5 .
$$

The visited values are $5$, $8$, $11$, $14$, and $17$. The update from $17$ to $20$ takes place after the last execution of the body. Since $20\ge 19$, the loop exits after five visits.
:::

:::attenzione
Representability also matters for the last update. For an `int` counter, the guard `i <= INT_MAX` admits the value `INT_MAX`. A subsequent increment has a mathematical result outside the range of `int`, so its behavior is undefined. An exclusive bound `i < n`, with representable `n`, executes the last iteration at `i = n - 1` and keeps the final increment within the type when the starting value is below `n` and the step is one.
:::

## Exiting and proceeding to the next test

:::definizione{#interruzione-break titolo="Exiting with break"}
A `break` terminates the innermost loop or `switch` that lexically encloses it. Execution resumes with the statement that follows the terminated control statement. A `break` in a `for` body also skips the loop's update expression. The state after an early exit reflects the assignments already executed and the conditions that hold where `break` is reached.
:::

:::definizione{#salto-continue titolo="The next test after continue"}
A `continue` transfers control to the continuation point of the innermost loop that encloses it. In a `for` loop, this point precedes evaluation of the update expression and the next guard. In a `while` or `do while` loop, control goes directly to the guard. Statements later in the current body are skipped. The position of the increment therefore matters when an execution path ends with `continue`.
:::

:::esempio{titolo="Updating before a possible jump"}
The fragment adds the odd values from `1` through `5`. It updates the counter before the selection that can cause a jump.

```c
int i = 0, sum = 0;
while (i < 5) {
    ++i;
    if (i % 2 == 0) {
        continue;
    }
    sum += i;
}
```

The values produced by `++i` are `1`, `2`, `3`, `4`, and `5`. For `2` and `4`, execution returns directly to the guard with the updated value of `i`. The retained terms give `1 + 3 + 5 = 9`. If the only update of `i` were after the `continue`, a jump on an even value would bring the same value back to the guard and the next iteration would repeat the jump.
:::

:::osservazione
When a `switch` appears inside a loop, a `break` in its body normally ends the `switch`. Execution can therefore continue with other statements in the loop body. A `continue` within the same `switch` belongs to the innermost loop enclosing it, because only an iteration statement supplies a continuation point for `continue`. The statements' structure identifies the destinations without tracing all of the values.
:::

## Reasoning about two levels of repetition

:::definizione{#cicli-annidati titolo="Outer and inner loops"}
Two loops are nested when the body of the outer loop contains the inner loop. Each outer iteration enters the inner loop and executes its initialization again, if present. The inner iterations can be identified by pairs $(i,j)$, where $i$ is the outer index and $j$ is the inner index. If $m_i$ is the number of inner iterations for row $i$, the total count is the sum of all the $m_i$.

When $m_i$ is the same integer $c$ for all $r$ outer iterations, the sum is $rc$. If the inner guard uses $i$, first determine which values of $j$ are allowed in a fixed row.
:::

:::esempio{titolo="Counting a triangular set of pairs"}
An accumulator counts the integer pairs $1\le i\le j\le 4$.

```c
int count = 0;
for (int i = 1; i <= 4; ++i) {
    for (int j = i; j <= 4; ++j) {
        ++count;
    }
}
```

For $i=1$ there are four possible values of $j$. For $i=2$ there are three values, from $2$ to $4$. In general, row $i$ has $4-i+1$ values. This gives $4+3+2+1=10$. As a combinatorial check, each pair with unequal indices chooses two distinct numbers out of four, so there are six such pairs. The four pairs with $i=j$ bring the total to ten.
:::

:::osservazione
A `break` within the inner loop can reduce a single $m_i$. For instance, let $i$ be $2$, $3$, or $4$, try values of $j$ in order from $1$, and end the inner loop when `j % i == 0`, before counting that iteration. The first positive multiples encountered are $2$, $3$, and $4$, respectively. Thus $1$, $2$, and $3$ iterations reach the accumulator in the three separate rows. If the problem asks how many times the body started executing, the execution of the body that reaches `break` has to be included separately.
:::

## Properties preserved at the loop test

:::definizione{#invariante-di-ciclo titolo="Invariant at the loop head"}
A property is a **loop invariant** at the test point if it holds before the first evaluation of the guard and at every subsequent return to that point. The property refers to values in the state and can include mathematical quantities the code itself does not compute. To verify it, prove initialization and preservation. In the preservation step, assume that the property holds in the entry state, then prove that every transition of the body back to the test point preserves it.

Choosing the test point specifies which values enter the relation. A property required at the guard can temporarily fail during the body and become true again after all updates have run.
:::

::::teorema{#correttezza-parziale titolo="Normal exit with an invariant"}
Consider a `while` loop whose guard evaluation leaves the state unchanged and whose operations are defined in the states under consideration. Assume that executions that exit the loop do so on a false guard. If $P$ holds initially and each execution of the body that returns to the guard from a state where $P$ holds and the guard is true preserves $P$, then each exit satisfies both $P$ and the negation of the guard.

:::dimostrazione
At the first test, $P$ holds by assumption. If the guard is true at a test, preservation gives $P$ when control next returns to the condition. By induction, $P$ therefore holds at every test that is reached. Normal exit takes place on a false evaluation. Since the evaluation leaves the state unchanged, both required properties hold on exit.
:::
::::

:::esempio{titolo="Accumulating the first positive integers"}
At each return to the condition, `s` contains the sum of the first `i` positive integers.

```c
int i = 0, s = 0;
while (i < 4) {
    ++i;
    s += i;
}
```

![States at the test i less than 4. The points are (0,0), (1,1), (2,3), (3,6), and (4,10).](/immagini/informatica/condizioni-e-cicli/schema-teoria-en.png)

The invariant combines $0\le i\le 4$ with $s=\sum_{k=1}^{i} k$, where the empty sum equals zero. Initially $i=s=0$. If the guard is true, $i<4$ and the new counter is $i'=i+1\le 4$. Because the assignment to `s` uses the new counter, the updated state satisfies

$$
s'=s+i'=\sum_{k=1}^{i}k+(i+1)=\sum_{k=1}^{i'} k .
$$

On the false guard, $i\ge 4$, so the invariant yields $i=4$. The formula for the sum gives $s=\dfrac{4\cdot 5}{2}=10$, in agreement with the last state in the figure.
:::

:::attenzione
The condition $i\ge 0$ alone is too weak an invariant to conclude that `i` equals the bound when the guard is false. For instance, starting from `i = 0` with guard `i < 4` and update `i += 3` leads to `i = 6`. Proving equality on exit requires a second fact that also bounds the counter from above.
:::

## A measure that proves termination

:::definizione{#variante-di-ciclo titolo="Nonnegative integer loop variant"}
A **loop variant** with nonnegative integer values is a quantity calculated from the state at the points where the guard is tested. It is nonnegative in every state reached at that point and decreases strictly from a state with a true guard to the next test state. The expression for the variant describes a mathematical quantity and may use values left implicit in the program.
:::

::::teorema{#terminazione-con-variante titolo="Termination by descent in the integers"}
Assume that control reaches the initial guard of a loop and that all subsequent guard evaluations and iterations that begin terminate with defined operations. Also assume that each iteration ends by exiting the loop or returning to the guard. If a variant as defined exists, the loop ends after finitely many iterations.

:::dimostrazione
Let $V_0$ be the initial value. After $k$ full steps back to the guard, the quantity is at most $V_0-k$, because a strict decrease between integers is at least one unit. If $k>V_0$, this bound is negative, contradicting the nonnegativity assumption. Control therefore cannot return to the test infinitely often. Since every iteration and every test terminates, an exit is reached.
:::
::::

:::esempio{titolo="Quotient and remainder by subtraction"}
Start with `r = 43` and `q = 0`. While `r` is at least `7`, subtract `7` and increment `q`.

```c
int r = 43, q = 0;
while (r >= 7) {
    r -= 7;
    ++q;
}
```

The mathematical value of `r` is a variant because it starts nonnegative and the guard permits subtraction of `7` while leaving a nonnegative value. The identity $43=7q+r$ holds before entry. Changing $q$ to $q+1$ and $r$ to $r-7$ leaves the right-hand side unchanged. The false guard gives $r<7$. The final conditions are

$$
43=7q+r,\qquad 0\le r<7 .
$$

Euclidean division therefore determines $q=6$ and $r=1$. The identity and the inequality prove the result, while the variant proves that the final state is reached.
:::

:::attenzione
A nonnegative counter may fail to prove progress. When an `unsigned int` with value zero is decremented, C produces `UINT_MAX`. The mathematical value of the counter increases during that transition. A proof using a decreasing variant must therefore show that the reachable steps, including the last, give the required decrease without modular wraparound.
:::
