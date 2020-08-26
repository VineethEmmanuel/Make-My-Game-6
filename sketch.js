var count1 = 0;
var count2 = 0;
var endPlay = false;
var gameState = "play";
var bullet1,bullet2;

function preload(){
  bullet1Img = loadImage("images/bullet2.png");
  bullet2Img = loadImage("images/bullet1.png");

  tank1Img = loadImage("images/tank1.png");
  tank2Img = loadImage("images/tank2.png");

  gameOverImg = loadImage("images/GameOver.png");
  restartImg = loadImage("images/restart.png");
}

function setup() {
  createCanvas(1350,690);
  edges = createEdgeSprites();

  WallGroup = createGroup();
  bullet1Group = createGroup();
  bullet2Group = createGroup();

  wall1 = createSprite(82,40,10,100);
  wall2 = createSprite(40,151,90,10);
  wall3 = createSprite(123,45,90,10);
  wall4 = createSprite(155,80,10,60);
  wall5 = createSprite(170,83,40,10);
  wall6 = createSprite(258,150,10,300);
  wall7 = createSprite(62,201,10,90);
  wall8 = createSprite(105,217,90,10);
  wall9 = createSprite(215,150,90,10);
  wall10 = createSprite(215,280,90,10);
  wall11 = createSprite(80,408,200,10);
  wall12 = createSprite(151,440,10,70);
  wall13 = createSprite(71,450,10,90);
  wall14 = createSprite(200,445,100,10);
  wall15 = createSprite(211,490,10,90);
  wall16 = createSprite(80,630,160,10);
  wall17 = createSprite(330,190,150,10);
  wall18 = createSprite(524,280,10,550);
  wall19 = createSprite(348,165,10,50);
  wall20 = createSprite(475,370,90,10);
  wall21 = createSprite(565,121,90,10);
  wall22 = createSprite(820,500,10,450);
  wall23 = createSprite(775,290,90,10);
  wall24 = createSprite(851,80,10,200);
  wall25 = createSprite(893,85,90,10);
  wall26 = createSprite(905,125,10,80);
  wall27 = createSprite(1107,90,10,250);
  wall28 = createSprite(1080,133,60,10);
  wall29 = createSprite(1016,505,10,400);
  wall30 = createSprite(1256,40,10,70);
  wall31 = createSprite(1246,580,10,250);
  wall32 = createSprite(1200,627,90,10);
  wall33 = createSprite(1150,190,90,10);
  wall34 = createSprite(1060,510,90,10);
  wall35 = createSprite(870,465,90,10);
  wall36 = createSprite(970,581,90,10);
  wall37 = createSprite(570,467,90,10);
  wall38 = createSprite(524,1,10,30);
  wall39 = createSprite(1256,3,10,30);
  wall40 = createSprite(684,30,10,60);
  wall41 = createSprite(358,655,10,80);

  wall1.shapeColor="black"
  wall2.shapeColor="black"
  wall3.shapeColor="black"
  wall4.shapeColor="black"
  wall5.shapeColor="black"
  wall6.shapeColor="black"
  wall7.shapeColor="black"
  wall8.shapeColor="black"
  wall9.shapeColor="black"
  wall10.shapeColor="black"
  wall11.shapeColor="black"
  wall12.shapeColor="black"
  wall13.shapeColor="black"
  wall14.shapeColor="black"
  wall15.shapeColor="black"
  wall16.shapeColor="black"
  wall17.shapeColor="black"
  wall18.shapeColor="black"
  wall19.shapeColor="black"
  wall20.shapeColor="black"
  wall21.shapeColor="black"
  wall22.shapeColor="black"
  wall23.shapeColor="black"
  wall24.shapeColor="black"
  wall25.shapeColor="black"
  wall26.shapeColor="black"
  wall27.shapeColor="black"
  wall28.shapeColor="black"
  wall29.shapeColor="black"
  wall30.shapeColor="black"
  wall31.shapeColor="black"
  wall32.shapeColor="black"
  wall33.shapeColor="black"
  wall34.shapeColor="black"
  wall35.shapeColor="black"
  wall36.shapeColor="black"
  wall37.shapeColor="black"
  wall38.shapeColor="black"
  wall39.shapeColor="black"
  wall40.shapeColor="black"
  wall41.shapeColor="black"

  tank1 = createSprite(28,358,10,10);
  tank1.addImage("Tank1" , tank1Img);
  tank1.scale = 0.3;
  tank1.bounciness = 2;
  tank1.setCollider("rectangle" , 0 , 0 , 200 , 200);

  tank2 = createSprite(1295,354,10,10);
  tank2.addImage("Tank2" , tank2Img);
  tank2.scale = 0.3;
  tank2.bounciness = 2;
  tank1.setCollider("rectangle" , 0 , 0 , 200 , 200);

  gameOver = createSprite(690,247);
  gameOver.addImage("GameOver",gameOverImg);
  gameOver.scale = 2;
  gameOver.visible = false;

  restart = createSprite(664,484);
  restart.addImage("Restart",restartImg);
  restart.scale = 0.2;
  restart.visible = false;
}

