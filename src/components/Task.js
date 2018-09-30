import React, { Component } from 'react';

class Task extends Component {
    render() {
        var status = !this.props.task.status ? 'ok' : 'remove';
        return (
            <li  className={`list-group-item  list-group-item-action ${status}`} onClick={()=>this.props.changeStatus(this.props.task)}>
            <span className={`glyphicon glyphicon-${status} icon float-left`} aria-hidden="true"></span>
                {this.props.task.value}
                <button type="button" className="close" onClick={()=>this.props.removeTask(this.props.task)}>×</button>
            </li>
        );
    }
}

export default Task;