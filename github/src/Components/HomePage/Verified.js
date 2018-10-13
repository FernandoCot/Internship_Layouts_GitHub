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
                </div>
            </section>
        )
    }
}

export default Verified;