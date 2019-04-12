import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteMovie } from '../actions/movies';
import { connect } from 'react-redux';


class MovieCards extends Component {
    deleteMovieClick(id) {
        this.props.deleteMovie(id);
    }

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={(this.props.movie.cover === "img.png" || this.props.movie.cover === "img2.png")
                        ? 'http://tr.web.img4.acsta.net/pictures/bzp/03/135617.jpg'
                        : this.props.movie.cover} alt="test" />
                </div>
                <div className="content">
                    <div className="description">
                        {this.props.movie.title}
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <Link to={`/movie/${this.props.movie._id}`}>
                        <div className="ui animated button">
                            <div className="visible content">
                                Edit
                        </div>
                            <div className="hidden content">
                                <i className="right arrow icon"></i>
                            </div>
                        </div>
                    </Link>
                    <div className="ui vertical animated button" onClick={e => this.deleteMovieClick(this.props.movie._id)}>
                        <div className="hidden content">
                            Delete
                        </div>
                        <div className="visible content">
                            <i className="shop icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteMovie
}

export default connect(null, mapDispatchToProps)(MovieCards)




