import React from 'react';
import ReactSearchBox from 'react-search-box';
import styles from 'styled-components';

const Container = styles.div`
    width:90%;
`

export default function SearchBar() {
    let data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
    ]

  return (
    <Container>
        <ReactSearchBox
        placeholder="Find a book, a comic, and more ..."
        value="Doe"
        data={data}
        callback={record => console.log(record)}/>
    </Container>
  );
}