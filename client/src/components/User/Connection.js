import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

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
        window.location = "/"
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
                            <Link to="/profile" style={{width: '100%'}} className="btn btn-secondary mb-2">Profile</Link>
                            <Link to="/register" onClick={handleClick} style={{width: '100%'}} className="btn btn-primary">Déconnexion</Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    }
    else {
         button = <>
            <Link to="/register" className="btn btn-primary float-right">Connexion / inscription</Link>
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

