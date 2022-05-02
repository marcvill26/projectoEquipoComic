
import './App.scss';
import Comiclist from './components/ComicList/ComicList';
import Register from './pages/Register/Register';
import Comicbar from './components/Comicbar/Comicbar';
import Carrousels from './components/carrouselimg/Carrousels';

import FooterMarvel from './components/FooterMarvel/FooterMarvel';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Carrousels/>
           <div className="App">
            {/* <Route exact path="/" element={Homeintro}> */}
           <Comicbar/>
           
           <Routes>
              <Route path='/Comiclist' element={<Comiclist/>}></Route>
              <Route path='/Register' element={<Register/>}/>
           </Routes>
           <FooterMarvel/>
           
      
    </div>
    
    </Router>
    
  );
}

export default App;
