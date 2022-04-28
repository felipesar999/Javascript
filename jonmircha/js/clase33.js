import saludar,{Saludar,PI,usuario} from "./clase33constantes.js"
import {aritmetica as calculos} from "./clase33aritmetica.js"

console.log("Modulos en clase 33")

console.log(PI, usuario)

//console.log(aritmetica.sumar(1,3))
console.log(`La suma da ${calculos.sumar(1,3)}`)
console.log(`La suma da ${calculos.restar(8,3)}`)

saludar()

let saludo = new Saludar
saludo