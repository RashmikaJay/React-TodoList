import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import Todo from './components/Todo';
import  {v4 as uuid} from 'uuid';

import './App.css';

//const id = uuid()

class App extends Component {

  state = {
    todo :[ 
    {
      id : uuid(), //random id
      title :"September",
      completed :false
    },
    {
      id : uuid(),
      title :"Octomber",
      completed :true
    },
    {
      id : uuid(),
      title :"December",
      completed :false
    } 
  ]
  }
  
  //Toggle complete
  markComplete =(id) => {
    this.setState({todo :this.state.todo.map(todos =>{
      if(todos.id ===id){
        todos.completed =!todos.completed
      }
      return todos
    })})
}
//add ToDo
addTodo =(title) =>{
  const newTodo ={
    id :uuid(),
    title,
    complete :false
  }
  this.setState({ todo:[...this.state.todo , newTodo] })
}

  render() {
    return (
      <Router>
          <div className="App">
          
            <div className="container"> 
                <Header/>
                <Route exact path="/" render={ () => (
                  <React.Fragment>
                      <AddTodo addTodo = {this.addTodo} />
                      <Todo todo= {this.state.todo} markComplete={this.markComplete} 
                      delTodo={this.delTodo} />
                  </React.Fragment>
                ) }/>
                <Route path="/about" component={About}/>
                
                  
                
                
            </div>
          </div>
       </Router>
    );
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState({todo :[...this.state.todo.filter(todos => todos.id !== id)]});
  }

}

//export default uuid;
  
  

 


export default App;
