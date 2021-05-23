let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
arrayOfNumbers(vector);

function arrayOfNumbers(vector){
  let evenArray = [];
  for(let order in vector){
    for(let number of vector[order]){
      if (number%2==0) evenArray.push(number);
    }
  }
  console.log(evenArray);
}