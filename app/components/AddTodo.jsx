const React = require('react');

const AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        let todoText = this.refs.todoText.value.trim();
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.value = '';
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="Enter todo activity"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;