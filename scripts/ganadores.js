var mejorCombinacionPorJugador = [];
var posicionJugadorGanador = -1;

function decidirGanador() {

  //var contadorGanadores = -1;
  var combinacionGanadoraActual = -1;
  var posiciones = [];
  var indice;

  for (var i = 0; i < jugadores.length; i++) {
    mejorCombinacionPorJugador[i] = combinacionCartasGenerales(i);
    //return Math.max.apply(null, mejorCombinacionPorJugador);
    console.log("Mejor combinacion jugador " + i + " es " + mejorCombinacionPorJugador[i]);

    if (mejorCombinacionPorJugador[i] > combinacionGanadoraActual) {
      combinacionGanadoraActual = mejorCombinacionPorJugador[i];
      posicionJugadorGanador = i;
      //contadorGanadores = 1;
    }
  }

  indice = mejorCombinacionPorJugador.indexOf(combinacionGanadoraActual);
  while (indice !==-1) {
    posiciones.push(indice);
    indice = mejorCombinacionPorJugador.indexOf(combinacionGanadoraActual, indice + 1);
  }

//  if (posiciones.length === 1) {
//    return posicionJugadorGanador;
//  } else if (posiciones.length > 1) {
        return posiciones;
//  }

}






function decidirGanadorEmpate(posicionesGanadores) {
  //var posicionGanadorAbsoluto = ""; //aun no usada
  var arrayEnCasoEmpate = [];
  var cartaMayor = 0;
  var posicionCartaMayor = -1;

  for (var i = 0; i < jugadores.length; i++) {
    combinacionCartasGenerales(i);
    arrayEnCasoEmpate[i] = jugadores[i].combinacionCartas;

  }

  /* mejorCombinacionPorJugador[] es el vector que guarda la mejor combinacion para cada jugador
  (la mayor es el posicionGanadorAbsoluto si solo hay un jugador)
  El arrary posicionesGanadores[] es el array que guarda la posicion de todos los jugadores ganadores que tiene empate */


  if (mejorCombinacionPorJugador[posicionesGanadores[0]] === 9) {
    //COMBINACION 9:Escalera familia
    //5 cartas consecutivas del misma familia

    for (var x = 0; x < jugadores.length; x++) {
      arrayEnCasoEmpate[x].sort(function(a, b) {
        return b - a;
      });

      //revisar si se debe tomar en cuenta aqui el AS porque es Escalera real
      //if (arrayEnCasoEmpate[x][4] === 1) {
      //  cartaMayor = arrayEnCasoEmpate[x][0];
      //  posicionCartaMayor = x;
      //  //break;
      //} else {
        if (arrayEnCasoEmpate[x][0] > cartaMayor) {
          cartaMayor = arrayEnCasoEmpate[x][0];
          posicionCartaMayor = x;
        }
    //  }

    }
  }
  //return posicionCartaMayor;
  return "EMPATE";
}
