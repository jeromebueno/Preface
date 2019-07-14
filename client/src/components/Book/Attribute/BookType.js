import React from 'react';
import styled from 'styled-components'

const Badge = styled.div`
    padding:4px 8px;  
    margin-left:4px;
    display: inline-block;
    border-radius: 30px;
    background: ${props => props.main ? '#1EAEDC' : '#E5E7E9'};
`

const BadgeText = styled.div`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #303C41;
`

export default function BookCard(props) {
    return (
        <Badge main={props.main}>
            <BadgeText>{props.type}</BadgeText>
        </Badge>
    );
}