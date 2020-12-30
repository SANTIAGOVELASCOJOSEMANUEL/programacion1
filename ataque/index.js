var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        var bodyX = 234;
var bodyY = 207;
var bodyW = 159;
var faceW = bodyW/2;
var ojo =15;
var brazos=20;
draw = function() {
    background(53, 237, 240);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY+30, bodyW, 155); // body?
    ellipse(bodyX-1, bodyY-91, faceW, 102); // face?
    //ojos
    fill(0, 51, 255);
    ellipse (bodyX+25, bodyY -90, ojo,ojo);
    ellipse (bodyX-10 ,bodyY-90,ojo,ojo);
    // nose
    fill(255, 0, 0);
    ellipse(bodyX+0,bodyY-60, 29,20);
    fill(204, 139, 41);
    ellipse(bodyX,bodyY+25, 50,40);
    // orejas
    ellipse(bodyX-32,bodyY-135,20,40);
    ellipse(bodyX+28,bodyY-135,20,40);
    //brazos y piernas 
    ellipse(bodyX-45,bodyY+105,20,50);
    ellipse(bodyX+55,bodyY+103,20,50);
    ellipse(bodyX+75,bodyY-27,50,20);
    ellipse(bodyX-65,bodyY-27,40,20);
};
    }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);