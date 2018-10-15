import React from "react";

class UserMenu extends React.Component{    
    
    render() {
        return(
            <div>
                <nav className="navbar_user">
                    <Link to="#" className="user_nav_item">Overview</Link>
                    <Link to="#" className="user_nav_item">Repositories</Link>
                    <Link to="#" className="user_nav_item">Stars</Link>
                    <Link to="#" className="user_nav_item">Followers</Link>
                    <Link to="#" className="user_nav_item">Following</Link>
                </nav>
            </div>
        )
    }
}

export default UserMenu;