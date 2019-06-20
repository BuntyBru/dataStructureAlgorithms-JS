class Node
{
	constructor(val)
	{
		this.value = val;
		this.next=null;
	}
}

class SingleLinkList
{
	constructor()
	{
		this.head=null;
		this.tail=null;
		this.length=0;
	}

	push(val)
	{
		let newNode = new Node(val);
		if (!this.head)
		{
			this.head=newNode;
			this.tail = this.head;
		}
		else
		{
			this.tail.next = newNode;
			this.tail=newNode; 
		}
		this.length++;
		return this;
	}

	pop()
	{
		if(!this.head)
		{
			return undefined;
		}
		else
		{
			let current = this.head;
			let newTail = this.head;
			while(current.next!=null)
			{
				 newTail=current;
				 current = current.next;
			}
			
			this.tail = newTail;
			this.tail.next=null;
			this.length = this.length-1;
			if(this.length === 0)
			{
				this.head = null;
				this.tail =null;
			}
			return current;

		}
	}

	shift()
	{
		if(!this.head)
		{
			return undefined;
		}
		else
		{
			let current = this.head;
			this.head = current.next;
			this.length = this.length-1;
			return current;
		}
	}

	unshift(val)
	{
		let newNode = new Node(val);
		if(!this.head)
		{
			this.head = newNode;
			this.tail = newNode;
			this.length = this.length+1;
		}
		else
		{
			let currentNode = this.head;
			this.head = newNode;
			newNode.next = currentNode;
			this.length = this.length+1;
		}

		return this;
	}

	
}

var list = new SingleLinkList();
list.push('Apple');
list.push('Ball');
list.push('Cat');

console.log(list.unshift("Dog"));
console.log("===============================")
console.log(list);
