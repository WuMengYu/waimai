import React from 'react';
import axios from 'axios'
import { Tabs } from 'antd';
import Settings from '../settings'

class ShowShop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cats:[],
      id:'',
      products:[]
    }
  }
  componentWillMount() {
    axios.get(`${Settings.host}/cats`).then(res => {
      console.log(res.data.cats)
      this.setState({
        cats: res.data.cats
      })
    })
    axios.get(`${Settings.host}/products`).then(res => {
      console.log(res.data.products)
      this.setState({
        products: res.data.products
      })
    })
  }
  render(){
    const Cats = this.state.cats.map(cat => (
        <div>{cat.name}</div>
    ))
    console.log(Cats);
    const TabPane = Tabs.TabPane
    function callback(key) {
      console.log(key)
    }
    const Products = this.state.products.map(product => (
      <div key={product._id} style={{position:'relative',borderBottom:'1px solid #ccc',marginTop:'10px'}}>
        <img src={require('../images/shop.jpg')} style={{maxWidth:'24%',marginLeft:'10px'}}/>
        <span style={{position:'absolute',top:'35px',left:'90px',fontSize:'12px',color:'#ffbe3a'}}>满20减1，满50减5</span>
        <span style={{position:'absolute',top:'8px',left:'90px',fontSize:'18px',color:'#2f2f2f'}}>{product.name}</span>
        <div  style={{position:'absolute',top:'9px',left:'200px',fontSize:'15px'}}>{product.price}￥</div>
        <div><img src={require('../images/jia.png')} style={{maxWidth:'15px',position:'absolute',right:'5px'}}/></div>
      </div>

    ))
    console.log(this.state.products);
    return(
      <div style={{marginTop:'50px'}}>
        <div onClick={() => {this.props.history.push('/mine')} } className="back-button" style={{top:'17px'}}></div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="点菜" key="1">
            <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left">
              <TabPane tab="打折" key="1">{Products}</TabPane>
              <TabPane tab="主食" key="2">{Products}</TabPane>
              <TabPane tab="拌面" key="3">{Products}</TabPane>
            </Tabs>
            <div style={{width:'100%',height:'40px',backgroundColor:'#ccc',position:'fixed',bottom:'0',marginLeft:'20px'}}></div>
          </TabPane>
          <TabPane tab="评价" key="2">

          </TabPane>
          <TabPane tab="商家" key="3">
            <div>
              <div className="detail-wrap" style={{height:'500px'}}>
                <div className="detail-region">
                  <div className="phone" style={{marginLeft:'90px',position:'relative',borderBottom:'1px solid #f0f0f0'}}>
                    <img src={require('../images/客服电话.png')} style={{maxWidth:'6%',marginLeft:'10px',marginTop:'10px'}}/>
                    <p style={{position:'absolute',top:'8px',left:'40px',fontSize:'14px'}}>15945367289</p>
                  </div>
                  <div className="address" style={{marginLeft:'90px',position:'relative',marginTop:'38px',height:'25px',borderBottom:'1px solid #f0f0f0'}}>
                    <img src={require('../images/客服电话.png')} style={{maxWidth:'6%',marginLeft:'10px',position:'absolute',top:'-16px'}}/>
                    <p style={{position:'absolute',top:'-22px',left:'40px',fontSize:'14px'}}>商家地址：河北省秦皇岛市海港区文化路138号</p>
                  </div>
                </div>
                <div className="detail-region" style={{marginLeft:'90px',position:'relative',marginTop:'20px'}}>
                  <div className="time" style={{borderBottom:'1px solid #f0f0f0'}}>
                    <img src={require('../images/客服电话.png')} style={{maxWidth:'6%',marginLeft:'10px'}}/>
                    <p style={{position:'absolute',top:'1px',left:'40px',fontSize:'14px'}}>配送时间：07:00-10:15,10:30-23:00</p>
                  </div>
                  <div className="service" style={{position:'relative',marginTop:'18px'}}>
                    <img src={require('../images/客服电话.png')} style={{maxWidth:'6%',marginLeft:'10px'}}/>
                    <p style={{position:'absolute',top:'2px',left:'40px',fontSize:'14px'}}>配送服务：由 商家 提供配送服务</p>
                  </div>
                </div>
                <div className="detail-region" style={{position:'relative',marginTop:'18px'}}>
                  <div className="pay" style={{marginTop:'26px'}}>
                    <p style={{position:'absolute',top:'-2px',left:'128px',fontSize:'14px'}}>该商家支持在线支付</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default ShowShop
