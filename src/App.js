import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="container">
     <NavBar/>
     <ItemListContainer greeting={'Listado de Productos'}/>
    </div>
  );
}

export default App;
