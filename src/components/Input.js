import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <form>
                <div className="form-group row m-5">
                    <input
                        className="col-10"
                        type="text"
                        placeholder="new Task?"
                        ref="input"
                        value={this.props.input}
                        onChange={(e) => this.props.changeInput(e.target.value)}/>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.props.addNewTask()}>Add!</button>
                </div>
            </form>
        );
    }
}

export default Input;