import React from 'react'

export default function Carrousels({...rest}) {
  const{images}= rest;
  return (
    <div className="slider">
      <h1 className="text">slider images</h1>
      <img src={images} alt="slider images" className="slider__image"></img>
    </div>
  )
}


