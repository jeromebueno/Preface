import React from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';

const Div = styled.div`
    display:inline-block;
    margin-left:16px;
`

export default function BookNotation(props) {
    return (
        <div>
            <Div>
                <Rating initialRating={props.notation.note} 
                  emptySymbol={<img src="/src/img/star-empty.png" className="icon" />}
                  fullSymbol={<img src="img/star-full.png" className="icon" />}
                  readonly/>
            </Div>
            <Div>{props.notation.note}/5</Div>
            <Div>{props.notation.numberOfReviews} avis</Div>
        </div>
    );
}