import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';
import TodoForm from '../containers/TodoForm.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            justClicked: null,
            submitted: null
        };
    }

    handleClick(id) {
        alert('id: '+id);
    }

    handleSubmit(val) {
        alert('submitted: '+val);
    }
    
    render() {
        return (
            <section className={style.todolist}>
                {this.props.todoList.map(todo =>  <Todo key={todo.id} {...todo} onClick={() => this.handleClick(todo.id)} />)}
        
                <TodoForm onSubmit={() => this.handleSubmit(text)} />
            </section>  
        )
    }
}



export default TodoList;