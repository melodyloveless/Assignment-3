var song;
let angle = 0;

function preload() {
  song = loadSound("classical.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(145,168,166);
  ellipseMode(CENTER);
  rectMode(CENTER);
  song.play();
  song.setVolume(.75);

}

function draw() {
  push()
  angle = angle + frameCount%.01
  rotate(angle)
  strokeWeight(20)
  stroke(145,168,166);
  line(0,0,10000,10000);
  pop()
  strokeWeight(1)
  translate(mouseX,mouseY);
  One();
  translate(200,200);
  translate(mouseX,mouseY);
  Two();
  translate(-400,-400);
  translate(mouseX,mouseY);
  Three();

}

function One() {
  stroke(255,65,241);
  fill(235,245,244);
  triangle(100,0,0,100,100,100);
  fill(171,138,9);
  ellipse(100,100,100);
  fill(245,238,211);
  rect(50,100,50);
}

function Two() {
  stroke(255,65,241);
  fill(171,138,9);
  ellipse(100,100,100);
  fill(235,245,244);
  rect(50,100,50);
  fill(245,238,211);
  triangle(100,0,0,100,100,100);
}

function Three() {
  stroke(255,65,241);
  rect(50,100,50);
  fill(245,238,211);
  fill(171,138,9);
  ellipse(100,100,100);
  fill(235,245,244);
  triangle(100,0,0,100,100,100);
}
