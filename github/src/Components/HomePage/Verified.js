import React from "react";
import Img_Verified from "../../img/verified.png";

class Verified extends React.Component{
    render() {
        return(
            <section name="Section_Verified" className="Section_Verified">
                <div className="container div_large">
                    <div className="row">
                        <div className="col-md-6 div_verified_left">
                            <h3 className="tit_verified">Code security</h3>
                            <p className="txt_verified">Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code.</p>
                            <h3 className="tit_verified">Access controlled</h3>
                            <p className="txt_verified">Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Img_Verified} className="img_verified" alt="Image_Verified"></img>
                        </div>
                    </div>
                    <a href="" className="hosted col-10 col-md-7 col-lg-7">
                        <div></div>
                        <div>
                            <h4 className="tit_hosted">Hosted where you need it</h4>
                            <p className="txt_hosted">
                                Securely and reliably host your work on GitHub.com. Or, deploy GitHub Enterprise on your own servers or in a private cloud using Amazon Web Services, Azure or Google Cloud Platform.
                            </p>
                            <p>Compare plans →</p>
                        </div>
                    </a>
                </div>
            </section>
        )
    }
}

export default Verified;