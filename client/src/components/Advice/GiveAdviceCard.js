import React,{useContext, useState} from 'react';
import styled from 'styled-components';
import BookNotation from '../Book/Attribute/BookNotation';
import BookContext from '../../context/BookContext';

export default function GiveAdviceCard() {
    const userData = JSON.parse(window.sessionStorage.getItem('user'));
    console.log(userData);
  const context = useContext(BookContext);
    const userImg = require("../../img/user_large.png");
  let [score,setScore] = useState();
  let title = React.createRef();
  let text = React.createRef();
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const advice = {
      "title": title.current.value,
      "description": text.current.value,
      "score": score,
      "userId": JSON.parse(sessionStorage.getItem('logged')),
      "bookId": window.location.pathname.split('/').slice(-1)[0]
    };
    context.sendAdvice(advice);
    context.findBook(advice.bookId);
  };

  return (
    <Container className="card" style={{width: "100%"}}>
      <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <img src={userImg} width="84px" className="p-centered mb-2"/>
        <BookNotation style={{width: "fit-content", margin: "24px auto"}} setScore={setScore} />
        <input className="form-input mb-2" type="text" id="title" name="title" ref={title} placeholder="Titre d'avis" required/>
        <textarea placeholder="Decrivez votre experience de lecture" className="form-input mb-2" type="text"  id="text" name="text" ref={text} required/>
        <button className="btn btn-primary" style={{width: "100%"}}>Donner mon avis</button>
          </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding:32px;
  background: #FFFFFF;
  overflow: hidden;
`

const Title = styled.h2`
`

const Description = styled.div`
`
