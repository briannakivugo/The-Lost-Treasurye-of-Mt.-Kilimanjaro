// Press a button to choose your path
// Treasure of Mount Kilimanjaro

/* VARIABLES */

let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let playAgainButton;

let screen = 0;


/* SETUP RUNS ONCE */

function setup() {
  createCanvas(600, 400);

  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Create Buttons
  enterButton = new Sprite(width/2,320);
  a1Button = new Sprite(-200,-200);
  a2Button = new Sprite(-200,-200);
  b1Button = new Sprite(-200,-200);
  b2Button = new Sprite(-200,-200);
  playAgainButton = new Sprite(-200,-200);
  playAgainButton.rotationLock = true;
}


/* DRAW THE HOME SCREEN */

function drawHomeScreen(){

  // Sky
  background("skyblue");

   // Sun
  fill("yellow");
  circle(520,100,30);

   
  // Mountains
  fill(120);
  
  triangle(60,330,230,250,380,330);
  triangle(220,330,400,230,560,330);


  // Grass
  fill("forestgreen");
  rect(0,330,width,70);

  // Path
  fill("tan");
  rect(290,280,20,140);

  // Cave

  fill(70);
  ellipse(300,300,120, 60);

  fill(25);
  arc(300,280,80,80,PI,TWO_PI);

  
  // Title

  fill("white");

  textSize(28);

  text(
    "Treasure of Mount Kilimanjaro",
    width/2,
    60
  );

  textSize(18);

  text(
    'Legend tells of a priceless treasure\nhidden deep inside a cave on\nMount Kilimanjaro.\n\nMany explorers have tried.\nOnly the wisest find the treasure.you?',
    width/2,
    110
  );

}


/* DRAW LOOP REPEATS */

function draw() {

  // HOME SCREEN 

  if (screen == 0) {

    drawHomeScreen();

    enterButton.pos = {x: width/2, y: 320};
    enterButton.w = 120;
    enterButton.h = 40;
    enterButton.rotation = 0;
    enterButton.color = "white";
    enterButton.text = "Enter";

    if (enterButton.mouse.presses()) {

      screen = 1;

    }

  }


  // SCREEN 1 
  
    else if (screen == 1) {

    showScreen1();

    if (a1Button.mouse.presses()) {

      // Forest
      screen = 3;

    }

    else if (a2Button.mouse.presses()) {

      // River
      screen = 2;

    }

  }


  //  SCREEN 2 

  else if (screen == 2) {

    showScreen2();

    if (b1Button.mouse.presses()) {

      // Raft
      screen = 4;

    }

    else if (b2Button.mouse.presses()) {

      // Swim
      screen = 5;

    }

  }


  // WIN 

  else if (screen == 3) {

    showScreen3();

  }

  else if (screen == 4) {

    showScreen4();

  }

  else if (screen == 5) {

    showScreen5();

  }

}

function showScreen1() {

  background("skyblue");

  fill("white");

  textSize(24);

  text(
    "You arrive at Mount Kilimanjaro.",
    width/2,
    60
  );

  textSize(18);

  text(
    "Two paths lead toward the hidden cave.\nWhich one will you choose? \nChoose very careful",
    width/2,
    130
  );

  // Hide Enter Button

  enterButton.pos = {x:-200,y:-200};

  // Forest Button

  a1Button.pos = {x:230,y:310};
  a1Button.w = 120;
  a1Button.h = 50;
  a1Button.rotation = 0;
  a1Button.color = "forestgreen";
  a1Button.text = "Forest";

  // River Button

  a2Button.pos = {x:360,y:310};
  a2Button.w = 120;
  a2Button.h = 50;
  a2Button.rotation = 0;
  a2Button.color = "deepskyblue";
  a2Button.text = "River";

}

function showScreen2() {

  background("lightblue");

  fill(0);

  textSize(22);

  text(
    "You reach a rushing river.",
    width/2,
    60
  );

  textSize(18);

  text(
    "Will you build a raft\nor try to swim across?",
    width/2,
    130
  );

  // Hide Forest buttons

  a1Button.pos = {x:-200,y:-200};
  a2Button.pos = {x:-200,y:-200};

  // Raft
  
  b1Button.pos = {x:230,y:310};
  b1Button.w = 120;
  b1Button.h = 50;
  b1Button.rotation = 0;
  b1Button.color = "sienna";
  b1Button.text = "Raft";

  // Swim

  b2Button.pos = {x:360,y:310};
  b2Button.w = 128;
  b2Button.h = 50;
  b2Button.rotation = 0;
  b2Button.color = "red";
  b2Button.text = "Swim";

}

function showScreen3() {

  background("lightgreen");


  // Hide previous buttons
a1Button.pos = {x:-200, y:-200};
a2Button.pos = {x:-200, y:-200};

b1Button.pos = {x:-200, y:-200};
b2Button.pos = {x:-200, y:-200};

  textSize(24);
  fill("darkgreen");

  text(
    "Forest Path",
    width/2,
    60
  );

  textSize(18);
  fill(0);

  text(
    "You carefully follow the forest trail.\n\nA giant Guardian Eagle appears!\nInstead of attacking, it guides you\nto the hidden cave entrance.\n\nInside, you discover the lost treasure!\n\n\ YOU WIN!",
    width/2,
    125
    );
showPlayAgain();

  for(let i=0;i<80;i++){

  fill(random(255),random(255),random(255));

  circle(
    random(width),
    random(height),
    random(4,10)
  );

}
}

function showScreen4() {

  background("gold");

  // Hide buttons
  
  a1Button.pos = {x:-200, y:-200};
  a2Button.pos = {x:-200, y:-200};

  b1Button.pos = {x:-200, y:-200};
  b2Button.pos = {x:-200, y:-200};

  
  textSize(24);
  fill("brown");

  text(
    "River Crossing",
    width/2,
    60
  );

  textSize(18);
  fill(0);

  text(
    "You build a strong raft.\n\nThe raft safely carries you\nacross the rushing river.\n\nOn the other side,\nyou find the secret cave\nfilled with treasure!\n YOU WIN!",
    width/2,
    110
  );
 
showPlayAgain();
  for(let i=0;i<80;i++){

  fill(random(255),random(255),random(255));

  circle(
    random(width),
    random(height),
    random(4,10)
  );

}
}

function showScreen5() {

  background("lightcoral");

  // Hide buttons
  b1Button.pos = {x:-200,y:-200};
  b2Button.pos = {x:-200,y:-200};

  textSize(24);
  fill("darkred");

  text(
    "Too Risky!",
    width/2,
    60
  );

  textSize(18);
  fill(0);

  text(
    "You decide to swim.\n\nThe river current is much stronger\nthan you expected.\n\nYou are swept downstream\nbefore reaching the cave.\n\n GAME OVER",
    width/2,
    125
  );
showPlayAgain();
}
function showPlayAgain(){

  playAgainButton.pos = {x: width/2, y: 340};
  playAgainButton.w = 140;
  playAgainButton.h = 45;
  playAgainButton.color = "white";
  playAgainButton.text = "Play Again";

  if(playAgainButton.mouse.presses()){

    screen = 0;

    // Hide button again
    playAgainButton.pos = {x:-200,y:-200};

  }

}
