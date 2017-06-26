import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){

    return(
      <div>
        <div className="banner" style={{position:'relative',width:'100%',height:'170px'}}>
          <Link to='./map' style={{position:'absolute',left:'10px',display:'inline-block',width:'180px',height: '26px',marginTop: '10px',padding: '0 5px',color: '#ffffff',fontSize: '17px',background: 'rgba(0,0,0,0.3)',borderRadius:'13px',textAlign:'center',textDecoration:'none'}}>秦皇岛市-河北省
            <img src={require('../images/定位.png')} style={{maxWidth:'8%',position:'absolute',left:'10px',top:'5px'}} />
          </Link>
          <Link to='./search'></Link>
        </div>
        <div style={{width:'100%'}}>
          <div style={{width:'350px',margin:'0 auto',marginTop:'14px'}}>
            <Link to='/' style={{margin:'20px 20px',textAlign:'center'}}><img src={require('../images/cat.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'14px 14px',textAlign:'center'}}><img src={require('../images/dog.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'24px 24px',textAlign:'center'}}><img src={require('../images/pig.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'18px 18px',textAlign:'center'}}><img src={require('../images/rabbit.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'20px 20px',textAlign:'center'}}><img src={require('../images/主食.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'14px 14px',textAlign:'center'}}><img src={require('../images/零食.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'24px 24px',textAlign:'center'}}><img src={require('../images/洗漱用品.png')} style={{maxWidth:'14%'}}/></Link>
            <Link to='/' style={{margin:'18px 18px',textAlign:'center'}}><img src={require('../images/医疗.png')} style={{maxWidth:'14%'}}/></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
