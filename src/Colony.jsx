import React from 'react';

const start=()=>{
    if(localStorage.getItem('colonies')!=null){
        return JSON.parse(localStorage.getItem('colonies'))
    }else{
        return [];
    }
}

const style={
    border:'1px solid black',
    width:'400px',
    margin:'10px auto 10px auto'
}

class Colony extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colony_name:this.props.colony_name,
            colonies:[...start()]
        }
    }
    display=()=>{
        console.log(this.state.colonies);
    }
    render(){
        return(
            <div style={style}>
                {this.display()}
                <h4>{this.props.colony_name}</h4>
                <p>Number of bees: {this.props.bees}</p>
                <p>Number of hives: {this.props.hives}</p>
            </div>
        )
    }
}

export default Colony