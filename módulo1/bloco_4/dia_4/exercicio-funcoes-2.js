let array = [2, 3, 6, 7, 10, 1];
function indexOfBigger(array){
  let biggerIndex = 0;
  for(index in array){
    if(array[biggerIndex]<array[index]){
      biggerIndex = index;
    }
  }
  return biggerIndex;
}

console.log( indexOfBigger(array))