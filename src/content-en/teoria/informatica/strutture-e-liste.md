---
titolo: Structures, lists, stacks and queues
sommario: How to represent records and sequences in C17, maintain valid links and check insertion, removal and deallocation of nodes.
---

## From values to records

:::definizione{#strutture-e-membri titolo="Structure type and members"}
A **structure** groups several members, each with its own name and type, into one object. The following declaration defines the type `struct Item`.

```c
struct Item {
    int code;
    int qty;
};
```

The word `Item` is a tag. It is part of the specification `struct Item`, which can be used to declare objects, parameters and pointers. If `item` is an object of that type, `item.code` designates its `code` member. If `ptr` is a valid pointer to an object of that type, `ptr->code` designates the member of that object. It is equivalent to `(*ptr).code`.

Members belong to the structure object and have its lifetime. A pointer to a member requires a member that exists within an object whose lifetime is still active. To obtain the size of the whole structure, use `sizeof(struct Item)`. The representation may contain padding bytes.
:::

:::definizione{#inizializzazione-assegnamento titolo="Initializing and copying structures"}
An initializer can designate a member directly with `.name = expression`. Members omitted from an aggregate initializer are initialized according to the rules for static storage duration. For example, an omitted integer member receives $0$, and an omitted pointer member becomes null. The rule applies in the presence of an initializer. A declaration of an automatic object without an initializer is a different case.

Inside a function, the following fragment shows two independent objects.

```c
struct Item a = {.code = 4, .qty = 6};
struct Item b = a;
b.qty = 3;
```

Initializing `b` with `a` copies the structure value. After the subsequent assignment, the quantities of the two objects are therefore $6$ and $3$. Assignment between structures of compatible type similarly copies the value of the right-hand structure to the left-hand structure.
:::

:::attenzione
A pointer member contains an address. Copying it to a second structure makes the same pointed-to object reachable through that address. Structure copying leaves the two pointer members separate, and both may designate the same node. Independent copies of a dynamic list require allocating nodes for the copy and rebuilding the links. Ownership of memory is a convention of the interface.
:::

## Sequences represented by links

:::definizione{#nodi-e-collegamenti titolo="Node, head and successor"}
A **node** of a singly linked list contains a value and a pointer to its successor. The following type uses `key` as its integer value.

```c
typedef struct Node {
    int key;
    struct Node *next;
} Node;
```

Within the declaration of `struct Node`, the type is still incomplete. `struct Node *` can already be used for the `next` member because a pointer can designate an object of that type without containing it by value. Once the definition is complete, `Node` is an alternative name for `struct Node`.

The variable `head` represents the head. If the list is empty, `head` is null. Otherwise, it points to the first node. In a nonempty list, the last node has a null successor. The chain of pointers therefore defines the logical order. Nodes that are consecutive in the sequence can occupy distant regions of memory.
:::

:::definizione{#invariante-lista titolo="Linear list invariant"}
Assume that every nonnull pointer followed in the chain designates a live node and that each reachable node appears once when following `next`. A list defined in this way is acyclic. The chain is finite and ends at a null pointer. When the list dynamically owns its nodes, the list's deallocation operation is responsible for each reachable node.

Tracing exercises can use temporary chains of automatic objects, provided that each object's lifetime covers every access to it. A function that frees an owning list requires nodes obtained from allocations compatible with `free`. The required lifetime and the deallocation policy depend on the stated operation.
:::

:::esempio{titolo="Visiting keys in order"}
Assume that the definition of `Node` is visible. The fragment uses `<stddef.h>` and a `head` satisfying the invariant. Its length is representable in `size_t`.

```c
size_t count = 0;
for (const Node *p = head; p != NULL; p = p->next) {
    ++count;
}
```

At the beginning of each iteration, `count` records the length of the prefix already visited, and `p` identifies the first node still to visit. The body counts that node. The update advances to its successor, so it restores the stated relation for the next iteration. When `p` is null, the prefix is the whole list. With a null head, the first test is false and the count remains zero.
:::

## Inserting without losing a link

:::definizione{#inserimento-in-lista titolo="Insertion and ownership of the new node"}
Inserting at the head requires a new node pointing to the previous head and updating the caller's `head` variable. The `Node **head` parameter contains the address of that variable. Assume that `head` designates a valid variable and that `*head` represents an owning linear list. `Node`, `<stdbool.h>` and `<stdlib.h>` are visible in this code.

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

The allocation requests space for the whole node. If it fails, the function returns `false` before changing the head. If it succeeds, the two members are initialized and the node is made reachable from the head. In the empty case, the new successor is null, giving a one-node list.
:::

:::esempio{titolo="Inserting after an existing node"}
In the figure, key $20$ is inserted after the node with key $10$. The new node has its own allocation and is not yet in the chain.

![Before, the chain contains 10 and 30 and then ends. After, it contains 10, 20 and 30 and then ends. Node 20 is the new one.](/immagini/informatica/strutture-e-liste/schema-teoria-en.png)

Let `prev` point to node $10$ and let `node` point to the new node. The assignment `node->next = prev->next;` stores the address of node $30$ in the new node. The assignment `prev->next = node;` then makes $20$ reachable through the link of $10$. The successor of node $30$ remains null. The invariant is preserved because the new chain visits the newly allocated node once and then resumes in the existing suffix. The same sequence of updates works when `prev` is the last node. In that case the saved link is null.
:::

:::attenzione
When inserting inside a list, the suffix after the insertion point keeps its identity. The assignment that changes the preceding link must occur after saving the successor. If the assignments were reversed, the value read from `prev->next` would already be `node`. This would create a cycle containing the new node and leave the original suffix unreachable from the head.
:::

## Detaching a node and freeing its memory

:::definizione{#rimozione-e-rilascio titolo="Removal from the head"}
Assume that `head` designates a valid head variable for an owning list, and that `out` points to an `int` belonging to the caller outside the list. If the head is null, the operation fails and leaves the objects unchanged. When at least one node exists, the function returns its value and links the head to the successor. `Node`, `<stdbool.h>` and `<stdlib.h>` are visible.

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

The value and the successor are read while the node is still alive. The head then points to the suffix and the detached node can be freed. With only one node, the suffix is empty and the new head is null. When an internal node is removed, the link to update is the predecessor's `next`. If the removed node is the last one, the predecessor's new successor is null.
:::

::::teorema{#svuotamento-lista titolo="Freeing an entire list"}
Let `head` be the head of a finite owning list of $n$ distinct nodes. While the head remains nonnull, save the successor, free the current node and assign the successor to the head. This calls the deallocation operation exactly $n$ times. The final head is null.

:::dimostrazione
Initially $n$ nodes remain to be freed. A step reads the first link before deallocation and then moves the head to the suffix. The suffix remains valid because each of its allocations is distinct from the one just freed. After $k$ steps, $n-k$ nodes therefore remain, all live and reachable, and the first $k$ have been freed. Each step decreases the nonnegative integer count of remaining nodes by one. The process terminates at the first zero count, which corresponds to a null head.
:::
::::

:::attenzione
After `free(old)`, the lifetime of the freed object has ended. Information that must be kept, such as `old->next`, must have been read before the call. A link in a list made of automatic objects can be changed while those objects are alive. That change does not entail a call to `free`.
:::

## Stacks with finite capacity

:::definizione{#pila-vettore titolo="LIFO discipline and occupied prefix"}
A **stack** removes the most recently inserted element still present. The discipline is called **LIFO**, for *last in, first out*. One representation uses an array of capacity $C$ and a count `used` with $0\leq\mathrm{used}\leq C$. The occupied cells have indices from zero to `used - 1` when `used` is positive. The last occupied cell is the top.

In this example $C=5$. `<stddef.h>` and `<stdbool.h>` are visible. Assume that `s` designates a valid stack and that `out` points to an `int` outside the stack.

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

The guard inserts only when `used` is smaller than the capacity. In that case the first free index is valid. Removal requires a positive count. Decreasing the count by one obtains the previous top index, whose value is still readable in the same cell. Logical occupancy excludes that location after the decrement.
:::

:::esempio{titolo="A sequence of pushes and pops"}
Start with an empty stack, then push $6$ followed by $9$. The occupied cells contain $\langle 6,9\rangle$ in that order and the top has index $1$. The first pop returns $9$ and decreases the count to $1$. Pushing $4$ writes to the newly vacated cell. The top is then $4$ and $6$ remains below it. As an independent check, read the remaining elements in reverse insertion order. They are $4$ and $6$.
:::

## Linear queues with two ends

:::definizione{#coda-collegata titolo="FIFO discipline and front–rear pointers"}
A **queue** removes the element that has been present the longest. The discipline is called **FIFO**, for *first in, first out*. In a linked queue, `front` identifies the first node and `rear` identifies the last. In the empty queue both pointers are null. A nonempty queue is a linear list reachable from `front`, and its last node is `rear` itself, with a null successor.

In the following fragment, `q` designates a valid owning queue. `out` designates an `int` outside the queue. `Node`, `<stdlib.h>` and `<stdbool.h>` are available.

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

Enqueueing preserves the existing sequence as a prefix. In the empty case, the new node is both first and last. In the nonempty case, link the previous last node to the new one and update `rear`. Dequeueing always detaches the first node. When the detached node was also the last, the new front is null and the corresponding branch also clears `rear`. The operation thus restores the empty queue representation.
:::

:::osservazione
If `rear` points to the last node, insertion can update that node's link directly. With only a head pointer, finding the last node requires traversing the chain. The number of pointer updates with two ends is independent of the length, while allocator time depends on the implementation. The pointer to the last node introduces a condition that must be maintained after removals and clearing.
:::

## Circular queues and logical indices

:::definizione{#coda-circolare titolo="Positions modulo the capacity"}
A **circular queue** uses an array of positive capacity $C$, an index `first` in $[0,C)$ and a length `used` in $[0,C]$. The element at logical position $k$ with $0\leq k<\mathrm{used}$ occupies physical index
$$
(\mathrm{first}+k)\bmod C.
$$
In an empty queue, `used` is zero. If `used<C`, insert at index $(\mathrm{first}+\mathrm{used})\bmod C$ and increase the length. If `used>0`, read the element at `first`, advance `first` by one modulo $C$ and decrease the length.

With capacity $5$ and `first` equal to $4$, the first three logical positions occupy $4$, $0$ and $1$. A fourth element is inserted at index $2$. After the first removal, `first` becomes $0$ and the remaining occupied positions are $0$, $1$ and $2$. Using the modulus makes the logical order independent of reaching the end of the array.
:::

::::teorema{#unicita-indici-circolari titolo="Distinct indices within one capacity"}
Let $C>0$ and $0\leq\mathrm{first}<C$. Logical positions from $0$ to $C-1$ produce distinct physical indices. In particular, when the length is less than $C$, the insertion index is free.

:::dimostrazione
If two positions $k_1$ and $k_2$ yield the same index, the difference $k_2-k_1$ is divisible by $C$. For distinct positions between $0$ and $C-1$, the absolute value of the difference lies between $1$ and $C-1$. A multiple of $C$ cannot have that magnitude. The occupied positions and the first free position therefore have distinct indices.
:::
::::

:::attenzione
The modulo formula uses mathematical integers. In C arithmetic, the intermediate sum must fit within the range of the arithmetic type. If unsigned arithmetic already wraps the sum, the subsequent `%` operation uses the wrapped value. For large capacities, first compute `gap = capacity - first`. If `k < gap`, the sum `first + k` is less than `capacity` and representable. In the other cases the required index is `k - gap`. Here $k<C$ and `capacity` is also representable.
:::

## Checking boundary states

:::osservazione
To compare different representations, start from the same logical sequence and inspect how fields and indices change. A stack returns the last element inserted that is still present, and a queue returns the first. A list preserves the order of its links and permits local insertion when the position is already available. An array-based stack has an occupied prefix. A circular queue can occupy cells on both sides of the index boundary. The choice therefore depends on the required operations.

Interface tests cover empty, single-element and full states when capacity is finite. With a dynamic queue, also test the path on which allocation fails before any update. Compare the existing links and logical content. If the operation reports failure and preserves the invariant, the structure remains usable by the caller.
:::

:::esempio{titolo="Checking both ends after the final removal"}
Start with an empty queue. Insert $7$, remove $7$ and insert $11$. After the first removal both ends must be null. The second insertion must therefore take the empty-queue branch and yield a queue with `front` equal to `rear` and a null successor. Removing again must return $11$. The sequence exercises the transitions from one node to zero and from zero to one, and verifies that the next insertion uses the restored state.
:::
