import React, {useContext, useEffect, useState} from 'react';
import styles from 'styled-components';
import BookContext from "../../context/BookContext";

const Container = styles.div`
    width:90%;
`;

export default function SearchBar() {
    const context = useContext(BookContext);
    const [formateds, setFormateds] = useState([]);

    useEffect(() => {
        context.loadBooks().then((data) => {
            setFormateds(data.map(obj => {
                return {key: obj._id, value: obj.title,}
            }));
        })
    }, []);
    console.log(formateds);


    return (
        <Container>

        </Container>

    );
}