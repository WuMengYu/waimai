import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup, closeSignupForm } from '../redux/actions/signupFormActions.js'
import { withRouter } from 'react-router-dom'

class signUp extends React.Component{
  constructor(){
    super();
    this.signup = this.signup.bind(this)
  }
  signup(e) {
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
    }
    this.props.signup(data, this.props.history)
  }
  render(){

    return(
      <div style={{width:'100%'}}>
        <div className="header" style={{width:'100%',height:'68px',borderBottom:'2px solid #FFD705'}}>
            <img src={require('../images/logo.jpg')} style={{maxWidth:'90%',position:'absolute',top:'5px',left:'3px'}}/>
        </div>
        <form style={{padding:'18px'}} className='form' onSubmit={this.signup}>
          <div>
            <label style={{fontSize:'1rem'}}>账号</label><br/>
            <input style={{width:'240px',height:'34px'}} ref={input => this.userName = input} type="text" ref={input => this.passWord = input} />
          </div><br/>
           {/*<button style={{margin:'20px 52px',fontSize:'16px'}}>免费获取短信动态码</button><br/>*/}
          <div>
            <label style={{fontSize:'1rem'}}>密码</label><br/>
            <input type="password" style={{width:'240px',height:'34px'}} />
          </div><br/>
          <div>
          <label style={{fontSize:'1rem'}}>确认密码</label><br/>
          <input type="password" style={{width:'240px',height:'34px'}} />
          </div><br/>
          <input style={{width:'240px',height:'48px',marginLeft:'33px',color:'#6B450A'}} className="login" type="submit" value="同意以下协议并注册"/>
          <Link to='#' style={{float:'left',marginLeft:'33px',marginTop:'10px'}}>美团网用户协议</Link>
        </form>
        <p style={{position:'absolute',bottom:'10px',textAlign:'center',color:'rgba(0, 0, 0, 0.6)',fontSize:'14px'}}>©meituan.com  京ICP证070791号  京公网安备11010502025545号</p>
      </div>
    )
  }
}

export default signUp
