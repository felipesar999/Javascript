//
//EJERCICIO21
/*
    21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    */
const eleCuadrado = (arr = undefined) => {
  if (arr === undefined) return console.warn("El valor que ingresaste no es un arreglo de numeros ")
  if (!(arr instanceof Array)) return console.error("No ingresaste un Array valida")
  if (arr.length === 0) return console.error("El arreglo esta vacio")
  for (const num of arr) {
    if (typeof num !== "number") return console.error(`el valor ingresado ${num}, NO es un numero`)
  }
  const newArr = arr.map(el => el * el)
  return console.info(`Arreglo original ${arr},\n Arreglo elevado al cuadraro ${newArr}`)
}
//eleCuadrado()
//eleCuadrado(true)
//eleCuadrado([5, 6, 7])




//EJERCICIO 22
/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
const arrAltoBajo = (arr = undefined) => {
  if (arr === undefined) return console.warn("El valor que ingresaste no es un arreglo de numeros ")
  if (!(arr instanceof Array)) return console.error("No ingresaste un Array valida")
  if (arr.length === 0) return console.error("El arreglo esta vacio")
  for (const num of arr) {
    if (typeof num !== "number") return console.error(`el valor ingresado ${num}, NO es un numero`)
  }
  let may = 0, men = 0
  for (const num of arr) {
    if (num > may)may = num
    if (num < men)men = num
  }
  return console.info(` El mayor valor de ${arr} es ${may} y menor es ${men}`)
}
//arrAltoBajo([5, 6, 7,8,9,91,-15])




//EJERCICIO 23
/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const arrParImpar = (arr = undefined) => {
  if (arr === undefined) return console.warn("El valor que ingresaste no es un arreglo de numeros ")
  if (!(arr instanceof Array)) return console.error("No ingresaste un Array valida")
  if (arr.length === 0) return console.error("El arreglo esta vacio")
  for (const num of arr) {
    if (typeof num !== "number") return console.error(`el valor ingresado ${num}, NO es un numero`)
  }
  let par = [] , impar = []
  for (const num of arr) {
    if (num % 2 === 0) par.push(num)
    else impar.push(num)
  }

  return console.info(` El array ${arr} tiene pares ${par} e impares ${impar}`)
}

//arrParImpar()
//arrParImpar([5,7,false])
//arrParImpar([5,7,8,2,6,4,9,3])



