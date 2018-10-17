import React from 'react'
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Card from './UserPage/Card';
import UserMenu from './UserPage/UserMenu';
import Overview from './UserPage/Overview';
import Repo from './UserPage/Repo';
import Stars from './UserPage/Stars';
import Followers from './UserPage/Followers';
import Following from './UserPage/Following';

class UserPage extends React.Component{
    render(){
        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card />
                    <UserMenu />
                    <Switch>
                        <Route exact path="/users/:user" component={Overview.js}></Route>
                        <Route exact path="/users/:user/repo" component={Repo.js}></Route>
                        <Route exact path="/users/:user/stars" component={Stars.js}></Route>
                        <Route exact path="/users/:user/followers" component={Followers.js}></Route>
                        <Route exact path="/users/:user/following" component={Following.js}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
            </div>
        )
    };
}

export default UserPage;