import './cart.css';
import { Link } from 'react-router-dom';

function Cart({ cartBalance }) {
  return (
    <div className="cart">
      <p className="cart">
        <span className="cart-text">Cart:</span>
        <Link to="/"><span className="cart-amount">{ cartBalance }</span></Link>
      </p>
      <p className="clear-cart">Clear cart</p>
    </div>
  )
}

export default Cart;
