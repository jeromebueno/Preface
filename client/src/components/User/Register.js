import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';

const Register = () => {
    const context = useContext(UserContext)
    const [errors, setErrors] = useState([])

    let firstname = React.createRef();
    let lastname = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let confirmPassword = React.createRef();
    let dob = React.createRef();
    let terms = React.createRef();

    const checkCompleteRegister = (user) => {
        let error = [];
        if (user.password !== user.confirmPassword) {
            error.push("Les mots de passe ne correspondent pas")
        }
        if (!user.terms) {
            error.push("Veuillez accepter les conditions d'utiisations")
        }
        setErrors(error)
    }

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
        }
        checkCompleteRegister(user)
        if (errors.length == 0) {
            context.register(user)
        }
    }

    return (
        <Container>
            <Form className="form-horizontal" onSubmit={handleSubmit}>
                <div id="error">
                    {errors.map(err => <p>{err}</p>)}
                </div>
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
                        <input className="checkbox" id="terms" name="terms" type="checkbox" ref={terms} required/> <i
                        className="form-icon"></i>Accepter les conditions
                    </label>
                </div>
                    </div>
                </div>
                <button className="btn btn-primary mt-2">Inscription</button>
            </Form>
        </Container>
    );
}
export default Register;
const Container = styled.div`
  display: inline-block;
`

const Form = styled.form`
  line-height: 14px; 
`

