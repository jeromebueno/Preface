import React from 'react';
import styled from 'styled-components';
import BookNotation from '../Book/Attribute/BookNotation';

export default function GiveAdviceCard() {
  const notation = {
        numberOfReviews : 84,
        note: 4
  }
  return (
    <Container> 
        <BookNotation notation={notation} readonly/>
        <textarea>

        </textarea>
        <button>Envoyer</button>
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
