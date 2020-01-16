import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Colony from './Colony';

const start=()=>{
    if(localStorage.getItem('colonies')!=null){
        return JSON.parse(localStorage.getItem('colonies'))
    }else{
        return [];
    }
}

const style={
    width:'400px',
    margin:'10px auto 10px auto',
    paddingBottom:'20px'
}

class Edit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colony_name:this.props.colony_name,
            colonies:[...start()]
        }
    }
    show_list=()=>{
        return this.state.colonies.map((a)=>{
          return (
            <div key={Math.random()}>
              <NavLink to={`/colony${a.id}`}>
                <h4>Colony name: {a.colony_name}</h4>
                <Switch>
                  <Route exact path={`/colony${a.id}`} component={()=><Colony 
                    bees={a.bees}
                    hives={a.hives}
                    date={a.date}
                    id={a.id}
                  />} />
                </Switch>
              </NavLink>
            </div>
          )
        })
      }
    render(){
        return(
            <div style={style} onClick={this.props.link}>
                {this.show_list()}
            </div>
        )
    }
}

export default Edit