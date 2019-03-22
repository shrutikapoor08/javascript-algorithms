class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertexA, vertexB) {
        //Find in the adjacency list the key of vertexA and push vertexB to the array
        //Same for vertexB
        if (!this.adjacencyList[vertexA] || !this.adjacencyList[vertexB]) return undefined;
        this.adjacencyList[vertexA].push(vertexB);
        this.adjacencyList[vertexB].push(vertexA);
    }

    removeEdge(vertexA, vertexB) {
        //Find in the adjacency list the key of vertexA and remove vertexB from the array
        //Same for vertexB
        if (!this.adjacencyList[vertexA] || !this.adjacencyList[vertexB]) return undefined;
        this.adjacencyList[vertexA] = this.adjacencyList[vertexA].filter((vertex) => (vertex !== vertexB));
        this.adjacencyList[vertexB] = this.adjacencyList[vertexB].filter((vertex) => (vertex !== vertexA));
    }

    removeVertex(vertex) {
        //loop as long as there are any adjacencies -> use removeEdge
        //then delete vertex

        const list = this.adjacencyList;
        const adjacencies = this.adjacencyList[vertex];
        adjacencies.forEach(adjacency => {
            this.removeEdge(adjacency, vertex)
        });
       delete list[vertex];
        console.log(list);
    }

    depthFirstSearchRecursive(start) {
        /*
        if vertex is empty
        return (base case)
        add vertex to results list
        mark vertex as visited
        for each neighbor in vertex's neighbors:
            if neighbor is not visited:
            recursively call DFS

        Helper function -
            accepts a vertex
            return early if vertex is empty
            place the vertex in visited and push the vertex to result array
            loop over all values in the adjacencyList for vertex
            if any values not visited, recursively invoke the helper function
         */
        const visited = {};
        const results = [];
        const adjacencyList = this.adjacencyList;
        DFSHelper(start);


        function DFSHelper(vertex){
            if(!vertex) return;
            visited[vertex] = true;
            results.push(vertex);
           const adjacencies = adjacencyList[vertex];
           adjacencies.forEach(adjacency => {
               if(!visited[adjacency]) {
                   DFSHelper(adjacency);
               }
           })
        }
        return results;
    }

    depthFirstSearchIterative(start){
        /*
           Use a stack
           push start on to the stack
           while stack is not empty
                pop vertex
                if vertex is not visited
                visit vertex, add to results
                for each of vertex's neightbors,
                    push neighbor on the stack
         */

        const stack = [];
        const visited = {};
        const results = [];
        stack.push(start);

        while(stack.length > 0) {
            let vertex = stack.pop();
            if(!visited[vertex]) {
                results.push(vertex);
                visited[vertex] = true;
                const neighbors = this.adjacencyList[vertex];
                neighbors.forEach(neighbor => stack.push(neighbor))
            }
        }

        return results;
    }

    breadthFirstSearch(start) {
        /* Use a queue (shift array)
            Place the starting vertex in it
            Create a results to store nodes
            create a visited to store nodes visited
            mark the starting vertex as visited
            loop as long as there is something in the queue
            remove the first vertex from the queue and store it in results array
            loop over each vertex in adjacency list for vertex you are visiting.
            if not visited, enqueue and mark visited
         */
        const queue = [];
        const visited = {};
        const results = [];

        visited[start] = true;
        queue.push(start);
        while(queue.length) {
            const node = queue.shift();
            results.push(node);
            const adjacencies = this.adjacencyList[node];
            adjacencies.forEach(adjacency => {
                if(!visited[adjacency]) {
                    visited[adjacency] = true;
                    queue.push(adjacency);
                }
            });
        }
        return results;

    }
}

const g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Vancouver");
// g.addVertex("San Francisco");
// g.addVertex("New Delhi");
// g.addEdge("Tokyo", "Vancouver");
// g.addEdge("Tokyo", "San Francisco");
// g.addEdge("New Delhi", "San Francisco");
// g.addEdge("New Delhi", "Tokyo");
// g.removeVertex("New Delhi");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("C", "A");
g.addEdge("D", "B");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

/*
             A
          /    \
         B      C
         |      |
         D  --- E
          \   /
            F
 */


// console.log(g.depthFirstSearchRecursive("A"));
// console.log(g.depthFirstSearchIterative("A"));
console.log(g.breadthFirstSearch("A"));