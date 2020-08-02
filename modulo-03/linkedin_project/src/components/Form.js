import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleGenderClick = this.handleGenderClick.bind(this);
  }

  handleCityClick(ev) {
    this.props.handleCities(ev.currentTarget.value);
  }

  handleGenderClick(ev) {
    this.props.handleGenders(ev.currentTarget.value);
  }

  render() {
    const cities = this.props.userInfo.users.map((user, index) => {
      return (
       <div>
        <label htmlform="location">
          <input name="location" type="checkbox" id={index} value={user.city} onClick={this.handleCityClick}/>
          {user.city}
        </label>
      </div>
      )
    })

    const genders = this.props.userInfo.users.map((user, index) => {
      return (
       <div>
        <label htmlform="gender">
          <input name="location" type="checkbox" id={index} value={user.gender} onClick={this.handleGenderClick}/>
          {user.gender}
        </label>
      </div>
      )
    })

    return (
    <form className="form">
      <fieldset>
        <legend>Location</legend>
        {cities}
      </fieldset>
      <fieldset>
        <legend>Gender</legend>
        {genders}
      </fieldset>
    </form>
    )
  }
}

export default Form;
