$("#btnAceptar").onclick = function(){
  $("#divApuestaMinima").className = "oculto";
  $("#divIngresoDeDatos").className = "divIngresoDeDatos";
  $("#spanApuestaMinima").innerHTML = $("#txtApuestaMinima").value;
};
