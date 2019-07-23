import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import BookContext from "../../../context/BookContext";

export default function AddToFavorite({ book }) {
  const context = useContext(BookContext);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if(user !== null){
    if (user.like) {
      if (user.like.includes(book._id)) setLiked(true);
    } else setLiked(false);
    }
  }, [book._id]);

  const handleFavorite = () => {
    context.handleFavorite(book._id,liked);
    setLiked(!liked);
  };

  return (
    <div>
      <Like
        className="btn btn-secondary btn-lg"
        liked={liked}
        onClick={handleFavorite}
      >
        {liked ? "✔" : "❤"}
      </Like>
    </div>
  );
}

const Like = styled.button`
  background: ${props => (props.liked ? "rgb(30, 174, 220)" : "white")};
  color: ${props =>
    props.liked ? "white !important" : "rgb(30, 174, 220) !important"};
`;
