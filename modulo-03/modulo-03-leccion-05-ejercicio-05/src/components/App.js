import React from 'react';
import CitySelector from './CitySelector';
import '../stylesheets/App.css';

const App = () => {
  const handleCitySelector = city => {
    console.log(`Me han seleccionado`, city);
  }
  return (
    <div className="App">
      <CitySelector handleCity={handleCitySelector}/>
      <p>Ciudad seleccionada:</p>
    </div>
    ); 
  } 


export default App;
