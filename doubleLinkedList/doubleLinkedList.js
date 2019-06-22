class Node
{
	constructor(value)
	{
		this.value = value;
		this.next=null;
		this.prev = null;
	}
}

class doublyLinkedList
{
	constructor()
	{
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value)
	{
		let newNode = new Node(value);

		if(!this.head)
		{
			this.head = newNode;
			this.tail = newNode;
			this.length = this.length +1;
		}

		else
		{
			newNode.prev = this.tail;
			this.tail.next= newNode;
			this.tail = newNode;
			this.length = this.length+1;
		}

		return this;
	}

	pop()
	{
		if(this.length === 0) return undefined;

		let poppedNode = this.tail;
		if(this.length === 1)
		{
			this.head = null;
			this.tail = null;
		}

		else
		{
			this.tail=poppedNode.prev;
			this.tail.next=null;
			poppedNode.prev=null;

		}
		this.length = this.length-1;
		return poppedNode;
	}

	shift()
	{
		if(!this.head) return undefined;
		let firstNode = this.head;
		if (this.length === 1)
		{
			this.head= null;
			this.tail = null;
		}
		else
		{
			this.head = firstNode.next;
			this.head.prev= null;
			firstNode.next=null;
		}
		this.length = this.length-1;
		return firstNode;
	}

	unshift(value)
	{
		let newNode = new Node(value);
		if (!this.head)
		{
			this.head = newNode;
			this.tail = newNode;
		}
		else
		{
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length = this.length+1;
		return this;
	}

	get(index)
	{
		if(index < 0 || index >= this.length) return null;

		if(index <= this.length/2)
		{
			var count =0;
			var current = this.head;
			while(count != index)
			{
				current = current.next;
				count++;
			}
			return current
		}
		else
		{
			var count = this.length-1;
			var current = this.tail;

			while (count !== index)
			{
				current=current.prev;
				count--;
			}
			return current;
		}
	}

	set(index,value)
	{
		let foundNode = this.get(index);
		if(foundNode!=null)
		{
			foundNode.value = value;
			return true;
		}
		return false;
	}

	insert(index,value)
	{
		
		if(index <0 || index > this.length) return false;
		if(index === 0)
		{
			return this.unshift(value);
		}
		if(index === this.length)
		{
			return this.push(value);
		}
		let newNode = new Node(value);
		let beforeNode = this.get(index-1);
		let afterNode = beforNode.next;
		beforNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next=afterNode;
		afterNode.prev=newNode;
		this.length++;
		return true;
	}

	remove(index)
	{
		if(index < 0 || index >= this.length) return undefined;
		if(index === 0) return this.shift();
		if (index === this.length-1) this.pop();

		var removedNode = this.get(index);
		removedNode.prev.next = removedNode.next;
		removedNode.next.prev = removedNode.prev;
		removedNode.next= null;
		removedNode.prev = null;
		this.length = this.length-1 ;
		return removedNode;

	}
}

let list = new doublyLinkedList();
list.push(44);
list.push(34);
list.push(99);
list.push(100);
list.push(340);
list.push(112);
//console.log(list);
list.remove(0)
console.log(list);