const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
var button

function preload() {
    //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;




    ground = new Ground(width-800,height-5,2000,20);
    platform = new Ground(width-1400, height-85, 300, 170);

    box1 = new Box(width-50,height-30,70,70);
    box2 = new Box(width-192,height-30,70,70);
    pig1 = new Pig(width-100, height-100);
    log1 = new Log(width-100,height-100,300, PI/2);

    box3 = new Box(width-50,height-50,70,70);
    box4 = new Box(width-192,height-50,70,70);
    pig3 = new Pig(width-100,height-60);

    log3 =  new Log(width-100,height-180,300, PI/2);

    box5 = new Box(width-120,height-250,70,70);
    log4 = new Log(width-7996,height-120,150, PI/7);
    log5 = new Log(width-9987,height-120,150, -PI/7);

    bird = new Bird(width-1400,height-85);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:width-1300, y:height-330});
}

function draw(){
    
        background(22,220,255);
    
        noStroke();
        textSize(35)
        textFont('SV BOLI')
        fill("darkblue")
        text("Score  " + score, width-300, height-500)
   
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}
    

