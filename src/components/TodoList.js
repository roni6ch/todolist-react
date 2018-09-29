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
    console.log(value);
    this.setState({
      input : value
    });
  }
  addNewTask = () =>{
    let task = {
      id : Date.now(),
      value : this.state.input
    }
    this.setState(prevState =>({
      input : '',
      tasks : [...prevState.tasks,task]
    }));

    console.log(this.tasks);
   
  }
  changeStatus = (t) =>{
    let newObj = this.state.tasks.map(task=> task.id === t.id ? task.status = !task.status : task.status);
    this.setState({
      tasks : newObj
    });
  }
    render() {
        return (
            <div className="TodoList">
                <Input changeInput={this.changeInput} addNewTask={this.addNewTask} input={this.state.input} />
                <Tasks tasks={this.state.tasks} changeStatus={this.changeStatus} />
            </div>
        );
    }
}

TodoList;
