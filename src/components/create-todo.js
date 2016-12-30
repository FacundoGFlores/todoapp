import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <TextField hintText="What do I need to do?" onChange={this.handleChange.bind(this)} />
                <RaisedButton type="submit" label="Create" />
            </form>
        );
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    };

    handleCreate(event) {
        event.preventDefault();
        this.props.createTask(this.state.value);
        this.state.value = '';
    }
}


export default CreateTodo;