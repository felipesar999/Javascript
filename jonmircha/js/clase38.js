//
//EJERCICIO15
/*
const convertirBinarioDecimal = (numero = undefined,base = undefined) => {
  if (numero === undefined) return console.warn("No igresaste un numero")
  if (base === undefined) return console.warn("No igresaste la base")
  if (typeof numero !== "number") return console.error(`el valor ingresado ${numero}, NO es un numero`)
  

  if (base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
  }
  if (base === 10){
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 2`)
  }

}

convertirBinarioDecimal()
convertirBinarioDecimal()
convertirBinarioDecimal()
convertirBinarioDecimal()
*/

//EJERCICIO 16
/*
//let desc = prompt("Digite el numero a evaluar")
const descuento = (valor = undefined,desc = undefined) => {
  if (valor === undefined) return console.warn("No ingresaste un valor para el descuento")
  if (desc === undefined) return console.warn("No ingresaste la tasa para el descuento")
  if (typeof valor !== "number") return console.error(`el valor ingresado para el descuento ${numero}, NO es un numero`)
  if (typeof desc !== "number") return console.error(`el valor ingresado para la tasa ${numero}, NO es un numero`)
  let total = valor - (valor * (desc / 100))
  return console.log(`el valor la ${valor} tasa ${desc} da un total de ${total}`)
}

descuento(100,5)
descuento(5,1)
*/


//EJERCICIO 17
/*
const calularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha")
  if (!(fecha instanceof Date)) return console.error("No ingresaste una fecha valida")

  let hoyMenosFecha = new Date().getTime() - fecha.getTime()
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS)

  return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${Math.abs(aniosHumanos)} años, desde ${fecha.getFullYear()}`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calularAnios()
calularAnios({})
calularAnios(false)
calularAnios(new Date())
calularAnios(new Date(1985,9,30))
calularAnios(new Date(2050,9,30))
*/
