import React from 'react';
import BookNotation from '../Book/Attribute/BookNotation'
import styled from 'styled-components';

export default function AdviceCard(props) {
  const notation = {
      numberOfReviews : null,
      note: props.advice.score
  }

  return (
    <Container> 
        <Title>{props.advice.title}</Title>
        <BookNotation notation={notation}/>
        <Description>{props.advice.description}</Description>
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
