import React from 'react';

const start=()=>{
    if(localStorage.getItem('colonies')!=null){
        return JSON.parse(localStorage.getItem('colonies'))
    }else{
        return [];
    }
}

const style={
    width:'500px',
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
    new_hive=()=>{
        if(((this.state.bees/this.state.hives)*6)*0.26 > 150){
            return 'New Hive has been built'
        }else{
            return 'No new hives were built'
        }
    }
    render(){
        return(
            <div style={style} onClick={this.props.link}>
                {this.display()}
                <p onChange={this.handleChange}><b>Colony name:</b> {this.props.colony_name}</p>
                <p><b>Number of bees:</b> <input defaultValue={this.props.bees} name='bees' onChange={this.handleChange}/></p>
                <p><b>Number of hives:</b> <input defaultValue={this.props.hives} name='hives' onChange={this.handleChange}/></p>
                <p><b>Created / Edited:</b></p> 
                <p>{this.props.date}</p>
                <br />
                <p><b>Honey / Overproduction:</b> {((this.state.bees/this.state.hives)*6)*0.26}g due in: </p>
                <p>{this.props.six_days}</p>
                <p>{this.new_hive()}</p>
                <br />
                <br />
                <button onClick={this.home}>FINISH</button>
            </div>
        )
    }
}

export default Colony