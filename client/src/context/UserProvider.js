import React from 'react'
import {toast} from 'react-toastify';
import UserContext from './UserContext'

export default class UserProvider extends React.Component {
    notifyRegister = (user) => toast.success("Inscription réussie " + user + ", redirection ...", {
        position: toast.POSITION.TOP_CENTER
    });
    notifyLog = (user) => toast.success("Bienvenue " + user + " !", {
        position: toast.POSITION.TOP_CENTER
    });
    notifyErr = (err) => toast.error(err, {
        position: toast.POSITION.TOP_CENTER
    });
    state = {
        login: (user) => {
            fetch('http://localhost:3003/login/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => {
                console.log(res)
                    if (res.status === 201) {
                        res.json()
                            .then(data => {
                                sessionStorage.setItem('token', JSON.stringify(data.token))
                                sessionStorage.setItem('user', JSON.stringify(data.user))
                                sessionStorage.setItem('logged', JSON.stringify(data.user._id))
                                this.forceUpdate();
                                window.location = "/#close";
                                this.notifyLog(data.user.firstname);
                            })
                    } else{
                        this.notifyErr("Mauvais identifiant ou mot de passe")
                    }
                }
            ).catch(err => {
                console.log(err);
                this.notifyErr(err)
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
            }).then(res =>
                res.json()
                    .then(data => {
                        this.notifyRegister(data.firstname);
                        fetch('http://localhost:3003/login/', {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({"email": user.email, "password": user.password})
                        }).then(res =>
                            res.json()
                                .then(data => {
                                    sessionStorage.setItem('token', JSON.stringify(data.token))
                                    sessionStorage.setItem('user', JSON.stringify(data.user))
                                    sessionStorage.setItem('logged', JSON.stringify(data.user._id))
                                    window.location = "/#close";
                                })
                        ).catch(err => console.log(err));
                    })
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
  