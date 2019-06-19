var arr1 = [1,22,33,44];
var arr2 = [-1,2];



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
	console.log(i,j,arr3);

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

console.log(merge(arr1,arr2));
