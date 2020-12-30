var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        var xPositions = [random(0,200)];
var yPositions = [0];

draw = function() {
    background(20, 40, 43);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(22, 227, 217);
        ellipse(xPositions[i], yPositions[i], 5, 12);
        yPositions[i] += 5;
        if(yPositions[i] > 400)
        {
        yPositions[i]=0;
        }
    
    }
    if(xPositions.length<200)
    {
    xPositions.push(random(0,400));
    yPositions.push(random(0,100));
    }
    
    if(mouseIsPressed){
    xPositions.push(random(0,400));
    yPositions.push(random(0,100));
    }
    
};

 }};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processing = new Processing(canvas, sketchProc);