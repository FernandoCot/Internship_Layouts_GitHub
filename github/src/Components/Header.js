import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="row navbar_main_row">
                    <Link to="/" className="navbar-brand">
                        <i class="fab fa-github github_icon"></i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
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
                        <form className="no_mobile form_search" method="get" action="#">
                            <label className="m-auto">
                                <input className="navbar_search" placeholder="Search GitHub"></input>
                                {/*<img className="" src="././img/search_hint.svg"></img>*/}
                            </label>
                        </form>
                        <h5 class="font_white nav_logs">
                            <b>Sign in</b><span className="font_gray"> or </span><b>Sign up</b>
                        </h5>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;