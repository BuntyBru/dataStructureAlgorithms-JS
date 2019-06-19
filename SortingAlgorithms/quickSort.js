let arr = [4,8,-11,2,1,5,7,6,3];

function swap(arr,i,j)
{
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] =temp;
}

function pivot(arr, start=0, end=arr.length+1)
{
	let pivot=arr[start];
	let pivotIndex = start;
	for(var i=start+1;i<arr.length;i++)
	{
		if(pivot > arr[i])
		{
			pivotIndex = pivotIndex + 1;
			swap(arr,pivotIndex,i);
		}
	}
	swap(arr,start,pivotIndex);
	return pivotIndex;
}

function quickSort(arr,left=0,right = arr.length-1)
{
if(left < right)
{
	let pivotIndex = pivot(arr,left,right);
	quickSort(arr,left,pivotIndex-1);
	quickSort(arr,pivotIndex+1,right);
}

	return arr;

}
console.log(quickSort(arr));
