import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colony_name:'',
            id:Math.random(),
            bees:0,
            hives:0,
            date:0,
            six_days:0
        }
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
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.colony_name===''){
            alert('Please enter a colony number')
        }else{
            this.props.grab_data(this.state)
            window.location.assign('/')
        }
    }
    home=()=>{
        window.location.assign('/')
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Enter details of the new Colony</h4>
                    Colony name: <input name='colony_name' onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    Number of bees: <input name='bees' onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    Number of hives: <input name='hives' onChange={this.handleChange}/>    
                    <br/>
                    <br/>
                    <button>CREATE COLONY</button>
                    <br />
                    <br />
                </form>
                <button onClick={this.home}>HOME</button>
            </div>
        )
    }
}

export default Form