import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.props.handleCities(ev.currentTarget.value);
  }

  render() {
    const cities = this.props.userInfo.users.map((user, index) => {
      return (
       <div>
        <label htmlform="location">
          <input name="location" type="checkbox" id={index} value={user.city} onClick={this.handleClick}/>
          {user.city}
        </label>
      </div>
      )
    })

    const genders = this.props.userInfo.users.map((user, index) => {
      return (
       <div>
        <label htmlform="gender">
          <input name="location" type="checkbox" id={index} value={user.gender}/>
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
        <div>
        <label htmlform="gender">
          <input name="location" type="checkbox" id="male" value="male"/>
          Male
        </label>
      </div>
      <div>
        <label htmlform="gender">
          <input name="location" type="checkbox" id="female" value="female"/>
          Female
        </label>
      </div>
      </fieldset>
    </form>
    )
  }
}

export default Form;
