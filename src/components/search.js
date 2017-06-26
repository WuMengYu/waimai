import React from 'react';

class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
      {index: 1, title: '小七宠物店', date: '2017.3.6'},
      {index: 2, title: '南笙小宠', date: '2017.3.6'},
      {index: 3, title: '不一样的美男子', date: '2017.3.6'},
      {index: 4, title: '立夏宠物', date: '2017.3.6'},
      {index: 6, title: '只宠你', date: '2017.3.6'}
    ],
    value: ''
    }
  }
  handleInput(){
  // console.log(this.input.value);
  this.setState({value: this.input.value})
}
handleClick(){
  this.setState(prevState => ({num: prevState.num + 10}))
}
  render(){
    let newDate = this.state.value ?
    this.state.data.filter( item =>
      item.title.toLowerCase().includes(this.state.value.toLowerCase())
    )
    : this.state.data
    return(
      <div style={{width:'100%',position:'relative',marginTop:'60px'}}>
        <div onClick={() => {this.props.history.push('/mine')} } className="back-button" style={{top:'-40px'}}></div>
        <div style={{width:'375px',margin:'10px auto'}}><span style={{marginLeft:'55px'}}>搜索</span><input onChange={this.handleInput.bind(this)} ref={input => this.input = input}
        style={{borderRadius:'30px',border:'1px solid #ccc',width:'200px',height:'30px',margin:'0 auto',marginLeft:'10px'}}/>
        </div>
        {
          newDate.map( item =>
            <div style={{margin: '10px',border:'1px solid #ccc',fontSize:'14px',height:'64px'}} key={item.index}>
              <img src={require('../images/tianyuan.jpg')} style={{maxWidth:'18%',float:'left',marginRight:'10px'}} />
              <p>{item.title}</p>
              <p>{item.date}</p>
            </div>
          )
        }
      </div>
    )
  }
}
export default Search
