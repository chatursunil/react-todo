const React = require('react');
const {connect} = require('react-redux');

// const Todo = require('Todo');
import Todo from 'Todo';

export const TodoList = React.createClass({
    render: function() {
        let {todos} = this.props;
        let renderTodoList = () => {
            if (todos.length === 0) {
                return(
                    <p className="container__message">Nothing to do here.</p>
                );
            }
            return todos.map((todo) => {
                return(
                    <Todo key={todo.id} {...todo}></Todo>
                );
            });
        };
        return (
            <div>
                {renderTodoList()}
            </div>
        );
    }
});

export default connect((state) => {
    return {
        todos: state.todos
    };
})(TodoList);