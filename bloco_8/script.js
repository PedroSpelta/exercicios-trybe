/* eslint-disable max-len */

const newPerson = (name) => {
  return (
    {nome: name, email: `${name}@trybe.com`}
  );
};

const newEmployees = (newperson) => {
  const employees = {
    id1: newperson('Pedro Guerra'),
    id2: newperson('Luiza drumond'),
    id3: newperson('Carla Paiva'),
  };
  return employees;
};

console.table(newEmployees(newPerson));

const isWinner = (bet, winnerNumber) => {
  return bet === winnerNumber;
};

const gachaGame = (bet, isWinner) => {
  const winnerNumber = Math.ceil(Math.random() * 5);
  return isWinner(bet, winnerNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(gachaGame(5, isWinner));


const gradeCount = (rightAns, studentAns, checkCorrects) => {

}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(gradeCount(rightAnswers, studentAnswers));
