import './App.css';

import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Routes from './router/router.js'


function App() {
  return (
    <div className="App">
     <Routes />
    </div>
  );
}

export default App;
