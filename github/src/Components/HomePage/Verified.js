import React from "react";
import Img_Verified from "../../img/verified.png";

class Verified extends React.Component{
    render() {
        return(
            <section name="Section_Verified" className="Section_Verified">
                <div className="container div_large">
                    <div className="row mb-3">
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
                    <a href="https://github.com/pricing" className="hosted col-11 col-md-7 col-lg-7">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="mr-4" width="64px">
                                <title>1clr-code-hosting</title>
                                <path d="M27 13h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM42 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM46 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM27 28h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM42 31a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zM46 31a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" fill="#23292f"></path><path d="M50 44h-1a13 13 0 0 0-4.68-9H48a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-5v-3h5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H16a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5v3h-5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11.72a13 13 0 0 0-3.79 5.21A7 7 0 0 0 13.28 44 6 6 0 0 0 14 56h36a6 6 0 0 0 0-12zM15 17v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1zm8 3h18v3H23zm-7 13a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a12.9 12.9 0 0 0-10 0H16zm34 21H14a4 4 0 1 1 .09-8 1 1 0 0 0 1-.83 5 5 0 0 1 8.6-2.55 1 1 0 0 0 1.7-.42A11 11 0 0 1 47 45a1 1 0 0 0 1 1h2a4 4 0 0 1 0 8z" fill="#23292f"></path>
                            </svg>
                        </div>
                        <div className="text-left">
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