---
titolo: "Functions, specifications and testing"
sommario: "Function calls in C17, contracts, program decomposition and verification with test cases selected from the specification."
---

## Declaring and using a function

:::definizione{#prototipi titolo="Function prototype"}
A **function** is a group of statements with a name, which receives some data, performs a computation and returns a result. Executing a function by writing its name followed by the data in parentheses, as in `max2(4, 9)`, is called **calling** it. Before a function can be called the compiler must know its **declaration**, also called a **prototype**, which gives the type of the result, how many data items it receives and of which type.

```c
int max2(int a, int b);
```

The first `int` is the type of the result. In parentheses are the **parameters**, that is, the variables in which the function receives the data; here there are two of type `int`. In the prototype the names `a` and `b` can be omitted, but they help to understand the role of each parameter. The **definition** of the function repeats the same heading and adds in braces the **body**, that is, the statements to execute.
:::

:::esempio{titolo="Declaration before a call"}
The program prints the larger of $4$ and $9$. The prototype is written before `main`, so that the compiler can check the call even though the definition of `max2` is further down. The expression `a > b ? a : b` is worth `a` if the condition `a > b` is true and `b` otherwise.

```c
#include <stdio.h>

int max2(int a, int b);

int main(void)
{
    printf("%d\n", max2(4, 9));
    return 0;
}

int max2(int a, int b)
{
    return a > b ? a : b;
}
```

In the call `max2(4, 9)` the parameter `a` receives $4$ and `b` receives $9$. The condition `4 > 9` is false, so the function returns `b`, that is, $9$, and `printf` prints `9`. Swapping the arguments, with `max2(9, 4)`, the condition is true and the function returns `a`, which is again $9$.
:::

:::attenzione
To declare a function with no parameters one writes `void` in the parentheses, as in `int sample(void);`. The form with empty parentheses, `int sample();`, in C17 means that the parameters are not specified, and the compiler does not check the arguments of the calls. With `int sample(void);` a call such as `sample(3)` is reported as an error.
:::

:::osservazione
The prototype and the definition must give the same types in the same order. The prototype is usually written in a header included by all the files that use the function, as described in the chapter on compilation; the definition is written only once, in a source file.
:::

## Call inputs and the returned value

:::definizione{#passaggio-per-valore titolo="Pass by value"}
In the call `adjust(x)` the expression `x` written in parentheses is the **argument**. The variable `n` declared in the heading of the function is the **parameter**. In C the call *copies* the value of the argument into the parameter; this rule is called **pass by value**. The parameter is a new variable, which exists only during that call. If the type of the argument differs from that of the parameter, the value is converted as in an assignment.

As a consequence a function can modify its own parameter without the caller’s variable changing, because it works on a copy. To let a function modify a variable of the caller one passes the address of the variable, as shown in the chapter on pointers.
:::

:::esempio{titolo="Tracing a copy and a return"}
Consider the following function, called with `int x = 9;` and then `int y = adjust(x);`. The statement `n += 3` is equivalent to `n = n + 3`.

```c
int adjust(int n)
{
    n += 3;
    return 2 * n;
}
```

![The call copies x, which is 9, into n. The function changes n to 12 and returns 24, which the caller assigns to y. x remains 9.](/immagini/informatica/funzioni-e-test/schema-teoria-en.png)

The call copies the value $9$ of `x` into the parameter `n`. The body brings `n` to $12$ and returns $2\cdot 12=24$, which is put into `y`. The variable `x` is still $9$, because the function has modified only the copy `n`.
:::

:::definizione{#ritorno-dalla-funzione titolo="The return statement"}
The statement `return expr;` ends the function and hands the caller the value of `expr`, converted to the type of the result. Statements written after a `return` that has been executed are not executed. A function that does not have to return anything, for example one that only prints, is declared with type `void`; it ends when it reaches the final brace or with `return;` without a value. In a function with a result every execution path must end with a `return` that gives a value.
:::

:::esempio{titolo="Division before conversion"}
The function `double half(int total) { return total / 2; }` has a `double` result, but with `half(5)` it returns $2.0$ and not $2.5$. The operands `total` and `2` are both `int`, so the division is an integer division and is worth $2$. The `return` then converts $2$ to `double`, when the fractional part is already lost.

With `return total / 2.0;` the divisor is a `double`. `total` is therefore converted to `double` as well before the division, and the result is $\dfrac{5}{2}=2.5$. The two versions are both correct, but they compute different things, the integer half and the exact half.
:::

:::attenzione
The order in which the arguments of a call are computed is not specified. In `mix(++x, 7)` this causes no problem, because the second argument does not depend on `x`. In `mix(++x, x)` one argument modifies `x` and the other reads it, and it is not specified which of the two is computed first; the behavior is undefined. The correct form performs the increment in a separate statement, `++x;`, and then calls `mix(x, x)`.
:::

## Visible names and object lifetimes

:::definizione{#visibilita-dei-nomi titolo="Scope of an identifier"}
The **scope** of a name is the part of the source in which that name can be used. A variable declared inside a block, that is, between a pair of braces, is visible from the point of its declaration to the brace that closes the block; outside the block the name does not exist. A parameter is visible throughout the body of its function. For this reason two different functions can use the same name for two distinct variables. If in an inner block one declares a variable with a name already used in an outer block, inside the inner block the name denotes the new variable, which **shadows** the outer one.
:::

:::esempio{titolo="The same name in two blocks"}
In the following function the name `n` denotes two different variables, the parameter and the variable declared in the inner block.

```c
int shadow(int n)
{
    int saved = n;
    {
        int n = 4;
        saved += n;
    }
    return saved + n;
}
```

With `shadow(3)` the parameter `n` is $3$ and `saved` starts from $3$. In the inner block `n` is the new variable, which is $4$, so `saved` becomes $3+4=7$. After the block is closed `n` denotes the parameter again, which is $3$, and the result is $7+3=10$. Naming the inner variable `local` gives the same result and makes the code easier to read.
:::

:::definizione{#durata-degli-oggetti titolo="Automatic and static storage duration"}
The **storage duration** of a variable is the interval of time, during execution, in which the variable exists in memory. A variable declared inside a function, such as `int count = 0;`, has **automatic duration**. It is created every time execution reaches the declaration and destroyed when the block is left, so at each call it starts again from its initial value. With the word `static`, as in `static int count = 0;`, the variable has **static duration**. It exists for the whole execution of the program, is initialized only once and keeps its value between one call and the next. Its name is still visible only inside the function.
:::

:::esempio{titolo="A counter with or without retained state"}
Consider a function whose body is `static int count = 0; return ++count;`. Three successive calls return $1$, $2$ and $3$, because the variable keeps the value left by the previous call. Without `static` the variable is created again with value $0$ at each call, and the three calls all return $1$. The scope is the same in the two cases; what changes is the duration.
:::

## Valid inputs and guaranteed results

:::definizione{#contratti-di-funzione titolo="Precondition and postcondition"}
Whoever uses a function must know two things, namely which data can be passed to it and what is obtained. These two pieces of information form the **contract** of the function. The **precondition** is the condition that the arguments must satisfy, and it is the responsibility of the caller. The **postcondition** is what the function guarantees about the result when the precondition is satisfied. For a function that computes the integer square root, the precondition is “the argument is greater than or equal to zero” and the postcondition is “the result is the largest integer whose square does not exceed the argument”. In symbols, if $x$ denotes the arguments and $y$ the result, the precondition is written $P(x)$ and the postcondition $Q(x,y)$.

If the precondition is false the contract guarantees nothing, and the function may return a meaningless value or have undefined behavior. For this reason the precondition is checked before the call.
:::

::::teorema{#limiti-operativi titolo="Domain of an affine cost function"}
A precondition often serves to avoid overflow. Let `quantity` be a non-negative `int`, with value $q$. The following function computes $5+3q$, and all the operations stay within the range of `int` exactly when

$$
0 \leq q \leq \left\lfloor\frac{M-5}{3}\right\rfloor ,
$$

where $M$ is the value of `INT_MAX` and $\lfloor x\rfloor$ is rounding down to an integer. The condition is obtained from $5+3q\leq M$. With `INT_MAX` equal to $2\,147\,483\,647$ the limit is $715\,827\,880$.

```c
int price(int quantity)
{
    return 5 + 3 * quantity;
}
```

:::dimostrazione
Since $q\geq 0$, the product and the sum are non-negative. The bound on $q$ implies $3q\leq M-5$, so both $3q$ and $5+3q$ are representable. For an integer $q$ greater than the bound, $5+3q>M$. If the product already exceeds $M$, the first operation exceeds the range. If the product is representable, the sum exceeds the range. In either case, evaluating the expression in `int` causes signed overflow.
:::
::::

:::osservazione
In C the limit is computed with `(INT_MAX - 5) / 3`, where `INT_MAX` comes from `<limits.h>`; division between positive integers already rounds down. The program compares `quantity` with this limit before calling the function. The check itself cannot overflow, because it subtracts from `INT_MAX` and divides.
:::

## Breaking a computation into steps

:::definizione{#scomposizione titolo="Decomposition through contracts"}
**Decomposing** a computation means dividing it into smaller functions, each with a single task. When two functions are applied one after the other, the result of the first becomes the argument of the second. For the combination to be correct, the postcondition of the first must guarantee the precondition of the second; in this way each function can be written and checked separately.
:::

::::teorema{#composizione-contratti titolo="Composition of two functions"}
Let $f$ and $g$ be two functions that have no effects other than their result and that always terminate. The function $f$ has precondition $P_f(x)$ and postcondition $Q_f(x,z)$; the function $g$ has precondition $P_g(z)$ and postcondition $Q_g(z,y)$. If every result $z$ that $f$ produces on an admissible argument satisfies the precondition $P_g(z)$, then the call $g(f(x))$ with $x$ admissible terminates, and its result $y$ satisfies $Q_g(z,y)$, where $z=f(x)$ satisfies $Q_f(x,z)$.

:::dimostrazione
Fix an $x$ satisfying $P_f(x)$. The contract of $f$ guarantees a result $z$ satisfying $Q_f(x,z)$. By assumption, that $z$ satisfies $P_g(z)$. Applying the contract of $g$ then gives a $y$ that satisfies $Q_g(z,y)$. Both calls terminate and the intermediate value used by the second is the value returned by the first. The two postconditions therefore hold for the same $z$.
:::
::::

:::esempio{titolo="Applying a minimum charge"}
The function `base_cost` accepts quantities between $0$ and $100$ and computes `2 * quantity + 1`, so its result lies between $1$ and $201$. The function `minimum_charge` accepts amounts between $0$ and $300$ and returns the larger of the amount and $8$. Every result of the first is an argument admitted by the second, because the interval from $1$ to $201$ is contained in the one from $0$ to $300$; the combination `minimum_charge(base_cost(quantity))` is therefore correct. For the quantity $4$ one obtains first $9$ and then the larger of $9$ and $8$, that is, $9$.

The two functions are tested first separately and then together. For the combined test the quantities $3$ and $4$ are suitable, since they give the intermediate costs $7$ and $9$, one below and one above the threshold $8$; the expected results are $8$ and $9$.
:::

## Selecting cases from the specification

:::definizione{#partizioni-di-test titolo="Equivalence classes for testing"}
A **test** executes a function on a chosen argument and compares the result with the expected one. Since the possible arguments are too many to try them all, they are divided into **equivalence classes**, that is, groups of arguments to which the specification applies the same rule; every admissible argument belongs to exactly one class. The set of the classes is called a **partition**. The expected result of a test is derived from the specification, and not from the program under test; whatever provides the expected result is called an **oracle**.

The minimum criterion is to try at least one argument for each class. If there are $k$ classes, $k$ tests are enough.
:::

:::esempio{titolo="Representatives of integer bands"}
A price list, for an integer number of units between $0$ and $20$, sets the price $4$ up to $4$ units, $6$ from $5$ to $12$ units and $7$ from $13$ to $20$ units. There are three rules, so there are three classes, and one argument is chosen for each.

| Input | Class | Expected |
| --- | --- | --- |
| $2$ | $[0,4]$ | $4$ |
| $8$ | $[5,12]$ | $6$ |
| $16$ | $[13,20]$ | $7$ |

The argument $8$ belongs to the second class, so the expected result is $6$; in the same way $2$ and $16$ test the other two rules. These three tests, however, do not test the values at which the rule changes. An error that concerns only the argument $5$ would not be discovered, because the second class was tested with $8$. For this reason one adds the boundary tests, described in the next section.
:::

## Boundaries of an input set

:::definizione{#valori-di-confine titolo="Boundary-value testing"}
A **boundary value** is an argument at which the rule changes, or an endpoint of the admissible values. The most common errors are found there, for example a `<` written in place of `<=`. If the rule changes in passing from $x<t$ to $x\geq t$, one tests the two neighboring values $t-1$ and $t$, which lie on the two sides of the change. For a band that goes from $a$ to $b$ inclusive one tests $a$ and $b$, and also $a-1$ and $b+1$ when they are admissible arguments.
:::

:::esempio{titolo="Checking an inclusive inequality"}
A function receives an integer between $0$ and $100$ and must return $1$ if the argument is at least $20$ and $0$ otherwise. The boundary values are $19$ and $20$, with expected results $0$ and $1$. If the function is mistakenly written with `x > 20`, it returns $0$ for both; the test with $20$ discovers the error, whereas a test with $50$ would not.

A passed test guarantees the result only for the argument tested. To be certain of correctness on all arguments one needs a proof or, if the arguments are few, a test of every one of them.
:::

:::esempio{titolo="Two transitions between bands"}
In the previous price list the rule changes between $4$ and $5$ and between $12$ and $13$. The boundary values are $4$, $5$, $12$ and $13$, with expected results $4$, $6$, $6$ and $7$. If the first condition is written so as to include $5$ in the first band as well, the test with $5$ gives $4$ instead of $6$. If the second band mistakenly excludes $12$, the test with $12$ gives $7$ instead of $6$.

To these one adds the endpoints $0$ and $20$. Three tests were enough to cover the classes; the boundary tests serve to check that the thresholds are in the right place.
:::

:::osservazione
Boundary values are chosen among the admissible arguments. If the admissible arguments go from $0$ to $18$ and a rule changes at $20$, the values $19$ and $20$ are outside the admissible values and are not valid tests for that function. The case of a function whose very task is to reject invalid arguments is different; for it the out-of-range values are admissible arguments, with a precise expected result.
:::

## Assertions and build configuration

:::definizione{#asserzioni titolo="Assertion in C17"}
The macro `assert`, defined in `<assert.h>`, checks a condition during execution. If the condition written in `assert(e)` is true, the program goes on. If it is false, the program prints a message with the file, the line and the condition, and stops immediately. Assertions are used to write in the code what must be true at that point, for example a precondition or the expected result of a test.

Assertions can be switched off all together by defining the macro `NDEBUG` before including `<assert.h>`, usually in the final version of the program. In this case `assert(e)` does nothing and the expression `e` is not even computed.
:::

:::esempio{titolo="An oracle expressed as an assertion"}
The program tests the function `eligible`, which must return $1$ for scores from $20$ upwards and $0$ for the others. The two tests use the boundary values $19$ and $20$.

```c
#include <assert.h>

int eligible(int score)
{
    return score >= 20;
}

int main(void)
{
    assert(eligible(19) == 0);
    assert(eligible(20) == 1);
    return 0;
}
```

The first test checks the last excluded value and the second the first included value. Both conditions are true, so the program ends without printing anything. If in the function `>=` is replaced by `>`, the second condition is false and the program stops with the assertion message. With `NDEBUG` defined the two lines execute nothing, so the program ends normally even with the wrong function.
:::

:::attenzione
An operation that the program needs must not be written inside an assertion. With `int n = 4; assert(++n == 5);` the variable `n` is $5$ when assertions are active and stays $4$ when they are switched off, because the increment is not executed. The correct form performs `++n;` in a separate statement and then `assert(n == 5);`.
:::
