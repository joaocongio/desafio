import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';

class ListaClientes extends Component {
	constructor(props) {
		super(props)

		this.state = {
      clientes: [],
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:9004/users')
			.then(response => {
				console.log(response)
				this.setState({ clientes: response.data })
			})
			.catch(error => {
                console.log(error)
			})
	}

	render() {
		const { clientes } = this.state
		return (
            <div className="listaClientes">
                <ul>
                {clientes.map(clientes => <div key={clientes.id}><img src={clientes.avatar} className="imgListaClientes"/> {clientes.name} - {clientes.username} - {clientes.email} - {clientes.phone}</div>)}
                </ul>
            </div>
		)
	}
}

export default ListaClientes