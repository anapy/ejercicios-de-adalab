import React from 'react';

class Form  extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleGenderForm = this.handleGenderForm.bind(this);

  }

  handleChangeForm(ev) {
    this.props.handleChange(ev);
  }
  handleGenderForm(ev) {
    this.props.handleGender(ev.target.value);
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
        <div onClick={this.handleChangeForm}>
          <h3>Age clasification:</h3>
          <div>
            <label htmlFor="A">
              <input
                id="age"
                type="radio"
                value="A"
                name="age"
              />
              A
            </label>
          </div>
          <div >
            <label htmlFor="7">
              <input
                id="age"
                type="radio"
                value="7"
                name="age"
              />
              7
            </label>
          </div>
          <div>
            <label htmlFor="12">
              <input
                id="age"
                type="radio"
                value="12"
                name="age"
              />
              12
            </label>
          </div>
          <div>
            <label htmlFor="16">
              <input
                id="age"
                type="radio"
                value="16"
                name="age"
              />
              16
            </label>
          </div>
          <div>
            <label htmlFor="18">
              <input
                id="age"
                type="radio"
                value="18"
                name="age"
              />
              18
            </label>
          </div>
        </div>
        <div >
          <h3>Genre selection:</h3>
          <div>
            <label htmlFor="comedy">
              <input
                id="genre"
                type="checkbox"
                value="comedy"
                name="genre"
                onClick={this.handleGenderForm}
              />
              Comedy
            </label>
          </div>
          <div>
            <label htmlFor="drama">
              <input
                id="genre"
                type="checkbox"
                value="drama"
                name="genre"
                onClick={this.handleGenderForm}
              />
              Drama
            </label>
          </div>
          <div>
            <label htmlFor="fantasy">
              <input
                id="genre"
                type="checkbox"
                value="fantasy"
                name="genre"
                onClick={this.handleGenderForm}
              />
              Fantasy
            </label>
          </div>
          <div>
            <label htmlFor="action">
              <input
                id="genre"
                type="checkbox"
                value="action"
                name="genre"
                onClick={this.handleGenderForm}
              />
              Action
            </label>
          </div>
          <div>
            <label htmlFor="family">
              <input
                id="genre"
                type="checkbox"
                value="family"
                name="genre"
                onClick={this.handleGenderForm}
              />
              Family
            </label>
          </div>
          <div>
            <label htmlFor="terror">
              <input
                id="genre"
                type="checkbox"
                value="terror"
                name="genre"
                onClick={this.handleGenderForm}
              />
              Terror
            </label>
          </div>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}


export default Form;
