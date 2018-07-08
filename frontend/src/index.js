import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

import {store} from './modules/store';
import { MyRouter } from './MyRouter';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import './style/globalStyle.css';
// import Main from './Main';

const theme = createMuiTheme({
    palette: {
        //type: 'light', // Switching the dark mode on is a single property value change.
        /* background: {
            paper: '#eeeef4',
            appBar: '#f00'
        },
        text: {
            primary: '#fff',
            icon: '#f00'
        } */
    }
    
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}> 
            <MyRouter />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
