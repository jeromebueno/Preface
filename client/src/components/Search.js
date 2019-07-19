import React, { useContext,useEffect } from 'react';
import styled from 'styled-components'
import BookContext from '../context/BookContext';
import BookList from '../components/Book/BookList'

const Container = styled.div`
  width:100%;
  overflow: hidden;
`

export default function Search({ match }) {
  const context = useContext(BookContext);
  
  useEffect(() => {
    context.searchBook(match.params.target)
  },[])

  return (
    <Container className="column col-sm-12 col-9 col-mx-auto">
        <h1>Resultat de ma recherche</h1>
        {context.books.length === 0?
          <p>Aucun livre trouvé</p>:
          <BookList miniature={true} books={context.books}/>
        }
    </Container>
  );
}