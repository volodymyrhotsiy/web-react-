import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


interface HeaderProps {
    onSearch?: (searchInput: string) => void;
}

function Header({ onSearch }: HeaderProps) {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchInput);
        }
    };

    return (
        <>
            <header className="header">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/catalog" className="nav-link">Catalog</Link>
                <Link to="/cart" className="nav-link">Cart</Link>
                <form className="d-flex" onSubmit={handleSearch}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </header>
        </>
    );
}

export default Header;
