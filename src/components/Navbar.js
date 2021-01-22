import { Link, NavLink } from 'react-router-dom';
import '../components/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="nav-logo" to="/">
                TIER BREAKER LOGO
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
