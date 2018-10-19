import React from "react";

class SignUp extends React.Component{
    render() {
        return(
            <section className="Section_Sign_Up">
                <div className="div_large">
                    <h2 className="tit_Sign_Up">
                        Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
                    </h2>
                </div>
                <form className="form_Sign_Up" action="#" method="post">
                    <div className="div_extra_large div_flex">
                        <div className="col-12 col-md-9 col-lg-3 mobile_pad0 md_margin_auto">
                            <input className="input_Sign_Up" placeholder="Pick a username"></input>
                        </div>
                        <div className="col-12 col-md-9 col-lg-3 mobile_pad0 md_margin_auto">
                            <input className="input_Sign_Up" placeholder="Your email address"></input>
                        </div>
                        <div className="col-12 col-md-9 col-lg-3 mobile_pad0 md_margin_auto">
                            <input className="input_Sign_Up" placeholder="Create a password"></input>
                        </div>
                        <div className="col-8 col-md-5 col-lg-3 mobile_pad0 sm_margin_auto md_margin_auto">
                            <button className="btn_Sign_Up">Sign up for GitHub</button>
                        </div>
                    </div>
                    <p className="txt_Sign_Up">
                        By clicking “Sign up for GitHub”, you agree to our <a className="font_white links_sign_up" href="https://help.github.com/terms" target="_blank" rel="noopener noreferrer">terms of service</a> and <a className="font_white links_sign_up" href="https://help.github.com/privacy" target="_blank" rel="noopener noreferrer">privacy statement</a>. We’ll occasionally send you account related emails.
                    </p>
                </form>
            </section>
        )
    }
}

export default SignUp;