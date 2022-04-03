import React, { useState, useEffect } from "react";
import axios from 'axios';

const Comics = () =>{
  [comiclist, setComiclist]= useState([]);

  useEffect (() =>{

    axios
    .get("comiclist.json")
    .then(response => setComiclist (response.data))
  },[])

}


