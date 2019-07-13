import React from 'react'
import { toast } from 'react-toastify';
import UserContext from './UserContext'

export default class UserProvider extends React.Component {
    notify = (user) => toast.success("Inscription réussie " + user, {
        position: toast.POSITION.TOP_CENTER
    });
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
                    .then(data => {
                                  sessionStorage.setItem('token',JSON.stringify(data.token))
                                  sessionStorage.setItem('logged',JSON.stringify(data.user._id))
                                  this.setState({logged:true});
                                  this.setState({userData: data});
                                  window.location = "/#close"
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
                .then(data => {
                    console.log(data);
                    this.notify(data.firstname);
                })
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
  