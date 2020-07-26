import React from 'react';


class Destiny extends React.Component {
  onChangeListener = ev  => {
    let city = ev.currentTarget.value;
    alert(`Tu destino es viajar a ${city}, siendo ${city} la ciudad seleccionada.`);
  }
  render() {
    return (
      <div>Selecciona una ciudad: 
        <select name="select" onChange={this.onChangeListener}>
          <option>Buenos Aires</option>
          <option>Sydney</option>
          <option>Praga</option>
          <option>Boston</option>
          <option>Tokio</option>
        </select>
      </div>
    
    )
  }
}

export default Destiny;
