class Graph
{
	constructor()
	{
		this.hashMap=[];
	}


	addVertex(vertex)
	{
		if(this.hashMap[vertex])
		{
			return 'Error';
		}

		else
		{
			this.hashMap[vertex]=[];
		}
	}

	addEdge(v1,v2)
	{
		this.hashMap[v1].push(v2);
		this.hashMap[v2].push(v1);	
	}

	remEdge(v1,v2)
	{
		this.hashMap[v1] = this.hashMap[v1].filter(v=> v !== v2);
		this.hashMap[v2] = this.hashMap[v2].filter(v=> v !== v1);
	}

	remVertex(vertex)
	{
		for (let keys in this.hashMap)
		{
			this.hashMap[keys]=this.hashMap[keys].filter(x => x !== vertex);
		}

		delete this.hashMap[vertex];
	}

	dfs(start)
	{
		let result =[];
		let visited =[];
		let adjacencyList = this.hashMap;

		(function helpDFS(vertex)
			{
				if(!vertex) return null;
				visited[vertex] = true;
				result.push(vertex);

				adjacencyList[vertex].forEach(neighbour => {
				if(!visited[neighbour])
				{
					return helpDFS(neighbour);
				}
			})
			})(start)

	}

	bfs(start)
	{
		let queue = [start];
		let result =[];
		let visited = [];
		let currentVertex;

		while(queue.length)
		{
			currentVertex = queue.shift();
			result.push(currentVertex);
			visited[currentVertex]=true;

			this.hashMap[currentVertex].forEach(x => {
				if(!visited[x])
				{
					visited[x]=true;
					queue.push(x);
				}
			})
		}
		return result;
	}
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');

console.log(g);
console.log('-----------------------');

console.log(g.bfs('A'));
