import React from "react";

class Robots extends React.Component{
    render() {
        return(
            <section className="Section_Robots">
                <div className="div_flex">
                    <div className="col-lg-7 col-md-7 col-12">
                        <img className="Img_Robot" src="https://assets-cdn.github.com/images/modules/site/home-illo-team.svg" alt="Robot_Receiving_Data"></img>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <a href="https://github.com/features/code-review" className="link_robots">
                            <div className="container div_flex div_boxes_robot">
                                <div className="col-lg-10 col-md-10 col-12 pad0">
                                    <h3 className="tit_robots">Write better code</h3>
                                    <p className="txt_robots">
                                        Collaboration makes perfect. The conversations and code reviews that happen in Pull Requests help your team share the weight of your work and improve the software you build. <span className="robots_inside_link">Learn about code review.</span>
                                    </p>
                                </div>
                                <div className="offset-1 col-1 pad0 no_mobile">
                                    <svg class="octicon octicon-triangle-right triangle_blue" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 14l6-6-6-6v12z"></path></svg>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/features/project-management" className="link_robots">
                            <div className="container div_flex div_boxes_robot">
                                <div className="col-lg-10 col-md-10 col-12 pad0">
                                    <h3 className="tit_robots">Manage your chaos</h3>
                                    <p className="txt_robots">
                                        Take a deep breath. On GitHub, project management happens in Issues and Projects, right alongside your code. All you have to do is mention a teammate to get them involved. <span className="robots_inside_link">Learn about project management.</span>
                                    </p>
                                </div>
                                <div className="offset-1 col-1 pad0 no_mobile">
                                    <svg class="octicon octicon-triangle-right triangle_blue" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 14l6-6-6-6v12z"></path></svg>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/features/integrations" className="link_robots">
                            <div className="container div_flex div_boxes_robot">
                                <div className="col-lg-10 col-md-10 col-12 pad0">
                                    <h3 className="tit_robots">Find the right tools</h3>
                                    <p className="txt_robots">
                                        Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites—then start using them in minutes. <span className="robots_inside_link">Learn about integrations.</span>
                                    </p>
                                </div>
                                <div className="offset-1 col-1 pad0 no_mobile">
                                    <svg class="octicon octicon-triangle-right triangle_blue" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 14l6-6-6-6v12z"></path></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Robots;