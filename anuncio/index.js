var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        background(121, 224, 25);


   fill(212, 21, 21);
textSize(30);
text("¡¡huevos el calvario!!", 10,50);
textSize(18);
fill(9, 94, 240);
var mianuncio = "¡¡aprovecha todos los martes y";
text(mianuncio,10,80);
var misegundo ="jueves venta de huevos con descuentos del 20%";
text(misegundo, 10, 100);
textSize(25);
fill(24, 219, 193);
var viernes="los viernes al 2X1";
text(viernes,200,150);
textSize(21);
fill(30, 180, 250);
var domingo="los domingos no te olvides";
text(domingo,10,200);
fill(255, 0, 0);
var mil="participar por los 100 mil pesos";
text(mil,100,250); 
fill(231, 245, 245);
ellipse(200,350,56,89);
fill(235, 224, 21);
ellipse(200,350,30,50);
fill(214, 232, 232);
ellipse(120,350,56,89);
fill(213, 227, 20);
ellipse(120,350,30,50);
fill(231, 245, 245);
ellipse(280,350,56,89);
fill(213, 227, 20);
ellipse(280,350,30,50);
 }};
    // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);