//declarativas
function miFuncion(){
  return 3;
}
miFuncion();
/*------------Ejemplo------------------------*/
function saludarEstudiantea(estudiante){
  console.log(estudiante);
}
saludarEstudiantea("Thania");
//resultado : Thania

//funcion para traer mas de un dato de manera dinamica
function saludarEstudiantea(estudiante){
  console.log(`Hola ${estudiante}`); //usar el acento invertido con AltGr y llave de cierre
}

//expresion
var miFuncion = function(){
  return a + b;
}
miFuncion();


function sumar(a,b){
  var resultado = a + b;
  return resultado;
}
sumar (1,2);
//resultado: 3