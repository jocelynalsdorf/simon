
//make game object
function Game() {
//start array with the first random tile
  var sequence = [2, Math.floor(Math.random() * 4 + 1), 4 ,1,3];
  var seqCopy = [];
  var level = 0;
  var mode = "normal";
  var gameOver = "false";
  this.sequence = sequence;
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
    console.log(that.sequence);
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
var animateTile = function(item) {
  $('#' + item).animate({
      opacity: 0.2
    }, 200).animate({
      opacity: 1
    }, 500);
    //animation takes 300 ms
  };
//light up tile based on the current array content
var i = 0;
  var interval = setInterval(function() {
    setInterval(animateTile(currentSeq[i]), 400);
 
        i++;
        if (i >= currentSeq.length) {
      clearInterval(interval);
        }
   }, 600);





  //this.sequence.push(this.getRandomNum());
  console.log(this.sequence);
}

$(document).ready(function(){
  
//init the game 
  $(".on").on('click', function(e){
    e.preventDefault();
    $(".off").removeClass("active");
    $(".on").addClass("active");
    var game = new Game();
    game.initBoard();

  });
});//end of document ready