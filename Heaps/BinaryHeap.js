class MaxBinaryHeap
{
	constructor()
	{
		this.values=[41,39,33,18,27,12];
	}

	insert(element)
	{

		if(this.values.length === 0)
		{
			this.values.push(element);
		}

		else
		{
			this.values.push(element);
			this.bubbleUp(this.values);

		}
	}

	bubbleUp(arr)
	{
		let t = arr.length-1;
		let parentIndex = Math.floor((t-1)/2);
		let parent = arr[parentIndex];
		console.log(parentIndex);

		while(t >= 0)
		{
            parentIndex = Math.floor((t-1)/2) ;
			if(arr[t] > arr[parentIndex])
			{
				//swap parent and the new entry 
				//new version of t = parentIndex
				//change the parentIndex to new parentIndex

				let temp = arr[parentIndex];
				arr[parentIndex] = arr[t];
				arr[t] = temp;

				t = parentIndex;
				
			}

			else
			{
				break;
			}

			
		}

	}

	//function for extracting the maximum value from a heap
	extractMax()
	{
		if(this.values.length == 0) return undefined;
		let maxVal = this.values[0];
		let lastVal = this.values[this.values.length-1];
		console.log(maxVal,lastVal);
		this.values[0] = lastVal;
		this.values[this.values.length-1] = maxVal;
		console.log(this.values);
		let answer = this.values.pop();

		this.percDown();
	}

	//helper function in order to maintain the heap property in the case of extractMax

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
				if(leftChild > element)
				{
					swap = leftChildIdx;
				}

			}

			if(rightChildIdx < length)
			{
				rightChild = this.values[rightChildIdx];
				if((swap == null && rightChild > element) || (swap != null && rightChild > leftChild))
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


let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap);
heap.extractMax();

console.log(heap);heap.extractMax();

console.log(heap);heap.extractMax();

console.log(heap);