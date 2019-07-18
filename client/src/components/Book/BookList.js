import React,{useContext,useEffect, useState} from 'react';
import styled from 'styled-components'
import BookContext from '../../context/BookContext'
import BookCard from '../Book/BookCard'

const Container = styled.div`
  width:100%;
  overflow: hidden;
`

export default function BookList(props) {
  const context = useContext(BookContext)
  
  useEffect(() => {
      if(props.favoriteBooks){
        context.loadFavorite(props.favoriteBooks);
      }else{
        context.loadTrends();
      }
  }, []);


  return (
    <Container>    
        <div className="container">
            <div className="columns">
              {console.log(context.favorites,context.trends)}
              {
                props.favoriteBooks ?
                context.favorites.map((book) =>
                <div className="column col-3 mb-2">
                  <BookCard book={book} key={book.id} miniature={props.miniature}/>
                </div>) :
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