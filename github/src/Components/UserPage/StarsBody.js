import React from "react";

class StarsBody extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Stars: [],
        }
    }

    componentDidMount(){
        const user = this.props.user;
        fetch('https://api.github.com/users/'+user+'/starred')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    Stars: json,        
                })
            });
    }

    render() {
        
        var { Stars } = this.state;

        return(
            <div>
                <div className="div_form_repo_body">
                    <form className="form_repo_body">
                        <div className="div_input_stars">
                            <input type="text" className="input_star_body" placeholder="Search starred repositories..."></input>
                        </div>
                        <div className="box_selects_star_body">
                            <select className="select_form_star_body">
                                <option>Language: All language</option>
                                {Stars.map(json => (
                                <option key={json.id}>{json.language}</option>
                                ))}
                            </select>
                            <select className="select_form_star_body">
                                <option>Sort: Recently starred</option>
                                <option>Sort: Recently active</option>
                                <option>Sort: Most stars</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div>
                    {Stars.map(json => (
                        <div className="div_each_repo_body" key={json.id}>
                            <div>
                                <h3>
                                    <a href={json.html_url} className="tit_repo_body">{json.name}</a>
                                </h3>
                            </div>
                            <div>
                                <p className="description_repo_body">{json.description}</p>
                            </div>
                            <div className="repo_body_increments">
                                <span className="box_circle_language mr-3">
                                    <span className="language_circle_color"></span>
                                    <p className="language_overview">
                                        {json.language}
                                    </p>
                                </span>
                                <span className="mr-3">
                                    <span className="repo_star">
                                        <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                                    </span>
                                    <span className="repo_body_stars">
                                        {json.stargazers_count}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default StarsBody;