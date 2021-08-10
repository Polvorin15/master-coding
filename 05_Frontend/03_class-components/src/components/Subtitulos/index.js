import React from 'react';
import './style.css';

class Subtitulos extends React.Component {


  constructor(props) {
    super(props);

    this.state = {

      nombre: props.nombre,
      direccion: props.direccion,
      telefono: props.telefono,
      correo: props.correo,
      color: props.color,
    }

  }


  render() {
    return <div className="subtitulos-usuario" style={{ background: this.state.color }}>
              <p>nombre: { this.state.nombre }</p>
              <p>direccion: { this.state.direccion }</p>
              <p>Telefóno: { this.state.telefono }</p>
              <p>Correo: { this.state.correo }</p>

           </div>
  }
}

export default Subtitulos;
