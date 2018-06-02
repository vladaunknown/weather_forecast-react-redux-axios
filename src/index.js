import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const storeWM = applyMiddleware(promiseMiddleware())(createStore)(reducer, "null string");

render(
  <Provider store={storeWM}>
    <App />
  </Provider>,
  document.getElementById('root')
)
