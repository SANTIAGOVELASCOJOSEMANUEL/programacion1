var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        background(186, 145, 20); // wooden table
        var xPos = 100;
var yPos = 250;
var estrella1 = 200;
var estrella2 = 200;
var estrella3 = 120;
var estrella4 = 110;
var estrella5 = 150;
var estrella6 = 200;
var sol =20;

draw = function() {
    background(20, 26, 25);
    fill(201, 201, 76);
    ellipse(xPos, yPos, 20, 20);
    xPos -=1;
    yPos -=1;
    fill(96, 18, 112);
    ellipse(estrella1,estrella1,20,20);
    estrella1 +=2;
    estrella2 -=1;
    fill(6, 199, 19);
    ellipse(estrella3,estrella4,20,20);
    estrella3 += 2;
    estrella4 -=1;
    fill(0, 21, 255);
    ellipse(estrella5,estrella6,20,20);
    estrella5 -=2;
    fill(255, 0, 0);
    ellipse(150,250,sol,sol);
    sol +=1;
};
}};
    // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);