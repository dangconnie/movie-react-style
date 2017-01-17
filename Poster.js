import React, { Component } from 'react'
import { Link } from 'react-router';

//In this render part, you are in the view. Everything needs to happen before we return. There should be no logic in this section. That is why we have {imagePath} rather than having the imagePath variable in the img. src.
class Poster extends Component{
	render(){
		// this.props.poster contains and entire movie object from parent
		//We wanted to make it so that whichever movie you click on will bring you to a page with just that movie on it
		var imagePath = 'http://image.tmdb.org/t/p/w300' + this.props.poster.poster_path;
		var posterLink = '/movie/' + this.props.poster.id;

		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<Link to ={posterLink}><img src={imagePath} /></Link>
			</div>
		)
	}
}

export default Poster;
