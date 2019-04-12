import {
    NEW_MOVIE_PENDING,
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,

    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED,

    UPDATE_MOVIE_PENDING,
    UPDATE_MOVIE_FULFILLED,
    UPDATE_MOVIE_REJECTED
} from '../actions/newMovie'

const InitialState = {
    fetching: false,
    done: false,
    erorr: {},
    movie: {}
}

export default (state = InitialState, action) => {
    switch (action.type) {
        //Insert
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false
            }

        //Get by id
        case FETCH_MOVIE_PENDING:
            return {
                ...state,
            }
        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                movie: action.payload.movie
            }
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
            }


        //Update
        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                movie: action.payload.movie,
                fetching: false
            }
        default:
            return state;
    }
}