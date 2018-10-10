import React from 'react'
import Welcome from './HomePage/Welcome';
import Universe from './HomePage/Universe';


class HomePage extends React.Component{
    render(){
        return(
            <div className="">
                <Welcome />
                <Universe />
            </div>
        )
    };
}

export default HomePage;