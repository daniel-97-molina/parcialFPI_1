//Metodo para establecer las 10 formas diferentes como se puede tomar 3 de las 5 cartas comunes
//Devuelve la mejor de las combinaciones de cartas que se pudo formar de todas por jugador
function combinacionCartasGenerales(posicionJugador) {
  var resultadoCombinaciones = []; ///////////////////YA NO SE USA
  var mejorCombinacion = 0;
  //Creadas despues
  var arrayTodasLasCombinaciones = [];
  var arrayCartasJugador = [];
  var objetosCarta = [];
  var posicion;

  arrayTodasLasCombinaciones[0] = [0, 1, 2, posicionJugador];
  arrayTodasLasCombinaciones[1] = [1, 2, 3, posicionJugador];
  arrayTodasLasCombinaciones[2] = [2, 3, 4, posicionJugador];
  arrayTodasLasCombinaciones[3] = [0, 2, 4, posicionJugador];
  arrayTodasLasCombinaciones[4] = [0, 1, 3, posicionJugador];
  arrayTodasLasCombinaciones[5] = [0, 1, 4, posicionJugador];
  arrayTodasLasCombinaciones[6] = [0, 3, 4, posicionJugador];
  arrayTodasLasCombinaciones[7] = [1, 2, 4, posicionJugador];
  arrayTodasLasCombinaciones[8] = [0, 2, 3, posicionJugador];
  arrayTodasLasCombinaciones[9] = [1, 3, 4, posicionJugador];

  //Agregado despues
  for (var i = 0; i < arrayTodasLasCombinaciones.length; i++) {
    if (posiblesCombinaciones(arrayTodasLasCombinaciones[i]) > mejorCombinacion) {
      mejorCombinacion = posiblesCombinaciones(arrayTodasLasCombinaciones[i]);
      posicion = i;
    }
    arrayCartasJugador[i] = [vectorCartasGenerales[(arrayTodasLasCombinaciones[i][0])].numero, vectorCartasGenerales[(arrayTodasLasCombinaciones[i][1])].numero, vectorCartasGenerales[(arrayTodasLasCombinaciones[i][2])].numero, jugadores[posicionJugador].carta1.numero, jugadores[posicionJugador].carta2.numero];
    objetosCarta[i] = [vectorCartasGenerales[(arrayTodasLasCombinaciones[i][0])], vectorCartasGenerales[(arrayTodasLasCombinaciones[i][1])], vectorCartasGenerales[(arrayTodasLasCombinaciones[i][2])], jugadores[posicionJugador].carta1, jugadores[posicionJugador].carta2];
  }

  //Agregado despues
  //for (var t = 0; t < jugadores.length; t++) {
  jugadores[posicionJugador].combinacionCartas = arrayCartasJugador[posicion];
  jugadores[posicionJugador].objetosCarta = objetosCarta[posicion];
  //  }
  //console.log(jugadores[posicionJugador].combinacionCartas);
  //console.log(jugadores[posicionJugador].objetosCarta);
  return mejorCombinacion;
}




