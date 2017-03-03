const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
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
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}></Todo>
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

module.exports = TodoList;