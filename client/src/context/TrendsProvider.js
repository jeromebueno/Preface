import React from 'react'
import TrendsContext from './TrendsContext'

export default class TrendsProvider extends React.Component {
    state = {
      trends : [],
      trend: {},
      loadTrends: () => {
        fetch('http://localhost:3003/trends/', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          }).then(res =>
              res.json()
              .then(data => 
                this.setState({
                  trends: data
                }))
          ).catch(err => console.log(JSON.stringify(err)));
      }
    };
  
    render() {
      return (
        <TrendsContext.Provider value={this.state}>
          {this.props.children}
        </TrendsContext.Provider>
      );
    }
  }
  