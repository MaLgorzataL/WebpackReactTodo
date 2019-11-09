import React from 'react';
import { PropTypes } from 'prop-types';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        alert(event.target.value);
        }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' placeholder="add a new todo..."/>  
                <button type='submit'>Add to list</button>
            </form>
        );
    }
}


export default TodoForm;