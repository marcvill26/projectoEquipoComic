
import './App.scss';
import Comiclist from './components/ComicList/ComicList';
import FooterMarvel from './components/FooterMarvel/FooterMarvel';
import Comicbar from './components/Comicbar/Comicbar';
import Carrousels from './components/carrouselimg/Carrousels';
import Register from './components/Register/Register';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <Carrousels/>
    <Register/>
   
    <div className="App">
    
      {/* <Route exact path="/" element={Homeintro}> */}
       
      <Comicbar/>
      
      <Comiclist/>
      <FooterMarvel/>
    </div>
    
    </Router>
    
  );
}

export default App;
