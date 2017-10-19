import React, { Component } from 'react'
import './styles.css'

class OptionsForm extends Component {
	setParagraphs = (event) =>{
		this.props.state.paragraphs= event.target.value
		this.props.generateIpsum()
	}
	setHTML = () => {
		if(this.props.state.includeHTML=== true){
				this.props.state.includeHTML= false
				this.props.generateIpsum()
			}
			else{
				this.props.state.includeHTML= true
				this.props.generateIpsum()
			}
	}
	render(){
		return <div>
					<div className="list-group col-xs-12 col-sm-6 col-md-6" onClick={this.setParagraphs}>
					  <p>Cuantos párrafos?</p>
					  <button type="button" className="list-group-item optionsButton" value="1">1</button>
					  <button type="button" className="list-group-item optionsButton" value="2">2</button>
					  <button type="button" className="list-group-item optionsButton" value="3">3</button>
					  <button type="button" className="list-group-item optionsButton" value="4">4</button>
					  <button type="button" className="list-group-item optionsButton" value="5">5</button>
					  <button type="button" className="list-group-item optionsButton" value="6">6</button>
					</div>
					<div className="list-group col-xs-12 col-sm-6 col-md-6">
					<p>Estilos?</p>
					  <button type="button" className="list-group-item optionsButton" onClick={this.setHTML}>Incluir tags HTML </button>
					</div>
			</div>
	}
}

export default OptionsForm