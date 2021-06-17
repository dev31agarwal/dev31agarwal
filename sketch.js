var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions= [];
var particle
var divisionHeight=300;
var score =0;
var start=0, end=1
var turn=0;
var gameState= 1;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);




 text("X: "+ mouseX +" Y: "+ mouseY, mouseX, mouseY );

 //text instruction for displaying points in each division
 text("50", 20, 530);
 text("100", 100, 530);
 text("500", 180, 530);
 text("200", 260, 530);
 text("100", 340, 530);
 text("50", 420, 530);
 text("500", 500, 530);
 text("350", 580, 530);
 text("100", 660, 530);
 text("400", 740, 530);

  Engine.update(engine);

  if(particle!==undefined){
    
    if(particle.position.y>480&&gameState===2){

      if(particle.position.x>0&&particle.position.x<80){
        score=score+50
      }

      if(particle.position.x>80&&particle.position.x<160){
        score=score+100
      }

      if(particle.position.x>160&&particle.position.x<240){
        score=score+500
      }

      if(particle.position.x>240&&particle.position.x<320){
        score=score+200
      }

      if(particle.position.x>320&&particle.position.x<400){
        score=score+100;
      }

      if(particle.position.x>400&&particle.position.x<480){
        score=score+50;
      }

      if(particle.position.x>480&&particle.position.x<560){
        score=score+500;
      }

      if(particle.position.x>560&&particle.position.x<640){
        score=score+350;
      }

      if(particle.position.x>640&&particle.position.x<720){
        score=score+100;
      }

      if(particle.position.x>720&&particle.position.x<800){
        score=score+100;
      }

      gameState=1
    }
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
 
   for (var k = 0; k < divisions.length; k++) {  
     divisions[k].display();
   }
  //  for(var y=0; y<particles.length; y++){
  //   particles[y].display();
  //  }
  if(particle!==undefined){
   ellipseMode(RADIUS)
    ellipse(particle.position.x, particle.position.y, 10, 10);
   
  }
}

function mousePressed(){

 

  

   // particles.push (new Particle(mouseX, 30, 10, 10));
   
gameState=2;
  particle = Bodies.circle(mouseX, 0, 10);       
   World.add(world, particle);
  
}