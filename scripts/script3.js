$("#btnAceptar").onclick = function(){
     apuestaMinima=$("#txtApuestaMinima");
        if(apuestaMinima!==undefined&&apuestaMinima>=1){
  $("#divApuestaMinima").className = "oculto";
  $("#divIngresoDeDatos").className = "divIngresoDeDatos";
  $("#spanApuestaMinima").innerHTML = apuestaMinima.value;
        }
};
