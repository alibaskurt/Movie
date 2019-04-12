import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import MoviesPage from './components/pages/MoviesPage';
import AddNewMoviesPage from './components/pages/AddNewMoviesPage';
import HomePage from './components/pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route } from 'react-router-dom';



class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Container text>
					<Route path='/' component={HomePage} exact></Route>
					<Route path='/movies' component={MoviesPage} exact></Route>
					<Route path='/addMovie' component={AddNewMoviesPage} exact></Route>
					<Route path='/movie/:_id' component={AddNewMoviesPage} exact></Route>
				</Container>
				<Footer />
			</div>
		);
	}
}
export default App