import React, { Component } from 'react';

class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
        )
    }
}

export default TodosListHeader;