/*
Heaps
similar to Binary Search Trees
can have atmost two children
MaxBinaryHeap - root is greater than children
MinBinaryHeap - root is less than children
as compact as possible. left children are filled out first
Left child - 2n+1
Right child - 2n+2

BigO -
Insertion - O(logN)
Removal - O(logN)
Search - O(N)
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

  remove() {
    //swap the first value with the last one
      // bubble down the swapped value to the right location
      const max = this.values[0];
      const end = this.values.pop();

      if(this.values.length > 0) {
          this.values[0] = end;
          this.bubbleDown();
      }

      return max;
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

  bubbleDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftchildIndex = 2*index + 1;
      let leftChild, rightChild;
      let rightchildIndex = 2*index + 2;
      let swap = null;
      if(leftchildIndex < length) {
        leftChild = this.values[leftchildIndex];
        if(leftChild > element) {
          swap = leftchildIndex;
        }
      }

      if(rightchildIndex < length) {
        rightChild = this.values[rightChild];
        if( (element < rightChild && swap === null) ||
            (rightChild > leftChild && swap)) {
          swap = rightchildIndex;
        }
      }

      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }

  }
}

const heap = new Heaps();
heap.insert(72);
heap.insert(2);
heap.insert(12);
console.log(heap);
heap.remove();
console.log(heap);
