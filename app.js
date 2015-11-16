
//make game object
function Game() {
  var sequence = [];
  var seqCopy = [];
  var level = 0;
  var mode = "normal";
};

Game.prototype.initBoard = function(){
  alert("letsplay");
  //so that this is the instance of the game and not the thing clicked on
  var that = this;
  $(".start-btn").on('click', function(){
    // that.startGame();
    alert("start");
  });

  $(".strict-btn").on('click', function(){
    that.changeMode();
    alert(that.mode);
  })

};

Game.prototype.changeMode = function(){
    this.mode = "strict";
    
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