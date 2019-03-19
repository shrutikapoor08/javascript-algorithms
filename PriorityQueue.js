class PriorityQueue {
    constructor(){
        this.values = [];
    }

    //Enqueue: makes a new node, put it in the right spot based on priority
    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    //remove root element. Then rearrange.
    dequeue(){
        const max = this.values[0];
       const end =  this.values.pop();
       if(this.values.length > 0) {
           this.values[0] = end;
           this.bubbleDown();
       }
       return max;
    }

    //[49, 12, 4, {67, 2}]
    bubbleUp() {
        let index = this.values.length - 1;
        let elementPriority = this.values[index].priority; //{67, 2}
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentPriority = this.values[parentIndex].priority;
            if(elementPriority < parentPriority) {
                this.values.parentIndex = this.values[index];
                index = parentIndex;
            }
        }
    }

    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}


//1 = highest priority.
const pq = new PriorityQueue();
pq.enqueue("Serious dying patient", 1);
pq. enqueue("Lame ass patient with no illness", 5);
pq. enqueue("Communicable disease", 2);
pq. enqueue("Low fever", 4);
pq.dequeue();
console.log(pq);
