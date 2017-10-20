var jugadores = [];
var apuestaMinima = 0;
var turno = 0;
var cartasAsignadas = [];
var pot = 0;
var vectorCartasGenerales = [];
var contadorCartaGeneral = 1;
var apuestaAnterior = 0;
var subidaActual = 0;

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


function $(query) {
    return document.querySelector(query);
}



$("#range").onchange = function () {
    $("#lblRangeValue").innerHTML = "$" + $("#range").value;
};

/*-------------------------------------------------------------------------------------------------------------------------*/






$("#btnComenzar").onclick = function (event) {
    event.preventDefault();

    posicionar(jugadores.length);


    $("#divPantallaInicial").className = "oculto";
    $("header div").id = "divBotonesHeader";
    $("#main").className = "main";
    turnoInicial();

    //agregarCartaGeneral(5); //zaldivar

    //Irvin
    //console.log("El ganador absoluto es: "+decidirGanador());

};



function turnoInicial() {
    var largo = jugadores.length;
    if (posicion === (largo - 1)) {
        turno = 2;
        ciegaMenorMayor(1, 0);
    } else if (posicion === (largo - 2)) { //es decir si la posicion es 3 y hay 5 jugadores(ultima posicion : 4)
        turno = 1;
        ciegaMenorMayor(0, largo - 1);
    } else if (posicion === (largo - 3)) { //es decir si la posicion es 2 y hay 5 jugadores(ultima posicion : 4)
        turno = 0;
        ciegaMenorMayor(largo - 1, largo - 2);
    } else {
        turno = posicion + 3;
        ciegaMenorMayor(posicion + 2, posicion + 1);

    }

    var div_JugadorenJuego = jugadores[turno].div;
    div_JugadorenJuego.className += " turno";
    mostrarCartas(div_JugadorenJuego.id);

}
function setNombreJugador() {
    $("#jugadorActual").innerHTML = jugadores[turno].nombre;

}


function ciegaMenorMayor(posicionMayor, posicionMenor) {
//    var mayor = jugadores[posicionMayor].div.id;
//    var menor = jugadores[posicionMenor].div.id;
    var mayorJugador = jugadores[posicionMayor];
    var menorJugador = jugadores[posicionMenor];
    mayorJugador.apostar(apuestaMinima);
    menorJugador.apostar(apuestaMinima / 2);
    apuestaAnterior = apuestaMinima;
    subidaActual = apuestaMinima;
    $("#range").setAttribute("min", subidaActual);
    $("#range").setAttribute("max", jugadores[turno].saldo - apuestaAnterior);

}



function mostrarCartas(id_divJugador, idAnterior) {
    var idDivAnterior;
    if (turno === 0) {
        idDivAnterior = jugadores[jugadores.length - 1].div.id;
    } else {
        idDivAnterior = jugadores[turno - 1].div.id;
    }
    idDivAnterior = idAnterior || idDivAnterior;
    $("#" + idDivAnterior + " .divCarta1").style.backgroundImage = "url(images/cartaVolteada.jpg)";

    $("#" + idDivAnterior + " .divCarta2").style.backgroundImage = "url(images/cartaVolteada.jpg)";

    $("#" + id_divJugador + " .divCarta1").style.backgroundImage = "url(" + jugadores[turno].carta1.generarRuta() + ")";
    $("#" + id_divJugador + " .divCarta2").style.backgroundImage = "url(" + jugadores[turno].carta2.generarRuta() + ")";
}



$("#igualar").onclick = function () {


    jugadores[turno].apostar(apuestaAnterior);

    controladorTurno();
};


$("#subir").onclick = function () {
    var range = $("#range");
    if ($("#subir").value === "Subir") {


        subidaActual = parseFloat(range.value);
        var total = subidaActual + parseFloat(apuestaAnterior);
        apuestaAnterior = total;
        range.setAttribute("min", subidaActual);

        jugadores[turno].apostar(total);


    } else if ($("#subir").value === "All in") {
        console.log("saldo : " + jugadores[turno].saldo + " apuesta :" + jugadores[turno].apuesta);
        jugadores[turno].apostar(parseFloat(jugadores[turno].saldo) + parseFloat(jugadores[turno].apuesta));
    } else {
        range.setAttribute("min", apuestaMinima);
//        range.setAttribute("max", jugadores[turno].saldo);
        $("#igualar").className = "";
        $("#subir").value = "Subir";
        $("#pasar").className = "oculto";
        jugadores[turno].apostar(parseFloat(range.value));
        apuestaAnterior = parseFloat(range.value);
    }
    controladorTurno();
};


