import React from 'react'
import Card from './Card';
import UserMenuRepo from './UserMenuRepo';
import FooterUser from './FooterUser';

class Repo extends React.Component{

    render(){
        const user = this.props.match.params.user;

        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card user={user} />
                    <UserMenuRepo user={user}/>
                </div>
                <FooterUser />
            </div>
        )
    };
}

export default Repo;