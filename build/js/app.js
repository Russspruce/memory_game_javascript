(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/game.js":2}],2:[function(require,module,exports){


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

},{}]},{},[1]);
