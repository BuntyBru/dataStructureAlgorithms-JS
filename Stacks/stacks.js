class Node
{
	constructor(val)
	{
		this.value = val;
		this.next=null;
	}
}

class Stack
{
	constructor()
	{
		this.head = null;
		this.tail = null;
		this.length=0;
	}

	push(val)
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
			let temp = this.head;
			this.head = newNode;
			this.head.next = temp;
			this.length= this.length+1;
		}
		return this;
	}

	pop()
	{
		if(!this.head)return undefined;
		
			let temp = this.head;
		if(this.head === this.tail)
		{
			this.tail = null;
		}
		this.head = this.head.next;
		this.length = this.length-1;

		return temp.value;

		
	}

}

let tam = new Stack();
tam.push("hell");
tam.push("fell");
tam.push("Eja");
console.log(tam.pop());
console.log("--------------");
console.log(tam);
