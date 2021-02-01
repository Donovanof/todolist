import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        todos: []
    };

    removeTodos = (index) => {
        if (window.confirm("etes vous sur de vous?")){
        const { todos } = this.state;
            
        this.setState({
            
            todos: todos.filter((todos, i) => {
                return i !== index;
            })
        })
    }
    }

    deleteAllTodos = () => {
        if (window.confirm("etes vous sur de vous?")) {
            this.setState({
                todos: []
            })
        }
    }

    handleSubmit = (todo) => {
        this.setState({ todos: [...this.state.todos, todo] })

    }

    handleCheck = (isChecked, index) => {
        console.log(isChecked)
        console.log(typeof (index))
        this.setState({
            todos: this.state.todos.map((todo, i) => {
                if (i === index) { todo.checked = isChecked }
                return todo

            })
        })
    }

    render() {
        const { todos } = this.state;
        console.log(todos)
        return (
            <div>

                <Table
                    todosData={todos}
                    removeTodos={this.removeTodos}
                    deleteAllTodos={this.deleteAllTodos}
                    handleCheck={this.handleCheck}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;