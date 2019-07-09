import React,{useContext,useEffect, useRef} from 'react';
import styled from 'styled-components'
import BookContext from '../../context/BookContext'
import BookCard from '../Book/BookCard'

const Container = styled.div`
  width:100%;
  overflow: hidden;
`

export default function BookList(props) {
  const context = useContext(BookContext)
  const ref = useRef()
  
  useEffect(() => { // ComponentDidMount
    context.loadBooks();
    ref.current = true;
  }, []);

  return (
    <Container>
      {
        context.books.map((book) =>
          <BookCard book={book} key={book.id} miniature={props.miniature}/>
        )
      }
    </Container>
  );
}