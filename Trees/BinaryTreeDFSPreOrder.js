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

	dfsPreorderTraversal()
	{
		var data=[];
		var current = this.root;

		function traverse(node)
		{
			data.push(node.value);
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
		}

		traverse(this.root);
		return data;

	}
}