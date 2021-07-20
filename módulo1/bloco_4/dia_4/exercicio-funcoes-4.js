function biggerName(arr){
  let biggerIndex = 0;
  for(index in arr){
    if (arr[biggerIndex].length<arr[index].length){
      console.log(index)
      biggerIndex = index;
    }
  }
  return arr[biggerIndex]
}
let ar = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
console.log( biggerName(ar));