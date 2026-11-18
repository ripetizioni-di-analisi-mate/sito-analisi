---
titolo: Computer architecture and compilation
sommario: The stored-program model, memory hierarchies and the path from C17 source code to execution.
---

## Components at run time

:::definizione{#programma-memorizzato titolo="Stored program"}
In a **stored-program computer**, instructions are encoded and kept in memory accessible to the processor. The processor fetches an encoding, determines the operation it denotes and performs that operation on the data. Loading different instructions changes the computer’s behaviour while preserving the set of operations that the hardware can perform.

In the von Neumann model, memory space contains both data and instructions. The role of a bit sequence depends on the access that interprets it. When the processor fetches the sequence for instruction decoding, it reads it as code. When a load instruction reads the same sequence as a value, it interprets it as data. Some machines separate instruction and data accesses, for example by using two distinct caches. Separate caches can coexist with a unified address space.
:::

:::definizione{#stato-macchina titolo="Processor state and registers"}
The **state** of the model includes the contents of memory, the registers and whether execution has halted. Registers hold values directly available to the processor. The program counter, denoted by `PC`, specifies the address of the instruction to fetch at the start of the next step. The control unit decodes the instruction and coordinates the accesses. The arithmetic logic unit can, for example, add the values held in registers.

A memory access specifies an address and a read or write operation. On a read, the value moves from memory to a register or to the fetch mechanism. On a write, the value moves from the processor to the addressed cell. The channel that carries addresses, the one that carries data and the control signals may be separate or may share part of the physical interconnect. Analysing the step requires distinguishing the selected address, the transferred data and the direction of transfer.
:::

:::esempio{titolo="Effect of a read"}
Consider register `R` holding $8$ and the memory cell at address $12$ holding $43$. A read instruction that copies cell $12$ into `R` sets the register to $43$. The memory at address $12$ retains $43$ because this is a read. The number $12$ identifies the location, so the new contents of the register are the data value $43$.
:::

## Stepping through a simple machine

:::definizione{#istruzioni-modello titolo="Instructions in the accumulator model"}
The instructional machine uses an accumulator `A` for a mathematical integer and a counter `PC`. Data cells contain integers, and each instruction occupies one cell. Let $M[a]$ denote the data at address $a$. Each fetch uses the current value of `PC`, so the next step depends on the update performed in the present step.

| Instruction | Effect, apart from updating `PC` |
|---|---|
| `LOAD a` | Copies $M[a]$ into `A` |
| `ADD a` | Adds $M[a]$ to the value of `A` |
| `STORE a` | Copies `A` into $M[a]$ |
| `JZ a` | Selects the next address |
| `HALT` | Stops the machine |

For `LOAD`, `ADD` and `STORE` the counter advances by one cell. With `JZ a` it is set to $a$ if `A` is zero and advances by one cell otherwise. In this model, `HALT` preserves the current `PC` and sets the halted state. In the traces, every specified access is to an existing cell. A real processor may have instructions of varying lengths, finite-width arithmetic and a different convention for observing the counter.
:::

:::esempio{titolo="Fetching, branching and writing"}
Assume an initial `PC` of $0$ and data values $M[20]=0$, $M[21]=7$, $M[22]=0$. The program loads the value of cell $20$, tests for zero and decides whether to add the contents of cell $21$.

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

First the machine reads `LOAD 20` and the data value $M[20]$ replaces the initial contents of `A`. Since the new value is zero, the branch sets `PC` directly to $3$. The addition at address $2$ is absent from the trace. The write to $M[22]$ therefore transfers zero. To check the result, trace the origin of the data written. The last assignment to `A` comes from cell $20$, which indeed holds zero.
:::

:::osservazione
The instruction cycle distinguishes **fetching**, decoding and execution. Fetching `JZ 3` reads the instruction cell indicated by `PC`. Decoding recognises a branch and extracts the operand $3$. Execution tests the condition on `A` and determines the next address. These are logical stages. A design may overlap operations from successive instructions provided it preserves the effects specified by the model visible to the program.

A trace shows `PC` before the step and records the value after each update. As each row describes the execution of one instruction, a branch appears as a change to the next address. Always adding one to the address of the instruction just executed would include the addition that the branch skips in this example.
:::

## From addresses to bytes

::::teorema{#indirizzi-e-capacita titolo="Capacity and address ranges"}
Let $p$ be the positive number of bits in an address. If every address identifies an installed byte and addresses and bytes are in one-to-one correspondence, the capacity is $2^p$ bytes. For integers $u$ and $v$ with $0\leq u\leq v$, the half-open region $[u,v)$ contains $v-u$ consecutive addresses. If each group of $g$ bytes identifies a register, with $g$ a positive integer, and the entire region is partitioned into such groups, the number of registers is $\dfrac{v-u}{g}$.

:::dimostrazione
Each of the $p$ bits has two independent choices, so the number of addresses is the product of $p$ factors equal to two. The one-to-one correspondence assigns exactly one byte to each combination. For the second claim, the range is empty when $u=v$. When $u<v$, subtracting $u$ from the addresses in $[u,v)$ gives the integers from $0$ to $v-u-1$, giving $v-u$ addresses. Each register contains $g$ bytes and the registers are disjoint, so the total number of bytes is $g$ times the number of registers.
:::
::::

:::esempio{titolo="A device’s address range"}
A device occupies addresses from `0x100` inclusive to `0x130` exclusive. Each register occupies $4$ consecutive bytes. The region spans $(30)_{16}=48$ bytes, so it contains $\dfrac{48}{4}=12$ registers. As a check, the starting address of the twelfth register is $11\cdot4=44$ bytes from the beginning. Its four bytes end at offset $47$, the last admissible position.
:::

:::attenzione
The address width determines how many positions can be expressed. Actual installed capacity may be smaller. For example, $16$ bits admit addresses from $0$ through $65535$, while a machine may have $4096$ installed bytes and leave all other positions unused. Physical capacity counts the positions actually assigned to memory. A C byte is the unit measured by `sizeof`. Its number of bits is given by `CHAR_BIT` in `<limits.h>`.
:::

:::definizione{#ordine-byte titolo="Byte order within a word"}
Consider a $k$-byte unsigned word on a machine with eight-bit bytes. Let $b_j$ be the value of the byte at the starting address plus $j$, where $0\leq j<k$. In **little-endian** order, byte $0$ is least significant, so the value of the word is $\sum_{j=0}^{k-1}b_j256^j$. In **big-endian** order, byte $0$ is most significant, giving the value $\sum_{j=0}^{k-1}b_j256^{k-1-j}$. The base $256$ comes from $2^8$, the number of bit patterns in a byte on the assumed machine.

With two bytes for which the lower address holds `0x2A` and the following byte holds `0x01`, the little-endian reading gives $(012A)_{16}=298$. The big-endian reading gives $(2A01)_{16}=10753$. The two byte addresses and the contents of each byte stay the same across both interpretations. The order determines which byte carries the weight $256$.
:::

## Blocks, caches and access times

:::definizione{#localita-memoria titolo="Memory hierarchy and locality of access"}
A **memory hierarchy** organises levels with different capacities and access times. Registers are directly available to processor instructions. A cache keeps copies of memory blocks. Main memory holds instructions and data for running programs. Mass storage is designed to keep information for the long term. An access that finds its block in the cache completes at the nearest level considered in the model. Otherwise, the system retrieves the data from another level.

**Temporal locality** concerns the reuse of a location or block after a short interval in the access sequence. **Spatial locality** concerns accesses to nearby locations. Reading addresses $5$, $6$ and $7$ with four-byte blocks touches one block and benefits from spatial locality. Reading $5$ again after those accesses also exhibits temporal locality. Locality describes the access sequence. The presence of a particular block also depends on the cache configuration and on any replacements.
:::

:::definizione{#cache-diretta titolo="Blocks and direct-mapped caches"}
A byte-addressed memory starting at zero is divided into blocks of $B>0$ bytes. For integer address $a\geq0$, the block number is $b=\lfloor\dfrac{a}{B}\rfloor$ and the offset, or displacement within the block, is $a-bB$. This follows because block $b$ occupies the range $[bB,(b+1)B)$. Equal offsets indicate the same relative position in blocks that may be different.

In a **direct-mapped cache** with $L>0$ lines, block $b$ can occupy only line $b\bmod L$. Each line keeps enough information to identify the block it holds. In the tracing model, the line stores the full block number or is empty. A read is a **hit** when the line already holds the requested block. A **miss** occurs when the line is empty or holds a different block. In the latter case, the requested block is loaded in place of the previous one. The exercise assumes that there are no other accesses or prefetches.
:::

:::esempio{titolo="A conflict within one cache line"}
Use blocks of $4$ bytes and two initially empty lines. The reads go to $3$, $4$, $5$, $11$ and $2$.

| Address | Block | Line | Result |
|---:|---:|---:|---|
| 3 | 0 | 0 | miss |
| 4 | 1 | 1 | miss |
| 5 | 1 | 1 | hit |
| 11 | 2 | 0 | miss |
| 2 | 0 | 0 | miss |

Address $5$ meets the same block as address $4$, so it is a hit. Block $2$ uses the line occupied by block $0$ because both yield a remainder of zero when divided by two. When the trace returns to block $0$, the only line that can hold it contains block $2$. The accesses to addresses $3$ and $2$ belong to the same block, yet the intervening access to block $2$ causes another miss.
:::

:::definizione{#costo-medio titolo="Mean time in the two-level model"}
Let $t_h$ be the time spent checking the cache on every access. Let $P$ be the fixed extra time on a miss. If $h$ is the fraction of hits in a sequence with at least one access, the mean time is
$$
\bar{t}=h\,t_h+(1-h)(t_h+P)=t_h+(1-h)P .
$$
In the final expression, $t_h$ accounts for the cache check incurred by every access. The term $(1-h)P$ adds the penalty only to the fraction $1-h$ of accesses. For the five accesses in the table, $h=\dfrac{1}{5}$. With $t_h=2\,\mathrm{ns}$ and $P=15\,\mathrm{ns}$ the mean is $14\,\mathrm{ns}$. Adding the actual access times gives $2+4\cdot17=70\,\mathrm{ns}$, which confirms the mean. If the problem gives the **total** miss time, use that time in place of $t_h+P$ in the weighted average.
:::

## How the preprocessor sees the source

:::definizione{#preprocessore titolo="Preprocessing directives"}
The preprocessor treats the source as a sequence of preprocessing tokens. For the cases in this chapter, `#include` brings in the content located for the header, `#define` associates a name with a replacement and `#if` determines which part of the source remains based on an expression accepted by the preprocessor. The directives operate before the resulting code is analysed as a C program.

For example, after `#define SIZE 12`, the token `SIZE` in `int n = SIZE;` is replaced by the token `12`. In a string literal such as `"SIZE"` the characters form part of a single token, so they remain unchanged. Macro replacement operates on source tokens. By contrast, an object declared in C has a type and, when used as a value, is part of the code analysed after preprocessing.
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

After expansion in the condition, `#if` receives the value $1$ and selects the first branch. Replacing `SCALE` in the initializer therefore gives `int factor = 4;`. Changing `MEASURE` to $0$ causes the alternative branch to establish the replacement with $2$. In either case, the final initializer is one C expression. The executable incorporates the result of that choice in the code or the data generated by the compiler.
:::

:::definizione{#unita-traduzione titolo="Translation units and shared declarations"}
In the multiple-file example, a **translation unit** comes from a `.c` source file and the material made available by its directives. Each source file is preprocessed with its own set of definitions and inclusions. Including the same header in two source files makes its declarations available in both translation units. If a function defined in one file is called from another, a shared declaration tells the compiler which type applies to the call.

An include guard uses a macro name defined the first time the header is expanded in a translation unit. A subsequent inclusion of the same header finds the name already defined and omits the guarded portion. Because the preprocessing of another source file is separate, the guard takes effect anew for that source file. A header change can affect every translation unit that includes it, including those where the inclusion goes through another header.
:::

## From source code to object code

:::definizione{#file-oggetto titolo="Separate translation and object files"}
In a GCC-compatible toolchain, the `cc` command is a driver that starts the requested stages. Starting with `.c` source, it can save the preprocessed source in `.i`. Compilation proper checks the resulting C code and can produce an assembly listing `.s`. The assembler converts the listing to an object file `.o`. The object file holds sections containing code or data and the information the linker needs for references and locations that remain to be resolved. The driver can also produce the object file in a single command, leaving the intermediate products implicit.

The file extensions and the following options are driver conventions. The logical phases of translation specified by ISO C may be implemented with different tools and file formats. In the commands in this chapter, `-std=c17` selects the language version in invocations that handle C, while `-o` names the requested output.
:::

:::esempio{titolo="Saving the intermediate products"}
Source file `main.c` contains a program that calls the external function `scale`, which is defined in `scale.c`. The diagram shows the explicit path for `main.c` in an environment with a GCC-compatible driver, an object-file format and a POSIX-style shell.

![Source main.c produces main.i, then main.s and main.o. Linking combines main.o and scale.o to produce app.](/immagini/informatica/architettura-e-compilazione/schema-teoria-en.png)

```shell
cc -std=c17 -E main.c -o main.i
cc -std=c17 -S main.i -o main.s
cc -c main.s -o main.o
cc -std=c17 -c scale.c -o scale.o
cc main.o scale.o -o app
```

`-E` stops after preprocessing. Applying `-S` to `main.i` produces the assembly listing. The driver treats `main.s` as assembler input and `-c` produces `main.o`. The same `-c` applied to `scale.c` also runs the earlier stages. The final command uses the two object files as linker inputs. If only `scale.c` changes and the interfaces remain the same, it is possible to rebuild `scale.o` and link again while reusing `main.o` produced from the same set of declarations.
:::

:::osservazione
The compiler interprets the text according to the syntax and semantics of the language. One C statement can contribute to several machine instructions, while several C operations can be combined or removed if observable behaviour remains equivalent in the defined cases. A source line count and an instruction count in `.s` therefore measure different quantities. By contrast, traces for the instructional processor use a sequence of instructions already defined for that machine.
:::

## From object files to an executable

:::definizione{#risoluzione-simboli titolo="Definitions and references during linking"}
In the object-file model, an external symbol represents a name visible across translation units, such as a function defined in another source file. Every caller can generate a reference to that name. **Linking** associates references with definitions and updates the code and data locations according to the final layout. The model considers object files passed explicitly to the driver and containing ordinary strong symbols. Each external reference to be resolved requires a corresponding definition, and the same external function requires compatible declarations.

A name with no definition among the inputs being used remains unresolved. Two ordinary external definitions for the same name produce a conflict. A declaration supplies the type during compilation. A function definition adds its body, thereby supplying the code associated with the name. Successful linking makes the requested definitions available. Checking type compatibility also relies on consistent declarations in the source files.
:::

:::esempio{titolo="Two units with a shared header"}
The file `scale.h` declares the function with an include guard.

```c
#ifndef SCALE_H_INCLUDED
#define SCALE_H_INCLUDED
int scale(int value);
#endif
```

The file `scale.c` includes the header and defines the function. The inputs used in the example fall within $[-100,100]$, so doubling them gives a value representable in `int`.

```c
#include "scale.h"

int scale(int value)
{
    return 2 * value;
}
```

The file `main.c` includes the same header for the call. Assume that writing to standard output succeeds.

```c
#include <stdio.h>
#include "scale.h"

int main(void)
{
    printf("%d\n", scale(6));
    return 0;
}
```

With the separate-translation commands, `main.o` holds the reference to `scale` and `scale.o` resolves it. Doubling $6$ gives $12$, so the executable prints `12` followed by a newline. Passing only `main.o` and the standard libraries supplied by the driver would leave the project's `scale` symbol without a definition. The prototype makes the call valid during the compilation of `main.c` and the body in `scale.c` supplies the implementation to the linker.
:::

:::attenzione
Two units can be compiled separately with incompatible declarations for the same external function. If each compilation sees just one local declaration, that invocation can miss the problem. A linker that resolves references by name can accept the objects despite the defect. Compatibility remains a requirement for the C program. Including the header in both the caller and the source file containing the definition lets the compiler compare the declarations where they are used.
:::

## Starting and diagnosing a C program

:::definizione{#avvio-hosted titolo="Input, output and termination in a hosted environment"}
In a C17 **hosted** environment, `int main(void)` is a permitted signature for the function called at program startup when it takes zero parameters. The value returned from the initial call to `main` participates in program termination. Under the C standard’s convention, `return 0;` reports success to the environment. `EXIT_SUCCESS` from `<stdlib.h>` also indicates success, while `EXIT_FAILURE` indicates failure. For other values, the status reported to the environment is determined by the implementation.

`printf` writes to `stdout`, the standard output stream. The destination can be a terminal, a file or another process, depending on how the program is started. The value returned by `main` is distinct from the characters sent to the stream. In the preceding example, a successful write sends two digits and a newline, and `return 0;` reports success. A test can compare the captured output with the expected output and check the termination status separately.
:::

:::definizione{#diagnosi-fasi titolo="Diagnosing errors from the expected build product"}
To locate an error, observe the command that ran and the artifact it was supposed to produce. A directive that requests a missing header fails during preprocessing. A constraint violation in the resulting source, such as calling a function with one more argument than its visible prototype accepts, is diagnosed during translation. If an object contains an external reference with no definition among the objects provided, the problem appears during linking. A difference between the expected and actual output after a successful build calls for examining execution and the program specification.

Messages can differ across drivers. Locating the stage helps identify the information to inspect. For inclusion, examine the name and the search paths. For an unresolved reference, identify the caller, the intended definition and the object files actually passed to the driver. For an incorrect result, a reproducible test case fixes the input data and expected output.
:::

:::osservazione
The C rules on the translation and execution environments are described in the WG14 committee’s C17 document. The options `-E`, `-S`, `-c` and `-o` follow the GCC driver documentation. [C17 draft N2176](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2176.pdf) · [GCC overall options](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
:::
