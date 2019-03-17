/*
Store sorted data.
Left is less than parent node
Right is greater than parent node
Every node has at most two nodes - Binary Tree
Insertion - O(logn)
Searching - O(logn)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return this;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  /*
    BreadthFirstSearch
    - Create a queue and variable to store if the node is visited
    - start with the root
    - loop as long as there is anything in the queue
      - dequeue a node from queue and push the value of node into visited nodes list
      - if node has left children, add to queue
      - if node has right children, add to queue
    - return the visited nodes variable
 */
  BreadthFirstSearch() {
    const queue = [];
    const visited = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      visited.push(node.value);
    }
    return visited;
  }

  /* Depth First Search
    - Create a variable to store the values of nodes visited
    - Store the root in current
    - Write a helper function which accepts a node
        - push the value of current node to visited
        - if node has left, call helper with left property(visit all left)
        - if node has right, call helper with right property
    - invoke the helper function with the current variable
    - return visited
 */
  DepthFirstSearchPreOrder() {
    const visited = [];
    const current = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(8);
tree.insert(5);
tree.insert(9);
tree.insert(12);
tree.insert(11);
tree.insert(18);
tree.insert(10);
console.log(JSON.stringify(tree));
console.log(tree.contains(2));
console.log(tree.contains(21));
console.log(tree.contains(12));
console.log(tree.BreadthFirstSearch());
console.log(tree.DepthFirstSearchPreOrder());
//          10
//       8       12
//    5    9  11   18
