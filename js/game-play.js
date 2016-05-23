var Game = require('./../js/game.js').GameModule;


$(document).ready(function(){
  $("div.card").click(function(event){
    debugger;
    var daValue = 0;
    daValue += parseInt($(event.target).attr('value'));
    $(event.target).removeClass('card');
    $(event.target).addClass('flipped');
    $(event.target).addClass('card-overturned');
    var newGame = new Game();
    debugger;
    newGame.checkMatch();
    // checkWin();

  });

});
