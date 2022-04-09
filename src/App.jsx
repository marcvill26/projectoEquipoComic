
import './App.scss';
import Comiclist from './components/ComicList/ComicList';
import Comicbar from './components/Comicbar/Comicbar';
function App() {
  return (
    <div className="App">
      <Comicbar/>

      <Comiclist/>
      
    </div>
  );
}

export default App;
