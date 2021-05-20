let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
let multipliedNumber;
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index]*numbers[index+1]){
    multipliedNumber = numbers[index]*numbers[index+1];
  }
  else{
    multipliedNumber = numbers[index]*2;
  }
  numbers2.push(multipliedNumber)
}
console.log(numbers2)