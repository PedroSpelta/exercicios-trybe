let array = [2, 4, -10, 7, 10, 0, -3];
function indexOfSmaller(array){
  let SmallerIndex = 0;
  for(index in array){
    if(array[SmallerIndex]>array[index]){
      SmallerIndex = index;
    }
  }
  return SmallerIndex;
}

console.log( indexOfSmaller(array))