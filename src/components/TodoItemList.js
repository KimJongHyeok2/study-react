import React, { Component, Fragment } from 'react';
import TodoItem from "../components/TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({id, text, checked}) => (
        <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
        />
        )
    );
    return (
        <Fragment>
            {todoList}
        </Fragment>
    );
  }
}

export default TodoItemList;