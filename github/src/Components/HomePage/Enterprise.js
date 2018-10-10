import React from "react";
{/*import BG_Pointed from '../../img/bg_pointed.svg';*/}

class Enterprise extends React.Component{
    render() {
        return(
            <section name="Section_Enterprise" className="Section_Enterprise">
                <div className="container">
                    <div className="col-12 col-md-8 offset-md-2 padbot40 padtop40">
                        <h1 className="font32">Try GitHub Enterprise</h1>
                        <h3 className="text-center font_gray font16">
                            Use GitHub on-premises with your own servers or in a private cloud with <a href="https://github.com/pricing/enterprise" target="_blank" className="">GitHub Enterprise</a>. Improve your developer efficiency with flexible deployment options, centralized permissions, hundreds of integrations, technical support, and more.
                        </h3>
                        <a href="https://enterprise.github.com/contact" target="_blank">
                            <button class="btn_blue pointer" type="button">Contact Sales</button>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Enterprise;