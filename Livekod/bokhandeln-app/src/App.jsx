import './App.css'
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import { useState } from 'react';

function App() {
  const [cartBalance, setCartBalance] = useState(0);

  const decreaseCartBalance = () => {
    if(cartBalance > 0) setCartBalance(c => c - 1);
  }

  const increaseCartBalance = () => {
    setCartBalance(c => c + 1);
  }

  return (
    <div className="app">
      <Header cartBalance={ cartBalance } />
      <ProductList 
        decreaseCartBalance={ decreaseCartBalance }
        increaseCartBalance={ increaseCartBalance } 
      />
    </div>
    
  )
}

export default App;
