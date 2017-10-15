var jugadores = [];
var apuestaMinima = 0;
var turno=0; //variable no usada
var cartasAsignadas = [];

var vectorCartasGenerales = []; //Irvin
var contadorCartaGeneral = 1; //Irvin


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
$(".range").onchange=function(){
$("#lblRangeValue").innerHTML ="$"+$(".range").value;
};
/*--------------------------------------------------------------------------------------------------------------------------*/






$("#btnComenzar").onclick = function (event) {
    event.preventDefault();

    posicionar(jugadores.length);

    agregarCartaGeneral(3);//zaldivar

   
     
  
    $("#divPantallaInicial").className = "oculto";
    $("header div").id="divBotonesHeader";
    $("#main").className = "main";
    turnoiInicial();


    //Irvin
    //combinacionCartasGenerales(0);
    //for (var i = 0; i < vectorCartasGenerales.length; i++) {
      //console.log(vectorCartasGenerales[i].familia);
      //console.log(vectorCartasGenerales[i].numero);
    //}
    
};



function turnoiInicial() {
    

if(posicion===(jugadores.length-1)){
   
    turno=2;                                
                                    
    }
   else if(posicion===(jugadores.length-2)){//es decir si la posicion es 3 y hay 5 jugadores(ultima posicion : 4)

        turno=1;                  
                                    
    }
    else if(posicion===(jugadores.length-3)){//es decir si la posicion es 2 y hay 5 jugadores(ultima posicion : 4)
        turno=0;
                                  
   }else{
    turno=posicion+3;
   }
   var div_JugadorenJuego = jugadores[turno].div;
div_JugadorenJuego.className+=" turno";
    mostrarCartas(div_JugadorenJuego.id);

}
function mostrarCartas(id_divJugador){
    var idDivAnterior;
    if(turno===0){idDivAnterior=jugadores[jugadores.length-1].div.id;}
    else{idDivAnterior=jugadores[turno-1].div.id;}
$("#"+idDivAnterior+" .divCarta1").style.backgroundImage="url(cartaVolteada.jpg)";
 
$("#"+idDivAnterior+" .divCarta2").style.backgroundImage="url(cartaVolteada.jpg)";
   
$("#"+id_divJugador+" .divCarta1").style.backgroundImage="url("+jugadores[turno].carta1.generarRuta()+")";
$("#"+id_divJugador+" .divCarta2").style.backgroundImage="url("+jugadores[turno].carta2.generarRuta()+")";
}

$("#igualar").onclick=function (){
    controladorTurno();
    };


function controladorTurno(){
    if(jugadores.length!==0){
    jugadores[turno].div.className="divJugador";
    if(turno===jugadores.length-1){turno=0;}
    else{turno++;}
    var div_JugadorenJuego = jugadores[turno].div;
    div_JugadorenJuego.className+=" turno";
    mostrarCartas(div_JugadorenJuego.id);
    }
}

//Irvin
function agregarCartaGeneral(iteraciones) {
    for (var i = 0; i < iteraciones; i++) {//zaldivar
        var cartaGeneralAgregada = agregarCarta();
        vectorCartasGenerales.push(cartaGeneralAgregada);
        $(".carta" + contadorCartaGeneral).style.backgroundImage = "url(" + cartaGeneralAgregada.generarRuta() + ")";
        contadorCartaGeneral = contadorCartaGeneral + 1;
    }

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
