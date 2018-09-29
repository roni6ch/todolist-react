import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {
    render() {
        return (
            <ul>
               {
                   this.props.tasks.map(task =><Task   key={task.id} task={task} changeStatus={()=>this.props.changeStatus(task)} />)
               } 
            </ul>
        );
    }
}
