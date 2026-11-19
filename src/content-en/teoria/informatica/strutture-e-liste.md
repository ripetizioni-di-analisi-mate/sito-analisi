---
titolo: Structures, lists, stacks and queues
sommario: How to represent records and sequences in C17, maintain valid links and check insertion, removal and deallocation of nodes.
---

## From values to records

:::definizione{#strutture-e-membri titolo="Structure type and members"}
A **structure** gathers under a single name several data items, possibly of different types, that describe the same thing, for example the code and the quantity of an item in a warehouse. The data items that make it up are called **members**, or fields. The following declaration defines a new type, `struct Item`, with two integer members.

```c
struct Item {
    int code;
    int qty;
};
```

The type is called `struct Item`, with both words. A variable of this type is declared with `struct Item item;`, and its members are referred to with the dot, as in `item.code` and `item.qty`. When one has a pointer `ptr` to a structure, the members are referred to with the arrow `->`; `ptr->code` is a short form of `(*ptr).code`.

The members are part of the structure variable and exist as long as the variable exists. The size of a structure is obtained with `sizeof(struct Item)` and may be greater than the sum of the sizes of the members, because the compiler may insert between one member and the next a few unused bytes, called padding.
:::

:::definizione{#inizializzazione-assegnamento titolo="Initializing and copying structures"}
A structure is initialized with a list in braces, in which each member can be referred to by name in the form `.name = value`. The members not named in the list receive zero, or the null pointer if they are pointers. A structure declared inside a function without a list, on the other hand, has members with unpredictable values.

Structures are copied with a simple assignment, which copies all the members. In the following fragment, inside a function, `b` is a copy of `a` and the two variables are then independent.

```c
struct Item a = {.code = 4, .qty = 6};
struct Item b = a;
b.qty = 3;
```

The second line copies into `b` the values of all the members of `a`. The third modifies only `b`, so at the end `a.qty` is $6$ and `b.qty` is $3$.
:::

:::attenzione
If a structure has a pointer member, copying the structure copies the address and not the data the address refers to. After the copy the two structures each have their own pointer, but the two pointers refer to the same data, and a modification made through one is seen through the other. To obtain an independent copy of a list, for example, one must allocate new nodes and copy the data one by one.
:::

## Sequences represented by links

:::definizione{#nodi-e-collegamenti titolo="Node, head and successor"}
A **linked list** is a sequence of elements in which each element contains, besides its own data, the address of the next element. Unlike an array, the elements are not adjacent in memory and can be added and removed without moving the others. Each element is called a **node**, and it is a structure with the data, here the integer `key`, and a pointer to the following node.

```c
typedef struct Node {
    int key;
    struct Node *next;
} Node;
```

The member `next` is a pointer to another structure of the same type. Inside the declaration one writes `struct Node *`, because the short name `Node`, introduced by `typedef`, is available only after the end of the declaration. From that point on `Node` and `struct Node` denote the same type.

The program keeps a pointer to the first node, called the **head**. From the head one reaches the second node by following `next`, and so on. The last node has `next` equal to `NULL`, which marks the end of the list. An empty list is represented by a head equal to `NULL`. The order of the elements is that of the links, and does not depend on the position of the nodes in memory.
:::

:::definizione{#invariante-lista titolo="Linear list invariant"}
For the functions on lists to work, a list must always satisfy some conditions, which form its **invariant**. Every pointer different from `NULL` met while following the links points to an existing node. No node appears twice, so the list contains no cycles, and following `next` one reaches `NULL` after a finite number of steps. Every function that modifies the list receives a list that satisfies the invariant and must leave it in a state that still satisfies it.

Usually the nodes are allocated with `malloc`, and the list owns them, that is, whoever manages it must release all of them with `free`. In tracing exercises the nodes may also be ordinary variables, and in that case `free` must not be called.
:::

:::esempio{titolo="Visiting keys in order"}
The fragment counts the nodes of a list. The pointer `p` starts from the head and at each iteration moves to the next node with `p = p->next`, until it is `NULL`. The definition of `Node` and `<stddef.h>` are visible.

```c
size_t count = 0;
for (const Node *p = head; p != NULL; p = p->next) {
    ++count;
}
```

At the start of every iteration `count` is the number of nodes already counted and `p` points to the first node not yet counted. The body counts that node and the update moves `p` to the next one. When `p` is `NULL` all the nodes have been counted. If the list is empty the head is `NULL`, the body is not executed and `count` stays zero.
:::

## Inserting without losing a link

:::definizione{#inserimento-in-lista titolo="Insertion and ownership of the new node"}
To insert a node at the head one allocates the node, makes its `next` point to the old first node and makes the head point to the new node. The function must therefore modify the caller’s variable `head`, and for this reason it receives its address. Since `head` is a `Node *`, its address is a `Node **`, that is, a pointer to a pointer, and inside the function `*head` is the head. `Node`, `<stdbool.h>` and `<stdlib.h>` are visible.

```c
bool push_front(Node **head, int key)
{
    Node *node = malloc(sizeof *node);
    if (node == NULL) {
        return false;
    }
    node->key = key;
    node->next = *head;
    *head = node;
    return true;
}
```

If `malloc` fails, the function returns `false` without having modified the list. Otherwise it fills the two members of the node and only at the end updates the head. The order of the last two assignments matters, because `node->next = *head;` must read the old head before `*head = node;` replaces it. If the list was empty, the old head is `NULL` and the new node, which is also the last, has `next` equal to `NULL`.
:::

:::esempio{titolo="Inserting after an existing node"}
In the figure a node with key $20$ is inserted after the node with key $10$. The new node has already been allocated but is not yet part of the list.

![Before, the chain contains 10 and 30 and then ends. After, it contains 10, 20 and 30 and then ends. Node 20 is the new one.](/immagini/informatica/strutture-e-liste/schema-teoria-en.png)

Let `prev` be the pointer to node $10$ and `node` the pointer to the new node. Two assignments are needed, in this order. The first, `node->next = prev->next;`, makes the new node point to node $30$. The second, `prev->next = node;`, makes node $10$ point to the new node. The list becomes $10$, $20$, $30$. The same two statements also work when `prev` is the last node; in that case `prev->next` is `NULL` and the new node becomes the last.
:::

:::attenzione
The order of the two assignments cannot be swapped. Executing `prev->next = node;` first loses the address of node $30$, which was contained only in `prev->next`. The following `node->next = prev->next;` would then make the new node point to itself. The list would contain a cycle, and node $30$ would no longer be reachable.
:::

## Detaching a node and freeing its memory

:::definizione{#rimozione-e-rilascio titolo="Removal from the head"}
The function removes the first node from the list, returns its data through the pointer `out` and releases its memory. As for insertion it receives the address of the head, because it must modify it. If the list is empty it returns `false` and modifies nothing. `Node`, `<stdbool.h>` and `<stdlib.h>` are visible.

```c
bool pop_front(Node **head, int *out)
{
    if (*head == NULL) {
        return false;
    }
    Node *old = *head;
    *out = old->key;
    *head = old->next;
    free(old);
    return true;
}
```

The order of the operations is forced. First one saves in `old` the address of the node to remove. Then one copies the data and the link `old->next`, while the node still exists. Only at the end is `free(old)` called. If the list had a single node, `old->next` is `NULL` and the head becomes `NULL`, that is, the list is empty. To remove a node that is not the first one modifies in the same way the member `next` of the node that precedes it.
:::

::::teorema{#svuotamento-lista titolo="Freeing an entire list"}
To release a whole list of $n$ nodes one repeats three operations as long as the head is different from `NULL`. One saves the address of the next node, releases the node at the head and assigns the saved address to the head. The procedure performs exactly $n$ releases and ends with the head equal to `NULL`.

:::dimostrazione
At the start there are $n$ nodes to release. Each step reads the link of the first node before releasing it and then moves the head to the next node. The other nodes remain valid, because they are blocks of memory distinct from the one released. After $k$ steps $k$ nodes have been released and $n-k$ remain, all reachable from the head. The number of remaining nodes decreases by one at each step, so after $n$ steps it is zero and the head is `NULL`.
:::
::::

:::attenzione
After `free(old)` the node no longer exists, and reading `old->next` has undefined behavior. The link to the next node must therefore be saved before the release. A loop written as `for (p = head; p != NULL; p = p->next) free(p);` is wrong for exactly this reason, because the update reads `p->next` after `p` has been released.
:::

## Stacks with finite capacity

:::definizione{#pila-vettore titolo="LIFO discipline and occupied prefix"}
A **stack** is a collection of elements in which one always inserts and removes at the same end, called the **top**, as in a stack of plates. The element removed is always the last one inserted; the rule is called **LIFO**, from *last in, first out*. Insertion is called *push* and removal *pop*. A stack is implemented with an array of capacity $C$ and a counter `used` of the elements present, with $0\leq\mathrm{used}\leq C$. The elements occupy the indices from $0$ to `used - 1`, and the top is the element with index `used - 1`.

In the example $C=5$. The two functions receive a pointer to the stack and return `false` when the operation cannot be performed. `<stddef.h>` and `<stdbool.h>` are visible.

```c
enum { CAPACITY = 5 };
typedef struct {
    int data[CAPACITY];
    size_t used;
} Stack;

bool stack_push(Stack *s, int value)
{
    if (s->used == CAPACITY) {
        return false;
    }
    s->data[s->used] = value;
    ++s->used;
    return true;
}

bool stack_pop(Stack *s, int *out)
{
    if (s->used == 0) {
        return false;
    }
    --s->used;
    *out = s->data[s->used];
    return true;
}
```

Insertion fails if the stack is full. Otherwise it writes the value in the first free position, which has index `used`, and increases the counter. Removal fails if the stack is empty. Otherwise it decreases the counter, which becomes the index of the top, and copies that element into `*out`. The value remains written in the array, but it is no longer part of the stack, and the next insertion overwrites it.
:::

:::esempio{titolo="A sequence of pushes and pops"}
One starts from an empty stack and inserts $6$ and then $9$. The stack contains $6$ at index $0$ and $9$ at index $1$, which is the top. A removal returns $9$ and brings `used` to $1$. Inserting $4$ next, the value is written at index $1$, in place of $9$. Two further removals return $4$ and then $6$.
:::

## Linear queues with two ends

:::definizione{#coda-collegata titolo="FIFO discipline and front–rear pointers"}
A **queue** is a collection of elements in which one inserts at one end and removes at the other, as in a line of people. The element removed is always the one that has been present longest; the rule is called **FIFO**, from *first in, first out*. A queue is implemented with a linked list and two pointers. `front` points to the first node, from which one removes, and `rear` to the last, after which one inserts. In the empty queue both are `NULL`.

Insertion is called *enqueue* and removal *dequeue*. `Node`, `<stdlib.h>` and `<stdbool.h>` are visible.

```c
typedef struct {
    Node *front;
    Node *rear;
} Queue;

bool enqueue(Queue *q, int key)
{
    Node *node = malloc(sizeof *node);
    if (node == NULL) {
        return false;
    }
    *node = (Node){.key = key, .next = NULL};
    if (q->rear == NULL) {
        q->front = node;
    } else {
        q->rear->next = node;
    }
    q->rear = node;
    return true;
}

bool dequeue(Queue *q, int *out)
{
    Node *old = q->front;
    if (old == NULL) {
        return false;
    }
    *out = old->key;
    q->front = old->next;
    if (q->front == NULL) {
        q->rear = NULL;
    }
    free(old);
    return true;
}
```

Insertion creates a node with `next` equal to `NULL`, because it will be the last. If the queue was empty, the new node is both the first and the last, so `front` and `rear` both point to it. Otherwise the old last node is linked to the new one, and `rear` moves to the new one. Removal takes away the first node as in a list. If the node removed was the only one, `front` becomes `NULL` and `rear` must be set to `NULL` too, since otherwise it would point to a released node.
:::

:::osservazione
The pointer `rear` serves to make insertion fast. Without it, to insert at the end one would have to traverse the whole list starting from `front`, with a time proportional to the length. With `rear` insertion always takes the same few assignments, whatever the length. In exchange the functions must keep `rear` up to date, in particular when the queue becomes empty.
:::

## Circular queues and logical indices

:::definizione{#coda-circolare titolo="Positions modulo the capacity"}
A queue can also be implemented with an array, without allocations. Since one removes from the beginning and inserts at the end, the occupied elements move toward the high indices; on reaching the end of the array one starts again from index $0$, as if the array were closed into a ring. This is a **circular queue**. One uses an array of capacity $C>0$, the index `first` of the first element, with $0\leq\mathrm{first}<C$, and the number `used` of elements present. The element in position $k$ of the queue, with $0\leq k<\mathrm{used}$, is found in the array at index
$$
(\mathrm{first}+k)\bmod C.
$$
where $\bmod$ denotes the remainder of the division. The queue is empty when `used` is zero and full when `used` equals $C$. To insert, if the queue is not full, one writes at index $(\mathrm{first}+\mathrm{used})\bmod C$ and increases `used`. To remove, if the queue is not empty, one reads the element with index `first`, brings `first` to $(\mathrm{first}+1)\bmod C$ and decreases `used`.

With capacity $5$, `first` equal to $4$ and three elements, these occupy the indices $4$, $0$ and $1$, because $(4+1)\bmod 5=0$ and $(4+2)\bmod 5=1$. A fourth element goes to index $(4+3)\bmod 5=2$. After one removal `first` becomes $(4+1)\bmod 5=0$ and the remaining elements occupy the indices $0$, $1$ and $2$.
:::

::::teorema{#unicita-indici-circolari titolo="Distinct indices within one capacity"}
Let $C>0$ and $0\leq\mathrm{first}<C$. The positions $k$ from $0$ to $C-1$ correspond to indices $(\mathrm{first}+k)\bmod C$ that are all different from one another. As a consequence two elements of the queue never occupy the same cell, and when the queue is not full the insertion index is free.

:::dimostrazione
If two positions $k_1$ and $k_2$ gave the same index, the difference $k_2-k_1$ would be a multiple of $C$. For two different positions between $0$ and $C-1$ the absolute value of the difference lies between $1$ and $C-1$, and no multiple of $C$ lies in this interval.
:::
::::

:::attenzione
In the program the sum `first + k` is computed before the remainder, and it must fit in the type used. With indices of type `size_t` and ordinary capacities this is always true. For capacities close to the maximum of the type one avoids the sum. One computes `gap = capacity - first`; if `k < gap` the index is `first + k`, otherwise it is `k - gap`.
:::

## Checking boundary states

:::osservazione
The three structures differ in the element they return. The stack returns the last element inserted, the queue the first; the list allows insertion and removal at any point, provided one has the pointer to the preceding node. The array-based stack and circular queue require no allocations but have a fixed capacity, whereas the list-based versions grow as long as there is memory. The choice depends on the operations the program needs.

When testing these functions the most important cases are the boundary ones, that is, empty structure, structure with a single element and, if the capacity is fixed, full structure. For the versions with allocation one also tests the case in which `malloc` fails, checking that the structure remains unchanged and usable.
:::

:::esempio{titolo="Checking both ends after the final removal"}
One starts from an empty queue, inserts $7$, removes it and inserts $11$. After the removal the queue is empty again, and both `front` and `rear` must be `NULL`. The second insertion therefore finds `rear` equal to `NULL`, executes the branch for the empty queue and makes both point to the new node. A further removal returns $11$. If `dequeue` did not reset `rear`, the second insertion would write into the node already released.
:::
