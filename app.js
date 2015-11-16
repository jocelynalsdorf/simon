
//make game object
function Game() {
//start array with the first random tile
  var sequence = [Math.floor(Math.random() * 4 + 1)];
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

 //do light up method here based on the current array content
for (var i = 0; i < this.sequence.length; i++) {
    //var item = this.sequence.pop();
// pops and removes first item of array 
    $('#' + this.sequence[i]).animate({
      opacity: 0.2
    }, 200).animate({
      opacity: 1
    }, 100);
    //animation takes 300 ms
  }
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