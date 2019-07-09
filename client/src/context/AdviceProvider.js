import React from 'react'
import AdviceContext from './AdviceContext'

export default class AdviceProvider extends React.Component {
    state = {
      getAdvices: (book) => {
        fetch('http://localhost:3003/book/'+book+'/avis/', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          },
          }).then(res =>
              res.json()
              .then(data => {
                this.setState({
                  advices: data
                })})
          ).catch(err => console.log(JSON.stringify(err)));
      },
      postAdvice : (user,book) => {}
    };
  
    render() {
      return (
        <AdviceContext.Provider value={this.state}>
          {this.props.children}
        </AdviceContext.Provider>
      );
    }
  }
  