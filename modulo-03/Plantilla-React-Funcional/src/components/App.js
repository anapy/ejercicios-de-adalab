import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import CardList from './Item';


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <div class="ouija_container">
        <CardList/>
      </div>
    </div>
    );
  }
}

export default App;
