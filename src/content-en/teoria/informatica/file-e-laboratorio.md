---
titolo: Text files and lab exam
sommario: From opening a stream to validating lines, aggregating records and testing a complete C17 lab solution.
---

## External files and streams

:::definizione{#stream titolo="Text stream"}
A **file** is a sequence of data kept on disk, which remains available even after the program ends. To read or write a file the program opens it and obtains a **stream**, that is, a channel from which the data arrive, or to which they go, one after the other. The functions for streams are declared in `<stdio.h>`. A stream is represented by a pointer of type `FILE *`, which is obtained on opening and is passed to all the functions that read, write or close. Reading is sequential, that is, each read starts from the point where the previous one ended.

A **text file** contains characters organized in lines, and each line ends with the newline character `'\n'`. The line `73`, for example, reaches the program as the three characters `'7'`, `'3'` and `'\n'`.
:::

:::osservazione
The file and the stream are two distinct things. The file is on disk and exists before and after execution; the stream exists only in the program, from opening to closing. A program can keep several streams open at the same time, for example one to read the measurements and one to write a report, and each has its own position and its own error indicators.

To predict what a program does on a file three pieces of information are needed, namely the initial contents of the file, the mode in which it is opened and the order of the operations performed.
:::

## Opening a file in the right mode

:::definizione{#apertura titolo="The modes and result of fopen"}
The function `fopen(name, mode)` opens the file named `name` and returns the stream, or `NULL` if the opening fails, for example because the file does not exist. The second argument is a string that gives the opening **mode**.

- `"r"` (*read*) opens for reading a file that already exists.
- `"w"` (*write*) opens for writing. If the file does not exist it creates it; if it exists it empties it, and the previous contents are lost.
- `"a"` (*append*) opens for writing at the end. If the file does not exist it creates it; if it exists, what is written is added at the end.

The mode is chosen according to what must happen to the existing contents. A report to be redone every time is opened with `"w"`, a log to which data are added with `"a"`, a file to be consulted with `"r"`.
:::

:::esempio{titolo="Checking a write operation"}
The file `log.txt` contains the line `41`. The fragment, which is part of `main` and uses `<stdio.h>` and `<stdlib.h>`, appends the line `52`.

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

After `fopen` one checks at once that the stream is different from `NULL`. The function `fputs` writes a string to the stream and returns `EOF` in case of error. The function `fclose` closes the stream and returns zero if everything went well; it must be called even when `fputs` fails. The result of `fclose` must be checked, because the writing functions accumulate the data in a temporary memory, the **buffer**, and may actually write them to disk only on closing.
:::

:::attenzione
There are three checks to make, namely the opening, every write and the closing; a successful opening does not guarantee that the writes succeed. Moreover, opening with `"w"` empties the file at the very moment it takes place, even if the program then ends without writing anything.
:::

## Reading and end-of-file

:::definizione{#fine-flusso titolo="Characters, EOF and indicators"}
The function `fgetc(file)` reads one character from the stream and returns it. When there are no more characters, or an error occurs, it returns the special value `EOF` (*end of file*), a negative number defined in `<stdio.h>`. For this reason `fgetc` returns an `int` and not a `char`, and the result must be put into an `int` variable; in this way `EOF` stays distinct from all the characters.

`EOF` alone does not say why the reading stopped. Two functions do. `feof(file)` is nonzero if the end of the file has been reached. `ferror(file)` is nonzero if there has been a read error. After a reading loop one checks `ferror` to know whether the whole file has been read or the reading was interrupted.
:::

:::esempio{titolo="Counting delimiters"}
The file contains `A\nB\nC\n`, that is, three lines of one character. The fragment counts the newlines. The loop reads one character at a time and ends when `fgetc` returns `EOF`.

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

The condition of the loop assigns to `ch` the character read and compares it with `EOF`; the inner parentheses are necessary because `!=` has precedence over `=`. The counter increases at each newline, so at the end it is $3$. If the last line lacked the final newline, that is, with the contents `A\nB\nC`, the counter would be $2$ even though there are three lines. The number of newlines coincides with the number of lines only if every line, including the last, ends with `'\n'`.
:::

:::attenzione
A loop written as `while (!feof(file))` is wrong. The end-of-file indicator is set only *after* a read has tried to go past the end, so after the last item `feof` is still zero. The loop performs one extra iteration, in which the read fails and the program processes the previous item a second time. The correct form checks the result of the read itself, as in the previous fragment.
:::

## Complete lines and fragments

:::definizione{#fgets titolo="The fgets contract"}
The function `fgets(buffer, capacity, file)` reads a line of text and puts it into the array `buffer` as a string. It stops after reading the newline, which is copied into the array, or at the end of the file, or after `capacity - 1` characters, so that room is left for the terminator `'\0'`, which it always adds. It returns `buffer` if it has read at least one character and `NULL` if it has read nothing. The result must be checked before using the string.

If the line is longer than the array, `fgets` reads only a part of it and the rest remains to be read. With capacity $5$ and the line `1234567`, the first call puts `"1234"` into the array, that is, four characters and the terminator. The second call resumes from `'5'` and reads `"567\n"`.
:::

:::definizione{#validazione-righe titolo="Line boundaries"}
After a call to `fgets` the program must therefore know whether it has received a whole line. The line is whole if the string contains the newline, and this is verified with `strchr(buffer, '\n')`, which returns the address of the first `'\n'` or `NULL` if there is none. If it is missing, the line was too long for the array, or it is the last line of the file and has no newline. When the program discards a line that is too long, it must also read and throw away the following pieces up to the newline, otherwise the next piece would be mistaken for a new line.

The capacity of the array is computed from the maximum admissible length. If a valid line has at most $60$ characters before the newline, $60+1$ characters plus the terminator are needed, that is, $62$ elements, and an array of $64$ is sufficient.
:::

## Interpreting numeric fields

:::definizione{#conversione-controllata titolo="Conversion using strtol"}
The line read is a string of characters. To obtain the number it contains one uses `strtol(text, &end, 10)`, which converts to `long` the number written in base ten at the beginning of `text`. The function skips the leading spaces, reads an optional sign and the digits, and puts into `end` the address of the first character that is not part of the number. This allows two checks. If `end` equals `text`, no digit has been read. If the number is too large for a `long`, `strtol` puts into the variable `errno`, declared in `<errno.h>`, the value `ERANGE`; to notice this one sets `errno` to zero before the call.

To these checks the program adds its own. If only values between $-100$ and $100$ are allowed, the range is checked on the `long` value, and only afterwards is it converted to `int`. To make sure that the line contains only the number, one checks that after the digits there are at most spaces and then the terminator.
:::

:::esempio{titolo="One integer on a line"}
The line consists of a space, the digits `27` and the newline. `strtol` skips the space, returns $27$ and leaves `end` on the newline. The program skips the trailing white space, including the newline, and finds the terminator, so it accepts the line. For the line `"27x\n"` the returned value would still be $27$, but `end` would point to `'x'`, and the line would be rejected.

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

The fragment uses `<errno.h>`, `<stdlib.h>` and `<ctype.h>`. The condition of the `if` combines three checks, namely that at least one digit has been read, that there has been no overflow and that the value is in the admissible range. The function `isspace` says whether a character is a space, a tab or a newline; the cast to `unsigned char` is required because the function does not accept negative values. Only if the terminator follows the white space is the value assigned to `reading`.
:::

:::osservazione
When a line contains two numbers separated by spaces one calls `strtol` twice, the second time starting from `end`. The separator must be checked as well, however. The string `"12+3"` would be read as $12$ followed by $+3$, because the sign `+` is part of the second number. If the specification requires at least one space between the two fields, the program checks that the character pointed to by `end` after the first number is a space or a tab before converting the second, and at the end checks that nothing else follows.
:::

## Writing and completing output

:::definizione{#scrittura-controllata titolo="Write results and closing the stream"}
The function `fprintf(file, format, ...)` works like `printf` but writes to the stream given. It returns the number of characters written, or a negative value in case of error.

The characters written go through the buffer and may reach the file at a later moment. The function `fflush(file)` transfers them at once, and `fclose` does so before closing. A write error may therefore show up only in these two calls, and for this reason their result is checked. When the output is `stdout`, which must not be closed, one calls `fflush(stdout)` and checks its result before ending the program.
:::

:::esempio{titolo="Signed reading and delimiter"}
The call `fprintf(file, "%d\n", -125)` writes the minus sign, three digits and a newline, so it returns $1+3+1=5$. The newline must be written after the last measurement too, so that whoever reads the file again finds all the lines complete.
:::

## Aggregating valid records

::::teorema{#aggregati-file titolo="Aggregation invariant"}
Many lab programs read a file one line at a time and add up only the values of the lines that satisfy a condition. Let $r_1,\ldots,r_k$ be the records already read, that is, the data obtained from the lines, let $P(r)$ be the condition that selects the records to add and $v(r)$ the value of a record. The variable $s$ starts from zero, and for each record read $v(r)$ is added to $s$ only if $P(r)$ is true. If no sum overflows, after $k$ records we have
$$
s = \sum_{\substack{1\le i\le k\\P(r_i)}}v(r_i).
$$
In words, $s$ is the sum of the values of the records selected among the first $k$.
:::dimostrazione
Before the first read there are no records, the sum with no terms is zero and $s$ is zero. If the next record satisfies $P$, its value is added to the sum and the program performs the same addition on $s$. If it does not, neither the sum nor $s$ changes. The equality is therefore preserved at every record, and at the end of the reading it concerns all the records of the file.
:::
::::

:::esempio{titolo="Two aggregates and a cross-check"}
A file contains measurements of two categories, `A` and `B`, and one wants the sum per category. Two sums are used, $s_A$ and $s_B$, each updated only by the records of its own category. With the records $(A,8)$, $(B,4)$, $(A,-3)$ and $(B,5)$ one obtains $s_A=8-3=5$ and $s_B=4+5=9$. As a check, the sum of all the measurements is $8+4-3+5=14$, equal to $5+9$, because each record belongs to exactly one of the two categories.

The type of the sums is chosen by estimating the maximum value. With at most $2000$ lines and values between $-100$ and $100$, each sum lies between $-200\,000$ and $200\,000$, and fits in a `long`, which by the standard contains at least the values up to about two billion.
:::

## Designing a complete lab solution

:::definizione{#prova-laboratorio titolo="Specification, components and tests"}
The text of a lab assignment establishes four things, namely the format of each line, the admissible values for each field, what to do with invalid lines and what to print. The program is accordingly divided into parts with one task each. One function receives a line and derives a record from it, or reports that the line is not valid. The main loop reads the lines and checks for read errors. Another function updates the results with the valid records only. The details of the request must be read carefully. If the first maximum among equal values is asked for, the update uses `>`, whereas `>=` would keep the last.

The program is tested with at least three files, namely a normal one, one with boundary values and one in which no line is valid. To compute a maximum one uses a boolean variable that says whether at least one value has already been found, instead of starting from a fixed value such as zero, which with all-negative data would give a wrong result. Other useful cases are two equal maxima and a line with an extra field, which must be rejected.
:::

:::esempio{titolo="Specifying and checking before coding"}
A file contains lines with two integers, the class and the measurement. The admissible classes are $0$, $1$ and $2$, and the measurement must lie between $10$ and $30$. The program prints the sum of the measurements of class $2$. With the lines `2 20`, `2 30`, `1 15` and `2 31`, the first two are added, the third is valid but of another class, and the fourth has the measurement out of range. The expected result is $20+30=50$.

With the lines `1 10` and `0 30` both records are valid, but neither is of class $2$, and the expected result is $0$. With the lines `2 20 4` and `2 30` the first has an extra field and is rejected, and the expected result is $30$. Writing down these cases with their result before writing the code makes clear what the program must do.
:::

## Repeating and checking an input pass

:::definizione{#posizione-stream titolo="Stream position and state"}
A stream remembers the **position** it has reached, and every read continues from there. To read a file a second time from the beginning there are two ways. The first is to close it and reopen it. The second is to call `fseek(file, 0L, SEEK_SET)`, which brings the position back to the beginning and returns zero if it succeeds; the call also clears the end-of-file indicator. The function `clearerr(file)` clears the end-of-file and error indicators without moving the position.

Before a second read one checks how the first one ended. If `fgets` returns `NULL` because of an error, the contents of the array are not usable, and the program decides on the basis of `ferror` whether to stop or to use the results obtained up to that point, when the specification allows it.
:::

:::esempio{titolo="Exact capacity and rereading"}
A file contains the line `91753` with the newline, that is, six characters. With an array of capacity $6$ the first call to `fgets` reads the five digits, and the newline is left for the next call. With capacity $7$ the first call reads the whole line. To try the two capacities on the same file, between one trial and the other the file must be reopened or brought back to the beginning with `fseek`. In both trials there is a single line, and the program recognizes it as finished when it finds the newline.
:::

:::osservazione
A check similar to the sum per category holds for durations. Suppose the file records, in order of time, the instants $t_0,\ldots,t_{k-1}$ at which a quantity changes level, and that the level recorded at instant $t_i$ lasts until the next instant, that is, for a time $t_{i+1}-t_i$. The duration can be computed only when the next record is read. Adding all the durations the intermediate times cancel, and the total is $t_{k-1}-t_0$. The total time spent at a given level therefore lies between zero and $t_{k-1}-t_0$, and the sum of the times of all the levels must give exactly $t_{k-1}-t_0$.
:::
