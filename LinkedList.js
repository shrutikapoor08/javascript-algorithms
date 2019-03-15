/*
Better than arrays because insertion and deletion is not expensive.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        let current = this.head;
        let newTail= current;
        while (current.next) {
           newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var list = new SinglyLinkedList();
list.push("HELLO");
console.log(list.push("TEST"));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.push("NEWNODE"));
console.log(list.push("NEWNODEr"));

