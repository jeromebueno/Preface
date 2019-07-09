import React,{useContext, useState} from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';

const Register = () => {
  const context = useContext(UserContext)
  const [errors,setErrors] = useState([])
  
  let firstname = React.createRef();
  let lastname = React.createRef();
  let email = React.createRef();
  let password = React.createRef();
  let confirmPassword = React.createRef();
  let dob = React.createRef();
  let terms = React.createRef();

  const checkCompleteRegister = (user) => {
    let error = [];
    if(user.password !== user.confirmPassword){
      error.push("Les mots de passe ne correspondent pas")
    } if(!user.terms){
      error.push("Veuillez accepter les conditions d'utiisations")
    }
    setErrors(error)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const user = {
        "firstname":firstname.current.value,
        "lastname":lastname.current.value,
        "email": email.current.value,
        "password": password.current.value,
        "confirmPassword": confirmPassword.current.value,
        "dob": dob.current.value,
        "terms": terms.current.checked,
    }	
    checkCompleteRegister(user)
    if(errors.length == 0){
      context.register(user)
    }
  }

  return (
    <Container>
        <h2>S'inscrire</h2>
        <Form onSubmit={handleSubmit}>
            <div id="error">
              {errors.map(err => <p>{err}</p>)}
            </div>

            <label htmlFor="firstname">Firstname</label>
            <input id="firstname" name="firstname" type="text" ref={firstname} required/>

            <label htmlFor="lastname">Lastname</label>
            <input id="lastname" name="lastname" type="text" ref={lastname} required/>

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" ref={email} required/>  

            <label htmlFor="password" >Password</label>
            <input id="password" name="password" type="password" ref={password} required/>

            <label htmlFor="confirmPassword" >Confirm password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" ref={confirmPassword} required/>

            <label htmlFor="dob">Date of birth</label>
            <input id="dob" name="dob" type="date" ref={dob}/>

            <label htmlFor="terms">Accepter les conditions</label>
            <input id="terms" name="terms" type="checkbox" ref={terms} required/>

            <button>Valider</button>
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

