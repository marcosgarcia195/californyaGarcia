import './App.css';

import Routes from './router/router.js'
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes/>
      </CartProvider>
    </div>
  );
}

export default App;
