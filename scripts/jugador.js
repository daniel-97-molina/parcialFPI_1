var jugadores = [];
var apuestaMinima = 0;
var turno = 0;
var cartasAsignadas = [];
var pot = 0;
var vectorCartasGenerales = [];
var contadorCartaGeneral = 1;
var apuestaAnterior = 0;
var subidaActual=0;

jugador.prototype.apostar = function (monto) {
    this.saldo -= (monto - this.apuesta);
    this.apuesta = monto;
    $("#" + this.div.id + " label").innerHTML = "$" + this.apuesta;
    $("#" + this.div.id + " h5").innerHTML = "$" + this.saldo;

};


function jugador(nombre, saldo) {
    this.jugando = true;
    this.nombre = nombre;
    this.saldo = saldo;
    this.div;
    this.apuesta = 0;
  

  
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

    console.log(cartaAgregada);
    return cartaAgregada;
}

}

function $(query) {

    return document.querySelector(query);

}



$(".range").onchange = function () {
    $("#lblRangeValue").innerHTML = "$" + $(".range").value;
};

/*-------------------------------------------------------------------------------------------------------------------------*/






$("#btnComenzar").onclick = function (event) {
    event.preventDefault();

    posicionar(jugadores.length);


    $("#divPantallaInicial").className = "oculto";
    $("header div").id = "divBotonesHeader";
    $("#main").className = "main";
    turnoInicial();

  agregarCartaGeneral(5); //zaldivar


  //Irvin
  console.log("Jugador 0 mejor combinación: " + combinacionCartasGenerales(0));
  console.log("Jugador 1 mejor combinación: " + combinacionCartasGenerales(1));
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

function ciegaMenorMayor(posicionMayor, posicionMenor) {
//    var mayor = jugadores[posicionMayor].div.id;
//    var menor = jugadores[posicionMenor].div.id;
    var mayorJugador = jugadores[posicionMayor];
    var menorJugador = jugadores[posicionMenor];
    mayorJugador.apostar(apuestaMinima);
    menorJugador.apostar(apuestaMinima / 2);
    apuestaAnterior = apuestaMinima;
    subidaActual = apuestaMinima;
    $(".range").setAttribute("min",subidaActual);
    $(".range").setAttribute("max",jugadores[turno].saldo);
    pot = parseFloat(apuestaMinima) + parseFloat(apuestaMinima / 2);
   // $(".cartasJuego > .pot").innerHTML = "$" + pot;
}



function mostrarCartas(id_divJugador) {
    var idDivAnterior;
    if (turno === 0) {
        idDivAnterior = jugadores[jugadores.length - 1].div.id;
    } else {
        idDivAnterior = jugadores[turno - 1].div.id;
    }
    $("#" + idDivAnterior + " .divCarta1").style.backgroundImage = "url(cartaVolteada.jpg)";

    $("#" + idDivAnterior + " .divCarta2").style.backgroundImage = "url(cartaVolteada.jpg)";

    $("#" + id_divJugador + " .divCarta1").style.backgroundImage = "url(" + jugadores[turno].carta1.generarRuta() + ")";
    $("#" + id_divJugador + " .divCarta2").style.backgroundImage = "url(" + jugadores[turno].carta2.generarRuta() + ")";
}



$("#igualar").onclick = function () {


    jugadores[turno].apostar(apuestaAnterior);

    controladorTurno();
};
$("#subir").onclick = function () {
    var range = $(".range");
    
    subidaActual=range.value;
    var total = parseFloat(subidaActual)+parseFloat(apuestaAnterior);
    apuestaAnterior=total;
    range.setAttribute("min",subidaActual);
    
    jugadores[turno].apostar(total);
   
    controladorTurno();
};
$("#pasar").onclick = function () {

    controladorTurno();
};
$("#retirarme").onclick = function () {

    controladorTurno();
};


function controladorTurno() {
    if (jugadores.length !== 0) {
        jugadores[turno].div.className = "divJugador";
          
        if (turno === jugadores.length - 1) {
            turno = 0;
        } else {
            turno++;
        }
        $(".range").setAttribute("max",jugadores[turno].saldo);
        var div_JugadorenJuego = jugadores[turno].div;
        div_JugadorenJuego.className += " turno";
        mostrarCartas(div_JugadorenJuego.id);
        if(jugadores[turno].saldo<apuestaAnterior){
        $(".range").className="oculto";
        $("#igualar").className="oculto";
        $("#subir").setAttribute("value","All in");
        
        
    }else{
           $(".range").className="range";;
        $("#igualar").className="";
        $("#subir").setAttribute("value","Subir"); 
    }
  
    
    }
}


//Irvin
function agregarCartaGeneral(iteraciones) {
    for (var i = 0; i < iteraciones; i++) { //zaldivar
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
