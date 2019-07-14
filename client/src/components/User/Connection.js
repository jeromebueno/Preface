import React,{useContext,useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import UserContext from '../../context/UserContext';

const Connection = () => {
  const [open, setOpen] = useState(false);
  const [wantConnect, setWantConnect] = useState(true);
  const context = useContext(UserContext);
  let button;
  if(context.logged){
    button =<> <a className="btn btn-primary float-right" href="#logModal" component="a">Profile</a></>
  }
else{
  button = <>     <a className="btn btn-primary float-right" href="#logModal" component="a">Connexion / inscription</a>
      <div className="modal modal-lg" id="logModal">
          <a href="#close" className="modal-overlay" aria-label="Close"></a>
          <div className="modal-container">
              <div className="modal-header">
                  <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
                  <div className="modal-title h5">{ wantConnect ? "Se connecter" : "S'inscrire"}</div>
              </div>
              <div className="modal-body">
                  <div className="content">
                      <div>
                          {wantConnect ?
                              <Login/> :
                              <Register/>}
                      </div>

                  </div>
              </div>
              <div className="modal-footer float-left">
                  <button className="btn btn-link" onClick={() => {setWantConnect(!wantConnect)}}>{ wantConnect ? "Je n'ai pas encore de compte (gratuit)" : "J'ai déjà un compte"}</button>

              </div>



          </div>
      </div></>
}
  return (
      <>
          {button}
        </>
  );
}

export default Connection;

const StyledButton = styled.button`
    background: #303C41;
    color:white;
    height: 32px;
    font-familly: 'Fira Sans', sans-serif;
    font-weight: 500
`

const Container = styled.div`
  text-align:center; 
`

