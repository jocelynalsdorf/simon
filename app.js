
//make game object
function Game() {
//start array with the first random tile
  var sequence = [2, Math.floor(Math.random() * 4 + 1), 4 ,1,3];
  var seqCopy = sequence.slice();
  var level = 0;
  var mode = "normal";
  this.gameOver = false;
  this.sequence = sequence;
  this.seqCopy = seqCopy
  this.active = true;
};

Game.prototype.initBoard = function(){
  var clearBtns = function(){
    $(".start-btn").removeClass("highlight-btn");
    $(".strict-btn").removeClass("highlight-btn");
  }   
//so that this is the instance of the game and not the thing clicked on
  var that = this;

  $(".start-btn").on('click', function(){
    $(this).addClass("highlight-btn");
    that.startGame(); 
  });

//change to strict mode and light up btn
  $(".strict-btn").on('click', function(){
    $(this).addClass("highlight-btn");
    that.changeMode();
  });

//turn off game and clear lit up btns
  $(".off").on('click', function(){
    clearBtns();
    that.mode = "normal";
    that.sequence = [];
    that.seqCopy = [];
    $(".tile-list").off();
  });

};
//allow user to select strict mode
Game.prototype.changeMode = function(){
    this.mode = "strict";   
}



Game.prototype.getRandomNum = function(){
  var randomNum = Math.floor(Math.random() * 4 + 1);
  return randomNum;
}

Game.prototype.startGame = function(){
var currentSeq = this.sequence;
console.log(this.seqCopy);
var animateTile = function(item) {
  $('#' + item).animate({
      opacity: 0.2
    }, 200).animate({
      opacity: 1
    }, 500);
    //animation takes 300 ms
  };
//light up tile based on the current array content; pause between animations
var i = 0;
  var interval = setInterval(function() {
    setInterval(animateTile(currentSeq[i]), 400);
        i++;
        if (i >= currentSeq.length) {
      clearInterval(interval);
        }
   }, 600);

}

Game.prototype.nextRound = function (arr) {
  arr.push(this.getRandomNum());
  //console.log(this.sequence);
}

Game.prototype.getClicks = function(e) {
  var correctClicks = this.seqCopy.shift();
  var actualClicks = $(e.target).data('tile');
  //set this to true or false if they are hitting correct tiles
  this.active = (correctClicks === actualClicks);
  //this.checkLose();
}

$(document).ready(function(){
  
//init the game 
  $(".on").on('click', function(e){
    e.preventDefault();
    $(".off").removeClass("active");
    $(".on").addClass("active");
    var game = new Game();
    game.initBoard();
    console.log(game);

    $('.tile-list').on('click', '[data-tile]', function(e){
      game.getClicks(e);
      console.log(game.active)
      if(game.active === false) {
        alert("you lose");
      }
    });


  });
});//end of document ready