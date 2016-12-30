import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            )
        }
        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
                >
                {task}
            </td>
        );
    }
    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <RaisedButton onClick={this.onSaveClick.bind(this)} label="Save"/>
                    <RaisedButton onClick={this.onCancelClick.bind(this)} label="Cancel"/>
                </td>
            );
        }

        return (
            <td>
                <RaisedButton  onClick={this.onEditClick.bind(this)} label="Edit"/>
                <RaisedButton  onClick={this.props.deleteTask.bind(this, this.props.task)} label="Delete"/>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true })
    }

    onCancelClick() {
        this.setState({ isEditing: false })
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });

    }
}

export default TodosListItem;