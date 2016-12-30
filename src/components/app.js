import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
    {
        task: 'foo',
        isCompleted: true
    },
    {
        task: 'bar',
        isCompleted: true
    }
];

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <h1> React TODOs App </h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList todos={this.state.todos} />
            </div>
        )
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos })
    }
}

export default App;