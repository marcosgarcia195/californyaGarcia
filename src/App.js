import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="container">
     <NavBar/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
