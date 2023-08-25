import './App.css';
import starIcon from './images/icon-star.svg'
import ilustration from './images/illustration-thank-you.svg'
import RatingCircle from './RatingCircle';
import { useState } from 'react';

function App() {
  const ratings =["😡","😒","🫤","🙂","😍"];
  const [selectedRating, setSelectedRating] = useState("");
  const [isHoverButton, setIsHoverButton] = useState(false);
  const [clickedButton,  setOnClickButton] = useState(false);

  const foundEmoji = ratings.findIndex(rating => rating === selectedRating);
 

  function handleRatingChange(rating) {
    setSelectedRating(rating);
  }

  function onButtonHover() {
    setIsHoverButton(!isHoverButton);
  }

  function onClickButton(){
    setOnClickButton(true)
  }
  
  
  return (
    <div className='howtocenterafkindiv'>
      
      { clickedButton ? 
      
       <div className="App2">
        
        <div >
          <img src = {ilustration} alt="smartphone" />
        </div>
        
        <div className='scoreContainer'>
          <p className='scoreText'> You selected {foundEmoji+1} out of 5 </p>

        </div>

        <div className='textContainer'>
          <h2 className='titleText centered'> Thank you! </h2>
          <p className='descriptionText centered'> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>

      </div>


      : 
      
      <div className="App">
        
        <div className='iconContainer'>
          <img className='circleBorder' src = {starIcon} alt="star" />
        </div>
        
        <div className='textContainer'>
          <h2 className='titleText'> How did we do? </h2>
          <p className='descriptionText'> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>

        <div className='emojiContainer'>
          {ratings.map((emoji, index)=>(
            <RatingCircle 
            key = {index}
            id = {index}
            emoji= {emoji}
            isSelected={emoji === selectedRating}
            onSelectRating = {handleRatingChange}
            />
          ))}
        </div>

        <div className='submitContainer'>
          <button onClick ={onClickButton}onMouseEnter={onButtonHover} onMouseLeave={onButtonHover} className={`submitContainer submitText  ${isHoverButton ? "selectedB" : " "}`}>SUBMIT</button>
        </div>

      </div>}

    
    </div>

  );
}

export default App;
