var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        background(186, 145, 20); // wooden table
fill(0, 204, 255);
ellipse(200, 200, 350, 350); // plate
fill(0, 217, 255);
ellipse(200, 200, 300, 300);
fill(250, 242, 242);
fill(119, 0, 255);
ellipse(200,200,50,50);
ellipse(150,200,50,50);
ellipse(250,200,50,50);
ellipse(200,200,50,50);
ellipse(175,243,50,50);
ellipse(225,243,50,50);
ellipse(200,287,50,50);
fill(0, 255, 38);
ellipse(180,128,10,50);
line(210,183,120,100);
}};
   // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);