import React from 'react'
import {CardcomicList} from '../ComicList/ComicList';

export default function card() {
    const cardList = CardcomicList();
  return (
    <div>
        <h2>Your products:</h2>
        {cardList.map((hero,nameHero, index, img) => {
            return (
                <div key={index}>
                <img src={img.image} alt="comics" className="comic-img"></img>
                    <p>{hero.hero}</p>
                    <p>${nameHero.nameHero}</p>
            </div>
            )
        })}
        
    </div>
  )
}