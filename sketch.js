/*var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;
function preload(){
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
}


function draw(){
background("blue");  
}
*/

var callOut;
var t1;


var ticket;
function setup(){
  createCanvas(900,600);

 ticket = generateTicket();
 
 
 t1 =new Ticket();
 
 

}
function draw(){
  background(255);
 
 

  fill(0);
  textSize(22);
  text(ticket[0],100,100);
  text(ticket[1],100,200);
  text(ticket[2],100,300);

  t1.display();
}



function ourWork(){
  if(frameCount % 60 == 0){
    callOut = Math.round(random(0,arr.length-1));
   
    textSize(20);
    text(arr[callOut],100,100);
    arr.splice(callOut,1);
  }
}