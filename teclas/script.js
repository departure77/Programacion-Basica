var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var mouse = {
  
}
console.log(teclas);
console.log("mouseup");

document.addEventListener("mouseup", dibujarMouse);
var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento){

    var color = "blue";
    var movimiento = 10;

    switch(evento.keyCode){

        case teclas.UP: 
        dibujarLinea(color, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        
        case teclas.DOWN: 
            dibujarLinea(color, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        
        case teclas.LEFT: 
        dibujarLinea(color, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        
        case teclas.RIGHT: 
        dibujarLinea(color, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            break;
         
    }
    
    
}

function dibujarMouse(evento){
    
    var color = "black";
    var movimiento = 3;

    console.log(evento);
}
