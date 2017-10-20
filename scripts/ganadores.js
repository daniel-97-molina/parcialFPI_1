var mejorCombinacionPorJugador = [];
var posicionJugadorGanador = -1;
var combinacionGanadoraActual = 0; /// revisar inicialaizar en cero

//Esta funcion retorna el la posicion del ganador o si hay empate las posiciones de los jugadores empatados
function decidirGanador() {

  var arrayPosiciones = [];
  var indice;

  for (var i = 0; i < jugadores.length; i++) {
    mejorCombinacionPorJugador[i] = combinacionCartasGenerales(i);

    console.log("Mejor combinacion jugador " + i + " es " + mejorCombinacionPorJugador[i]);

    if (mejorCombinacionPorJugador[i] > combinacionGanadoraActual) {
      combinacionGanadoraActual = mejorCombinacionPorJugador[i];
      posicionJugadorGanador = i;
    }
    jugadores[i].manoGanadora = mejorCombinacionPorJugador[i]; //REVISAR
  }

  indice = mejorCombinacionPorJugador.indexOf(combinacionGanadoraActual);
  while (indice !== -1) {
    arrayPosiciones.push(indice);
    indice = mejorCombinacionPorJugador.indexOf(combinacionGanadoraActual, indice + 1);
  }


  if (arrayPosiciones.length === 1) {
    return posicionJugadorGanador;
  } else if (arrayPosiciones.length > 1) {
    return decidirGanadorEmpate(arrayPosiciones);
  }
  //return arrayPosiciones;

}

//NOTA: para hacer que al final diga el ganador y con que combinacion gano podemos agregar una propiedad
// jugadores[i].conQueGano y asigarle el valor de la combincaion ganadora para luego acceder a ella



/* mejorCombinacionPorJugador[] es el vector que guarda la mejor combinacion para cada jugador
(la mayor es el posicionGanadorAbsoluto si solo hay un jugador)
El arrary arrayPosicionesGanadores[] es el array que guarda la posicion de todos los jugadores ganadores que tiene empate */


function decidirGanadorEmpate(arrayPosicionesGanadores) {
  var arrayEnCasoEmpate = [];
  var cartaMayor = 0;
  var posicionGanadorAbsoluto = -1;


  //REVISAR SI ESTO ES NECESARIO
  //for (var i = 0; i < jugadores.length; i++) {
  //  combinacionCartasGenerales(i);
  //    arrayEnCasoEmpate[i] = jugadores[i].combinacionCartas;
  //  }



  //Por si hay empate en alguna de la 10 combinaciones ganadoras
  switch (mejorCombinacionPorJugador[arrayPosicionesGanadores[0]]) {
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:

      break;
    case 7:

      break;
    case 8:

      break;
    case 9:
      //COMBINACION 9:Escalera familia
      //5 cartas consecutivas del misma familia
      evaluarCartaMayor(0);

      break;
    case 10:
      //REVISAR QUE HACER CUANDO HAY UN EMPATE Y NO SE PUEDA RESOLVER
      //return arrayPosicionesGanadores;
      break;
  }


  function evaluarCartaMayor(posicionDeCarta) {
    for (var x = 0; x < arrayPosicionesGanadores.length; x++) {

      jugadores[arrayPosicionesGanadores[x]].combinacionCartas.sort(function(a, b) {
        return b - a;
      });

      //revisar si se debe tomar en cuenta aqui el AS porque es Escalera real
      //  if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4] === 1) {
      //    cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4];
      //    posicionGanadorAbsoluto = arrayPosicionesGanadores[x];
      //} else {
      if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[posicionDeCarta] > cartaMayor) {
        cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[posicionDeCarta];
        posicionGanadorAbsoluto = arrayPosicionesGanadores[x];
      }

      //  }
    }
    return posicionGanadorAbsoluto;
  }


  //return posicionGanadorAbsoluto;
  return "EMPATE";
}
