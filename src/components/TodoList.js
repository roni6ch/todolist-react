import React, {Component} from 'react';
import './TodoList.css';
import Input from './Input';
import Tasks from './Tasks';



export default class TodoList extends Component {
constructor(props){
  super(props);
  this.state ={
    input : '',
    tasks : []
  }
}

  changeInput = (value) =>{
    this.setState({
      input : value
    });
  }
  addNewTask = () =>{
    if (this.state.input != ""){
    let task = {
      id : Date.now(),
      value : this.state.input,
      status:false
    }
    this.setState(prevState =>({
      input : '',
      tasks : [...prevState.tasks,task]
    }));

  }
  }
  changeStatus = (t) =>{
    const newObj = this.state.tasks.map(task=>{
      if(task.id === t.id){
        task.status = !task.status;
        return task;
      } 
      return task;
    } 
  )
  this.setState({
    tasks : newObj
  });
  }
  removeTask = (task) =>{
   var array = this.state.tasks;
  //  var array =  [...this.state.tasks]; // make a separate copy of the array
    var index = array.indexOf(task);
    array.splice(index, 1);
  }
  
    render() {
        return (
            <div className="TodoList">
                <Input changeInput={this.changeInput} addNewTask={this.addNewTask} input={this.state.input} />
                <Tasks tasks={this.state.tasks} changeStatus={this.changeStatus}  removeTask={this.removeTask} />
            </div>
        );
    }
}

TodoList;
