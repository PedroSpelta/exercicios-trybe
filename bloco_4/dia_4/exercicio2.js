function palindrome(string){
  if (string.length%2!=0){
    let middle = string.length/2 + 0.5
    for(let index = 0;index<=middle;index++){
      if(string[index]!=string[string.length-index-1]){
        return false
      }
    }
    return true
  }
}

console.log(palindrome('arara'));