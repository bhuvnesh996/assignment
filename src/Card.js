import React from 'react';

import './Card.css';
const Card = ({name, email,sex,nat,setEmail}) =>{
  const handleClick = () => {
    
    let cards = document.getElementsByClassName("card");
    for (let card of cards) {
      console.log("here");
      card.classList.remove("clicked-card");
      let children = card.children;
      for (let child of children) {
        child.classList.remove("white-text");
      }
    }
    setEmail(email);
    document.getElementById(email).classList.toggle("clicked-card");
    let children = document.getElementById(email).children;
    for (let child of children) {
      child.classList.toggle("white-text");
    }
   } 
 return(
  
 

   <div id={email} className="card flex flex-column w-20 pa3 ma2 br1 shadow-4 bg " onClick={handleClick}>
    <span className='sex'>{sex+" "}.{" "+nat}</span>
    <span className='text-name'>{name.title} {name.first+" "+name.last}</span>
    <span className='text-email'>{email}</span>
    </div>
    
 )
}

export default Card;