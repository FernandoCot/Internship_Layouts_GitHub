import React from "react";

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            card: [],
        }
    }

    componentDidMount(){

        //console.log(window.location.href);

        //var usuario = (window.location.href);

        //var usuario_kai = "http://localhost:3000/users/";

        //var final = usuario - usuario_kai;

        //final.toString();

        //console.log(typeof(usuario));
        //console.log(typeof(usuario_kai));
        //console.log(typeof(final));
        //console.log(final);

        //console.log(usuario);

        fetch('https://api.github.com/users/FernandoCot')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    card: [json],        
                })
            });
    }

    render() {

        var { card } = this.state;

        return(
            <div className="col-lg-3 col-md-3 col-12 div_profile_left">
                {card.map(json => (
                    <div key={json.id}>
                        <img src={json.avatar_url} alt="User_Picture" className="profile_pic"></img>
                        <div className="div_card_names">
                            <h1 className="card_fullname">{json.name}</h1>
                            <p className="card_nickname">{json.login}</p>
                        </div>
                        <div className="profile_bio">
                            <span>{json.bio}</span>
                        </div>
                        <div className="pb-3">
                            <span className="div_block">Block or report user</span>
                        </div>
                        <div>
                            <div className="div_country">
                                <svg className="icon_country" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                                <span className="label_country">{json.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Card;