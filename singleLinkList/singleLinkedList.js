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

	get(num)
	{
		if(!this.head || num > this.length  || num <= 0)
		{
			return undefined;
		}

		else
		{
			let currentNode = this.head;
			for (let i =0;i<num-1;i++)
			{
				currentNode = currentNode.next;
			}
			return currentNode;
		}

	}

	set(position, value)
	{
		if(!this.head)
		{
			return undefined;
		}
		else
		{
			let p = this.get(position);
			p.value = value;
			return this;
		}

	}

	insert(position,value)
	{
		let newNode = new Node(value);

		if (position > this.length || position < 0)
		{
			return false;
		}
		else if(position === this.length)
		{
			this.push(value);
		}
		else if (!this.head)
		{
			this.head = newNode;
			this.tail = newNode;
			this.length = this.length+1;
		}
		else
		{
			let prev = this.get(position-1);
			let current = prev.next;
			newNode.next = current;
			prev.next = newNode;
			this.length = this.length+1;
		}

		
		
		return this;
	}


	remove(position)
	{

		if(position <0 || position>=this.length) return undefined;
		if(index === 0) return this.shift();
		if (index === this.length-1) return this.pop();


		var prev = this.get(position-1);
		var removed = prev.next;
		prev.next = removed.next;
		return removed;
	}

}

var list = new SingleLinkList();
list.push('Apple');
list.push('Ball');
//list.push('Cat');
list.push('dog');

//console.log(list.unshift("Dog"));
//console.log("===============================")
console.log(list.insert(3,'Cat'));
//console.log(list);