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
    constructor(){
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if(this.root === null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while(true) {
            if(value === current.value) return this;
            if(value < current.value) {
                if(current.left === null) {
                    current.left = node;
                    return this;
                }
                else current = current.left;
            }
            else if(value > current.value) {
                if(current.right === null) {
                    current.right = node;
                    return this;
                }
                else current = current.right;
            }
        }
    }

    contains(value) {
        let current = this.root;
        while(current) {
            if (value === current.value) return true;
            else if (value < current.value ) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }

    /*
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
         while(queue.length) {
             node = queue.shift();
             if(node.left) queue.push(node.left);
             if(node.right) queue.push(node.right);
             visited.push(node.value);
         }
         return visited;
    };

}

var tree = new BST();
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

//          10
//       8       12
//    5    9  11   18