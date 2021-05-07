
var pesoFinal = 0;

var gravTierra = 9.8;
var gravMarte = 3.7;
var gravJupiter = 24.8;

var usuario = prompt("Cual es tu peso?");
var seleccion = prompt("1 Marte  | 2 Jupiter");

var miPeso = parseInt(usuario);

if (seleccion == 1){
    
    pesoFinal = miPeso * gravMarte / gravTierra;
    planeta = "Marte";
    
} else if (seleccion == 2){
    
    pesoFinal = miPeso * gravJupiter / gravTierra;
    planeta = "Jupiter";

} else {
    alert ("error");
}



pesoFinal = parseInt(pesoFinal);

document.write("Tu peso en "+planeta+" es:<strong> "+pesoFinal+" KG</strong>");












