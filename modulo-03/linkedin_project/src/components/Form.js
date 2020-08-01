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
    return (
    <form className="form">
      <fieldset>
        <legend>Location</legend>
          <div>
          <label htmlform="location" onClick={this.handleClick}>
            <input name="location" type="checkbox" id="location" value="NY"/>
            NY
          </label>
        </div>
        <div>
          <label htmlform="location">
            <input name="location" type="checkbox" id="location" value="Florida"/>
            Florida
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Gender</legend>
        <div>
          <label htmlform="location">
            <input name="location" type="checkbox" id="location" value="NY"/>
            male
          </label>
        </div>
        <div>
          <label htmlform="location">
            <input name="location" type="checkbox" id="location" value="Florida"/>
            female
          </label>
        </div>
      </fieldset>
    </form>
    )
  }
}

export default Form;
