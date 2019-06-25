import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import rootReducer from './Reducers/'

export const history = createBrowserHistory()

const initialState = {}
const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware)
)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
