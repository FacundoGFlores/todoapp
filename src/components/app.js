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
        isCompleted: false
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
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)} />
            </div>
        )
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
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