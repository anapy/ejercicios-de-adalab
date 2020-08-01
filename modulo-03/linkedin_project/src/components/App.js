import React from 'react';
import Form from './Form';
import Results from './Results';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.getInfoFromApi = this.getInfoFromApi.bind(this);
    this.state = {
      users: []
    }
    this.getInfoFromApi();
  }
  getInfoFromApi () {
    getDataFromApi()
    .then(data =>
       //console.log(data[0].dob.age)
    data.map( data => this.setState(() => {
      const newUser = {
        name: data.name.first,
        photo: data.picture.large,
        city: data.location.city,
        age: data.dob.age,
        gender: data.gender
      }
      //se repite 50 veces en el estado, ¿es eficiente o hay otra forma de hacerlo?
    return {
      users: [...this.state.users, newUser]
    }
    })
    )
    );
  }

  // saveDataState () {
  //   this.setState ({
  //     name: data.name,
  //     photo: data.photo,
  //     city: data.city,
  //     age: data.age,
  //     gender: data.gender
  //   }),
  // }

  render() {
    return (
    <div className="App">
      <div>
        <Form handleInfo={this.getInfoFromApi}/>
      </div>
      <div>
        <Results userInfo={this.state} />
      </div>
      </div>
    )
  }
}

export default App;
