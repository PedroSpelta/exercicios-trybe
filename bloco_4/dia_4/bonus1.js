translator = {
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}

function romanToNumber(roman){
  let number = 0;
  for(let indexRoman = 0; indexRoman < roman.length; indexRoman++){
    let actualDigit = translator[roman[indexRoman]];
    let nextDigit = translator[roman[indexRoman+1]];
    if (actualDigit < nextDigit) number -=actualDigit;
    else number +=actualDigit
  }
  return number;
}
console.log (romanToNumber('CDXLIV'))
