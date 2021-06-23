//  parte 1
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderedArray = oddsAndEvens.sort((a, b) => a - b);
const orderResult = `Os números ${orderedArray} se encontram
ordenados de forma crescente!`;
console.log(orderResult);

//  parte 2
const fatorial = (number, total = 1) => (number === 1)? total : fatorial(number - 1, total*number );
// let result = 1;
// for (index = 1; index < number + 1; index += 1) {
//   result *= index;
// }
console.log(fatorial(4));
