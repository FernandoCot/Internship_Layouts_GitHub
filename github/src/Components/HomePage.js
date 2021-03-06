import React from 'react'
import Welcome from './HomePage/Welcome';
import Universe from './HomePage/Universe';
import Enterprise from './HomePage/Enterprise';
import Organizations from './HomePage/Organizations';
import WorkTogether from './HomePage/WorkTogether';
import Robots from './HomePage/Robots';
import Boxes from './HomePage/Boxes';
import Integrations from './HomePage/Integrations';
import Verified from './HomePage/Verified';
import FooterHome from './HomePage/FooterHome';
import SignUp from './HomePage/SignUp';


class HomePage extends React.Component{
    render(){
        return(
            <div className="HomePage">
                <Welcome />
                <Universe />
                <Enterprise />
                <Organizations />
                <WorkTogether />
                <Robots />
                <Boxes />
                <Verified />
                <Integrations />
                <SignUp />
                <FooterHome />
            </div>
        )
    };
}

export default HomePage;