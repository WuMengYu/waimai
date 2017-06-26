import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, closeLoginForm } from '../redux/actions/authActions'
import { withRouter } from 'react-router-dom'

class Login extends React.Component{
  constructor(){
    super();
    this.login = this.login.bind(this)
  }
  login(e) {
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
  }
    console.log(this.props.login(data, this.props.history))
  }
  render(){

    return(
      <div>
        <div style={{width:'200px',height:'100px',position:'relative'}}><img src={require('../images/logo.jpg')} style={{maxWidth:'90%',position:'absolute',top:'22px',left:'88px'}}/></div>
        <form onSubmit={this.login}>
          <div>
            <label>账号登录</label><br/>
            <div>
              <img src={require('../images/用户.png')} style={{maxWidth:'6%',position:'absolute',top:'66px',left:'46px'}}/>
              <input ref={input => this.userName = input} type="text" placeholder="手机号/用户名/邮箱" style={{textIndent:'22px'}}/>
            </div><br/>
            <div>
            <img src={require('../images/密码.png')} style={{maxWidth:'6%',position:'absolute',top:'145px',left:'46px'}}/>
              <input ref={input => this.passWord = input} type="password" placeholder="密码" style={{textIndent:'22px'}}/>
            </div>
            <input className="login" type="submit" value="登录" style={{color:'#6B450A'}}/>
          </div>
          <Link to='/signup'>免费注册</Link>
        </form>
      </div>
    )
  }
}

export default Login
