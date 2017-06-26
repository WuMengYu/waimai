import React, { Component } from 'react'
import Mine from './mine'
import Order from './order'
import My from './my'

import {
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/mine" component={Mine} />
        <Route path="/order" component={Order} />
        <Route path="/my" component={My} />

      </div>
    );
  }
}

export default App
