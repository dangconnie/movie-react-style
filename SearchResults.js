import React, { Component } from 'react'
import { Link } from 'react-router';
import Constants from './Constants';

//In this render part, you are in the view. Everything needs to happen before we return. There should be no logic in this section. That is why we have {imagePath} rather than having the imagePath variable in the img. src.
class SearchResults extends Component{
	render(){
		// this.props.poster contains and entire movie object from parent
		//We wanted to make it so that whichever movie you click on will bring you to a page with just that movie on it
		var imagePath = Constants.imageBase;
		var posterLink = '/movie/';

		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<h1>{this.props.params.movieToSearchFor}</h1>
				<Link to ={posterLink}><img src={imagePath} /></Link>
			</div>
		)
	}
}

export default SearchResults;
