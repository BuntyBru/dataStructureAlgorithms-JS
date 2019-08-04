class Graph
{
	constructor()
	{
		this.adjacencyList={};
	}

	addVertex(vertex)
	{
		

		this.adjacencyList[vertex] =[];

	}

	addEdge(v1,v2)
	{
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	remEdge(v1,v2)
	{
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
		
	}

	remVertex(v)
	{

		for (let key in this.adjacencyList)
		{
			this.adjacencyList[key] = this.adjacencyList[key].filter(item=>item !== v)
		}
		delete this.adjacencyList[v];

	}
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');

g.addEdge('Dallas','Tokyo');
g.addEdge('Dallas','Aspen');
g.addEdge('Hong Kong','Tokyo');
g.addEdge('Hong Kong','Dallas');
g.addEdge('Los Angeles','Hong Kong');
g.addEdge('Los Angeles','Aspen');
console.log(g);
g.remVertex('Hong Kong') ;
console.log("After deleting vertex", g)