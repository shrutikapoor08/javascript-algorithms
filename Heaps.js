/*
Heaps
similar to Binary Search Trees
can have atmost two children
MaxBinaryHeap - root is greater than children
MinBinaryHeap - root is less than children
as compact as possible. left children are filled out first
Left child - 2n+1
Right child - 2n+2
 */

class Heaps {
  constructor() {
    this.values = [41, 39, 33, 11, 17, 42];
  }

  insert(value) {
    //push value to the end of heap
    // bubble up the top
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      const element = this.values[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}

const heap = new Heaps();
heap.insert(72);
heap.insert(2);
heap.insert(12);
console.log(heap);
