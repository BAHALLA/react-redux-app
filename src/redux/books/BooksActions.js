import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUEST } from "./BooksTypes";
import axios from 'axios';

export const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    };
};
export const fetchBooksSuccess = books => {
    return {
        type : FETCH_BOOKS_SUCCESS,
        payload: books
    };
};

export const fetchBooksFailure = error => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    };
};
export const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchBooksRequest());
        axios.get('http://localhost:8080/books')
            .then( response => {
                const books = response.data._embedded.books;
                dispatch(fetchBooksSuccess(books));
            }, error => {
                dispatch(fetchBooksFailure(error.messgae));
            });
    }
};

