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
  
  useEffect(() => {
    context.loadTrends();
    ref.current = true;
  }, []);

  return (
    <Container>
        <div className="container">
            <div className="columns">
      {
        context.trends.map((book) =>
            <div className="column col-3 mb-2">
              <BookCard book={book} key={book.id} miniature={props.miniature}/>
            </div>
        )
      }
            </div>
        </div>
    </Container>
  );
}