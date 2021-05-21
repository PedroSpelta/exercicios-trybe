let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log('\nExercico 1:')
console.log('bem vinda,',info.personagem)
console.log('\nExercico 2:')
console.log(info)
console.log('\nExercico 3:')
for(keys in info){
  console.log(keys)
}
console.log('\nExercico 4:')
for(keys in info){
  console.log(info[keys])
}