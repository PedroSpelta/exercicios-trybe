let n = 5;
if (n%2!=0){
  let height = (n+1)/2;
  let line = '';
  for(let spaces = height-1;spaces>0;spaces-=1){
    line = line + ' '
  }
  let ast = 1;
  for (let h=0;h<height;h++){
    let test = line.slice(h)
    if(h==0 || h==height-1){
      for(let asterisc=0;asterisc<ast;asterisc+=1){
        test = test + '*'
      }
    }
    else{
      test = test + '*'
      for(let spaces=0;spaces<ast-2;spaces+=1){
        test = test + ' '
      }
      test = test + '*'
    }
    console.log(test)
    ast = ast + 2;
  }
}