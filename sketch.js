var myBall;
var sbatte;
var rx = 0;
var ry = 0;
var rz = 0;
var mySong;

// function toggleSong(){
//   if (mySong.isPlaying()){
//     mySong.pause();
//     mySong.play();
//   } else{
//     mySong.pause();
//     mySong.play();
//   }
// }


function preload() {
  // put preload code here
  // mySong = loadSound("./assets/boing.mp3");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  myBall = new Ball(0, 0, 50);
  setMoveThreshold(0.1);

}

function draw() {
  // put drawing code here
  background(0);
  myBall.display();
  myBall.move();
  myBall.sbatte();

  // var vibrate = navigator.vibrate || navigator.mozVibrate;
  //
  // vibrate(1000);

}

function mousePressed() {

  var fs = fullscreen();
  fullscreen(!fs);
}

function deviceMoved() {
  rx = map(rotationY, -30, 30, 0, displayWidth);
  ry = map(rotationX, -30, 30, 0, displayHeight);
  // rz = radians(rotationZ);
  rz = map(rotationZ, 0, 180, 0, displayHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Ball(_x, _y, _size) {
  this.x = _x;
  this.y = _y;
  this.size = _size;

  this.speed = 2.5;
  this.yDir = 1;
  this.xDir = 1;

  this.display = function() {
    ellipse(this.x, this.y, this.size);
    color(255);
    noStroke();
  }

  this.move = function() {
    // this.x += this.speed * rx;
    // this.y += this.speed * ry;
    this.x = rx
    this.y = ry
  }

  this.sbatte = function() {
    if (this.y >= height || this.y <= 0) {
      //this.yDir *= -1;
      background('#00cc99');

    }

    if (this.x >= width || this.x <= 0) {
      //this.xDir *= -1;
      background('#ff3300');


    }
  }

}
