import React, { Component } from 'react'
import './styles.css'
import data from '../../data/data.json'
import OptionsForm from '../OptionsForm/OptionsForm'
import {CopyToClipboard} from 'react-copy-to-clipboard';


class IpsumForm extends Component {
	constructor() {
		super();
		this.state={
			copied: false,
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
    	if(this.state.includeHTML=== true){
    		this.state.text.forEach((text)=>{
				textToPrint.push('<p>' + text.text + '</p>')
			})
			textToPrint = shuffleArray(textToPrint).splice(0,(8*parseInt(this.state.paragraphs)))
	    		this.setState({
	    			words: textToPrint.join('').replace(/\./g,'.')
	    	})
    	}else{
    		this.state.text.forEach((text)=>{
				textToPrint.push('' + text.text)
			})
			textToPrint = shuffleArray(textToPrint).splice(0,(8*parseInt(this.state.paragraphs)))
	    		this.setState({
	    			words: textToPrint.join('').replace(/\./g,'. ')
	    		})
	    	}
	}
	render(){
		return <div className='jumbotron'>
				<div className="row col-xs-8">
					<textarea type="text" value={this.state.words}/>
					<button className='btn btn-default' onClick={this.generateIpsum}>Generar Ipsum</button>
					 <CopyToClipboard text={this.state.words}
				          onCopy={() => this.setState({copied: true})}>
				          <button className="btn btn-default">Copiar al portapapeles</button>
				        </CopyToClipboard>
				</div>
				<OptionsForm className="row col-xs-4"
					state={this.state}
				/>
		</div>
	}
}

export default IpsumForm