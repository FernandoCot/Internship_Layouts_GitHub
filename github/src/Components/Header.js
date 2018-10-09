import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <i class="fab fa-github"></i>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Marketplace</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Pricing</Link>
                        </li>
                    </ul>
                    <input placeholder="Search GitHub"></input>
                </div>
            </nav>
        )
    }
}

export default Header;