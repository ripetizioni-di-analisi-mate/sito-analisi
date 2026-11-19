---
titolo: Conditionals, loops and invariants
sommario: From guards and selection to proofs of loop correctness and termination in C.
---

## Expressions that determine the next step

:::definizione{#verita-scalare titolo="Truth value of a scalar"}
A program often has to choose what to do on the basis of a **condition**, for example “`x` is less than $10$”. In C a condition is a numeric expression, which is *false* if it is zero and *true* if it is nonzero, even when it is negative. Comparisons such as `x < 10`, `x == y` and `x != y` produce $1$ when they are true and $0$ when they are false.

The **state** of the program at a certain point is the set of the values of its variables at that moment. The condition that decides whether to execute a branch of a selection or another repetition of a loop is called a **guard**. With `x` equal to $-6$ the guard `x` is true, because $-6$ is nonzero, whereas the guard `x > 0` is false. Writing just `x` is therefore equivalent to writing `x != 0`.
:::

:::definizione{#cortocircuito titolo="Short-circuit evaluation"}
Conditions are combined with three **logical operators**. `a && b` (and) is true when both are true. `a || b` (or) is true when at least one of them is true. `!a` (not) is true when `a` is false. These operators too produce $1$ for true and $0$ for false.

The operators `&&` and `||` compute the left operand first, and compute the right one only if it is needed; the mechanism is called **short-circuit evaluation**. In `a && b`, if `a` is false the result is already false and `b` is not computed. In `a || b`, if `a` is true the result is already true and `b` is not computed. The operator `&&` has precedence over `||`, so `a || b && c` is equivalent to `a || (b && c)`; to obtain the other grouping one writes `(a || b) && c`.
:::

:::esempio{titolo="Guarding an integer division"}
Short-circuit evaluation makes it possible to protect an operation that cannot always be performed. The fragment checks that the divisor is nonzero before dividing.

```c
int numerator = 18, divisor = 0;
int ok = divisor != 0 && numerator / divisor > 3;
```

With the given values, the first comparison is false, so `ok` is `0` and the division is skipped. With `divisor = 4`, the first comparison is true, so the integer quotient `18 / 4` is evaluated and equals `4`. The comparison `4 > 3` is true and `ok` is `1`. With `divisor = 6` the division is defined, but the quotient is exactly `3`, so the strict comparison produces `0`.
:::

:::attenzione
The mathematical notation $0<x<10$ does not translate into `0 < x < 10`. C first computes `0 < x`, which is $0$ or $1$, and then compares this result with $10$; the second comparison is always true, even for `x` equal to $12$. The correct form is `0 < x && x < 10`.

Short-circuit evaluation also applies to side effects. If `count = 2`, the disjunction `count > 0 || ++count == 3` is `1` and `count` is still `2`, because the right operand is skipped.
:::

## Choosing which branch to execute

:::definizione{#selezione-if titolo="Selection with if"}
The statement `if (condition) statement` executes the statement only if the condition is true. With `else` one adds an alternative statement, executed when the condition is false; of the two branches exactly one is always executed. To put several statements in a branch one encloses them in braces, forming a **block**. In a chain `if … else if … else` the conditions are checked from top to bottom. The branch of the first true condition is executed and the following ones are not even computed; the final `else`, if present, is executed when all of them are false.

Two `if` statements written one after the other, without `else`, are instead two independent choices, and both branches may be executed if both conditions are true.
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

The second branch is reached only if the first condition is false, that is, if `t >= 0`; it is therefore executed for the values from `0` to `6`. With `t = 7` both conditions are false and the third branch assigns `1`. With `t = 6` the second condition is true and `band` is `0`. With `t = -1` the first branch is executed and the second condition is not computed.
:::

:::definizione{#selezione-switch titolo="Selection with switch"}
The `switch` statement chooses among several cases on the basis of the value of an integer expression. The body contains `case` labels followed by an integer constant, all different from one another. If the value of the expression equals one of the constants, execution jumps to that label. If it equals none of them, it jumps to the `default` label, when there is one; otherwise the whole body is skipped.

From the label reached, execution continues line after line and does not stop at the next label; this continuation is called **fall-through**. To leave the `switch` at the end of a case one writes `break`.

```c
switch (day) {
case 6:
case 7:
    rest = 1;
    break;
default:
    rest = 0;
}
```

In this fragment the values $6$ and $7$ both lead to `rest = 1`, because from the label `case 6` execution continues into the next case. Every other value of `day` leads to `rest = 0`.
:::

:::attenzione
When two `if` statements are written one inside the other without braces, an `else` always belongs to the nearest `if` that does not yet have one, whatever the indentation of the lines. In `if (x > 0) if (y > 0) s = 1; else s = -1;` the `else` belongs to the `if` on `y`. With `x` equal to $0$ neither of the two assignments is executed. To attach the `else` to the `if` on `x` one encloses the inner `if` in braces.
:::

## Testing before and after the body

:::definizione{#ciclo-while titolo="The while loop"}
A **loop** repeats a group of statements, called the **body**; each repetition is called an **iteration**. The loop `while (condition) body` checks the condition before each iteration. If it is true it executes the body and goes back to check it; if it is false it moves on to the statement after the loop. If the condition is already false at the first check, the body is not executed even once.

To follow a loop by hand one fills in a **trace table**, with one row for each check of the guard, including the last one, the false one. The columns report the values of the variables at that moment. The last row contains the values that the variables have after the loop.
:::

:::esempio{titolo="Tripling up to a threshold"}
The loop multiplies `p` by three as long as `p` is less than `13`, and counts the multiplications in `steps`. The statement `p *= 3` is equivalent to `p = p * 3`.

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

The last iteration starts from `p` equal to `9`, which is the last value for which the guard is true, and brings `p` to `27`. The final value therefore exceeds the threshold `13`, because the guard is checked only after the multiplication has been performed. There are three multiplications.
:::

:::definizione{#ciclo-do titolo="The do while loop"}
The loop `do body while (condition);` executes the body first and checks the condition afterwards. The body is therefore executed at least once. If the condition is true the body is repeated, otherwise the loop ends. A semicolon is required after the condition.

```c
int x = 9;
do {
    x -= 2;
} while (x > 10);
```

The body brings `x` from `9` to `7`, then the condition `7 > 10` is false and the loop ends after a single iteration. A `while (x > 10)` with the same body would never execute it, because `9 > 10` is already false at the start. The two loops behave differently precisely when the condition is false at the outset.
:::

:::osservazione
If the body of a `while` is executed $k$ times, the guard is checked $k+1$ times, that is, $k$ times with a true outcome and one last time with a false outcome. In a `do while` with $k$ iterations there are $k$ checks, because each check follows an execution of the body. In the tripling example there are $3$ iterations and $4$ checks, like the rows of the table.
:::

## Counters and bounds in for loops

:::definizione{#ciclo-for titolo="Stages of the for loop"}
The `for` loop gathers on a single line the three parts of a loop with a counter, in the form `for (initialization; condition; update) body`. For example `for (int i = 0; i < 3; ++i)` executes the body with `i` equal to $0$, $1$ and $2$. The order of execution is as follows.

1. The initialization is executed only once, at the beginning.
2. The condition is checked; if it is false the loop ends.
3. The body is executed.
4. The update is executed and one goes back to step 2.

A variable declared in the initialization, like `i` in the example, exists only inside the loop. When counting iterations one distinguishes the values with which the body is executed from the first value that makes the condition false. In the example the body is executed for $0$, $1$, $2$ and the loop ends when `i` is $3$.
:::

::::teorema{#intervalli-discreti titolo="Counting with a positive step"}
A `for` loop with a counter starting at $a$, condition `i < b` and update `i += d`, with $d>0$, executes the body for the values $a$, $a+d$, $a+2d$ and so on, as long as they remain less than $b$. Here $a$, $b$ and $d$ are integers. It is assumed that the body does not modify the counter, the limit or the step, and that the values of the counter are representable. If $a\ge b$ there are zero iterations. If $a<b$, the number $m$ of iterations is

$$
m=\left\lceil\frac{b-a}{d}\right\rceil .
$$
where the symbol $\lceil x\rceil$ denotes the smallest integer greater than or equal to $x$, that is, rounding up.
:::dimostrazione
After $j$ updates the counter is $a+jd$. This holds for $j=0$, and if it holds for $j$, adding $d$ gives $a+(j+1)d$. The loop therefore exits at the first $j$ for which $a+jd\ge b$. When $a<b$ the inequality is equivalent to $j\ge \dfrac{b-a}{d}$, so the least admissible integer is the ceiling.
:::
::::

:::esempio{titolo="Traversing a half-open interval"}
With step $1$ and $a\le b$ the loop executes the body for the integers from $a$ included to $b$ excluded, of which there are $b-a$. The set of these integers is denoted by $[a,b)$, and for $a=b$ it is empty. With step $3$ and interval $[5,19)$ the formula gives

$$
m=\left\lceil\frac{19-5}{3}\right\rceil
 =\left\lceil\frac{14}{3}\right\rceil=5 .
$$

The values with which the body is executed are $5$, $8$, $11$, $14$ and $17$. After the last execution the update brings the counter to $20$; since $20\ge 19$, the loop ends after five iterations.
:::

:::attenzione
The last update of the counter must give a representable value too. With an `int` counter, the condition `i <= INT_MAX` is always true; after the iteration with `i` equal to `INT_MAX` the increment produces an overflow, with undefined behavior. With an excluded limit, `i < n`, the last iteration takes place for `i` equal to `n - 1` and the last increment brings `i` to `n`, which is representable.
:::

## Exiting and proceeding to the next test

:::definizione{#interruzione-break titolo="Exiting with break"}
The `break` statement immediately leaves the innermost loop, or `switch`, that contains it. Execution continues from the first statement after that loop. In a `for` the update is not executed. `break` is used to interrupt a loop as soon as what was being looked for has been found; for example, in a loop that looks for the first divisor of a number, one leaves at the first divisor found.
:::

:::definizione{#salto-continue titolo="The next test after continue"}
The `continue` statement interrupts the current iteration and moves on to the next one, skipping the statements that remain in the body. In a `while` and in a `do while` one goes directly to the check of the guard. In a `for` the update is executed first and then the check. If in a `while` the increment of the counter is placed after the `continue`, it is skipped as well, and the loop may not terminate.
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
Inside a `switch` written in the body of a loop, `break` leaves only the `switch`, and the loop goes on. A `continue` at the same point concerns the loop instead, because `continue` makes sense only for loops, and it moves on to the next iteration.
:::

## Reasoning about two levels of repetition

:::definizione{#cicli-annidati titolo="Outer and inner loops"}
Two loops are **nested** when one is written in the body of the other. At each iteration of the outer loop the inner loop is executed in full, starting again from its initialization. If the outer loop performs $r$ iterations and the inner one performs $c$ each time, the inner body is executed $r\cdot c$ times; for example $3$ rows by $4$ columns give $12$ executions.

If the number of inner iterations depends on the outer counter $i$, and is $m_i$, the total is the sum of all the $m_i$. In this case one first counts, for a fixed value of $i$, how many values the inner counter $j$ takes.
:::

:::esempio{titolo="Counting a triangular set of pairs"}
The fragment counts the pairs of integers $(i,j)$ with $1\le i\le j\le 4$. The inner counter starts from `i`, so the number of inner iterations changes at each row.

```c
int count = 0;
for (int i = 1; i <= 4; ++i) {
    for (int j = i; j <= 4; ++j) {
        ++count;
    }
}
```

For $i=1$ the counter $j$ takes the four values from $1$ to $4$. For $i=2$ it takes three, from $2$ to $4$. In general for row $i$ there are $4-i+1$ values. The total is $4+3+2+1=10$, so at the end `count` is $10$.
:::

:::osservazione
A `break` in the inner loop leaves only that loop, and the outer loop goes on with the next iteration. In this way the inner iterations can be fewer than expected. Suppose that for $i$ equal to $2$, $3$ and $4$ the inner loop tries $j=1,2,3,\dots$ and stops with `break` as soon as `j % i == 0`, before incrementing a counter. The first $j$ divisible by $i$ is $i$ itself, so the counter is incremented $i-1$ times, that is, $1$, $2$ and $3$ times in the three rows, for a total of $6$.
:::

## Properties preserved at the loop test

:::definizione{#invariante-di-ciclo titolo="Invariant at the loop head"}
To prove that a loop computes what it should, one uses a **loop invariant**, that is, a property of the variables that is true every time execution reaches the check of the guard, before the first iteration and after each one. In the loop that adds into `s` the integers from $1$ to `i`, an invariant is “`s` is the sum of the first `i` positive integers”. Proving that a property is an invariant takes two steps. In the **initialization** one verifies that it holds before the first iteration. In the **maintenance** one assumes that it holds at the start of an iteration, with the guard true, and proves that it still holds at the end of the body.

The invariant concerns the moment at which the guard is checked. In the middle of the body, when only some of the variables have been updated, it may be temporarily false.
:::

::::teorema{#correttezza-parziale titolo="Normal exit with an invariant"}
Consider a `while` loop in which the check of the guard does not modify the variables and which is left only when the guard is false. If a property $P$ holds before the loop, and every execution of the body that starts with $P$ and the guard true ends with $P$ still true, then on leaving the loop both $P$ and the negation of the guard hold. From these two pieces of information one derives the result of the loop.

:::dimostrazione
At the first test, $P$ holds by assumption. If the guard is true at a test, preservation gives $P$ when control next returns to the condition. By induction, $P$ therefore holds at every test that is reached. Normal exit takes place on a false evaluation. Since the evaluation leaves the state unchanged, both required properties hold on exit.
:::
::::

:::esempio{titolo="Accumulating the first positive integers"}
The loop adds into `s` the integers from $1$ to $4$. One proves that the result is $10$ using the invariant “`s` is the sum of the first `i` positive integers, and `i` lies between $0$ and $4$”.

```c
int i = 0, s = 0;
while (i < 4) {
    ++i;
    s += i;
}
```

![States at the test i less than 4. The points are (0,0), (1,1), (2,3), (3,6), and (4,10).](/immagini/informatica/condizioni-e-cicli/schema-teoria-en.png)

In formulas the invariant is $0\le i\le 4$ and $s=\sum_{k=1}^{i} k$, where the sum with no terms is zero. **Initialization.** At the start $i=0$ and $s=0$, and the sum of the first zero integers is zero. **Maintenance.** If the guard is true, $i<4$. The body brings the counter to $i'=i+1\le 4$ and then adds the new counter to `s`, so the new value $s'$ satisfies

$$
s'=s+i'=\sum_{k=1}^{i}k+(i+1)=\sum_{k=1}^{i'} k .
$$

**Exit.** When the guard is false we have $i\ge 4$; together with $i\le 4$ from the invariant this gives $i=4$. Hence $s=1+2+3+4=\dfrac{4\cdot 5}{2}=10$, in agreement with the last point of the figure.
:::

:::attenzione
An invariant that is too weak is not enough to derive the result. The condition $i\ge 0$ alone is an invariant, but on exit, together with $i\ge 4$, it does not say what `i` is worth. With `i = 0`, guard `i < 4` and update `i += 3` the counter takes the values $0$, $3$ and $6$, and on exit it is $6$. To conclude $i=4$ the invariant must bound the counter from above as well, as $i\le 4$ does in the example.
:::

## A measure that proves termination

:::definizione{#variante-di-ciclo titolo="Nonnegative integer loop variant"}
The invariant guarantees that the result is correct *if* the loop terminates. To prove that it terminates one uses a **loop variant**, that is, an integer quantity computed from the variables that satisfies two conditions. At every check of the guard it is greater than or equal to zero. At every iteration it decreases by at least one. In `for (int i = 0; i < n; ++i)` a variant is $n-i$, the number of iterations that remain. A non-negative integer cannot decrease forever, so the loop terminates.
:::

::::teorema{#terminazione-con-variante titolo="Termination by descent in the integers"}
Consider a loop in which every iteration terminates, either going back to the guard or leaving the loop. If the loop has a variant, that is, an integer quantity that is non-negative at every check of the guard and decreases at every iteration, then the loop terminates after a finite number of iterations, at most equal to the initial value of the variant.

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

The quantity `r` is a variant. At the start it is $43$; the guard `r >= 7` guarantees that after the subtraction it remains greater than or equal to zero, and at every iteration it decreases by $7$. The loop therefore terminates. The invariant is $43=7q+r$. At the start it holds because $43=7\cdot 0+43$. One iteration brings $q$ to $q+1$ and $r$ to $r-7$, and $7(q+1)+(r-7)=7q+r$, so the equality is preserved. On exit the guard is false, that is, $r<7$. Therefore

$$
43=7q+r,\qquad 0\le r<7 .
$$

These are the quotient and the remainder of the division of $43$ by $7$, that is, $q=6$ and $r=1$. The invariant proves that the result is correct, the variant proves that the loop terminates.
:::

:::attenzione
With an `unsigned int` counter the condition “greater than or equal to zero” is always true and does not help. In `for (unsigned int i = n; i >= 0; --i)` the guard is always true; when `i` is $0$ the decrement produces `UINT_MAX`, by the rule of unsigned arithmetic, and the loop does not terminate. At that step the value of `i` increases, so `i` is not a variant.
:::
