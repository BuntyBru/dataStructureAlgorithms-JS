function merge(arr1,arr2)
{
	var i=0;
	var j=0;
	var arr3=[];
	while (i < arr1.length && j <arr2.length)
	{
		if(arr1[i] < arr2[j])
		{
			arr3.push(arr1[i]);
			i=i+1;
		}
		else
		{
			arr3.push(arr2[j]);
			j = j+1;
		}
	}
	if(i < arr1.length)
	{
		for(var p=i ;p<arr1.length;p++)
		{
			arr3.push(arr1[p]);
		}
	}
	else if(j<arr2.length)
	{
		for(var q=j ;q<arr2.length;q++)
		{
			arr3.push(arr2[q]);
		}
	}
	return arr3;
}

//console.log(merge(arr1,arr2));


function mergeSort(arr)
{
	if (arr.length <=1)
	{
		return arr;
	}
	else
	{
	let mid = Math.floor(arr.length/2);
	let lefttSide = mergeSort(arr.slice(0,mid));
	let rightSide = mergeSort(arr.slice(mid));
	return merge(lefttSide,rightSide);
	}
}

let arr1 = [5,3,4,2,11,1,9,7,4,3,2,111];
console.log(mergeSort(arr1));