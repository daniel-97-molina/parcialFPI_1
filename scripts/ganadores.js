var mejorCombinacionPorJugador = [];
var combinacionGanadoraActual = 0;

//Esta funcion retorna el la posicion del ganador o si hay empate las posiciones de los jugadores empatados
function decidirGanador() {

  var arrayPosiciones = [];
  var indice;

  for (var i = 0; i < jugadores.length; i++) {
    mejorCombinacionPorJugador[i] = combinacionCartasGenerales(i);

    console.log("Mejor combinacion jugador " + i + " es " + mejorCombinacionPorJugador[i]);

    if (mejorCombinacionPorJugador[i] > combinacionGanadoraActual) {
      combinacionGanadoraActual = mejorCombinacionPorJugador[i];
    }
    jugadores[i].manoGanadora = mejorCombinacionPorJugador[i];
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
}


function decidirGanadorEmpate(arrayPosicionesGanadores) {
  var cartaMayor = 0;
  var ganadorDefinitivo = [];
  var existeAS = false;
  var arrayPosiciones = [];

  var valorCarta = [];
  var mayor = 0;
  var contador = 0;
  var cuantasParejas = 0;
  var cuantosTrios = 0;


  //Por si hay empate en alguna de la 10 combinaciones ganadoras
  switch (mejorCombinacionPorJugador[arrayPosicionesGanadores[0]]) {
    case 1:
      //COMBINACION 1: Carta más alta
      evaluarCartaMayor15();
      break;

    case 2:
      //COMBINACION 2: Pareja
      evaluarCartaMayor23478();
      break;

    case 3:
      //COMBINACION 3: Doble pareja
      evaluarCartaMayor23478();
      break;

    case 4:
      //COMBINACION 4: Trío
      evaluarCartaMayor23478();
      break;

    case 5:
      //COMBINACION 5: Escalera
      evaluarCartaMayor15();
      break;

    case 6:
      //COMBINACION 6: Misma amilia
      evaluarCartaMayor69();
      break;

    case 7:
      //COMBINACION 7: Full
      evaluarCartaMayor23478();
      break;

    case 8:
      //COMBINACION 8: Poker
      evaluarCartaMayor23478();
      break;

    case 9:
      //COMBINACION 9:Escalera familia
      evaluarCartaMayor69();
      break;

    case 10:
      //COMBINACION 10:Escalera Real
      for (var i = 0; i < arrayPosicionesGanadores.length; i++) {
        arrayPosiciones[i] = arrayPosicionesGanadores[i];
      }

      break;
  }



  // Se usa en el switch (6 y 9)
  function evaluarCartaMayor69() {
    for (var x = 0; x < arrayPosicionesGanadores.length; x++) {

      jugadores[arrayPosicionesGanadores[x]].combinacionCartas.sort(function(a, b) {
        return b - a;
      });

      if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[0] > cartaMayor) {
        cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[0];
      }
    }

    for (var w = 0; w < arrayPosicionesGanadores.length; w++) {
      if (jugadores[arrayPosicionesGanadores[w]].combinacionCartas[0] === cartaMayor) {
        arrayPosiciones.push(arrayPosicionesGanadores[w]);
      }
    }
  }



  // Se usa en el switch (1 y 5)
  function evaluarCartaMayor15() {
    for (var x = 0; x < arrayPosicionesGanadores.length; x++) {

      jugadores[arrayPosicionesGanadores[x]].combinacionCartas.sort(function(a, b) {
        return b - a;
      });

      if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[0] > cartaMayor) {
        cartaMayor = jugadores[arrayPosicionesGanadores[x]].combinacionCartas[0];
      } else if (jugadores[arrayPosicionesGanadores[x]].combinacionCartas[4] === 1) {
        existeAS = true;
      }
    }

    if (existeAS === true) {
      for (var a = 0; a < arrayPosicionesGanadores.length; a++) {
        if (jugadores[arrayPosicionesGanadores[a]].combinacionCartas[4] === 1) {
          arrayPosiciones.push(arrayPosicionesGanadores[a]);
        }
      }
    } else {
      for (var w = 0; w < arrayPosicionesGanadores.length; w++) {
        if (jugadores[arrayPosicionesGanadores[w]].combinacionCartas[0] === cartaMayor) {
          arrayPosiciones.push(arrayPosicionesGanadores[w]);
        }
      }
    }
  }


  function evaluarCartaMayor23478() {

    for (var b = 0; b < arrayPosicionesGanadores.length; b++) {
      contador = 0;
      for (var n = 0; n < jugadores[arrayPosicionesGanadores[b]].combinacionCartas.length; n++) {
        var valorActual = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
        for (var m = 0; m < jugadores[arrayPosicionesGanadores[b]].combinacionCartas.length; m++) {
          if (valorActual === jugadores[arrayPosicionesGanadores[b]].combinacionCartas[m]) {
            contador++;
          }
        }
        if (contador === 2) {
          valorCarta[b] = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
          if (cuantasParejas === 2) {
            valorCarta[b] = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
            break;
          }
          if (cuantosTrios === 3) {
            valorCarta[b] = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
            break;
          }
          cuantasParejas++;
        } else if (contador === 3) {
          valorCarta[b] = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
          if (cuantasParejas === 2) {
            valorCarta[b] = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
            break;
          }
          cuantosTrios++;

        } else if (contador === 4) {
          valorCarta[b] = jugadores[arrayPosicionesGanadores[b]].combinacionCartas[n];
          break;
        }
        contador = 0;
      }
    }

    for (var i = 0; i < valorCarta.length; i++) {
      if (valorCarta[i] > mayor) {
        mayor = valorCarta[i];
      }
    }

    for (var w = 0; w < valorCarta.length; w++) {
      if (valorCarta[w] === mayor) {
        arrayPosiciones.push(arrayPosicionesGanadores[w]);
      }
    }
  }


  console.log(arrayPosiciones);
  return arrayPosiciones;
}
