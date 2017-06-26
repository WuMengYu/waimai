import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './footer.js'
import ShopList from './shopList.js'


class Mine extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div style={{overflow:'hidden'}}>

        <div className="banner">
          <Link to='./map.js'>秦皇岛-河北
            <img src={require('../images/定位1.png')} style={{maxWidth:'8%',position:'absolute',left:'10px',top:'5px'}} />
          </Link>
          <Link to='./search' style={{position:'absolute',width:'26px',left: '340px'}}><img src={require('../images/放大镜.png')} style={{maxWidth:'72%',position:'absolute',top:'1px',right:'3px'}} /></Link>
        </div>
        <div style={{width:'100%',height:'200px'}}>
          <div className="classify" style={{width:'350px',margin:'-13px auto 0'}}>
              <Link to='/'><img src={require('../images/cat.png')}/><span>猫</span></Link>
              <Link to='/'><img src={require('../images/dog.png')}/><span>狗</span></Link>
              <Link to='/'><img src={require('../images/pig.png')}/><span>宠物猪</span></Link>
              <Link to='/'><img src={require('../images/rabbit.png')}/><span>兔子</span></Link>

              <Link to='/'><img src={require('../images/主食.png')}/><span>主食</span></Link>
              <Link to='/'><img src={require('../images/零食.png')}/><span>零食</span></Link>
              <Link to='/'><img src={require('../images/洗漱用品.png')}/><span>洗漱用品</span></Link>
              <Link to='/'><img src={require('../images/医疗.png')}/><span>医疗</span></Link>
            </div>
        </div>
        <div style={{paddingLeft:'10px',backgroundColor:'#EFEFEF'}}><p style={{fontSize:'15px',margin:'5px'}}>附近商家</p></div>
        <div><ShopList/></div>
        <Footer/>
      </div>
    )
  }
}
export default Mine
