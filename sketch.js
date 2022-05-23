
function preload(){
  //pre-load images
  track = loadImage(path.png);
  runner = loadImage(Runner-1)
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var track, runner;
  var invisiblewall = createSprite(60,325,400,120);
  var invisiblewall2 = createSprite(335,335,400,120);
  track.velocityY = 200;
  runner.velocityY = 200;
  runner.y = mouseY
}

function draw() {
  background(0);
  invisiblewall.visible = false;
  invisiblewall2.visible = false;
  drawSprites();
}
