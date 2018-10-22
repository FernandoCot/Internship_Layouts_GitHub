import React from 'react'
import Card from './Card';
import UserMenuStars from './UserMenuStars';
import FooterUser from './FooterUser';

class Stars extends React.Component{

    render(){
        const user = this.props.match.params.user;

        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card user={user} />
                    <UserMenuStars user={user}/>
                </div>
                <FooterUser />
            </div>
        )
    };
}

export default Stars;