var texto = document.getElementById("textoLineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var colores = document.getElementById("textoColores");
var botonColor = document.getElementById("botonColores");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){

    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, yi, xf, yf, xil, yil;
    var color = colores.value;
    var espacio = ancho / lineas;


    for(l = 0; l < lineas; l++){
     
        yf = espacio * (l + 1);
        xf = espacio * (l + 1);
        xi = espacio * l;
        yi = espacio * l;
   

        dibujarLinea(color, 0, yi, xf, 300);
        dibujarLinea(color, xi, 0, 300, yf);
    
        console.log("Linea "+l);

        
        dibujarLinea(color, 1,1,1,300);
        dibujarLinea(color, 1,1,300,1);
        dibujarLinea(color, 300,1,300,300);
        dibujarLinea(color, 1,300,300,300);
    
    }   
    
    
}