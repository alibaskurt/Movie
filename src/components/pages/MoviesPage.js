import React, { Component } from 'react'
import MoviesList from '../MoviesList'

class MoviesPage extends Component {
  
    render() {
        return (
            <div>
                <h2>Movie List</h2>
                <MoviesList />
            </div>
        );
    }
}



export default MoviesPage