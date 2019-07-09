import React,{useContext,useEffect,useState,useRef} from 'react';
import AdviceContext from '../../context/AdviceContext'
import BookNotation from '../Book/Attribute/BookNotation'
import styled from 'styled-components';

export default function AdviceCard(props) {
  const context = useContext(AdviceContext)
  const ref = useRef();
  const notation = {
      numberOfReviews : 84,
      note: 4
  }

  useEffect(() => { // ComponentDidMount
    context.getAdvices(props.id);
    ref.current = true;
  }, []);

  return (
    <Container> 
        <Title>Mon avis</Title>
        <BookNotation notation={notation}/>
        <Description>Voici un avis, il permet de donner un avis sur un livre et de savoir si il est bien</Description>
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
