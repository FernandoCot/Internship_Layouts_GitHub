import React from 'react'
import Card from './Card';
import UserMenuFollowers from './UserMenuFollowers';
import FooterUser from './FooterUser';

class Followers extends React.Component{

    render(){
        const user = this.props.match.params.user;

        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card user={user} />
                    <UserMenuFollowers user={user}/>
                </div>
                <FooterUser />
            </div>
        )
    };
}

export default Followers;