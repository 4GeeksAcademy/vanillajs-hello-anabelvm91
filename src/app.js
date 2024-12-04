window.onload = function() {
  let pronombres = ["el", "la", "nuestro", "mi", "tu"];
  let adjetivos = ["divertido", "genial", "mágico", "fantástico", "colorido"];
  let sustantivos = [
    "juguete",
    "juguetería",
    "muñeco",
    "juguetón",
    "juegolandia"
  ];

  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < sustantivos.length; k++) {
        let nombreDominio =
          pronombres[i] + adjetivos[j] + sustantivos[k] + ".com";

        console.log(nombreDominio);
      }
    }
  }
};
