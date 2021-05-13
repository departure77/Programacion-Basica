var vp = document.getElementById("villaplatzi");
document.addEventListener("keydown", moverLobo);
var papel = vp.getContext("2d");
var x = 250;
var y = 250;


var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};



var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "pollo.png",
    cargaOk: false
};
var vaca = {
    url: "vaca.png",
    cargaOk: false
};
var fondo = {
    url: "tile.png",
    cargaOk: false
};
var lobo ={
    url: "lobo.png",
    cargaOk: false
};





fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);
dibujarLobo(lobo.imagen.src, xinicial, yinicial, xfinal, yfinal, papel);




function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
  
}
function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
  
}
function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
  
}
function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}
function cargarLobos(){
    lobo.cargaOk = true;
    dibujarLobo();
}



function dibujar(){

    
    //Creacion de fondos.
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0,0);
    }
    
    //Cantidades Aleatorias.
    var cantidadC = aleatorio(1, 3);
    var cantidadP = aleatorio(1, 3);
    var cantidadV = aleatorio(1, 3);

    //creacion aleatoria de cerdos
    for(var c = 0; c < cantidadC; c++){

        var xcerdo = aleatorio(0, 420);
        var ycerdo = aleatorio(0, 420);
        
        if(cerdo.cargaOk){
            papel.drawImage(cerdo.imagen, xcerdo,ycerdo);
        }
    }
    
    //creacion aleatoria de pollos
    for(var p = 0; p < cantidadP; p++){

        var xpollo = aleatorio(0, 420);
        var ypollo = aleatorio(0, 420);

        if(pollo.cargaOk){
            papel.drawImage(pollo.imagen, xpollo,ypollo);
        }
    }

    //creacion aleatoria de vacas
    for(var v = 0; v < cantidadV; v++){
       
        var xvaca = aleatorio(0, 420);
        var yvaca = aleatorio(0, 420);

        if(vaca.cargaOk){
            papel.drawImage(vaca.imagen, xvaca,yvaca);
        }
    }
} 
    
    
function aleatorio(min, max){

    var resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}


function dibujarLobo(xinicial, yinicial, xfinal, yfinal, lienzo){

    lienzo.beginPath();
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function moverLobo(evento){

    var movimiento = 3;

    if(lobo.cargaOk){

        paper.drawImage(lobo.imagen, x, y);

        switch(evento.keyCode){
    
            case teclas.UP: 
            dibujarLobo(x, y, x, y - movimiento, papel);
                y = y - movimiento;
                break;
            
            case teclas.DOWN: 
                dibujarLobo(x, y, x, y + movimiento, papel);
                y = y + movimiento;
                break;
            
            case teclas.LEFT: 
            dibujarLobo(x, y, x - movimiento, y, papel);
                x = x - movimiento;
                break;
            
            case teclas.RIGHT: 
            dibujarLobo(x, y, x + movimiento, y, papel);
                x = x + movimiento;
                break;
            default:
                break;
             
        }
    }

    console.log("lobo cargado");
       
}