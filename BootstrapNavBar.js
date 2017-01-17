import React, { Component } from 'react'
import Router, { Link } from 'react-router';

//change "class" to "className" and the a tags to "link"
//on submit, function handleSearchSubmit will run. It will grab what will be typed into the search bar. We also need to prevent it from automatically submitting.
//form tag is a parent of the input tag so we're not getting the value on submit
//we want user to go to search.(whatever they type in). So we do this: this.props.router.push('/search/' + inputBox). we don't want them to leave the site(index.html), just go to the new place.
//you need to use a constructor; you want to use the class "this", not the child
//bootstrapNavBar is manually called. It does not have access to the child. navbar can't see the value of the search bar. you need to get the value out of search box. you want state to be as high as possible to pass info. 

class BootstrapNavBar extends Component{
	constructor(props) {
		super(props);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	handleSearchSubmit(event){
		event.preventDefault();
		var inputBox = event.target[0].value;
		// this.props.router.push('/search/' + inputBox);
		// console.log(inputBox);
		this.props.functionFromParent(inputBox);
	};

	render(){
		return(
			<nav className="navbar navbar-default">
			 <div className="container-fluid">
			   <div className="navbar-header">
			     <a className="navbar-brand" href="#">WebSiteName</a>
			   </div>
			   <ul className="nav navbar-nav">
			     <li className="active">
			     	<Link to="/">Home</Link>
			     </li>
			     <li><Link to="/nowPlaying">Now Playing</Link></li>
			     <li><Link to="/topRated">Top Rated</Link></li>
			     <li>
			     	<form onSubmit={this.handleSearchSubmit}>
			     		<input type = "text" placeholder="Search...." />
			     		<button type = "submit" className="btn btn-success">
			     			Search for Movie
			     		</button>
			     	</form>
			     </li>
			   </ul>
			 </div>
			</nav>
		)
	}
}


export default BootstrapNavBar;