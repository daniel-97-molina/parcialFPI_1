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


function add(nombre, saldo) {
    var jugadorAgregado = new jugador(nombre, saldo);

    jugadorAgregado.Carta1 = agregarCarta();
    jugadorAgregado.Carta2 = agregarCarta();
    jugadores.push(jugadorAgregado);
}

function agregarCarta() {
    var asignada = true;
    while (asignada) {
        var cartaJugadorAgregado = new Carta();
        for (var n in cartasAsignadas) {
            if (n !== cartaJugadorAgregado) {
                cartasAsignadas.push(cartaJugadorAgregado);
                asignada = false;
            }
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















