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
        <h3>Genera párrafos muy <strong>españoles</strong> y mucho <strong>españoles</strong> al más puro MarianoStyle!💃🏻</h3>
        <h3>Selecciona el números de párrafos que necesitas y si necesitas incluir tags... y listo para pegar en tu web!</h3>
        <IpsumForm/>
        <footer>
          <p>Made with ♥️ by <a href="http://www.github.com/agandia9">@agandia9</a> ||  Code repo <a href="https://github.com/agandia9/RajoyIpsum">here</a></p>
          <p>Code repo </p>
        </footer>
      </div>
    );
  }
}

export default App;
