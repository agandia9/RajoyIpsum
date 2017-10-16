import React, { Component } from 'react'
import './styles.css'
import data from '../../data/data.json'
import OptionsForm from '../OptionsForm/OptionsForm'
class IpsumForm extends Component {
	constructor() {
		super();
		this.state={
			text: '',
			words:'',
			paragraphs: "1",
			includeHTML: false
		}
	}
	componentWillMount() {
    	this.setState({
    		text: data
    	})
	}
	generateIpsum = () => {
		function shuffleArray(array) {
		    for (var i = array.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }
		    return array;
		}
		var textToPrint = []
		this.state.text.forEach((text)=>{
			textToPrint.push(text.text)
		})
		textToPrint = shuffleArray(textToPrint).splice(0,(8*parseInt(this.state.paragraphs)))
    	if(this.state.includeHTML=== true){
    		this.setState({
    			words: textToPrint.join('<p>').replace(/\./g,'.</p> ')
    		})
    	}else{
    		this.setState({
    			words: textToPrint.join('').replace(/\./g,'. ')
    		})
    	}
    	
	}
	render(){
		return <div className='jumbotron'>
			<div className="row">
				<textarea type="text" value={this.state.words}/>
				<button className='btn btn-default' onClick={this.generateIpsum}>Generar Ipsum</button>
				
			</div>
			<OptionsForm 
				state={this.state}
			/>
		</div>
	}
}

export default IpsumForm