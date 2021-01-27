import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="nav-logo" to="/">
                <img src="https://i.imgur.com/dRaxLPZ.png" alt="thelogo" />
            </Link>
            <NavLink className="nav-link" exact to="/entercode">
                Enter Code
            </NavLink>
            <NavLink className="nav-link" exact to="/public">
                Vote Public
            </NavLink>
            <NavLink className="nav-link" to="/about">
                About
            </NavLink>
            <NavLink className="nav-link" to="/">
                Welcome
            </NavLink>
        </nav>
    );
}

export default Navbar;
