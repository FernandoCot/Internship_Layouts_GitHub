import React from "react";

class RepoBody extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            RepoBody: [],
        }
    }

    componentDidMount(){
        const user = this.props.user;
        fetch('https://api.github.com/users/'+user+'/repos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    RepoBody: json,        
                })
            });
    }

    render() {
        
        var { RepoBody } = this.state;

        return(
            <div className="">
                <div className="div_form_repo_body">
                    <form className="form_repo_body">
                        <div className="pr-4">
                            <input type="text" className="input_repo_body" placeholder="Find a repository..."></input>
                        </div>
                        <div className="">
                            <select className="select_form_repo_body">
                                <option>Type: All</option>
                                <option>All</option>
                                <option>Public</option>
                                <option>Private</option>
                                <option>Sources</option>
                                <option>Forks</option>
                                <option>Archived</option>
                                <option>Mirrors</option>
                            </select>
                            <select className="select_form_repo_body">
                                <option>Language: All</option>
                                <option>Language 1</option>
                                <option>Language 2</option>
                            </select>
                            <button type="submit" className="btn_repo_body">
                                <svg className="octicon svg_repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                                New
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    {RepoBody.map(json => (
                        <div className="div_each_repo_body">
                            <div>
                                <h3>
                                    <a href={json.html_url} className="tit_repo_body">{json.name}</a>
                                </h3>
                            </div>
                            <div>
                                <p>{json.description}</p>
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
                                        <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
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

export default RepoBody;