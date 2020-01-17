import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

class Landing extends React.Component{
    render(){
        return(
            <div>
                <NavLink to='/create'>CREATE COLONY</NavLink>
                <br />
                <br />
            </div>
        )
    }
}

export default Landing