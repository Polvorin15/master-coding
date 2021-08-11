console.log("Hola desde app 👋👋👋");


console.log(1);
console.log(2);
console.log(3);


console.log(1);
setTimeout(()=> console.log(2), 3000);
console.log(3);

const terceraFuncion = () => {
  setTimeout(() => console.log('saludos desde terceraFuncion'), 3000);
}

const segundaFuncion = () => {
  terceraFuncion();
  console.log('saludos desde segundaFuncion');
}

const primeraFuncion = () => {
  segundaFuncion();
  console.log('saludos desde primeraFuncion');
}

primeraFuncion();


const mostrarDosMensajes = (funcion1, funcion2) => {
  funcion1();
  funcion2();
}

const yoSoyElCallback1 =() => {
  console.log('hola desde el callback 1');
}

const yoSoyElCallback2 =() => {
  console.log('hola desde el callback 2');
}

mostrarDosMensajes(yoSoyElCallback1, yoSoyElCallback2)
console.log('hola despues de mostrar mensaje');

const saludarUsuario = (nombreUsuario, callback) => {
  callback(nombreUsuario)
}

const callbackBienvenida = (nombreUsuario) => {
  console.log('Bienvenida,' + nombreUsuario);
}

const callbackDespedida = (nombreUsuario) => {
  console.log('Adios,' + nombreUsuario);
}

saludarUsuario('Eyra', callbackBienvenida);
saludarUsuario('Eyra', callbackDespedida);
