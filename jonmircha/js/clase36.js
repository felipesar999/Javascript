//
//EJERCICIO9
/*
const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500))
aleatorio()
*/

//EJERCICIO 2
/*
let strin = prompt("Digite el numero a evaluar")
function capicua(str) {
  if (isNaN(str)) {
    return ("el dato ingresado no es un numero")
  }
  else {
    if (str === (str.split("").reverse().join(""))) {
      console.log(`el numero ${str} es capicua`)
    }
    else console.log(`el numero ${str} NO es capicua`)
  }
}
capicua(strin)
*/

//EJERCICIO 3
/*
let fact = prompt("Digite el numero a evaluar su factorial")
function factorial(num) {
  if (isNaN(num)) {
    console.log("el dato ingresado no es un numero")
  }
  else {
    let calc 
    for (let i = 1; i <= num; i++) {
      if (i === 1){
        calc = 1
      }
      else calc *= i
    }
    console.log(`el factorial de ${num} es ${calc}`)
  }
}
factorial(fact)
*/

