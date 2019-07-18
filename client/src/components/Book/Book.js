import React,{useContext,useEffect,useRef} from 'react';
import BookContext from '../../context/BookContext'
import BookCard from './BookCard';
import styled from 'styled-components';
import AdviceCard from '../Advice/AdviceCard';
import GiveAdviceCard from '../Advice/GiveAdviceCard';

export default function Book({ match }) {
  const context = useContext(BookContext)
  
  useEffect(() => { // ComponentDidMount
    context.findBook(match.params.id)
  }, []);

  if(context.book.book === undefined) return <div></div>

  return (
    <Container style={{marginTop: 32}} className="column  col-12 col-mx-auto">
        <div className="columns" style={{width: "100%"}}>
          <div className="column col-sm-12 col-8 col-mx-auto">
            <BookCard book={context.book.book} key={context.book.book._id}/>
          </div>
          <div className="column col-sm-12 col-4 col-mx-auto">
            <GiveAdviceCard advices={context.book.avis}/>
          </div>
        </div>
          <div style={{marginTop: 40}} className="divider"/>
      <div style={{marginTop: 32}} className="columns" style={{width: "100%"}}>
        <div className="columns" style={{width: "100%"}}>
            <div style={{marginTop: 32}} className="column col-12 mb-2">
            <h3>Avis des utilisateurs</h3>
            </div>
            {context.book.avis.map(advice =>  <div className="column col-6 col-sm-12 mb-2"><AdviceCard advice={advice}/></div>) }
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width:100%;
  overflow: hidden;
`

