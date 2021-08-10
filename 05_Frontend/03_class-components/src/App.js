import ComponenteClase from './components/ComponenteClase';
import Tarjeta from './components/Tarjeta/';
import Subtitulos from './components/Subtitulos/';

function App() {
  return (
    <>
      <h1>Hola desde App! 👋</h1>
      <ComponenteClase />
      <Tarjeta nombre="Alejandro" direccion="Querétaro" telefono="4422053149" correo="polvorin15@gmail.com" />
      <Tarjeta nombre="Alexa" direccion="Querétaro" telefono="4421851899" correo="alexa@gmail.com" color="royalblue"/>
      <Tarjeta nombre="Ana Sofia" direccion="Argentina" telefono="5569842111" correo="anasofia@yahoo.com" color="tomato"/>
      <Subtitulos nombre="Fidel Bacardi Añejo" direccion="Cuba libre" telefono="01800bacardi" correo="soycubalibre@gmail.com" color="cyan"/>
    </>
  );
}

export default App;
