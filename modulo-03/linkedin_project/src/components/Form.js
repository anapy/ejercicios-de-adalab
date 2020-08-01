import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleInfo();
  }

  render() {

    const cities = this.props.userInfo.users.map((user, index) => {
      return (
       <div>
        <label htmlform="location">
          <input name="location" type="checkbox" id={index} value={user.city}/>
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
        {genders}
      </fieldset>
    </form>
    )
  }
}

export default Form;
