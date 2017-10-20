

jugador.prototype.apostar = function (monto) {
    this.saldo -= (monto - this.apuesta);
    pot += (monto - this.apuesta);
    this.apuesta = monto;

    this.actualizarDiv();
};


jugador.prototype.evaluar = function () {
    return ((this.saldo === 0 || this.apuesta === apuestaAnterior) && this.yaJugo);
};


jugador.prototype.actualizarDiv = function () {
    $("#" + this.div.id + " label").innerHTML = "$" + this.apuesta;
    $("#" + this.div.id + " h5").innerHTML = "$" + this.saldo;
};


jugador.prototype.nuevaRonda = function () {
    this.apuesta = 0;
    this.yaJugo = false;
    this.actualizarDiv();
};



function jugador(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.apuesta = 0;
    this.yaJugo = false;

    //this.div;  //Irvin
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
    var cartaAgregada;
    var numCartas = cartasAsignadas.length;
    while (asignada === false) {
        contador = 0;
        numCartas = cartasAsignadas.length;
        cartaAgregada = new Cartas();
        if (numCartas === 0) {
            cartasAsignadas.push(cartaAgregada);
            asignada = true;
        } else {
            for (var i = 0; i < numCartas; i++) {
                if (cartasAsignadas[i].carta !== cartaAgregada.carta) {
                    contador++;
                }
            }
            if (contador === numCartas) {
                cartasAsignadas.push(cartaAgregada);
                asignada = true;
            }
        }
        //return cartaAgregada;
    }
    return cartaAgregada;

}



