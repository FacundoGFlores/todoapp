import _ from 'lodash';
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-items';

class TodosList extends React.Component {
    renderItems() {
        return _.map(
            this.props.todos, 
            (todo, index) => <TodosListItem key = {index} {...todo} />
        );
    }
    render() {
        return (
            <table>
                <TodosListHeader />
                <tr>
                    {this.renderItems()}
                </tr>
            </table>
        )
    }
}

export default TodosList;