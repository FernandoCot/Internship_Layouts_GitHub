import React from "react";

class Overview extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            overview: [],
        }
    }

    componentDidMount(){
        
        fetch('https://api.github.com/users/FernandoCot/repos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    overview: json,        
                })
            });
    }

    render() {

        var { overview } = this.state;

        return(
            <div className="mt-4">
                <div className="container pad0 div_flex_user_label_repo">
                    <div className="col-6 text-left pad0">
                        <h2 className="popular_repo">Popular repositories</h2>
                    </div>
                    <div className="col-6 text-right pad0">
                        <span className="pinned_repo">Customize your pinned repositories</span>
                    </div>
                </div>
                <div className="div_wrap_repo">
                    {overview.map(json => (
                        <div key={json.id} className="col-lg-6 col-md-6 col-12 overview_div">
                            <span className="tit_overview_repo">{json.name}</span>
                            <p className="txt_overview_repo">{json.description}</p>
                            <p className="box_circle_language">
                                <span className="language_circle_color"></span>
                                <p className="language_overview">
                                    {json.language}
                                </p>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Overview;