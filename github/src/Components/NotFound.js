import React from 'react'
import img_octo_cat from '../img/Octocat.png'

class NotFound extends React.Component{
    render(){
        return(
            <div className="div_not_found">
                <h1 className="txt-center m-3">Error 404: Page Not Found!</h1>
                <h3 className="txt_not_found">Please check the URL address and/or the respective parameters.</h3>
                <img src={img_octo_cat} className="img_octo_cat" alt="Octo_Cat"/>
            </div>
        )
    };
}

export default NotFound;