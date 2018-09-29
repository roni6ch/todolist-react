import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <li  className="list-group-item  list-group-item-action" onClick={this.props.changeStatus}>
            <span className="glyphicon glyphicon-ok icon float-left" aria-hidden="true"></span>
                {this.props.task.value}
                <button type="button" className="close">×</button>
            </li>
        );
    }
}

export default Task;