$("#pasar").onclick = function () {

    controladorTurno();
};


$("#retirarme").onclick = function (event) {
    jugadores[turno].div.className = "retirado divJugador divCancelado";

    jugadores.splice(turno, 1);
    if (turno !== 0) {
        turno--;
    } else {
        turno = jugadores.length - 1;
    }
    if (jugadores.length === 1) {
        mostrarCartas(jugadores[turno].div.id);
        jugadores[turno].div.className += " turno ganador";
    } else {
        controladorTurno();
    }
};


function controladorTurno() {
    console.log("contador" + contadorCartaGeneral);
    jugadores[turno].yaJugo = true;
    jugadores[turno].div.className = "divJugador";
    var contador = 0;
    for (var i = 0; i < jugadores.length; i++) {
        if (jugadores[i].evaluar()) {
            contador++;
        }
    }
    if (contador === jugadores.length) {// ES NUEVA RONDA
        var turnoTemporal = jugadores[turno].div.id;
        if (contadorCartaGeneral > 5 || jugadores.length === 1) {//final juego

            var ganadores = decidirGanador();
            for (var i = 0; i < ganadores.length; i++) {
                //mostrarCartas(jugadores[i].div.id);
                jugadores[i].div.className += " turno ganador";
            }

            //console.log("Jugador["+i+"]-Combinacion :"+combinacionCartasGenerales(i)); 


            console.log(jugadores[turno]);
        }
        if (posicion === jugadores.length - 1) {
            turno = 0;
        } else {
            turno = posicion + 1;
        }
        console.log("Turno nueva ronda :" + turno);
        var div_JugadorenJuego = jugadores[turno].div;
        div_JugadorenJuego.className += " turno";
        mostrarCartas(div_JugadorenJuego.id, turnoTemporal);

        $("#range").setAttribute("max", jugadores[turno].saldo);

        apuestaAnterior = 0;
        $(".cartasJuego > .pot").innerHTML = "$" + pot;
        $("#subir").value = "Apostar";
        $("#pasar").className = "";
        $("#igualar").className = "oculto";
        if (vectorCartasGenerales.length === 0) {
            agregarCartaGeneral(3);
        } else {
            agregarCartaGeneral(1);
        }

        jugadores.forEach(function (elemento, index, arreglo) {
            elemento.nuevaRonda();
        });
        setNombreJugador();
    } else {// SI NO ES NUEVA RONDA

        //jugadores[turno].div.className = "divJugador";

        if (turno === jugadores.length - 1) {   // CAMBIA DE TURNO
            turno = 0;
        } else {
            turno++;
        }
        console.log("turno: " + turno);
        setNombreJugador();
        $("#range").setAttribute("max", jugadores[turno].saldo - apuestaAnterior);
        var div_JugadorenJuego = jugadores[turno].div;
        div_JugadorenJuego.className += " turno";
        mostrarCartas(div_JugadorenJuego.id);
        //console.log("saldo: "+jugadores[turno].saldo+" -apuestaAnterior :"+apuestaAnterior);
        if (jugadores[turno].saldo < apuestaAnterior || jugadores[turno].saldo < apuestaMinima) { //SI EBE HACER ALL IN
            $("#igualar").className = "oculto";
            console.log($("#igualar").className);
            $("#range").className = "oculto";
            $("#subir").value = "All in";

        } else {
            $("#range").className = "range";
            $("#igualar").className = "";
            $("#subir").value = "Subir";

//            if (apuestaAnterior !== 0) {
//                $("#pasar").className = "oculto";
//                if (jugadores[turno].saldo !== 0) {
//                    $("#igualar").className = "";
//                }
//            } else {
//
//                $("#subir").value = "Apostar";
//                $("#pasar").className = "";
//                $("#igualar").className = "oculto";
//            }
        }

    }

}

function agregarCartaGeneral(iteraciones) {
    for (var i = 0; i < iteraciones; i++) {
        var cartaGeneralAgregada = agregarCarta();
        vectorCartasGenerales.push(cartaGeneralAgregada);
        $(".carta" + contadorCartaGeneral).style.backgroundImage = "url(" + cartaGeneralAgregada.generarRuta() + ")";
        contadorCartaGeneral = contadorCartaGeneral + 1;
    }
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
