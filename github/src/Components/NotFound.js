import React from 'react'
import img_big from '../img/Octocat.png'

class NotFound extends React.Component{
    render(){
        return(
            <div className="div_not_found">
                <h1 className="txt-center m-3">Error 404: Page Not Found!</h1>
                <h3>Please check the URL adress and/or the respective parameters.</h3>
                <img src={img_big} className="img_octo_cat" />
            </div>
        )
    };
}

export default NotFound;