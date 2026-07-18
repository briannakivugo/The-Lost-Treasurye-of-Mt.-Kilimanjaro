// Press a button to choose your path
// See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let bgColor = "indigo";

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background(bgColor);
  text(
    "Welcome to screen 0. This is the home screen.",
    width / 2,
    height / 2 - 100
  );
  
  // Create buttons for all screens
  enterButton = new Sprite (width/2,height/2 + 100);
  a1Button = new Sprite (-200,-200)
  a2Button = new Sprite (-50,-50);
  b1Button = new Sprite ( -100, -100);
  b2Button = new Sprite (-150, -150);
 
  
  // Ball 1
    fill('white');
    ellipse(40, 130, 10, 10);

  // Ball 2
   fill('white');
   ellipse(70, 180, 15, 15);

  // Ball 3
   fill('white');
   ellipse(100, 220, 20, 20);

   // Ball 4
   fill('white');
   ellipse(130, 260, 25, 25);
  
   // Ball 5
   fill('white');
   ellipse(190, 220, 20, 20);
  
   // Ball 6
   fill('white');
   ellipse(250, 180, 15, 15);

   // Ball 7
   fill('white');
   ellipse(300, 130, 10, 10);

  // Define the 3 coordinates (x, y) of the triangle
  fill('white');
  vertex(300, 130);   // Top point
  vertex(350, 275);  // Bottom right point
  vertex(250, 275);   // Bottom left point
  
  // Close the shape to automatically connect the last point to the first
  endShape(CLOSE); 

  // arc 
   fill('white');
   arc(300, 55, 296, 50, 180, 360);

  
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = 'palegreen';
  enterButton.text = 'Enter';

     
  // Check enter button
 if (enterButton.mouse.presses ()){   
   print('pressed'); 
   showScreen1 ();
   screen = 1;
 }
  
   if (screen == 1) {
      if (a1Button.mouse.presses ()){
       print('Display screen 2');
       showScreen2 ();
       screen = 2;
        
   } else if (a2Button.mouse.presses ()){
       print('Display screen 5');
       showScreen5 ();
     screen = 5;
        
  }
  }
  if (screen == 2) {
      if (b1Button.mouse.presses ()){
       print('Display screen 3');
       showScreen3 ();
       screen = 3;
        
   } else if (b2Button.mouse.presses ()){
       print('Display screen 4');
       showScreen4 ();
     screen = 4;
        
  }
  }
  
}



/* FUNCTIONS TO DISPLAY SCREENS */


function showScreen1() {
  background("skyblue");


  text(
    "You arrive at Mount Kilimanjaro.\nChoose your path to the hidden treasure.",
    width / 2,
    height / 2 - 100
  );


  enterButton.pos = {x: -100, y: -100};


  // Forest Path
  a1Button.pos = {x: width / 2 - 50, y: height / 2 + 100};
  a1Button.w = 100;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "forestgreen";
  a1Button.text = "Forest";


  // River Path
  a2Button.pos = {x: width / 2 + 70, y: height / 2 + 100};
  a2Button.w = 100;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "deepskyblue";
  a2Button.text = "River";
}


function showScreen2() {
  background("lightgreen");


  text(
    "You reach a rushing river.\nHow will you cross?",
    width / 2,
    height / 2 - 100
  );


  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};


  // Safe choice
  b1Button.pos = {x: width / 2 - 50, y: height / 2 + 100};
  b1Button.w = 100;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "sienna";
  b1Button.text = "Raft";


  // Dead end
  b2Button.pos = {x: width / 2 + 70, y: height / 2 + 100};
  b2Button.w = 100;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "red";
  b2Button.text = "Swim";
}


function showScreen3() {
  background("gold");


  text(
    "The Guardian Eagle leads you\nto the hidden treasure!\nYOU WIN!",
    width / 2,
    height / 2 - 100
  );


 // Move extra buttons off screen
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
}


function showScreen4() {
  background("khaki");


  text(
    "Your raft carries you safely\nacross the river.\nYou found the treasure!\nYOU WIN!",
    width / 2,
    height / 2 - 100,

   
  );


  // Move extra buttons off screen
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
}


function showScreen5() {
  background("lightcoral");


  text(
    "The river current is too strong.\nYou are swept away.\nGAME OVER.",
    width / 2,
    height / 2 - 100
  );
// Move extra buttons off screen
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
}





