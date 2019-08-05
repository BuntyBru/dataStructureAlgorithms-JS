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

	remVertex(v1)
	{
		for(let key in this.hashMap)
		{
			this.hashMap[key] = this.hashMap[key].filter(item => item !== v1);
		}

		delete this.hashMap[v1];
	}

	remEdge(v1,v2)
	{

		this.hashMap[v1] = this.hashMap[v1].filter(v => v !== v2);
		this.hashMap[v2] = this.hashMap[v2].filter(v => v !== v1);
	}


	dfs(start)
	{
		let result=[];
		let visited =[];
		const adjacencyList = this.hashMap;
		
		(function finaldfs(vertex)
		{
			if(!vertex) return null;
			visited[vertex]=true;
			result.push(vertex);
			adjacencyList[vertex].forEach(neighbour => {
				if(!visited[neighbour])
				{
					return finaldfs(neighbour);
				}
			})
		})(start); 



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

console.log(g.dfs('A'));
