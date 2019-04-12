import axios from 'axios';
import { API_BASE } from '../config/env'

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";  // Servis çağrımı başlatıldı.
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED"; // Servis çağrımı başarılı.
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED"; //Servis Çağrımı başarısız.

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";  // Servis çağrımı başlatıldı.
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED"; // Servis çağrımı başarılı.
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED"; //Servis Çağrımı başarısız.

//Not fetch işleminin başladığı anda bittiği anda yapılacak dispatch işlemini kontrol etmek için redux-promise-middleware kullanılır
//ilgili dispatch işlemini otomatik kendisi yapar.
//path verilir ona göre 4 durumu var.
// 

//Action Creator dispact methodu state doldurma
export function fetchMovies() {
     return dispatch => {
        //burada permission redux middleware i kullanmasaydık tek tek servis başladı donus basarılı donus hatalı tek tek yapmamız gerekirdi.
         dispatch({
             type : "FETCH_MOVIES",
             payload : axios.get(`${API_BASE}/movies`)
             .then(result => result.data.movies)
         })
     }
} 

export function deleteMovie(_id) {
    return dispatch => {
       //burada permission redux middleware i kullanmasaydık tek tek servis başladı donus basarılı donus hatalı tek tek yapmamız gerekirdi.
        dispatch({
            type : "DELETE_MOVIE",
            payload : axios.delete(`${API_BASE}/movies/${_id}`)
            .then(result => Object.assign({} , result , {_id}))
        })
    }
} 