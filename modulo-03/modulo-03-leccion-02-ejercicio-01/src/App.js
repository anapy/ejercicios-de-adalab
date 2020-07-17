import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="card">
      <header className="header">
        <div className="img-container"><img className="img" src="https://i.pinimg.com/736x/bd/ea/fe/bdeafee9460b48e87f081bf0b807ce9e.jpg" height="100px" alt="dog-photo"></img></div> 
        <div className="data">        
          <h1 className="name">Pancho</h1>
          <h2 className="date">Lunes 26 de junio de 2017</h2>
        </div>
     </header>
    <main>
      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et velit eu ante laoreet mattis vestibulum eu quam. Donec ullamcorper ultrices lacus ac hendrerit. Praesent condimentum ullamcorper dignissim. Pellentesque tincidunt massa aliquet, dictum turpis eu, eleifend libero. Nulla feugiat faucibus ex, ac finibus orci vulputate rutrum. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit tempor metus, vitae pulvinar turpis posuere eu. Fusce iaculis lobortis massa ac mollis.</p>
    </main>
    <footer className="footer">  
      <small className="more">Leer más...</small>
      <span>37 <i class="fas fa-heart"></i></span>
    </footer>
  </div>
  );
} 

export default App;
