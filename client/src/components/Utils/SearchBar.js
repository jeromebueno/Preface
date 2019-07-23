import React,{useState} from 'react';

import styles from 'styled-components';
import {Link} from 'react-router-dom';
  
const Container = styles.div`
`;

export default function SearchBar() {
    const [target,setTarget] = useState("")
    
    const handleTarget = (e) => {
        setTarget(e.target.value)
    }

    const getSearchLink = () => {
        return target.length < 2 ?  "#" : `/book/search/${encodeURI(target)}`
    }
    
    return (
        <Container>
            <input type="text" style={{height: 40, width: "50%", borderRadius: 4, border: "1px solid #efefef"}} onChange={handleTarget}></input>
            <Link type="submit" className="btn btn-primary" to={getSearchLink()}>Rechercher</Link>
        </Container>
    );
}
 
