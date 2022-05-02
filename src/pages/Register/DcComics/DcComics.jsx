import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dccards from "../DcComics/DcCards";
const Dccomics = () => {
    const [DcComiclist, setDcComiclist]= useState([]);

    useEffect(()=>{
        axios
        .get("dcComiclist.json")
        .then(response => setDcComiclist(response.data))
    },[]);
    return (
        <div className="DcComics-list">

        {DcComiclist.map((ComicsDc)=>{
           return(
               <Dccards
               key={ComicsDc.id}
               id={ComicsDc.id}
               hero={ComicsDc.hero}
               nameHero={ComicsDc.nameHero}
               writer={ComicsDc.writer}
               year={ComicsDc.year}
               image={ComicsDc.image}
               description={ComicsDc.description}
               collection={ComicsDc.collection}
               penciler={ComicsDc.penciler}
               issues={ComicsDc.issues}

        />
           ) 
        })}
            
        </div>
    );
}

export default Dccomics;
