import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import NumberList from './NumberList';


class App extends React.Component {
  render() {
    return (
    <div className="App">
        <NumberList/>
    </div>
    );
  }
}

export default App;
