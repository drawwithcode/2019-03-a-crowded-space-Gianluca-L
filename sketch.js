var allMyBalls = [];
var amountOfBalls = 1000;
var m = false;
var a = 0;
var b = 0;
var c = 0;
var g = 0;
var h = 0;
function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60)

  for(var i = 0; i < amountOfBalls; i++) {
    // create istance
    var tempx = random()* windowWidth;  // variabili temporanee (ci sono solo nel ciclo, poi distrutte)
    var tempy = random()* windowHeight;
    //var tempr = random()* 50 + 10;
    var tempr = 10;
    var tempBall = new Ball(tempx, tempy, tempr); // istance
    console.log(tempBall);
    tempBall.color = color(random()*255, random()*255, random()*255);
    tempBall.speed = 3;

    allMyBalls.push(tempBall);
  }
   console.log(allMyBalls);
}

function draw() {
  //background("white");
  for(var i = 0; i < allMyBalls.length; i++) { // prendo ogni istanza e chiamo  metodo
    var tempBall = allMyBalls[i];
    // a += 1/60;
    // if (frameCount/60 == a*2) {
    //   tempBall.color = lerpColor(color("white"),color("red"),frameCount/60);
    // }
    // else {
    //   tempBall.color = lerpColor(color("red"),color("white"),frameCount/120);
    // }
    // if (m == true) {
    //   tempBall.color = color(random()*255, random()*255, random()*255);
    // }

    tempBall.move();
    tempBall.display();
  }

}


function Ball(_x, _y,_diameter){
  // inner properties
  this.size = _diameter; // variabile che può essere modificata all'esterno dell'oggetto
  this.x = _x;
  this.y = _y;
  this.speed = 2;
  this.color = 'gold'


  var xIncrease = 1;  // ora sì
  var yIncrease = 1;


  this.move = function() {

    // this.x += xIncrease * this.speed;  // posso cambiare speed dove voglio
    // this.y += yIncrease * this.speed;
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

// else if (mouseY < pmouseY && mouseX > pmouseX) {
//   h = -1;
//   g = +1;
// }
// else if (mouseY < pmouseY && mouseX < pmouseX) { // su sx
//   h = -1;
//   g = -1;
// }
// else if (mouseY > pmouseY && mouseX > pmouseX) { // giù dx
//   h = +1;
//   g = +1;
// }
// else if (mouseY > pmouseY && mouseX < pmouseX) { // giù sx
//   h = +1;
//   g = -1;
// }
}
