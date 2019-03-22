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

// console.log(g.depthFirstSearchRecursive("A"));
