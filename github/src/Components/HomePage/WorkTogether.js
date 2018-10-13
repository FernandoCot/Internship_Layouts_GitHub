import React from "react";

class WorkTogether extends React.Component{
    render() {
        return(
            <section name="Section_WorkTogether" className="Section_WorkTogether">
                <div className="container text-center">
                    <p className="txt_hint_work_together">GitHub for teams</p>
                    <h1 className="tit_work_together mt-3 mb-2">A better way to work together</h1>
                    <h3 className="txt_work_together col-md-7">
                        GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.
                    </h3>
                    <button className="btn_work_together">Sign up your team →</button>
                </div>
            </section>
        )
    }
}

export default WorkTogether;