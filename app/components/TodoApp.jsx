const React = require('react');
const TodoList = require('TodoList');

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
    render: function() {
        let {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}></TodoList>
            </div>
        );
    }
});

module.exports = TodoApp;