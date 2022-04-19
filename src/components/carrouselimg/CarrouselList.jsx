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
       {CarrouselList.map((slider) => {
        return (

          <Carrousels
            key={slider.id}
            id={slider.id}
           images={slider.images}

          />
        )
      })}
            
        </div>
    );
}

export default Carrousellist;
