
//
//EJERCICIO9
/*
const esPrimo = numero => {
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

//EJERCICIO 2
/*
let par = prompt("Digite el numero a evaluar")
const esPar = num => {
  if (isNaN(num)) console.log("El dato ingresado no es un numero")
  else {
    if (num % 2 === 0) console.log(`el numero ${num} es par`)
    else console.log(`el numero ${num} NO es par`)
  }
}
esPar(par)
*/

//EJERCICIO 3

let ce_fa = prompt("Digite 'C' para convertir a Farenheith o 'F' para convertir a celsius")
let grad = prompt("Digite los grados a convertir")

const convertir = (c,g) =>{
  console.log(c)
  if ((c !== "C")){
    console.log(`para convertir es 'F' o 'C'\n Animal`)
  }
  else if (isNaN(g)){
    console.log(`Los grados son en numero\n Animal`)
  }
  else {
    c === "C"
    ? console.log(`los gracos ${g} en Farenheith son ${g * 32}`)
    : console.log(`los gracos ${g} en Celsius son ${g / 32}`)
  }

}

convertir(ce_fa,grad)






