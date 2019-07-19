import React from 'react'
import BookContext from './BookContext'

export default class BookProvider extends React.Component {
    state = {
      books : [],
      trends: [],
      favorites: [],
      book: {},
        loadBooks: () => {
           return fetch('http://localhost:3003/book/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
                },
            }).then(res =>
                res.json()
                    .then(data => {
                        this.setState({
                            books: data
                        });
                        return Promise.resolve(data);
                    })
            ).catch(err => console.log(JSON.stringify(err)));
        },
      loadTrends: () => {
        fetch('http://localhost:3003/trends/', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
          },
          }).then(res =>
              res.json()
              .then(data => 
                this.setState({
                    trends: data
                }))
          ).catch(err => console.log(JSON.stringify(err)));
      },
      loadFavorite: (favorite) => {
        fetch('http://localhost:3003/book/finds/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
          },
          body: JSON.stringify(favorite)
          }).then((res) => res.json().then((data) => {
            this.setState({favorites: data})
          })
          ).catch(err => console.log(JSON.stringify(err)));
      },
      findBook : (id) => {
        fetch('http://localhost:3003/book/'+id+'/avis', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
          },
          }).then(res =>
              res.json()
              .then(data => {
                this.setState({
                  book: data
                })})
          ).catch(err => console.log(JSON.stringify(err)));
      },
      sendAdvice: (advice) => {
        const userId = JSON.parse(sessionStorage.getItem('logged'));
        fetch('http://localhost:3003/user/'+ userId +'/avis', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
          },
          body: JSON.stringify(advice)
          }).then(() => {}
          ).catch(err => console.log(JSON.stringify(err)));
      },
      updateAdvice: (id,advice) => {
        fetch('http://localhost:3003/avis/'+id, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
          },
          body: JSON.stringify(advice)
          }).then(() => {}
          ).catch(err => console.log(JSON.stringify(err)));
      },
      handleFavorite: (bookId,isLiked) => {
        let url = "http://localhost:3003/book/"+bookId+`${isLiked? '/remove' : '/add'}`;
        fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
          },
          body: JSON.stringify({"userId":JSON.parse(sessionStorage.getItem('logged'))})
          }).then((res) => res.json().then(user => sessionStorage.setItem('user',JSON.stringify(user)))
          ).catch(err => console.log(JSON.stringify(err)));
      },
    };
  
    render() {
      return (
        <BookContext.Provider value={this.state}>
          {this.props.children}
        </BookContext.Provider>
      );
    }
  }
  