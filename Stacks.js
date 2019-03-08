// Implement a stack

class Stacks {
    constructor(){
        this.items = [];
    }

    pop(){
        if(this.isEmpty()) throw "Cannot pop an empty stack";
        else return this.items.pop();
    }

    push(item) {
        this.items.push(item);
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(this.isEmpty()) throw "Empty stack";
        else return this.items[this.items.length -1];
    }

    printStack() {
        this.items.forEach( i => console.log(i))
    }
}

const s = new Stacks();
s.push(2);
s.push(4);
s.push(6);
s.pop();
s.push(7);
s.push(5);
s.peek();
s.isEmpty();
s.printStack();