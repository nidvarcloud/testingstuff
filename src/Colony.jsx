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
            colonies:[...start()],
            colony_name:this.props.colony_name,
            bees:this.props.bees,
            hives:this.props.hives
        }
    }
    update_storage=()=>{
        const x = this.state.colonies;
        x.forEach(a=>{
            if(a.id === this.props.id){
                a.bees = this.state.bees;
                a.hives = this.state.hives;
            }
        })
        console.log(this.state)
        localStorage.setItem('colonies', JSON.stringify(x));
    }
    handleChange=(e)=>{
        this.setState({
           [e.target.name] : e.target.value
        })
    }
    display=()=>{
        console.log(this.state.colonies);
        console.log(this.props.id)
    }
    home=()=>{
        this.update_storage()
        window.location.assign('/')
    }
    render(){
        return(
            <div style={style} onClick={this.props.link}>
                {this.display()}
                <h4 onChange={this.handleChange}>{this.props.colony_name}</h4>
                <p>Number of bees: <input defaultValue={this.props.bees} name='bees' onChange={this.handleChange}/></p>
                <p>Number of hives: <input defaultValue={this.props.hives} name='hives' onChange={this.handleChange}/></p>
                <p>Date of creation: {this.props.date}</p>
                <button>EXTRACT HONEY</button>
                <br />
                <br />
                <button onClick={this.home}>BACK HOME</button>
            </div>
        )
    }
}

export default Colony