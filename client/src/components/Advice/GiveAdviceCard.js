import React,{useContext, useState,useEffect} from 'react';
import styled from 'styled-components';
import BookNotation from '../Book/Attribute/BookNotation';
import BookContext from '../../context/BookContext';

export default function GiveAdviceCard(props) {
  const context = useContext(BookContext);
  const userImg = require("../../img/user_large.png");
  let [id,setId] = useState(null)
  let [score,setScore] = useState();
  let [title,setTitle] = useState("");
  let [text,setText] = useState("");

  useEffect(() => { // ComponentDidMount
    init(); // Fix
    const userId = JSON.parse(sessionStorage.getItem('logged'));
    const advice = props.advices.filter(advice => advice.userId === userId)[0]
    if(!(advice === undefined)){
      setId(advice._id)
      setTitle(advice.title);
      setText(advice.description);
      setScore(advice.score)
    }
  }, [props.advices]);

  const init = () => {
    setTitle("")
    setText("")
    setScore("")
    setId(null)
  }

  const handleChange = (e) => {
    let newValue = e.target.value;
    switch (e.target.id) {
        case 'title':
            setTitle(newValue)
            break;
        case 'text':
            setText(newValue)
            break;
       default:
         break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const newAdvice = {
      "title": title,
      "description": text,
      "score": score,
      "userId": JSON.parse(sessionStorage.getItem('logged')),
      "bookId": window.location.pathname.split('/').slice(-1)[0]
    };

    if(id == null){
      context.sendAdvice(newAdvice);
    }else{
      context.updateAdvice(id,newAdvice)
    }

    context.findBook(newAdvice.bookId);
  };

  return (
    <Container className="card" style={{width: "100%"}}>
      <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <img src={userImg}  alt="" width="84px" className="p-centered mb-2"/>
        <BookNotation style={{width: "fit-content", margin: "24px auto"}} setScore={setScore} score={score}/>
        <input className="form-input mb-2" type="text" id="title" name="title" onChange={handleChange} value={title} placeholder="Titre d'avis" required/>
        <textarea placeholder="Decrivez votre experience de lecture" className="form-input mb-2"  value={text}  type="text"  id="text" name="text" onChange={handleChange} required/>
        <button className="btn btn-primary" style={{width: "100%"}}>{id ? "Modifier mon avis": "Donner mon avis"}</button>
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

