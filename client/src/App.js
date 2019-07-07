import React from 'react';
import './App.css';
import Header from './components/Utils/Header';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'


function App() {
  return (
    <Body>
      <div className="App">
        <Header/>
          <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    </Body>
  );
}

const Body = styled.div`
  background: #F6F8F9;
  height:100vh
`

export default App;