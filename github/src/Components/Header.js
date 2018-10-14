import React from "react";
import { Link } from 'react-router-dom';
import Hint from '../img/search_hint.svg';

class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="row navbar_main_row">
                    <Link to="/" className="navbar-brand">
                        <i className="fab fa-github github_icon" alt="Icon_GitHub"></i>
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
                        <form className="form_search" method="get" action="#">
                            <label className="m-auto label_search">
                                <input className="navbar_search" placeholder="Search GitHub"></input>
                                <img src={Hint} alt="Hint_Icon" className="no_mobile"></img>
                            </label>
                        </form>
                        <h5 className="font_white nav_logs">
                            <a href="https://github.com/login" className="nav_link_sign pointer">Sign in</a><span className="font_gray"> or </span><a href="https://github.com/join?source=header-home" className="nav_link_sign pointer">Sign up</a>
                        </h5>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;