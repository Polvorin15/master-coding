console.log('Hola desde pizzas ponchito! ๐๐๐');

console.log(document);


const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');
const entrada = document.getElementById('entrada');
const boton = document.getElementById('boton');
const respuesta = document.getElementById('respuesta');

console.log(titulo, subtitulo, entrada, boton, respuesta);

const handleClick = () => {
  console.log('Has presionado click en el botรณn cambiar! ๐ฒ')

  if(entrada.value === '') {
    alert('selecciona tu pizza')
  }
   else {
    titulo.innerHTML = 'PIZZAS PONCHITO ๐๐๐';
    subtitulo.innerHTML = 'deliciosas pizzas';

    if(entrada.piรฑa = '<img src="https://as00.epimg.net/epik/imagenes/2017/10/31/portada/1509469785_213048_1509471547_noticia_normal.jpg" alt="" width="8%">') {
      alert('selecciona tu pizza')
    }
     else {
      titulo.innerHTML = 'PIZZAS PIรA ๐๐๐';
      subtitulo.innerHTML = 'deliciosas pizzas';



    titulo.style.color = 'red';
    subtitulo.style.fontSize = '30px';


    console.log(entrada.value);

    respuesta.innerHTML = entrada.value
    respuesta.style.color = 'blue';
    respuesta.style.fontSize = '40px';
  }

};


boton.addEventListener('click', handleClick);
