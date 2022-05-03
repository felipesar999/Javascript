//
//EJERCICIO1
/*
let cadena = prompt("Digite aqui su cadena ejercicio 1")
function revertir(a = ""){
  if (!a) {
    return console.error("Cadena Vacia")
  }
  else if (!isNaN(a)){
    return console.warn("No debe ser numero")
    }
  else {
    let len = a.length
    let str_rever = ""
    for (let i=a.length; i >= 0; i--){
      str_rever += a.charAt(i)
    }
    return str_rever    

  }

    //console.log(`La cadena ${a} tiene ${a.length} caracteres`)
  }
  console.log("La cadena normal es " + cadena +"\n\n")
  console.log("La cadena revertida es " + revertir(cadena) +"\n\n")
  */
  


//EJERCICIO 2
/*
  let strin = prompt("Digite aqui donde buscar")
  let busca = prompt("Digite aqui que buscar")
  function repetir(str,b){
    let repet = str.split(" ") 
    let conta = 0
    repet.forEach(a => {
      if (a === b)
      conta++      
    })
    console.log(`La palabra ${b} se repite ${conta} veces`)
  }
  repetir(strin,busca)
*/
/*
//EJERCICIO 3

let pali = prompt("Digite aqui el palindromo a buscar")
pali === revertir(pali)
  ? console.log("La palabra es un palidromo")
  : console.log("La palabra no es un palidromo") 
*/


//EJERCICIO 4
const eliminarCaracter = (texto ="" , patron ="") => 
  (!texto)
  ? console.warn("No ingresaste un texto")
  :(!patron)
    ? console.warn("No ingresaste un patron")
    : console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminarCaracter()
eliminarCaracter("xyz1,xyz2,Xyz3,xyZ4,XYZ5")
eliminarCaracter("xyz1,xyz2,Xyz3,xyZ4,XYZ5","xyz")



