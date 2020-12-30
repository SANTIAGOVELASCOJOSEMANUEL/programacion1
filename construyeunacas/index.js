var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

fill(212, 78, 78);
var y=60;

while (y<350){
    rect(y, 200,30, 30);
    y +=50;
}



var x=0;
fill(255, 0, 0);
while (x<152){
    rect(x, 292,30, 65);
    x +=15;
}
var s=221;
fill(255, 0, 0);
while(s<400){
     rect(s, 292,30, 65);
     s +=15;
}
var grass=getImage("cute/GrassBlock");
var bush=getImage("cute/TreeUgly");
var i=0;
for(i=0;i<5;i++)
{
image(grass,i,356,40,40);
if((i/40)%3===0)
{
 image(bush,i,336,40,40);   
}
}
var i=0;
for(i=0;i<5;i++)
{
image(grass,i+300,357,40,40);
if((i/40)%3===0)
{
 image(bush,i+300,336,40,40);   
}
}
var i=0;
for(i=0;i<5;i++)
{
image(grass,i+45,357,40,40);
if((i/40)%3===0)
{
 image(bush,i+45,336,40,40);   
}
}
var i=0;
for(i=0;i<5;i++)
{
image(grass,i+350,359,40,40);
if((i/40)%3===0)
{
 image(bush,i+350,341,40,40);   
}
}
 }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);