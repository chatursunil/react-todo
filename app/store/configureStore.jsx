import * as redux from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';
import thunk from 'redux-thunk';

export const configure = (initialState = {}) => {
    const reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    const store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    
    return store;
};