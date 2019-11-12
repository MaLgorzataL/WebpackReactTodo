import React from 'react';
import { PropTypes } from 'prop-types';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.value);
        event.preventDefault();
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder="add a new todo..." value={this.state.value} onChange={this.handleChange}/>  
                <button type='submit'>Add to list</button>
            </form>
        );
    }
}


export default TodoForm;

    