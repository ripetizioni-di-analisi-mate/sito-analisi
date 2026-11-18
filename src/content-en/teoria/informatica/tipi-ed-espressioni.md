---
titolo: Types, expressions and input/output
sommario: How to determine the type and value of a C17 expression and check a formatted input or output operation.
---

## Objects, values and constants

:::definizione{#oggetti-e-tipi titolo="Object and type"}
An **object** is a region of storage whose contents can represent values. In a definition such as `int count = 12;`, the name `count` designates an object of type `int`, and `12` is its initializer. The type determines the set of permitted values and the rules for accessing the object and using its value. Interpreting `count + 2` requires knowing the type of both operands.

**Initialization** supplies a value when the object is defined. The statement `count = 15;`, executed after the definition, is an assignment. The value of the expression on the right is converted to the type of the object on the left and stored in that object. Here `15` is already an `int`, so its value is stored unchanged.
:::

:::esempio{titolo="Initial value and updated value"}
In the following fragment, `total` has a defined value before it is read.

```c
int total = 4;
int next = total + 3;
total = next + 2;
```

The first line sets `total` to $4$. The second uses that value to initialize `next` to $7$. The third reads `next` and then assigns $9$ to `total`. The value of `next` remains $7$ because initialization stored the result of the addition in a separate object.
:::

:::definizione{#limiti-dei-tipi titolo="Limits, bytes and sizeof"}
Values of type `int` cover at least the interval from $-32767$ to $32767$. `unsigned int` starts at $0$ and reaches at least $65535$. The actual limits `INT_MIN`, `INT_MAX` and `UINT_MAX` are defined in `<limits.h>`. Since C17 permits implementations with different limits, a calculation that depends on a maximum must use the limit of the type or state the assumed machine.

`sizeof` expresses a size in C bytes and its result has type `size_t`, an unsigned integer type. For `char`, `signed char` and `unsigned char`, the size is always $1$. The number of bits in a byte is `CHAR_BIT`, which is at least $8$. `sizeof(int) * CHAR_BIT` counts the bits of the object representation, including any padding bits. To determine the range of `int`, consult its limits rather than inferring it from the size alone.

The type `char` is distinct from `signed char` and `unsigned char`. The implementation specifies which of their ranges plain `char` adopts. When a small integer with explicitly declared signedness is needed, `signed char` is available.
:::

:::definizione{#letterali titolo="Constants in source code"}
The type of a **constant** depends on its form. Small decimal integer constants without a suffix, such as `12`, are `int`. The suffix `u` in `12u` gives type `unsigned int` in this case. Larger constants use lists of candidate types that depend on the base and the suffix. The first type in the list that represents the value is selected.

The form `14.0` has a decimal point and no suffix, so its type is `double`. `14.0f` is `float` and `14.0L` is `long double`. In source-code constants, the decimal separator is a period. The numeric locale concerns text conversion during execution and is studied with formatted input and output.
:::

:::osservazione
The notation `-7` applies the unary operator `-` to the integer constant `7`. This distinction matters near the limits of the range. To refer to the minimum `int` value in a portable program, the name `INT_MIN` directly expresses the limit of the implementation. The terms “width”, “signedness” and “representation” then have the meaning supplied by the declared type.
:::

## Grouping, evaluation and effects

:::definizione{#operatori-aritmetici titolo="Operands and results"}
The arithmetic operators `+`, `-`, `*` and `/` combine two arithmetic values to produce a value. The `%` operator requires integer operands. The common type of the two operands is determined by promotions and the usual arithmetic conversions. The operation is then performed on values of the common type.

A comparison such as `a < b` or `a != b` produces an `int` equal to $1$ when the relation is true and $0$ when it is false. Adding the results of two comparisons can therefore count how many of their conditions hold. Integer comparisons consider values after applying the required conversions to their operands.
:::

:::definizione{#precedenza titolo="Precedence and associativity"}
**Precedence** determines which operators take their operands first in the syntactic structure of an expression. For operators with the same precedence, **associativity** resolves grouping. Casts and other unary operators bind more tightly than `*`, `/` and `%`, which in turn bind more tightly than `+` and `-`. Relational comparison operators follow the arithmetic operators. Equality operators follow the relational comparison operators.

Because subtraction associates to the left, `18 - 7 - 4` groups as `(18 - 7) - 4` and has value $7$. In `14 - 2 * 5`, the multiplication forms the right operand of the subtraction, giving `14 - (2 * 5)`, with value $4$. Parentheses can enforce a different grouping.
:::

:::definizione{#effetti-collaterali titolo="Values, effects and sequencing"}
Evaluating an expression can compute a value and produce a **side effect**, such as updating an object. `n++` produces the previous value of `n` and increments its contents. `++n` produces the value after the increment. Both operations require the increment to be defined for the type of `n`.

A complete initializer and the complete expression of a statement are separated by the sequencing of the statements. In the following fragment, the third line reads `n` after the increment is complete.

```c
int n = 6;
int before = n++;
int after = n;
```

The result is `before` equal to $6$ and `after` equal to $7$. They come from two separate reads, one performed by the post-increment and the other by the following initializer.
:::

:::attenzione
Parentheses determine the structure of an expression. For example, `(a + b) + c` specifies which sum is an operand of the second. The order of evaluation of operands or arguments depends on the sequencing guarantees of the language. If an expression modifies a scalar object and reads it in an evaluation unsequenced relative to that modification, the behaviour is undefined. A portable form places the update and the use in successive full expressions.
:::

## Integer division and remainder

::::teorema{#quoziente-e-resto titolo="Quotient–remainder identity"}
Let `a` and `b` have type `int`, with `b` nonzero and the truncated quotient representable in `int`. Let $q$ denote the value of `a / b` and $r$ that of `a % b`. Division truncates towards zero and the following identity holds.
$$
a=bq+r,\qquad |r|<|b|.
$$
If the remainder is nonzero, it has the same sign as the dividend $a$. The identity allows both values to be calculated from a single division and checked by substitution into the equality.

:::dimostrazione
Write $x=\dfrac{a}{b}$ for the exact ratio and $q=\operatorname{trunc}(x)$ for its truncation towards zero. The remainder specified by the language, when the quotient is representable, is $r=a-bq$. Thus $r=b(x-q)$. Since $|x-q|<1$, we have $|r|<|b|$.

When $x-q$ is nonzero, its sign is the sign of $x$. On multiplying by $b$, the sign of the remainder becomes the sign of $a$. If $x$ is an integer, $q=x$ and $r=0$.
:::
::::

:::esempio{titolo="Negative dividend and divisor"}
For $a=-23$ and $b=-5$, the exact ratio is positive and belongs to the interval from $4$ to $5$, excluding the endpoints. Truncation gives $q=4$. The remainder is obtained as
$$
r=-23-(-5)\cdot4=-3 .
$$
The check gives $(-5)\cdot4+(-3)=-23$. The remainder is negative even with a negative divisor, because the relevant sign is that of the dividend.
:::

:::attenzione
The prerequisites apply to both `/` and `%`. If `b` is zero or the quotient is outside the range of `int`, both expressions have undefined behaviour. One case that depends on the limits is `INT_MIN / -1`. When `INT_MIN` is smaller than `-INT_MAX`, the mathematical negation of `INT_MIN` lies outside the range. The analysis must therefore check the denominator and representability before assigning a value to the expressions.
:::

## Choosing a type before calculation

:::definizione{#promozioni-intere titolo="Integer promotions"}
In expressions subject to **integer promotions**, such as the addition of two `short` values, operands of an integer type with lower rank than `int` are converted to `int` if that type represents all their values. Otherwise they are converted to `unsigned int`. Ranks establish an ordering among integer types. For the standard signed types, rank increases from `signed char` to `short`, `int`, `long` and `long long`. The corresponding unsigned type has the same rank.

For example, two `signed short` objects initialized to $100$ and $200$ are promoted to `int` before addition. The operands and the result of the sum therefore have type `int`. An `unsigned short` is promoted to `int` when `USHRT_MAX` is at most `INT_MAX` and to `unsigned int` in the other permitted cases.
:::

:::definizione{#conversioni-aritmetiche titolo="Usual arithmetic conversions"}
For a two-operand arithmetic operator with real operands, the **usual arithmetic conversions** determine a common type. If one operand has type `long double`, the other is converted to `long double`. In the absence of `long double`, the same rule is applied to `double` and then to `float`.

If both operands are integers, promotions apply first. If the resulting types match, that is the common type. If they have the same signedness and different types, the lower-ranking type is converted to the higher-ranking type. For mixed signedness, let $U$ be the unsigned type and let $S$ be the signed type. The conversion depends on the rank and range of each type.

- If $U$ ranks at least as high as $S$, the operand of type $S$ is converted to $U$.
- If $S$ ranks higher and represents every value of $U$, the operand of type $U$ is converted to $S$.
- Otherwise both operands are converted to the unsigned type corresponding to $S$.

In `9u + (-2)`, the two types have the rank of `int`, so the operation is performed in `unsigned int`. Conversion of the negative operand follows the modular rule for unsigned integers.
:::

:::definizione{#conversioni-assegnamento titolo="Casts and destination conversions"}
The **cast** `(T) expr` converts the result of `expr` to type `T`. Initialization and assignment convert to the destination even without a cast. To determine intermediate values, distinguish the conversion that precedes an operator from the conversion that stores the result.

Converting a finite floating-point value to an integer type other than `_Bool` discards the fractional part, truncating towards zero. The truncated value must be representable in the destination type. For example, on a binary system, `(int)(-5.75)` gives $-5$. Converting an integer to a real floating type preserves the value if it is exactly representable. If the value is in range but between two representable values, the choice between the two adjacent values is implementation-defined.
:::

:::esempio{titolo="Placement of a cast in division"}
Assume radix-two `double` and arithmetic conforming to C17 Annex F in round-to-nearest mode. The two expressions in the figure differ in the point at which a value is converted.

![The expressions (double)(11 / 4) and (double)11 / 4. The first performs integer division and gives 2.0. The second converts 11 and gives 2.75.](/immagini/informatica/tipi-ed-espressioni/schema-teoria-en.png)

In `(double)(11 / 4)` the operands of division are both `int`. The division produces $2$, from which the cast obtains $2.0$. In `(double)11 / 4` the cast converts the left operand before division. The arithmetic conversion also converts $4$ to `double`, so the ratio is
$$
\dfrac{11}{4}=2+\dfrac{3}{4}=2.75 .
$$
The value is exact in radix two because the denominator of the fractional part is a power of $2$ and these digits fit within the precision of `double`.
:::

## Representable results and semantics

::::teorema{#interi-unsigned titolo="Arithmetic modulo the number of values"}
Let $U$ be an unsigned integer type with maximum $U_{\max}$. Set $M=U_{\max}+1$ as a mathematical integer. Conversion from an integer type to $U$ produces the unique integer in $[0,M-1]$ congruent to the original value modulo $M$. The mathematical result of addition, subtraction or multiplication, when the operation is performed in type $U$, is reduced to the same interval.

:::dimostrazione
The conversion rule adds or subtracts the number of values $M$ until the value lies in the interval. Two distinct integers in the interval differ by at most $M-1$ in absolute value, so they have different remainders modulo $M$. Since the interval contains $M$ integers, each congruence class has a representative. Arithmetic in the unsigned type applies the same reduction to the mathematical result.
:::
::::

:::esempio{titolo="Subtraction in unsigned int"}
In `3u - 5u` the operation has type `unsigned int`. The mathematical result is $-2$. With $M=\mathrm{UINT\_MAX}+1$, the representative in $[0,M-1]$ is $M-2$, which equals $\mathrm{UINT\_MAX}-1$. As a check, the sum in `unsigned int` of this value and `2u` is $0$.
:::

:::definizione{#rappresentabilita titolo="Operation and result range"}
**Representability** requires that the value be permitted in the relevant type. In ordinary signed integer arithmetic, a mathematical result outside the range gives undefined behaviour. When an integer is converted to a signed type that cannot represent it, C17 specifies either an implementation-defined result or an implementation-defined signal. The distinction depends on which operation is performed.

To check an `int` addition of `value` and `delta` when `delta > 0`, compare `value` with `INT_MAX - delta`. The threshold difference is representable because `delta` is already a positive `int`. If `value` is at least `INT_MIN` and at most that threshold, the sum is also in range. This check precedes any calculation of the sum. The same criterion follows from the inequalities $a+b\leq \mathrm{INT\_MAX}$ and $a+b\geq\mathrm{INT\_MIN}$.
:::

:::definizione{#categorie-comportamento titolo="Categories in C17"}
**Implementation-defined behaviour** permits a choice from allowed possibilities and requires the implementation to document the choice. The range adopted for `char` is one example. **Unspecified behaviour** also permits allowed possibilities, and the implementation can choose without documenting which applies in each case. For example, the evaluation order of two independent arguments can vary.

For **undefined behaviour**, the standard imposes no requirements on the program behaviour in that case. Out-of-range signed arithmetic falls into this category. When the task is to classify an operation, identify the category specified by the standard. A value observed in one execution is evidence only about that execution.
:::

## Numeric output on stdout

:::definizione{#printf-formati titolo="Conversion specifiers for printf"}
The `printf` function, declared in `<stdio.h>`, writes to `stdout`. The format string contains ordinary characters, which are written directly, and conversion specifications, which determine how to read and display an argument. In a variadic function call, arguments after the declared portion undergo the default argument promotions. In particular, `float` becomes `double` and integer promotions apply.

| Specification | Argument type after promotions |
|---|---|
| `%d` | `int` |
| `%u` | `unsigned int` |
| `%ld` | `long` |
| `%zu` | `size_t`, subject to applicable promotions |
| `%f` | `double` |
| `%Lf` | `long double` |

`%%` writes the `%` character without consuming an argument. If output succeeds, `printf` returns the number of characters transmitted by the call. If a write or encoding error occurs, it returns a negative value. A specification whose type is incompatible with the argument produces undefined behaviour.
:::

:::definizione{#larghezza-e-precisione titolo="Field width and precision"}
**Field width** gives a minimum number of characters for the conversion. By default, a space is inserted on the left for each missing character. In `%5d` the width is $5$. The value $36$ occupies two characters and therefore requires three leading spaces. The value $123456$ occupies six characters and is written in full.

For `f`, precision is the number of digits following the decimal separator. In `%.2f` the precision is $2$. For `d`, precision instead specifies the minimum number of digits and may insert leading zeros. The sign, digits and separator belong to the field and contribute to its width.
:::

:::esempio{titolo="Aligning two fields"}
Assume a C17 Annex F implementation in round-to-nearest mode, the C numeric locale and successful output. The fragment includes `<stdio.h>`.

```c
printf("[%4d][%6.2f]", 17, 1.25);
```

The output is `[  17][  1.25]`. The first field is $4$ characters wide and contains two digits. The second is $6$ characters wide and the conversion `1.25` occupies four characters. Each requires two spaces on the left. The square brackets are ordinary characters and add four in total, so the return value is $4+6+4=14$.
:::

## Formatted input and assigned values

:::definizione{#scanf-formati titolo="Conversion specifiers for scanf"}
The `scanf` function, declared in `<stdio.h>`, reads from `stdin`. For each conversion that assigns a result, the address of the destination object is passed. The `&` operator obtains that address. The format must match the type of the object.

| Specification | Type of pointed-to object |
|---|---|
| `%d` and `%i` | `int` |
| `%u` | `unsigned int` |
| `%f` | `float` |
| `%lf` | `double` |
| `%Lf` | `long double` |

`%d` recognizes a base-ten integer. `%i` determines the base from the beginning of the field. For example, `014` corresponds to $12$ in base ten with `%i`, whereas with `%d` the value is $14$. Numeric conversions skip initial whitespace before the field. A whitespace directive in the format consumes zero or more whitespace characters and stops at the first other character or at end of input.
:::

:::definizione{#esito-lettura titolo="Scan result and assignment count"}
The value returned by `scanf` counts the number of objects it assigned. If a field fails to match, the function stops and returns the number of assignments already performed. It can return $0$ when the first field is present and fails to match. If an input failure occurs before the first conversion completes, the result is `EOF`. This includes, for example, empty input when reading an integer.

Consider `scanf("%d %lf", &count, &rate)` with `count` of type `int` and `rate` of type `double`. With input `8 stop`, the first field converts $8$ and the second stops at the text `stop`. The return value is $1$. The program can therefore use `count` as a result of that call, while `rate` retains its previous value. A check requiring $2$ assignments distinguishes a complete read from a partial one.
:::

:::attenzione
Numeric reads with `scanf` require the recognized result to be representable in the destination object. C17 defines conversion behaviour as undefined when the result lies outside that range. Checking the return value helps detect a matching failure and identify how many assignments took place. To accept arbitrary text and check numeric limits explicitly, a program can read a line and use `strtol`, as in the chapter on text files.
:::

:::osservazione
The C numeric locale uses a period in the decimal representation of input and output. The Italian formulas use a comma. The source fragment and the expected output line retain the actual character. The numerical formatting examples assume round-to-nearest mode on a C17 Annex F implementation. Thus `printf("%.2f", 1.25)` produces `1.25` in the C locale, and the same quantity written in a formula is $1.25$.
:::
