function binarySearch(arr,num){
  // add whatever parameters you deem necessary - good luck!
   var min = 0,
      max = arr.length - 1,
      middle;
  
  while ( min <= max ) {
    middle = Math.floor( ( min + max ) / 2 );
    if ( arr[ middle ] === num ) return middle;
    else if ( num < arr[ middle ] ) max = middle - 1;
    else min = middle + 1;
  }
  
  return -1;
  
  
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],14));
