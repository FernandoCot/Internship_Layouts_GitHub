import React from "react";

class Boxes extends React.Component{
    render() {
        return(
            <section name="Section_Boxes" className="Section_Boxes">
                <div className="container text-center">
                    <p className="txt_hint_work_together">Security and administration</p>
                    <h1 className="tit_work_together mt-3 mb-2">Boxes? Check.</h1>
                    <h3 className="txt_work_together col-md-7">
                        We worry about your administrative and security needs so you don’t have to. From flexible hosting to authentication options, GitHub can help you meet your team’s requirements.
                    </h3>
                    <button className="btn_work_together">See how GitHub works for businesses <i class="fas fa-arrow-right"></i></button>
                </div>
            </section>
        )
    }
}

export default Boxes;