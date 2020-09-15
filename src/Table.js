
import React, { Component } from 'react';
import './Table.css';
const THead = () => {
    return (
        
        <h1>Liste Todos</h1>
        
    );
}

const TBody = (props) => {

    const handleCheck = (event) => {
        props.handleCheck(event.target.checked, parseInt(event.target.getAttribute("index")))
    }

    const tableRows = props.todosData.map((todo, index) => {
        const isChecked = todo.checked ? "checked" : ""
        return (
            <tr key={index}>

                <td className={isChecked}><input type="checkbox" onChange={handleCheck} index={index} />{todo.todos}</td>

                <td>

                    <button onClick={() => props.removeTodos(index)}>Supprimer</button>

                </td>
            </tr>
        );
    });

    return (
        <tbody>{tableRows}</tbody>
    );
}



class Table extends Component {
    render() {
        const { todosData, removeTodos, deleteAllTodos, handleCheck } = this.props;


        return (
            <div>
                <table>
                    <THead />
                    <TBody todosData={todosData} removeTodos={removeTodos} handleCheck={handleCheck} />

                </table>
                <button onClick={() => deleteAllTodos()}>Supprimer tous</button>
            </div>
        );
    }
}

export default Table;
