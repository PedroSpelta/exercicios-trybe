let ar = [2, 3, 2, 5, 8, 5];
function mostReps(arr){
  let mostUsedIndex = 0;
  let biggerQntNumber = 0;
  for(numberIndex in arr){
    let qntNumber = 0;
    for(number2 of arr){
      if (arr[numberIndex] == number2) qntNumber +=1
    }
    if (qntNumber>biggerQntNumber){
      mostUsedIndex = numberIndex;
      biggerQntNumber = arr[mostUsedIndex];
    }
  }
  console.log('O numero que mais aparece é o:',arr[mostUsedIndex])
}

mostReps(ar);