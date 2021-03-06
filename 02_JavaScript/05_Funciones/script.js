console.log('Hola desde script.js 馃憢');

// FUNCIONES
// Las funciones son un conjunto de instrucciones que podemos mandar a llamar cuando sean requeridas en determinado momento de nuestro c贸digo

// Sint谩xis b谩sica
// function miFuncion(){
//   // C贸digo a ejecutar
// }

// Sint谩xis de funci贸n con par谩metros
// function miFuncionConParametros(param1, param2, param3, ..., paramN){
// // C贸digo a ejecutar de la funci贸n
// // Podemos acceder a param1, param2, param3, ..., paramN
// }

// Para mandar a llamar la funci贸n, tenemos que invocarla simplemente escribiendo su nombre, y en caso que lo requiera, pasarle los par谩metros necesarios
// miFuncion();
// miFuncionConParametros('param1', 12312, true)

function saludar(){
  console.log('Hola desde la funci贸n saludar! 馃憢馃洜');
}
saludar();

function saludarAlumno(alumno){
  console.log('Hola, ' + alumno + ' desde la funci贸n saludarAlumno! 馃憢馃懇馃徎鈥嶐煄?');
}
saludarAlumno('July');
saludarAlumno('Alejandrina');
saludarAlumno('Ra煤l');
saludarAlumno('Max');
saludarAlumno('Gabriela');

// ARROW FUNCTIONS / FUNCIONES FLECHA
// Sint谩xis b谩sica () => {}
// Como buena pr谩ctica se sugiere declararlas como const
// Las funciones flecha hacen la declaraci贸n de funciones m谩s elegante ya que se pueden declarar en una s贸la l铆nea y evitar caracteres como ; y/o como {}

// Funcion tradicional
function funcionTradicional(){
  console.log('Hola desde funci贸n tradicional! 馃憢馃洜');
}
funcionTradicional();

// Funci贸n flecha
const funcionFlecha = () => console.log('Hola desde funci贸n flecha! 馃憢馃徆');
funcionFlecha();

// Funci贸n flecha con par谩metros
const funcionFlechaConParametros = (param1, param2, param3) => {
  console.log('Hola desde funci贸n flecha con param茅tros! 馃憢馃徆');
  console.log(param1, param2, param3);
}
funcionFlechaConParametros('Este es el par谩metro 1', 123123123123, { nombre: 'Parametro 3'});

// EJEMPLO
// Crear una funci贸n que reciba como par谩metros dos n煤meros, e IMPRIMA EN CONSOLA la suma de los mismos

// Funci贸n tradicional
function sumaDosNumeros(num1, num2){
  console.log(num1 + num2);
}
sumaDosNumeros(10, 50); // 60

// Funcion flecha
const sumaDosNumerosFlecha = (num1, num2) => console.log(num1 + num2);
sumaDosNumerosFlecha(10, 50) // 60


// RETURN
// Utilizamos la palabra reservada return para indicar d贸nde finaliza nuestra funci贸n y/o qu茅 es lo que nos debe regresar/retornar
// Todo lo que pongamos DESPU脡S del return, NO se va a ejecutar en el c贸digo
// En las funciones flecha, si la declaraci贸n queda en una s贸la l铆nea, el return queda impl铆cito, es decir, que no se necesita escribir

// EJEMPLO RETURN
// Crear una funci贸n que reciba como par谩metros dos n煤meros, y REGRESE la suma de los mismos

// Funci贸n tradicional
function sumaDosReturn(num1, num2){
  return num1 + num2
}
sumaDosReturn(10, 50) // Esto NO imprime en consola porque la funci贸n solamente retorna la suma, no la imprime en consola
console.log(sumaDosReturn(10, 50)); // 60
let suma = sumaDosReturn(10, 50);
console.log(suma);

// Funci贸n flecha
const sumaDosReturnFlecha = (num1, num2) => num1 + num2;
sumaDosReturnFlecha(10, 50);
console.log(sumaDosReturnFlecha(10, 50));
let sumaFlecha = sumaDosReturnFlecha(10, 50);
console.log(sumaFlecha);

// Mandar a llamar una funci贸n dentro de otra se manera simple
const imprimirEnConsola = (valor) => console.log(valor);
imprimirEnConsola(sumaDosReturnFlecha(10, 50));
