  /*
  - Create a queue and variable to store if the node is visited
  - start with the root
  - loop as long as there is anything in the queue
    - dequeue a node from queue and push teh value of node into visited nodes list
    - if node has left children, add to queue
    - if node has right children, add to queue
- return the visited nodes variable
   */
import BST from './BST';

BST.BreadthFirstSearch = () => {
    console.log('method')
};

  let tree = new BST();
  tree.insert(10);
  tree.insert(8);
  tree.insert(5);
  tree.insert(9);
  tree.insert(12);
  tree.insert(11);
  tree.insert(18);
  tree.insert(10);

  tree.BreadthFirstSearch();
  //          10
  //       8       12
  //    5    9  11   18