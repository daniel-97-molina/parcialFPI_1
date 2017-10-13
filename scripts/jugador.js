var jugadores = [];
var apuestaMinima = 0;

function jugador(nombre, saldo) {
  this.jugando = false;
  this.nombre = nombre;
  this.saldo = saldo;

}

jugador.prototype.apostar = function(monto) {
  saldo -= monto;
};


function add(nombre, saldo) {
  jugadores.push(new jugador(nombre, saldo));
}


function $(query) {
  return document.querySelector(query);
}

/*-------------------------------------------------------------*/

$("#btnAceptar").onclick = function(event){
  
  apuestaMinima = $("#txtApuestaMinima").value;
  if(apuestaMinima == "undefined" || apuestaMinima < 1 ){
    $("#txtApuestaMinima").className = "bordeRojo";
  }else{

  $("#divApuestaMinima").className = "oculto";
  $("#divIngresoDeDatos").className = "divIngresoDeDatos";
  $("#spanApuestaMinima").innerHTML = apuestaMinima;
  $("#lblJugadores").innerHTML = "JUGADORES:";

}

};

$("#btnAgregarJugador").onclick = function(event) {

  var sNombre = $("#txtNombre").value;
  var iDinero = $("#txtDinero").value;
  var error = false;
  if (sNombre == "" || sNombre == "undefined") {
    $("#txtNombre").className = "bordeRojo";
    error=true;
  }
  if (iDinero == "") {
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
  event.preventDefault();
  $("#formIngresoDeDatos").reset();
}

};




$("#btnComenzar").onclick = function() {
  if (jugadores.length > 1) {


  }
};



function init() {

  var iJ = Math.floor(Math.random() * 5 + 1);
  $("#botonJ" + iJ).className = "noseeee";


}
