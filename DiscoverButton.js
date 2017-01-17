import React, { Component } from 'react';


//an entire function was sent to us as a prop. 
//child grabs what was clicked on (the "apiLink") which in turn calls it's own function. passes that info up to parent.
class DiscoverButton extends Component{
	handleButtonClickChild(apiLink){
		console.log(apiLink);
		this.props.functionFromParent(apiLink);
	}

	render(){
		var apiLink = this.props.buttonLink;
		var buttonText = this.props.buttonText;
		return(
			<button className="btn btn-primary" onClick={() => this.handleButtonClickChild(apiLink)}>
				{buttonText}
			</button>
		)
	}
}

export default DiscoverButton;