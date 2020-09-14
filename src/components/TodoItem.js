import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //arrow function
    getStyle = () => {
        return {
            background :'#f4f4f4',
            padding :'10px',
            borderBottom :'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'
//line 11 eke karala tiyenne if ekk, eke check karanawa text decoration eka karanna,
//todo array eke completed kiyana eka false da kiyala false nm line-through(irak) eka adinawa
//true nm eka normal tiyanawa.
        }
    }

    render() {
        const {id,title } = this.props.todo;
        const btnStyle = {
            background :'red',
            color : 'white',
            padding : '5px 8px',
            border : 'none',
            borderRadius : "50%",
            float : "right",
            cursor: 'ponter'
        }
        return (
            
            <div style={this.getStyle()}>
                
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,
                        id)} />
                    {' '} 
                    {title}
                    <button style={btnStyle} onClick ={this.props.delTodo.bind(this, id)}> 
                    X </button>
                </p>
            </div>
        )
        
    }

    
    }
//constant var ekk hadanawanm eka class eken eliye hadanna oni,ntnm render eke atule return,
//ekata kalin hadanna one.
    

    


//const itemStyle = {backgroundColor :'#f4f4f4'}//mehema constant ekk pass karala
// inline css dennat pluwan 
//  <div style={{backgroundColor :'#f4f4f4}}> puluwan.



TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

export default TodoItem

