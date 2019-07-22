import React,{} from 'react';
import styled from 'styled-components'
import BookCard from '../Book/BookCard'

const Container = styled.div`
  width:100%;
  overflow: hidden;
`

export default function BookList(props) {
  return (
    <Container>    
        <div className="container">
            <div className="columns">
                {props.books.map((book) =>
                <div className="column col-3 mb-2">
                  <BookCard book={book} key={book.id} miniature={props.miniature}/>
                </div>)}
            </div>
        </div>
    </Container>
  );
}