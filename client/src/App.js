import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Utils/Header';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'
import Book from './components/Book/Book';
import BookProvider from './context/BookProvider';

function App() {
  return (
    <Body>
      <div className="App">
        <div className="container">
            <div className="columns" >
                <ToastContainer />
                <Header/>
                  <Router>
                  <div className="column col-12">
                    <Route exact path="/" component={Home} />
                    <BookProvider>
                      <Route exact path="/book/:id" component={Book} />
                    </BookProvider>
                  </div>
                </Router>
              </div>
            </div>
        </div>
    </Body>
  );
}

const Body = styled.div`
  height:100vh
  padding: 32px 48px;
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: left;
`

export default App;