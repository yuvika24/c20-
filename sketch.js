var fixedrect,movingrect;







function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(400,100,50,80) ;
 fixedrect.velocityY = 3;
 movingrect = createSprite(400,800,80,50);
 movingrect.velocityY = -3;
 fixedrect.shapeColor="yellow";
movingrect.shapeColor = 'yellow';
fixedrect.debug=true;
movingrect.debug = true;

}


function draw() {
  background(rgb(10,153,255));  
// movingrect.x=mouseX;
// movingrect.y = mouseY;
// console.log(movingrect.x-fixedrect.x);
// console.log(fixedrect.x-movingrect.x);
// if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
//  &&
//  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
// &&
// movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2
//   &&
//   fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2
// )
 if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&
 fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
 movingrect.velocityX = movingrect.velocityX *(-1);
 fixedrect.velocityX = fixedrect.velocityX *(-1);
 }
 if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&
 fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
 movingrect.velocityY = movingrect.velocityY *(-1);
 fixedrect.velocityY = fixedrect.velocityY *(-1);
 }

//  {
//   fixedrect.shapeColor="red";
// movingrect.shapeColor = 'red';
// }
// else{
//   fixedrect.shapeColor="yellow";
// movingrect.shapeColor = 'yellow';
// }

  drawSprites();
}