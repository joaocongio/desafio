import React from 'react';
import axios from 'axios';
import '../index.css';

export default class RemoverCliente extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:9004/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload(false);
      })
  }

  render() {
    return (
      <div className="removerCliente">
        <h2>Remover Cliente</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Informe o ID: </label><br />
            <input type="text" name="id" onChange={this.handleChange} required="required"/><br />
          <button type="submit">Deletar</button>
        </form>
      </div>
    )
  }
}