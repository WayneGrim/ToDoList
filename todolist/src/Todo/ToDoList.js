import React, { Component } from 'react';

class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }


    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} | <button
                        onClick={this.deleteTodo.bind(this, item)}
                        className="btn btn-danger btn-sm"
                    >X</button>
                </div>
            );
        });
    }


    render() {
        return (
            <div align="center">
                <h1>My To Do List</h1>
                <form className="form-row align-items-center">
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="Add a task..."
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button
                        onClick={this.addTodo.bind(this)}
                        className="btn btn-primary btn-lg"
                    >Ajouter</button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default Todolist