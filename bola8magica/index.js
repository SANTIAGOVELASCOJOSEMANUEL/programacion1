var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
var answer = floor(random(0, 6));
var palabra = round(answer);
if (palabra ===0) {
    fill(45, 227, 176);
    text("no se", 176, 200);
    text("dime tu", 159, 229); 
}
else if( palabra ===1){
    fill(255, 0, 0);
    text("no se que decir",160,200);
    text("nada esta bien",159,229);

}else if( palabra===2){
    fill(0, 255, 111);
    text("pero",180,200);
    text("porque",180,228);
}else if( palabra===2){
    fill(0, 255, 111);
    text("no pasa nada",180,200);
    text("tu tranquilo",180,228);
}else if( palabra===3){
    fill(240, 217, 70);
    text("ok esta bien ",180,200);
    text("te entiendo...",180,228);
}else if( palabra===4){
    fill(113, 235, 65);
    text("animo ya veras",160,200);
    text("que todo va a salir bien",140,228);
}
    else if(palabra===5){
    fill(16, 224, 106);
    text("tu sigue ",180,200);
    text("nada va a pasar",180,228);
    }
 }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);