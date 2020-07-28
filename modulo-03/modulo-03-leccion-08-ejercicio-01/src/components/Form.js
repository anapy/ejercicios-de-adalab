import React from 'react';

class Form  extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(ev) {
    this.props.handleChange(ev);
  }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" onChange={this.handleChangeForm} />
        </label>
        <label htmlFor="description">
          Description:
        <textarea id="description" type="text" onChange={this.handleChangeForm} />
        </label>
        <label htmlFor="description">
          Language:
          <select id="language" onClick={this.handleChangeForm}>
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="Portuguese">Portuguese</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}


export default Form;
