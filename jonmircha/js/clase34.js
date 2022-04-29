//
//EJERCICIO1
/*let cadena = prompt("Digita la cadena a estudiar")
function contar(a = "vacio"){

    console.log(`La cadena ${a} tiene ${a.length} caracteres`)
  }
  console.log(contar(cadena))
*/
/*
//EJERCICIO 2
  let hola = "Hola Mundo"
function recortar(a,numero){
    console.log(`La cadena ${a} al modificarla queda ${a.substring(0,numero)}`)
  }
  recortar(hola,8)
  

//EJERCICIO 3

function ejer4(str){
  console.log(str.split(" ")  )
}
ejer4("Hola Que Tal Como Te va, bien y a vos")



//EJERCICIO 4
function ejer4(str, n = undefined) {
  if ((n === undefined) || isNaN(n) || (n = "")){
    console.error("no es un numero")
    return
  }
  if ((n <= 0)) {
    console.log("Error en el numero ingresado")
    return
  } else {
    let texto = ""
    try {
      for (let i = 0; i < n; i++) {
        texto += str + " "
        console.log(`consola ${i + 1} de ${str}`)
      }
      console.log(texto)
    }
    catch (e) {
      console.error("Error de numero " + e)
    }
  }
}
ejer4("Hola Mundo", -1)

*/