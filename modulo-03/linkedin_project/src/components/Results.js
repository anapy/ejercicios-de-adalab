import React from 'react';

import '../stylesheets/App.css';


class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = this.props.userInfo.users.map((user, index) => {
      return (
      <li key={index}>
        <h3>{user.name}</h3>
        <div><img src={user.phooto} alt={user.name}/></div>
        <p>{user.city}</p>
        <p>{user.age}</p>
      </li>
      )
    });
    return (
    <div className="results">
      <ul className="result_container">
        {results}
      </ul>
    </div>
    )
  }
}

export default Results;
