import React, { useState} from 'react';

import styles from 'styled-components'
import Login from './User/Login';
import Register from './User/Register';


const Container = styles.div`
   margin-top: 72px
`



export default function Connexion() {

    const [wantConnect, setWantConnect] = useState(true);


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