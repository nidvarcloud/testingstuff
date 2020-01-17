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
    margin:'20px auto 10px auto',
    paddingBottom:'20px'
}

class Edit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colony_name:this.props.colony_name,
            colonies:[...start()],
            search_value:'',
            new_list:[]
        }
    }
    show_list=(array)=>{
        return array.map((a)=>{
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
      handleChange=(e)=>{
        this.setState({search_value:e.target.value})
        this.new_array(e.target.value)
      }
      new_array=(value)=>{
        const x = this.state.colonies;
        const y = x.filter(a=>{
          if(a.colony_name.includes(value)){
            return true;
          }
        })
        this.setState({new_list:[...y]},()=>{
          console.log(this.state.search_value)
        })
      }
      display=()=>{
        if(this.state.search_value==''){
          return this.show_list(this.state.colonies)
        }else{
          return this.show_list(this.state.new_list)
        }
      }
    render(){
        return(
            <div style={style} onClick={this.props.link}>
                Search for Colony: <input onChange={this.handleChange} />
                <br />
                <br />
                {this.display()}
            </div>
        )
    }
}

export default Edit