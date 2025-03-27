/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  }
  
  var walker = {
    X : 0,
    Y : 0,
    Xspeed : 0,
    Yspeed : 0,
  };
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   repositionGameItem()
   redrawnGameItem()
   wallCollision()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
        walker.Xspeed = -5;
    }

    if (event.which === KEY.UP) {
        walker.Yspeed = -5;
    }

    if (event.which === KEY.RIGHT) {
        walker.Xspeed = 5;
    }

    if (event.which === KEY.DOWN) {
        walker.Yspeed = 5;
    }
}
function handleKeyUp(event) {
  if (
    event.which === KEY.LEFT ||
    event.which === KEY.UP ||
    event.which === KEY.RIGHT ||
    event.which === KEY.DOWN
  ) {
    walker.Xspeed= 0;
    walker.Yspeed= 0;
  }
}
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem () {
  walker.X = walker.X + walker.Xspeed
  walker.Y= walker.Y + walker.Yspeed
}
function wallCollision ()
var bWidth = $('#board').width()
var bHeight = $('#board').height()
if (walker.X < 0) {
  walker.X = 0;
  if (walker.X > bWidth) {
  walker.X = bWidth;
  }
  if (walker.Y < 0) {
  walker.Y = 0;
  }
  if (walker.Y > bHeight) {
  walker.Y = bHeight;
  }
}
  function redrawnGameItem () {
    $("#walker").css("left", walker.X)
    $("#walker").css("top", walker.Y)
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
