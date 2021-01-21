import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
        <Logo />
        <a className="logo-text" href="">Delivery</a>
    </nav>
  );
}

export default Navbar;
