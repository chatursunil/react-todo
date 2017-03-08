const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State:', store.getState());
})

store.dispatch(actions.addTodo('Feed the birds'));
store.dispatch(actions.setSearchText('bird'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
