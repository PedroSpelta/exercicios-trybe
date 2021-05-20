let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let bigger = 0;
let oddNumbers = 0;
let smaller = Infinity;
for (let number of numbers){
  console.log(number)
  sum += number;
  if (number>bigger){
    bigger = number;
  }
  if (number%2!=0){
    oddNumbers+=1;
  }
  if (number<smaller){
    smaller = number;
  }
}
console.log('A soma total é :', sum);
console.log('A média é :', (sum/numbers.length));
let biggerThan20 = (sum>=20) ? console.log("Valor maior que 20"):console.log('Valor menor que 20');
console.log('O maior numero do array é :', bigger);
let odd = (oddNumbers>=0)?console.log('Quantidade de impares: ', oddNumbers):console.log('Não tem impares');
console.log('O menor numero do array é :', smaller);

let arr =[];
for(let numero = 1;numero<26;numero++){
  arr.push(numero);
}
console.log(arr)

