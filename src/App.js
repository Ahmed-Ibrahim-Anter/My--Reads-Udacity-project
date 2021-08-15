import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import SearchPage from './screens/SearchPage';
import PropTypes from 'prop-types';
class BooksApp extends React.Component {
  static propTypes = {
    books: PropTypes.array,
    resultes: PropTypes.array,
    message: PropTypes.string,
    handelInput: PropTypes.func,
    handelchange: PropTypes.func,
    handelSearch: PropTypes.func,
    handelSearchSelect: PropTypes.func,
    query: PropTypes.string,
  }

  state = {

    books: [],
    query: '',
    resultes: [],
    message: ''
  }


  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(books)
    }).catch((e) => console.error(e))
  };

  handelInput = (e) => {
    let { query } = this.state;
    query = e.target.value;

    this.setState({ query });
    this.handelSearch(query.trim());

  };

  handelchange = async (e, book) => {
    try {
      let { books } = this.state;
      let target = e.target.value;
      let index = books.findIndex(e => e.id === book.id);

      const update = await BooksAPI.update(book, target);
      console.log(update);
      this.setState({
        books: [
          ...books.slice(0, index),
          Object.assign({}, books[index], { shelf: target }),
          ...books.slice(index + 1)
        ]
      })

    } catch (e) { console.error(e); alert('Some Thing Went Wrong Please Chek Your Network Connection'); }


  };


  handelSearch = async (query) => {
    try {

      let { resultes } = this.state;
      if (query === '') {
        this.setState({ resultes: [] });
        this.setState({ message: 'No Data Found' })
      } else {

        resultes = await BooksAPI.search(query);
        if (resultes.error) {
          this.setState({ resultes: [] });
          this.setState({ message: 'No Data Found' })
        } else {
          this.setState({ resultes });
          this.setState({ message: '' })
        }
      }

    } catch (e) { console.error(e) }
  }





  handelSearchSelect = async (e, book) => {
    try {

      let { books, resultes } = this.state;
      let target = e.target.value;
      let index1 = resultes.findIndex(e => e.id === book.id);
      if (index1 === -1){
        this.setState((previousState)=>({
          resultes:previousState
        }));
      }else{

        const update = await BooksAPI.update(book, target);
        console.log(update);
        this.setState({
          resultes: [
            ...resultes.slice(0, index1),
            Object.assign({},  resultes[index1], { shelf: target }),
            ...resultes.slice(index1 + 1)
          ]
        })


      }
      
      const getBook = await BooksAPI.get(book.id);
      console.log('getBook: ', getBook);
      let index = books.findIndex(e => e.id === getBook.id);
      if (index === -1) {
        let newBooks = [...books, getBook];
        this.setState({ books: newBooks });
      } else {
        const update = await BooksAPI.update(getBook, target);
        console.log(update);
        this.setState({
          books: [
            ...books.slice(0, index),
            Object.assign({}, books[index], { shelf: target }),
            ...books.slice(index + 1)
          ]
        })

      }

     
    } catch (e) { console.error(e); alert('Some Thing Went Wrong Please Chek Your Network Connection'); }


  };


  render() {
    const { books, query, resultes, message } = this.state;
    return (
      <div className="app">
        <Route path='/' exact render={() => (<HomePage
          books={books} handelchange={this.handelchange}
        />)} />
        <Route path='/search' render={() => (<SearchPage
          books={books}
          query={query}
          resultes={resultes}
          handelInput={this.handelInput}
          handelSearchSelect={this.handelSearchSelect}
          message={message}
        />)} />
      </div>
    )
  }
}

export default BooksApp