//Metodo para establecer las 10 combinaciones posibles para ganar
//Devuelve en orden ascendente la combinacion de cartas que se pudo formar
function posiblesCombinaciones(vectorCombinaciones) {
  var arrayFamiliasCartas = [];
  var arrayNumerosCartas = [];

  var combinacionGanadora = 0;
  var cadenaFamilias = "";
  var cadenaNumeros = "";

  for (var t = 0; t < 3; t++) {
    arrayFamiliasCartas[t] = vectorCartasGenerales[(vectorCombinaciones[t])].familia;
    arrayNumerosCartas[t] = vectorCartasGenerales[(vectorCombinaciones[t])].numero;
  }

  arrayFamiliasCartas[3] = jugadores[(vectorCombinaciones[3])].carta1.familia;
  arrayFamiliasCartas[4] = jugadores[(vectorCombinaciones[3])].carta2.familia;

  arrayNumerosCartas[3] = jugadores[(vectorCombinaciones[3])].carta1.numero;
  arrayNumerosCartas[4] = jugadores[(vectorCombinaciones[3])].carta2.numero;


  //Para ordenar los arrays de menor a mayor
  arrayFamiliasCartas.sort(function(a, b) {
    return a - b;
  });
  arrayNumerosCartas.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < 5; i++) {
    cadenaFamilias = cadenaFamilias + "" + arrayFamiliasCartas[i];
    cadenaNumeros = cadenaNumeros + "" + arrayNumerosCartas[i];
  }


  //COMBINACION 1: Carta más alta
  /*Si en el transcurso de la partida ningún jugador consigue formar alguna de las combinaciones presentadas más arriba,
   el ganador de la partida será el que tenga la carta más fuerte, siendo el As la mejor en estos casos.
   Es también la carta más fuerte la que desempata dos combinaciones idénticas.*/

  //SI NO SE CUMPLEN LAS OTRAS, ES "CARTA MÁS ALTA"
  combinacionGanadora = 1;


  //COMBINACION 2: Pareja
  //Una pareja de cartas iguales

  //COMBINACION 3: Doble pareja
  //Dos parejas de cartas iguales

  //COMBINACION 4: Trío
  //3 cartas iguales

  //COMBINACION 7: Full
  /*3 cartas iguales más otras 2 iguales. Es decir, un trio y una pareja.
   En caso de empate, gana el que tiene el trio más alto*/

  //COMBINACION 8: Poker
  //4 cartas con el mismo numero y una diferente

  var contador = 0;
  var cuantasParejas = 0;
  var cuantosTrios = 0;
  for (var n = 0; n < arrayNumerosCartas.length; n++) {
    var valorActual = arrayNumerosCartas[n];
    for (var m = 0; m < arrayNumerosCartas.length; m++) {
      if (valorActual === arrayNumerosCartas[m]) {
        contador++;
      }
    }
    if (contador === 2) {
      combinacionGanadora = 2;
      if (cuantasParejas === 2) {
        combinacionGanadora = 3;
        break;
      }
      if (cuantosTrios === 3) {
        combinacionGanadora = 7;
        break;
      }
      cuantasParejas++;
    } else if (contador === 3) {
      combinacionGanadora = 4;
      if (cuantasParejas === 2) {
        combinacionGanadora = 7;
        break;
      }
      cuantosTrios++;

    } else if (contador === 4) {
      combinacionGanadora = 8;
      break;
    }
    contador = 0;
  }


  //COMBINACION 5: Escalera
  //5 cartas sucesivas que no son del misma familia
  if (/(12345)$/.test(cadenaNumeros) || /(23456)$/.test(cadenaNumeros) || /(34567)$/.test(cadenaNumeros) || /(45678)$/.test(cadenaNumeros) || /(56789)$/.test(cadenaNumeros) || /(678910)$/.test(cadenaNumeros)) {
    combinacionGanadora = 5;
  } else if (/(7891011)$/.test(cadenaNumeros) || /(89101112)$/.test(cadenaNumeros) || /(910111213)$/.test(cadenaNumeros) || /(110111213)$/.test(cadenaNumeros)) {
    combinacionGanadora = 5;
  } else if (/(12111213)$/.test(cadenaNumeros) || /(1231213)$/.test(cadenaNumeros) || /(123413)$/.test(cadenaNumeros)) {
    combinacionGanadora = 5;
  }


  //COMBINACION 6: Misma amilia
  // 5 cartas del misma familia

  //COMBINACION 9:Escalera familia
  //5 cartas consecutivas del misma familia

  //COMBINACION 10:Escalera Real
  //5 cartas seguidas del misma familia desde el 10 al As

  if (/(0){5}$/.test(cadenaFamilias) || /(1){5}$/.test(cadenaFamilias) || /(2){5}$/.test(cadenaFamilias) || /(3){5}$/.test(cadenaFamilias)) {
    combinacionGanadora = 6;
    if (/(12345)$/.test(cadenaNumeros) || /(23456)$/.test(cadenaNumeros) || /(34567)$/.test(cadenaNumeros) || /(45678)$/.test(cadenaNumeros) || /(56789)$/.test(cadenaNumeros) || /(678910)$/.test(cadenaNumeros)) {
      combinacionGanadora = 9;
    } else if (/(7891011)$/.test(cadenaNumeros) || /(89101112)$/.test(cadenaNumeros) || /(910111213)$/.test(cadenaNumeros)) {
      combinacionGanadora = 9;
    } else if (/(12111213)$/.test(cadenaNumeros) || /(1231213)$/.test(cadenaNumeros) || /(123413)$/.test(cadenaNumeros)) {
      combinacionGanadora = 9;
    }else if (/(110111213)$/.test(cadenaNumeros)) {
      combinacionGanadora = 10;
    }
  }

  return combinacionGanadora;

}
