import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title : ''
    }

    setTitle = (e) => this.setState({ [e.target.name] : e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title :''}); //after submitting set to nothing.

    }

    render() { 
        return (
            <div>
                <form style={{ display:'flex' }} onSubmit={this.onSubmit}>
                    
                    <input type="text" 
                    placeholder="Add Todo..." 
                    name="title" 
                    className ="text"
                    style={{flex :'10'}}
                    value ={this.state.title}
                    onChange ={this.setTitle}
                    />

                    <input type="submit" 
                    value="Submit" 
                    style={{ flex:'1' }} 
                    className="btn" />
                </form>
            </div>
        )
    }
}

export default AddTodo;
