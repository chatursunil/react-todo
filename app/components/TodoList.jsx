const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
    render: function() {
        let {todos} = this.props;
        let renderTodoList = () => {
            return todos.map((todo) => {
                return(
                    <Todo key={todo.id} {...todo}></Todo>
                );
            });
        };
        return (
            <div>
                {renderTodoList()};
            </div>
        );
    }
});

module.exports = TodoList;