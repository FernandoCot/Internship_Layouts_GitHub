import React from "react";
import Slack from "../../img/slack.png";
import Zenhub from "../../img/zenhub.png";
import Travis from "../../img/travis-ci.png";
import Atom from "../../img/atom.png";
import Circle from "../../img/circle-ci.png";
import Google from "../../img/google.png";
import CodeClimate from "../../img/codeclimate.png";

class Integrations extends React.Component{
    render() {

        var circle1 = { backgroundColor: '#553958'};
        var circle2 = { backgroundColor: '#364e98'};
        var circle3 = { backgroundColor: '#eff9f9'};
        var circle4 = { backgroundColor: '#5fb57d'};
        var circle5 = { backgroundColor: '#022531'};
        var circle6 = { backgroundColor: '#f2f2f2'};
        var circle7 = { backgroundColor: '#303030'};

        return(
            <section className="Section_Integrations">
                <div className="container text-center">
                    <p className="txt_hint_work_together">Integrations</p>
                    <h1 className="tit_work_together mt-3 mb-2">Build on GitHub</h1>
                    <h3 className="txt_work_together col-md-7">
                        Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.
                    </h3>
                    <button className="btn_work_together">Learn about integrations →</button>
                </div>
                <div className="container div_logo_group">
                    <div style={circle1} className="div_logo_circle circle_up">
                        <img src={Slack} className="logo_circle" alt="Logo Slack"></img>
                    </div>
                    <div style={circle2} className="div_logo_circle circle_down">
                        <img src={Zenhub} className="logo_circle" alt="Logo Zenhub"></img>
                    </div>
                    <div style={circle3} className="div_logo_circle circle_up">
                        <img src={Travis} className="logo_circle" alt="Logo Travis"></img>
                    </div>
                    <div style={circle4} className="div_logo_circle circle_down">
                        <img src={Atom} className="logo_circle" alt="Logo Atom"></img>
                    </div>
                    <div style={circle5} className="div_logo_circle circle_up">
                        <img src={Circle} className="logo_circle" alt="Logo Circle"></img>
                    </div>
                    <div style={circle6} className="div_logo_circle circle_down">
                        <img src={Google} className="logo_circle" alt="Logo Google"></img>
                    </div>
                    <div style={circle7} className="div_logo_circle circle_up">
                        <img src={CodeClimate} className="logo_circle" alt="Logo Code Climate"></img>
                    </div>
                </div>
                <div>
                    <p className="txt_circle">
                        Sometimes, there’s more than one tool for the job. Why not try something new?
                    </p>
                    <a href="https://github.com/marketplace" className="link_circle" target="_blank" rel="noopener noreferrer">
                        Browse GitHub Marketplace <span>→</span>
                    </a>
                </div>
            </section>
        )
    }
}

export default Integrations;