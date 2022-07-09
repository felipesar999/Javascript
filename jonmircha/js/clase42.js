/*
   Programa una clase llamada Pelicula.

   La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
 - Todos los datos del objeto son obligatorios.
 - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
 - Valida que el título no rebase los 100 caracteres.
 - Valida que el director no rebase los 50 caracteres.
 - Valida que el año de estreno sea un número entero de 4 dígitos.
 - Valida que el país o paises sea introducidos en forma de arreglo.
 - Valida que los géneros sean introducidos en forma de arreglo.
 - Valida que los géneros introducidos esten dentro de los géneros 
    aceptados*.
 - Crea un método estático que devuelva los géneros aceptados*.
 - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
   decimal de una posición.
 - Crea un método que devuelva toda la ficha técnica de la película.
 - Apartir de un arreglo con la información de 3 películas genera 3 
   instancias de la clase de forma automatizada e imprime la ficha técnica 
   de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

//Funcion constructura
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, genero, calificacion }) {
    //Atributos
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.genero = genero;
    this.calificacion = calificacion;

    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarEstreno(estreno)
    this.validarPais(pais)
    this.validarGenero(genero)
    this.validarCalificacion(calificacion)
  }

  static get listaGeneros () {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }

  static generosAceptados(){
    return console.info(`los generos aceptados son  ${Pelicula.listaGeneros.join(",")}`)
  }


  validarCadena(propiedad, str = undefined) {
    if (str === undefined) return console.warn(`la propiedad ${propiedad} ${str}`)
    if (typeof str !== "string") return console.error(`el valor ingresado en la propiedad ${propiedad} ${str} NO es una cadena de texto`)
    return true
  }

  validarNumero(propiedad, num = undefined) {
    if (num === undefined) return console.warn(`la propiedad ${propiedad} ${num}`)
    if (typeof num !== "number") return console.error(`el valor ingresado en la propiedad ${propiedad} ${num} NO es un numero`)
    return true
  }

  validarArray = (propiedad, arr) => {
    if (!arr) return console.warn("El valor que ingresaste no es un arreglo")
    if (!(arr instanceof Array)) return console.error(`el valor ingresado en la propiedad ${propiedad} ${arr} NO es un arreglo`)
    if (arr.length === 0) return console.error(`la propiedad ${propiedad} ${arr} NO tiene datos`)
    for (const num of arr) {
      if (typeof num !== "string") return console.error(`el valor ingresado ${num} NO es una cadena de texto de ${propiedad}`)
    }
    return true
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) return console.error(`la propiedad ${propiedad} ${str} excede el numero de caracteres permitidos ${longitud}`)
    return true
  }

  validarIMDB(id) {
    if (this.validarCadena("IMBD id", id)) {
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
        return console.error(`IMDB id ${id} no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`)
    }
  }

  validarTitulo(tit) {
    if (this.validarCadena("Titulo", tit))
      if (this.validarLongitudCadena("Titulo", tit, 100));
  }

  validarDirector(dir) {
    if (this.validarCadena("Director", dir))
      if (this.validarLongitudCadena("Director", dir, 50));
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno))
      if (!(/^([0-9]){4}$/.test(estreno))) return console.error(`Año de estreno ${estreno} no es valido, debe tener 4 digitos`)
  }

  validarPais(pais) {
    if (this.validarArray("Pais", pais));
  }

  validarGenero(genero) {
    if((this.validarArray("Genero", genero))){
      for (const generos of genero) {
        if (!Pelicula.listaGeneros.includes(generos))console.error(`Genero ${generos} incorrecto`)        
      }
    }
    
    ;
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return (calificacion < 0 || calificacion > 10) 
      ? console.error(`Calificacion ${calificacion} no es valido, debe tener un rango entre 0 y 10`)
      : this.calificacion = calificacion.toFixed(1)
  }

  fichaTecnica(){
    console.info(`Ficha Tecnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais.join("-")}"\nGéneros: "${this.genero.join("-")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`)
  }


}

//Pelicula.generosAceptados()

/*
const peli = new Pelicula({
  id: "tt1234567",
  titulo: "15616",
  director: "El chavo del 8",
  estreno: 2022,
  pais:["Colombia"],
  genero:["Comedy","Sport"],
  calificacion: 8.289
})
*/
//peli.fichaTecnica()

const misPelis = [{
  id: "tt1234567",
  titulo: "15616",
  director: "El chavo del 8",
  estreno: 2022,
  pais:["Colombia"],
  genero:["Comedy","Sport"],
  calificacion: 8.289
},{
  id: "tt1234527",
  titulo: "15616",
  director: "El chavo del 8",
  estreno: 2022,
  pais:["Colombia"],
  genero:["Comedy","Sport"],
  calificacion: 8.289
},{
  id: "tt1234564",
  titulo: "15616",
  director: "El chavo del 8",
  estreno: 2022,
  pais:["Colombia"],
  genero:["Comedy","Sport"],
  calificacion: 8.289
}];

misPelis.forEach(el => {new Pelicula(el).fichaTecnica()
  
});



