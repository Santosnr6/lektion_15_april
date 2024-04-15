import Cart from '../cart/Cart';
import Logo from '../logo/Logo';
import './header.css';

function Header() {
  return (
    <header className="page-header">
        <Logo />
        <Cart />
    </header>
  )
}

export default Header;
