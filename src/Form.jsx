import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colony_name:'',
            id:Math.random(),
            bees:0,
            hives:0,
            date:new Date()
        }
    }
    handleChange=(e)=>{
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
                </form>
            </div>
        )
    }
}

export default Form