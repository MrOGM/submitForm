import React from "react";
import './App.css';
import { useState } from "react";


function RatingCircle(props){
    const [isClicked, setIsClicked] = useState(false);

    function handleOnClick() {
      setIsClicked(!isClicked);
      props.onSelectRating(props.emoji);
    }

    return(
        <div onClick = {handleOnClick}   className={`iconContainer ${props.isSelected ? "selected" : ""}`}>
            <p className="ratingText">{props.emoji}</p>
        </div>
    );
}

export default RatingCircle;