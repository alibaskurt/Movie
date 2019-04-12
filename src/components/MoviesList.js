import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCards from './MovieCards'
import { ClipLoader } from 'react-spinners';
import { fetchMovies } from '../actions/movies';

class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.shape({
            movieList: PropTypes.array.isRequired,
        }).isRequired
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const emptyMessage = (
            <p>Hiç Film Yok.</p>
        );

        const moviesList = (
            <div>
                <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.props.movies.fetching}
                />
                {this.props.movies.erorr != null && this.props.movies.erorr.config != null
                    ? <div> {this.props.movies.erorr.stack} </div>
                    :
                    <div className="ui three stackable cards">
                        {
                            this.props.movies.movieList.map(movie => <MovieCards key={movie._id} movie = { movie } />)
                        }
                    </div>
                }
            </div>
        );
        return (
            <div>
                {this.props.movies.length === 0 ? emptyMessage : moviesList}
            </div>
        )
    }
};

//Action çalıştır
const mapDispatchToProps = {
    fetchMovies
}

//State'i prop da kullanma
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)