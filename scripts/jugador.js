var jugadores = [];
var apuestaMinima = 0;

var cartasAsignadas = [];


jugador.prototype.apostar = function(monto) {
  this.saldo -= monto;
};

function jugador(nombre, saldo) {
  this.jugando = false;
  this.nombre = nombre;
  this.saldo = saldo;

}


function add(nombre, saldo) {

  var jugadorAgregado = new jugador(nombre, saldo);

  jugadorAgregado.Carta1 = agregarCarta();
  jugadorAgregado.Carta2 = agregarCarta();
  jugadores.push(jugadorAgregado);
  console.log(cartasAsignadas.length);
  console.log(jugadorAgregado.Carta1);
  console.log(jugadorAgregado.Carta2);


}


function agregarCarta() {
  var asignada = false;
  var contador = 0;
  var numCartas = cartasAsignadas.length;
  while (asignada === false) {
    contador = 0;
    numCartas = cartasAsignadas.length;
    var cartaJugadorAgregado = new Cartas();
    if (numCartas === 0) {
      cartasAsignadas.push(cartaJugadorAgregado);
      asignada = true;
    } else {
      for (var i = 0; i < numCartas; i++) {
        if (cartasAsignadas[i].carta !== cartaJugadorAgregado.carta) {
          contador = contador + 1;
        }
      }
      if (contador === numCartas) {
        cartasAsignadas.push(cartaJugadorAgregado);
        asignada = true;
      }
    }
  }
  return cartaJugadorAgregado;
}




function $(query) {

  return document.querySelector(query);

}

/*-------------------------------------------------------------*/



$("#btnComenzar").onclick = function() {

  if (jugadores.length > 1) {


  }
};



function init() {

  var iJ = Math.floor(Math.random() * 5 + 1);
  $("#main").className = "main";
  //    $("#nose").className="main";


}

$("#btnAceptar").onclick = function(event) {
    
  apuestaMinima = $("#txtApuestaMinima").value;
  console.log("apuestaMinima: "+apuestaMinima)
  if (apuestaMinima === "undefined" || apuestaMinima < 1) {
    $("#txtApuestaMinima").className = "bordeRojo";
  } else {
      
    $("#divApuestaMinima").className = "oculto";
    $("#divIngresoDeDatos").className = "divIngresoDeDatos";
    $("#spanApuestaMinima").innerHTML = apuestaMinima;
    $("#lblJugadores").innerHTML = "JUGADORES:";
    $("#txtDinero").setAttribute("min",apuestaMinima.toString());
    console.log("valor: "+$("#txtDinero").min);
  }

};

$("#btnAgregarJugador").onclick = function(event) {

  var sNombre = $("#txtNombre").value;
  var iDinero = $("#txtDinero").value;
  var error = false;
  if (sNombre === "" || sNombre === "undefined") {
    error = true;
  }
  if (iDinero === "" || iDinero === "undefined" || parseInt(iDinero)<apuestaMinima) {
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

};
