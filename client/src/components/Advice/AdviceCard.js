import React from 'react';
import BookNotation from '../Book/Attribute/BookNotation'
import styled from 'styled-components';
const userImg = require("../../img/user.png");


export default function AdviceCard(props) {
  const notation = {
      numberOfReviews : null,
      note: props.advice.score
  }
  return (
    <Container>
        <div className="columns">
            <div className="column col-6">
            <img className="float-left" alt="" src={userImg}/>
            <h4 style={{marginLeft: 16, display: "inline-block"}}>{props.advice.title}</h4>
            </div>
            <BookNotation className="column col-6 float-right" notation={notation} readonly/>
        </div>
        <p style={{marginLeft: 56, display: "inline-block"}}>{props.advice.description}</p>
    </Container>
  );
}

const Container = styled.div`
  padding:24px;
  background: #FFFFFF;
  overflow: hidden;
`

