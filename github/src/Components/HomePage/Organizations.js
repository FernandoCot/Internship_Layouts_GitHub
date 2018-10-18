import React from "react";
import Airbnb from '../../img/airbnb.png';
import Sap from '../../img/sap.png';
import IBM from '../../img/ibm.png';
import Google from '../../img/google.png';
import Paypal from '../../img/paypal.png';
import Bloomberg from '../../img/bloomberg.png';
import Spotify from '../../img/spotify.png';
import Swift from '../../img/swift.png';
import Facebook from '../../img/facebook.png';
import NodeJS from '../../img/nodejs.png';
import Nasa from '../../img/nasa.png';
import Walmart from '../../img/walmart.png';

class Organizations extends React.Component{
    render() {
        return(
            <section className="Section_Organizations">
                <div className="container">
                    <div className="col-12 padbot40 padtop40">
                        <h3 className="tit_organizations">
                            More than 1.8 million businesses and organizations use GitHub
                        </h3>
                        <ul className="black_and_white pad0 ul_organizations line_height_150">
                            <li className="li_organizations">
                                <img src={Airbnb} alt="Airbnb_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Sap} alt="Sap_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={IBM} alt="IBM_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Google} alt="Google_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Paypal} alt="Paypal_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Bloomberg} alt="Bloomberg_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Spotify} alt="Spotify_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Swift} alt="Swift_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Facebook} alt="Facebook_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={NodeJS} alt="NodeJS_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Nasa} alt="Nasa_Logo" className="img_oranizations"></img>
                            </li>
                            <li className="li_organizations">
                                <img src={Walmart} alt="Walmart_Logo" className="img_oranizations"></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Organizations;