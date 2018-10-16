import React from "react";
import { Link } from 'react-router-dom';

class UserMenu extends React.Component{    
    
    render() {
        return(
            <div className="col-9 text-left pl-2">
                <div>
                    <nav className="navbar_user">
                        <Link to="/" className="user_nav_item">Overview</Link>
                        <Link to="/repo" className="user_nav_item">Repositories</Link>
                        <Link to="/stars" className="user_nav_item">Stars</Link>
                        <Link to="/followers" className="user_nav_item">Followers</Link>
                        <Link to="/following" className="user_nav_item">Following</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default UserMenu;