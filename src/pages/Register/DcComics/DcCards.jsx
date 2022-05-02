import React from 'react'

export default function DcCards(...rest) {
    const {hero, nameHero, writer, year, image, description,collection} = rest;

  return (
<div className="dcComic-card">
    <div className="dcComic-card__info">
            <div className="dcComic-card__hero"><span>hero:</span> {hero}</div>
            <div className="dcComic-card__name"><span>name:</span> {nameHero}</div>
            <div className="dcComic-card__divider">name:</div>
            <p className="dcComic-card__bio"><span>description:</span> {description}</p>
            <button className="dcComic-card__button">read</button>
    </div>
        <img src={image} alt="dcComics" className="dcComic-card__image"></img>
    <div className="dcComic-card__footerInfo">
        <p>comic: {hero}</p>
        <p>writer: {writer}</p>
        <p>year: {year}</p>
    </div>
</div>
  )
}
