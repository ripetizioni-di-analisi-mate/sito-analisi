---
titolo: Text files and lab exam
sommario: From opening a stream to validating lines, aggregating records and testing a complete C17 lab solution.
---

## External files and streams

:::definizione{#stream titolo="Text stream"}
A **stream** connects a program to a source or destination of data. In C17, the functions for stream input and output are declared in `<stdio.h>`. The type `FILE` represents the information the library uses to manage the operation. A pointer of type `FILE *` identifies a stream and is passed to the functions that read from it, write to it or close it. Each successful read consumes part of the input. Subsequent reads resume from the resulting position.

A **text stream** delivers characters organised into lines. In the program, the character `'\n'` represents a newline. The environment may translate the external representation during reading or writing. To reason about the program, use the characters observable through the stream. For example, a line containing `73` followed by a newline delivers the characters `'7'`, `'3'` and `'\n'`.
:::

:::osservazione
An external file and its stream have separate lifetimes. Opening a file establishes the association between the name and the stream. Closing the stream ends that association. Another program can reopen the same file to read the stored data. One program can open multiple streams, for example one for the measurement input and one for the generated report. The end-of-file indicator on one stream tells us about input from that stream. The outcome of writing the report is checked on its own stream.

When specifying a test, state the initial file contents, the open mode and which operations succeed. Specify the order of operations as well, so that the characters read and the contents left in the file can be determined.
:::

## Opening a file in the right mode

:::definizione{#apertura titolo="The modes and result of fopen"}
`fopen(name, mode)` opens the file identified by `name` in the mode given by the string `mode`. It returns a stream pointer on success or a null pointer on failure. This chapter uses three modes. Use `"r"` to read an existing file, `"w"` to write starting with an empty file, and `"a"` to append data. Modes `"w"` and `"a"` can create the file. Opening an existing file successfully in mode `"w"` truncates it. In mode `"a"`, writes are added at the end of the file.

The specification determines which mode to use. A report regenerated from scratch is opened in mode `"w"`. A log that retains past measurements is extended with mode `"a"`. When the only requirement is to examine the log, mode `"r"` is appropriate.
:::

:::esempio{titolo="Checking a write operation"}
If the log contains the line `41`, the code appends a second line containing `52` when all operations succeed.

```c
FILE *log = fopen("log.txt", "a");
if (log == NULL) {
    return EXIT_FAILURE;
}
int ok = fputs("52\n", log) != EOF;
if (fclose(log) != 0) {
    ok = 0;
}
return ok ? EXIT_SUCCESS : EXIT_FAILURE;
```

The fragment belongs in `main` and requires `<stdio.h>` and `<stdlib.h>`. After a successful open, the stream is closed even if `fputs` reports an error. After `fclose`, the association with the stream has ended. The result of closing the stream can report an error writing data that remained in the library buffer.
:::

:::attenzione
Checking `log != NULL` establishes that the file was opened. The results of `fputs` and `fclose` concern subsequent operations, so a program that reports completion of the report also checks both results. A successful open in mode `"w"` truncates the file immediately, even if the program returns before calling a write function.
:::

## Reading and end-of-file

:::definizione{#fine-flusso titolo="Characters, EOF and indicators"}
`fgetc(file)` returns a character as an `int` value or returns `EOF`, a negative value defined in `<stdio.h>`. For the text characters used in these exercises, the result always distinguishes a character read successfully from `EOF`. Storing the result in an `int` allows the comparison to take place before any conversion to a character type.

The value `EOF` indicates that the call produced no character. `feof(file)` tests the stream's end-of-file indicator. `ferror(file)` tests its error indicator. Each function returns zero if its indicator is clear and a nonzero value if the indicator is set. After the loop, `ferror(file) != 0` detects a read that was interrupted by an error. This test takes place before closing the stream.
:::

:::esempio{titolo="Counting delimiters"}
A file provides the sequence `A\nB\nC\n`. Counting newlines requires a counter and a variable to store the latest result. Assume that the count is representable as `size_t`.

```c
size_t newlines = 0;
int ch;
while ((ch = fgetc(file)) != EOF) {
    if (ch == '\n') {
        ++newlines;
    }
}
int read_failed = ferror(file) != 0;
```

The counter increases after each newline, so it reaches $3$ when all reads succeed. The next call returns `EOF` upon reaching the end of the file. If the third line is the final line and its newline is absent from the observed stream, the read finds $2$ delimiters. The number of delimiters equals the number of logical lines when every line ends with a newline.
:::

:::attenzione
The condition `!feof(file)` describes the stream's state before the read. The next operation can still fail and set the indicator. The loop therefore tests the result of reading and updates its results only in the part that processes data actually obtained. For a file containing a single reading, this order prevents the old reading from being processed a second time after the next attempt.
:::

## Complete lines and fragments

:::definizione{#fgets titolo="The fgets contract"}
For an array `buffer` with at least `capacity` elements and `capacity` at least $2$, `fgets(buffer, capacity, file)` reads at most `capacity - 1` characters. It also stops when it reads a newline, which it keeps in the array, or when it encounters end-of-file. After a successful read, it adds `'\0'`. The return value is `buffer` when the call succeeds. Testing the return value before using the string is part of the contract.

With a capacity of $5$, the first read of a line containing `1234567` followed by a newline produces the string `"1234"`. The first four buffer positions hold the four digits, and the last holds `'\0'`. The next read starts at `'5'`. It obtains `"567\n"` because four characters fill the available space and the fourth is already the delimiter.
:::

:::definizione{#validazione-righe titolo="Line boundaries"}
The program specifies which lines it accepts before converting them. In an exercise where every line ends with a newline, the text contains no embedded null characters and the capacity is sufficient for every valid line, `strchr(buffer, '\n')` locates the delimiter after a successful read. If the delimiter is missing, the program classifies the line as incomplete or too long according to the specification. If it continues after an overlong line, it consumes input up to the delimiter or end-of-file and checks for errors again. The remaining fragment is therefore still associated with the same physical line.

With a limit of $60$ characters before the newline and a buffer capacity of $64$, a valid line fits in the array. It contains at most $60+1$ text characters, so there is also room for the string terminator. If the program accepts a final line without a delimiter, it specifies this case and distinguishes normal end-of-file from a subsequent read that finds more characters.
:::

## Interpreting numeric fields

:::definizione{#conversione-controllata titolo="Conversion using strtol"}
`strtol(text, &end, 10)` attempts to read a base-ten integer and returns a `long`. In the C locale, it recognises leading whitespace, an optional sign and a sequence of digits. If conversion occurs, `end` points to the first character after the parsed part. If no digits are present, `end` equals `text`. Setting `errno = 0` before the call means that a subsequent `ERANGE` can be attributed to this conversion.

These checks are separate from validating the exercise's accepted values. If the program accepts only readings from $-100$ to $100$, it also tests that range as `long` before converting the result to `int`. The chosen limits guarantee that the value is representable as `int`. To check that the line contains exactly one number, the program accepts only optional whitespace and the terminator after the digits.
:::

:::esempio{titolo="One integer on a line"}
The line supplied by the file contains a space, the digits of `27` and a newline. Conversion returns `27` and leaves the pointer at the newline. The procedure skips all whitespace allowed in the C locale, including the delimiter, and checks the terminator. For `"27x\n"`, the pointer instead refers to the character `'x'`. Checking the rest of the string distinguishes those cases.

![The stream supplies the line with 27, strtol returns 27 and leaves the pointer at the newline, and the remaining-character check accepts the line.](/immagini/informatica/file-e-laboratorio/schema-teoria-en.png)

```c
errno = 0;
char *end;
long value = strtol(buffer, &end, 10);
if (end != buffer && errno != ERANGE && -100 <= value && value <= 100) {
    while (isspace((unsigned char)*end)) {
        ++end;
    }
    if (*end == '\0') {
        reading = (int)value;
    }
}
```

The fragment uses `<errno.h>`, `<stdlib.h>` and `<ctype.h>`. It assumes input characters belong to the basic repertoire used in the course. The cast in the call to `isspace` keeps the value in the unsigned-character range. The final check on the remaining characters distinguishes a whole line from a readable prefix.
:::

:::osservazione
When two fields are separated by horizontal whitespace, the delimiter also needs checking. For example, two consecutive conversions could interpret `"12+3"` as `12` followed by `+3`. If the specification requires at least a space or a tab between fields, the program checks the character referred to by `end` after the first field and calls the second conversion only if the delimiter is present. It then checks the domain of the second value and the absence of further tokens.
:::

## Writing and completing output

:::definizione{#scrittura-controllata titolo="Write results and closing the stream"}
`fprintf(file, format, ...)` formats the data and writes it to the stream. On success it returns the number of characters transmitted according to the format. A negative result reports a write or encoding error. The count concerns stream characters and includes any separators in the format string.

For a buffered write, the data can still be pending in the library after `fprintf` returns. `fflush(file)` delivers pending output data to the host environment. `fclose` also flushes pending data, and its result can reveal an error. If output goes to `stdout`, leaving that stream usable and calling `fflush(stdout)` allows the program to check the result before returning its status code.
:::

:::esempio{titolo="Signed reading and delimiter"}
In the C locale, `fprintf(file, "%d\n", -125)` transmits the minus sign, three digits and a newline. On success it returns $1+3+1=5$. In a report containing one reading per line, the final character lets the reading procedure recognise the line boundary even when that reading is the last one. The number of digits and the total number of characters produced are distinct counts.
:::

## Aggregating valid records

::::teorema{#aggregati-file titolo="Aggregation invariant"}
Let $r_1,\ldots,r_k$ be the records examined so far. A predicate $P$ identifies valid records relevant to the calculation, and $v(r)$ is the value to add for an accepted record. Each step adds $v(r)$ to the variable $s$ if $P(r)$ is true. If $s$ starts at zero and each intermediate sum is representable, after $k$ steps
$$
s = \sum_{\substack{1\le i\le k\\P(r_i)}}v(r_i).
$$

:::dimostrazione
Before the first read, no records have been examined. The empty sum is zero and equals the initial value. If the next record satisfies $P$, the specified sum gains exactly its value. The accumulation statement performs that addition. If $P$ is false, both the set of accepted records and $s$ retain their values. The property therefore holds after the step in either case. Once the full read finishes, the examined prefix is the entire input.
:::
::::

:::esempio{titolo="Two aggregates and a cross-check"}
For category `A` and `B` readings, maintain two sums, one for each category. The records $(A,8)$, $(B,4)$, $(A,-3)$, $(B,5)$ yield $s_A=5$ and $s_B=9$ after the last step. The direct sum of the four readings is $8+4-3+5=14$ and equals $5+9$. The check follows because the categories form a partition of valid records. If unknown categories must be excluded, use the direct sum of accepted records only for the comparison.

Before selecting the accumulator type, calculate a bound. With at most $2000$ valid lines and readings in $[-100,100]$, the absolute value of each partial sum is at most $200000$. The guaranteed range of `long` in C17 contains this bound. The preliminary check justifies applying the mathematical invariant to the value stored by the program.
:::

## Designing a complete lab solution

:::definizione{#prova-laboratorio titolo="Specification, components and tests"}
A lab task specifies the format of each record, the domain of its fields, how invalid lines are treated and the form of the output. Functions are organised around these responsibilities. One function transforms a line into a valid record, the main loop governs the input, and an aggregation function updates state only for accepted records. If the task requires the first maximum, the update uses a strict comparison. The broader condition that includes equality selects the last maximum.

An effective test suite includes a normal input, a boundary case and a case in which no lines are accepted. For a maximum, a Boolean variable records whether a candidate exists. This prevents an arbitrary number such as zero from being taken as the maximum of a sequence of negative values. A test with two equal maxima checks which identifier is kept. A line with an extra field tests whether the parser distinguishes the whole line from its prefix.
:::

:::esempio{titolo="Specifying and checking before coding"}
A sensor logs rows containing a class and a reading. The allowed classes are $0$, $1$ and $2$, and each reading must be between $10$ and $30$. The report contains the sum for class $2$ only. The parser checks both fields and the rest of the string before passing the record to the loop. With the rows `2 20`, `2 30`, `1 15` and `2 31`, the last row is outside the allowed range. The first two contribute and the third belongs to another class. The expected result is therefore $20+30=50$.

A second case supplies `1 10` and `0 30`. Both records are valid, and the sum for class $2$ remains zero. A third case supplies `2 20 4` and `2 30`. The extra field invalidates the first record and the expected output is $30$. These cases connect correct conversion, the selection rule and the final value. The lab worksheet adds checks for opening, reading and writing to this reasoning.
:::

## Repeating and checking an input pass

:::definizione{#posizione-stream titolo="Stream position and state"}
The position is part of the stream's state. Two consecutive calls to `fgets` on the same pointer start at different positions when the first call consumed characters. To process a file again, close it and reopen it for input. The new stream starts at the beginning of the file in its current state. For a text file, a count of characters read does not yield a portable offset in general. A call to `fseek(file, 0L, SEEK_SET)` that returns zero moves a stream supporting the operation to the beginning and clears the end-of-file indicator. `clearerr` clears both indicators and leaves the position where it is.

The program distinguishes the outcomes of the two passes. If the first scan ends with an error, the program acts on that result before starting the next one. When `fgets` returns `NULL` because of a read error, the contents of the array are indeterminate. After the loop, use the indicators and results already accumulated. The program can report an aggregate limited to the processed prefix if the specification permits partial results.
:::

:::esempio{titolo="Exact capacity and rereading"}
A test file contains one line with `91753` followed by a newline. The text needs six characters and a string terminator. With capacity $6$, the first read stores the five digits. The second can supply just the newline. With capacity $7$, the first read supplies the whole line. Running the second test on the same file requires reopening it for input or successfully repositioning it. This compares two separate scans of the same contents. The invariant concerns physical lines, so the presence of a delimiter determines when to update the aggregates.
:::

:::osservazione
An interval check for a duration computed from a log works much like checking a sum. Let $t_0,\ldots,t_{k-1}$ be the times in nondecreasing order and let $\ell_i$ denote the level at time $t_i$. The level of record $i$ applies on $[t_i,t_{i+1})$. Reading a new record closes the preceding interval. Two equal consecutive times bound an empty interval. The sum of all interval lengths is $t_{k-1}-t_0$ for $k\ge 1$, because the interior times cancel when the differences are added. The aggregate for any one level lies between zero and that total duration. Using only the first and last times therefore checks a bound on the loop's output without repeating its selection of the records.
:::
