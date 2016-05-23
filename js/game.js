

function Game(){

  // this.turn = turn;
  // this.card = card;
  //
  // this.turnPlay = function(){

}

Game.prototype.checkMatch = function() {
  var daValue = 0;
  var winValue = 2;
  if (daValue == 2){
    $(".flipped").removeClass("flipped");
    daValue = 0;
    return alert("itsamatch");
  } else if (daValue == 1){
    daValue = 1;
  } else {
    daValue = 0;
    $(".flipped").removeClass('card-overturned');
    $(".flipped").removeClass('flipped');
  }
}

// function cardRandom1(){
//   return Math.random() * (13 - 1);
// }
exports.GameModule = Game;
