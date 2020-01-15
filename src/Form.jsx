import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colony_number:'',
            bees:0,
            hives:0
        }
    }
    handleChange=(e)=>{
        this.setState({
           [e.target.name] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.grab_data(this.state)
        // window.location.assign(`colony${this.state.colony_number}`);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Enter details of the new Colony</h4>
                    Colony number: <input name='colony_number' onChange={this.handleChange}/>
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