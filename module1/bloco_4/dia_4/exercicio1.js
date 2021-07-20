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
console.log('\nExercico 5:')
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
for(keys in info){
  if(keys=='recorrente'&&info[keys]==info2[keys]){
    console.log('Ambos recorrentes')
  }
  else{
    console.log(info[keys],'e',info2[keys])
  }
}