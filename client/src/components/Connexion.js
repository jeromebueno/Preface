import React, {useContext, useState} from 'react';

import styles from 'styled-components'
import Login from './User/Login';
import Register from './User/Register';
import UserContext from '../context/UserContext';

const Container = styles.div`
   margin-top: 72px
`
const userImg = require("../img/user_large.png");


export default function Connexion() {
    const [open, setOpen] = useState(false);
    const [wantConnect, setWantConnect] = useState(true);
    const context = useContext(UserContext);

  return (
      <Container className="column col-sm-12 col-9 col-mx-auto">
          <div className="card" style={{padding: 24, marginBottom: 24}}>
              <div className="card-body">
              {wantConnect ?
                  <Login/> :
                  <Register/>}
              </div>
          </div>
          <button className="btn btn-link p-centered" onClick={() => {setWantConnect(!wantConnect)}}>{ wantConnect ? "Je n'ai pas encore de compte (gratuit)" : "J'ai déjà un compte"}</button>

      </Container>
  );
}