import React, { Component } from 'react'
import './styles.css'

class IpsumForm extends Component {
	render(){
		return <div className='jumbotron'>
			<textarea type="text"/>
			<button className='btn btn-default'>Generar Ipsum</button>
		</div>
	}
}

export default IpsumForm