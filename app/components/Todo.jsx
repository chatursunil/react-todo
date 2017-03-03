const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
    render: function() {
        let {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <p>
                <input type="checkbox" checked={completed}/>
                {text}
                </p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;