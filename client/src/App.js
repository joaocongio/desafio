import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ListaClientes from './componentes/ListaClientes'
import AdicionarCliente from './componentes/AdicionarCliente'
import RemoverCliente from './componentes/RemoverCliente'

class App extends Component{
  render(){
    return(
      <div className="App">
        <ListaClientes />
        <AdicionarCliente />
        <RemoverCliente />
      </div>
    )
  }
}
export default App;
