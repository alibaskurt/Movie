import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewMovieForm from '../NewMovieForm'
import { onUpdateMovieSumbit, onNewMovieSumbit, fetchMovie } from '../../actions/newMovie'

class AddNewMoviesPage extends Component {
    componentWillMount() {
        const { match } = this.props;
        if (!this.props.movie && match.params._id) {
            this.props.fetchMovie(match.params._id);
        }
    }

    render() {
        return (
            <div>
                <NewMovieForm
                    singleMovie={this.props.singleMovie}
                    newMovie={this.props.newMovie}
                    onNewMovieSumbit={this.props.onNewMovieSumbit}
                    onUpdateMovieSumbit={this.props.onUpdateMovieSumbit}

                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        newMovie: state.newMovie,
        singleMovie: state.movies.movieList.find(item => item._id === props.match.params._id)
    }
}

const mapDispatchToProps = {
    onNewMovieSumbit,
    onUpdateMovieSumbit,
    fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMoviesPage)