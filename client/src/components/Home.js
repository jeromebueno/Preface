import React from 'react';
import SearchBar from './Utils/SearchBar'
import TrendsProvider from '../context/TrendsProvider'
import BookList from './Book/BookList'
import styles from 'styled-components'

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
        <h2>Trends</h2>
        <TrendsProvider>
            <BookList miniature={true}/>
        </TrendsProvider>
      </div>
    </Container>
  );
}