import React from 'react';
import Form from './Form';
import Results from './Results';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cities: [],
      gender: []
    }
    this.getInfoFromApi = this.getInfoFromApi.bind(this);
    this.handleCities = this.handleCities.bind(this);
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
      users: [...this.state.users, newUser],
    }
    }))
    );
  }

  handleCities(city) {
    console.log(this.state);
    this.setState(() => { return {
      users: [...this.state.users, this.state.users.filter(user => user.city === city)]
    }
  }
    )
    console.log(this.state.users);
  }
    // }
    //   this.setState(() => {
    //   return {
    //     users: [...this.state.users, usersByCities]
    // };
    // }
  //   };
    
    
  //   console.log(this.state.users);
  // }

  render() {
    return (
      <div className="App">
        <div>
          <Form
          handleCities={this.handleCities}
          userInfo={this.state}
          />
        </div>
        <div>
          <Results userInfo={this.state} />
        </div>
      </div>
    )
  }
}

export default App;
