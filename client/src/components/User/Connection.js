import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const Connection = () => {
    const userImg = require("../../img/user.png");
    const userData = window.sessionStorage.getItem('user');
    const [open, setOpen] = useState(false);
    const [wantConnect, setWantConnect] = useState(true);
    const handleClick = (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('logged');
    };

    let button;
    let userDataParsed;
    if (userData !== null && userData !== undefined) {
         userDataParsed = JSON.parse(userData);
         button = <>
            <div className="popover popover-bottom float-right">

                    <img src={userImg} className="icon"/>
                    <a href="/profile"
                       className="btn btn-link float-right">{userDataParsed.firstname} {userDataParsed.lastname}</a>

                <div className="popover-container">
                    <div className="card">

                        <div className="card-body">
                            <a href="/profile" style={{width: '100%'}} className="btn btn-secondary mb-2">Profile</a>
                            <button onClick={handleClick} style={{width: '100%'}} className="btn btn-primary">Déconnexion</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    }
    else {
         button = <>
            <a className="btn btn-primary float-right" href="#logModal" component="a">Connexion / inscription</a>
            <div className="modal modal-lg" id="logModal">
                <a href="#close" className="modal-overlay" aria-label="Close"></a>
                <div className="modal-container">
                    <div className="modal-header">
                        <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
                        <div className="modal-title h5">{wantConnect ? "Se connecter" : "S'inscrire"}</div>
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
                        <button className="btn btn-link" onClick={() => {
                            setWantConnect(!wantConnect)
                        }}>{wantConnect ? "Je n'ai pas encore de compte (gratuit)" : "J'ai déjà un compte"}</button>

                    </div>


                </div>
            </div>
        </>
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

