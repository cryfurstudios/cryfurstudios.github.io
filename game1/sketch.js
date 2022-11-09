var size_change = 0;
function setup() {
  createCanvas(3000,3000)
}

function draw() {
  background(255)
  size_change += 1;
  strokeWeight(0)
  fill(0)
  rect(0,0,size_change)
  text("Get away from the dark!",100,100)
  text("I DONT WANNA DIE",200,200)
  text("Don't die!",mouseX,mouseY)
}
