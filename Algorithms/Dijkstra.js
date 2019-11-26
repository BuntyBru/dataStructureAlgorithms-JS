class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}


class WeightedGraph
{
	constructor()
	{
		this.adjacencyList={};
	}

	addVertex(v)
	{
		if(!this.adjacencyList[v])
		{
			this.adjacencyList[v]=[];
		}
	}

	addEdge(v1,v2,weight)
	{
		this.adjacencyList[v1].push({node:v2,weight:weight});
		this.adjacencyList[v2].push({node:v1,weight:weight});
	}

	Dijkstra(start,finish)
	{
		console.log(this.adjacencyList)
		let nodes = new PriorityQueue();
		let distances={};
		let previous={};
		let smallest;
		let path = [];
		for(let vertex in this.adjacencyList)
		{
			if(vertex == start)
			{
				distances[vertex]=0;
				nodes.enqueue(vertex,0);
			}
			else
			{
				distances[vertex]=Infinity;
				nodes.enqueue(vertex,Infinity);
			}
			previous[vertex]=null;
		}
		while(nodes.values.length)
		{
			smallest=nodes.dequeue().val;

			if(smallest == finish)
			{
				//end of the function, return 
				while (previous[smallest])
				{
					path.push(smallest);
					smallest = previous[smallest];
				}

				break;
			}

			if(smallest || distances[smallest] !== Infinity)
			{
				for(let neighbour in this.adjacencyList[smallest])
				{
					//finding the neighbour node
					let nextNode = this.adjacencyList[smallest][neighbour];
					//console.log(nextNode);

					//calculate the new distance to neighbouring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbour = nextNode.node;
				
					if(candidate < distances[nextNode.node])
					{
						//updating the new smallest distance 
						distances[nextNeighbour] = candidate;
						previous[nextNeighbour] = smallest;

						//enqueue in the priority queue with new priorty
						nodes.enqueue(nextNeighbour,candidate);
					}

				}
			}

		}
		console.log(path.concat(smallest).reverse());

	}

}

var graph = new WeightedGraph()
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B',4);
graph.addEdge('A','C',2);
graph.addEdge('B','E',3);
graph.addEdge('C','D',2);
graph.addEdge('C','F',4);
graph.addEdge('D','E',3);
graph.addEdge('D','F',1);
graph.addEdge('E','F',1);

console.log(graph);

graph.Dijkstra('A','E');








