import React, { Component } from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IpsumForm from '../IpsumForm/IpsumForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RajoyIpsum 💰💶💸</h1>
        <div className="wall"></div>
        <h3>Genera unos párrafos muy <strong>españoles</strong> y mucho <strong>españoles</strong> al más puro estilo del Partido Popular💃🏻</h3>
        <h3>Selecciona el números de párrafos que necesitas y si necesitas estilos... y listo para pegar en tu web!</h3>
        <IpsumForm/>
        <footer>
          <p>Financiado ilegalmente con ♥ por el <a href="">PP</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
