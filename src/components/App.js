import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import BottomList from './BottomList'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Flash from './Flash'
import Search from './search.js'
import ShowShop from './showShop.js'
import '../css/App.css'
import { BrowserRouter as Router,Route } from 'react-router-dom'

import {  Provider } from 'react-redux'
import store from '../redux/store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route path='/search' component={Search}  />
            <Main />
            <SignupForm />
            <LoginForm />
            <BottomList />
            <Flash />
            <Route exact path='/shop/:id/show' component={ShowShop} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
