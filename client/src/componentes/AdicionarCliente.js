import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';

class AdicionarCliente extends Component{
    constructor(props) {
      super(props)

      this.state = {
        id: '',
        name: '',
        username: '',
        email: '',
        phone: '',
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg'
      }
    }

    changeHandler = cliente => {
      this.setState({ [cliente.target.name]: cliente.target.value })
    }

    submitHandler = cliente => {
      cliente.preventDefault()
      console.log(this.state)
      window.location.reload(false);
      axios.post('http://localhost:9004/users', this.state)
        .then(response =>{
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }

    render(){
      const { id, name, username, email, phone, avatar} = this.state
      return(
        
        <div className="adicionarClientes">
          <h2>Adicionar novo Cliente</h2>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>Nome: </label><br />
              <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Nome Completo" required/>
            </div>
            <div>
            <label>Usuário: </label><br />
              <input type="text" name="username" value={username}  onChange={this.changeHandler} placeholder="Usuário" required/>
            </div>
            <div>
            <label>E-mail: </label><br />
              <input type="text" name="email" value={email}  onChange={this.changeHandler} placeholder="email@email.com" required/>
            </div>
            <div>
            <label>Telefone: </label><br />
              <input type="text" name="phone" value={phone}  onChange={this.changeHandler} placeholder="(xx) xxxxx-xxxx" required/>
            </div>
            <button type="submit">Adicionar</button>
          </form>
        </div>
      )
    }
}

export default AdicionarCliente