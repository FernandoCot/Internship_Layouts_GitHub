import React from 'react'
import Card from './Card';
import UserMenuFollowing from './UserMenuFollowing';

class Following extends React.Component{

    render(){
        const user = this.props.match.params.user;

        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card user={user} />
                    <UserMenuFollowing user={user}/>
                </div>
            </div>
        )
    };
}

export default Following;