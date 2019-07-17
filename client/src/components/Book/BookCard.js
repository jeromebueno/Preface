import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'
import BookType from './Attribute/BookType'
import BookNotation from './Attribute/BookNotation'

export default function BookCard(props) {
    const miniature = props.miniature ? true : false;
    return (
        <>
            {
                !miniature ?
                    <>
                        <Card style={{padding: 32}} className="card" miniature={miniature}>
                            <div className="columns">
                                <div className="column col-4 col-sm-12">
                                    <Part className="card-image">
                                        <BookImageLarge img={props.book.image}></BookImageLarge>
                                    </Part>
                                </div>
                                <div className="column col-7 col-sm-12">
                                    <div style={{textAlign: "left"}}>
                                        <div className="card-header">
                                            <h1 style={{
                                                textDecoration: "none",
                                                color: "#303C41"
                                            }}>{props.book.title}</h1>
                                            <Text>
                                                {props.book.description}
                                            </Text>
                                        </div>

                                        <div className="card-header">
                                            <div style={{textDecoration: "none", color: "#303C41"}}
                                                 className="card-title h5">{props.book.title}</div>
                                        </div>

                                        <div className="card-body">
                                            <BadgeContainer>
                                                <BookType type={props.book.type[0].name} main={props.book.type[0].main}/>
                                            </BadgeContainer>
                                            <BookNotation notation={props.book.notation} readonly={true}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="column col-1 col-sm-12">
                                    <button className="btn btn-secondary btn-lg"> ❤
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </>
                    : <>
                        <Link to={`/book/${props.book._id}`}>
                            <Card className="card" miniature={miniature}>
                                <Part className="card-image">
                                    <BookImage img={props.book.image} miniature={miniature}></BookImage>
                                </Part>

                                <div style={{textAlign: "left"}}>

                                    <div className="card-header">
                                        <div style={{textDecoration: "none", color: "#303C41"}}
                                             className="card-title h5">{props.book.title}</div>
                                    </div>

                                    <div className="card-body">
                                        <BadgeContainer>
                                                <BookType type={props.book.type[0].name} main={props.book.type[0].main}/>
                                        </BadgeContainer>
                                        <BookNotation notation={props.book.notation} readonly={true}/>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </>
            }
        </>
    )
        ;
}

const Card = styled.div``

const Part = styled.div``

const BookImage = styled.div`
  height: 200px;
  width:100%;
  margin: 24px 0;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #000; 
  border: 0 ;
`
const BookImageLarge = styled.div`
  height: 300px;
  width:100%;
  margin: 24px 0;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #000; 
  border: 0 ;
`

const Text = styled.span``

const BadgeContainer = styled.div``