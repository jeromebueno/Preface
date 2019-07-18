import React,{useRef,useEffect, useContext} from 'react';
import BookNotation from '../Book/Attribute/BookNotation'
import styled from 'styled-components';
import BookContext from '../../context/BookContext'
const userImg = require("../../img/user.png");


export default function PersonnalAdviceCard(props) {
  let advice = props.advice === undefined ? null : props.advice;
  let ref = useRef();
  let context = useContext(BookContext)
  

  useEffect(() => { // ComponentDidMount
    context.findBook(advice.bookId);
    ref.current = true;
  }, []);

  const notation = {
    note: advice.score,
    numberOfReviews: null
  }
  
  return (
    <Container>
        {!(advice == null)?
        <>
                {!(context.book.book == undefined)?
                <BookImage img={context.book.book.image}></BookImage>: null
                }
                <div className="columns">
                <div className="column col-6">
                <img className="float-left" src={userImg}/>
                <h4 style={{marginLeft: 16, display: "inline-block"}}>{advice.title}</h4>
                </div>
                <BookNotation className="column col-6 float-right" notation={notation} note={advice.note} readonly/>
            </div>
            <p style={{marginLeft: 56, display: "inline-block"}}>{advice.description}</p>
        </> : null
      }
    </Container>
  );
}

const Container = styled.div`
  padding:24px;
  background: #FFFFFF;
  overflow: hidden;
`

const BookImage = styled.div`
  height: 200px;
  width:100%;
  margin: 24px 0;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #000; 
  border: 0 ;
`

