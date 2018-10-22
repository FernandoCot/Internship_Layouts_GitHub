import React from 'react'
import Card from './Card';
import UserMenuOverview from './UserMenuOverview';
import FooterUser from './FooterUser';

class Overview extends React.Component{

    render(){
        const user = this.props.match.params.user;

        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card user={user} />
                    <UserMenuOverview user={user}/>
                </div>
                <FooterUser />
            </div>
        )
    };
}

export default Overview;