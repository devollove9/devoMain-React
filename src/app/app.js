/**
 * Created by devollove9 on 2017/9/30.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReduxStore from './core/ReduxStore'
import { Provider } from 'react-redux'
import App from './component/App/App'
const store = ReduxStore( 'INIT' )
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

