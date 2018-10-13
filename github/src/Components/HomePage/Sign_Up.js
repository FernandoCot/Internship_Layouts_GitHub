import React from "react";

class Sign_Up extends React.Component{
    render() {
        return(
            <section name="Section_Sign_Up" className="Section_Sign_Up">
                <div className="div_large">
                    <h2 className="tit_Sign_Up">
                        Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
                    </h2>
                </div>
                    <form className="form_Sign_Up" action="#" method="post">
                        <div className="div_extra_large div_flex">
                            <div className="col-12 col-lg-3">
                                <input className="input_Sign_Up" placeholder="Pick a username"></input>
                            </div>
                            <div className="col-12 col-lg-3">
                                <input className="input_Sign_Up" placeholder="Your email address"></input>
                            </div>
                            <div className="col-12 col-lg-3">
                                <input className="input_Sign_Up" placeholder="Create a password"></input>
                            </div>
                            <div className="col-12 col-lg-3">
                                <button className="btn_Sign_Up">Sign up for GitHub</button>
                            </div>
                        </div>
                        <p className="txt_Sign_Up">
                            By clicking “Sign up for GitHub”, you agree to our <a class="font_white links_sign_up" href="https://help.github.com/terms" target="_blank" rel="noopener noreferrer">terms of service</a> and <a class="font_white links_sign_up" href="https://help.github.com/privacy" target="_blank" rel="noopener noreferrer">privacy statement</a>. We’ll occasionally send you account related emails.
                        </p>
                    </form>
            </section>
        )
    }
}

export default Sign_Up;