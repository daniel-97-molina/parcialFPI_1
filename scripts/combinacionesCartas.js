//Metodo para establecer las 10 formas diferentes como se puede tomar 3 de las 5 cartas comunes
//Devuelve la mejor de las combinaciones de cartas que se pudo formar de todas por jugador
function combinacionCartasGenerales(posicionJugador) {
  var mejorCombinacion = 0;
  var resultadoCombinaciones = [];

  resultadoCombinaciones[0] = posiblesCombinaciones([0, 1, 2, posicionJugador]); //4
  resultadoCombinaciones[1] = posiblesCombinaciones([1, 2, 3, posicionJugador]); //6
  resultadoCombinaciones[2] = posiblesCombinaciones([2, 3, 4, posicionJugador]); //7
  resultadoCombinaciones[3] = posiblesCombinaciones([0, 2, 4, posicionJugador]); //2
  resultadoCombinaciones[4] = posiblesCombinaciones([0, 1, 3, posicionJugador]); //1
  resultadoCombinaciones[5] = posiblesCombinaciones([0, 1, 4, posicionJugador]); //10
  resultadoCombinaciones[6] = posiblesCombinaciones([0, 3, 4, posicionJugador]);
  resultadoCombinaciones[7] = posiblesCombinaciones([1, 2, 4, posicionJugador]);
  resultadoCombinaciones[8] = posiblesCombinaciones([0, 2, 3, posicionJugador]);
  resultadoCombinaciones[9] = posiblesCombinaciones([1, 3, 4, posicionJugador]);

  for (var w = 0; w < resultadoCombinaciones.length; w++) {
    if (resultadoCombinaciones[w] > mejorCombinacion) {
      mejorCombinacion = resultadoCombinaciones[w];
    }
  }
  return mejorCombinacion;

}



//Metodo para establecer las 10 combinaciones posibles para ganar
//Devuelve en orden ascendente la combinacion de cartas que se pudo formar
function posiblesCombinaciones(vectorCombinaciones) {

  var combinacionGanadora = 0;
  var arrayFamiliasCartas = [];
  var arrayNumerosCartas = [];
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


  //COMBINACION 2: Pareja
  //Una pareja de cartas iguales


  //COMBINACION 3: Doble pareja
  //Dos parejas de cartas iguales


  //COMBINACION 4: Trío
  //3 cartas iguales


  //COMBINACION 5: Escalera
  //5 cartas sucesivas que no son del misma familia
  if (/(12345)$/.test(cadenaNumeros) || /(23456)$/.test(cadenaNumeros) || /(34567)$/.test(cadenaNumeros) || /(45678)$/.test(cadenaNumeros) || /(56789)$/.test(cadenaNumeros) || /(678910)$/.test(cadenaNumeros)) {
    console.log("5 cartas sucesivas que no son del misma familia) (2)");
    combinacionGanadora = 5;
  } else if (/(7891011)$/.test(cadenaNumeros) || /(89101112)$/.test(cadenaNumeros) || /(910111213)$/.test(cadenaNumeros) || /(110111213)$/.test(cadenaNumeros)) {
    console.log("5 cartas sucesivas que no son del misma familia (3)");
    combinacionGanadora = 5;
  }


  //COMBINACION 6: familia
  // 5 cartas del misma familia
  if (/(0){5}$/.test(cadenaFamilias) || /(1){5}$/.test(cadenaFamilias) || /(2){5}$/.test(cadenaFamilias) || /(3){5}$/.test(cadenaFamilias)) {
    console.log("5 cartas del misma familia (2)");
    combinacionGanadora = 6;
  }


  //COMBINACION 7: Full
  /*3 cartas iguales más otras 2 iguales. Es decir, un trio y una pareja.
  En caso de empate, gana el que tiene el trio más alto*/


  //COMBINACION 8: Poker
  //4 cartas con el mismo numero y una diferente




  //COMBINACION 9:Escalera familia
  //5 cartas consecutivas del misma familia
  if (/(0){5}$/.test(cadenaFamilias) || /(1){5}$/.test(cadenaFamilias) || /(2){5}$/.test(cadenaFamilias) || /(3){5}$/.test(cadenaFamilias)) {
    if (/(12345)$/.test(cadenaNumeros) || /(23456)$/.test(cadenaNumeros) || /(34567)$/.test(cadenaNumeros) || /(45678)$/.test(cadenaNumeros) || /(56789)$/.test(cadenaNumeros) || /(678910)$/.test(cadenaNumeros)) {
      console.log("5 cartas consecutivas del misma familia (2)");
      combinacionGanadora = 9;
    } else if (/(7891011)$/.test(cadenaNumeros) || /(89101112)$/.test(cadenaNumeros) || /(910111213)$/.test(cadenaNumeros)) {
      console.log("5 cartas consecutivas del misma familia (3)");
      combinacionGanadora = 9;
    }
  }



  //COMBINACION 10:Escalera Real
  //5 cartas seguidas del misma familia desde el 10 al As
  if (/(0){5}$/.test(cadenaFamilias) || /(1){5}$/.test(cadenaFamilias) || /(2){5}$/.test(cadenaFamilias) || /(3){5}$/.test(cadenaFamilias)) {
    if (/(110111213)$/.test(cadenaNumeros)) {
      console.log("5 cartas seguidas del misma familia desde el 10 al As (2)");
      combinacionGanadora = 10;
    }
  }



  return combinacionGanadora;

}
