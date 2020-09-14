import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component{


    render(){
    //console.log(this.props.todo)

        return(
            
            this.props.todo.map((todo)=>
        <h3> <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        /> </h3>
            )
        );
    }
}

//proptypes
Todo.propTypes = {
    todo : PropTypes.array.isRequired
}

export default Todo;
