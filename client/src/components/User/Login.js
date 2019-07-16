import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';
import {toast} from 'react-toastify';


const Login = () => {
    const notifyLog = (user) => toast.success("Bienvenue " + user + " !", {
        position: toast.POSITION.TOP_CENTER
    });
    const notifyErr = (err) => toast.error(err, {
        position: toast.POSITION.TOP_CENTER
    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(UserContext);
    const handleChange = (e) => {
        let newValue = e.target.value;
        switch (e.target.id) {
            case 'email':
                setEmail(newValue)
                break;
            case 'password':
                setPassword(newValue)
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            "email": email,
            "password": password
        };
        context.login(user).then(function(res){
            console.log(res);
            if(res === false){
                notifyErr("Utilisateur introuvable");
            }
            else{
                notifyLog(user.firstname);
                window.location = "/";
            }
        });
    };
    return (
        <Container>
            <h2>Connexion</h2>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" id="email" name="email" type="email" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-input" id="password" name="password" type="password"
                           onChange={handleChange}/>
                </div>
                <input type="submit" className="btn btn-primary mt-2" value="Se connecter"/>
            </Form>
        </Container>
    );
}
export default Login;

const Form = styled.form`
  line-height: 14px; 
`

const Container = styled.form`

`