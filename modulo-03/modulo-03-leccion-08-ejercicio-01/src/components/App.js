import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import Form from './Form';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
      console.log(event.target.id, event.target.value);
      console.log(this.state);
    }

  render() {
    return <div className="App">
      <Form info={this.state} handleChange={this.handleChange}/>
      <Card info={this.state}/>
    </div>;
  }
}

export default App;
