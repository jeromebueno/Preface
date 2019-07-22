import React, {} from 'react';
import {Link} from "react-router-dom";

const Connection = () => {
    const userImg = require("../../img/user.png");
    const userData = window.sessionStorage.getItem('user');
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
                    <img src={userImg} alt="" className="icon"/>
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




