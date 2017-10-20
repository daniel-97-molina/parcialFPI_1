var posicion=0;
function posicionar(numJugadores) {
  switch (numJugadores) {
    case 2:
      habilitarDivs([3, 8]);
      break;
    case 3:
      habilitarDivs([2, 4, 8]);
      break;
    case 4:
      habilitarDivs([2, 4, 7, 9]);
      break;
    case 5:
      habilitarDivs([1, 3, 5, 7, 9]);
      break;
    case 6:
      habilitarDivs([2, 4, 6, 7, 8, 10]);
      break;
    case 7:
      habilitarDivs([2, 3, 5, 6, 8, 9, 10]);
      break;
    case 8:
      habilitarDivs([1, 2, 3, 4, 6, 7, 8, 9]);
      break;
    case 9:
      habilitarDivs([1, 2, 3, 4, 6, 7, 8, 9, 10]);
      break;
    case 10:
      habilitarDivs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      break;
  }
}

function habilitarDivs(divs) {
    posicion = Math.floor(Math.random() * (divs.length-1));
  for (var i = 0; i < divs.length; i++) {
      var div=$("#div" + divs[i]);
    div.className = "divJugador";
    jugadores[i].div = div;

   $("#"+div.id+" h6").innerHTML=jugadores[i].nombre;
   $("#"+div.id+" h5").innerHTML="$"+jugadores[i].saldo;
}

  $("#"+jugadores[posicion].div.id+" span").className="boton";
  
  }
