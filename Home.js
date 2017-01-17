//==============DEPENDENCIES/COMPONENTS==========
import React, { Component } from 'react';
import $ from 'jquery';

//===============CUSTOM COMPONENTS/MODULES=============
import Poster from './Poster';
import Constants from './Constants';
import Config from './Config';
import DiscoverButton from './DiscoverButton';

import './App.css';

//bind - so whenever you have this.handleCategoryChange, "this" will refer to Home. Otherwise, you might refer to the wrong "this"
class Home extends Component{
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.componentDidMount - this.componentDidMount.bind(this);
		this.state={
			moviePosters: []
		}
	}

	componentDidMount() {
        var url = Constants.baseUrl + Constants.nowPlayingEP + Config.api_key;
        $.getJSON(url, (movieData)=>{
            console.log(movieData)
            this.setState({
                moviePosters: movieData.results
	        });
	    });
	 }

	 // Custom function to update Home's state var, FROM THE CHILD DiscoverButton.
	 //in the constants file, you have big links which you need the constants.baseurl in front of it
	 handleCategoryChange(categoryApiUrl){
	 	console.log(categoryApiUrl);
	 	var url = Constants.baseUrl + categoryApiUrl + Config.api_key
	 	console.log(url);
	 	$.getJSON(url, (categoryData)=>{
	 		this.setState({
	 			moviePosters: categoryData.results
	 		})
	 	});
	 }

	render(){
		var postersArray = [];

        // Load up the postersArray array with Poster Components
        // Loop through array with map method. Call each "poster" and call the number we're on "index." Poster is not defined yet.
        //We needed to export Poster.js in the src and import it here to pull from it.
        //handleCategoryChange belongs to home. Send that down with functionFromParent={this.handleCategoryChange}.
        this.state.moviePosters.map((poster, index) =>{
            postersArray.push(<Poster poster={poster} functionFromParent={this.handleCategoryChange} key={index} />)

        });

        //Build buttons with DiscoverButton component
        //loops through Constants.discoverLinks
        //send buttonLink as {category.link}. buttonLink and buttonText are props available to DiscoverButton now
        var discoverButtons = [];
        Constants.discoverLinks.map((category, index)=>{
        	discoverButtons.push(
        		<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} key={index} />
        	)
        });

		return(
			<div>
				<h1>This is the home page!</h1>
				<div className = "col-sm-12">
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}

export default Home;