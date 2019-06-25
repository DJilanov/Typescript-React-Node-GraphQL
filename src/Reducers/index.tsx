import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import contacts from './Contacts/ContactsReducer'

const appReducer = combineReducers({
  routing: routerReducer,
  contacts
})

export default (state: any, action: any) => {
  return appReducer(state, action)
}
