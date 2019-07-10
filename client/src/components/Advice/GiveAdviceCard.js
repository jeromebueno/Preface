import React,{useContext} from 'react';
import styled from 'styled-components';
import BookNotation from '../Book/Attribute/BookNotation';
import BookContext from '../../context/BookContext';

export default function GiveAdviceCard() {
  const context = useContext(BookContext)

  const notation = {
        numberOfReviews : 84,
        note: 4
  }

  let score = React.createRef();
  let title = React.createRef();
  let text = React.createRef();
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const advice = {
      "title": title.current.value,
      "description": text.current.value,
      "score": score.current.value,
      "userId": JSON.parse(localStorage.getItem('logged')),
      "bookId": window.location.pathname.split('/').slice(-1)[0]
    }
    context.sendAdvice(advice);
    context.findBook(advice.bookId);
  }

  return (
    <Container> 
      <form onSubmit={handleSubmit}>
        <input type="number" id="score" name="score" ref={score} required/>
        <BookNotation notation={notation} readonly/>
        <input type="text"  id="title" name="title" ref={title} required/>
        <textarea type="text"  id="text" name="text" ref={text} required/>
        <button>Envoyer</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  max-width:  580px;
  max-height: 200px;
  width:50%;
  padding:16px;
  background: #FFFFFF;
  overflow: hidden;
  margin:20px;
`

const Title = styled.h2`
`

const Description = styled.div`
`
