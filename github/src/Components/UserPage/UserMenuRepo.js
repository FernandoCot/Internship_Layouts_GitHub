import React from "react";
import { Link } from 'react-router-dom';
import RepoBody from "./RepoBody";


class UserMenuRepo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            menu: [],
        }
    }
    
    componentDidMount(){
        const user = this.props.user;
        fetch('https://api.github.com/users/'+user)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    menu: [json],        
                })
            });
    }
    
    render() {

        var { menu } = this.state;
        const user = this.props.user;

        return(
            <div className="col-lg-9 col-md-9 col-12 text-left block_right_userpage pr-0">
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
                <RepoBody user={user}/>    
            </div>
        )
    }
}

export default UserMenuRepo;