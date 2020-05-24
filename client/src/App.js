import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ListaClientes from './componentes/ListaClientes'
import AdicionarCliente from './componentes/AdicionarCliente'

class App extends Component{
  render(){
    return(
      <div className="App">
        <ListaClientes />
        <AdicionarCliente />
      </div>
    )
  }
}
export default App;
