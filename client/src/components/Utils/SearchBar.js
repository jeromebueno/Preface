import React, {} from 'react';
import styles from 'styled-components';

const Container = styles.div`
    width:90%;
`;

export default function SearchBar() {
    return (
        <Container>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </Container>
    );
}
 
