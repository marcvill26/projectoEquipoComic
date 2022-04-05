import React from 'react';

export default function CardcomicList({ ...rest }) {
  const { hero, nameHero, writer, year, image, description, collection } = rest;
  return (
    <div className= "comic-card">
       
        <img src={image} alt="comics" className="comic-card__image"></img>
        {/* {cardList.map((hero,nameHero, index, img) => {
            return (
                <div key={index}>
                <img src={img.image} alt="comics" className="comic-img"></img>
                    <p>{hero.hero}</p>
                    <p>${nameHero.nameHero}</p>
            </div>
            )
        })} */}
        <h2>comic:</h2>
        <h3>hero: {hero}</h3>
        <p>name: {nameHero}</p>
        <p>writer: {writer}</p>
        <p>year: {year}</p>
    </div>
  )
}

