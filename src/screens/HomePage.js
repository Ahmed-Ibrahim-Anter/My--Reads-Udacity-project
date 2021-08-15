import React from 'react';
import { NavLink } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import BookShelf1 from '../components/BookShelf1';
import BookShelf2 from '../components/BookShelf2';
import PropTypes from 'prop-types';


const HomePage = (props) => {
  const { books, handelchange } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading </h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                 
                <BookShelf books={books} handelchange={handelchange} />


              </ol>
            </div>
          </div>


          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

                <BookShelf1 books={books} handelchange={handelchange} />
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                
                <BookShelf2 books={books} handelchange={handelchange} />
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <NavLink to='/search'>
          <button >Add a book</button>
        </NavLink>
      </div>
    </div>

  );
}
HomePage.propTypes = {
  books: PropTypes.array,
  handelchange: PropTypes.func,

}
export default HomePage;