import React from "react";
import Hexagon from '../../img/hexagon.svg';
import Double_Hexagons from '../../img/double_hexagons.png';

class Universe extends React.Component{
    render() {
        return(

            <section className="Section_Universe">
                <div className="container-fluid fluid-universe">
                    <div className="row">
                        <div className="col-12 col-md-6 bg_universe_left pad0">
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-3 col-lg-8 offset-lg-3 left_div_universe font_white">
                                    <div className="row row_universe_responsive">
                                        <div className="col-3 col-md-3 col-lg-2">
                                            <img src={Hexagon} alt="Simple_Hexagon"></img>
                                        </div>
                                        <div className="col-9 col-md-9 col-lg-10 text-left">
                                            <h4 className="font20">GitHub Universe</h4>
                                            <h5 className="font16">
                                                A conference for the builders, planners, and leaders defining the future of software
                                            </h5>
                                            <a href="https://githubuniverse.com/get-tickets/" target="_blank" rel="noopener noreferrer" className="no_outline txt_no_decoration font_light_blue links_light_blue family_inter">Get tickets →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bg_universe_right pad0">
                            <div className="container">
                                <div className="row">
                                    <div className="container">
                                        <div className="row row_universe_responsive">
                                            <div className="col-10 col-md-9 col-lg-9 font_white text-left right_div_universe">
                                                <h5 className="font16">
                                                    Through a combination of creativity, determination, and (a lot of) carefully crafted code, the future is being built every day. 
                                                </h5>
                                                <a href="https://github.com/buildingthefuture" target="_blank" rel="noopener noreferrer" className="no_outline txt_no_decoration font_light_blue links_light_blue family_inter">Learn more →</a>
                                            </div>
                                            <div className="col-2">
                                                <img src={Double_Hexagons} alt="Double Hexagons" className="double_hexagons"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Universe;