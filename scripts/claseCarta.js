function Cartas() {

  this.familia = Math.floor(Math.random() * 3);
  this.numero = Math.floor(Math.random() * 13 + 1);
  this.carta = this.numero + (13 * this.familia);

  if (typeof Cartas._iniciado === undefined) {
    Cartas.prototype.generarRuta = function() {

      var nombreImagen = "images/" + carta + ".png";
      return nombreImagen;
    };

  }
  Cartas._iniciado = true;

}
