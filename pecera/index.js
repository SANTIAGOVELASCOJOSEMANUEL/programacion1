var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        background(19, 188, 240);
var draFish = function (centerX, centerY){

var bodyLength = 122;
var bodyHeight = 70;
var bodyColor = color(162, 199, 193);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(7, 237, 7);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

};
draFish(300,200);
draFish(200,300);
draFish(200,100);
draFish(100,200);
draFish(100,40);
fill(13, 11, 11);
ellipse(100,350,15,13);
ellipse(150,352,15,7);
ellipse(200,354,16,30);
ellipse(250,356,15,13);
ellipse(300,358,17,7);
ellipse(350,350,22,9);
ellipse(398,350,17,7);
ellipse(200,350,16,13);
ellipse(50,350,17,7);
ellipse(10,350,16,13);
ellipse(30,350,16,10);
ellipse(50,390,15,7);
ellipse(100,380,15,10);
ellipse(150,390,14,7);
ellipse(200,390,15,10);
ellipse(250,370,14,8);
ellipse(300,390,18,12);
ellipse(350,370,19,14);
ellipse(398,390,21,10);
ellipse(30,390,17,10);
fill(29, 240, 43);
ellipse(200,390,10,150);
ellipse(150,390,10,100);
ellipse(250,390,10,150);
ellipse(300,390,10,100);
ellipse(350,390,10,150);
ellipse(50,390,10,200);
ellipse(100,390,10,150);
 }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);