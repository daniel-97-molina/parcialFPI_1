function Cartas() {
  this.familia = Math.floor(Math.random() * 3 + 0);
  this.numero = Math.floor(Math.random() * 13 + 1);
  if (typeof Cartas._iniciado == "undefined") {
    Cartas.prototype.generarRuta = function() {
      var carta = numero + (13 * familia);
      var nombreImagen = "images/" + carta + ".png";
      return nombreImagen;
    };
  }
  Car._iniciado = true;
}
