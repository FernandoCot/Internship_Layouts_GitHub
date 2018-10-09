import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/*<Link to="/" className="navbar-brand">Home</Link>*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Sobre Mim</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tech" className="nav-link">Tecnologias</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Projetos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;