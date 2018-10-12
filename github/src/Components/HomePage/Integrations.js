import React from "react";

class Integrations extends React.Component{
    render() {
        return(
            <section name="Section_Integrations" className="Section_Integrations">
                <div className="container text-center">
                    <p className="txt_hint_work_together">Integrations</p>
                    <h1 className="tit_work_together mt-3 mb-2">Build on GitHub</h1>
                    <h3 className="txt_work_together col-md-8">
                        Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.
                    </h3>
                    <button className="btn_work_together">Learn about integrations <i class="fas fa-arrow-right"></i></button>
                </div>
            </section>
        )
    }
}

export default Integrations;