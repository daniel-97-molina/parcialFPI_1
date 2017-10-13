var players = [];
var apuestaMinima;
function jugador(nombre,saldo){
this.jugando = false;
this.nombre=nombre;
this.saldo=saldo;
    
} 

jugador.prototype.apostar= function (monto){
  saldo-=monto;  
};


function add(nombre,saldo){
    players.push(new jugador(nombre,saldo));
    }


function $(query){
    return document.querySelector(query);
}

/*-------------------------------------------------------------*/
window.onload = function () {
    apuestaMinima=prompt("Bienvenido\n¿Que cantidad sera la apuesta minima?");
};

$("#btnAgregarJugador").onclick=function (){
    var sNombre=$("#txtNombre").value;
    var iDinero=$("#txtDinero").value;
    var texto = document.createTextNode(sNombre+"-$"+iDinero);
    var nodo = document.createElement("p").appendChild(texto);
    
  add(sNombre,iDinero);
    console.log(players[0].saldo);
  $("#divPantallaInicial").appendChild(nodo);
};


$("#btnComenzar").onclick=function (){
    
    
};

function init(){
    
    var iJ=Math.floor(Math.random()*5+1);
    $("#botonJ"+iJ).className="noseeee";
}















