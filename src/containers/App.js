import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'do next task from Kodilla course',
                    nr: 1
                }, {
                id: 2,
                    text: 'cook something for dinner',
                    nr: 2
                }, {
                id: 3,
                    text: 'prepare sandwiches and clothes to work on tomorrow morning',
                    nr: 3
                }, {
                id: 4,
                    text: 'wash the dishes',
                    nr: 4
                }, {
                id: 5,
                    text: 'clean room',
                    nr: 5
                }],                 
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        todo.nr = this.state.data.length +1;
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }  

    render() {
        return (
            <div className={style.TodoApp}>
                <Title props={this.state.data.length} />
                <TodoList todoList={this.state.data} removeTodo={this.removeTodo.bind(this)} addTodo={this.addTodo.bind(this)}/>
            </div>
        );
    }        
}

export default hot(module)(App);
