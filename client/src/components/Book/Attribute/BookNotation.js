import React,{useState} from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';

const starEmpty = require("../../../img/star-empty.png");
const starFull = require("../../../img/star-full.png")
const Div = styled.div`
    display:inline-block;
    margin-left:16px;
`

export default function BookNotation(props) {
    let [score,setScore] = useState(0)

    const handleChange = value => {
        setScore(value)
        props.setScore(value)
    }

    let isReadOnly = props.readonly ? true : false

    let rating = props.notation ? props.notation.note : score

    return (
        <div>
            <Div>
                <Rating 
                  name="Rating"
                  emptySymbol={<img src={starEmpty} className="icon" />}
                  fullSymbol={<img src={starFull} className="icon" />}
                  onChange={handleChange}
                  initialRating = {rating}
                  readonly = {isReadOnly}/>
            </Div>
            <Div>{rating}/5</Div>
            {!props.notation == null ?
                !props.notation.numberOfReviews == null?
                    <Div>{props.notation.numberOfReviews} avis</Div> 
                    : null
                : null
            }
            
        </div>
    );
}