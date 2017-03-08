const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const {Provider} = require('react-redux');

const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.subscribe(() => {
  const state = store.getState();
  console.log('New State:', state);
  TodoAPI.setTodos(state.todos);
})

const initialTodos = TodoAPI.getTodos();
// console.log('initialTodos:', initialTodos);
store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('Feed the birds'));
// store.dispatch(actions.setSearchText('bird'));
// store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp></TodoApp>
  </Provider>,
  document.getElementById('app')
);
