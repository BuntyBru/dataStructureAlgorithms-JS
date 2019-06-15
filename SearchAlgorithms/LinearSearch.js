
function LinearSearch(arr,ele)
{
	for(let i=0;i<arr.length;i++)
	{
		if(ele === arr[i])
		{
			return i;
		}
	}

	return -1;
}

let p =LinearSearch([2,3,4,99,11,1],11); //returns the index of the element searched
console.log("Answer",p);