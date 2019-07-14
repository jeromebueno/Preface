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
        <Form onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input"  id="email" name="email" type="email" onChange={handleChange}/>
            </div>
            <div className="form-group">
            <label className="form-label" htmlFor="password" >Password</label>
            <input  className="form-input" id="password" name="password" type="password" onChange={handleChange}/>
            </div>
            <button  className="btn btn-primary mt-2">Se connecter</button>
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