import React, { Component } from "react";
import TodoListTemplate from "../components/TodoListTemplate";
import TodoItemList from "../components/TodoItemList";
import Form from "../components/Form";

class Main extends Component {

    id = 3

    state = {
        input: "",
        todos: [
            { id: 0, text: " React Study 1", checked: false },
            { id: 1, text: " React Study 2", checked: true },
            { id: 2, text: " React Study 3", checked: false }
        ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        })
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter") {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }

    handlerRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        const { input, todos } = this.state;
        const { handleChange, handleCreate, handleKeyPress, handleToggle, handlerRemove } = this;
        return (
            <TodoListTemplate
                form={<Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}/>}>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handlerRemove} />
            </TodoListTemplate>
        );
    }
}

export default Main;