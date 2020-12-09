/****************************************************
 * index.js
 *
 * Our predefined variables:
 *
 *  - reindeer       will contain an instance object of the class Reindeer located in our predefined file reindeer.js.
 *  - pipes          will contain an instance object of the class Pipe located in our predefined file pipe.js.
 *  - background     will contain an instance object of the class Background located in our predefined file background.js.
 *  - reindeerImg    will contain an image object from images/reindeer.png.
 *  - backgroundImg  will contain an image object from images/background.png.
 *  - presentImg     will contain an image object from images/present.png.
 *  - isOver         will contain a boolean if the player has lost the game or not.
 *  - score          will contain an integer with the players score.
 *  - CANVAS_HEIGHT  contains the canvas height.
 *  - CANVAS_WIDTH   contains the canvas width.
 *
 * Our predefined methods:
 *
 *  - preload()      a p5.js method.
 *  - setup()        a p5.js method.
 *  - draw()         a p5.js method.
 *  - keyPressed()   a p5.js method.
 *  - startGame()    a custom method.
 *  - gameOver()     a custom method.
 *  - showScores()   a custom method.
 *
 ****************************************************/

/****************************************************
 * This is all the variables we need in the game.
 * You can read more about them in the README.md.
 ****************************************************/
let reindeer;
let pipes = [];
let presents = [];
let background;
let reindeerImg;
let backgroundImg;
let presentImg;
let isOver = false;
let score = 0;
let highScore = 0;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;

/****************************************************
 * This is a magical p5 function.
 * preload() loads before setup() function and setup()
 * waits for it to complete
 *
 * @p5jsMethod
 ****************************************************/
function preload() {
  backgroundImg = loadImage("images/background.png");
  reindeerImg = loadImage("images/reindeer.png");
  presentImg = loadImage("images/present.png");
}

/****************************************************
 * setup() runs only once and is used to initialize "stuffs"
 * Use the createCanvas() to set the width and height. See p5.js
 *
 * @p5jsMethod
 ****************************************************/
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background = new Background();
  reindeer = new Reindeer();
}

/****************************************************
 * draw() is a magical p5 function which runs repeatedly and is used to draw graphics/stuffs
 * Draw our background image, then move it at the same speed as the pipes
 *
 * @p5jsMethod
 ****************************************************/
function draw() {
  background.show();
  background.update();
  reindeer.show();
  reindeer.update();
  if (frameCount % 100 === 0) pipes.push(new Pipe());
  for (let pipe of pipes) {
    pipe.show();
    pipe.update();
    if (pipe.hits(reindeer)) gameOver();
    if (pipe.pass(reindeer)) score++;
  }
  showScore();
  if (frameCount % 75 === 0) presents.push(new Present());
  for (let present of presents) {
    present.show();
    present.update();
    if (present.hits(reindeer)) {
      score += 3;
      presents.splice(presents.indexOf(present), 1);
    }
  }
}

/****************************************************
 * Set the space button to make the reindeer fly
 *
 * @p5jsMethod
 ****************************************************/
function keyPressed() {
  if (key == " ") {
    reindeer.up();
    if (isOver) startGame();
  }
}

/****************************************************
 * Create a new reindeer and new pipe
 * Reset the score to 0
 * Reset the moving background to the start poisition
 *
 * @customMethod
 ****************************************************/
function startGame() {
  background = new Background();
  reindeer = new Reindeer();
  pipes = [];
  presents = [];
  isOver = false;
  loop();
  score = 0;
}

/****************************************************
 * Display text on screen, using text function from p5
 * You can also fill to set paintbrush color and textSize
 *
 * @customMethod
 ****************************************************/
function gameOver() {
  textSize(50);
  fill(000);
  text("GAME OVER", 50, 300);
  if (score > highScore) {
    highScore = score;
    textSize(32);
    fill(000);
    text("New High Score: " + highScore, 70, 370);
  }
  isOver = true;
  noLoop();
}

/****************************************************
 * Display text on screen, using text function from p5
 * You can also use fill to set paintbrush color and textSize
 *
 * @customMethod
 ****************************************************/
function showScore() {
  fill(000);
  textSize(32);
  text("Score: " + score, 1, 32);
}
