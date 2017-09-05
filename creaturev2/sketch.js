
var creatureColor = ("PINK");
var insideColor = ("BLUE");


function setup() {
  
  createCanvas(1000, 1000);

}

function draw() {
  
  setting();
  
  translate(mouseX - 250, mouseY - 300);
  
  ears(175, 125);
  ears(325, 125);
  hood();
  head();
  eyes();
  nose();
  mouth();
  arms();
  body();
  
 
  
}

function setting()
{
  background(135,206,235);
  hill(-100, 750, 600, 300);
  hill(100, 750, 700, 500);
  hill(100, 750, 400, 600);
  fill(0, 255, 0); //green
  rect(0, 750, 1000, 250);
  cloud(100, 200);
  cloud(800, 400);
}

function keyPressed() 
{
  creatureColor = color(random(256), random(256), random(256));
  insideColor = color(random(256), random(256), random(256));
}

function hill(x, y, w, h)
{
  fill(color(0, 255, 0));
  arc(x + (w / 2), y, w, h, PI, 0, PIE);
}

function cloud(x, y)
{
  fill(255);
  noStroke();
  
  ellipse(x + 10, y - 40, 90, 80);
  ellipse(x + 30, y - 35, 80, 50);
  ellipse(x + 50, y - 50, 50, 90);
  ellipse(x + 70, y - 70, 70, 100);
  
}

function ears(x, y)
{
  fill(creatureColor);  //pink
  stroke(127, 63, 120);
  ellipse(x, y, 50, 150);
}

function hood()
{
  fill(creatureColor);  //pink
  stroke(127, 63, 120);
  ellipse(250, 275, 300, 250)
}

function head()
{
  fill(insideColor) //blue
  stroke(127, 63, 120);
  ellipse(250, 275, 250, 200)
}

function eyes()
{
  fill(0); //black
  stroke(127, 63, 120);
  ellipse(225, 250, 20)
  ellipse(275, 250, 20)
  if (mouseIsPressed)
  {
    fill(0);
  }
  else
  {
    fill(255);
  }
 
  ellipse(225, 250, 5)
  ellipse(275, 250, 5)
}

function nose()
{
  fill(0); //black
  stroke(127, 63, 120);
  rect(225, 275, 50,25);
}

function mouth()
{
  fill(255,192,203);  //pink
  stroke(127, 63, 120);
  triangle(225, 325, 275, 325, 250, 350);
}

function arms()
{
  fill(210,180,140);  //tan
  stroke(127, 63, 120);
  triangle(350, 450, 375, 375, 425, 425)
  triangle(75, 425, 125, 375, 150, 450)
  fill(creatureColor);  //pink 
  ellipse(75, 375, 50)
  ellipse(425, 375, 50)
}

function body()
{
  fill(creatureColor);  //pink
  stroke(127, 63, 120);
  ellipse(250, 550, 300, 300)
  fill(insideColor) //blue
  stroke(127, 63, 120);
  ellipse(250, 550, 250, 250)
}