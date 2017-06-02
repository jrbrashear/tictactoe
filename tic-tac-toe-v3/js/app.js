
var playerO = 'url(img/o.svg)';
var playerX = 'url(img/x.svg)';
var player = playerO;
var boxFilled = 'box-filled-1';
var boxes = document.getElementsByClassName('box');
var turnCounter = 0;
var start = "<div class='screen screen-start' id='start'><header><h1>Tic Tac Toe</h1><a href='#' class='button'>Start game</a></header></div>";
var winO ="<div class='screen screen-win screen-win-one' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'> Winner!!!</p>" +
"<a href='#' class='button'>New game</a></header></div>";
var winX = "<div class='screen screen-win screen-win-two' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'> Winner!!!</p>" +
"<a href='#' class='button'>New game</a></header></div>";
var winT = "<div class='screen screen-win screen-win-tie' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'>It's a Tie</p>" +
"<a href='#' class='button'>New game</a></header></div>";





$('.board').append(start);
$('.button').on('click', function() {
   $('#start').remove();

   console.log('click');
   $('#start').off();
 });


//hover event
function playerTurn () {
  $('.box').hover(function() {
    if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2'))
    {
    $(this).css('background-image', player)}},
    function() {$(this).css('background-image', '')}),
//box selection as long as class = box on click
  $('li').on('click', function() {
    if($(this).attr('class') == ('box')) {
      $(this).css('background-image', player).addClass(boxFilled);
      if(boxFilled == 'box-filled-1'){
        boxFilled = 'box-filled-2'} else {
        boxFilled = 'box-filled-1'}
        turnCounter++;
      if(player==playerO) {
        player = playerX;
        $('#player2')[0].className ="players active";
        $('#player1')[0].className ="players";
        } else {
          player = playerO;
          $('#player1')[0].className="players active";
          $('#player2')[0].className="players";
          }
      }


  //winning combos
        var ply = $(this).attr('class');
        var box1 = boxes[0].getAttribute('class');
        var box2 = boxes[1].getAttribute('class');
        var box3 = boxes[2].getAttribute('class');
        var box4 = boxes[3].getAttribute('class');
        var box5 = boxes[4].getAttribute('class');
        var box6 = boxes[5].getAttribute('class');
        var box7 = boxes[6].getAttribute('class');
        var box8 = boxes[7].getAttribute('class');
        var box9 = boxes[8].getAttribute('class');

      if(turnCounter == 9){
        $('body').append(winT);
        $('.button').on('click', function() {
           $('#finish').remove();
           $('#finish').off();
           turnCounter = 0;
           reset();
         });
       };


      if(ply == box2 && box2 == box3 && box3 == box1 /*row1*/ ||
         ply == box5 && box5 == box6 && box6 == box4/*row2*/ ||
         ply == box8 && box8 == box9 && box9 == box7/*row3*/ ||
         ply == box4 && box4 == box7 && box7 == box1/*column1*/ ||
         ply == box5 && box5 == box8 && box8 == box2/*column2*/ ||
         ply == box6 && box6 == box9 && box9 == box3/*column3*/ ||
         ply == box5 && box5 == box9 && box9 == box1/*left to right*/ ||
         ply == box5 && box5 == box7 && box7 == box3/*right to left*/||
         ply == box8 && box8 == box7 && box7 == box9/*right to left rox3*/||
         ply == box5 && box5 == box4 && box4 == box6/*right to left row2*/||
         ply == box2 && box2 == box1 && box1 == box3/*right to left row1*/||
         ply == box6 && box6 == box3 && box9 == box3/*bottom to top c3*/||
         ply == box5 && box5 == box2 && box8 == box2/*bottom to top c2*/||
         ply == box4 && box4 == box1 && box7 == box1/*bottom to top c1*/||
         ply == box5 && box5 == box1 && box1 == box9/*right to left diag*/||
         ply == box5 && box5 == box3 && box7 == box3/*left to right diag*/) {
         if(player == playerX) {
           $('body').append(winO);
           $('.button').on('click', function() {
              $('#finish').remove();
              $('#finish').off();
              turnCounter = 0;
              reset();
            });
         } else if(player == playerO) {
           $('body').append(winX);
           $('.button').on('click', function() {
              $('#finish').remove();
              $('#finish').off();
              turnCounter = 0;
              reset();
            });
          };
        };


    });
  }

function reset() {
  $('#boxes, li').removeClass("box-filled-2 box-filled-1");

}
playerTurn();
