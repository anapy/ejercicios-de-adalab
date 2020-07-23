import React from 'react';

class OnionHater extends React.Component {
  render() {
      const onChangeListener = ev => {
        //let text = ev.target.value;
        if(ev.target.value.includes('cebolla')){
            alert('ODIO LA CEBOLLA');
        }   
      }
            return (
        <textarea onChange={onChangeListener}></textarea>    
    )
  }
}

export default OnionHater;
