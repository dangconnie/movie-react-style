//=====DEPENDENCIES================
//{Component} - bringing in a method of the React object. Because of this, we can write class App extends Component without having to write React.Component. 
// import logo from './logo.svg';
import React, { Component } from 'react';
// import $ from 'jquery'
import BootstrapNavBar from './BootstrapNavBar';




//custom modcules/componenets
// import Poster from './Poster'


//=============CUSTOM CSS===========
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// same as class App extends React.Component{ } 
//we had this.state.search text but we changed it to searchTextFromChild b/c of asynchronous issue. it wasn't getting updated quickly enough.
//encodeuri() will make your URL purdy.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
        handleSearch(searchTextFromChild){
            this.setState({
                searchText: searchTextFromChild
            });
            this.props.router.push('/search/' + encodeURI(searchTextFromChild));
        }

    //Ajax request here. Go to URL, call info you get back "movieData"
    //componenetDidMount will run after DOM is set up
    // movieData needs to be living inside state, so do: this.setState({...})
    //When state gets updated from componenetDidMount, render runs

    // componentDidMount() {
    //     var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    //     $.getJSON(url, (movieData)=>{
    //         console.log(movieData)
    //         this.setState({
    //             moviePosters: movieData.results
    //         })
    //     })
    // }

    componentDidMount() {
        console.log(this.props.router)
    }

	render() {
        
		return (
		 <div className="container">
			<div className="row">
                <BootstrapNavBar functionFromParent={this.handleSearch} />
                {this.props.children}
			</div>
		 </div>
		)
	}
}

export default App;
