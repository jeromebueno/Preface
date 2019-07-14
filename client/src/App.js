import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Utils/Header';
import Home from './components/Home'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'
import Book from './components/Book/Book';
import BookProvider from './context/BookProvider';
import UserProvider from './context/UserProvider';

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
                      <UserProvider>
                        <Route exact path="/profile" component={Profile} />
                      </UserProvider>
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
  padding: 40px 5vw;
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: left;
`

export default App;