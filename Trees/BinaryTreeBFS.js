class Node
{
	constructor(val)
	{
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree
{
	constructor()
	{
		this.root = null;
	}

	insert(val)
	{
		let newNode = new Node(val)
		if(this.root === null)
		{
			this.root = newNode;
			return this;
		}
		else
		{
			let currentNode = this.root;
			while(true)
			{
				if(val < currentNode.value)
				{
					//go left
					if(currentNode.left === null)
					{
						currentNode.left = newNode;
						return this;
					}
					else
					{
						currentNode = currentNode.left
					}
				}

				else if (val > currentNode.value)
				{
					//go right
					if(currentNode.right === null)
					{
						currentNode.right = newNode;
						return this;
					}
					else
					{
						currentNode = currentNode.right;
					}
				}

				else
				{
					return undefined
				}
			}
		}
	}

	bfsTraversal()
	{
		var node  = this.root;
		let data =[], queue =[];
		queue.push(node);
		while(queue.length)
		{
			node = queue.shift();
			data.push(node.value);
			if(node.left) queue.push(node.left);
			if(node.right) queue.push(node.right);
		}

		return data;

	}
}

let t = new BinarySearchTree();
t.insert(10);
t.insert(6);
t.insert(15);
t.insert(3);
t.insert(8);
t.insert(20);
//10, 6, 15, 3, 8, 20 
console.log(t.bfsTraversal());