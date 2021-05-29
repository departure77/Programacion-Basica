class billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c; 
        this.imagen = new Image();

        this.imagen.src = imagenes[this.valor];
    }
}

var dinero = 0;
var papeles = 0;
var div = 0;
var entregado = [];
var caja = [];

var imagenes = []
imagenes[1000] = "bi1000.png";
imagenes[500] = "bi500.jpg";
imagenes[200] = "bi200.jpg";
imagenes[50] = "bi50.jpg";

caja.push(new billete(1000, 5));
caja.push(new billete(500, 10));
caja.push(new billete(200, 20));
caja.push(new billete(100, 10));
caja.push(new billete(50, 5));

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

function entregarDinero(){

    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(var bi of caja){
        
        if(dinero > 0){
            div = Math.floor(dinero/bi.valor);

            if(div > bi.cantidad){

                papeles = bi.cantidad;

             } else {
                papeles = div;
            }

            entregado.push(new billete (bi.valor, papeles));
            dinero = dinero -(bi.valor * papeles);
        }
    }

    if (dinero > 0){
        resultado.innerHTML = "Fondos insuficientes";
    } else {
        for(var e of entregado){
            
            if(e.cantidad > 0){
                
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "</br>";
            
            }
            
        }
    }

    console.log(entregado);
}

