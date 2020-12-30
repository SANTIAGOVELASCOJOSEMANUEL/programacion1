var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        //indica la cantidad de score dando el mensaje 
var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks =0;
    this.dragon=0;
    this.puntos=0;
};
//tamaño de hooper
Beaver.prototype.draw = function() {
    fill(213, 24, 242);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};
//velocidad de hooper hacia arriba
Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y -= 10 ;
};
//velocidad de hooper hacia abajo
Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy"   );
    this.y += 5 ;
};

// encargado de desaparcer los palos tocados por hooper
Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y +  40))) {
        stick.y = -400;
        this.sticks++;
    }
};
/////////
Beaver.prototype.checkForStickGrab = function(dragon) {
    if ((dragon.x >= this.x && dragon.x <= (this.x + 20)) &&
        (dragon.y >= this.y && dragon.y <= (this.y +  20))) {
        dragon.y = -400;
        this.Rock++;
    }
};
//alineamientos de los palos
var Stick = function(x, y) {
    this.x = x ;
    this.y = y;
};
var Dragon = function(x, y) {
    this.x = x ;
    this.y = y;
};
//color de los palos y tamaño
Stick.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};
Dragon.prototype.draw = function() {
    imageMode(CENTER);
   image(getImage( "avatars/aqualine-ultimate"),this.x,this.y,40,30) ;
};
//localizacion de hoper
var beaver = new Beaver(200,300 ); 
//define el tamaño de los palos de 0 a 350 y la longitud entre ellos
var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 20 + 300, random(50, 300)));
}
var dragon = [];
for (var j =0; j <10; j++) {  
    dragon.push(new Dragon(j * 80 + 300, random(20, 260)));
}
// longitud del pasto
var grassXs = [];
for (var i = 0; i <40; i++) { 
    grassXs.push(i*20);
}

draw = function() {
    
    // static   
    //fondo y alineaciones del rectangulo
    background(0, 238, 255);
    fill(92, 46, 15);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    //velocidad del pasto
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 50);
        //velocidad del pasto
        grassXs[i] -=1;
        if (grassXs[i] <=-20) {
            grassXs[i] = width;
        }
    }
    //velocidad del palo
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    for (var j = 0; j < dragon.length; j++) {
        dragon[j].draw();
        beaver.checkForStickGrab(dragon[j]);
        dragon[j].x -= 1 ;
    }
    //localizacion del score
    textSize(18);
  text("Sticks:"+beaver.sticks,20,30);
    text("dragon:"+beaver.dragon,20,50);
    beaver.puntos=beaver.sticks-beaver.dragon;
      text("Score: " + beaver.sticks, 20, 70);
    //mesaje whin y localizacion
    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    //movimiento hoper
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};
}};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processing = new Processing(canvas, sketchProc);
