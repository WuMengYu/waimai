import React, { Component } from 'react'
import '../css/header.css'
import { openBottomList } from '../redux/actions/viewActions'
import { connect } from 'react-redux'
import {
  withRouter
} from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div className="header">
        <div onClick={this.props.openBottomList} className="more-button"></div>
        <span className="name">萌宠APP</span>
      </div>
    )
  }
}

export default connect(null, {openBottomList})(withRouter(Header))
