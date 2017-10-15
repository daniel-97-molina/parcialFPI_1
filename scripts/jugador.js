var jugadores = [];
var apuestaMinima = 0;
var turno; //variable no usada
var cartasAsignadas = [];

var vectorCartasGenerales = []; //Irvin
var contadorCartaGeneral=1; //Irvin


jugador.prototype.apostar = function (monto) {
    this.saldo -= monto;
};

function jugador(nombre, saldo) {
    this.jugando = false;
    this.nombre = nombre;
    this.saldo = saldo;
    this.div;
}


function add(nombre, saldo) {

    var jugadorAgregado = new jugador(nombre, saldo);

    jugadorAgregado.carta1 = agregarCarta();
    jugadorAgregado.carta2 = agregarCarta();
    jugadores.push(jugadorAgregado);
}


function agregarCarta() {
      var asignada = false;
    var contador = 0;
    var numCartas = cartasAsignadas.length;
    while (asignada === false) {
        contador = 0;
        numCartas = cartasAsignadas.length;
        var cartaAgregada = new Cartas();
        if (numCartas === 0) {
            cartasAsignadas.push(cartaAgregada);
            asignada = true;
        } else {
            for (var i = 0; i < numCartas; i++) {
                if (cartasAsignadas[i].carta !== cartaAgregada.carta) {
                    contador = contador + 1;
                }
            }
            if (contador === numCartas) {
                cartasAsignadas.push(cartaAgregada);
                asignada = true;
            }
        }
    }
    console.log(cartaAgregada);
    return cartaAgregada;
}



function $(query) {

    return document.querySelector(query);

}

/*--------------------------------------------------------------------------------------------------------------------------*/




$("#btnComenzar").onclick = function (event) {
    event.preventDefault();

    posicionar(jugadores.length);
     //repartirCartasGenerales(3); //Irvin
     for (var m = 0; m < 5; m++) {//Irvin
     agregarCartaGeneral();//Irvin
   }//Irvin
    $("#divPantallaInicial").className = "oculto";
    $("#main").className = "main";

    //Irvin
    combinacionCartasGenerales(0);
    //for (var i = 0; i < vectorCartasGenerales.length; i++) {
      //console.log(vectorCartasGenerales[i].familia);
      //console.log(vectorCartasGenerales[i].numero);
    //}
};



function init() {

    var iJ = Math.floor(Math.random() * jugadores.length + 1);
    $("#main").className = "main";



}

/*
function repartirCartasGenerales(numCartas){//numCartas es para reutilizar el metodo cuando solo se tenga que asignar 1 sola carta en las rondas siguientes
var numIteraciones=numCartas;
    while(numCartas>0){
        carta = agregarCarta();
        numCartas--;
}
for(var i=numIteraciones;i>0;i--){//hize asi el bucle para que exactamente en el orden en que se hizo push se asigne la ruta: por ejemplo .carta1 con el primer elemento que se añadio, .carta2 con el segundo al que se le hizo push, etc.
$(".carta"+i).style.backgroundImage="url("+cartasAsignadas[cartasAsignadas.length-i].generarRuta()+")";
        }

}
*/


//Irvin
function agregarCartaGeneral(){
var cartaGeneralAgregada = agregarCarta();
  vectorCartasGenerales.push(cartaGeneralAgregada);
  $(".carta"+contadorCartaGeneral).style.backgroundImage="url("+cartaGeneralAgregada.generarRuta()+")";
  contadorCartaGeneral = contadorCartaGeneral+1;

  ////posiblesCombinaciones(numIteraciones);  //Irvin
  //return vectorCartasGenerales; //Irvin
  //combinacionCartasGenerales(vectorCartasGenerales); //Irvin
}




$("#btnAceptar").onclick = function (event) {

    apuestaMinima = $("#txtApuestaMinima").value;

    if (apuestaMinima === "undefined" || apuestaMinima < 1) {
        $("#txtApuestaMinima").className = "bordeRojo";
    } else {


        $("#divApuestaMinima").className = "oculto";
        $("#divIngresoDeDatos").className = "divIngresoDeDatos";
        $("#spanApuestaMinima").innerHTML = apuestaMinima;
        $("#lblJugadores").innerHTML = "JUGADORES:";
        $("#txtNombre").focus();
        $("#txtDinero").setAttribute("min", apuestaMinima.toString());
        console.log("valor: " + $("#txtDinero").min);
    }

};

$("#btnAgregarJugador").onclick = function (event) {

    var sNombre = $("#txtNombre").value;
    var iDinero = $("#txtDinero").value;
    var error = false;
    if (sNombre === "" || sNombre === "undefined") {

        error = true;
    }
    if (iDinero === "") {

        error = true;
    }
    if (iDinero === "" || iDinero === "undefined" || parseInt(iDinero) < apuestaMinima) {
        error = true;
    }

    if (!error) {
        var texto = document.createTextNode(sNombre + "-$" + iDinero);
        var nodo = document.createElement("p");
        nodo.appendChild(texto);
        add(sNombre, iDinero);
        $("#divPantallaInicial").appendChild(nodo);
        $("#txtDinero").className = "bordeNormal";
        $("#txtDinero").className = "bordeNormal";

        event.preventDefault();
        $("#formIngresoDeDatos").reset();

    }

    if (jugadores.length >= 2) {
        $("#btnComenzar").removeAttribute("disabled");
        $("#btnComenzar").className = "enabled";



    }

};
