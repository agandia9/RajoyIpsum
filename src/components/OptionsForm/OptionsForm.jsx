import React, { Component } from 'react'
import './styles.css'

class OptionsForm extends Component {
	render(){
		return <div className='jumbotron row'>
			<textarea type="text"/>
			<button className='btn btn-default'>Generar Ipsum</button>
		</div>
	}
}

export default OptionsForm