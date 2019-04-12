import axios from 'axios';
import { API_BASE } from '../config/env'

export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";  // Servis çağrımı başlatıldı.
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED"; // Servis çağrımı başarılı.
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED"; //Servis Çağrımı başarısız.
export const RESET_STATE_DONE = "RESET_STATE_DONE"; //Servis Çağrımı başarısız.


export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";  // Servis çağrımı başlatıldı.
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED"; // Servis çağrımı başarılı.
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED"; //Servis Çağrımı başarısız.

export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";  // Servis çağrımı başlatıldı.
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED"; // Servis çağrımı başarılı.
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED"; //Servis Çağrımı başarısız.


export function onNewMovieSumbit({ title, cover }) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(`${API_BASE}/movies`, {
                title,
                cover
            })
        })
    }
}

export function onUpdateMovieSumbit({ title, cover , _id}) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.put(`${API_BASE}/movies/${_id}`, {
                title,
                cover
            })
        })
    }
}

export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIE",
            payload: axios.get(`${API_BASE}/movies/${id}`)
            .then(result => result.data)
        })
    }
}