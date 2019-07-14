import React, {useContext} from 'react';
import BookList from './Book/BookList'
import styles from 'styled-components'
import BookProvider from "../context/BookProvider";
import UserContext from '../context/UserContext';

const Container = styles.div`
   margin-top: 72px
`
const userImg = require("../img/user_large.png");


export default function Home() {
    const context = useContext(UserContext);
    console.log(context);
    const userData = JSON.parse(window.sessionStorage.getItem('user'));
  return (
      <Container className="column col-sm-12 col-9 col-mx-auto">
          <div className="card" style={{padding: 24}}>
              <div className="card-body">
                  <img className="float-left" style={{marginRight: 32}} width="84px" src={userImg}/>
                  <div>
                      <h2>
                      {userData.firstname }  {userData.lastname }
                      </h2>
                      <p>   {userData.email }</p>
                  </div>
              </div>
          </div>

      <div style={ {marginTop: 32}}>
          <div style={{marginTop: 40}} className="divider"/>
        <h2 style={{marginTop: 40}}>Mes avis</h2>
        <BookProvider>
            <BookList miniature={true}/>
        </BookProvider>
      </div>
    </Container>
  );
}