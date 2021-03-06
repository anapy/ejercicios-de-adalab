import React from 'react';

const CitySelector = props => {
  console.log(props);
  const handleCityClick = ev => {
    console.log(`Me han seleccionado`, ev.currentTarget.value);
    props.handleCity(ev.currentTarget.value);
  }
  return (
    <div>
      <select onChange={handleCityClick}>
        <option value="Málaga">Madrid</option>
        <option value="Málaga">Málaga</option>
        <option value="Vigo">Vigo</option>
        <option value="Buenos Aires">Buenos Aires</option>
      </select>
    </div>
    ); 
}


export default CitySelector;
