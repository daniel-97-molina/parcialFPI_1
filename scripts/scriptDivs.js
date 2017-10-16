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
      habilitarDivs([2, 4, 7, 8]);
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


//  $("#div"+divs[i]+" .divCarta1").style.backgroundImage="url("+jugadores[i].carta1.generarRuta()+")";
// $("#div"+divs[i]+" .divCarta1").style.display="inline-block";
//
//  $("#div"+divs[i]+" .divCarta2").style.backgroundImage="url("+jugadores[i].carta2.generarRuta()+")";
// $("#div"+divs[i]+" .divCarta2").style.display="inline-block";


  }
    console.log(posicion);
  $("#"+jugadores[posicion].div.id+" span").className="boton";
  
  }
/*si la posicion por ejemplo es: 4 y hay 5 jugadores
    entonses la variable turno seria turno=posicion + 3;
    pero entonses seria igual a 6 y el array solo tiene 4 posiciones......que hacer??
    if(posicion===jugadores.lenght){
    turno=2;                                
                                    
    }
    if(posicion===jugadores.lenght-1){//es decir si la posicion es 3 y hay 5 jugadores(ultima posicion : 4)
    turno=1;                  
                                    
    }
    if(posicion===jugadores.lenght-2){//es decir si la posicion es 2 y hay 5 jugadores(ultima posicion : 4)
    turno=0;
                                    
   }
  
*/