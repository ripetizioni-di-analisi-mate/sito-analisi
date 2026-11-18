---
titolo: "Functions, specifications and testing"
sommario: "Function calls in C17, contracts, program decomposition and verification with test cases selected from the specification."
---

## Declaring and using a function

:::definizione{#prototipi titolo="Function prototype"}
A **function** contains statements that execute when a call to that function is evaluated. The declaration below is a **prototype** because it specifies the return type, the number of arguments and the type of each parameter.

```c
int max2(int a, int b);
```

The first `int` is the return type. The two occurrences of `int` inside the parentheses give the parameter types in order. The chapter considers prototypes with a fixed parameter list. The names `a` and `b` can be omitted in a prototype. Including them helps distinguish different roles when the parameters have the same type. A **definition** completes the declaration with a body enclosed by braces, which contains the statements to execute.
:::

:::esempio{titolo="Declaration before a call"}
The prototype lets the compiler check the call in `main` even though the definition of `max2` appears later. The program prints the larger of $4$ and $9$. When the two values are equal, the conditional expression selects `b`, which has the same value as `a` in that case.

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

The function returns $9$, so the argument associated with `%d` has value $9$. The result has type `int`, as required by that output conversion. Swapping the arguments makes it possible to test the other branch. Since the larger value remains $9$, the expected result is still $9$.
:::

:::attenzione
In C17, a declaration such as `int sample();` provides the return type and leaves the number and types of the parameters unspecified. To declare a function with no parameters, use `int sample(void);`. In this form an extra argument makes the call incompatible with the prototype. The word `void` appears on its own in the parameter list.
:::

:::osservazione
A declaration can appear in a header shared by several source files. If a function returns an `int` and takes two `int` arguments, its definition uses the same types in the declared order. A compiler can check a call against the prototype because the types are available at the call site. The body describes the computation and must be available as part of the program that uses the function.
:::

## Call inputs and the returned value

:::definizione{#passaggio-per-valore titolo="Pass by value"}
An **argument** is an expression written in the call. A **parameter** is the local object through which the body receives that expression’s value. For a call with a prototype, each argument value is converted to the type of its corresponding parameter as if by assignment. Parameters have automatic storage duration, so each call has its own parameters. This rule in C is called **pass by value**.

The function can assign a new value to one of its parameters. That assignment affects the local object. An expression such as `++x`, when used as an argument, can modify `x` while the caller evaluates the argument. That modification takes place before execution of the function body begins.
:::

:::esempio{titolo="Tracing a copy and a return"}
Consider the function below. The caller executes `int x = 9;` and `int y = adjust(x);` in two separate statements.

```c
int adjust(int n)
{
    n += 3;
    return 2 * n;
}
```

![The call copies x, which is 9, into n. The function changes n to 12 and returns 24, which the caller assigns to y. x remains 9.](/immagini/informatica/funzioni-e-test/schema-teoria-en.png)

Because the argument `x` has value $9$, parameter `n` starts at $9$. The body adds $3$ to `n`, so the multiplication uses $12$. The function returns $24$, so `y` is initialized to $24$. The caller retains the value $9$ in `x` because the assignment in the body affects `n`. A direct check substitutes into the formula $2(9+3)=24$ and compares the answer with the value that reaches `y`.
:::

:::definizione{#ritorno-dalla-funzione titolo="The return statement"}
`return expr;` ends the current call and passes the value of `expr` back to the caller. The value is converted to the return type as if by assignment. A `void` function is used for an action that provides no result to use in an expression. Its body can finish at the closing brace or through `return;`. For the other exercises, an explicit value appears on every path that must return a result.
:::

:::esempio{titolo="Division before conversion"}
For non-negative inputs, `double half(int total) { return total / 2; }` returns the integer half converted to `double`. In `half(5)`, `total` is $5$ and the divisor `2` has type `int`. The division therefore produces the integer $2$. The conversion at `return` turns that integer into a `double` with value $2$.

With `return total / 2.0;`, the divisor has type `double`. The usual conversions also bring the dividend to type `double` before the division, so the result is computed in floating-point arithmetic for the real quotient $\dfrac{5}{2}$. With IEEE 754 binary arithmetic the result is exactly $2.5$. The two bodies satisfy different contracts because one calls for the integer part and the other for floating-point division.
:::

:::attenzione
The order in which a C17 call evaluates its arguments is generally unspecified. In `mix(++x, 7)`, the modification of `x` concerns just one argument, so the value of the first argument is determined after evaluation. In `mix(++x, x)`, the write to `x` and the read of `x` in the other argument are unsequenced relative to each other. The behaviour is undefined. To specify a read after the increment, execute `++x;` in an earlier statement and then use `mix(x, x)`.
:::

## Visible names and object lifetimes

:::definizione{#visibilita-dei-nomi titolo="Scope of an identifier"}
**Scope** is the region of source code in which a name denotes a particular entity. A parameter in a function definition is visible in the body. A variable declared inside a block has block scope, beginning just after its declarator. If that block introduces a new object with a name already used in an outer block, the inner name **shadows** the outer name within its scope.
:::

:::esempio{titolo="The same name in two blocks"}
In the function below, `n` denotes the parameter at the start and after the inner block ends. In the statement `saved += n;`, it denotes the newly declared object instead.

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

With `shadow(3)`, `saved` starts at $3$ and becomes $3+4=7$ in the inner block. The result then adds the outer parameter, which is still $3$, and gives $10$. Renaming just the inner object to `local` yields the same final expression and makes the origin of the two values explicit.
:::

:::definizione{#durata-degli-oggetti titolo="Automatic and static storage duration"}
**Storage duration** determines how long an object exists in the abstract machine. In the case of a block-scope scalar variable declared as `int count = 0;` inside a function, the duration is automatic. Each time execution reaches the declaration, initialization is performed. A block-scope variable declared as `static int count = 0;` has static storage duration, so it exists throughout the execution of the program. It is initialized once before program startup and can be referred to by that name only where it is visible.
:::

:::esempio{titolo="A counter with or without retained state"}
Given `static int count = 0;` followed by `return ++count;` in the body, three calls in separate statements in a fresh run return, in order, $1$, $2$ and $3$. Each starts with the value left in the single object `count`. With `int count = 0;`, reaching the declaration on each call initializes it to zero again. The return value is therefore $1$ all three times. The names have block scope in both versions. The different results follow from storage duration and initialization.
:::

## Valid inputs and guaranteed results

:::definizione{#contratti-di-funzione titolo="Precondition and postcondition"}
A **contract** states the responsibilities of the caller and the function. The **precondition** $P(x)$ describes the accepted inputs. The symbol $x$ may stand for a group of arguments. For a call satisfying $P$, a contract that also specifies termination guarantees that the function terminates with defined behaviour and that the **postcondition** $Q(x,y)$ holds for result $y$. The contract specifies any external effects that form part of the required behaviour.

The condition $P$ is checked before the call. The condition $Q$ is checked afterwards, using the initial values of the arguments and the result. If $P$ is false, the promise made by that contract does not apply. A contract violation alone gives no conclusion about what will happen in the abstract machine.
:::

::::teorema{#limiti-operativi titolo="Domain of an affine cost function"}
Let `quantity` be a non-negative `int`. The function below calculates the mathematical value $5+3q$, where $q$ is the value of `quantity`, with every operation representable if the precondition is

$$
0 \leq q \leq \left\lfloor\frac{M-5}{3}\right\rfloor ,
$$

where $M$ is the value of `INT_MAX`. This bound includes the largest non-negative input for which the expression has defined behaviour in `int`.

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
To check the precondition in C, first compute `(INT_MAX - 5) / 3`, obtaining `INT_MAX` from `<limits.h>`. The numerator is non-negative, so integer division amounts to rounding down. Then compare `quantity` with that bound. The check precedes the multiplication and uses operations that remain representable even for an input outside the domain.
:::

## Breaking a computation into steps

:::definizione{#scomposizione titolo="Decomposition through contracts"}
**Decomposing** a computation means assigning distinct tasks to smaller functions. In a two-step computation, the first function calculates an intermediate value and the second takes it as input. Their contracts make clear what value the first step produces and which properties of that value permit the second step. This connection lets us verify the composition.
:::

::::teorema{#composizione-contratti titolo="Composition of two functions"}
Consider two deterministic functions that produce no external effects on the domain in question. The first, $f$, satisfies the contract $P_f(x)$ and $Q_f(x,z)$. The second, $g$, satisfies $P_g(z)$ and $Q_g(z,y)$. Both contracts guarantee termination. The types allow $g$ to receive $z$ without changing its value. If every $z$ produced by $f$ on a valid $x$ satisfies $P_g(z)$, the computation of $g(f(x))$ terminates with a value $y$ for which an intermediate $z$ satisfies both postconditions.

:::dimostrazione
Fix an $x$ satisfying $P_f(x)$. The contract of $f$ guarantees a result $z$ satisfying $Q_f(x,z)$. By assumption, that $z$ satisfies $P_g(z)$. Applying the contract of $g$ then gives a $y$ that satisfies $Q_g(z,y)$. Both calls terminate and the intermediate value used by the second is the value returned by the first. The two postconditions therefore hold for the same $z$.
:::
::::

:::esempio{titolo="Applying a minimum charge"}
For quantities from $0$ to $100$, `base_cost` computes `2 * quantity + 1`. Its result belongs to the interval from $1$ to $201$. The function `minimum_charge` accepts amounts from $0$ to $300$ and returns the larger of the amount and $8$. The first result lies in the domain of the second step because the interval from $1$ to $201$ is contained in the interval from $0$ to $300$. Quantity $4$ first produces $9$. The minimum of $8$ therefore leaves the final result at $9$.

The two functions can be tested in isolation. To test their integration, use quantities $3$ and $4$. Since the intermediate costs are $7$ and $9$, they fall on opposite sides of the threshold. The oracle expects $8$ and $9$, respectively.
:::

## Selecting cases from the specification

:::definizione{#partizioni-di-test titolo="Equivalence classes for testing"}
A **partition** of a domain is a family of nonempty, pairwise disjoint classes whose union is the domain. When choosing tests, inputs addressed by the same rule in the specification can be grouped in one class. Each test case identifies an input and an expected result or other observation. The **test oracle** derives the expectation from the contract, independently of the result returned by the implementation under examination.

Class coverage requires at least one representative of each class. Because the classes are disjoint, each call with a single input covers one class. If there are $k$ classes and each has a representative, $k$ calls are sufficient for that coverage.
:::

:::esempio{titolo="Representatives of integer bands"}
For an integer number of units from $0$ to $20$, a tariff charges $4$ for up to $4$ units, $6$ from $5$ to $12$ units, and $7$ from $13$ to $20$ units. The rules define three classes.

| Input | Class | Expected |
| --- | --- | --- |
| $2$ | $[0,4]$ | $4$ |
| $8$ | $[5,12]$ | $6$ |
| $16$ | $[13,20]$ | $7$ |

Only the integers in each interval are considered. Input $8$ belongs to the second band, so the oracle takes the tariff $6$ directly from the specification. For the same reason, $2$ and $16$ test the other two rules. An error confined to $5$ can escape these tests because the second class was tested at $8$. Boundary tests add targeted cases.
:::

## Boundaries of an input set

:::definizione{#valori-di-confine titolo="Boundary-value testing"}
A **boundary value** occurs at an endpoint of the domain or where the applicable rule changes. For an integer threshold $t$ where the rule changes from $x<t$ to $x\geq t$, relevant cases are $t-1$ and $t$ when both belong to the domain. They are consecutive integers and exercise different rules. For a closed band from $a$ to $b$, inputs $a$ and $b$ lie in the band, and the neighbours $a-1$ and $b+1$ are tested if the full domain permits them.
:::

:::esempio{titolo="Checking an inclusive inequality"}
For integer inputs from $0$ to $100$, an admission function must return $1$ when the input is at least $20$ and $0$ otherwise. The values $19$ and $20$ test the two sides of the transition. The expression `x > 20` returns $0$ in both cases. Comparing with the oracle exposes the error at $20$ because the contract includes the threshold among the accepted values.

A passing test confirms the expected observation only for the input used. To conclude that the function is correct on the full domain, a general argument is needed or, if the finite domain can actually be enumerated, an exhaustive check of the observations specified by the contract.
:::

:::esempio{titolo="Two transitions between bands"}
Consider again the tariff with integer bands from $0$ to $4$, from $5$ to $12$ and from $13$ to $20$. The first band changes to the second between $4$ and $5$, and the second changes to the third between $12$ and $13$. The four expected results are, in the same order, $4$, $6$, $6$ and $7$. If a faulty first condition includes $5$ in the first band, the function returns $4$ where the oracle expects $6$. If instead $12$ is excluded from the middle band, the result is $7$ instead of $6$.

The endpoints $0$ and $20$ complete the test plan for the domain boundaries. Band coverage requires only three representatives. The boundary plan adds different values because it also targets errors in the placement of thresholds.
:::

:::osservazione
An empty band requires a preliminary check when constructing the partition. If the domain runs from $0$ to $18$ and the rule changes at $20$, tests at $19$ and $20$ both lie outside the domain. Tests for a function that assumes this domain are therefore drawn from the rules that actually apply. An input validator that must reject out-of-domain values has its own contract.
:::

## Assertions and build configuration

:::definizione{#asserzioni titolo="Assertion in C17"}
`assert` is a macro defined by `<assert.h>`. If the program includes that header with `NDEBUG` undefined, `assert(e)` evaluates the scalar expression `e`. If the result compares equal to zero, it writes a diagnostic to the standard error stream and causes abnormal termination through `abort`. A true condition lets execution continue.

If the program includes the header with `NDEBUG` defined, `assert` expands to an innocuous expression of type `void` without evaluating its argument. The build configuration should therefore be stated when discussing the result of running a program that contains assertions.
:::

:::esempio{titolo="An oracle expressed as an assertion"}
In this program, built with assertions enabled, the specification says that admission starts at a score of $20$. The test inputs belong to the domain under consideration, so the expected results follow from that rule.

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

The first test checks the excluded side and the second checks the first included value. Replacing `>=` with `>` makes the second comparison false. With assertions enabled, the program reports the error and terminates through `abort`. With `NDEBUG` defined before the header is included, the macro removes both calls written as arguments to `assert`, so normal completion of that version provides no evidence from those checks.
:::

:::attenzione
An operation required by the computation must have its own place outside the assertion. With `int n = 4; assert(++n == 5);`, the subsequent value of `n` is $5$ with assertions enabled and $4$ with assertions disabled. Writing `++n;` as a separate statement followed by `assert(n == 5);` makes the increment part of both builds. The assertion performs only the check.
:::
