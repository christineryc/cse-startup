
var paddle_y;
var ball_x;
var ball_y;
var ballDirY;
var ballDirX;
var hits;


function setup() {
  
  createCanvas(720, 400);
  paddle_y = 150;
  ball_x = 360;
  ball_y = 200;
  ballDirY = 2;
  ballDirX = 2;
  hits = 0;
  
}

function draw() {
  
  background(150);
  drawPaddles(paddle_y);
  movePaddles();
  drawBall(ball_x, ball_y);
  moveBall();
  if (ball_x >= 0 && ball_x <= 720)
  {
     displayHits();
  }
}

function drawPaddles(paddle_y)
{
  fill("RED");
  stroke(127, 63, 120);
  rect(0, paddle_y, 10, 100);
  rect(710, paddle_y, 10, 100);
  
}

function movePaddles()
{
  if(keyIsDown(UP_ARROW) && paddle_y > 0)
    paddle_y -= 2;
  if(keyIsDown(DOWN_ARROW) && paddle_y < height-100)
    paddle_y += 2;
}

function drawBall(ball_x, ball_y)
{
  fill("BLACK");
  stroke(127, 63, 120);
  ellipse(ball_x, ball_y, 30);
}

function moveBall()
{
  ball_x += ballDirX;
  ball_y += ballDirY;
  
  if (ball_x <= 10 || ball_x >= 710)
  {
    if (ball_y >= paddle_y && ball_y <= (paddle_y + 100))
    {
      //hits the paddle
      
      ballDirX = -1 * ballDirX;
      // ball_x += ballDirX;
      //ball_x = 700;
      hits++;
    }
  }  
  if (ball_x < 0 || ball_x > 720)
      {
        endDisplay();
      }
  if (ball_y < 0 || ball_y > 400)
  {
    //bounce off north or south wall
    ballDirY = -1 * ballDirY;
  }
}

function displayHits()
{
  fill(0, 255, 0);
  textSize(50);
  text(hits,360, 50);
}

function endDisplay() {
  fill(255,0,0);
  textSize(80);
  text("YOU LOSE", 140, 200);
}
