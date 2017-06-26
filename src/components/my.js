import React from 'react';
import Footer from './footer.js';
import { fetchUser } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class My extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  componentWillMount() {
    if (this.props.currentUser === '') {
      this.props.fetchUser()
    }
  }
  render(){

    return(
      <div style={{backgroudImage:'url(../images/fengmian.jpg)',position:'relative',marginTop:'50px'}}>
        <div style={{height:'140px',backgroundColor:'#f9f9f9'}}>
          <img src={require('../images/登录.png')} style={{maxWidth:'14%',position:'absolute',left:'160px',top:'5px'}}/>
          <div style={{position:'absolute',top:'80px',left:'138px',marginBottom:'40px'}}>欢迎您: { this.props.currentUser }</div>
        </div>
          <div className="content">
            <Link to="/">
              <img src={require('../images/收货地址.png')} style={{maxWidth:'5%',position:'absolute',left:'20px',top:'10px'}}/>
              <img src={require('../images/向右.png')} style={{maxWidth:'5%',position:'absolute',right:'8px',top:'10px'}}/>收货地址管理
            </Link>
            <Link to="/">
              <img src={require('../images/代金券.png')} style={{maxWidth:'5%',position:'absolute',left:'20px',top:'10px'}}/>商家代金券
              <img src={require('../images/向右.png')} style={{maxWidth:'5%',position:'absolute',right:'8px',top:'10px'}}/>
            </Link>
            <Link to="/">
              <img src={require('../images/意见与反馈.png')} style={{maxWidth:'5%',position:'absolute',left:'20px',top:'10px'}}/>意见与反馈
              <img src={require('../images/向右.png')} style={{maxWidth:'5%',position:'absolute',right:'8px',top:'10px'}}/>
            </Link>
            <Link to="/">
              <img src={require('../images/常见问题.png')} style={{maxWidth:'5%',position:'absolute',left:'20px',top:'10px'}}/>常见问题
              <img src={require('../images/向右.png')} style={{maxWidth:'5%',position:'absolute',right:'8px',top:'10px'}}/>
            </Link>
            <Link to="/">
              <img src={require('../images/客服电话.png')} style={{maxWidth:'5%',position:'absolute',left:'20px',top:'10px'}}/>客服电话：010-123-456
              <img src={require('../images/向右.png')} style={{maxWidth:'5%',position:'absolute',right:'8px',top:'10px'}}/>
            </Link>
          </div>
          <Footer/>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, { fetchUser })(My)
