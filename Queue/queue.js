class Node
{
	constructor(val)
	{
		this.value = val;
		this.next = null;
	}
}

class Queue
{
	constructor()
	{
		this.head = null;
		this.tail = null;
		this.length =0;
	}

	enqueue(val)
	{
		let newNode = new Node(val);
		if(!this.head)
		{
			this.head = newNode;
			this.tail = newNode;
			this.length = this.length +1;
		}

		else
		{
			this.tail.next = newNode;
			this.tail = newNode;
			this.length = this.length +1;
		}

		return this;
	}

	dequeue()
	{
		if(!this.head)return null;
		let temp = this.head;

		if(this.head === this.tail)
		{
			this.tail = null;
		}
		this.head = this.head.next;
		this.length = this.length -1;

		return this.temp.value; 
		

		

	}
}