class Node
{

	constructor(val,priority)
	{
	this.val = val;
	this.priority = priority;
	}

}



class PriorityQueue
{
	constructor()
	{
		this.values=[];
	}

	insert(val,priority)	
	{
		let newNode = new Node(val,priority);

		if(this.values.length ==0)
		{
			this.values.push(newNode);
		}

		else
		{
			this.values.push(newNode);
			this.bubbleUp(this.values);
		}
	}

	bubbleUp(arr)
	{
		let t = arr.length -1;
		let parentIndex = Math.floor((t-1)/2);

		while(t>0)
		{
			  parentIndex = Math.floor((t-1)/2) ;
			if(arr[t].priority > arr[parentIndex].priority)
			{

				let temp = arr[parentIndex];
				arr[parentIndex] = arr[t];
				arr[t] = temp;
				t = parentIndex;
			}

			else if(arr[t].priority <= arr[parentIndex].priority)
			{
				break;
			}
		}
	}

		extractMax()
	{
		if(this.values.length == 0) return undefined;
		let maxVal = this.values[0];
		let lastVal = this.values[this.values.length-1];
		//console.log(maxVal,lastVal);
		this.values[0] = lastVal;
		this.values[this.values.length-1] = maxVal;
		//console.log(this.values);
		let answer = this.values.pop();

		this.percDown();
	}

	percDown()
	{
		let idx =0;
		const length = this.values.length;
		const element = this.values[0];
		while(true)
		{
			let leftChildIdx = (2 * idx)+1;
			let rightChildIdx= (2 * idx)+2;

			let leftChild,rightChild;
			let swap=null;

			if(leftChildIdx < length)
			{
				leftChild = this.values[leftChildIdx];
				if(leftChild.priority > element.priority)
				{
					swap = leftChildIdx;
				}

			}

			if(rightChildIdx < length)
			{
				rightChild = this.values[rightChildIdx];
				if((swap == null && rightChild.priority > element.priority) || (swap != null && rightChild.priority > leftChild.priority))
				{
					swap = rightChildIdx;
				}
			}

			if (swap == null) break;

			this.values[idx]=this.values[swap];
			this.values[swap]=element;

			idx = swap;
	}

    }


}


let Er = new PriorityQueue();

Er.insert('common cold',41);
Er.insert('gunshot wound',35);
Er.insert('high fever',21);
Er.insert('dengue',41);

console.log(Er);

Er.extractMax();
console.log(Er);