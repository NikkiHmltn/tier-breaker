import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar">
        <div className="container">
            <Link className="nav-logo" to="/">TIER BREAKER LOGO</Link>
            <div className="nav-div">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/">Welcome</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="#">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/entercode">Enter Code</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
}

  
  export default Navbar;