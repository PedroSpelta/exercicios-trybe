
let piece = 'Pawn' 

if(piece.toLowerCase() == 'pawn'){
  console.log('Pawns moves vertically forward one square, with the option to move two squares if they have not yet moved.')
}
if(piece.toLowerCase() == 'bishop'){
  console.log('Bishops move diagonally any number of squares')
}
else{
  console.log('Try again, maybe you have misspelled')
}