import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Carrousels from './Carrousels';
const Carrousellist = () => {
    const [CarrouselList, setcarrouselList] = useState([]); 

    useEffect(() =>{
        axios
        .get("sliderImg.json")
        .then(response => setcarrouselList(response.data))
    },[])
    return (
        <div className= "sliderList">
       {CarrouselList.map((sliderImg) => {
        return (

          <Carrousels
            key={sliderImg.id}
            id={sliderImg.id}
           images={sliderImg.images}

          />
        )
      })}
            
        </div>
    );
}

export default Carrousellist;
