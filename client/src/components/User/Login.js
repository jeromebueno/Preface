import React,{useContext,useState} from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const context = useContext(UserContext)

  const handleChange = (e) => {
      let newValue = e.target.value;
      switch(e.target.id){
        case 'email':
            setEmail(newValue)
            break;
        case 'password':
            setPassword(newValue)
            break;
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const user = {
        "email": email,
        "password": password
    }	
    context.login(user)
  }

  return (
    <Container>
        <h2>Se connecter</h2>
        <Form onSubmit={handleSubmit}>
            <label htmlFor="username">Email</label>
            <input id="email" name="email" type="email" onChange={handleChange}/>

            <label htmlFor="password" >Password</label>
            <input id="password" name="password" type="password" onChange={handleChange}/>

            <button>Valider</button>
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