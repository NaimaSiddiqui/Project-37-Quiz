var canvas,database;
var quiz,gameState=0,question;
var contestantCount,contestant;

function setup(){
  canvas = createCanvas(1000,400);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(gameState===1){
    quiz.play();
  }
  if(contestantCount===2)
  quiz.update(1)

  
}
