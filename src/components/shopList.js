import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import { Link } from 'react-router-dom'

class ShopList extends React.Component{
  constructor(){
    super();
    this.state = {
      shops:[],
      id:''
    }
  }
  componentDidMount(){
    axios.get(`${Settings.host}/shops`)
    .then(res => {
      console.log(res.data.shops)
      this.setState({
        shops:res.data.shops
      })
    })
  }
  render(){
    const shopList = this.state.shops.map(shop => (
      <Link to={`/shop/${shop._id}/show`} key={shop._id} style={{position:'relative',textDecoration:'none',display:'block',width:'100%',marginBottom:'10px',backgroundColor:'#fff',color:'#444444'}}>
          <img src={require('../images/shop.jpg')} style={{maxWidth:'24%',marginLeft:'10px'}}/>
            <span style={{position:'absolute',top:'8px',left:'110px',fontSize:'15px',color:'#2f2f2f'}}>{shop.name}</span>
            <span style={{marginLeft:'10px',color:'#656565'}}>起送价15￥丨配送费￥2</span>
              <div style={{position:'absolute',top:'34px',left:'109px'}} className="stars">
                <img src={require('../images/评星.png')} style={{maxWidth:'6%'}} />
                <img src={require('../images/评星.png')} style={{maxWidth:'6%'}} />
                <img src={require('../images/评星.png')} style={{maxWidth:'6%'}} />
                <img src={require('../images/评星.png')} style={{maxWidth:'6%'}} />
                <img src={require('../images/评星.png')} style={{maxWidth:'6%'}} />
              </div>
              <span style={{position:'absolute',top:'8px',right:'25px',color:'#2f2f2f'}}>455 m</span>
              <span style={{position:'absolute',top:'27px',right:'25px',color:'#2f2f2f'}}>45 分钟</span>
              <span style={{position:'absolute',top:'47px',right:'25px',color:'#784203',backgroundColor:'#ffd600',padding:'1px 6px',borderRadius:'5px'}}>袋袋专送</span>
            </Link>

        ))
    return(
      <div className="clearfloat" style={{backgroundColor:'#f2f2f2',overflow:'auto',height:'200px'}}>
        { shopList }
      </div>
    )
  }
}
export default ShopList
