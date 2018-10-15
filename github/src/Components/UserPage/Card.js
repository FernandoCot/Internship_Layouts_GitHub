import React from "react";

class Card extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="col-3 div_profile_left">
                <img alt="User_Picture" className="profile_pic"></img>
                <div className="div_card_names">
                    <h1 className="card_fullname">Fernando Calixto</h1>
                    <p className="card_nickname">FernandoCot</p>
                </div>
            </div>
        )
    }
}

export default Card;