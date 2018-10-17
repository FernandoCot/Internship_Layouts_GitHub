import React from "react";
import { Link } from 'react-router-dom';

class UserMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            menu: [],
        }
    }
    
    componentDidMount(){
        
        fetch('https://api.github.com/users/FernandoCot')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    menu: [json],        
                })
            });
    }
    
    render() {

        var { menu } = this.state;

        return(
            <div className="col-9 text-left pl-2">
                {menu.map(json => (
                    <div key={json.id}>
                        <nav className="navbar_user">
                            <Link to="/users/:user" className="user_nav_item">Overview</Link>
                            <Link to="/users/:user/repo" className="user_nav_item">Repositories
                                <span className="counter">{json.public_repos}</span>
                            </Link>
                            <Link to="/users/:user/stars" className="user_nav_item">Stars
                                <span className="counter">2</span>
                            </Link>
                            <Link to="/users/:user/followers" className="user_nav_item">Followers
                                <span className="counter">{json.followers}</span>
                            </Link>
                            <Link to="/users/:user/following" className="user_nav_item">Following
                                <span className="counter">{json.following}</span>
                            </Link>
                        </nav>
                    </div>
                ))}    
            </div>
        )
    }
}

export default UserMenu;