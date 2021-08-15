import React, { Fragment } from 'react';
const Search = (props) => {
    const { resultes, handelSearchSelect, message, books } = props;
    console.log('handelSearchSelect: ', handelSearchSelect);

    // let result =
    //     books.filter(resulte => resultes.some(book => resulte.id === book.id));
    // console.log('result: ', result);


    const ele = !message ? (
        resultes.map(book => {


            let result = books.filter(e => e.id === book.id).map(e => book.shelf = e.shelf);
            console.log('result: ', result);

            if (!book.shelf) { book.shelf = 'none' }

            return <li key={book.id}>

                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => { handelSearchSelect(e, book) }} >
                                <option value="move" hidden>Move to...</option>
                                <option value="currentlyReading" className={`${book.shelf === `currentlyReading` ? `active` : ``}`} >Currently Reading</option>
                                <option value="wantToRead" className={`${book.shelf === `wantToRead` ? `active` : ``}`}>Want to Read</option>
                                <option value="read" className={`${book.shelf === `read` ? `active` : ``}`}>Read</option>
                                <option value="none" className={`${book.shelf === `none` ? `active` : ``}`}>None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title && book.title}</div>
                    <div className="book-authors">{book.authors && book.authors}</div>
                </div>


            </li>



        })

    ) : (<li>
        <p>{message}</p>
    </li>);



    return (
        <Fragment>
            {ele}

        </Fragment>
    );
}

export default Search;

