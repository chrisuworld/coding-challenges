/* 
implement a stack
*/

class ArrayStack {
    #storage;

    constructor() {
        this.#storage = [];
    }

    isEmpty() {
        return this.#storage.length === 0;
    }

    size() {
        return this.#storage.length;
    }

    push(item) {
        this.#storage.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
        return this.#storage.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
        return this.#storage[this.#storage.length - 1];
    }
}

console.log("array stack test cases");
const arrayStack = new ArrayStack();

console.log("array stack initialization");
console.log(arrayStack.size() === 0);

console.log("test push method");
arrayStack.push("first");
console.log(arrayStack.size() === 1);
arrayStack.push("second");
console.log(arrayStack.size() === 2);
console.log(arrayStack.peek() === "second");
console.log(arrayStack.pop() === "second");
console.log(arrayStack.peek() === "first");
console.log(arrayStack.size() === 1);
console.log(arrayStack.pop() === "first");
console.log(arrayStack.size() === 0);

console.log("test pop on empty stack");
try {
    arrayStack.pop();
} catch (error) {
    console.log(error.message === "stack is empty");
}

console.log("test peek on empty stack");
try {
    arrayStack.peek();
} catch (error) {
    console.log(error.message === "stack is empty");
}

// stack with an object

class ObjectStack {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    push(item) {
        this.size++;
        this.storage[this.size] = item;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

console.log("object stack test cases");

const objectStack = new ObjectStack();
console.log(objectStack.size === 0);

console.log("test push method");
objectStack.push("first");
console.log(objectStack.size === 1);
console.log(objectStack.storage[1] === "first");
console.log(objectStack.peek() === "first");
objectStack.push("second");
console.log(objectStack.size === 2);
console.log(objectStack.storage[2] === "second");
console.log(objectStack.peek() === "second");

console.log("test pop method");

console.log(objectStack.pop() === "second");
console.log(objectStack.size === 1);
console.log(objectStack.peek() === "first");

console.log(objectStack.pop() === "first");
console.log(objectStack.size === 0);
console.log(objectStack.peek() === undefined);

console.log("test pop on empty stack");
console.log(objectStack.pop() === undefined);
