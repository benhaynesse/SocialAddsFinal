import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Import Store and Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Import Reducer
import reducer from './App/reducers'

//Set Up Reux Debigger In browser
//Apply Middleware THUnk for async operations.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

//Import Material UI Stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

//Import the click listenner for Materilize components.
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const muiTheme = getMuiTheme(darkBaseTheme, {

    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#262228',
        textColor: '#FFF',
        primary2Color: '#FF0000',
        primary3Color: '#0000FF',
        accent1Color: '#262228',
        accent2Color: '#FF0000',
        accent3Color: '#0000FF',
        alternateTextColor: '#7BAFE4',
        canvasColor: '#ccc',
        borderColor: '#7BAFE4',
        pickerHeaderColor: '#0000FF',
        shadowColor: '#000',
    },
});

//Import the App
// import Test from './App/Test.jsx';

import App from './App/App.jsx';

//Render The App, Add the store.
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("app"));