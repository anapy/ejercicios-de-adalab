import React from 'react';
class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.forceUpdate();
    this.handleInput = this.handleInput.bind(this);

  }
  handleInput(ev) {
    const input = ev.target.value.toLowerCase();
    const onion = document.querySelector('.onion');
    if(input.includes('cebolla')){
        alert('ODIO LA CEBOLLA');
        this.isHating = true; 
        onion.classList.add('red');

    }  else {
      this.isHating = false; 
      onion.classList.remove('red');
    } 
    console.log(this.isHating);
  }

  render() {
      
  return (
    <textarea className="onion" onChange={this.handleInput}></textarea>    
    )
  }
}

export default OnionHater;
