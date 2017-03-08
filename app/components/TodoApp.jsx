const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

// const TodoList = require('TodoList');
import TodoList from 'TodoList';
// const AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
// const TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch></TodoSearch>
                            <TodoList></TodoList>
                            <AddTodo></AddTodo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;