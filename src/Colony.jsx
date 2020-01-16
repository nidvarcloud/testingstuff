import React from 'react';

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
        console.log(this.props.id)
    }
    home=()=>{
        window.location.assign('/')
    }
    render(){
        return(
            <div style={style} onClick={this.props.link}>
                {this.display()}
                <h4>{this.props.colony_name}</h4>
                <p>Number of bees: {this.props.bees}</p>
                <p>Number of hives: {this.props.hives}</p>
                <p>Date of creation: {this.props.date}</p>
                <button>EXTRACT HONEY</button>
                <br />
                <br />
                <button>EDIT COLONY</button>
                <br />
                <br />
                <button onClick={this.home}>BACK HOME</button>
            </div>
        )
    }
}

export default Colony