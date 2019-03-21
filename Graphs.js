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
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Vancouver");
g.addVertex("San Francisco");
g.addVertex("New Delhi");
g.addEdge("Tokyo", "Vancouver");
g.addEdge("Tokyo", "San Francisco");
g.addEdge("New Delhi", "San Francisco");
g.addEdge("New Delhi", "Tokyo");
g.removeVertex("New Delhi");
