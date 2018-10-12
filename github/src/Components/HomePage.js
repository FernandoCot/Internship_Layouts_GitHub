import React from 'react'
import Welcome from './HomePage/Welcome';
import Universe from './HomePage/Universe';
import Enterprise from './HomePage/Enterprise';
import Organizations from './HomePage/Organizations';
import WorkTogether from './HomePage/WorkTogether';
import Boxes from './HomePage/Boxes';


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
            </div>
        )
    };
}

export default HomePage;