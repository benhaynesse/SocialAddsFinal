import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Import Store and Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Import Reducer
import reducer from './App/reducers'

//Create Global store for redux
const store = createStore(reducer, applyMiddleware(thunk));

//Import the App
import App from './App/App';

//Render The App, Add the store.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app"));