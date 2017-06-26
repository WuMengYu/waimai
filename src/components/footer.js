import React from 'react';
import { Link,NavLink } from 'react-router-dom'
import '../css/iconfont.css'


class Footer extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){

    return(
      <div className="footer">
        <NavLink to='/mine' activeStyle={{color:'#ffbe3a'}}><i className="iconfont icon-shouye"></i><span>首页</span></NavLink>
        <NavLink to='/order' activeStyle={{color:'#ffbe3a'}}><i className="iconfont icon-iconfontdingdaneps"></i><span>订单</span></NavLink>
        <NavLink to='/my' activeStyle={{color:'#ffbe3a'}}><i className="iconfont icon-wode"></i><span>我的</span></NavLink>
      </div>
    )
  }
}
export default Footer
