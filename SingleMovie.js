import React, { Component } from 'react'
import $ from 'jquery';


//In this render part, you are in the view. Everything needs to happen before we return. There should be no logic in this section. That is why we have {imagePath} rather than having the imagePath variable in the img. src. 
// Params is created by the Route path. In this case, params refers to anything after "movie" in "movie/:id" 

class SingleMovie extends Component{
	constructor(props) {
		super(props);
		this.state = {
			currentMovieData: [],
			budget: "",
			revenue: ""
		}
	}

	componentDidMount() {
		var currentMovieId = this.props.params.id;
		var url = 'https://api.themoviedb.org/3/movie/'+currentMovieId+'?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieApiResponse) =>{
			var revenue = "$" + movieApiResponse.revenue;
			var budget = "$" + movieApiResponse.budget;
			this.setState({
				currentMovieData: movieApiResponse,
				revenue: revenue,
				budget: budget
			})
			// console.log(movieApiResponse);
		});
		
	}

	render(){
		var posterPath = 'http://image.tmdb.org/t/p/original' + this.state.currentMovieData.poster_path;
		return(
			<div className="col-sm-8">
				{/*// Single movie will go here*/}
				{/*this.props.params.id*/}
				<a href={this.state.currentMovieData.homepage} target="_blank">
					<img src={posterPath} />
				</a>
			</div>
		)
	}
}

export default SingleMovie;
