export const PI = Math.PI

export let usuario = "jon";

//unica forma de exportar por defecto 
/*const password = "qwerty";
export default password
*/

export default function saludar(){
    console.log("Hola, un saludo de funcion +ES6")
}

export class Saludar{
    constructor(){
        console.log("Hola Mundo en class +ES6")
    }
}