import React,{useContext,useEffect,useState,useRef} from 'react';
import BookContext from '../../context/BookContext'
import BookCard from './BookCard';
import styled from 'styled-components';
import AdviceCard from '../Advice/AdviceCard';
import GiveAdviceCard from '../Advice/GiveAdviceCard';

export default function Book({ match }) {
  const context = useContext(BookContext)
  const ref = useRef()
  
  useEffect(() => { // ComponentDidMount
    context.findBook(match.params.id)
    ref.current = true;
  }, []);

  return (
    <Container> 
      { !(context.book.book == undefined) ?
      <>
        <Test>
          <BookCard book={context.book.book} key={context.book.book._id}/>
          <GiveAdviceCard/>
        </Test>
        <h3>Avis des utilisateurs</h3>
        <Test>
          {context.book.avis.map(advice => <AdviceCard advice={advice}/>) }
         
        </Test>
      </> : null
      }
    </Container>
  );
}

const Container = styled.div`
  width:100%;
  overflow: hidden;
`

const Test = styled.div`
  display:inline-flex;  
`

