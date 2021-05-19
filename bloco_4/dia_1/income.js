let bruteIncome = 10000;
let irIncome;
let netIncome;
if(bruteIncome>5189.82){
  irIncome = bruteIncome - 570.88
}
else if(bruteIncome>2593.93){
  irIncome = bruteIncome - 0.11*bruteIncome
}
else if(bruteIncome>1556.95){
  irIncome = bruteIncome - 0.09*bruteIncome
}
else if(bruteIncome<1556.95 && bruteIncome>0){
  irIncome = bruteIncome - 0.08*bruteIncome
}
console.log(irIncome)

if(irIncome>4664.68){
  netIncome = irIncome - 0.275*irIncome + 869.36
}
else if(irIncome>3751.06){
  netIncome = irIncome - 0.225*irIncome + 636.13
}
else if(irIncome>2826.66){
  netIncome = irIncome - 0.15*irIncome + 354.8
}
else if(irIncome>1903.98 && irIncome>0){
  netIncome = irIncome - 0.075*irIncome + 142.8
}
else(
  netIncome = irIncome
)
console.log(netIncome)
