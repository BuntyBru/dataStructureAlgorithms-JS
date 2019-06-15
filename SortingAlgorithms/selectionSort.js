console.log("Hello");
let arr= [11,2,13,4,51,16];
//let arr = [5,3,4,1,2];



function selectionSort(arr)
{
 for (var i=0; i < arr.length ;i++)
 {
 	let minIndex = i;
 	for (var j=i+1;j<arr.length;j++)
 	{
 	//	console.log(i,j);
 		if(arr[minIndex] > arr[j])
 		{
 			minIndex = j;
 		}
 	}

 	let temp = arr[minIndex];
 	arr[minIndex]=arr[i];
 	arr[i]=temp;
 }

}

selectionSort(arr);
console.log(arr);