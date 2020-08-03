import React from 'react';
import '../stylesheets/App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Relax from "./Relax";
import Counter from "./Counter"


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/Relax">Relax</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Counter}/>
          <Route path="/relax" component={Relax}/>
        </Switch>
      </main>
    </div>);
  }
}

export default App;
