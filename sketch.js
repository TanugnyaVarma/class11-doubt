var jaxon, jaxonrunning;
var road, roadImg;
var edges;
var wall1,wall2

function preload(){
  roadImg=loadImage("path.png");
  jaxonrunning.loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  road=createSprite(200,200);
  road.addImage(roadImg);
  road.scale = 0.9;
  
  jaxon=createSprite(200,200);
  jaxon.addAnimation("jaxonrun",jaxonrunning);
  jaxon.scale=0.25;

  wall1=createSprite(85,270,20,400);
  wall2=createSprite(320,270,20,400);
  wall1.visible=false;
  wall2.visible=false;

  edges=createEdgeSprites();
}

function draw() {
  background("green");
 road.velocityY= +4;
 if(road.y > 400){
   road.y=200;
 }
 jaxon.collide(edges[3]);
 //jaxon.collide(wall2);
 jaxon.x = mouseX;

  drawSprites()
}