function draw() {
background("cyan");
if(gameState === "play"){
restart.visible = false;
gameOver.visible = false;

WallGroup.add(wall1);
WallGroup.add(wall2);
WallGroup.add(wall3);
WallGroup.add(wall4);
WallGroup.add(wall5);
WallGroup.add(wall6);
WallGroup.add(wall7);
WallGroup.add(wall8);
WallGroup.add(wall9);
WallGroup.add(wall10);
WallGroup.add(wall11);
WallGroup.add(wall12);
WallGroup.add(wall13);
WallGroup.add(wall14);
WallGroup.add(wall15);
WallGroup.add(wall16);
WallGroup.add(wall17);
WallGroup.add(wall18);
WallGroup.add(wall19);
WallGroup.add(wall20);
WallGroup.add(wall21);
WallGroup.add(wall22);
WallGroup.add(wall23);
WallGroup.add(wall24);
WallGroup.add(wall25);
WallGroup.add(wall26);
WallGroup.add(wall27);
WallGroup.add(wall28);
WallGroup.add(wall29);
WallGroup.add(wall30);
WallGroup.add(wall31);
WallGroup.add(wall32);
WallGroup.add(wall33);
WallGroup.add(wall34);
WallGroup.add(wall35);
WallGroup.add(wall36);
WallGroup.add(wall37);
WallGroup.add(wall38);
WallGroup.add(wall39);
WallGroup.add(wall40);
WallGroup.add(wall41);

//Giving Controls for tank1
  if(keyDown("w")){
    tank1.y = tank1.y-5;
  }
  if(keyDown("s")){
    tank1.y = tank1.y+5;
  }
  if(keyDown("a")){
    tank1.x = tank1.x-5;
  }
  if(keyDown("d")){
    tank1.x = tank1.x+5;
  }
  //Giving Controls for tank2
  if(keyDown("UP_ARROW")){
    tank2.y = tank2.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    tank2.y = tank2.y+5;
  }
  if(keyDown("LEFT_ARROW")){
    tank2.x = tank2.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    tank2.x = tank2.x+5;
  }

  if(WallGroup.isTouching(tank1)){
    tank1.bounceOff(WallGroup);
  }
  if(WallGroup.isTouching(tank2)){
    tank2.bounceOff(WallGroup);
  }
  if(tank1.isTouching(edges)){
    tank1.bounceOff(edges[0]);
    tank1.bounceOff(edges[1]);
    tank1.bounceOff(edges[2]);
    tank1.bounceOff(edges[3]);
  }
  if(tank2.isTouching(edges)){
    tank2.bounceOff(edges[0]);
    tank2.bounceOff(edges[1]);
    tank2.bounceOff(edges[2]);
    tank2.bounceOff(edges[3]);
  }
  if(bullet1Group.isTouching(WallGroup)){
    bullet1Group.collide(WallGroup);
  }
  if(bullet2Group.isTouching(WallGroup)){
    bullet2Group.collide(WallGroup);
  }
  if(count1 === 30 || tank2.isTouching(tank1)){
    gameState = "end";
    fill("red");
    gameOver.visible = true;
    restart.visible = true;
  }
  if(count2 === 30 || tank1.isTouching(tank2)){
    gameState = "end";
    fill("red");
    gameOver.visible = true;
    restart.visible = true;
  }

  Bullet1();
  Bullet2();

  if(bullet1Group.isTouching(tank2)){
    count1 = count1 + 3;
    bullet1Group.destroyEach();
  }
  if(bullet2Group.isTouching(tank1)){
    count2 = count2 + 3;
    bullet2Group.destroyEach();
  }
}
if(gameState === "end"){
  if(mousePressedOver(restart)){
    gameState = "play";
    count1 = 0;
    count2 = 0;
    gameOver.visible = false;
    restart.visible = false;
    tank1.x = 28;
    tank1.y = 358;
    tank2.x = 1295;
    tank2.y = 354;
  }
}
  drawSprites();

  textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);

  fill("magenta");
  strokeWeight(3)
  stroke("black");
  text("Player 1: " + count1,324,26);
  text("Player 2: " + count2,324,66);
}
function Bullet1(){
  if(!endPlay){
  if (keyWentDown("z")){
    bullet1 = createSprite(tank1.x,tank1.y,60,10);
    bullet1.addImage("bullet1" , bullet1Img);
    bullet1.scale = 0.1;
    bullet1.velocityX=9;
    bullet1.lifetime=44;
    bullet1Group.add(bullet1);
  } 
  }
}
function Bullet2(){
  if(!endPlay){
  if (keyWentDown("m")){
    bullet2 = createSprite(tank2.x,tank2.y,60,10);
    bullet2.addImage("bullet2" , bullet2Img);
    bullet2.scale = 0.1;
    bullet2.velocityX=-9;
    bullet2.lifetime=44;
    bullet2Group.add(bullet2);
  } 
}
}