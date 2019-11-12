import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';
import TodoForm from '../containers/TodoForm.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(id) {
        this.props.removeTodo(id);
    }

    handleSubmit(val) {
        this.props.addTodo(val);
    }
    
    render() {
        return (
            <section className={style.todolist}>
                {this.props.todoList.map(todo =>  <Todo key={todo.id} {...todo} onClick={() => this.handleClick(todo.id)} />)}
                <TodoForm val='' onSubmit={this.handleSubmit} />
            </section>  
        )
    }
}

export default TodoList;