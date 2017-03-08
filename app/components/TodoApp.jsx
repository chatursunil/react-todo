const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

// const TodoList = require('TodoList');
import TodoList from 'TodoList';
// const AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
    getInitialState: function() {
        return({
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        });
    },
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
           showCompleted: showCompleted,
           searchText: searchText.toLowerCase() 
        });
    },

    render: function() {
        const {todos, showCompleted, searchText} = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}></TodoSearch>
                            <TodoList></TodoList>
                            <AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;