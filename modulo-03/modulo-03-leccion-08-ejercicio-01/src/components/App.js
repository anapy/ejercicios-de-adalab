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
      language: '',
      age: '',
      genres: {
        genre1: '',
        genre2: '',
        genre3: '',
        error: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGender = this.handleGender.bind(this);

  }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
      console.log(event.target.id, event.target.value);
      console.log(this.state);
    }

    handleGender(value){
      if(this.state.genres.genre1 === ''){
        this.setState((prevState) => {
          return {
            genres: {...prevState.genres, ['genre1']: value}
          }
        });
      } else if(this.state.genres.genre2 === '') {
        this.setState((prevState) => {
          return {
            genres: {...prevState.genres, ['genre2']: value }
          }
        });
      } else if(this.state.genres.genre3 === '') {
        this.setState((prevState) => {
          return {
            genres: {...prevState.genres, ['genre3']: value }
          }
        });
      } else {
        this.setState((prevState) => {
          return {
            genres: {...prevState.genres, ['error']: 'Only three genres could be checked' }
          }
        });
      }
    }

  render() {
    return <div className="App">
      <Form info={this.state} handleChange={this.handleChange} handleGender={this.handleGender}/>
      <Card info={this.state}/>
    </div>;
  }
}

export default App;
