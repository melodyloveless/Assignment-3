var size=100;

function setup() {
  createCanvas(600, 600);
}

function draw(){

  let r = map(mouseX, 0, width, 217, 232);
  let g = map(mouseX, 0, width, 172, 176);
  let b = map(mouseX, 0, width, 232, 51);

  background(r,g,b);

    if(keyIsPressed) {
    let a = map(mouseY, 0, width, 217, 232);
    let d = map(mouseY, 0, width, 172, 176);
    let c = map(mouseY, 0, width, 232, 51);
    rect(50,50,500,500);
    fill(r,g,b);
    rect(100,100,400,400);
    fill(a,d,c);
    rect(150,150,300,300);
    fill(r,g,b);
    rect(200,200,200,200);
    fill(a,d,c);
    rect(250,250,100,100)

    textSize(50)
    textAlign(CENTER)
    fill(0)
    text("Headache Warning",width/2,580)

  }

  for (i=0; i<6; i++) {
  let a = map(mouseY, 0, width, 217, 232);
  let d = map(mouseY, 0, width, 172, 176);
  let c = map(mouseY, 0, width, 232, 51);
  fill(a,d,c)
  noStroke()
  ellipse(50+(i*size),frameCount%600,50);
  }



}
