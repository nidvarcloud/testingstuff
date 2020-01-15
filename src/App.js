import React from 'react';
import './App.css';
import Form from './Form';
import Landing from './Landing'
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
      colonies:[...start()]
    }
  }
  grab_data=(e)=>{
    console.log(e);
    const x = this.state.colonies
    x.push(e)
    localStorage.setItem('colonies', JSON.stringify(x))
    console.log(this.state)
  }
  render(){
    return (
      <div className="App">
        <h1>BeeKeepers Log</h1>
  
        
        <Switch>
          <Route exact path='/' component={()=><Landing />} />
          <Route exact path='/create' component={()=><Form grab_data={this.grab_data} />} />
        </Switch>
      </div>
    );
  }
}

export default App;