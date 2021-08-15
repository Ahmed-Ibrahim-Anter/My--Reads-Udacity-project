import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import PropTypes from 'prop-types';
const SearchPage = (props) => {
    const { books, handelSearchSelect, resultes, message, query } = props;
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <NavLink to='/'>
                    <button className="close-search" >Close</button>
                </NavLink>
                <div className="search-books-input-wrapper">
                    {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                    <input value={query} type="text" placeholder="Search by title or author" onChange={(e) => { props.handelInput(e) }} />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <Search books={books}
                        handelSearchSelect={handelSearchSelect}
                        resultes={resultes}
                        message={message}

                    />
                </ol>
            </div>
        </div>
    );
}

SearchPage.propTypes = {
    books: PropTypes.array,
    resultes: PropTypes.array,
    message: PropTypes.string,
    handelSearchSelect: PropTypes.func,

}
export default SearchPage;