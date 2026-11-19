---
titolo: Computer architecture and compilation
sommario: The stored-program model, memory hierarchies and the path from C17 source code to execution.
---

## Components at run time

:::definizione{#programma-memorizzato titolo="Stored program"}
A computer executes **instructions**, that is, elementary operations such as “add two numbers” or “copy a value”. A **program** is a sequence of instructions. In a **stored-program** computer the instructions are written in memory as numbers, like the data. The **processor** reads them one at a time and executes them. To make the computer carry out a different task it is therefore enough to load another program into memory, without modifying the circuits.

**Memory** is a sequence of numbered cells, and the number of a cell is its **address**. In the von Neumann model the same memory contains both instructions and data. A sequence of bits, by itself, does not say whether it is an instruction or a datum. It is an instruction when the processor reads it in order to execute it, and it is a datum when an instruction reads it as a value to operate on.
:::

:::definizione{#stato-macchina titolo="Processor state and registers"}
The processor contains a few very fast internal cells, called **registers**, in which it keeps the values it is working on. One particular register, the **program counter** `PC`, contains the address of the next instruction to execute. The work is divided between two parts of the processor. The **control unit** reads the instruction, recognizes which operation it denotes and directs the transfers. The **arithmetic logic unit** performs the computations, for example an addition. The **state** of the machine at a given instant is the set of the contents of memory and of the registers, plus the information on whether the machine has halted.

The processor exchanges values with memory in two ways. In a **read** it specifies an address and receives a copy of the value contained in that cell, which is left unchanged. In a **write** it specifies an address and a value, and the value replaces the contents of the cell. In every access one therefore distinguishes the address, the value transferred and the direction of the transfer.
:::

:::esempio{titolo="Effect of a read"}
The register `R` contains $8$ and the cell with address $12$ contains $43$. A read instruction copies cell $12$ into `R`. After the instruction `R` contains $43$ and the value $8$ is lost. Cell $12$ still contains $43$, because a read copies the value without removing it. The number $12$ is the address, that is, it says where to read; the number $43$ is the datum that is read.
:::

## Stepping through a simple machine

:::definizione{#istruzioni-modello titolo="Instructions in the accumulator model"}
To follow the execution of a program by hand one uses a very simple machine. It has a single register for computations, the **accumulator** `A`, and the counter `PC`. Each memory cell contains an integer or an instruction, and $M[a]$ denotes the contents of the cell with address $a$. At each step the machine executes the instruction found at the address contained in `PC` and then updates `PC`.

| Instruction | Effect |
|---|---|
| `LOAD a` | Copies $M[a]$ into `A` |
| `ADD a` | Adds $M[a]$ to the value of `A` |
| `STORE a` | Copies `A` into $M[a]$ |
| `JZ a` | Jumps to address $a$ if `A` is zero |
| `HALT` | Stops the machine |

After `LOAD`, `ADD` and `STORE` the counter increases by one, so the machine moves on to the next instruction. `JZ a` (*jump if zero*) is a conditional jump. If `A` is zero, `PC` becomes $a$; otherwise it increases by one. `HALT` stops the machine and leaves `PC` unchanged. Real processors have many more instructions and numbers with a finite number of bits, but they work according to the same scheme.
:::

:::esempio{titolo="Fetching, branching and writing"}
Initially `PC` is $0$ and the data are $M[20]=0$, $M[21]=7$, $M[22]=0$. The program copies cell $20$ into `A`. If the value is zero it skips the addition, otherwise it adds cell $21$. Finally it writes the result into cell $22$. In the listing the number on the left is the address of the instruction.

```text
0  LOAD 20
1  JZ 3
2  ADD 21
3  STORE 22
4  HALT
```

| `PC` before | `A` after | `PC` after |
|---:|---:|---:|
| 0 | 0 | 1 |
| 1 | 0 | 3 |
| 3 | 0 | 4 |
| 4 | 0 | 4 |

Each row of the table is one step. At the step with `PC` equal to $0$ the machine executes `LOAD 20`, so `A` becomes $M[20]=0$ and `PC` moves to $1$. At address $1$ there is `JZ 3`. Since `A` is zero, `PC` becomes $3$ and the instruction `ADD 21` at address $2$ is not executed. `STORE 22` copies `A`, that is, $0$, into cell $22$, and `HALT` stops the machine. If cell $20$ contained a nonzero value, the jump would not take place and cell $22$ would end up with that value plus $7$.
:::

:::osservazione
The execution of each instruction is divided into three phases, which together form the **instruction cycle**. In the **fetch** phase the processor reads the instruction from the cell indicated by `PC`. In the **decode** phase it recognizes which instruction it is and what its operand is; for `JZ 3` it recognizes a jump with operand $3$. In the **execute** phase it carries out the operation and updates `PC`.

A trace, like the table in the example, reports for each step the value of `PC` before the instruction and the values after it. After a jump the new `PC` differs from the previous one plus one. In the example, always adding one would also execute `ADD 21`, which the jump avoids.
:::

## From addresses to bytes

::::teorema{#indirizzi-e-capacita titolo="Capacity and address ranges"}
With $p$ bits one can write $2^p$ different addresses, from $0$ to $2^p-1$. If each address corresponds to a **byte**, that is, a group of eight bits, the memory has a capacity of $2^p$ bytes; with $p=16$ that is $65536$ bytes. A region of memory is specified by its starting address $u$, included, and its ending address $v$, excluded, and is written $[u,v)$, with $0\leq u\leq v$. The region contains $v-u$ bytes. If the region is divided into groups of $g$ bytes each, with $g$ a positive integer, there are $\dfrac{v-u}{g}$ groups.

:::dimostrazione
Each of the $p$ bits can be $0$ or $1$, so there are $2\cdot 2\cdots 2=2^p$ combinations, and each corresponds to one byte. For the second statement, subtracting $u$ from the addresses of $[u,v)$ gives the integers from $0$ to $v-u-1$, of which there are $v-u$; if the region is empty, that is, $u=v$, the count gives zero. Since the groups do not overlap and each contains $g$ bytes, the total number of bytes is $g$ times the number of groups.
:::
::::

:::esempio{titolo="A device’s address range"}
A peripheral, for example a network card, occupies the addresses from `0x100` included to `0x130` excluded; the prefix `0x` denotes a hexadecimal number. The peripheral is divided into registers of $4$ consecutive bytes each. The region measures $(130)_{16}-(100)_{16}=(30)_{16}=48$ bytes, so it contains $\dfrac{48}{4}=12$ registers. As a check, the twelfth register starts $11\cdot4=44$ bytes after the beginning and its four bytes reach position $47$, the last one in the region.
:::

:::attenzione
The number of bits of the address determines how many addresses can be written, not how much memory is installed. With $16$ bits the addresses run from $0$ to $65535$, but a machine may have only $4096$ bytes of memory, and nothing corresponds to the other addresses. The actual capacity is computed by counting the addresses to which memory corresponds. In C the size of a datum is measured in bytes with the `sizeof` operator, and the number of bits in a byte is the constant `CHAR_BIT` from `<limits.h>`, which on common machines is $8$.
:::

:::definizione{#ordine-byte titolo="Byte order within a word"}
A number that occupies several bytes, for example an integer of two or four bytes, is stored in consecutive cells, and it remains to decide in which order. With **little endian** order the lowest address holds the least significant byte, that is, the one with the smallest weight. With **big endian** order the lowest address holds the most significant byte.

For example, the number $(012A)_{16}=298$ occupies the two bytes `0x01` and `0x2A`. In little endian the lowest address contains `0x2A` and the next one `0x01`; in big endian the order is the opposite. In the other direction, if the lowest address contains `0x2A` and the next one `0x01`, the little endian reading gives $(012A)_{16}=298$ and the big endian reading gives $(2A01)_{16}=10753$. In formulas, if there are $k$ bytes and $b_j$ is the byte at the starting address plus $j$, the unsigned value is $\sum_{j=0}^{k-1}b_j256^j$ in little endian and $\sum_{j=0}^{k-1}b_j256^{k-1-j}$ in big endian. The weight $256=2^8$ is the number of values of an eight-bit byte.
:::

## Blocks, caches and access times

:::definizione{#localita-memoria titolo="Memory hierarchy and locality of access"}
Fast memories are expensive and small, whereas large ones are slow. A computer therefore uses several kinds together, organized in a **memory hierarchy** of four levels, from the fastest and smallest to the slowest and largest. The **registers** are inside the processor. The **cache** is a small, fast memory that keeps a copy of recently used data. **Main memory** (RAM) contains the instructions and data of the running programs. **Mass storage**, that is, disks and solid-state drives, keeps data even when the computer is switched off. When the processor asks for a datum, it looks for it in the cache first. If it is there, the access is fast; otherwise the datum must be fetched from main memory, which takes longer.

The cache is useful because programs do not access memory at random. By **temporal locality** a datum that has just been used is usually reused shortly afterwards, like the counter of a loop. By **spatial locality**, after one datum the nearby ones are usually used, like the consecutive elements of an array. To exploit spatial locality the cache copies a **block** of consecutive bytes each time rather than a single byte. With blocks of four bytes, the addresses $4$, $5$, $6$ and $7$ lie in the same block, so after reading $5$ the bytes $6$ and $7$ are already in the cache as well.
:::

:::definizione{#cache-diretta titolo="Blocks and direct-mapped caches"}
Memory is divided into blocks of $B>0$ bytes, numbered from zero. Block $0$ contains the addresses from $0$ to $B-1$, block $1$ those from $B$ to $2B-1$ and so on. The address $a\geq 0$ therefore belongs to block $b=\left\lfloor\dfrac{a}{B}\right\rfloor$, that is, the integer quotient of the division of $a$ by $B$. The remainder of the division, $a-bB$, is the **offset**, that is, the position of the byte inside the block. With $B=4$, address $11$ lies in block $2$ with offset $3$, because $11=4\cdot 2+3$.

The cache consists of $L>0$ **lines**, each of which contains one block or is empty. In a **direct-mapped** cache each block can be stored in only one line, and block $b$ goes into line $b\bmod L$, that is, the remainder of the division of $b$ by $L$. With $L=2$ the even blocks go into line $0$ and the odd ones into line $1$. At each read one looks at the line of the requested block. If it contains exactly that block, the access is a **hit** and the datum is available immediately. If the line is empty or contains another block, the access is a **miss**; in this case the requested block is copied from main memory into the line and replaces the one that was there.
:::

:::esempio{titolo="A conflict within one cache line"}
The blocks have $4$ bytes and the cache has two lines, initially empty. The program reads, in order, the addresses $3$, $4$, $5$, $11$, $2$. For each one computes the block, as the integer quotient of the division by $4$, and the line, as the remainder of the division of the block by $2$.

| Address | Block | Line | Result |
|---:|---:|---:|---|
| 3 | 0 | 0 | miss |
| 4 | 1 | 1 | miss |
| 5 | 1 | 1 | hit |
| 11 | 2 | 0 | miss |
| 2 | 0 | 0 | miss |

The read of $3$ finds line $0$ empty, so it is a miss and block $0$ is loaded. The same happens for $4$, with block $1$ in line $1$. Address $5$ still belongs to block $1$, which is already in line $1$, so it is a hit. Address $11$ belongs to block $2$, which goes into line $0$ because $2$ is even; the line contains block $0$, so it is a miss and block $2$ takes its place. Address $2$ belongs to block $0$, which had been loaded at the first read but has just been replaced, so it is a miss again.
:::

:::definizione{#costo-medio titolo="Mean time in the two-level model"}
Every access takes the time $t_h$ to look up the cache. A miss takes an additional time $P$, called the **penalty**, to fetch the block from main memory. If $h$ is the fraction of accesses that are hits, the fraction of misses is $1-h$ and the average time of an access is
$$
\bar{t}=h\,t_h+(1-h)(t_h+P)=t_h+(1-h)P .
$$
The term $t_h$ is paid by all accesses, the penalty $P$ only by the misses. In the five accesses of the table there is a single hit, so $h=\dfrac{1}{5}$. With $t_h=2\,\mathrm{ns}$ and $P=15\,\mathrm{ns}$ one obtains $\bar{t}=2+\dfrac{4}{5}\cdot 15=14\,\mathrm{ns}$. The direct count gives the same result, because a hit lasts $2\,\mathrm{ns}$ and each of the four misses lasts $17\,\mathrm{ns}$, for a total of $70\,\mathrm{ns}$, and $\dfrac{70}{5}=14\,\mathrm{ns}$. If an exercise gives the **total** time of a miss, that value replaces $t_h+P$.
:::

## How the preprocessor sees the source

:::definizione{#preprocessore titolo="Preprocessing directives"}
A C program is a text file, the **source file**. Before compilation proper the source passes through the **preprocessor**, a program that modifies the text according to the lines beginning with `#`, called **directives**. Three directives are used most. `#include` inserts at that point the contents of another file, called a **header**. `#define` associates a text with a name, and every later occurrence of the name is replaced by that text; a name defined in this way is called a **macro**. `#if` keeps or removes a part of the source according to the value of a condition. The compiler receives the text already modified.

For example, after `#define SIZE 12` the line `int n = SIZE;` becomes `int n = 12;`. The replacement concerns the name when it appears as a word of its own; inside a string such as `"SIZE"` the characters are left unchanged. A macro is therefore a text replacement carried out before compilation, whereas a variable is a region of memory with a type, which exists while the program is running.
:::

:::esempio{titolo="A branch selected before compilation"}
Consider the following source fragment.

```c
#define MEASURE 1
#if MEASURE
#define SCALE 4
#else
#define SCALE 2
#endif
int factor = SCALE;
```

The first line defines `MEASURE` as `1`. The directive `#if MEASURE` becomes `#if 1`; the condition is true, so the preprocessor keeps `#define SCALE 4` and removes the branch after `#else`. The last line becomes `int factor = 4;`. Changing the first line to `#define MEASURE 0` would keep the other branch and the last line would become `int factor = 2;`. The choice is made before compilation, so only one of the two values remains in the executable program.
:::

:::definizione{#unita-traduzione titolo="Translation units and shared declarations"}
A program of some size is divided into several `.c` source files, which are compiled one at a time. The text that the compiler receives for one source file, after the preprocessor has inserted the headers and made the replacements, is called a **translation unit**. When a function is defined in one file and called in another, the compiler translating the second file must know at least its **declaration**, that is, its name, the type of its result and the types of its parameters. The declaration is written only once in a `.h` header, and every source file that uses the function includes that header.

If a header is included twice in the same unit, for example because another header includes it too, its declarations appear twice. **Include guards** prevent this. The header begins with `#ifndef NAME`, which means “if `NAME` is not defined”, followed by `#define NAME`, and ends with `#endif`. At the first inclusion `NAME` is not defined, so the contents are kept and `NAME` gets defined. At the second inclusion `NAME` is already defined and the contents are skipped. Each source file is preprocessed separately, so the guard starts afresh for each one.
:::

## From source code to object code

:::definizione{#file-oggetto titolo="Separate translation and object files"}
The translation of a source file into an executable program takes place in four phases. On Unix-like systems the `cc` command starts all of them.

1. **Preprocessing** applies the directives and produces a C source without directives (`.i` file).
2. **Compilation** checks that the text obeys the rules of C and translates it into **assembly**, a language in which each line corresponds to one processor instruction (`.s` file).
3. **Assembly** translates the assembly text into machine code, that is, into the numbers that the processor executes, and produces an **object file** (`.o` file).
4. **Linking** joins the object files into a single executable file.

An object file contains the machine code of a single source file. Calls to functions defined in other files are left pending in it, annotated with the name of the function, and are completed during linking. Usually a single command performs the first three phases without saving the intermediate files. In the commands of this chapter `-std=c17` specifies the version of the C language and `-o` the name of the file to produce.
:::

:::esempio{titolo="Saving the intermediate products"}
The program consists of two source files. The file `main.c` calls the function `scale`, defined in `scale.c`. The diagram shows the phases for `main.c`, carried out one at a time with the `cc` command in a terminal.

![Source main.c produces main.i, then main.s and main.o. Linking combines main.o and scale.o to produce app.](/immagini/informatica/architettura-e-compilazione/schema-teoria-en.png)

```shell
cc -std=c17 -E main.c -o main.i
cc -std=c17 -S main.i -o main.s
cc -c main.s -o main.o
cc -std=c17 -c scale.c -o scale.o
cc main.o scale.o -o app
```

The `-E` option stops `cc` after preprocessing, and the result is `main.i`. The `-S` option stops it after compilation, and the result is the assembly file `main.s`. The `-c` option stops it after assembly, and the result is the object file `main.o`. In the fourth line `-c` is applied directly to `scale.c`, so `cc` performs the first three phases in sequence and produces `scale.o`. The last line has no stopping option and links the two object files into the executable `app`. If later only `scale.c` is modified, without changing the declaration of the function, it is enough to repeat the fourth and fifth lines, because `main.o` is still valid.
:::

:::osservazione
One line of C does not correspond to a single processor instruction. A C statement such as `a = b + c * d;` requires several machine instructions, and the compiler may also reorder or remove operations, provided the program produces the same results. The number of lines in the source and the number of instructions in the `.s` file are therefore different.
:::

## From object files to an executable

:::definizione{#risoluzione-simboli titolo="Definitions and references during linking"}
In the object file every function defined in the source appears with its name, called a **symbol**, next to its code. Every call to a function defined elsewhere appears as a **reference** to a symbol that has no code yet. **Linking** joins the object files, looks for the definition with the same name for each reference and inserts into the call the address that the function has in the executable.

Linking fails in two cases. If no object file contains the definition of a name that is used, the reference remains **undefined** (*undefined reference*). If two object files define the same name, there is a **multiple definition**. The declaration and the definition therefore have different jobs. The declaration, usually in a header, lets the compiler check that the call uses the right types. The definition contains the body of the function and is needed by the linker, which must find the code to execute.
:::

:::esempio{titolo="Two units with a shared header"}
The file `scale.h` declares the function with an include guard.

```c
#ifndef SCALE_H_INCLUDED
#define SCALE_H_INCLUDED
int scale(int value);
#endif
```

The file `scale.c` includes the header and defines the function. In the example the argument lies between $-100$ and $100$, so its double certainly fits in an `int`.

```c
#include "scale.h"

int scale(int value)
{
    return 2 * value;
}
```

The file `main.c` includes the same header in order to call the function.

```c
#include <stdio.h>
#include "scale.h"

int main(void)
{
    printf("%d\n", scale(6));
    return 0;
}
```

When the two source files are compiled separately, `main.o` contains a reference to `scale` and `scale.o` contains its definition, so linking succeeds. Twice $6$ is $12$, and the program prints `12` followed by a newline. If only `main.o` were passed to the linker, the name `scale` would be left without a definition and linking would fail with an undefined reference. The header lets the compiler check the call in `main.c`; the body in `scale.c` provides the code that linking puts into the executable.
:::

:::attenzione
Linking matches references and definitions by name only and does not check types. If `main.c` declared on its own `double scale(double value);` while `scale.c` defines the function with an `int` parameter, each file would compile without errors and linking would succeed, but the program would give wrong results. For this reason the declaration is written only once in the header and the header is included both in the file that calls the function and in the one that defines it; in this way the compiler compares the declaration with the definition and reports any difference.
:::

## Starting and diagnosing a C program

:::definizione{#avvio-hosted titolo="Input, output and termination in a hosted environment"}
The execution of a C program starts from the function `main`. A program that runs under an operating system is said to run in a **hosted** environment. The form `int main(void)` says that `main` receives no parameters and returns an integer. This integer is passed to the operating system when the program ends and indicates whether the program ended correctly. By convention `return 0;` signals success. The header `<stdlib.h>` defines two names for the same purpose, `EXIT_SUCCESS` for success and `EXIT_FAILURE` for failure.

The function `printf` writes characters to **standard output**, called `stdout`, which is usually the terminal but can be redirected to a file. The printed text and the value returned by `main` are two distinct results. The program of the previous example prints `12` and a newline, and in addition returns $0$. Whoever tests a program checks both, that is, that the printed text is the expected one and that the returned value indicates success.
:::

:::definizione{#diagnosi-fasi titolo="Diagnosing errors from the expected build product"}
When building a program fails, the first step is to understand in which phase the error occurred, because each phase produces errors of a different kind.

- **Preprocessing.** An `#include` names a file that cannot be found; the message contains the name of the file.
- **Compilation.** The source violates a rule of the language, for example with a call that has one more argument than the declaration; the message gives the file and the line.
- **Linking.** A function is called but no object file defines it; the message contains the name of the function and not a line of the source.
- **Execution.** The program is built without errors but prints a result different from the expected one; the error is in the logic of the program.

The wording of the messages changes from one compiler to another, whereas the phase can always be recognized. For a missing header one checks the name and the folder in which it is located. For an undefined reference one checks which file defines the function and whether its object file was passed to the linker. For a wrong result one fixes a test case, that is, a precise input with the expected output, and follows the execution on that case.
:::

:::osservazione
The C rules on the translation and execution environments are described in the WG14 committee’s C17 document. The options `-E`, `-S`, `-c` and `-o` follow the GCC driver documentation. [C17 draft N2176](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2176.pdf) · [GCC overall options](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
:::
