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
          <form onSubmit={this.submitHandler}>
            <div>
              <label>Nome: </label>
              <input type="text" name="name" value={name} onChange={this.changeHandler}/>
            </div>
            <div>
            <label>Usuário: </label>
              <input type="text" name="username" value={username}  onChange={this.changeHandler}/>
            </div>
            <div>
            <label>E-mail: </label>
              <input type="text" name="email" value={email}  onChange={this.changeHandler}/>
            </div>
            <div>
            <label>Telefone: </label>
              <input type="text" name="phone" value={phone}  onChange={this.changeHandler}/>
            </div>
            <button type="submit">Adicionar</button>
          </form>
          
        </div>
      )
    }
}

export default AdicionarCliente