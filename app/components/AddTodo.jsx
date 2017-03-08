const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        let todoText = this.refs.todoText.value.trim();
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            // this.props.onAddTodo(todoText);
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.value = '';
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="Enter todo activity"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);