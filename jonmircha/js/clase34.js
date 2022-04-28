let cadena = prompt("Digita la cadena a estudiar")
function contar(a = "vacio"){
    console.log(`La cadena ${a} tiene ${a.length} caracteres`)
  }
  console.log(contar(cadena))


  let substring = ("Hola Mundo",4)
function recortar(a = "vacio",numero = 2){
    console.log(`La cadena ${a} con el numero de caracteres escogidos ${a.slice(0,numero)}`)
  }
  console.log(recortar(substring))