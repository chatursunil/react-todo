const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
    getInitialState: function() {
        return({
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                },
                {
                    id: uuid(),
                    text: 'Go running'
                },
                {
                    id: uuid(),
                    text: 'Have shower'
                }
            ]
        });
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text
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
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}></TodoSearch>
                <TodoList todos={todos}></TodoList>
                <AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
            </div>
        );
    }
});

module.exports = TodoApp;