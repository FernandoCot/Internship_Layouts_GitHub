import React from 'react'
import Card from './UserPage/Card';
import UserMenu from './UserPage/UserMenu';

class UserPage extends React.Component{

    componentDidMount(){
        this.user = this.props.match.params.user;
    }

    render(){
        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card />
                    <UserMenu />
                </div>
            </div>
        )
    };
}

export default UserPage;