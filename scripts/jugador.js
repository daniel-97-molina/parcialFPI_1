var jugadores = [];
var apuestaMinima=0;

function jugador(nombre,saldo){
this.jugando = false;
this.nombre=nombre;
this.saldo=saldo;
    
} 

jugador.prototype.apostar= function (monto){
  saldo-=monto;  
};


function add(nombre,saldo){
     jugadores.push(new jugador(nombre,saldo));
    }


function $(query){
    return document.querySelector(query);
}

/*-------------------------------------------------------------*/


$("#btnAgregarJugador").onclick=function (){
    var sNombre=$("#txtNombre").value;
    var iDinero=$("#txtDinero").value;
    var texto = document.createTextNode(sNombre+"-$"+iDinero);
    var nodo = document.createElement("p").appendChild(texto);
    
  add(sNombre,iDinero);
   
  $("#divPantallaInicial").appendChild(nodo);
};


$("#btnComenzar").onclick=function (){
if(jugadores.length>1){
    
 
    }
};   
    


function init(){
    
    var iJ=Math.floor(Math.random()*5+1);
    $("#botonJ"+iJ).className="noseeee";
    
    
}















