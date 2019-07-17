import React from 'react'
import AdviceContext from './AdviceContext'

export default class AdviceProvider extends React.Component {
    state = {
        loadUserAdvice : () => {
            let userId = JSON.parse(sessionStorage.getItem('logged'));
            fetch('http://localhost:3003/user/'+userId+'/avis/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
            },
            }).then(res =>
                res.json()
                .then(data => 
                    this.setState({
                        userAdvice: data.avis
                    }))
            ).catch(err => console.log(JSON.stringify(err)));
            },
    };

    render() {
        return (
            <AdviceContext.Provider value={this.state}>
                {this.props.children}
            </AdviceContext.Provider>
        );
    }
}
  