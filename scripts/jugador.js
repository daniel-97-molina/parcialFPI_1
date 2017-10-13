var jugadores = [];
var apuestaMinima = 0;

var cartasAsignadas = [];

function jugador(nombre, saldo) {
    this.jugando = false;
    this.nombre = nombre;
    this.saldo = saldo;
    this.carta1 = new Cartas();
    this.carta2 = new Cartas();
}

jugador.prototype.apostar = function (monto) {
    this.saldo -= monto;
    };

function jugador(nombre, saldo) {
  this.jugando = false;
  this.nombre = nombre;
  this.saldo = saldo;

}

jugador.prototype.apostar = function(monto) {
  saldo -= monto;

};


function add(nombre, saldo) {

    var jugadorAgregado = new jugador(nombre, saldo);
    
    jugadorAgregado.Carta1 = agregarCarta();
    jugadorAgregado.Carta2 = agregarCarta();
    jugadores.push(jugadorAgregado);
    console.log(jugadorAgregado.Carta1.carta);
    
    
}


function agregarCarta() {
    var asignada = true;
    var numCartas=cartasAsignadas.length;
    while (asignada) {
    var cartaJugadorAgregado = new Cartas();
        
        if(numCartas!==0){
        
        
        for(var i=0;i<numCartas;i++) {
            
            if (cartasAsignadas[i].carta!==cartaJugadorAgregado.carta) {
                cartasAsignadas.push(cartaJugadorAgregado);
                
                asignada = false;
            }
        }
        }else{
            cartasAsignadas.push(cartaJugadorAgregado);
            break;
        }
    }
    return cartaJugadorAgregado;



}


function $(query) {

    return document.querySelector(query);

}

/*-------------------------------------------------------------*/
function reparticion() {
    var carta1 = new Cartas();
    var carta2 = new Cartas();


}

$("#btnAgregarJugador").onclick = function () {
    var sNombre = $("#txtNombre").value;
    var iDinero = $("#txtDinero").value;
    var texto = document.createTextNode(sNombre + "-$" + iDinero);
    var nodo = document.createElement("p").appendChild(texto);

    add(sNombre, iDinero);

    $("#divPantallaInicial").appendChild(nodo);
};


$("#btnComenzar").onclick = function () {

    if (jugadores.length > 1) {


    }
};



function init() {

    var iJ = Math.floor(Math.random() * 5 + 1);
    $("#main").className = "main";
//    $("#nose").className="main";


}
$("#btnAceptar").onclick = function(){
  apuestaMinima = $("#txtApuestaMinima").value;
  if(apuestaMinima ==="undefined" || apuestaMinima < 1 ){
    $("#txtApuestaMinima").className = "bordeRojo";
  }else{

  $("#divApuestaMinima").className = "oculto";
  $("#divIngresoDeDatos").className = "divIngresoDeDatos";
  $("#spanApuestaMinima").innerHTML = apuestaMinima;
  $("#lblJugadores").innerHTML = "JUGADORES:";
}
};

$("#btnAgregarJugador").onclick = function() {

  var sNombre = $("#txtNombre").value;
  var iDinero = $("#txtDinero").value;
  var error = false;
  if (sNombre === "" || sNombre === "undefined") {
    $("#txtNombre").className = "bordeRojo";
    error=true;
  }
  if (iDinero === "") {
    $("#txtDinero").className = "bordeRojo";
    error=true;
  }
  if(!error){
  var texto = document.createTextNode(sNombre + "-$" + iDinero);
  var nodo = document.createElement("p");
  nodo.appendChild(texto);
  add(sNombre, iDinero);
  $("#divPantallaInicial").appendChild(nodo);
  $("#txtDinero").className = "bordeNormal";
  $("#txtDinero").className = "bordeNormal";

}
};











