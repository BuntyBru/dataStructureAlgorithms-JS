class Node
{
	constructor(value)
	{
		this.value = value;
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
		let newNode = new Node(val);

		if(this.root === null)
		{
			this.root = newNode;
			return this;
		}
		else
		{
			var current = this.root;
			while(true)
			{
				if(val === current.value) return undefined;
				if(val < current.value)
				{
					if(current.left === null)
					{
						current.left = newNode;
						return this;
					}
					else
					{
						current = current.left;
					}
				}
				else
				{
					if(current.right === null)
					{
						current.right = newNode;
						return this;
					}
					else
					{
						current = current.right;
					}
				}
			}

		}
	}

	find(value)
	{
		if(this.root === null) return false;
		let currentNode = this.root;
		let found = false;

		while(currentNode && !found)
		{
		if(value > currentNode.value)
		{

			currentNode = currentNode.right;
		}

		else if (value < currentNode.value)
		{
			//go left
			currentNode = currentNode.left;
		}

		else
		{
			found = true;
			return true;
			
		}
		}

		return false;
	}
}


let bt = new BinarySearchTree();

bt.insert(202);
bt.insert(203);
bt.insert(201);

console.log(bt.find(2011));