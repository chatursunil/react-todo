const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
    getInitialState: function() {
        return({
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Go running'
                },
                {
                    id: 4,
                    text: 'Have shower'
                }
            ]
        });
    },
    handleAddTodo: function(text) {
        alert('AddTodo: ' + text);
    },
    render: function() {
        let {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}></TodoList>
                <AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
            </div>
        );
    }
});

module.exports = TodoApp;