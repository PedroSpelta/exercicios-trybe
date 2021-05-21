let number = 61;
totalDividers = 0;
for (let dividers=2;dividers<number;dividers++){
  if ((number%dividers)==0){
    totalDividers+=1;
  }
}
if(totalDividers>0){
  console.log('Não é primo')
}
else{
  console.log('É primo')
}