
import './App.scss';
import Comiclist from './components/ComicList/ComicList';
import Comicbar from './components/Comicbar/Comicbar';
import Carrousels from './components/carrouselimg/Carrousels';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <Carrousels/>
    <div className="App">
    
      {/* <Route exact path="/" element={Homeintro}> */}
       
      <Comicbar/>
      
      <Comiclist/>
      
    </div>
    </Router>
  );
}

export default App;
