import React,{useState,useEffect} from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';

const starEmpty = require("../../../img/star-empty.png");
const starFull = require("../../../img/star-full.png")
const Div = styled.div`
    display:inline-block;
`

export default function BookNotation(props) {
    let [score,setScore] = useState(1)

    const handleChange = value => {
        setScore(value)
        props.setScore(value)
    }

    useEffect(()=> setScore(props.score || 1), [props.score]);

    let isReadOnly = props.readonly ? true : false

    let rating = props.notation ? props.notation.note : score;
    let reviews =  props.notation ? props.notation.numberOfReviews == null ?  "" : props.notation.numberOfReviews + ' avis' : "";
    
    return (
        <>
            <Div style={{marginTop: 12, float: "left"}}>
                <Rating 
                  name="Rating"
                  emptySymbol={<img src={starEmpty} alt="" className="icon" />}
                  fullSymbol={<img src={starFull}  alt="" className="icon" />}
                  onChange={handleChange}
                  initialRating = {rating}
                  readonly = {isReadOnly}/>
            </Div>
            <Div style={{color: "#303C41", fontWeight: 500, marginTop: 12, marginLeft: 12}}>{rating}/5</Div>
            { props.notation ?
                <Div style={{color: "#303C41", fontWeight: 300, marginTop: 12, marginLeft: 8}}>{reviews}</Div> : <></>
            }

        </>
    );
}