/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
Input:
1>4>5
1>3>4
2>6

Output: 1>1>2>3>4>4>5>6
 */


function bruteForceMergeList(lists) {
  const linkedLists = Object.values(lists);
  let array = [];
  linkedLists.forEach(list => {
    if(!list) return;
    let ptr = list.head;
    while(ptr) {
      array.push(ptr.val);
      ptr = ptr.next;
    }
  });
  array.sort();
  return array;

  function constructLinkedListFromArray(array){
    let newList = new LinkedList();
    let currentPtr = newList.head;
    array.forEach( element => {
      let node = new Node(element);
      if(!newList.head) {
        newList.head = node;
        currentPtr = node;
      }
      else  {
      currentPtr.next = node;
      currentPtr = currentPtr.next;
        }
    });
    return newList;
  }

}

  function mergeHelper(listA, listB) {
    let pointerA, pointerB;
    pointerA = listA.head;
    pointerB = listB.head;

    while(pointerA.next || pointerB.next) {
      while (pointerA.val < pointerB.val) {
        pointerA = pointerA.next;
      }
      if (pointerA.next.val > pointerB.val) {
        let currentB = pointerB;
        console.log(pointerA);
        console.log(pointerB);
        pointerA.next = currentB;
        currentB.next = pointerA;
        pointerB = pointerB.next;
      }
      else {
        listA.tail = listB.head;
      }
      // console.log(listA);
      // console.log(listB);
    }

    return listA;
  }

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class LinkedList{
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


const list1 = new LinkedList();
list1.push(1);
list1.push(4);
list1.push(5);


const list2 = new LinkedList();
list2.push(1);
list2.push(3);
list2.push(4);

const list3 = new LinkedList();
list2.push(2);
list2.push(6);

const lists = {
  list1,
  list2,
  list3
};

console.log(bruteForceMergeList(lists));

// console.log(mergeHelper(list1, list2));
/*
      a,c
1 ->
2-> 2 -> 4
 3
 b, c
 loop as long as pointerA is less than pointerB, increment pointerA
 if pointer A is greater or equal to pointerB
      pointerB should be detached ->
        let currentA = pointerA
        currentB = pointerB
        currentB = currentA
        pointerB.next = pointerA
*/
