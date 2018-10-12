import React from "react";

class Enterprise extends React.Component{
    render() {
        return(
            <section name="Section_Enterprise" className="Section_Enterprise">
                <div className="container">
                    <div className="bg_white col-12 col-md-8 offset-md-2 padbot40 padtop40">
                        <h1 className="mb-0 font32 line_height_150 family_inter weight500">Try GitHub Enterprise</h1>
                        <p className="txt_enterprise">
                            Use GitHub on-premises with your own servers or in a private cloud with <a href="https://github.com/pricing/enterprise" target="_blank" rel="noopener noreferrer" className="enterprise_link">GitHub Enterprise</a>. Improve your developer efficiency with flexible deployment options, centralized permissions, hundreds of integrations, technical support, and more.
                        </p>
                        <a href="https://enterprise.github.com/contact" target="_blank" rel="noopener noreferrer">
                            <button class="btn_blue pointer" type="button">Contact Sales</button>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Enterprise;