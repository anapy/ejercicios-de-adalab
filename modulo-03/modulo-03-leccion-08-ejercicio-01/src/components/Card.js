import React from 'react';

class Card  extends React.Component {
  constructor(props) {
    super(props);
  }
  // const genres = this.props.genres.map((genre) => {
  // return <p>{genre}</p>
  // }
  // );

  render() {
    console.log(this.props.info);

    return (
    <div className="card">
      <h2>{this.props.info.name}</h2>
      <p>{this.props.info.description}</p>
      <p>{this.props.info.language}</p>
      <p>{this.props.info.age}</p>
      <ul>
        <li>{this.props.info.genres.genre1}</li>
        <li>{this.props.info.genres.genre2}</li>
        <li>{this.props.info.genres.genre3}</li>
        <li>{this.props.info.genres.error}</li>
      </ul>
    </div>
    )
  }
}

export default Card;