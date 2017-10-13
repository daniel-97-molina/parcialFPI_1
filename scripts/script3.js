$("#btnAceptar").onclick = function(){

  apuestaMinima = $("#txtApuestaMinima").value;
  if(apuestaMinima === "undefined" || apuestaMinima < 1 ){
    $("#txtApuestaMinima").className = "bordeRojo";
  }else{

  $("#divApuestaMinima").className = "oculto";
  $("#divIngresoDeDatos").className = "divIngresoDeDatos";
  $("#spanApuestaMinima").innerHTML = apuestaMinima;
  $("#lblJugadores").innerHTML = "JUGADORES:";
}

};
