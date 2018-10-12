import React from 'react'

class Footer_Home extends React.Component{
    render() {
        var start = new Date().getFullYear();
        return(
            <footer className="newfooter">
                <div className="div-footer txt-center col-12">
                    <h5 className="tit-footer">Fernando Calixto <i className="far fa-copyright"></i> {start}</h5>
                </div>
            </footer>
        )
    };
}

export default Footer_Home;