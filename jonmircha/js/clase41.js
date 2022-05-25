//
//EJERCICIO21
/*
    24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    */
const ordenar = (arr = undefined) => {
  if (arr === undefined) return console.warn("El valor que ingresaste no es un arreglo de numeros ")
  if (!(arr instanceof Array)) return console.error("No ingresaste un Array valida")
  if (arr.length === 0) return console.error("El arreglo esta vacio")
  for (const num of arr) {
    if (typeof num !== "number") return console.error(`el valor ingresado ${num}, NO es un numero`)
  }
  let asc = arr.map(el => el).sort()
  let desc = arr.map(el => el).sort().reverse()
  return console.info(`Desorganizado el array ${arr},\n Arreglo ascendente ${asc}\n Arreglo descendiente ${desc}`)
}
//ordenar([7, 5, 7, 8, 6])
//eleCuadrado(true)
//eleCuadrado([5, 6, 7])




//EJERCICIO 22
/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
const filtrar = (arr = undefined) => {
  if (arr === undefined) return console.warn("El array ingresado esta vacio ")
  if (!(arr instanceof Array)) return console.error("No ingresaste un Array valida")
  if (arr.length === 0) return console.error("El arreglo esta vacio")
  //forma normal
  let duplicados = arr.filter((value, index, self) => self.indexOf(value) === index)
  //nueva forma con metodo nuevo llamado set
  let duplicado = [... new Set(arr)]
  return console.info(`El array original ${arr},\nArreglo filtrado normal ${duplicados}\nArreglo filtrado nueva forma ${duplicado}`)
}
//filtrar(["x", 10, "x", 2, "10", 10, true, true])




//EJERCICIO 23
/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
const arrProm = (arr = undefined) => {
  if (arr === undefined) return console.warn("El valor que ingresaste no es un arreglo de numeros ")
  if (!(arr instanceof Array)) return console.error("No ingresaste un Array valida")
  if (arr.length === 0) return console.error("El arreglo esta vacio")
  for (const num of arr) {
    if (typeof num !== "number") return console.error(`el valor ingresado ${num}, NO es un numero`)
  }
  let prom = 0
  for (const num of arr) {
    prom += num
  }
  prom = prom / arr.length
  /* forma jhon mircha
    arr.reduce((total,num,indexm,arr) => {
      total += num
      if (index === arr.length -1)return `el promedio de ${arr.join(" + ")} es ${total / arr.length}`
      else return total
    })
*/
  return console.info (`El promedio del array ${arr.join (" + ")} es ${prom} `)
}

//arrParImpar()
//arrProm([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
//arrProm([5,7,8,2,6,4,9,3])



