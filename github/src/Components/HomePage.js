import React from 'react'
import Welcome from './HomePage/Welcome';
import Universe from './HomePage/Universe';


class HomePage extends React.Component{
    render(){
        return(
            <Welcome />,
            <Universe />
        )
    };
}

export default HomePage;