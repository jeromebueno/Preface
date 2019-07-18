import React from 'react';
import PersonnalAdviceCard from '../Advice/PersonnalAdviceCard';
import styled from 'styled-components'
import BookProvider from '../../context/BookProvider'

export default function AdviceList(props) {
  let advices = props.advices === undefined ? null : props.advices

  return (
    <Container>
        { !(advices == null)?
            advices.map(advice => <BookProvider>
                <PersonnalAdviceCard advice={advice}/>
            </BookProvider>)
            : null
        }
    </Container>
  );
}

const Container = styled.div`
  padding:24px;
  background: #FFFFFF;
  overflow: hidden;
`

