import React from 'react';

const Selection = (props) => {

  return (

    <li>

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks && props.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={props.shelf} onChange={(e) => { props.handelchange(e, props.asd) }} >
              <option value="move" hidden>Move to...</option>
              <option value="currentlyReading" className={`${props.shelf === `currentlyReading` ? `active` : ``}`} >Currently Reading</option>
              <option value="wantToRead" className={`${props.shelf === `wantToRead` ? `active` : ``}`}>Want to Read</option>
              <option value="read" className={`${props.shelf === `read` ? `active` : ``}`}>Read</option>
              <option value="none" className={`${props.shelf === `none` ? `active` : ``}`}>None</option>
            </select>
          </div>
        </div>
        <div className=" book-title ">{props.title && props.title}</div>
        <div className="book-authors">{props.authors && props.authors}</div>
      </div>


    </li>

  )







}

export default Selection;