import React, { Component } from 'react'
import './styles.css'

class OptionsForm extends Component {
	setParagraphs = (event)=>{

		console.log(this.props.state)
		this.props.state.paragraphs= event.target.value
	}
	setHTML = () => {
		if(this.props.state.includeHTML=== true){
				this.props.state.includeHTML= false
			}
			else{
				this.props.state.includeHTML= true
			}
	}
	render(){
		return <div>
					<div className="list-group col-xs-6 col-sm-6 col-md-6" onClick={this.setParagraphs}>
					  <p>Cuantos párrafos?</p>
					  <button type="button" className="list-group-item" value="1">1</button>
					  <button type="button" className="list-group-item" value="2">2</button>
					  <button type="button" className="list-group-item" value="3">3</button>
					  <button type="button" className="list-group-item" value="4">4</button>
					  <button type="button" className="list-group-item" value="5">5</button>
					  <button type="button" className="list-group-item" value="6">6</button>
					</div>
					<div className="list-group col-xs-6 col-sm-6 col-md-6">
					<p>Estilos?</p>
					  <button type="button" className="list-group-item" onClick={this.setHTML}>Incluir tags HTML </button>
					  <button type="button" className="list-group-item">Incluir estilos</button>
					</div>
			</div>
	}
}

export default OptionsForm