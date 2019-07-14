import React from 'react';
import SearchBar from './Utils/SearchBar'
import BookList from './Book/BookList'
import styles from 'styled-components'
import BookProvider from "../context/BookProvider";

const Container = styles.div`
   margin-top: 72px
`

export default function Home() {
  return (
      <Container className="column col-sm-12 col-9 col-mx-auto">
        <div>
        <h2>Donnez un avis à vos lectures</h2>
        <SearchBar/>
      </div>

      <div style={ {marginTop: 32}}>
          <div className="divider mt-2 mb-2"></div>
        <h2>Trends</h2>
        <BookProvider>
            <BookList miniature={true}/>
        </BookProvider>
      </div>
    </Container>
  );
}