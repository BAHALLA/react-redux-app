import React, { useEffect } from "react";
import {fetchBooks} from "../redux";
import { connect } from "react-redux";


function BooksContainer(props) {

    const { booksData, fetchBooks } = props;

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        booksData.loading ?
            (<h1> Books are loading ...</h1>)
            : booksData.error ?
            (<h1>booksData.error</h1>)
            : (
                <div>
                    <ul>
                        {
                            booksData.books.map(book => <li key={book.id}> {book.title} </li>)
                        }
                    </ul>
                </div>
            )
    );

}
const mapStateToProps = (state) => {
    return {
        booksData: state.booksData
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => { dispatch(fetchBooks())}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);