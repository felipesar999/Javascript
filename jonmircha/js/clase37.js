//
//EJERCICIO9
/*
const esPrimo = (numero = undefined) => {
  if (numero === undefined)return console.warn("No igresaste un numero")
  // Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return true;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
}
let primo = prompt("Digite el numero primo a evaluar")
console.log(`el numero ${primo} es ${esPrimo(primo)}`)
*/

/*
const esPrimo = (numero = undefined) => {
  console.log(typeof(numero))
  if (numero === undefined) return console.warn("No igresaste un numero")
  if (typeof numero !== "number") return console.error(`el valor ingresado ${numero}, NO es un numero`)
  if (numero === 0) return console.error(`el numero no puede ser 0`)
  if (numero === 1) return console.error(`el numero no puede ser 1`)
  if (Math.sign(numero) === -1) return console.error(`el numero no puede ser negativo`)
  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true
      break
    }
  }
  return (divisible)
    ? console.log(`el numero ${numero} NO es Primo`)
    : console.log(`el numero ${numero} SI es Primo`)
}
//let primo = prompt("Digite el numero primo a evaluar")
let primo = 7
esPrimo(primo)
//console.log(`el numero ${primo} es ${esPrimo(primo)}`)
*/

//EJERCICIO 2
/*
let par = prompt("Digite el numero a evaluar")
const esPar = (num = undefined) => {
  if (num8 === undefined) return console.warn("No igresaste un numero")
  if (isNaN(num)) console.log("El dato ingresado no es un numero")
  else {
    if (num % 2 === 0) console.log(`el numero ${num} es par`)
    else console.log(`el numero ${num} NO es par`)
  }
}
esPar(par)
*/

//EJERCICIO 3
/*
let ce_fa = prompt("Digite 'C' para convertir a Farenheith o 'F' para convertir a celsius")
let grad = prompt("Digite los grados a convertir")

const convertir = (c,g) =>{
  console.log(c)
  console.log(g)
  if ((c.toUpperCase()  !== "C")&&(c.toUpperCase() !== "F")){
    console.log(`para convertir es 'F' o 'C'\n Animal`)
  }
  else if (isNaN(g)){
    console.log(`Los grados son en numero\n Animal`)
  }
  //else if (typeof c !== "number") console.log(`Los grados son en numero\n Animal`)
  else {
    c.toUpperCase() === "C"
    ? console.log(`los grados ${g} en Farenheith son ${(g * 9/5) + 32}°F`)
    : console.log(`los grados ${g} en Celcius son ${(g - 32) * 5/9}°F`)
  }

}
convertir(ce_fa,grad)
*/
