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

//          10
//       8       12
//    5    9  11   18