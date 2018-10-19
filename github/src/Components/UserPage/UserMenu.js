import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import NotFound from '../NotFound';
import Overview from './Overview';
import Repo from './Repo';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';

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
                <Switch>
                    <Route exact path="/users/FernandoCot" component={Overview}></Route>
                    <Route exact path="/users/:user/repo" component={Repo}></Route>
                    <Route exact path="/users/:user/stars" component={Stars}></Route>
                    <Route exact path="/users/:user/followers" component={Followers}></Route>
                    <Route exact path="/users/:user/following" component={Following}></Route>
                    <Route component={NotFound}></Route>
                </Switch>    
            </div>
        )
    }
}

export default UserMenu;