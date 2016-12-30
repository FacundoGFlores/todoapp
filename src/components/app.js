import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import TodosList from './todos-list';
import CreateTodo from './create-todo';
import styles from '../assets/css/app.css';

injectTapEventPlugin();

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
            <MuiThemeProvider>
                <div className={styles.html}>
                    <h1 > React TODOs App </h1>
                    <CreateTodo createTask={this.createTask.bind(this)} />
                    <TodosList
                        todos={this.state.todos}
                        toggleTask={this.toggleTask.bind(this)}
                        saveTask={this.saveTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)} />
                </div>
            </MuiThemeProvider>
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

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;

        this.setState({
            todos: this.state.todos
        });
    }

    deleteTask(task) {
        _.remove(this.state.todos, todo => todo.task === task);
        this.setState({ todos: this.state.todos });
    }
}

export default App;