import React, { Component } from 'react';
import Login from './components/login.js'
import signUp from './components/signUp.js'
import Home from './components/home.js'
import './css/App.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Login}  />
          <Route path='/signup' component={signUp}  />
          <Route path='/home' component={Home}  />
        </div>
      </Router>
    )
  }
}

export default App;
