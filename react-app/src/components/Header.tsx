import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/catalog" className="nav-link">Catalog</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
        </header>
    );
}

export default Header;
