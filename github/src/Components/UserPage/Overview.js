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
                    overview: [json[0]],        
                })
            });
    }

    render() {

        var { overview } = this.state;

        return(
            <div className="container">
                {overview.map(json => (
                    <div key={json.id}>
                        <div className="col-lg-6 col-md-6 col-12 overview_div">
                            <span className="tit_overview_repo">{json.name}</span>
                            <p className="txt_overview_repo">{json.description}</p>
                            <p className="">
                                {json.language}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Overview;