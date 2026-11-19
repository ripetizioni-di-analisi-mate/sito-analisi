---
titolo: Types, expressions and input/output
sommario: How to determine the type and value of a C17 expression and check a formatted input or output operation.
---

## Objects, values and constants

:::definizione{#oggetti-e-tipi titolo="Object and type"}
A **variable** is a region of memory with a name, in which the program keeps a value that can change. The line `int count = 12;` creates a variable named `count` that contains the number $12$. The word `int` is the **type** of the variable. The type determines which values the variable can contain, how much memory it occupies and which operations are allowed; `int` denotes an integer. In the C standard the region of memory is called an **object**, and in this course the two terms are used as synonyms.

Giving the value on the same line on which the variable is created is called **initialization**. Changing it later, as in `count = 15;`, is called **assignment**. In an assignment the sign `=` is a command, by which the value on the right is computed and copied into the variable on the left, in place of the previous value.
:::

:::esempio{titolo="Initial value and updated value"}
In the following fragment every variable receives a value before it is used.

```c
int total = 4;
int next = total + 3;
total = next + 2;
```

The first line creates `total` with value $4$. The second computes $4+3$ and creates `next` with value $7$. The third computes $7+2$ and puts $9$ into `total`, in place of $4$. The value of `next` remains $7$, because `next` is a distinct variable and the third line only reads it.
:::

:::definizione{#limiti-dei-tipi titolo="Limits, bytes and sizeof"}
A variable occupies a fixed number of bytes, so it can contain only the numbers in a certain range. On most current computers an `int` occupies $4$ bytes and contains the integers from $-2\,147\,483\,648$ to $2\,147\,483\,647$. The type `unsigned int` contains only non-negative integers, usually from $0$ to $4\,294\,967\,295$. The standard guarantees smaller ranges, at least from $-32767$ to $32767$ for `int` and at least from $0$ to $65535$ for `unsigned int`, because the actual values depend on the computer and on the compiler. A program finds them in the header `<limits.h>` under the names `INT_MIN`, `INT_MAX` and `UINT_MAX`.

The `sizeof` operator gives the number of bytes occupied by a type or by a variable; for example `sizeof(int)` is usually $4$. The result has type `size_t`, an unsigned integer type used for sizes. The type `char` always occupies $1$ byte, and the number of bits in a byte is `CHAR_BIT`, which is at least $8$. To know the range of a type one uses the limits in `<limits.h>`.

The type `char` contains a character, stored as a small integer. Whether this integer is signed or not depends on the compiler. When a small integer with a definite sign is needed one uses `signed char` or `unsigned char`, which are types distinct from `char`.
:::

:::definizione{#letterali titolo="Constants in source code"}
A number written directly in the source, such as `12`, is called a **constant**, and it too has a type, which depends on how it is written. An integer constant with no suffix, such as `12`, is an `int`; if the value is too large for an `int`, the compiler uses a larger integer type. With the suffix `u`, as in `12u`, the constant is an `unsigned int`.

A constant with a point, such as `14.0`, is a `double`, that is, a floating-point number. With the suffix `f`, as in `14.0f`, it is a `float`, which has fewer digits of precision; with the suffix `L`, as in `14.0L`, it is a `long double`. In the source the decimal separator is always the point.
:::

:::osservazione
The text `-7` is the operator `-` applied to the constant `7`. The distinction matters only for the minimum of `int`. With a $4$-byte `int` the number $2\,147\,483\,648$ exceeds `INT_MAX`, so the constant `2147483648` has a type larger than `int`, and so does `-2147483648`. To denote the minimum one uses the name `INT_MIN`.
:::

## Grouping, evaluation and effects

:::definizione{#operatori-aritmetici titolo="Operands and results"}
The operators `+`, `-`, `*` and `/` perform the sum, difference, product and division of two numbers. The operator `%` gives the remainder of the division between two integers; for example `17 % 5` is $2$. If the two operands have different types, before the operation they are brought to a common type, by the rules described later in this chapter, and the result has that type.

The comparison operators are `<`, `<=`, `>`, `>=`, `==` (equal) and `!=` (not equal). In C the result of a comparison is an `int`, which is $1$ if the relation is true and $0$ if it is false. For example `3 < 5` is $1$ and `3 == 5` is $0$. For this reason the sum `(a > 0) + (b > 0)` counts how many of `a` and `b` are positive.
:::

:::definizione{#precedenza titolo="Precedence and associativity"}
When an expression contains several operators, **precedence** determines which one is applied first, as in mathematics. From the strongest to the weakest the order is as follows. First come the operators with a single operand, such as the sign `-` and the cast; then `*`, `/` and `%`; then `+` and `-`; then the comparisons `<`, `<=`, `>`, `>=`; finally `==` and `!=`. Among operators with the same precedence the decision is made by **associativity**, which for the arithmetic ones goes from left to right.

For example in `14 - 2 * 5` multiplication has precedence, so the expression is equivalent to `14 - (2 * 5)` and is worth $4$. In `18 - 7 - 4` the two operators have the same precedence and one proceeds from the left, so the expression is equivalent to `(18 - 7) - 4` and is worth $7$. Parentheses impose a different order, and `(14 - 2) * 5` is worth $60$.
:::

:::definizione{#effetti-collaterali titolo="Values, effects and sequencing"}
Some expressions, besides producing a value, modify a variable, and the modification is called a **side effect**. Assignment is the most common case. The operators `++` and `--` increase and decrease a variable by one, and they have two forms. The expression `n++` (post-increment) is worth what `n` was worth *before* the increase. The expression `++n` (pre-increment) is worth what `n` is worth *after* the increase. In both cases `n` ends up increased by one.

Statements are executed one after the other, and the effects of one line are complete before the next one begins. In the following fragment the third line therefore reads `n` already increased.

```c
int n = 6;
int before = n++;
int after = n;
```

The variable `before` is worth $6$, that is, the value of `n` before the increase, and `after` is worth $7$. With `int before = ++n;` on the second line, both would be worth $7$.
:::

:::attenzione
C does not specify in which order the two operands of an operator such as `+` are computed, nor the arguments of a function. Usually the order does not matter, but it does when the same expression modifies a variable and reads it at another point. An expression such as `n + n++` has no determined value, and the standard classifies the case as **undefined behavior**, defined later in this chapter. The correct form separates the modification and the use into two statements, as in the previous fragment.
:::

## Integer division and remainder

::::teorema{#quoziente-e-resto titolo="Quotient–remainder identity"}
Between two integers the operator `/` computes integer division, that is, it discards the part after the point; `17 / 5` is $3$ and `17 % 5` is $2$. With negative numbers the discarding goes toward zero, so `-17 / 5` is $-3$. In general, let `a` and `b` be of type `int`, with `b` nonzero and with the quotient representable in `int`. Denoting by $q$ the value of `a / b` and by $r$ that of `a % b`, the following identity holds
$$
a=bq+r,\qquad |r|<|b|.
$$
If the remainder is nonzero, it has the same sign as the dividend $a$; for example `-17 % 5` is $-2$, since $-17=5\cdot(-3)+(-2)$. The identity makes it possible to check quotient and remainder by substituting them into the equality.

:::dimostrazione
Write $x=\dfrac{a}{b}$ for the exact ratio and $q=\operatorname{trunc}(x)$ for its truncation towards zero. The remainder specified by the language, when the quotient is representable, is $r=a-bq$. Thus $r=b(x-q)$. Since $|x-q|<1$, we have $|r|<|b|$.

When $x-q$ is nonzero, its sign is the sign of $x$. On multiplying by $b$, the sign of the remainder becomes the sign of $a$. If $x$ is an integer, $q=x$ and $r=0$.
:::
::::

:::esempio{titolo="Negative dividend and divisor"}
For $a=-23$ and $b=-5$ the exact ratio is $4.6$. Discarding the part after the point gives $q=4$. The remainder is obtained from the identity,
$$
r=-23-(-5)\cdot4=-3 .
$$
The check gives $(-5)\cdot4+(-3)=-23$. The remainder is negative because the dividend is negative; the sign of the divisor does not matter.
:::

:::attenzione
The expressions `a / b` and `a % b` have no result in two cases. The first is division by zero. The second, with a $4$-byte `int`, is `INT_MIN / -1`, because the mathematical result would be $2\,147\,483\,648$, which exceeds `INT_MAX` by one. In both cases the behavior of the program is undefined, so the program must check the values before dividing.
:::

## Choosing a type before calculation

:::definizione{#promozioni-intere titolo="Integer promotions"}
C performs computations between integers at least in the type `int`. The integer types smaller than `int`, that is, `char` and `short` in their variants, are converted to `int` every time they appear in an arithmetic operation; the conversion is called **integer promotion** and leaves the value unchanged. The standard orders the integer types by **rank**, from the smallest to the largest, that is, `char`, `short`, `int`, `long`, `long long`; an unsigned type has the same rank as the corresponding signed one.

For example, if `a` and `b` are two `short` variables worth $100$ and $200$, in `a + b` both are promoted to `int` and the result $300$ is an `int`. In the rare case in which `int` does not contain all the values of the original type, as can happen for `unsigned short` on machines where `short` and `int` have the same size, the promotion goes to `unsigned int`.
:::

:::definizione{#conversioni-aritmetiche titolo="Usual arithmetic conversions"}
When the two operands of an arithmetic operator have different types, C brings them to a common type before computing, by rules called the **usual arithmetic conversions**. The idea is that the type with the larger capacity prevails. If one of the two is floating-point, the other is converted to that type; among floating-point types the increasing order is `float`, `double`, `long double`. For example in `7 + 2.5` the $7$ becomes $7.0$ and the result is the `double` $9.5$.

If both are integers, the promotions are applied first. If after the promotions the types are equal, that is the common type. If both are signed or both are unsigned, the one of lower rank is converted to the other; for example in a sum of an `int` and a `long` the computation takes place in `long`. If one is signed, of type $S$, and the other unsigned, of type $U$, there are three cases.

- If $U$ ranks at least as high as $S$, the operand of type $S$ is converted to $U$.
- If $S$ ranks higher and represents every value of $U$, the operand of type $U$ is converted to $S$.
- Otherwise both operands are converted to the unsigned type corresponding to $S$.

The most common case is the first. In `9u + (-2)` the types are `unsigned int` and `int`, which have the same rank, so $-2$ is converted to `unsigned int`. A negative number converted to an unsigned type becomes a very large positive number, by the rule of the theorem on unsigned arithmetic later in this chapter; the final result of the sum is $7$ all the same.
:::

:::definizione{#conversioni-assegnamento titolo="Casts and destination conversions"}
The **cast** `(T) expr` converts the value of `expr` to the type `T`; for example `(double) 3` is $3.0$. A conversion also takes place without a cast in every initialization and in every assignment, because the value on the right is converted to the type of the variable on the left. In `int k = 2.9;` the variable `k` receives $2$.

The conversion from floating point to integer removes the part after the point, without rounding, so `(int) 5.75` is $5$ and `(int)(-5.75)` is $-5$. The value obtained in this way must lie in the range of the integer type. The conversion from integer to floating point preserves the value when the destination type has enough digits; for very large integers the result is one of the two nearest representable values.
:::

:::esempio{titolo="Placement of a cast in division"}
The two expressions in the figure contain the same numbers, but the cast is applied at two different points and the result changes.

![The expressions (double)(11 / 4) and (double)11 / 4. The first performs integer division and gives 2.0. The second converts 11 and gives 2.75.](/immagini/informatica/tipi-ed-espressioni/schema-teoria-en.png)

In `(double)(11 / 4)` the division is computed first, between two `int` values. It is therefore an integer division and is worth $2$; the cast then converts $2$ to $2.0$, and the fractional part is already lost. In `(double)11 / 4` the cast has precedence over the division and converts $11$ to $11.0$. At this point the two operands have different types, so $4$ is converted to `double` as well, and the division between floating-point numbers gives
$$
\dfrac{11}{4}=2+\dfrac{3}{4}=2.75 .
$$
The result is exact, because $2.75=\dfrac{11}{4}$ has a power of $2$ as its denominator and therefore a finite binary numeral.
:::

## Representable results and semantics

::::teorema{#interi-unsigned titolo="Arithmetic modulo the number of values"}
In unsigned types computations never leave the range, because a result that is too large or negative is brought back inside by the remainder rule. Let $U$ be an unsigned integer type with maximum $U_{\max}$, and let $M=U_{\max}+1$ be the number of its values; for a $4$-byte `unsigned int`, $M=2^{32}$. The result of a sum, a difference or a product computed in the type $U$ is the remainder of the division of the mathematical result by $M$, that is, the only integer between $0$ and $M-1$ that differs from the mathematical result by a multiple of $M$. The same rule holds when an integer of another type is converted to $U$.

:::dimostrazione
To get back into the range one adds or subtracts $M$ as many times as needed. The value obtained is unique, because two distinct integers between $0$ and $M-1$ differ by at most $M-1$ and so their difference is not a multiple of $M$.
:::
::::

:::esempio{titolo="Subtraction in unsigned int"}
In `3u - 5u` the two operands are `unsigned int`, so the computation takes place in that type. The mathematical result is $-2$, which is outside the range. Adding $M=\mathrm{UINT\_MAX}+1$ gives $M-2=\mathrm{UINT\_MAX}-1$, which with a $4$-byte `unsigned int` is $4\,294\,967\,294$. As a check, adding `2u` to this value gives $M$, which brought back into the range gives $0$.
:::

:::definizione{#rappresentabilita titolo="Operation and result range"}
A value is **representable** in a type if it belongs to the range of that type. For signed integers the remainder rule does not apply. If the mathematical result of a sum, a difference or a product between `int` values leaves the range, there is an **overflow** and the behavior of the program is undefined. For example `INT_MAX + 1` has no value one can rely on. The case of a conversion is different, such as assigning to an `int` a value that is too large, where the result is decided by the compiler.

The check must therefore be made *before* the sum. If `delta` is positive, the sum `value + delta` is representable when `value <= INT_MAX - delta`. The subtraction `INT_MAX - delta` cannot overflow, because `delta` is positive. For example, with `INT_MAX` equal to $2\,147\,483\,647$ and `delta` equal to $10$, the sum is safe for `value` up to $2\,147\,483\,637$. The condition is the inequality $\mathrm{value}+\mathrm{delta}\leq \mathrm{INT\_MAX}$ with `delta` moved to the right.
:::

:::definizione{#categorie-comportamento titolo="Categories in C17"}
The C standard does not fix every detail, and it classifies the cases left open into three categories.

- **Implementation-defined.** The compiler chooses among a few possibilities and documents the choice, which always stays the same. An example is whether `char` is signed or not.
- **Unspecified.** The compiler chooses among a few possibilities without having to document it, and the choice may change from one point of the program to another. An example is the order in which two arguments of a function are computed.
- **Undefined.** The standard says nothing about what happens, and the program may give a wrong result, stop or appear correct. Examples are the overflow of an `int` and division by zero.

A correct program never executes an operation with undefined behavior. The fact that in a test the program prints the expected value does not prove that the operation is defined, because with another compiler or with other options the result may change.
:::

## Numeric output on stdout

:::definizione{#printf-formati titolo="Conversion specifiers for printf"}
The function `printf`, declared in `<stdio.h>`, prints text to standard output. The first argument is the **format string**. The ordinary characters of the string are printed as they are. Each **conversion specification**, which begins with `%`, is replaced by the value of the next argument, written in the way indicated by the specification. For example `printf("x = %d\n", 7);` prints `x = 7` and starts a new line, because `\n` is the newline character. The specification must match the type of the argument.

| Specification | Type of the argument |
|---|---|
| `%d` | `int` |
| `%u` | `unsigned int` |
| `%ld` | `long` |
| `%zu` | `size_t` |
| `%f` | `double` |
| `%Lf` | `long double` |

A `float` argument is automatically converted to `double`, and one smaller than `int` to `int`, so `%f` and `%d` apply to these types too. To print the character `%` one writes `%%`. `printf` returns the number of characters printed, or a negative value if the write fails. If a specification does not match the type of the argument, for example `%d` with a `double`, the behavior is undefined.
:::

:::definizione{#larghezza-e-precisione titolo="Field width and precision"}
Between `%` and the letter one can write a number, the **field width**, which is the minimum number of characters occupied by the value. If the value has fewer, spaces are added on the left; if it has more, it is printed in full. With `%5d` the value $36$ is printed with three spaces in front, and $123456$ is printed with all its six digits. The width is used to align numbers in columns.

After a point one writes the **precision**. With `%f` it is the number of digits after the decimal point, so `%.2f` prints two decimals and $3.14159$ becomes `3.14`. With `%d` it is the minimum number of digits, obtained by adding zeros on the left, so `%.3d` prints $7$ as `007`. The sign, the digits and the decimal point all count toward the width.
:::

:::esempio{titolo="Aligning two fields"}
The following fragment, with `<stdio.h>` included, prints an integer and a number with two decimals, each in a field of fixed width.

```c
printf("[%4d][%6.2f]", 17, 1.25);
```

The printed text is `[  17][  1.25]`. The first field is $4$ wide and the number $17$ has two digits, so it is preceded by two spaces. The second field is $6$ wide and `1.25` occupies four characters, so it is preceded by two spaces. The four square brackets are ordinary characters. In all there are $4+6+4=14$ characters, and this is the value returned by `printf`.
:::

## Formatted input and assigned values

:::definizione{#scanf-formati titolo="Conversion specifiers for scanf"}
The function `scanf`, declared in `<stdio.h>`, reads from **standard input** `stdin`, which is usually the keyboard, and puts the values read into variables. `scanf` too uses a format string; for each specification one passes the **address** of the variable to fill, obtained by writing `&` in front of its name. To read an integer into the variable `n` one writes `scanf("%d", &n);`. The address is needed because `scanf` must modify the variable, and to do so it must know where it is in memory. The specification must match the type of the variable.

| Specification | Type of the variable |
|---|---|
| `%d` and `%i` | `int` |
| `%u` | `unsigned int` |
| `%f` | `float` |
| `%lf` | `double` |
| `%Lf` | `long double` |

Unlike `printf`, for a `double` one uses `%lf` and for a `float` one uses `%f`. `%d` reads an integer written in base ten. `%i` also recognizes the other bases from the prefix, so it reads `014` as an octal number, that is, $12$, whereas `%d` reads it as $14$. Before a number `scanf` skips spaces, tabs and newlines. A space in the format string means to skip all the white space present at that point of the input, possibly none.
:::

:::definizione{#esito-lettura titolo="Scan result and assignment count"}
`scanf` returns the number of variables it managed to fill. This value must always be checked, because the input may not contain what the program expects. If a field does not have the required form, for example letters in place of a number, `scanf` stops at that point and returns the number of variables filled so far, which may be $0$. If the input ends before the first value has been read, it returns the special value `EOF`.

Consider `scanf("%d %lf", &count, &rate)` with `count` of type `int` and `rate` of type `double`. If the input is `8 stop`, the first field is read and `count` is worth $8$; the second field should be a number but finds `stop`, so the reading stops. The returned value is $1$ and `rate` keeps the value it had before. The program recognizes a complete read by checking that the returned value is $2$.
:::

:::attenzione
If the number read is too large for the variable, for example twenty digits read with `%d`, the behavior of `scanf` is undefined, and the returned value does not signal it. To read data whose form is not known it is safer to read the whole line as text and convert it with the function `strtol`, which reports out-of-range values; the method is described in the chapter on text files.
:::

:::osservazione
In the source and in the text printed by the program the decimal separator is the point, and the formulas of the English version of this course use the point as well. Thus `printf("%.2f", 1.25)` prints `1.25`, and the same quantity in a formula is written $1.25$. In the printing examples it is also assumed that floating-point numbers are rounded to the nearest value, as happens on common computers.
:::
