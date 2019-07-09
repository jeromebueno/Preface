import React from 'react';
import SearchBar from './Utils/SearchBar'
import BookProvider from '../context/BookProvider'
import BookList from './Book/BookList'
import styles from 'styled-components'

const Container = styles.div`
    padding-left:10%;
`

export default function Home() {
  return ( <Container>
        <div>
        <h2>Donnez un avis pour vos lectures</h2>
        <SearchBar/>
      </div>
      <div>
        <h2>Trends</h2>
        <BookProvider>
            <BookList miniature={true}/>
        </BookProvider>
      </div>
    </Container>
  );
}