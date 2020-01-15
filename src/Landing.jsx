import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

class Landing extends React.Component{
    render(){
        return(
            <div>
                <NavLink to='/create'>CREATE COLONY</NavLink>
                <br />
                <br />
                Search for Colony: <input />
            </div>
        )
    }
}

export default Landing