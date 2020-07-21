import React from 'react';

class MediaCard extends React.Component {
  render() {
    const img = <div className="img-container"><img className="img" src={this.props.photo} height="100px" alt="dog"></img></div>;
    const name = <h1 className="name">{this.props.name}</h1>;
    const date = <h2 className="date">{this.props.date}</h2>;
    const headerData = <div className="data">{name}{date}</div>
    const headerElement = <header className="header">{img}{headerData}</header>;
    const text = <p className="text">{this.props.text}</p>;
    const main = <main>{text}</main>
    const more = <small className="more">Leer más...</small>;
    const like = <span>{this.props.like} <i class="fas fa-heart"></i></span>;
    const footer = <footer className="footer">{more}{like}</footer>

    const appRoot = (
      <div className="card">
        {headerElement}
        {main}
        {footer}
      </div>
    );
  return appRoot
  }
} 

export default MediaCard;