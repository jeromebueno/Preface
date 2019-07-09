import React from 'react'
import BookContext from './BookContext'

export default class BookProvider extends React.Component {
    state = {
      books : [],
      book: {},
      loadBooks: () => {
        fetch('http://localhost:3003/book/', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          },
          }).then(res =>
              res.json()
              .then(data => 
                this.setState({
                  books: data
                }))
          ).catch(err => console.log(JSON.stringify(err)));
      },
      findBook : (id) => {
        fetch('http://localhost:3003/book/'+id, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          },
          }).then(res =>
              res.json()
              .then(data => {
                this.setState({
                  book: data
                })})
          ).catch(err => console.log(JSON.stringify(err)));
      }
    };
  
    render() {
      return (
        <BookContext.Provider value={this.state}>
          {this.props.children}
        </BookContext.Provider>
      );
    }
  }
  