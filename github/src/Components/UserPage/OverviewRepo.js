import React from "react";
import ContributionsGraphic from "./ContributionsGraphic";

class OverviewRepo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            overview: [],
        }
    }

    componentDidMount(){
        const user = this.props.user;
        fetch('https://api.github.com/users/'+user+'/repos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    overview: json,        
                })
            });
    }

    render() {

        var { overview } = this.state;

        var style1 = { backgroundColor: '#ebedf0'};
        var style2 = { backgroundColor: '#c6e48b'};
        var style3 = { backgroundColor: '#7bc96f'};
        var style4 = { backgroundColor: '#239a3b'};
        var style5 = { backgroundColor: '#196127'};

        return(
            <div className="mt-4">
                <div className="container pad0 div_flex_user_label_repo">
                    <div className="col-lg-6 col-md-6 col-12 label_left_overview pad0">
                        <h2 className="popular_repo">Popular repositories</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 label_right_overview pad0">
                        <span className="pinned_repo">Customize your pinned repositories</span>
                    </div>
                </div>
                <div className="div_wrap_repo">
                    {overview.map(json => (
                        <div key={json.id} className="col-lg-6 col-md-6 col-12 overview_div">
                            <span className="tit_overview_repo">{json.name}</span>
                            <p className="txt_overview_repo">{json.description}</p>
                            <span className="box_circle_language">
                                <span className="language_circle_color"></span>
                                <p className="language_overview">
                                    {json.language}
                                </p>
                            </span>
                        </div>
                    ))}
                </div>
                <div className="no_mobile">
                    <h2 className="tit_contributions">Contributions in the last year</h2>
                    <div className="div_contributions_gray_border">
                        <div className="div_component_graphic">
                            <ContributionsGraphic />
                        </div>
                        <div className="flex_contributions">
                            <div>
                                <a href="https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile" className="" target="_blank" rel="noopener noreferrer">
                                    Learn how we count contributions
                                </a>
                            </div>
                            <div>
                                <span>Less</span>
                                <ul className="ul_contributions">
                                    <li style={style1} className="li_contributions"></li>
                                    <li style={style2} className="li_contributions"></li>
                                    <li style={style3} className="li_contributions"></li>
                                    <li style={style4} className="li_contributions"></li>
                                    <li style={style5} className="li_contributions"></li>
                                </ul>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewRepo;