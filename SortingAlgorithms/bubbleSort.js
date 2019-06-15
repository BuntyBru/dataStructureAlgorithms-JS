let arr= [1,2,3,4,5,6];




function bubbleSort(arr)
{
	let i=0;
	let j=1;

	while(j < arr.length)
	{
		if(arr[i] > arr[j])
		{
			let temp = arr[j];
			arr[j]=arr[i];
			arr[i] = temp;
			i=0;
			j=1;
		}
		else
		{
			i=i+1;
			j=j+1;
		}
	}

}

bubbleSort(arr);
console.log(arr);