import React from 'react'
import Card from './UserPage/Card';
import UserMenu from './UserPage/UserMenu';

class UserPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        
        const user = this.props.match.params.user;

        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card user={user} />
                    <UserMenu user={user} />
                </div>
            </div>
        )
    };
}

export default UserPage;