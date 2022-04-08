import React from 'react';

export default function CardcomicList({ ...rest }) {
  const { hero, nameHero, writer, year, image, description, collection } = rest;
  return (
    
    
  <div className= "comic-card">
    <div className= "comic-card__info">
        <div className="comic-card__hero"><span>hero:</span> {hero}</div>
        <div className="comic-card__name"><span>name:</span> {nameHero}</div>
        <div className="comic-card__divider"></div>
        <p className="comic-card__bio"><span>desciption:</span> {description}</p>
        <button className="comic-card__button">read</button>
    </div>
        <img src={image} alt="comics" className="comic-card__image"></img>
    <div className="comic-card__footerInfo">
      <p>comic: {hero}</p>
      <p>writer: {writer}</p>
      <p>year: {year}</p>
    </div>
    </div>

   

    // <div class="comic-card">
    //     <div class="comic-card__element">
    //        <img src={image} alt="comics" className="comic-card__image"></img>
    //         <h2>comic:</h2>
    //         <h3 className= "comic-card__hero">hero: {hero}</h3>
           
    //         <p className= "comic-card__writer">writer: {writer}</p>
    //         <p className= "comic-card__year">year: {year}</p>
    //     </div>
    //   </div>
    
  )
}

/*
<div className= "comic-card">
    <div className= "comic-card__info">

      <div className="comic-card__name">hero: {hero}</div>
      <div className="comic-card__prof"></div>
      <div className="comic-card__divider"></div>
      <p className="comic-card__bio">desciption: {description}</p>
      <button>read</button>
    </div>
   <img src={image} alt="comics" className="comic-card__image"></img>
</div>

*/ 