/* eslint-disable max-len */
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => {
  return result + number;
});
console.log(sumNumbers);

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumEven = numbers2.reduce((acc, curr) => curr % 2 === 0 ? curr + acc : acc);
console.log(sumEven);
