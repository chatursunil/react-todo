const React = require('react');
const {connect} = require('react-redux');
const TodoAPI = require('TodoAPI');

// const Todo = require('Todo');
import Todo from 'Todo';

export const TodoList = React.createClass({
    render: function() {
        let {todos, showCompleted, searchText} = this.props;
        let renderTodoList = () => {
            if (todos.length === 0) {
                return(
                    <p className="container__message">Nothing to do here.</p>
                );
            }
            const filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (filterTodos.length === 0) {
                return (
                    <p className="container__message">Nothing to do here.</p>
                );
            } else {
                return filterTodos.map((todo) => {
                    return <Todo key={todo.id} {...todo}></Todo>
                });
            }               
        };
        return (
            <div>
                {renderTodoList()}
            </div>
        );
    }
});

export default connect((state) => {
    return state;
})(TodoList);