import React, { Component } from 'react';
import InlineValidate from '../components/InlineValidate'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class NewMovieForm extends Component {
    state = {
        _id: this.props.singleMovie ? this.props.singleMovie._id : '',
        title: this.props.singleMovie ? this.props.singleMovie.title : '',
        cover: this.props.singleMovie ? this.props.singleMovie.cover : '',
        validate: {},
        redirect : false
    }

    //Son gelen propsu bildirme
    componentWillReceiveProps(nextProps) {
        const { movie } = nextProps.newMovie;
        //Sayfayı yenileme durumundaki aksiyon
        if (nextProps.newMovie.movie) {
            this.setState({
                _id: movie._id,
                title: movie.title,
                cover: movie.cover
            })
        }

    }

    static propTypes = {
        onNewMovieSumbit: PropTypes.func.isRequired,
        onUpdateMovieSumbit: PropTypes.func.isRequired
    };

    handleFunction = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        const validate = this.Validate();
        this.setState({
            validate,
            redirect : true
        });
        const _id = this.state._id;
        if (Object.keys(validate).length === 0) {
            //yeni ekleme
            if (!_id) {
                this.props.onNewMovieSumbit(this.state);
            }
            //güncelleme
            else {
                this.props.onUpdateMovieSumbit(this.state);
            }

        }
    }
    Validate = () => {
        const errors = {};
        if (!this.state.title) {
            errors.title = "Title girmek zorunludur."
        }
        if (!this.state.cover) {
            errors.cover = "Resim girmek zorunludur."
        }
        return errors;
    }

    render() {
        const form = (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input className={this.state.validate.title && 'validateText'} id="title" name="title" value={this.state.title} onChange={this.handleFunction} type="text" placeholder="Title" />
                    <InlineValidate validateMessage={this.state.validate.title} />
                </div>
                <div className="field">
                    <label>Cover Url</label>
                    <input className={this.state.validate.title && 'validateText'} id="cover" name="cover" value={this.state.cover} onChange={this.handleFunction} type="text" placeholder="Cover Url" />
                    <InlineValidate validateMessage={this.state.validate.cover} />
                </div>
                <img className="MovieAddImage" src={this.state.cover} alt="" />
                <div className="clerfix" />
                <button className="ui button" type="submit">{this.state._id ? 'Movie update' : 'Movie add'}</button>
                {
                    this.props.newMovie.erorr.response &&
                    <div className="ui negative message">
                        <i className="close icon"></i>
                        <div className="header">
                            {this.props.newMovie.erorr.message}
                        </div>
                        <p>
                            {this.props.newMovie.erorr.stack}
                        </p>
                    </div>
                }

            </form>
        )
        return (
            <div>
                <h2>Movie Add</h2>
                {
                    this.props.newMovie.done && this.state.redirect && !this.props.newMovie.fetching ? <Redirect to="/movies" /> : form
                }
            </div>
        )
    };
};
const mapStateToProps = state => {
    return {
        newMovie: state.newMovie
    }
}


export default connect(mapStateToProps, null)(NewMovieForm)
