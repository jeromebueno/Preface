import React from 'react'
import UserContext from './UserContext'

export default class UserProvider extends React.Component {
    state = {
        login : (user) => {
            fetch('http://localhost:3003/login/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
                }).then(res =>
                    res.json()
                    .then(data => {localStorage.setItem('token',JSON.stringify(data.token)) 
                                  this.setState({logged:true})
                                })
                ).catch(err => console.log(err));
       },
       register : (user) => {
          fetch('http://localhost:3003/register/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
            }).then(res =>
                res.json()
                .then(data => {console.log(data)})
            ).catch(err => console.log(err));
       }
    };
  
    render() {
      return (
        <UserContext.Provider value={this.state}>
          {this.props.children}
        </UserContext.Provider>
      );
    }
  }
  