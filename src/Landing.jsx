import React from 'react';
import {NavLink} from 'react-router-dom';

const style={
    backgroundColor:'skyblue',
    padding:'5px 10px 5px 10px',
    borderRadius:'4px',
    color:'white'
}

class Landing extends React.Component{
    render(){
        return(
            <div>
                <NavLink to='/create' style={style}>CREATE COLONY</NavLink>
                <br />
                <br />
            </div>
        )
    }
}

export default Landing