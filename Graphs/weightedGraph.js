class graph
{
	constructor()
	{
		this.hashMap=[];
	}

	addVertex(v1)
	{
		if(this.hashMap[v1])
		{
			return 'error'
		}
		this.hashMap[v1]=[];

	}

	remVertex(v1)
	{
		for(let key in this.hashMap)
		{
			this.hashMap[key]= this.hashMap[key].filter(x=> x !== key);
		}

		delete this.hashMap[key];
	}

	addEdge(v1,v2,weight)
	{
		this.hashMap[v1].push({node:v2,weight:weight});
		this.hashMap[v2].push({node:v1,weight:weight});

	}
}

let g = new graph();

g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');

g.addEdge('Dallas','Tokyo',22);
g.addEdge('Dallas','Aspen',7);
g.addEdge('Hong Kong','Tokyo',76);
g.addEdge('Hong Kong','Dallas',11);
g.addEdge('Los Angeles','Hong Kong',2);
g.addEdge('Los Angeles','Aspen',112 );
console.log(g);