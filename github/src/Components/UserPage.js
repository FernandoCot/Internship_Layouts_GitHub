import React from 'react'
import Card from './UserPage/Card';

class UserPage extends React.Component{
    render(){
        return(
            <div className="UserPage">
                <div className="div_large div_user_master">
                    <Card />
                </div>
            </div>
        )
    };
}

export default UserPage;