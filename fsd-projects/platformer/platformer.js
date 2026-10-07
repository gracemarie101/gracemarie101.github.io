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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
("pink");

    // TODO 2 - Create Platforms
createPlatform(300,600,110,50,"pink")
createPlatform(500,500,100,50, "pink")
createPlatform(700,400,50,50, "pink")
createPlatform(800,400,200,50,"pink")
createPlatform(1100,300,100,50,"pink")
createPlatform(1300,200,100,50,"pink")



    // TODO 3 - Create Collectables
createCollectable("diamond", 900, 300, 0.5, 0.7);
createCollectable("diamond", 1300, 100, 0.5, 0.9);
createCollectable("diamond", 300, 500, 0.5, 0.5 );

    
    // TODO 4 - Create Cannons
createCannon("left", 200, 700);
createCannon("top", 200, 1000);
createCannon("top", 700, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
