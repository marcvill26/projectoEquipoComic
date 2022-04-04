import react, {useState, useEffect} from 'react';
import axios from 'axios';


const ComicList = () => {
  const [comicslist, setComicList] = useState([]);

  useEffect(() => {

    axios
    .get("comiclist.json")
    .then(response => setComicList(response.data))

  },[]);

  return (
    
    <div className= "comic-list">

     {comicslist.map((Comics) => {
        return (

          <CardcomicList
            key={Comics.id}
            id={Comics.id}
            hero={Comics.hero}
            nameHero={Comics.nameHero}
            writer={Comics.writer}
            year={Comics.year}
            image={Comics.image}
            description={Comics.description}
            colletion={Comics.colletion}
            penciler={Comics.penciler}
            issues={Comics.issues}

          />
        )
      })}
    </div>
  );
}

export default ComicList

