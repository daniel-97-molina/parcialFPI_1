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
    return arrayPosiciones;
  } else if (arrayPosiciones.length > 1) {
    return decidirGanadorEmpate(arrayPosiciones);
  }
  //return arrayPosiciones;

}



/* mejorCombinacionPorJugador[] es el vector que guarda la mejor combinacion para cada jugador
(la mayor es el ganadorDefinitivo si solo hay un jugador)
El arrary arrayPosicionesGanadores[] es el array que guarda la posicion de todos los jugadores ganadores que tiene empate */


function decidirGanadorEmpate(arrayPosicionesGanadores) {
  var arrayEnCasoEmpate = []; //ya no la uso
  var cartaMayor = 0;
  var ganadorDefinitivo = [];


  //REVISAR SI ESTO ES NECESARIO
  //for (var i = 0; i < jugadores.length; i++) {
  //  combinacionCartasGenerales(i);
  //    arrayEnCasoEmpate[i] = jugadores[i].combinacionCartas;
  //  }


  //Por si hay empate en alguna de la 10 combinaciones ganadoras
  switch (mejorCombinacionPorJugador[arrayPosicionesGanadores[0]]) {
    case 1:
      for (var x = 0; x < arrayPosicionesGanadores.length; x++) {

        jugadores[arrayPosicionesGanadores[x]].combinacionCartas.sort(function(a, b) {
          return b - a;
        });

        if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[posicionDeCarta] > cartaMayor) {
          cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[posicionDeCarta];
          ganadorDefinitivo[0] = arrayPosicionesGanadores[x];
        } else if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4] === 1) {
          //cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4];
          ganadorDefinitivo[0] = arrayPosicionesGanadores[x];
        }

      }
      contadorGanadores(mejorCombinacionPorJugador[aganadorDefinitivo[0]]);
      break;

    case 2:
      contadorGanadores(ganadorDefinitivo[0]);
      break;

    case 3:
      contadorGanadores(ganadorDefinitivo[0]);
      break;

    case 4:
      contadorGanadores(ganadorDefinitivo[0]);
      break;

    case 5:
      evaluarCartaMayor(0);
      contadorGanadores(ganadorDefinitivo[0]);
      break;
    case 6:
      evaluarCartaMayor(0);
      contadorGanadores(ganadorDefinitivo[0]);
      break;
    case 7:
      contadorGanadores(ganadorDefinitivo[0]);
      break;
    case 8:
      contadorGanadores(ganadorDefinitivo[0]);
      break;
    case 9:
      //COMBINACION 9:Escalera familia
      //5 cartas consecutivas del misma familia
      for (var x = 0; x < arrayPosicionesGanadores.length; x++) {

        jugadores[arrayPosicionesGanadores[x]].combinacionCartas.sort(function(a, b) {
          return b - a;
        });

        if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[0] > cartaMayor) {
          cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[0];
          ganadorDefinitivo[0] = arrayPosicionesGanadores[x];
        }
      }
      contadorGanadores(ganadorDefinitivo[0]);
      break;

    case 10:
      //REVISAR QUE HACER CUANDO HAY UN EMPATE Y NO SE PUEDA RESOLVER
      //Como la Escalera Real no se puede desempatar (se devuelve el mismo arreglo de posiciones)
      for (var i = 0; i < arrayPosicionesGanadores.length; i++) {
        arrayPosiciones[i] = arrayPosicionesGanadores[i];
      }

      break;
  }



  // Se usa en el switch (1,5,6)
  function evaluarCartaMayor(posicionDeCarta) {
    for (var x = 0; x < arrayPosicionesGanadores.length; x++) {

      jugadores[arrayPosicionesGanadores[x]].combinacionCartas.sort(function(a, b) {
        return b - a;
      });

      if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4] === 1) {
        cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4];
        ganadorDefinitivo[0] = arrayPosicionesGanadores[x];
        break;
      } else {
        if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[posicionDeCarta] > cartaMayor) {
          cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[posicionDeCarta];
          ganadorDefinitivo[0] = arrayPosicionesGanadores[x];
        }

      }
    }
    return ganadorDefinitivo;
  }


  function contadorGanadores(valorBuscado) {
    var arrayPosiciones = [];
    var indice;
    indice = arrayPosicionesGanadores.indexOf(valorBuscado);
    while (indice !== -1) {
      arrayPosiciones.push(indice);
      indice = arrayPosicionesGanadores.indexOf(valorBuscado, indice + 1);
    }
  }




  return arrayPosiciones;
  //return ganadorDefinitivo;
  //return "EMPATE";
}
