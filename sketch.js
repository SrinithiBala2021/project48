

var plant1,plantimg,plant2
var ball,ballimg,plant2img
var backgroungimg
var zombie,zombieImg
var plant3,plant3img
var plant4 ,plant4img
var plant5,plant5img
var plant6,plant6img
var start,startimg
var zombieGroup,ballGroup
var invisibleBlock
var score = 0
var gameState = "start"


function preload(){
backgroungimg = loadImage("BGIMG.jpg")
zombieImg = loadAnimation("Zombie1.png","zombie2.png","zombie3.png")
plant1img = loadImage("Plant 1.png")
plant2img = loadImage("plant2.png")
plant3img = loadImage("plant3.png")
startimg = loadImage("plants vs zombie.png")
ballimg = loadImage("ball 1.png")
plant4img = loadImage("plant 5.png")
plant5img = loadImage("plant 6.png")
plant6img = loadImage("plant 7.png")
}

function setup(){
  var canvas = createCanvas(1200,600);
  
    plant1 = createSprite(300,300,40,40)
    plant1.addImage("plant1",plant1img)
    plant1.scale = 0.1
  
    plant2 = createSprite(250,60,30,30)
    plant2.addImage("plant2",plant2img)
    plant2.scale = 0.1

    plant3 = createSprite(280,520,30,30)
    plant3.addImage("plant3",plant3img)
    plant3.scale = 0.15

    plant4 = createSprite(400,520,30,30)
    plant4.addImage("plant4",plant4img)
    plant4.scale = 0.5

    plant5 = createSprite(380,60,30,30)
    plant5.addImage("plant5",plant5img)
    plant5.scale = 0.4

    plant6 = createSprite(480,60,30,30)
    plant6.addImage("plant6",plant6img)
    plant6.scale = 0.4

    invisibleBlock = createSprite(80,300,30,600)
    invisibleBlock.visible = false
  
    zombieGroup = new Group()
     ballGroup = new Group()

}
function draw (){
  background(backgroungimg)
  if(gameState === "start"){
    textSize(25)
    fill("black")
    text("HELP THE PLANTS TO SAVE THE WORLD !!",350,250)
    text("DON'T LET ZOMBIES REACH THE HOUSE !!",350,300)
    text("IF YOU ARE READY PRESS KEY 'R' TO START !!",330,350)
   
    }
    
 if(keyWentDown("R") && gameState === "start"){
      gameState = "play"
      
    }
if(gameState === "play")
  
    plant1.y = mouseY

    if(frameCount % 60 === 0 && gameState === "play"){
      spawnzombie()
      }

       if(keyWentDown("space") && gameState === "play"){
           spawnball()
       }
       if(score>0 && score % 100 === 0){
        zombieGroup.velocityX = zombieGroup.velocityX-1
      }
     // for (var k = 0; k<ballGroup.length ; k++){
       // if(zombieGroup.isTouching(ballGroup.get(k))){
       //  ballGroup.get(k).destroy()
        // zombieGroup.destroyEach()
        // score  = score+20
        // } 
      // }

       for (var i = 0; i<zombieGroup.length ; i++){
           if(ballGroup.isTouching(zombieGroup.get(i))){
            zombieGroup.get(i).destroy()
            ballGroup.destroyEach()
            score  = score+20
            } 
          }
          
          
        textSize(25)
        fill("black")
        text("Score : "+score,1030,30)
       // fill("red")
       // text("PRESS SPACE TO RELEASE BALLS !!",560,50)

        if(zombieGroup.isTouching(invisibleBlock)){
          gameState = "End"
        }
        
          
          if (gameState === "End"){
            zombieGroup.destroyEach()
            ballGroup.destroyEach()
            plant1.destroy()
            plant2.destroy()
            plant3.destroy()
            plant4.destroy()
            plant5.destroy()
            plant6.destroy()
            background("black")
            textSize(25)
            fill("white")
            text("YOU LOST !! ",475,300)
            text("PRESS KEY 'S' TO RESTART !! ",400,350)
          }


          if (keyWentDown("S") && gameState === "End"){
            restart()
          }
          
   
      
  drawSprites()
    
        }
function spawnball(){
    
        ball = createSprite(plant1.x,plant1.y,25,25)
        ball.velocityX = 7
        ballGroup.add(ball)
        ball.addImage("ball",ballimg)
        ball.scale = 0.15
        ballGroup.add(ball)
  
    
}
function spawnzombie(){
  zombie  = createSprite(1200,Math.round(random(100,500)),30,70)
  zombie.addAnimation("zombie",zombieImg)
  zombie.scale = 0.2
  zombie.velocityX = -4
  zombieGroup.add(zombie)
  //zombie.debug = true
  zombie.setCollider("rectangle",0,0,500,700)

}
function restart(){
    gameState = "start"
    score = 0
    plant1 = createSprite(300,300,40,40)
    plant1.addImage("plant1",plant1img)
    plant1.scale = 0.1
    plant2 = createSprite(350,60,30,30)
    plant2.addImage("plant2",plant2img)
    plant2.scale = 0.1
    plant3 = createSprite(480,60,30,30)
    plant3.addImage("plant3",plant3img)
    plant3.scale = 0.15
}
