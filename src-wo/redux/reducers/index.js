import { combineReducers } from 'redux'
import auth from './authReducer'
import signupForm from './signupFormReducer'

const rootReducer = combineReducers({
  auth,
  signupForm
})

export default rootReducer
