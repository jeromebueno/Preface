import React, { useContext, useEffect } from 'react';
import SearchBar from './Utils/SearchBar'
import BookList from './Book/BookList'
import styles from 'styled-components'
import BookProvider from "../context/BookProvider";
import BookContext from '../context/BookContext';

const Container = styles.div`
   margin-top: 72px
`

export default function Home() {
  const context = useContext(BookContext);

  useEffect(() => {
    context.loadTrends()
  },[]);

  return (
      <Container className="column col-sm-12 col-9 col-mx-auto">
        <div>
        <h1>Trouvez et donnez votre avis sur une lecture</h1>
            <BookProvider>
                 <SearchBar/>
            </BookProvider>
      </div>

      <div style={ {marginTop: 32}}>
          <div style={{marginTop: 40}} className="divider"/>
        <h2 style={{marginTop: 40}}>Tendances</h2>
        <BookList miniature={true} books={context.trends}/>
      </div>
    </Container>
  );
}