$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //bottom
    createPlatform(-50, -50, 50, canvas.height + 500); //left
    createPlatform(canvas.width, -50, 200, canvas.height + 100); //right

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
 
   
   createPlatform(0,700,2000,700)
   createPlatform(100,300,300,20)
   createPlatform(500,300,300,20)
   createPlatform(900,300,300,20)
   
   createPlatform(100,580,300,20)
   createPlatform(500,580,300,20)
   createPlatform(900,580,300,20)

   createPlatform(770,450,150,20)
   createPlatform(380,450,150,20)

   
   
  
    


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('lemonpie', 235, 150, 1, 0.1)
    createCollectable('applepie', 832, 410, 1, 0.1)
    createCollectable('pumpkinpie', 222, 400, 1, 0.1)

    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('right', 380-(118/2), 5000, 50, 50)
    createCannon('left', 460-(118/2), 5000, 50, 50)
    createCannon('top', 870-(118/2), 5000, 50, 50)

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
