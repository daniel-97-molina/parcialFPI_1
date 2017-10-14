function Cartas() {

  this.familia = Math.floor(Math.random() * 3 + 0);
  this.numero = Math.floor(Math.random() * 13 + 1);
  this.carta = this.numero + (13 * this.familia);

//  if (typeof Cartas._iniciado === undefined) {
    Cartas.prototype.generarRuta = function() {

      var nombreImagen = "../images/" + this.carta + ".png";
      return nombreImagen;
    };

//  }
//  Cartas._iniciado = true;

}
