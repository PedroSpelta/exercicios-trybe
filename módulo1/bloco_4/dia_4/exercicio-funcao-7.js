function endVerify(word, ending){
  for (index = 0; index < ending.length;index++){
    actualLetter = word[word.length-ending.length+index]
    if (actualLetter!=ending[index]) return false
  }
  return true
}
//endVerify('trybe','be')
console.log(endVerify('trybe','be'));