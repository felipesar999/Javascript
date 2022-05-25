//
//EJERCICIO18
/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
/*
const tipoDatos = (cadena = "") => {
  if (cadena === "") return console.warn("No ingresaste datos")
  if (typeof cadena !== "string") return console.error(`el valor ingresado para contar letras ${cadena}, NO es un string`)
  let vocales = 0,
    consonantes = 0

  cadena = cadena.toLocaleLowerCase()

  for (const letra of cadena) {

    //expresion regular letras en minuscula
    if (/[aeiouáéíóúÜü]/.test(letra)) vocales++

    //expresion regular consonantes en minuscula
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
  }
  console.log(`la palabra "${cadena}" tiene ${vocales} vocales y ${consonantes} consonantes`)
  console.log({
    cadena,
    vocales,
    consonantes
  })

}
//tipoDatos("Hola Mundo")
*/

//EJERCICIO 19
/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
/*
const validarNombre = (nombre = "") => {
  if (nombre === "") return console.warn("No ingresaste datos")
  if (typeof nombre !== "string") return console.error(`el valor ingresado para contar letras ${nombre}, NO es un string`)

  //expresion regular para los nombres
  let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜÜ\s]+$/g.test(nombre)

  return (expReg)
    ? console.info(`el nombre ingresado "${nombre}" es valido`)
    : console.info(`el nombre ingresado "${nombre}" NO es valido`)

}

validarNombre("Felipe Zapata")
*/

//EJERCICIO 20
/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
/*
const validarEmail = (email = "") => {
  if (email === "") return console.warn("No ingresaste un email")
  if (typeof email !== "string") return console.error(`el valor ingresado para contar letras ${email}, NO es un string`)

  //expresion regular para los nombres
  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

  return (expReg)
    ? console.info(`el email "${email}" es valido`)
    : console.info(`el email "${email}" NO es valido`)

}
*/



