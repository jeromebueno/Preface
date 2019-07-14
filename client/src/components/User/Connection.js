import React,{useContext,useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import UserContext from '../../context/UserContext';

const Connection = () => {
  const [open, setOpen] = useState(false);
  const [wantConnect, setWantConnect] = useState(true);
  const [isLogged,setIsLogged] = useState(false);
  const context = useContext(UserContext)

  const ref = useRef()
  
  useEffect(() => { // ComponentDidMount
    setIsLogged(!(localStorage.getItem('logged') == undefined))
    ref.current = true;
  }, []);


  const bindOpen = () => {
    setOpen(!open)
  }

  return (
    <Container  open={open}>
        <StyledButton onClick={bindOpen} logged={context.logged}>
          {
            open? "Fermer" :
            isLogged? 
            "Mon compte":"Connexion" }
        </StyledButton>
        { open ?
              <div>
              {wantConnect ?
                  <Login/> :
                  <Register/>}
              <a href="#" onClick={() => {setWantConnect(!wantConnect)}}>{ wantConnect ? "S'inscrire" : "Se connecter"}</a>
              </div> : null
        }
    </Container>
  );
}

export default Connection;

const StyledButton = styled.button`
    background:black;
    color:white;
`

const Container = styled.div`
  line-height: 10vh;
  text-align:center; 
  background: ${props => props.open ? 'white' : 'none'};
  position:absolute;
  box-shadow: ${props => props.open ? '0 1px 2px 0 rgba(0,0,0,.15)' : 'none'};
  margin: 20px;
  margin-bottom: 50px;
  display: inline-block;
`

