import './cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="cart">
      <p className="cart">
        <span className="cart-text">Cart:</span>
        <Link to="/cart">
          <span className="cart-amount">{ cartBalance }</span>
        </Link>
        
      </p>
      <p className="clear-cart">Clear cart</p>
    </div>
  )
}

export default Cart;
