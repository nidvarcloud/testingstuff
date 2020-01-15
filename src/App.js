import React from 'react';
import './App.css';
import Form from './Form';
import Landing from './Landing';
import Colony from './Colony';
import {Route, Switch, NavLink} from 'react-router-dom';

const start=()=>{
  if(localStorage.getItem('colonies')!=null){
      return JSON.parse(localStorage.getItem('colonies'))
  }else{
      return [];
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      colonies:[...start()],
    }
  }
  grab_data=(e)=>{
    console.log(e);
    const x = this.state.colonies
    x.push(e)
    localStorage.setItem('colonies', JSON.stringify(x));
  }
  render(){
    return (
      <div className="App">
        <h1>BeeKeepers Log</h1>
        <Switch>
          <Route exact path='/' component={()=><Landing />} />
          <Route exact path='/create' component={()=><Form grab_data={this.grab_data} />} />
        </Switch>
        {this.state.colonies.map((a)=>{
          return (
            <Colony key={Math.random()} colony_name={a.colony_name} bees={a.bees} hives={a.hives}/>
          )
        })}
      </div>
    );
  }
}

export default App;