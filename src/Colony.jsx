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
            hives:this.props.hives,
            date:0,
            six_days:0
        }
    }
    update_storage=()=>{
        const x = this.state.colonies;
        x.forEach(a=>{
            if(a.id === this.props.id){
                a.bees = this.state.bees;
                a.hives = this.state.hives;
                a.date = this.state.date;
                a.six_days = this.state.six_days
            }
        })
        console.log(this.state)
        localStorage.setItem('colonies', JSON.stringify(x));
    }
    handleChange=(e)=>{
        const x = new Date().toString()
        
        const y = new Date().getTime();
        const z = y + 518400000
        const d = new Date(z);


        this.setState({
            date:x,
            six_days:d.toString()
        })
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
    time_conversion=()=>{
        var utcSeconds = 1234567890;
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        const x = d.setUTCSeconds(utcSeconds);
        console.log(x)
    }
    render(){
        return(
            <div style={style} onClick={this.props.link}>
                {this.time_conversion()}
                {this.display()}
                <h4 onChange={this.handleChange}>{this.props.colony_name}</h4>
                <p><b>Number of bees:</b> <input defaultValue={this.props.bees} name='bees' onChange={this.handleChange}/></p>
                <p><b>Number of hives:</b> <input defaultValue={this.props.hives} name='hives' onChange={this.handleChange}/></p>
                <p><b>Created / Edited:</b> {this.props.date}</p>
                <br />
                <p><b>Honey / Overproduction:</b> {((this.state.bees/this.state.hives)*6)*0.26}g due in: </p>
                <p>{this.props.six_days}</p>
                <button>EXTRACT HONEY</button>
                <br />
                <br />
                <button onClick={this.home}>BACK HOME</button>
            </div>
        )
    }
}

export default Colony