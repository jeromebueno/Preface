import React from 'react';
import styles from 'styled-components';

const Container = styles`
    
fieldset {
  position: relative;
  display: inline-block;
  padding: 0 0 0 40px;
  background: #fff;
  border: none;
  border-radius: 5px;
}

input,
button {
  position: relative;
  width: 200px;
  height: 50px;
  padding: 0;
  display: inline-block;
  float: left;
}

input {
  color: #666;
  z-index: 2;
  border: 0 none;
}
input:focus {
  outline: 0 none;
}
input:focus + button {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
          transform: translate(0, 0);
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}
input:focus + button .fa {
  -webkit-transform: translate(0px, 0);
      -ms-transform: translate(0px, 0);
          transform: translate(0px, 0);
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  color: #fff;
}

button {
  z-index: 1;
  width: 50px;
  border: 0 none;
  background: #ceb980;
  cursor: pointer;
  border-radius: 0 5px 5px 0;  
  -webkit-transform: translate(-50px, 0);
      -ms-transform: translate(-50px, 0);
          transform: translate(-50px, 0);
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}

.fa-search {
  font-size: 1.4rem;
  color: #29abe2;
  z-index: 3;
  top: 25%;
  -webkit-transform: translate(-190px, 0);
      -ms-transform: translate(-190px, 0);
          transform: translate(-190px, 0);
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  -webkit-transition: all 0.1s ease-in-out;
          transition: all 0.1s ease-in-out;
}

`;

export default function SearchBar() {
    return (
        <Container>
            <form>
                <fieldset><input type="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </fieldset>
            </form>
        </Container>
    );
}
 
