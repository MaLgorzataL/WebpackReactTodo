import React from 'react';
import { PropTypes } from 'prop-types';
import style from './TodoList.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
    }
    onClickClose() {
        alert('remove' +this.props.id);
    };
    render () {
        return (
            <form className={style.Todolist}>
                <h3> {this.props.id}.  {this.props.text} !!      
                <button type="button" className="close" >x</button>
                </h3>
            </form>
        )
    }
};

Todo.propTypes = {
    todo: {
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    },
};

export default Todo; 