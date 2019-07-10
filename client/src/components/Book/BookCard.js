import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import BookType from './Attribute/BookType'
import BookNotation from './Attribute/BookNotation'

export default function BookCard(props) {
  const miniature = props.miniature ? true : false;
  
  return (
    <Card miniature = {miniature}>
      <Part>
        <BookImage img={props.book.image} miniature = {miniature}></BookImage>
      </Part>
        <div style={{textAlign: "left"}}>
          { !miniature ?
            <>
              <h1>{props.book.title }</h1>
              <Text>
                {props.book.description }
              </Text>
            </>
            : null
          }

          <BadgeContainer>
            {
              props.book.type.map((type) =>
                <BookType type={type.name} main={type.main}/>
              )
            }
          </BadgeContainer>
          <BookNotation notation={props.book.notation} readonly={true}/>
      </div>
      { miniature ?
        <Link to={`/book/${props.book._id}`}>Voir plus</Link>
        : null
      }
    </Card>
  );
}

const Card = styled.div`
  max-width:  ${props => props.miniature ? '240px' : '700px'};
  max-height: 345px;
  background: #FFFFFF;
  overflow: hidden;
  margin: 5% ;
  display:inline-block;
`

const BookImage = styled.img`
  height: 200px;
  width:200px;
  background-image: url(${props => props.img});
  background-size: cover;
  color: #000; text-shadow: 1px 1px 0 #fff;
  margin: 5% ;
`

const Part = styled.div`
  width:250px;
  float: left;
`

const Text = styled.span`
  font-family: "Fira Sans";
  font-style: normal;
  font-weight: 300px;
  font-size: 13px;
  line-heigt: 130%;
`

const BadgeContainer = styled.div`
    display:block;
    margin:24px 0;
`