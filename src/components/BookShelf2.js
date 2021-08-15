import React, { Fragment } from 'react';
import Selection from './Selection';
const BookShelf2 = (props) => {

  const { books, handelchange } = props;
  const ele = books.map(book =>

    book.shelf === "read" &&
    <Selection
      key={book.id}
      id={book.id}
      thumbnail={book.imageLinks.thumbnail}
      imageLinks={book.imageLinks}
      handelchange={handelchange}
      shelf={book.shelf}
      title={book.title}
      authors={book.authors}
      asd={book}
    />
  )




  return (
    <Fragment>
      {ele}

    </Fragment>
  );
}

export default BookShelf2;