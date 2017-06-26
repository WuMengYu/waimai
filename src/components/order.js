import React from 'react';
import Footer from './footer';

class Order extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){

    return(
      <div style={{position:'relative'}}>
        <div onClick={() => {this.props.history.push('/mine')} } className="back-button"></div>
        <Footer/>
      </div>
    )
  }
}
export default Order
