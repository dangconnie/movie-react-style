//-------------REACT STUFF-----------
//index.js is the entry point
//we used to do this using script tags


//Dependencies--someone made these
//call the thing from the node folder called 'react' and call it React.
//If there is no file extension, assume it is .js
import React from 'react';

import ReactDOM from 'react-dom';

//Get Router and Route
import { Router, Route, hashHistory, IndexRoute } from 'react-router'




//-------CUSTOM MODULES/Component-------------
import App from './App';
import SingleMovie from './SingleMovie';
import Home from './Home'
import SearchResults from './SearchResults';



//-------CUSTOM CSS-----------------
import './index.css';


//Wrap each movie so that if you click on it, it will take you to the movie
ReactDOM.render(
	<Router history={hashHistory} >
		<Route path ="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="movie/:id" component={SingleMovie} />
			<Route path="search/:movieToSearchFor" component={SearchResults} />
		</Route>
	</Router>,

	document.getElementById('root')
);