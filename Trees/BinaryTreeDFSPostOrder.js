class Node
{
	constructor(value)
	{
		this.val = value;
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

	insert(value)
	{
		let newNode = new Node(value);

		if(!this.root)
		{
			this.root = newNode;
			return this;
		}

		else
		{
			let currentNode = this.root;
			while(true)
			{
				if(value < currentNode.val )
				{
					//go left
					if(currentNode.left === null)
					{
						currentNode.left = newNode;
						return this;
					}
					else
					{
						currentNode = currentNode.left;
					}
				}

				else if(value > currentNode.val)
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
					return undefined;
				}
			}
		}
	}

	postOrder()
	{
		var data =[];
		function traverse(node)
		{
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
			data.push(node.val);
		}

		traverse(this.root);
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

console.log(t.postOrder());