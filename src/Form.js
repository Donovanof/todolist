import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        todos: "",
        checked: false
    };

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        
    }

    render() {
        const { Todos } = this.state;

        return (
            <form onSubmit={this.submitForm}>

                <label htmlFor="todos">Ajouter des Todos</label>
                <input type="text" name="todos" id="todos" required value={Todos} onChange={this.handleChange} />
                <input type="submit" value="Ajouter" />
            </form>
        );
    }
}

export default Form;