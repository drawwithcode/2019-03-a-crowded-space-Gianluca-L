var allMyBalls = [];
var amountOfBalls = 1000;
var m = false;
var n = false;
var s = 60;
var a = 0;
var b = 0;
var c = 0;
var g = 0;
var h = 0;
var r = false;
var mr = 0;
var y = false;

var randomColor;
function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background("black");

  for(var i = 0; i < amountOfBalls; i++) {
    // create istance
    var tempx = random()* windowWidth;  // variabili temporanee (ci sono solo nel ciclo, poi distrutte)
    var tempy = random()* windowHeight;
    //var tempr = random()* 50 + 10;
    var tempr = width/108/2;
    var tempBall = new Ball(tempx, tempy, tempr); // istance

    tempBall.color = color(random()*255, 0, random()*255);
    tempBall.speed = 3;

    allMyBalls.push(tempBall);
  }
}

function draw() {
  //background("white");
  // push();
  // translate(mouseX, mouseY);
  // rect(0, 0, 50, 50);
  // pop();

  for(var i = 0; i < allMyBalls.length; i++) { // prendo ogni istanza e chiamo  metodo
    var tempBall = allMyBalls[i];

    tempBall.move();
    tempBall.display();
    tempBall.colorChange();
    tempBall.clickColor();

  }

  push();
  translate(width/2, height);
  fill('white');
  rect(-width/7.8, -height/22, 2*width/7.8, height/22*2, 30)
  textSize(width/29/2);
  fill('black');
  text("Move, click or drag", -width/13, -height/70);
  pop();

}


function Ball(_x, _y,_diameter){

  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.speed = 2;
  this.color = 'gold'

  var xIncrease = 1;
  var yIncrease = 1;


  this.move = function() {

    if (m == true) {
      this.x += xIncrease * this.speed * g;
      this.y += yIncrease * this.speed * h;
    }


    if(this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }
    else if(this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }


  }

  this.display = function() {
    fill(this.color);
    noStroke();
    push();
    translate(this.x, this.y);
    ellipse(0, 0, this.size);

    pop();
  }
  this.colorChange = function() {
    if(frameCount > s*2 && m == true && this.x >= mouseX - width/10.8/2 && this.x <= mouseX + width/10.8/2 && this.y <= mouseY + width/10.8/2 && this.y >= mouseY -width/10.8/2) {
      xIncrease = -xIncrease;
      yIncrease = -yIncrease;
      y = true;
      this.color = color(0, random()*255, random()*255);

    }
  }
  this.clickColor = function() {
    if (r == true) {
      this.color = randomColor;
    }
  }
}
function mouseMoved() {
  m = true;

if (mouseY < pmouseY) { // su
  h = -1;
}
else if (mouseY > pmouseY){ // giù
  h = +1;
}
if (mouseX < pmouseX) { // sx
  g = -1;
}
else if (mouseX > pmouseX){ // dx
  g = +1;
}

}
function mouseReleased() {
  randomColor = color(random()*255, random()*255, random()*255);
  mr++;
  if (mr == 1) {
    r = true;
  }
  else {
    r = false;
  }
  if (mr == 2) {
    mr = 0;
  }
}
