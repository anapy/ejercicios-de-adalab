import React from 'react';

class Card  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="card">
      <h2>{this.props.info.name}</h2>
      <p>{this.props.info.description}</p>
      <span>{this.props.info.language}</span>
    </div>
    )
  }
}

export default Card;