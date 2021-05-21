//posição da rainha
let queenPosition = [4,6];
//posição do oponente
let oponentPossition = [4,2];
//resultado do ataque
let atackResul = false;
//calculo do resultado do ataque
if(queenPosition[0]==oponentPossition[0] || queenPosition[1]==oponentPossition[1]){
  atackResul=true;
}
console.log(atackResul);