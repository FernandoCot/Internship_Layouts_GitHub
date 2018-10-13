import React from 'react'
import Welcome from './HomePage/Welcome';
import Universe from './HomePage/Universe';
import Enterprise from './HomePage/Enterprise';
import Organizations from './HomePage/Organizations';
import WorkTogether from './HomePage/WorkTogether';
import Boxes from './HomePage/Boxes';
import Integrations from './HomePage/Integrations';
import Verified from './HomePage/Verified';


class HomePage extends React.Component{
    render(){
        return(
            <div className="">
                <Welcome />
                <Universe />
                <Enterprise />
                <Organizations />
                <WorkTogether />
                <Boxes />
                <Verified />
                <Integrations />
            </div>
        )
    };
}

export default HomePage;