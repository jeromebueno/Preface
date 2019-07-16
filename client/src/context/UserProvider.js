import React from 'react'
import UserContext from './UserContext'

export default class UserProvider extends React.Component {
    state = {
        login: (user) => {
           return fetch('http://localhost:3003/login/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => {
                    if (res.status === 201) {
                         res.json()
                            .then(data => {
                            sessionStorage.setItem('token', JSON.stringify(data.token));
                            sessionStorage.setItem('user', JSON.stringify(data.user));
                            sessionStorage.setItem('logged', JSON.stringify(data.user._id))
                            return Promise.resolve(data);
                        })
                    } else{
                        return Promise.resolve(false);
                    }
                }
            ).catch(err => {
                console.log(err);
            });
        },
        register: (user) => {
            console.log(user);
            fetch('http://localhost:3003/register/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => {
                    if (res.status === 201) {
                        res.json()
                            .then(data => {
                                return Promise.resolve(data);
                            })
                    }
                    else{
                        return Promise.resolve(false);
                    }
                }
            ).catch(err => console.log(err));
        },
        findAvis: (user) => {
            fetch('http://localhost:3003/user/' + +'/avis', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res =>
                res.json()
                    .then(data => {
                        console.log(data)
                    })
            ).catch(err => console.log(err));
        },
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
  