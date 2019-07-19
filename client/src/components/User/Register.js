import React, {useContext} from 'react';
import UserContext from '../../context/UserContext';
import {toast} from 'react-toastify';

const Register = () => {
    const notifyRegister = (user) => toast.success("Inscription réussie " + user + ", redirection ...", {
        position: toast.POSITION.TOP_CENTER
    });
    const notifyErr = (err) => toast.error(err, {
        position: toast.POSITION.TOP_CENTER
    });
    const context = useContext(UserContext);
    let errors = false;
    let firstname = React.createRef();
    let lastname = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let confirmPassword = React.createRef();
    let dob = React.createRef();
    let terms = React.createRef();

    const checkCompleteRegister = (user, callback) => {
        console.log(user);
        errors = false;
        if (user.password !== user.confirmPassword) {
            errors = true;
            notifyErr("Les mots de passe ne correspondent pas");
        }
        if (!user.terms) {
            errors = true;
            notifyErr("Veuillez accepter les conditions d'utiisations");
        }
        console.log(errors);
        callback();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            "firstname": firstname.current.value,
            "lastname": lastname.current.value,
            "email": email.current.value,
            "password": password.current.value,
            "confirmPassword": confirmPassword.current.value,
            "dob": dob.current.value,
            "terms": terms.current.checked,
        };
        console.log(user);
        checkCompleteRegister(user, function(){

            if (!errors) {
                context.register(user).then(function(res){
                    if(res === false){
                        notifyErr("Utilisateur déjà existant");
                    }
                    else{
                        notifyRegister();
                        context.login(user).then(function(){
                            window.location = "/profile"
                        });

                    }

                });
            }
        });

    }

    return (
        <div>
            <h2>Inscription</h2>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="columns">
                    <div className="column col-6">
                <div className="form-group">
                    <label className="form-label" htmlFor="firstname">Prénom</label>
                    <input className="form-input" id="firstname" name="firstname" type="text" ref={firstname} required/>
                </div>
                    </div>
                    <div className="column col-6">
                <div className="form-group">
                    <label className="form-label" htmlFor="lastname">Nom</label>
                    <input className="form-input" id="lastname" name="lastname" type="text" ref={lastname} required/>
                </div>
                    </div>
                    <div className="column col-12">
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" id="email" name="email" type="email" ref={email} required/>
                </div>
                    </div>
                    <div className="column col-6">
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Mot de passe</label>
                    <input className="form-input" id="password" name="password" type="password" ref={password}
                           required/>
                </div>
                    </div>
                    <div className="column col-6">
                <div className="form-group">
                    <label className="form-label" htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input className="form-input" id="confirmPassword" name="confirmPassword" type="password"
                           ref={confirmPassword} required/>
                </div>
                    </div>
                    <div className="column col-12">
                <div className="form-group">
                    <label className="form-label" htmlFor="dob">Date de naissance</label>
                    <input className="form-input" id="dob" name="dob" type="date" ref={dob}/>
                </div>
                    </div>
                    <div className="column col-6 mb-2 mt-2">
                <div className="form-group">
                    <label className="form-checkbox" htmlFor="terms">
                        <input className="checkbox" id="terms" name="terms" type="checkbox" ref={terms} required/> <i className="form-icon"></i>Accepter les conditions
                    </label>
                </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-2" value="Je m'inscris"/>
            </form>
        </div>
    );
};
export default Register;


