//at least one of those variable is even
let a = 1;
let b = 3;
let c = 4;

if (a%2==0 || b%2==0 || c%2==0){
  console.log('At least one of those is even')
  return true
}
else{
  console.log('None of those are even')
  return false
}
