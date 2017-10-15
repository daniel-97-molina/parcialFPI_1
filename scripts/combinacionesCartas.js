var combinacionGanadora = 0;
var cadenaFamilias;
var cadenaNumeros;

function combinacionCartasGenerales(posicionJugador) {

  posiblesCombinaciones([0, 1, 2, posicionJugador]); //4
  posiblesCombinaciones([1, 2, 3, posicionJugador]); //6
  posiblesCombinaciones([2, 3, 4, posicionJugador]); //7
  posiblesCombinaciones([0, 2, 4, posicionJugador]); //2
  posiblesCombinaciones([0, 1, 3, posicionJugador]); //1
  posiblesCombinaciones([0, 1, 4, posicionJugador]); //10
  posiblesCombinaciones([0, 3, 4, posicionJugador]);
  posiblesCombinaciones([1, 2, 4, posicionJugador]);
  posiblesCombinaciones([0, 2, 3, posicionJugador]);
  posiblesCombinaciones([1, 3, 4, posicionJugador]);

  //console.log("familiaCartaGeneral "+vectorCartasGenerales[0].familia+"   numeroCartaGeneral "+vectorCartasGenerales[0].numero);
}


function posiblesCombinaciones(vectorCombinaciones) {
  var familiasCartasGenerales = [];
  var numerosCartasGenerales = [];
  var familiaCarta1Jugador = jugadores[(vectorCombinaciones[3])].carta1.familia;
  var numeroCarta1Jugador = jugadores[(vectorCombinaciones[3])].carta1.numero;
  var familiaCarta2Jugador = jugadores[(vectorCombinaciones[3])].carta2.familia;
  var numeroCarta2Jugador = jugadores[(vectorCombinaciones[3])].carta2.numero;

  for (var t = 0; t < 3; t++) {
    familiasCartasGenerales[t] = vectorCartasGenerales[(vectorCombinaciones[t])].familia;
    numerosCartasGenerales[t] = vectorCartasGenerales[(vectorCombinaciones[t])].numero;
    //console.log(vectorCartasGenerales[t].familia);
    //console.log(vectorCartasGenerales[t].numero);

  }
  cadenaFamilias = familiasCartasGenerales[0] + "" + familiasCartasGenerales[1] + "" + familiasCartasGenerales[2] + "" + familiaCarta1Jugador + "" + familiaCarta2Jugador;
  cadenaNumeros = numerosCartasGenerales[0] +""+ numerosCartasGenerales[1] +""+ numerosCartasGenerales[2] +""+ numeroCarta1Jugador +""+ numeroCarta2Jugador;




  //console.log("Familias" + familiasCartasGenerales[0] + "   " + familiasCartasGenerales[1] + "   " + familiasCartasGenerales[2] + "   " + familiaCarta1Jugador + "   " + familiaCarta2Jugador);
  // 5 cartas del mismo palo (misma familia)
  if ((familiasCartasGenerales[0] === familiasCartasGenerales[1]) && (familiasCartasGenerales[0] === familiasCartasGenerales[2]) && (familiasCartasGenerales[0] === familiaCarta1Jugador) && (familiasCartasGenerales[0] === familiaCarta2Jugador)) {
    console.log("5 cartas del mismo palo (misma familia)");
    //console.log(cadenaFamilias);
    combinacionGanadora = 1;
  }

  //Este if  con expresion regular equivale al anterior
  // 5 cartas del mismo palo (misma familia)
  if (/[0-3]{5}$/.test(cadenaFamilias)) {
    console.log("5 cartas del mismo palo (misma familia) (2)");
    combinacionGanadora = 1;
  }
  //console.log(cadenaFamilias);



  //console.log("Otra" + familiasCartasGenerales[0] + "   " + familiasCartasGenerales[1] + "   " + familiasCartasGenerales[2] + "   " + familiaCarta1Jugador + "   " + familiaCarta2Jugador);
  //4 cartas con el mismo numero y una diferente
  if ((numerosCartasGenerales[0] === numerosCartasGenerales[1]) && (numerosCartasGenerales[0] === numerosCartasGenerales[2]) && (numerosCartasGenerales[0] === numeroCarta1Jugador)) {
    console.log("4 NUMEROS DE CARTA IGUALES Y UNA NO");
    combinacionGanadora = 2;
  } else if ((numerosCartasGenerales[0] === numerosCartasGenerales[1]) && (numerosCartasGenerales[0] === numerosCartasGenerales[2]) && (numerosCartasGenerales[0] === numeroCarta2Jugador)) {
    console.log("4 NUMEROS DE CARTA IGUALES Y UNA NO");
    combinacionGanadora = 2;
  } else if ((numerosCartasGenerales[1] === numerosCartasGenerales[2]) && (numerosCartasGenerales[1] === numeroCarta1Jugador) && (numerosCartasGenerales[1] === numeroCarta2Jugador)) {
    console.log("4 NUMEROS DE CARTA IGUALES Y UNA NO");
  } else if ((numerosCartasGenerales[0] === numerosCartasGenerales[1]) && (numerosCartasGenerales[0] === numeroCarta1Jugador) && (numerosCartasGenerales[0] === numeroCarta2Jugador)) {
    console.log("4 NUMEROS DE CARTA IGUALES Y UNA NO");
    combinacionGanadora = 2;
  } else if ((numerosCartasGenerales[0] === numerosCartasGenerales[2]) && (numerosCartasGenerales[0] === numeroCarta1Jugador) && (numerosCartasGenerales[0] === numeroCarta2Jugador)) {
    console.log("4 NUMEROS DE CARTA IGUALES Y UNA NO");
    combinacionGanadora = 2;
  }


  //Este if  con expresion regular equivale al anterior
  //4 cartas con el mismo numero y una diferente
  if (/[1-13]{4}$/.test(cadenaNumeros)) {
    console.log("4 NUMEROS DE CARTA IGUALES Y UNA NO (2)");
    combinacionGanadora = 2;
  }





  /*
//Expresion regular para digitos 5 consecutivos
    if (/^\d{5}$/.test(12345)) {
      console.log("que interante esto");
    }
    if (/^\d{5}$/.test(54321)) {
      console.log("que interante esto2");
    }
    if (/^\d{5}$/.test(12453)) {
      console.log("que interante esto3");
    }
    if (/^\d{5}$/.test(13245)) {
      console.log("que interante esto4");
    }


    //console.log("que interante esto2");
//expresion regualr para un valor repetido n veces
    if (/(4){5}$/.test(44454)) {
      //console.log("vamos a terminar el proyecto");
    }
  */





  return combinacionGanadora;

  //revisar si se puede mandar los array asi
  //combinacionCartasGanadoras(familiasCartasGenerales, numerosCartasGenerales, familiaCarta1Jugador, numeroCarta1Jugador, familiaCarta2Jugador, numeroCarta2Jugador);

}



//function combinacionCartasGanadoras(familiasGenerales, numerosGenerales, familiaCarta1, numenroCarta1, familiaCarta2, numeroCarta2) {

//}





/*function reconocerGanadora(numero) {
  switch (numero) {
    case 1:
      ///combinacionCartasGenerales(posicionJugador);



      break;
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

      break;
    case 10:

      break;
  }
}*/
