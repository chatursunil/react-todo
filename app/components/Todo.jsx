const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
const moment = require('moment');

export const Todo = React.createClass({
    render: function() {
        let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
        let message = 'Created'
        let timeStamp = createdAt;
        if (completed) {
            message = 'Completed'
            timeStamp = completedAt;
        } 
        const renderDate = () => {
            return `${message}: ${moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')}`;
        };
        return (
            <div className={todoClassName} onClick={() => {
                    dispatch(actions.toggleTodo(id));
                }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>              
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);
// module.exports = connect()(Todo);