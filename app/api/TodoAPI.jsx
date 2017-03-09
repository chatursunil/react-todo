const $ = require('jquery');

module.exports = {
    // setTodos: function(todos) {
    //     if ($.isArray(todos)) {
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //         return todos;
    //     }
    // },
    // getTodos: function() {
    //     const stringTodos = localStorage.getItem('todos');
    //     let todos = [];

    //     try {
    //         todos = JSON.parse(stringTodos);
    //     } catch (error) {
            
    //     }
    //     return $.isArray(todos) ? todos : [];
    // },
    filterTodos: function(todos, showCompleted, searchText) {
        let filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        })

        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            return searchText.length === 0 || todoText.indexOf(searchText.toLowerCase()) > -1;
        })

        // Sort by Completed
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};